import React from "react";
import PostStatus from "@/components/tables/postStatusTable/postStatus";
import { Post } from "@prisma/client";
import { postStatusTrue } from "@/utils/post/getForwardedPosts";

export default async function page(searchParams: any) {
  let data: Post[] = await postStatusTrue();
  return (
    <>
      <PostStatus searchParams={searchParams} allPosts={data} />;
    </>
  );
}
