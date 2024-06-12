"use client";
import React from "react";
import { columns2 } from "@/components/tables/fileTable/columns-file-table";
import { FileTable } from "./posts-table-file-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { uploadFile } from "@prisma/client";

type paramsProps = {
  FileStatus(PostStatus: any): unknown;
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function FileStatus({
  searchParams,
  allFiles,
}: {
  searchParams: paramsProps;
  allFiles: uploadFile[];
}) {
  const page = Number(searchParams.FileStatus) || 1;
  const pageLimit = Number(searchParams.searchParams) || 10;
  const offset = (page - 1) * pageLimit;

  const FileStatus = Number(searchParams.FileStatus) || 1;
  const pageCount = Math.ceil(pageLimit);

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2"></div>
        <div>
          <strong>Dosyalar</strong>
        </div>
        <FileTable
          searchKey="file"
          pageNo={FileStatus}
          columns={columns2}
          data={allFiles}
          pageCount={pageCount}
        />
      </div>
    </ScrollArea>
  );
}
