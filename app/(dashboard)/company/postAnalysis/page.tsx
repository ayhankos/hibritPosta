"use client";
import React from "react";
import BreadCrumb from "@/components/breadcrumb-company";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { PostIstatistic } from "@/components/postIstatistic";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [
  { title: "Posta İstatistikleri", link: "/dashboard/Post İstatistikleri" },
];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Posta İstatistikleri`}
            description="Burada posta istatistiklerini görebilirsiniz.."
          />
        </div>
        <Separator />
        <PostIstatistic />
      </div>
    </ScrollArea>
  );
}
