import React from "react";
import PostsTable from "@/components/tables/posts-tables/page";
import { my } from "@/utils/user/get";

export default async function page(searchParams: any) {
  const session = await my();
  const companyId = await session?.companyId;

  return (
    <>
      <PostsTable companyId={companyId} searchParams={searchParams} />
    </>
  );
}
