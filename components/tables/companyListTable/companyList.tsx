import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CompanyTable } from "@/components/tables/companyListTable/posts-table-company-list";
import { columns } from "@/components/tables/companyListTable/columns-company-list";
import { Company } from "@prisma/client";

const breadcrumbItems = [
  { title: "Müşteri Listesi", link: "/dashboard/companyList" },
];

type paramsProps = {
  companyList(companyList: any): unknown;

  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};
export default async function companyList({
  searchParams,
  allPosts,
}: {
  searchParams: paramsProps;
  allPosts: Company[];
}) {
  const page = Number(searchParams.companyList) || 1;

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-center justify-between space-y-2">
          <div>
            <Heading
              title={`Müşteri Listesi`}
              description="Müşterilerin listesine buradan bakabilirsiniz."
            />
          </div>
        </div>
        <Separator />
        <CompanyTable
          columns={columns}
          data={allPosts}
          searchKey={""}
          pageNo={0}
          pageCount={0}
        />
      </div>
    </ScrollArea>
  );
}
