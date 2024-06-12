"use client";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

export default function FileUpload() {
  return (
    <FilePond
      allowMultiple={true}
      server={{
        process: "/api/uploadPdf",
        fetch: null,
        revert: null,
      }}
    />
  );
}
