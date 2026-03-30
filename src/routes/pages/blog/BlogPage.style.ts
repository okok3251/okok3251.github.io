import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Hero = styled.section`
  position: relative;
  min-height: 20rem;
  display: flex;
  align-items: flex-end;
  padding: 6.6rem 2rem 2.2rem;
  background: ${({ theme }) => theme.hero.gradient};
  color: ${({ theme }) => theme.colors.heroText};
`;

export const HeroInner = styled.div`
  width: min(100%, 1080px);
  margin: 0 auto;
`;

export const Eyebrow = styled.p`
  font-size: 0.85rem;
  opacity: 0.84;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const HeroTitle = styled.h1`
  margin-top: 0.55rem;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

export const HeroText = styled.p`
  max-width: 38rem;
  margin-top: 0.8rem;
  font-size: clamp(0.92rem, 1.1vw, 1rem);
  opacity: 0.92;
`;

export const Content = styled.section`
  padding: 3.5rem 2rem 4.5rem;
  background: #262626;
  color: #f1eef2;
`;

export const ContentInner = styled.div`
  width: min(100%, 1080px);
  margin: 0 auto;
`;

export const IntroBlock = styled.section`
  max-width: 42rem;
`;

export const IntroTitle = styled.h2`
  font-size: clamp(1.55rem, 2.4vw, 2.1rem);
  letter-spacing: -0.04em;
  line-height: 1.05;
`;

export const IntroText = styled.p`
  margin-top: 1rem;
  font-size: clamp(0.94rem, 1.08vw, 1rem);
  line-height: 1.8;
  color: rgba(241, 238, 242, 0.82);
`;

export const CardGrid = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.a<{ $accent: string }>`
  position: relative;
  overflow: hidden;
  min-height: 16rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  border-radius: 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)),
    linear-gradient(135deg, ${({ $accent }) => `${$accent}26`}, rgba(255, 255, 255, 0.03));
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;

  &::before {
    content: "";
    position: absolute;
    inset: auto -20% -35% auto;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    background: ${({ $accent }) => `${$accent}22`};
    filter: blur(18px);
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ $accent }) => `${$accent}80`};
    box-shadow: 0 24px 54px rgba(0, 0, 0, 0.32);
  }
`;

export const CardTop = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BrandMark = styled.div<{ $accent: string }>`
  width: 3.2rem;
  height: 3.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background: ${({ $accent }) => `${$accent}24`};
  color: ${({ $accent }) => $accent};
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  letter-spacing: -0.04em;
`;

export const CardLabel = styled.span<{ $accent: string }>`
  width: fit-content;
  padding: 0.42rem 0.72rem;
  border-radius: 999px;
  background: ${({ $accent }) => `${$accent}20`};
  color: ${({ $accent }) => $accent};
  font-size: 0.78rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const CardBody = styled.div`
  position: relative;
  z-index: 1;
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.2rem, 1.7vw, 1.5rem);
  letter-spacing: -0.03em;
`;

export const CardDescription = styled.p`
  margin-top: 0.8rem;
  line-height: 1.75;
  font-size: 0.95rem;
  color: rgba(241, 238, 242, 0.78);
`;

export const CardFooter = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const CardMeta = styled.span`
  color: rgba(241, 238, 242, 0.62);
  font-size: 0.82rem;
`;

export const CardArrow = styled.span`
  font-size: 1rem;
  opacity: 0.8;
  transition: transform 0.24s ease;

  ${BlogCard}:hover & {
    transform: translateX(4px);
  }
`;

export const NoteBlock = styled.section`
  margin-top: 2.4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const NoteTitle = styled.h4`
  font-size: 1rem;
  letter-spacing: -0.02em;
`;

export const NoteText = styled.p`
  margin-top: 0.8rem;
  max-width: 44rem;
  line-height: 1.8;
  color: rgba(241, 238, 242, 0.72);
`;
