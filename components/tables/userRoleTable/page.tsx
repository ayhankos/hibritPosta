import React from "react";
import BreadCrumb from "@/components/breadcrumb-company";
import { UserRoleForm } from "@/components/forms/user-role-form";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
  {
    title: "Add Role",
    link: "/company/userRole",
  },
];

type ParamsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
  data: string[];
  companyId: unknown;
};

export default async function Page({
  searchParams,
  data,
  companyId,
}: ParamsProps) {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`Add Role to User`} description="Add role." />
        </div>
        <Separator />
        <UserRoleForm initialData={data} companyId={companyId} />
      </div>
    </ScrollArea>
  );
}
