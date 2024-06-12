"use client";
import React from "react";
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Pricing } from "@/components/tables/pricingTable/pricing-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CellAction } from "./cell-action-pricing";
import { columns } from "./columns-pricing";
import { PricingTypes } from "@prisma/client";

const breadcrumbItems = [
  { title: "Fiyatlandırma", link: "/dashboard/pricing" },
];

export default function PricingList({
  allPosts,
}: {
  allPosts: PricingTypes[];
}) {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Fiyatlandırma`}
            description="Burada firmaların fiyatlandırma bilgilerini görebilirsiniz.."
          />
        </div>
        <Separator />
        <Pricing columns={columns} data={allPosts} />
      </div>
    </ScrollArea>
  );
}
