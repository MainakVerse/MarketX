import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuCode, LuLineChart, LuRocket } from "react-icons/lu";

const Development = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w={"100%"}
      mt={6}
      gap={6}
      px={6}
    >
      <ProductCard icon={LuCode} title={"SEO Efficiency Analyzer"}>
        Enhance your code's performance with SEO Efficiency Analyzer.
        Optimize for speed and increased footfall in real-time.
      </ProductCard>

      <ProductCard icon={LuLineChart} title={"Google Analytics"}>
        Check for effective usage and integration of Google Analytics.
        Linkage with GTAG and Dashboard optimization.
      </ProductCard>

      <ProductCard icon={LuRocket} title={"BackLink Optimizer"}>
        Check for effective usage and integration of Backlinks.
        Review code and improve backlink usage and redirections.
      </ProductCard>
    </Grid>
  );
};

export default Development;
