import BreadCrumb from "@/components/breadcrumb";
import { CompanyPricingForm } from "@/components/forms/pricing-form";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Company } from "@prisma/client";

const breadcrumbItems = [
  {
    title: "Müşteri Fiyatlandırması Ekle",
    link: "/dashboard/pricingManagement",
  },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({
  searchParams,
  allPosts,
}: {
  searchParams: paramsProps;
  allPosts: Company[];
}) {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Müşteri Fiyatlandırması Ekle`}
            description="Burada müşteri fiyatlandırması ekleyebilirsiniz."
          />

          {/* <Link
            href={"/dashboard/posts/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Posta Yükle
          </Link> */}
        </div>
        <Separator />
        <CompanyPricingForm initialData={null} data={allPosts} />
      </div>
    </ScrollArea>
  );
}
