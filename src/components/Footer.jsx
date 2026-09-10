// Footer.jsx — Premium Futuristic Footer
import React from 'react';
import styled from 'styled-components';
import { FiLinkedin, FiGithub, FiHeart } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiTwitterXFill } from 'react-icons/ri';

// ─── Container ─────────────────────────────────────────

const FooterEl = styled.footer`
  position: relative;
  padding: 60px 24px 40px;
  background: ${({ theme }) => theme.bgSecondary};
  overflow: hidden;

  /* Glass gradient glow */
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.accentSubtle} 0%,
      transparent 70%
    );
    filter: blur(80px);
    opacity: 0.6;
    pointer-events: none;
  }
`;

// ─── Top Line Glow ─────────────────────────────────────

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.border};
  position: relative;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 2px;
    background: ${({ theme }) => theme.accent};
    top: -0.5px;
    left: 0;
    animation: slide 6s linear infinite;
  }

  @keyframes slide {
    0% { left: 0; }
    50% { left: calc(100% - 120px); }
    100% { left: 0; }
  }
`;

// ─── Layout ───────────────────────────────────────────

const Inner = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

// ─── Branding ─────────────────────────────────────────

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textPrimary};
`;

const Tagline = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textTertiary};
  opacity: 0.8;
`;

// ─── Nav ──────────────────────────────────────────────

const NavRow = styled.div`
  display: flex;
  gap: 24px;
  // flex-wrap: wrap;
`;

const NavItem = styled.button`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textSecondary};
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 4px 0;
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 1.5px;
    background: ${({ theme }) => theme.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  &:hover::after {
    width: 100%;
  }
`;

// ─── Socials ──────────────────────────────────────────

const SocialRow = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialBtn = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textTertiary};
  border: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(10px);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.accentSubtle};
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

// ─── Bottom Signature ─────────────────────────────────

const Bottom = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textTertiary};
  opacity: 0.7;
`;

// ─── Data ─────────────────────────────────────────────

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Work', id: 'more' },
  { label: 'Connect', id: 'connect' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/shaik-sameer-mujahid/', icon: <FiLinkedin /> },
  { href: 'https://github.com/sameermujahid', icon: <FiGithub /> },
  { href: 'https://www.instagram.com/sameer.mujahid/', icon: <IoLogoInstagram /> },
  { href: 'https://x.com/sameer__mujahid', icon: <RiTwitterXFill /> },
];

// ─── Component ────────────────────────────────────────

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth <= 768 ? 60 : 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <FooterEl>
      <Divider />

      <Inner>
        <Brand>
          <Name>SK Sameer Mujahid</Name>
          <Tagline>Building AI × Full Stack Experiences</Tagline>
        </Brand>

        <NavRow>
          {NAV_ITEMS.map(({ label, id }) => (
            <NavItem key={id} onClick={() => scrollTo(id)}>
              {label}
            </NavItem>
          ))}
        </NavRow>

        <SocialRow>
          {SOCIAL_LINKS.map(({ href, icon }, i) => (
            <SocialBtn key={i} href={href} target="_blank">
              {icon}
            </SocialBtn>
          ))}
        </SocialRow>
      </Inner>

      {/* <Bottom>
        Made with <FiHeart size={12} fill="currentColor" /> · {new Date().getFullYear()} · Designed & Built by Sameer
      </Bottom> */}
    </FooterEl>
  );
};

export default Footer;