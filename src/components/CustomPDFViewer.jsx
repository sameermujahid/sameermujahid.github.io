// CustomPDFViewer.js
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

// Set the worker src
GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// Styled components
const PdfViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #3a3897;
  color: #fff;
`;

const Button = styled.button`
  background: #fff;
  color: #3a3897;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Canvas = styled.canvas`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const CustomPDFViewer = ({ pdfUrl, onClose }) => {
  const canvasRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      const pdfDocument = await getDocument(pdfUrl).promise;
      setPdf(pdfDocument);
      renderPage(pageNumber, pdfDocument);
    };

    fetchPdf();
  }, [pdfUrl, pageNumber]);

  const renderPage = async (pageNum, pdfDocument) => {
    const page = await pdfDocument.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1 });
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    await page.render(renderContext).promise;
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pdf && pageNumber < pdf.numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <PdfViewerContainer>
      <Header>
        <Button onClick={onClose}>Close</Button>
        <div>
          <Button onClick={handlePrevPage} disabled={pageNumber <= 1}>Previous</Button>
          <Button onClick={handleNextPage} disabled={pdf && pageNumber >= pdf.numPages}>Next</Button>
        </div>
      </Header>
      <Canvas ref={canvasRef} />
    </PdfViewerContainer>
  );
};

export default CustomPDFViewer;
