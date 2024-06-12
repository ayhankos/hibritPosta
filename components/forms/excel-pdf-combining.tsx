import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import * as XLSX from "xlsx";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { ExcelUploader } from "../tables/excelUpload/excelUpload";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ExcelData {
  [key: string]: number | string;
}

interface Coordinates {
  [key: string]: { x: number; y: number };
}

export default function FileDeneme() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [excelData, setExcelData] = useState<ExcelData[]>([]);
  const [title, setTitle] = useState<string>("");

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setPdfFile(event.target.files[0]);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const processFiles = async () => {
    if (!pdfFile || excelData.length === 0) {
      alert("PDF ve Excel dosyalarını yükleyin.");
      return;
    }

    const pdfData = await pdfFile.arrayBuffer();
    const zip = new JSZip();

    for (let i = 0; i < excelData.length; i++) {
      const data = excelData[i];
      const pdfDoc = await PDFDocument.load(pdfData);
      const pdfPage = pdfDoc.getPages()[0];

      const coordinates: Coordinates = {
        customerName: { x: 177, y: 730.5 },
        surveyType: { x: 450, y: 700 },
        datee: { x: 450, y: 761 },
      };

      Object.keys(data).forEach((key) => {
        const { x, y } = coordinates[key];
        const value = data[key];

        if (typeof value === "string") {
          pdfPage.drawText(`${value}`, {
            x,
            y,
            size: 12,
            color: rgb(0, 0, 0),
          });
        } else {
          console.error("Veri boş veya geçersiz:", data);
        }
      });

      const modifiedPdfBytes = await pdfDoc.save();
      zip.file(`file_${i + 1}.pdf`, modifiedPdfBytes);
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "documents.zip");

    const formData = new FormData();
    formData.append("title", title || "Batch Processed Files");
    formData.append("content", "This is a batch of processed PDF files.");
    formData.append("file", zipBlob, "documents.zip");

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed.");
      }

      const result = await response.json();
      console.log("Upload successful:", result);
      window.location.reload();
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Dosya yükleme sırasında bir hata oluştu.");
    }
  };

  return (
    <div>
      <div className="my-5">
        <Input
          type="text"
          placeholder="İşlenecek dosyanın ismi."
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex items-center justify-between mb-3">
        <div className="grid max-w-sm items-center">
          PDF Dosyası
          <Input
            id="pdfUpload"
            type="file"
            accept="application/pdf"
            onChange={handlePdfUpload}
          />
        </div>

        <Button variant="outline" onClick={processFiles}>
          Dosyaları İşle
        </Button>
      </div>
      Excel Dosyası
      <div className="flex items-center">
        <ExcelUploader onDataLoaded={(data) => setExcelData(data)} />
      </div>
    </div>
  );
}
