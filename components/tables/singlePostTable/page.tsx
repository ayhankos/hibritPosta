import React from "react";
import BreadCrumb from "@/components/breadcrumb-company";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SinglePostsForm } from "@/components/forms/single-post-form";

const breadcrumbItems = [
  {
    title: "Add Role",
    link: "/company/userRole",
  },
];
type paramProps = {
  companyId: unknown;
};

export default async function Page({ companyId }: paramProps) {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Tekli Posta Gönderimi`}
            description="Buradan tek bir kişiye posta gönderebilirsiniz."
          />
        </div>
        <Separator />
        <SinglePostsForm companyId={companyId} initialData={null} />
      </div>
    </ScrollArea>
  );
}
