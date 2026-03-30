import { useState } from "react";
import profilePhoto from "@/assets/profile.jpg";
import { HeroPalettePicker, SiteFooter } from "@/components/Decor/PageDecor";
import Layout from "@/components/Layout/Layout";
import * as S from "./AboutPage.style";

const profile = {
  name: "JAE YOUNG CHOI",
  role: "Junior Developer",
  photoSrc: profilePhoto,
  summary: `목표를 달성하기 위해 최선을 다하며, 문제 해결에 대한 열정과 학습 욕구가 강합니다.
            팀원들과 협력하여 실질적인 문제를 해결하는 과정에서 성취감을 느낍니다.
            앞으로 소프트웨어 개발자로서 지속적으로 성장하며 의미 있는 성과를 만들어가고자 합니다.`,
  details: [
    { label: "Birth", value: "1999.09.02" },
    { label: "Phone", value: "+82 10-2361-4880" },
    { label: "Email", value: "teemskorea1999@gmail.com" },
    { label: "Location", value: "Busan, ROK" },
  ],
  skills: [
    {
      name: "Python",
      src: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    },
    {
      name: "FastAPI",
      src: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
    },
    {
      name: "React",
      src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    },
    {
      name: "TypeScript",
      src: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      name: "JavaScript",
      src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    },
    {
      name: "HTML5",
      src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    },
    {
      name: "CSS3",
      src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    },
    {
      name: "MySQL",
      src: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "Oracle",
      src: "https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
    },
    {
      name: "Node.js",
      src: "https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white",
    },
    {
      name: "GitHub",
      src: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
    },
  ],
  experience: [
    {
      title: "대한민국 육군 제 12보병사단",
      period: "2020.12. ~ 2022.12.",
      role: "수송부사관, 운전교관",
      points: [
        "(전투/상용)차량 운용 및 정비",
        "전투차량 운전교육 담당"
      ],
    },
    {
      title: "일학습병행 SW_L5 - (주)KTE 경영지원팀",
      period: "2025.08. ~ 2026.02.",
      role: "ERP 및 챗봇 개발",
      points: ["MSSQL, LangChain, RAG, Nexacro"],
    },
    {
      title: "(주)KTE 경영지원팀 원가파트",
      period: "2026.04. ~",
      role: "",
      points: [],
    },
  ],
  education: [
    {
      title: "",
      period: "2018.03. ~ 2026.02.",
      role: "",
      points: ["B.S in Software Engineering at Dongseo University", "B.S in AI Engineering at Dongseo University (Minor)"],
    },
  ],
  certification: [
    {
      title: "",
      period: "",
      role: "- (2025.09) 정보처리기사",
      points: ["자격번호 : 25202030573R"],
    },
    {
      title: "",
      period: "",
      role: "- (2024.06) SQL 개발자",
      points: [],
    },
    {
      title:"",
      period:"",
      role : "- (2026.02) SW개발_L5_20V1",
      points: [],
    },
    {
      title:"",
      role : "- (2024.10) TOPCIT 소프트웨어 역량검정 LV.3",
      period:"",
      points: [],
    },
    {
      title:"",
      period:"",
      role : "- (2024.12) PCCE 코딩역량 인증시험 LV.3",
      points: [],
    }
  ],
  patents: [
    {
      title: "",
      period: "",
      role: '- Jaeyoung Choi and Sunyong Kim. "Reinforcement Learning-Based Control Method for Operating a Mechanical Parking Tower, and Operating System and Computer-Readable Recording Medium Using the Same", Korean Patent 10-2025-0175593',
      points: [],
    },
  ],
  domesticJournalPapers: [
    {
      title: "",
      period: "",
      role: '- Jaeyoung Choi and Sunyong Kim. "Reinforcement Learning-Based Mechanical Parking Tower Operation Algorithm" The Journal of The Korea Institute of Electronic Communication Sciences 20, no.05 (2025) : 967-974.',
      href: "https://github.com/okok3251/okok3251/blob/main/papers/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%80%E1%85%A8%E1%84%89%E1%85%B5%E1%86%A8%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%E1%84%90%E1%85%A1%E1%84%8B%E1%85%AF_%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AD%E1%86%BC_%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%AE.pdf",
      hrefLabel: "[paper]",
      points: [],
    },
  ],
} as const;

