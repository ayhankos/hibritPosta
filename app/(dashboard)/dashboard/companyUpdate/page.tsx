import BreadCrumb from "@/components/breadcrumb";

const breadcrumbItems = [{ title: "Company", link: "/dashboard/company" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
      </div>
    </>
  );
}
