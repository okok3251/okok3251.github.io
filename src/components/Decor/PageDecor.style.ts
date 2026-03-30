import styled from "styled-components";

export const PaletteDock = styled.div`
  position: absolute;
  right: clamp(1.25rem, 4vw, 3rem);
  bottom: clamp(1.25rem, 4vw, 2.75rem);
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(14, 12, 30, 0.18);
  backdrop-filter: blur(14px);

  @media (max-width: 900px) {
    position: static;
    width: fit-content;
    margin: 2.5rem auto 0;
  }
`;

export const PaletteGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
`;

export const PaletteButton = styled.button<{ $gradient: string; $active: boolean }>`
  width: 1.45rem;
  height: 1.45rem;
  padding: 0;
  border-radius: 50%;
  border: 2px solid ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.45)")};
  background: ${({ $gradient }) => $gradient};
  box-shadow: ${({ $active }) => ($active ? "0 0 0 3px rgba(255, 255, 255, 0.18)" : "none")};
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.95);
  }
`;

export const Footer = styled.footer`
  padding: 1.5rem 2rem;
  background: #2f2f2f;
  color: #f3f0f2;
`;

export const FooterInner = styled.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const FooterTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: -0.02em;
`;

export const FooterText = styled.p`
  opacity: 0.74;
`;

export const ContactList = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.55rem 1rem;
`;

export const ContactLabel = styled.dt`
  opacity: 0.55;
  font-size: 0.88rem;
`;

export const ContactValue = styled.dd`
  opacity: 0.88;
  font-size: 0.95rem;
`;

export const ContactLink = styled.a`
  opacity: 0.88;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const FooterActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  @media (max-width: 900px) {
    align-items: flex-start;
  }
`;

export const IconRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GitHubButton = styled.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
`;

export const GitHubIconShell = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(0px);
  letter-spacing: 0.8px;
  border-radius: 10px;
  transition: all 0.3s;
  border: 1px solid rgba(156, 156, 156, 0.466);
  z-index: 1;

  ${GitHubButton}:hover & {
    background-color: rgba(156, 156, 156, 0.466);
    backdrop-filter: blur(4px);
  }
`;

export const GitHubButtonBg = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #181818;
  z-index: 0;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.3s;

  ${GitHubButton}:hover & {
    transform: rotate(35deg);
    transform-origin: bottom;
  }
`;

export const GitHubIcon = styled.svg`
  width: 2.0em;
  height: 2.0em;
  fill: white;
`;

export const IconButton = styled.a`
  width: 3.2rem;
  height: 3.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  font-size: 1.3rem;
`;
