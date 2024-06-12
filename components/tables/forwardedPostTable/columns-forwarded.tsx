"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Post } from "@prisma/client";

export const columns = (
  selectedRows: Post[],
  setSelectedRows: React.Dispatch<React.SetStateAction<Post[]>>,
): ColumnDef<Post>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => {
          const isChecked = !!value;
          table.toggleAllPageRowsSelected(isChecked);
          if (isChecked) {
            const newSelectedRows = table
              .getRowModel()
              .rows.map((row) => row.original);
            setSelectedRows(newSelectedRows);
          } else {
            setSelectedRows([]);
          }
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          const isChecked = !!value;
          const { original } = row;
          if (isChecked) {
            setSelectedRows((prev) => [...prev, original]);
          } else {
            setSelectedRows((prev) =>
              prev.filter((selectedRow) => selectedRow.id !== original.id),
            );
          }
          row.toggleSelected(isChecked);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "NAME - SURNAME",
    cell: ({ row }) => <>{`${row.original.customerName} `}</>,
    enableColumnFilter: true,
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
    accessorKey: "surveyType",
    header: "ANKET TİPİ",
  },
  {
    accessorKey: "isStatus",
    header: "STATUS",
  },
];
