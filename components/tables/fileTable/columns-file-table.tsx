"use client";
import { ColumnDef } from "@tanstack/react-table";
import { uploadFile } from "@prisma/client";

export const columns2: ColumnDef<uploadFile>[] = [
  {
    id: "select",

    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "file",
    header: "File Name",
  },
];
