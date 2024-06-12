import React from "react";
import Page from "@/components/tables/staffListTable/staffList";
import { staffGet } from "@/utils/post/staffGet";
import { my } from "@/utils/user/get";

export default async function page({ searchParams }: { searchParams: any }) {
  const session: any = await my();

  let data = await staffGet(session?.companyId);

  console.log(data);
  return (
    <>
      <Page searchParams={searchParams} allPosts={data} />
    </>
  );
}