const renderTimeline = (
  items: readonly {
    title: string;
    period: string;
    role: string;
    href?: string;
    hrefLabel?: string;
    points: readonly string[];
  }[],
  options?: {
    roleOnly?: boolean;
    compact?: boolean;
  },
) => (
  <S.Timeline $compact={options?.compact}>
    {items
      .filter((item) => item.title || item.period || item.role || item.points.length)
      .map((item, index) => (
      <S.TimelineItem key={`${item.title}-${item.period}-${item.role}-${index}`} $compact={options?.compact}>
        <S.TimelineContent>
          {!options?.roleOnly && item.title ? <S.TimelineHeading>{item.title}</S.TimelineHeading> : null}
          {!options?.roleOnly && item.period ? <S.TimelinePeriod $hasTitle={Boolean(item.title)}>{item.period}</S.TimelinePeriod> : null}
          {item.role ? (
            <S.TimelineRole $hasLead={Boolean(item.title || item.period)}>
              {item.role}
              {item.href ? (
                <>
                  {" "}
                  <S.TimelineLink href={item.href} target="_blank" rel="noreferrer">
                    {item.hrefLabel ?? "[link]"}
                  </S.TimelineLink>
                </>
              ) : null}
            </S.TimelineRole>
          ) : null}
          {!options?.roleOnly && item.points.length ? (
            <S.TimelinePoints>
              {item.points.map((point) => (
                <S.TimelinePoint key={point}>{point}</S.TimelinePoint>
              ))}
            </S.TimelinePoints>
          ) : null}
        </S.TimelineContent>
      </S.TimelineItem>
    ))}
  </S.Timeline>
);

const AboutPage = () => {
  const [hasPhotoError, setHasPhotoError] = useState(false);

  return (
    <Layout>
      <S.Page>
        <S.Hero>
          <S.HeroInner>
            <S.Eyebrow>ABOUT</S.Eyebrow>
            <S.HeroTitle>저를 소개합니다.</S.HeroTitle>
            <S.HeroText>책임감 있고 열정 가득한 개발자입니다.</S.HeroText>
          </S.HeroInner>
          <HeroPalettePicker />
        </S.Hero>

        <S.Content>
          <S.ContentInner>
            <S.ProfileGrid>
              <S.PhotoCard>
                {!hasPhotoError ? (
                  <S.PhotoImage src={profile.photoSrc} alt={`${profile.name} profile`} onError={() => setHasPhotoError(true)} />
                ) : null}
                <S.PhotoOverlay />
              </S.PhotoCard>

              <S.InfoCard>
                <S.Name>{profile.name}</S.Name>
                <S.Role>{profile.role}</S.Role>
                <S.Summary>{profile.summary}</S.Summary>

                <S.InfoGrid>
                  {profile.details.map((item) => (
                    <S.InfoItem key={item.label}>
                      <S.InfoLabel>{item.label}</S.InfoLabel>
                      <S.InfoValue>{item.value}</S.InfoValue>
                    </S.InfoItem>
                  ))}
                </S.InfoGrid>
              </S.InfoCard>
            </S.ProfileGrid>

            <S.SectionStack>
              <S.DetailSection>
                <S.DetailTitle>Skills</S.DetailTitle>
                <S.SkillList>
                  {profile.skills.map((skill) => (
                    <S.SkillBadge key={skill.name} src={skill.src} alt={skill.name} />
                  ))}
                </S.SkillList>
              </S.DetailSection>

              <S.DetailSection>
                <S.DetailTitle>Work Experience</S.DetailTitle>
                {renderTimeline(profile.experience)}
              </S.DetailSection>

              <S.DetailSection>
                <S.DetailTitle>Education</S.DetailTitle>
                {renderTimeline(profile.education)}
              </S.DetailSection>

              <S.DetailSection>
                <S.DetailTitle>Certification</S.DetailTitle>
                {renderTimeline(profile.certification, { roleOnly: true, compact: true })}
              </S.DetailSection>

              <S.DetailSection>
                <S.DetailTitle>Patents</S.DetailTitle>
                {renderTimeline(profile.patents, { roleOnly: true, compact: true })}
              </S.DetailSection>

              <S.DetailSection>
                <S.DetailTitle>Domestic Journal Papers</S.DetailTitle>
                {renderTimeline(profile.domesticJournalPapers, { roleOnly: true, compact: true })}
              </S.DetailSection>
            </S.SectionStack>
          </S.ContentInner>
        </S.Content>

        <SiteFooter />
      </S.Page>
    </Layout>
  );
};

export default AboutPage;
