import BreadCrumb from "@/components/breadcrumb-company";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { PostsTable } from "@/components/tables/staffListTable/staff-table-staff-status";
import { columns } from "@/components/tables/staffListTable/columns-staff-status";
import { User } from "@prisma/client";

const breadcrumbItems = [{ title: "Personeller", link: "/company/staffList" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
  allPosts: User[];
};
export default function page({ searchParams, allPosts }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const email = searchParams.search || null;
  const offset = (page - 1) * pageLimit;
  const data = allPosts;
  const pageCount = Math.ceil(pageLimit);

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-center justify-between space-y-2">
          <div>
            <Heading
              title={`Personeller`}
              description="Personel listesine buradan ulaşabilirsiniz."
            />
          </div>

          <div>
            <Link
              href={"/company/userRole"}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <Plus className="mr-2 h-4 w-4" /> Yeni Personel Ekle
            </Link>
          </div>
        </div>
        <Separator />
        <PostsTable
          searchKey="email"
          pageNo={page}
          columns={columns}
          data={data}
          pageCount={pageCount}
        />
      </div>
    </ScrollArea>
  );
}
