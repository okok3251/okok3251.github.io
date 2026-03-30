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
  max-width: 40rem;
  margin-top: 0.8rem;
  font-size: clamp(0.92rem, 1.08vw, 1rem);
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

export const ProfileGrid = styled.section`
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 2rem;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const PhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 28rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.18), transparent 28%),
    linear-gradient(160deg, rgba(140, 162, 255, 0.22), rgba(255, 255, 255, 0.04) 48%, rgba(48, 48, 48, 0.7));
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.22);
`;

export const PhotoImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const PhotoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 30%, rgba(12, 12, 16, 0.44)),
    linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05) 100%);
`;

export const PhotoPlaceholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
`;

export const PhotoInitial = styled.span`
  font-size: clamp(4rem, 9vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

export const PhotoCaption = styled.p`
  margin-top: 0.75rem;
  max-width: 11rem;
  line-height: 1.5;
  color: rgba(241, 238, 242, 0.74);
`;

export const InfoCard = styled.div`
  padding: 1.8rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.18);
`;

export const Name = styled.h2`
  font-size: clamp(1.8rem, 2.6vw, 2.6rem);
  letter-spacing: -0.04em;
  line-height: 1;
`;

export const Role = styled.p`
  margin-top: 0.5rem;
  color: rgba(241, 238, 242, 0.68);
  font-size: 0.96rem;
`;

export const Summary = styled.p`
  margin-top: 1.35rem;
  max-width: 42rem;
  line-height: 1.85;
  color: rgba(241, 238, 242, 0.84);
  white-space : pre-line;
`;

export const InfoGrid = styled.dl`
  margin-top: 1.7rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem 1.2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  padding: 1rem 1.05rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const InfoLabel = styled.dt`
  font-size: 0.8rem;
  color: rgba(241, 238, 242, 0.52);
`;

export const InfoValue = styled.dd`
  margin-top: 0.5rem;
  font-size: 0.98rem;
  color: rgba(241, 238, 242, 0.92);
`;

export const SectionStack = styled.section`
  margin-top: 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const DetailSection = styled.article`
  padding: 1.45rem 1.5rem;
  border-radius: 1.35rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
`;

export const DetailTitle = styled.h3`
  font-size: 1.08rem;
  letter-spacing: -0.02em;
`;

export const DetailText = styled.p`
  margin-top: 0.85rem;
  line-height: 1.85;
  color: rgba(241, 238, 242, 0.78);
`;

export const Timeline = styled.div<{ $compact?: boolean }>`
  margin-top: ${({ $compact }) => ($compact ? "0.85rem" : "1.15rem")};
`;

export const TimelineItem = styled.article<{ $compact?: boolean }>`
  padding-bottom: ${({ $compact }) => ($compact ? "0.7rem" : "2.4rem")};

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineMarker = styled.span`
  display: none;
`;

export const TimelineContent = styled.div`
  min-width: 0;
`;

export const TimelineHeading = styled.h4`
  font-size: clamp(1.02rem, 1.5vw, 1.4rem);
  line-height: 1.28;
  letter-spacing: -0.04em;
  color: #f7f8fb;
`;

export const TimelinePeriod = styled.p<{ $hasTitle: boolean }>`
  display: inline-flex;
  margin-top: ${({ $hasTitle }) => ($hasTitle ? "0.7rem" : "0")};
  padding: 0.3rem 0.62rem;
  border-radius: 0.2rem;
  background: rgba(215, 228, 249, 0.92);
  color: #1f2430;
  font-size: clamp(0.68rem, 0.82vw, 0.8rem);
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  letter-spacing: -0.03em;
`;

export const TimelineRole = styled.p<{ $hasLead: boolean }>`
  margin-top: ${({ $hasLead }) => ($hasLead ? "0.85rem" : "0")};
  font-size: clamp(0.94rem, 1.15vw, 1.08rem);
  line-height: 1.6;
  font-style: italic;
  color: rgba(241, 238, 242, 0.92);
`;

export const TimelineLink = styled.a`
  color: inherit;
  text-decoration: underline;
  text-decoration-color: rgba(215, 228, 249, 0.55);
  text-underline-offset: 0.16em;

  &:hover {
    color: #d7e4f9;
    text-decoration-color: #d7e4f9;
  }
`;

export const TimelinePoints = styled.ul`
  margin-top: 0.9rem;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: rgba(241, 238, 242, 0.84);
`;

export const TimelinePoint = styled.li`
  line-height: 1.6;
  font-size: clamp(0.9rem, 1vw, 0.98rem);
`;

export const SkillList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.72rem;
`;

export const SkillBadge = styled.img`
  height: 2rem;
  width: auto;
  display: block;
  border-radius: 0.45rem;
`;
