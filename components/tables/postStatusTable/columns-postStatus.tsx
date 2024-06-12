"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Posts } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action-postStatus";
import { Post } from "@prisma/client";

export const columns: ColumnDef<Post>[] = [
  {
    id: "select",

    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customerName",
    header: "NAME - SURNAME",
  },
  {
    accessorKey: "postalCode",
    header: "POSTA KODU",
  },
  {
    accessorKey: "commitment",
    header: "İADELİ TAAHÜTLÜ",
  },

  {
    accessorKey: "isStatus",
    header: "STATUS",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
