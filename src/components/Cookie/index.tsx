"use client";
import { MarketXColors } from "#/src/utils/Colors";
import useCookieVisibility from "#/src/utils/CookieVisibility";
import { Button, Flex, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";

const Cookie: FC = () => {
  const [showCookie, setShowCookie] = useCookieVisibility("MarketX-cookie");

  return showCookie ? (
    <Flex
      bg={MarketXColors.white}
      shadow={"lg"}
      rounded={"full"}
      padding={"8px 8px 8px 16px"}
      position={"fixed"}
      left={"50%"}
      bottom={8}
      transform={"translateX(-50%)"}
      justify={{
        base: "space-between",
        lg: "center",
      }}
      align={"center"}
      gap={8}
      w={{
        base: "90%",
        md: "75%",
        lg: "auto",
      }}
      zIndex={1000}
    >
      <Text color={MarketXColors.grey} fontSize={"small"}>
        This website uses cookies to enhance your experience.
      </Text>
      <Button
        rounded={"full"}
        fontSize={"small"}
        size={"sm"}
        bg={MarketXColors.black}
        color={MarketXColors.white}
        _hover={{
          opacity: 0.8,
        }}
        px={5}
        onClick={() => {
          localStorage.setItem("MarketX-cookie", "true");
          setShowCookie(false);
        }}
      >
        Accept
      </Button>
    </Flex>
  ) : null;
};

export default Cookie;
