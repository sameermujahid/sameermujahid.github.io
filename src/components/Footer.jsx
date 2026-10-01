// Footer.jsx — Premium Futuristic Footer
import React from 'react';
import { FiLinkedin, FiGithub, FiHeart } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiTwitterXFill } from 'react-icons/ri';
import resumeData from '../data/resumeData';

import {
  FooterFooterEl,
  FooterDivider,
  FooterInner,
  FooterBrand,
  FooterName,
  FooterTagline,
  FooterNavRow,
  FooterNavItem,
  FooterSocialRow,
  FooterSocialBtn,
  FooterBottom
} from '../styles/styles';

// ─── Container ─────────────────────────────────────────



// ─── Top Line Glow ─────────────────────────────────────



// ─── Layout ───────────────────────────────────────────



// ─── Branding ─────────────────────────────────────────







// ─── Nav ──────────────────────────────────────────────





// ─── Socials ──────────────────────────────────────────





// ─── FooterBottom Signature ─────────────────────────────────



// ─── Data ─────────────────────────────────────────────

const SOCIAL_ICONS = {
  linkedin: <FiLinkedin />,
  github: <FiGithub />,
  instagram: <IoLogoInstagram />,
  twitter: <RiTwitterXFill />,
};

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
    <FooterFooterEl>
      <FooterDivider />

      <FooterInner>
        <FooterBrand>
          <FooterName>{resumeData.name}</FooterName>
          <FooterTagline>{resumeData.footer.tagline}</FooterTagline>
        </FooterBrand>

        <FooterNavRow>
          {resumeData.navigation.map(({ label, id }) => (
            <FooterNavItem key={id} onClick={() => scrollTo(id)}>
              {label}
            </FooterNavItem>
          ))}
        </FooterNavRow>

        <FooterSocialRow>
          {resumeData.socials.map(({ href, key, label }) => (
            <FooterSocialBtn key={label} href={href} target="_blank" rel="noopener noreferrer">
              {SOCIAL_ICONS[key]}
            </FooterSocialBtn>
          ))}
        </FooterSocialRow>
      </FooterInner>

      {/* <FooterBottom>
        Made with <FiHeart size={12} fill="currentColor" /> · {new Date().getFullYear()} · Designed & Built by Sameer
      </FooterBottom> */}
    </FooterFooterEl>
  );
};

export default Footer;



