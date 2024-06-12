import BreadCrumb from "@/components/breadcrumb-company";
import { PostsForm } from "@/components/forms/posts-form";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Plus } from "lucide-react";

const breadcrumbItems = [{ title: "Posts", link: "/dashboard/posts" }];

type ParamsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
  companyId: unknown;
};

export default async function PostsTable({
  searchParams,
  companyId,
}: ParamsProps) {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Postalar`}
            description="Burada yeni posta gönderebilirsiniz."
          />
        </div>
        <Separator />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Link
              style={{ width: "15rem" }}
              href={"/company/single-post"}
              className={buttonVariants({ variant: "outline" })}
            >
              Tekli Posta
            </Link>
          </div>
          <div>
            <Link
              style={{ width: "15rem" }}
              href={"/company/multiple-post"}
              className={buttonVariants({ variant: "outline" })}
            >
              Çoklu Posta
            </Link>
          </div>
          <div>
            <Link
              style={{ width: "15rem" }}
              href={"/company/commitment-post"}
              className={buttonVariants({ variant: "outline" })}
            >
              Taahütlü Posta
            </Link>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
