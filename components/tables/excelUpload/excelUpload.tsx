import { useState, ChangeEvent } from "react";
import * as XLSX from "xlsx";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface DataRow {
  [key: string]: string | number;
}

interface ExcelUploaderProps {
  onDataLoaded: (data: DataRow[]) => void;
}

export const ExcelUploader: React.FC<ExcelUploaderProps> = ({
  onDataLoaded,
}) => {
  const [data, setData] = useState<DataRow[]>([]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const binaryStr = e.target?.result;
        if (typeof binaryStr === "string") {
          const workbook = XLSX.read(binaryStr, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData: DataRow[] = XLSX.utils.sheet_to_json(sheet);
          setData(jsonData);
          onDataLoaded(jsonData);
          jsonData.map((data) => console.log(data));
        }
      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <div className="grid w-80 items-center">
        <Input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      </div>
      <div className="mt-3 rounded-md border">
        {data.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                {Object.keys(data[0]).map((key) => (
                  <TableHead className="w-36 text-center" key={key}>
                    {key}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((value, i) => (
                    <TableCell className="font-medium text-center" key={i}>
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};
