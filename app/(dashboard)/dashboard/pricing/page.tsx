import React from "react";
import PricingList from "@/components/tables/pricingTable/page";
import { PricingTypes } from "@prisma/client";
import { pricingTypesGet } from "@/utils/post/getPricingTypes";

export default async function page() {
  let data = await pricingTypesGet();

  return (
    <>
      <PricingList allPosts={data} />;
    </>
  );
}
