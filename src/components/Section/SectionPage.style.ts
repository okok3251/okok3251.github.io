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
  width: min(100%, 960px);
  margin: 0 auto;
`;

export const Eyebrow = styled.p`
  font-size: 0.85rem;
  opacity: 0.84;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const HeroTitle = styled.h1`
  margin-top: 0.55rem;
  font-size: clamp(1.9rem, 3vw, 2.8rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

export const HeroText = styled.p`
  max-width: 30rem;
  margin-top: 0.8rem;
  font-size: clamp(0.84rem, 1.05vw, 0.94rem);
  opacity: 0.92;
`;

export const Content = styled.section`
  padding: 3.5rem 2rem 4.5rem;
  background: #262626;
  color: #f1eef2;
`;

export const ContentInner = styled.div`
  width: min(100%, 960px);
  margin: 0 auto;
`;

export const IntroBlock = styled.section`
  max-width: 48rem;
`;

export const IntroTitle = styled.h2`
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  letter-spacing: -0.04em;
  line-height: 1.05;
`;

export const IntroText = styled.p`
  margin-top: 1.4rem;
  font-size: clamp(0.96rem, 1.15vw, 1.05rem);
  line-height: 1.85;
  color: rgba(241, 238, 242, 0.86);
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 2.4rem 0 2.2rem;
  background: rgba(255, 255, 255, 0.08);
`;

export const SectionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 48rem;
`;

export const SectionBlock = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const SectionTitle = styled.h3`
  font-size: clamp(1.2rem, 1.6vw, 1.55rem);
  letter-spacing: -0.03em;
`;

export const SectionText = styled.p`
  font-size: clamp(0.9rem, 1vw, 0.98rem);
  line-height: 1.82;
  color: rgba(241, 238, 242, 0.78);
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
`;

export const Tag = styled.span`
  padding: 0.48rem 0.82rem;
  border-radius: 999px;
  background: rgba(122, 86, 255, 0.12);
  color: #9f7cff;
  font-size: 0.82rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;
