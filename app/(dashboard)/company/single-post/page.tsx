import React from "react";
import Page from "@/components/tables/singlePostTable/page";
import { my } from "@/utils/user/get";

export default async function page() {
  const session = await my();
  const companyId = session?.companyId;
  return (
    <>
      <Page companyId={companyId} />;
    </>
  );
}
