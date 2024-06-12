"use client";
import React from "react";
import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/incomingPostTable/columns-incoming-posts";
import { PostsTable } from "@/components/tables/postStatusTable/posts-table-postStatus";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Post } from "@prisma/client";
const wallet = 100;

const breadcrumbItems = [
  { title: "Posta Gönderme", link: "/dashboard/postStatus" },
];

type paramsProps = {
  PostStatus(PostStatus: any): unknown;
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function PostStatus({
  searchParams,
  allPosts,
}: {
  searchParams: paramsProps;
  allPosts: Post[];
}) {
  const page = Number(searchParams.PostStatus) || 1;
  const pageLimit = Number(searchParams.searchParams) || 10;
  const offset = (page - 1) * pageLimit;

  const PostStatus = Number(searchParams.PostStatus) || 1;
  const pageCount = Math.ceil(pageLimit);

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-center justify-between space-y-2">
          <Heading
            title={`Gelen Postalar`}
            description="Burada gelen postaları görüntüleyebilirsiniz."
          />
        </div>
        <Separator />

        <PostsTable
          searchKey="postalCode"
          pageNo={PostStatus}
          columns={columns}
          data={allPosts}
          pageCount={pageCount}
        />
        <Separator />
      </div>
    </ScrollArea>
  );
}
