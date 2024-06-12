"use client";
import React, { useState } from "react";
import BreadCrumb from "@/components/breadcrumb-company";
import { columns } from "@/components/tables/forwardedPostTable/columns-forwarded";
import { PostsTable } from "@/components/tables/forwardedPostTable/posts-table-forwarded";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Post } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const wallet = 100;

interface AlertDialogProps {
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{message}</p>
                  <div className="my-2">
                    <Button className="w-full" variant="outline">
                      Mevcut Bakiye = {`${wallet}`}$
                    </Button>
                  </div>

                  <div className="my-2">
                    <Button className="w-full" variant="outline">
                      Harcanacak Bakiye = {`${wallet}`}$
                    </Button>
                  </div>

                  <div className="my-2">
                    <Button className="w-full" variant="outline">
                      Kalan Bakiye = {`${wallet}`}$
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              onClick={onConfirm}
              type="submit"
              className="w-full inline-flex justify-center rounded-md  sm:ml-3 sm:w-auto sm:text-sm"
            >
              {confirmText}
            </Button>
            <Button
              variant="outline"
              onClick={onCancel}
              type="button"
              className="mt-3 w-full inline-flex justify-center sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              {cancelText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const breadcrumbItems = [
  { title: "İletilen Postalar", link: "/dashboard/forwardedPosts" },
];

type ParamsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
  allPosts: Post[];
  totalPosts: number;
};

const ForwardedPosts: React.FC<ParamsProps> = ({
  searchParams,
  totalPosts,
  allPosts,
}) => {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 12;
  const pageCount = Math.ceil(totalPosts / pageLimit);
  const offset = (page - 1) * pageLimit;
  const data = allPosts.slice(offset, offset + pageLimit);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<Post[]>([]);
  const handleSendConfirmation = () => {
    setIsDialogOpen(true);
  };

  const handleSend = async () => {
    try {
      await fetch("/api/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedRows: selectedRows.map((row) => row.id),
        }),
      });
      setSelectedRows([]);
      setIsDialogOpen(false);
      console.log(selectedRows);
      window.location.reload();
    } catch (error) {
      console.error("İstek hatası:", error);
    }
  };

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-center justify-between space-y-2">
          <Heading
            title={`Yüklenen Postalar (${totalPosts})`}
            description="Yükleme isteği gönderilen postaları burada görüntüleyebilir, posta merkezine gönderebilirsiniz."
          />

          <Button
            onClick={handleSendConfirmation}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Seçilen Postaları Gönder
          </Button>
        </div>
        <Separator />

        <PostsTable
          totalUsers={totalPosts}
          searchKey="customerName"
          pageNo={page}
          columns={columns(selectedRows, setSelectedRows)}
          data={data}
          pageCount={pageCount}
        />
      </div>

      {isDialogOpen && (
        <AlertDialog
          title="Postaları Gönder"
          message="Seçilen postaları göndermek istediğinizden emin misiniz?"
          confirmText="Gönder"
          cancelText="İptal"
          onConfirm={handleSend}
          onCancel={() => setIsDialogOpen(false)}
        />
      )}
    </ScrollArea>
  );
};
export default ForwardedPosts;
