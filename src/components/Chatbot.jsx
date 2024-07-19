import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaRobot } from 'react-icons/fa';
import resumeData from './resumeData';
import leven from 'leven';

const colors = {
  richBlack: '#0d1b2aff',
  oxfordBlue: '#1b263bff',
  yinmnBlue: '#415a77ff',
  silverLakeBlue: '#778da9ff',
  platinum: '#e0e1ddff',
};

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    bottom: 5px;
    right: 5px;
    gap: 2px;
  }
`;

const ChatbotIcon = styled.div`
  background-color: ${colors.oxfordBlue};
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  color: ${colors.platinum};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 10px ${colors.platinum};

  &:hover {
    background-color: ${colors.silverLakeBlue};
    box-shadow: 0 0 25px ${colors.platinum};
    color: ${colors.richBlack};
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ChatbotWindow = styled.div`
  width: 500px;
  height: 500px;
  background: linear-gradient(145deg, ${colors.richBlack}, ${colors.oxfordBlue});
  border-radius: 15px;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-in-out;
  border: 2px solid ${colors.silverLakeBlue};

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 500px;
  }
`;

const ChatHeader = styled.div`
  background: ${colors.silverLakeBlue};
  color: ${colors.richBlack};
  padding: 10px;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.3em;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
    padding: 6px;
  }
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  color: ${colors.platinum};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  scrollbar-width: thin;
  scrollbar-color: ${colors.silverLakeBlue} ${colors.oxfordBlue};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.oxfordBlue};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.silverLakeBlue};
    border-radius: 10px;
    border: 2px solid ${colors.oxfordBlue};
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${colors.richBlack};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: ${colors.oxfordBlue};
  color: ${colors.platinum};
  outline: none;
  transition: background 0.3s, color 0.3s;

  &:focus {
    background: ${colors.richBlack};
    color: ${colors.silverLakeBlue};
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const SendButton = styled.button`
  background-color: ${colors.silverLakeBlue};
  color: ${colors.richBlack};
  border: none;
  border-radius: 8px;
  padding: 12px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${colors.richBlack};
    color: ${colors.silverLakeBlue};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9em;
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.8em;
    margin-left: 5px;
  }
`;

const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: center;
`;

const Keyword = styled.span`
  margin: 5px;
  padding: 5px 15px;
  border-radius: 20px;
  background-color: ${colors.silverLakeBlue};
  color: ${colors.richBlack};
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${colors.richBlack};
    color: ${colors.silverLakeBlue};
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 4px 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 3px 10px;
  }
`;

