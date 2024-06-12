"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Post } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

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
    accessorKey: "customerName",
    header: "NAME - SURNAME",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("customerName")}</div>
    ),
  },
  {
    accessorKey: "postalCode",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Postal Code
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("postalCode")}</div>
    ),
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
