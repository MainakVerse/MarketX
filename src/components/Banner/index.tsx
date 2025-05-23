"use client";
import useBannerVisibility from "#/src/utils/BannerVisibility";
import { MarketXColors } from "#/src/utils/Colors";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";

const Banner = () => {
  const [showBanner, setShowBanner] = useBannerVisibility("MarketX-banner");

  return showBanner ? (
    <Flex
      justify={"center"}
      h={"45px"}
      bg={"#000000"}
      w="100%"
      align={"center"}
    >
      <Text
        fontSize={{
          base: "md",
          md: "lg",
        }}
        color={MarketXColors.white}
        fontWeight={700}
        mr={4}
      >
        SALE
      </Text>
      <Text
        fontSize={{
          base: "xs",
          md: "sm",
        }}
        color={MarketXColors.white}
      >
        Register and get 20% discount on checkout
      </Text>
      <Icon
        as={LuX}
        color={MarketXColors.white}
        fontSize={"lg"}
        cursor={"pointer"}
        ml={2}
        onClick={() => {
          localStorage.setItem("MarketX-banner", "true");
          setShowBanner(false);
        }}
      >
        Close
      </Icon>
    </Flex>
  ) : null;
};

export default Banner;