const TypingAnimation = styled.div`
  &::after {
    content: '...';
    animation: blink 1s step-start 0s infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const Message = styled.div`
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ sender }) => sender === 'user' ? colors.silverLakeBlue : colors.oxfordBlue};
  color: ${({ sender }) => sender === 'user' ? colors.richBlack : colors.platinum};
  margin-bottom: 10px;
  white-space: pre-wrap; /* Preserves white space and line breaks */
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isWaitingForConfirmation, setIsWaitingForConfirmation] = useState(false);
  const [suggestedWord, setSuggestedWord] = useState('');
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  const greetings = ['hi', 'hello', 'good morning', 'good afternoon', 'good evening'];

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async (messageText) => {
    if (messageText.trim() === '') return;

    const newMessages = [...messages, { text: messageText, sender: 'user' }];
    setMessages(newMessages);
    setInputText('');
    setIsTyping(true);

    setTimeout(async () => {
      let response = await generateResponse(messageText);
      setMessages([...newMessages, { text: response, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = async (userInput, isConfirmed = false) => {
    if (isConfirmed) {
      return await generateResponse(suggestedWord);
    }

    if (greetings.includes(userInput.toLowerCase())) {
      return `**Hello!** How can I assist you today?`;
    }

    const keywords = ['name', 'education', 'skills', 'projects', 'contact', 'resume', 'experience', 'internship', 'summary'];
    const matchedKeyword = keywords.find(keyword => userInput.toLowerCase().includes(keyword));

    if (matchedKeyword) {
      switch (matchedKeyword) {
        case 'name':
          return `My name is **${resumeData.name}**.`;
        case 'education':
          return formatEducation();
        case 'skills':
          return formatSkills();
        case 'projects':
          return formatProjects();
        case 'contact':
          return `You can contact me via email at **${resumeData.contact.email}** or connect with me on LinkedIn at **${resumeData.contact.linkedin}**.`;
        case 'resume':
          downloadResume();
          return "Downloading resume...";
        case 'experience':
        case 'internship':
          return formatExperience();
        case 'summary':
          return generateSummary();
        default:
          return "I'm sorry, I don't have information on that topic. Please ask something else.";
      }
    } else {
      const correctedWord = await getCorrectedWord(userInput);
      if (correctedWord !== userInput) {
        setIsWaitingForConfirmation(true);
        setSuggestedWord(correctedWord);
        return `I don't understand "${userInput}". Did you mean "${correctedWord}"?`;
      } else {
        return "I'm sorry, I don't have information on that topic. Please ask something else.";
      }
    }
  };

  const getCorrectedWord = async (word) => {
    const words = ['name', 'education', 'skills', 'projects', 'contact', 'resume', 'experience', 'internship', 'summary'];
    let closestWord = word;
    let minDistance = Infinity;

    words.forEach(w => {
      const distance = leven(word, w);
      if (distance < minDistance) {
        minDistance = distance;
        closestWord = w;
      }
    });

    return closestWord;
  };

  const formatEducation = () => {
    const { btech, intermediate, ssc } = resumeData.education;
    return (
      `Education:\n\n` +
      `1. ${btech.degree}\n` +
      `   - Year: ${btech.year}\n` +
      `   - GPA: ${btech.gpa}\n` +
      `   - University: ${btech.university}\n\n` +
      `2. ${intermediate.degree}\n` +
      `   - Year: ${intermediate.year}\n` +
      `   - College: ${intermediate.college}\n` +
      `   - Percentage: ${intermediate.percentage}\n\n` +
      `3. SSC\n` +
      `   - Year: ${ssc.year}\n` +
      `   - School: ${ssc.school}\n` +
      `   - GPA: ${ssc.gpa}`
    );
  };

  const formatSkills = () => {
    const { programming_languages, platforms, database, presentation, web_fundamentals, framework, additional_skills } = resumeData.skills;
    return (
      `Skills:\n` +
      `Programming Languages: ${programming_languages.join(', ')}\n` +
      `Platforms: ${platforms.join(', ')}\n` +
      `Database: ${database.join(', ')}\n` +
      `Presentation: ${presentation.join(', ')}\n` +
      `Web Fundamentals: ${web_fundamentals.join(', ')}\n` +
      `Framework: ${framework.join(', ')}\n` +
      `Additional Skills: ${additional_skills.join(', ')}`
    );
  };

  const formatProjects = () => {
    const projectsList = resumeData.projects.map(project => {
      return `**${project.name}**:\n${project.description}`;
    }).join('\n\n');
    return `**Projects:**\n${projectsList}`;
  };

  const formatExperience = () => {
    const experienceList = resumeData.internship_experience.map(exp => {
      return `**${exp.company}** (${exp.role}, ${exp.duration ? exp.duration : 'Intern'})\n- ${exp.responsibilities}`;
    }).join('\n\n');
    return `**Internship Experience:**\n${experienceList}`;
  };

  const generateSummary = () => {
    const { name, education, skills, projects, contact } = resumeData;
    return `**${name}** is a student with skills in **${skills.programming_languages.join(', ')}** and experience in projects like **${projects[0].name}**. Contact **${contact.email}** for more information.`;
  };

  const handleKeywordClick = (keyword) => {
    handleSendMessage(keyword);
  };

  const downloadResume = () => {
    const resumeFilePath = 'D:/portfolio/src/assets/shaik_sameer_muajhid_resume.pdf';
    window.open(resumeFilePath);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const predefinedKeywords = ['name', 'education', 'skills', 'projects', 'contact', 'resume', 'experience', 'internship', 'summary'];

  return (
    <ChatbotContainer>
      <ChatbotIcon onClick={() => setIsChatbotVisible(!isChatbotVisible)}>
        <FaRobot size={28} />
      </ChatbotIcon>
      <ChatbotWindow isVisible={isChatbotVisible}>
        <ChatHeader>Know about me</ChatHeader>
        <ChatBody ref={chatBodyRef}>
          {messages.map((message, index) => (
            <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
              <Message sender={message.sender}>
                {message.text}
              </Message>
            </div>
          ))}
          {isTyping && <TypingAnimation>Typing</TypingAnimation>}
        </ChatBody>
        <ChatInputContainer>
          <ChatInput
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSendMessage(inputText);
              }
            }}
          />
          <SendButton onClick={() => handleSendMessage(inputText)}>Send</SendButton>
        </ChatInputContainer>
        <KeywordContainer>
          {predefinedKeywords.map((keyword, index) => (
            <Keyword key={index} onClick={() => handleKeywordClick(keyword)}>{keyword}</Keyword>
          ))}
        </KeywordContainer>
      </ChatbotWindow>
    </ChatbotContainer>
  );
};

export default Chatbot;
