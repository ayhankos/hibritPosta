import BreadCrumb from "@/components/breadcrumb";
import { CompanyForm } from "@/components/forms/company-form";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Müşteriler", link: "/dashboard/companyAdd" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Müşteri Ekle`}
            description="Burada müşteri ekleyebilirsiniz."
          />

          {/* <Link
            href={"/dashboard/posts/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Posta Yükle
          </Link> */}
        </div>
        <Separator />
        <CompanyForm initialData={null} />
      </div>
    </ScrollArea>
  );
}
