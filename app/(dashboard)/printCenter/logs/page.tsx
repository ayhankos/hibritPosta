import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Posts } from "@/constants/data";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { PostsTable } from "@/components/tables/logsTable/posts-table-logs";
import { columns } from "@/components/tables/logsTable/columns-logs";

const breadcrumbItems = [{ title: "Logs", link: "/dashboard/logs" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};
export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const email = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
      (email ? `&search=${email}` : ""),
  );
  const postsRes = await res.json();

  const pageCount = Math.ceil(pageLimit);
  const posts: Posts[] = postsRes.users;
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-center justify-between space-y-2">
          <div>
            <Heading title={`Logs`} description="Manage Logs." />
          </div>
        </div>
        <Separator />
        <PostsTable
          searchKey="email"
          pageNo={page}
          columns={columns}
          data={posts}
          pageCount={pageCount}
        />
      </div>
    </ScrollArea>
  );
}
