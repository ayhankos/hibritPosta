"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Posts } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action-logs";

export const columns: ColumnDef<Posts>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "POSTAL CODE",
    cell: ({ row }) => (
      <>{`${row.original.first_name} ${row.original.last_name}`}</>
    ),
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  // gönderilen posta merkezi ismi
  {
    accessorKey: "mailCenter",
    header: "SEND-AT",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
