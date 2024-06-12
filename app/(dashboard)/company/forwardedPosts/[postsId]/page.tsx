import BreadCrumb from "@/components/breadcrumb-company";
import { PostsForm } from "@/components/forms/posts-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Posts", link: "/dashboard/posts" },
    { title: "Create", link: "/dashboard/posts/create" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
    </div>
  );
}
