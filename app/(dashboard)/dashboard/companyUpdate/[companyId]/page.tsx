import BreadCrumb from "@/components/breadcrumb";
import { CompanyUpdateForm } from "@/components/forms/company-update";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function Page({ params }: { params: { companyId: number } }) {
  console.log(params.companyId);
  const breadcrumbItems = [
    { title: "Company", link: "/dashboard/company" },
    { title: "Update", link: "/dashboard/company/update" },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        <CompanyUpdateForm companyId={params.companyId} initialData={null} />
      </div>
    </ScrollArea>
  );
}
