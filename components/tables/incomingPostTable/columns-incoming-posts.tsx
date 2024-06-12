"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Posts } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action-incomins-posts";
import { Post } from "@prisma/client";

export const columns: ColumnDef<Post>[] = [
  {
    id: "select",

    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "file",
    header: "Dosya Başlığı",
  },
  {
    accessorKey: "postalCode",
    header: "Posta Kodu",
  },
  {
    accessorKey: "adres",
    header: "Adres",
  },

  {
    accessorKey: "sideOption",
    header: "Taraf Tipi",
  },
  {
    accessorKey: "colorOption",
    header: "Renk Tipi",
  },
  {
    accessorKey: "envelopeType",
    header: "Zarf Tipi",
  },
  {
    accessorKey: "brochure",
    header: "Broşür",
  },
  {
    accessorKey: "surveyType",
    header: "Anket Tipi",
  },
  {
    accessorKey: "commitment",
    header: "Iade Tipi",
  },
  {
    accessorKey: "isStatus",
    header: "STATUS",
  },
];
