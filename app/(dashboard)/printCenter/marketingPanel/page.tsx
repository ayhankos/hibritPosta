"use client";
import React, { useState } from "react";
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
  { title: "marketingPanel", link: "/dashboard/marketingPanel" },
];

export default function Page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Pazarlama Paneli`}
            description="Pazarlama panelini buradan kontrol edebilirsiniz."
          />
        </div>
        <Separator />
      </div>
    </>
  );
}
