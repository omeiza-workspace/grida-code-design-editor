import styled from "@emotion/styled";
import SectionLayout from "layouts/section";
import React from "react";
import { Flex } from "theme-ui";

import Icon from "components/icon";
import LandingMainCtaButton from "components/landingpage/main-cta-button";
import LandingpageText from "components/landingpage/text";

const Slogan = () => {
  return (
    <SectionLayout
      variant="full-width"
      alignContent="center"
      backgroundColor="#000"
    >
      <Flex
        my={["120px", "300px"]}
        style={{
          zIndex: 5,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SloganText variant="h2">Focus on the core</SloganText>
        <SloganText variant="h2">
          <Icon
            name="grida_black"
            width={[32, 64]}
            height={[32, 64]}
            isVerticalMiddle
            mr={[12, 28]}
          />
          will do the rest
        </SloganText>
        <LandingMainCtaButton />
      </Flex>
    </SectionLayout>
  );
};

export default Slogan;

const SloganText = styled(LandingpageText)`
  color: #fff;
  text-align: center;
  path {
    fill: #fff;
  }
  letter-spacing: -0.03em;
`;
