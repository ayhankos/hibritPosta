"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import { PricingTypes } from "@prisma/client";
import { CellAction } from "./cell-action-pricing";

export const columns: ColumnDef<PricingTypes>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          const { original } = row;
          row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Pricing Name",
    cell: ({ row }) => <>{`${row.original.name} `}</>,
  },
  {
    accessorKey: "company.name",
    header: "Company Name",
  },
  {
    accessorKey: "quantitiyStart",
    header: "Posta Miktar Aralığı - 1",
  },
  {
    accessorKey: "quantitiyEnd",
    header: "Posta Miktar Aralığı - 2",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];
