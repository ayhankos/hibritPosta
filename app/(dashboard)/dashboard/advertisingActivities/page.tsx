"use client";
import React, { useState } from "react";
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
  { title: "Advertising", link: "/dashboard/advertisingActivities" },
];

export default function Page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Reklam Faaliyetleri`}
            description="Reklam faaliyetlerini buradan kontrol edebilirsiniz."
          />
        </div>
        <Separator />
      </div>
    </>
  );
}
