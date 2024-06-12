"use client";
import React from "react";
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Dashboard } from "@/components/status-control";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Kontrol", link: "/dashboard/control" }];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Makine - Baskı Merkezi Kontrol`}
            description="Burada makinelerin durumunu kontrol edebilir, baskı merkezlerini görüntüleyebilir, yeni makine ekleme ve ip adresi tanımlama yapabilirsiniz."
          />
        </div>
        <Separator />
        <Dashboard />
      </div>
    </ScrollArea>
  );
}
