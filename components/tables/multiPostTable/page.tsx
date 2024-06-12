"use client";
import React from "react";
import BreadCrumb from "@/components/breadcrumb-company";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MultiPostsForm } from "@/components/forms/multi-post-form";
import FileUpload from "../fileUpload/page";
import FileDeneme from "@/components/forms/excel-pdf-combining";
import { uploadFile } from "@prisma/client";

const breadcrumbItems = [
  {
    title: "Add Role",
    link: "/company/userRole",
  },
];
type paramProps = {
  companyId: unknown;
  allFiles: uploadFile[];
};

export default async function Page({ companyId, allFiles }: paramProps) {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Toplu posta gönderimi.`}
            description="Buradan toplu posta gönderebilirsiniz."
          />
        </div>

        <Separator />
        <div>
          <strong>1-Enter the name of the file to upload.</strong>
          <br />
          <strong>2-Select your Excel and PDF file.</strong>
          <br />
          <strong>3-Merge the selected files.</strong>
          <br />
          <strong>
            4-Submit the form by selecting the file you merged from the form
            section and the required form fields.
          </strong>
        </div>
        <FileDeneme />
        <Separator />
        <MultiPostsForm
          companyId={companyId}
          initialData={null}
          data={allFiles}
        />
      </div>
    </ScrollArea>
  );
}
