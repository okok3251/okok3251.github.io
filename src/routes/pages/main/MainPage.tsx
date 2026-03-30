import Layout from "@/components/Layout/Layout";
import { HeroPalettePicker, SiteFooter } from "@/components/Decor/PageDecor";
import * as M from "./MainPage.style";

const MainPage = () => {
  return (
    <Layout>
      <M.Page>
        <M.Hero id="intro">
          <M.HeroInner>
            <M.HeroTitle>
              Hello, World!
            </M.HeroTitle>
            <M.HeroText>
              JAE YOUNG CHOI
            </M.HeroText>
            <M.CTAGroup>
              <M.PrimaryLink to="/about">ABOUT ME</M.PrimaryLink>
            </M.CTAGroup>
          </M.HeroInner>
          <HeroPalettePicker />
        </M.Hero>

        <SiteFooter />
      </M.Page>
    </Layout>
  );
};

export default MainPage;
