import React from "react";
import Page from "@/components/tables/pricingManagementTable/page";
import { Company } from "@prisma/client";
import { companyGet } from "@/utils/post/companyGet";

export default async function page(searchParams: any) {
  let data: Company[] = await companyGet();
  return (
    <>
      <Page allPosts={data} searchParams={searchParams} />;
    </>
  );
}
