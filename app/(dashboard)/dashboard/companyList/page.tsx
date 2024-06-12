import React from "react";
import CompanyList from "@/components/tables/companyListTable/companyList";
import { Company } from "@prisma/client";
import { companyGet } from "@/utils/post/companyGet";

export default async function page(searchParams: any) {
  let data: Company[] = await companyGet();
  return (
    <>
      <CompanyList searchParams={searchParams} allPosts={data} />;
    </>
  );
}
