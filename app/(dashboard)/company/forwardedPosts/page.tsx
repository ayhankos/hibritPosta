import React from "react";
import ForwardedPosts from "@/components/tables/forwardedPostTable/forwardedPosts";
import { Post } from "@prisma/client";
import { postGet } from "@/utils/post/getPosts";

export default async function page({ searchParams }: { searchParams: any }) {
  let data: Post[] = await postGet();
  return (
    <>
      <ForwardedPosts
        searchParams={searchParams}
        allPosts={data}
        totalPosts={data.length}
      />
    </>
  );
}
