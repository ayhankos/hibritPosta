import React from "react";
import PostStatus from "@/components/tables/incomingPostTable/page";
import { Post, uploadFile } from "@prisma/client";
import { postStatusTrue } from "@/utils/post/getForwardedPosts";
import FileTable from "@/components/tables/fileTable/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import { uploadFileGet } from "@/utils/file/uploadFileGet";

export default async function page(searchParams: any) {
  let data: Post[] = await postStatusTrue();
  let files: uploadFile[] = await uploadFileGet();
  return (
    <ScrollArea className="h-full">
      <PostStatus searchParams={searchParams} allPosts={data} />

      <FileTable searchParams={searchParams} allFiles={files} />
    </ScrollArea>
  );
}
