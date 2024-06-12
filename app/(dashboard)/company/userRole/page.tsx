import React from "react";
import Page from "@/components/tables/userRoleTable/page";
import { getUserRoles } from "@/utils/user/getUserRoles";
import { my } from "@/utils/user/get";

export default async function page(searchParams: any) {
  const session = await my();
  const companyId = session?.companyId;
  const data = await getUserRoles();

  return (
    <>
      <Page searchParams={searchParams} data={data} companyId={companyId} />;
    </>
  );
}
