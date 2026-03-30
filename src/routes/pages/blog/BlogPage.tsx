import { HeroPalettePicker, SiteFooter } from "@/components/Decor/PageDecor";
import Layout from "@/components/Layout/Layout";
import * as S from "./BlogPage.style";

const blogCards = [
  {
    name: "Velog",
    mark: "V",
    role: "Tech Log",
    description: "배운 내용, 트러블슈팅, 구현 메모를 기록하는 공간",
    href: "https://velog.io/",
    accent: "#20c997",
    meta: "React, TypeScript, Trouble Shooting",
  },
  {
    name: "Tistory",
    mark: "T",
    role: "Archive",
    description: "조금 더 긴 글로 프로젝트 회고를 기록한 공간",
    href: "https://www.tistory.com/",
    accent: "#ff5a36",
    meta: "Retrospective, Notes, Archive",
  },
  {
    name: "Naver Blog",
    mark: "N",
    role: "Daily Notes",
    description: "가벼운 일상을 담아두는 공간",
    href: "https://section.blog.naver.com/",
    accent: "#03c75a",
    meta: "Daily, Thoughts, Sketches",
  },
  {
    name: "GitHub",
    mark: "G",
    role: "Code Archive",
    description: "프로젝트 결과물, 실제 코드 구조를 직접 확인할 수 있는 작업 아카이브",
    href: "https://github.com/okok3251",
    accent: "#c9d1d9",
    meta: "Repository, Commit, Source",
  },
  {
    name: "Spacing Out",
    mark: "S",
    role: "Quiet Space",
    description: "아무생각 없이 잠깐 멍 때리기 좋은 공간",
    href: "/spacingout",
    accent: "#7aa7ff",
    meta: "Ambient, Visual, Rest",
  },
] as const;

const BlogPage = () => {
  return (
    <Layout>
      <S.Page>
        <S.Hero>
          <S.HeroInner>
            <S.Eyebrow>BLOG</S.Eyebrow>
            <S.HeroTitle>작업 과정과 생각을 기록하는 공간</S.HeroTitle>
            <S.HeroText>기술 기록, 회고, 일상 메모를 각각 다른 결로 정리해서 보여주는 블로그 모음입니다.</S.HeroText>
          </S.HeroInner>
          <HeroPalettePicker />
        </S.Hero>

        <S.Content>
          <S.ContentInner>
            <S.IntroBlock>
              <S.IntroTitle>나의 블로그</S.IntroTitle>
              <S.IntroText>
                카드를 누르면 해당 블로그로 바로 이동할 수 있습니다.
              </S.IntroText>
            </S.IntroBlock>

            <S.CardGrid>
              {blogCards.map((card) => (
                <S.BlogCard key={card.name} href={card.href} target="_blank" rel="noreferrer" $accent={card.accent}>
                  <S.CardTop>
                    <S.BrandMark $accent={card.accent}>{card.mark}</S.BrandMark>
                    <S.CardLabel $accent={card.accent}>{card.role}</S.CardLabel>
                  </S.CardTop>

                  <S.CardBody>
                    <S.CardTitle>{card.name}</S.CardTitle>
                    <S.CardDescription>{card.description}</S.CardDescription>
                  </S.CardBody>

                  <S.CardFooter>
                    <S.CardMeta>{card.meta}</S.CardMeta>
                    <S.CardArrow>{"->"}</S.CardArrow>
                  </S.CardFooter>
                </S.BlogCard>
              ))}
            </S.CardGrid>

            <S.NoteBlock>
              <S.NoteTitle>메모</S.NoteTitle>
              <S.NoteText>
                ...
              </S.NoteText>
            </S.NoteBlock>
          </S.ContentInner>
        </S.Content>

        <SiteFooter />
      </S.Page>
    </Layout>
  );
};

export default BlogPage;
