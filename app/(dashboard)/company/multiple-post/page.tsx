import React from "react";
import Page from "@/components/tables/multiPostTable/page";
import { my } from "@/utils/user/get";
import { uploadFile } from "@prisma/client";
import { uploadFileGet } from "@/utils/file/uploadFileGet";

export default async function page() {
  const session = await my();
  const companyId = session?.companyId;
  let data: uploadFile[] = await uploadFileGet();

  return (
    <>
      <Page companyId={companyId} allFiles={data} />;
    </>
  );
}
