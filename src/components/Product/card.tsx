import { MarketXColors } from "#/src/utils/Colors";
import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

export const ProductCard = ({ icon, title, children }: CardProps) => (
  <Flex role="group" direction={"column"} gap={2}>
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={MarketXColors.lightGrey}
      rounded={"md"}
      strokeWidth={1.5}
      transition={"all 0.25s ease"}
      _groupHover={{
        bg: MarketXColors.black,
        color: MarketXColors.white,
        shadow: "lg",
        transform: "scale(1.1)",
      }}
    />
    <Heading fontSize={"xl"}>{title}</Heading>
    <Text fontSize={"small"} color={MarketXColors.grey}>
      {children}
    </Text>
  </Flex>
);
