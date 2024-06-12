import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";
import PDFParser from "pdf2json";

export async function POST(req: NextRequest) {
  const formData: FormData = await req.formData();
  const uploadedFiles = formData.getAll("filepond");
  let parsedTextArray: string[] = [];
  let fileNames: string[] = [];

  if (uploadedFiles && uploadedFiles.length > 0) {
    for (const uploadedFile of uploadedFiles) {
      if (uploadedFile instanceof File) {
        const fileName = uuidv4();
        fileNames.push(fileName);

        const tempFilePath = `/tmp/${fileName}.pdf`;

        const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());

        await fs.writeFile(tempFilePath, fileBuffer);

        const pdfParser = new (PDFParser as any)(null, 1);

        pdfParser.on("pdfParser_dataError", (errData: any) =>
          console.log(errData.parserError),
        );

        pdfParser.on("pdfParser_dataReady", () => {
          console.log(pdfParser.getRawTextContent());
          parsedTextArray.push(pdfParser.getRawTextContent());
        });

        pdfParser.loadPDF(tempFilePath);
      } else {
        console.log("Uploaded file is not in the expected format.");
      }
    }
  } else {
    console.log("No files found.");
  }

  const response = new NextResponse(
    JSON.stringify({ parsedTextArray, status: "pending" }),
    {
      status: 202,
      headers: {
        "Content-Type": "application/json",
        FileNames: JSON.stringify(fileNames),
      },
    },
  );

  return response;
}
