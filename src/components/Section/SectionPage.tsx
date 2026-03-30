import Layout from "@/components/Layout/Layout";
import { HeroPalettePicker, SiteFooter } from "@/components/Decor/PageDecor";
import * as S from "./SectionPage.style";

interface SectionPageProps {
  label: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  tags?: string[];
}

const SectionPage = ({ label, title, description, sections, tags }: SectionPageProps) => {
  return (
    <Layout>
      <S.Page>
        <S.Hero>
          <S.HeroInner>
            <S.Eyebrow>{label}</S.Eyebrow>
            <S.HeroTitle>{title}</S.HeroTitle>
            <S.HeroText>{description}</S.HeroText>
          </S.HeroInner>
          <HeroPalettePicker />
        </S.Hero>

        <S.Content>
          <S.ContentInner>
            <S.IntroBlock>
              <S.IntroTitle>{title}</S.IntroTitle>
              <S.IntroText>{description}</S.IntroText>
              {tags && tags.length > 0 ? (
                <S.TagList>
                  {tags.map((tag) => (
                    <S.Tag key={tag}>{tag}</S.Tag>
                  ))}
                </S.TagList>
              ) : null}
            </S.IntroBlock>

            <S.Divider />

            <S.SectionStack>
              {sections.map((section) => (
                <S.SectionBlock key={section.title}>
                  <S.SectionTitle>{section.title}</S.SectionTitle>
                  <S.SectionText>{section.body}</S.SectionText>
                </S.SectionBlock>
              ))}
            </S.SectionStack>
          </S.ContentInner>
        </S.Content>

        <SiteFooter />
      </S.Page>
    </Layout>
  );
};

export default SectionPage;
