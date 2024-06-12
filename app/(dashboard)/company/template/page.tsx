"use client";
import React, { useState } from "react";
import BreadCrumb from "@/components/breadcrumb-company";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TemplateForm from "@/components/forms/templateForm";
import ReadyTemplates from "@/components/layout/readyTemplates";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Template", link: "/dashboard/template" }];

export default function Page() {
  const [showTemplateForm, setShowTemplateForm] = useState(false);

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 ">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between ">
          <Heading
            title={`Templates`}
            description="Burada yeni template oluşturabilir, var olan templateleri kullanabilirsiniz."
          />
          <Button
            style={{ marginRight: 20, minWidth: 125 }}
            className="ml-auto"
            type="button"
            onClick={() => setShowTemplateForm(true)}
          >
            Yeni Template Oluştur
          </Button>
        </div>
        <Separator />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-muted/40">
          {/* Önceden tanımlanmış değerleri ReadyTemplates bileşenlerine iletiyoruz */}
          <ReadyTemplates
            title="Template 1"
            initialValues={{
              selectedPaper: "Tip 1",
              selectedSize: "Boyut 1",
              selectedPaperSide: "Arkalı Önlü",
              selectedColor: "Renk 1",
              zarfTipi: "Zarf Tipi 1",
              zarfSize: "Zarf Boyutu 1",
              window: "Pencereli",
            }}
          />
          <ReadyTemplates
            title="Template 2"
            initialValues={{
              selectedPaper: "Tip 2",
              selectedSize: "Boyut 2",
              selectedPaperSide: "Tek yüz",
              selectedColor: "Renk 2",
              zarfTipi: "Zarf Tipi 2",
              zarfSize: "Zarf Boyutu 2",
              window: "Penceresiz",
            }}
          />
          <ReadyTemplates
            title="Template 3"
            initialValues={{
              selectedPaper: "Tip 3",
              selectedSize: "Boyut 3",
              selectedPaperSide: "Tek yüz",
              selectedColor: "Renk 3",
              zarfTipi: "Zarf Tipi 3",
              zarfSize: "Zarf Boyutu 1",
              window: "Penceresiz",
            }}
          />
        </div>
      </div>
      {showTemplateForm && (
        <TemplateForm onClose={() => setShowTemplateForm(false)} />
      )}
    </ScrollArea>
  );
}
