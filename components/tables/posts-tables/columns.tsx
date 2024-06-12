"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Posts } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

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
    header: "NAME - SURNAME",
    cell: ({ row }) => (
      <>{`${row.original.first_name} ${row.original.last_name}`}</>
    ),
  },
  {
    // backend kısmına geçildiğinde email ismi ona göre değişebilir şuanlık sütun doluluğu için duruyor
    accessorKey: "email",
    header: "Posta Merkezi",
  },
  {
    //data sette rol değişkeni her personel için belirlenirse kimin ne rolü olduğu yazar
    accessorKey: "job",
    header: "ROLE",
  },
  {
    //data sette staff değişkeni her personel için belirlenirse kimin posta gönderdiği yazar
    accessorKey: "staff",
    header: "STAFF",
  },
  {
    //data sette staff değişkeni her personel için belirlenirse kimin posta gönderdiği yazar
    accessorKey: "date",
    header: "GÖNDERİ TARİHİ",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
