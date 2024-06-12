"use client";
import React from "react";
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Pricing } from "@/components/layout/machines-layout";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Makineler", link: "/dashboard/pricing" }];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Makineler`}
            description="Burada makineleri görebilirsiniz.."
          />
        </div>
        <Separator />
        <Pricing />
      </div>
    </ScrollArea>
  );
}
