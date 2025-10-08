import { Toolbar } from "@mui/material";

import { WelcomeNavbar } from "@/widgets";
import { Grid, GridItem, WhiteBackground } from "@/shared/ui";

import PromoHeader from "./ui/PromoHeader/PromoHeader";
import Section from "./ui/Section/Section";
import SectionTitle from "./ui/Section/SectionTitle";
import AnswerBlock from "./ui/AnswerBlock/AnswerBlock";
import { answers } from "./constants/answers";
import InfoImageBlock from "./ui/InfoImageBlock/InfoImageBlock";
import { WhoWeAre } from "./constants/whoweare";
import { useSeoHeader } from "@/shared/hooks";

const IndexPage = () => {
  useSeoHeader({
    title: "Subtrack - the best web app to manage subscriptions",
    useTitleSuffix: false,
  });

  return (
    <>
      <WelcomeNavbar />
      <Toolbar />

      <WhiteBackground>
        <PromoHeader />

        <Section>
          <SectionTitle align="right">OUR ANSWERS</SectionTitle>
          <Grid cols={{ default: "1fr 1fr", md: "1fr" }} gap={40}>
            {answers.map((answer, index) => (
              <GridItem key={index}>
                <AnswerBlock answer={answer} />
              </GridItem>
            ))}
          </Grid>
        </Section>
        <Section>
          <SectionTitle align="left">Who we are</SectionTitle>
          <InfoImageBlock {...WhoWeAre} />
        </Section>
      </WhiteBackground>
    </>
  );
};

export default IndexPage;
