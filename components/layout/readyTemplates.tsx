import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
interface ReadyTemplatesProps {
  title: string;
  initialValues: {
    selectedPaper: string;
    selectedSize: string;
    selectedPaperSide: string;
    selectedColor: string;
    zarfTipi: string;
    zarfSize: string;
    window: string;
  };
}

const ReadyTemplates: React.FC<ReadyTemplatesProps> = ({
  title,
  initialValues,
}) => {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Button variant="outline" className="bg-gri">
          Kağıt Tipi : {initialValues.selectedPaper}
        </Button>

        <Button variant="outline" className="bg-gri">
          Kağıt Boyut Tipi : {initialValues.selectedSize}
        </Button>

        <Button variant="outline" className="bg-gri">
          Kağıt Yüzü : {initialValues.selectedPaperSide}
        </Button>

        <Button variant="outline" className="bg-gri">
          Renk Tipi : {initialValues.selectedColor}
        </Button>

        <Button variant="outline" className="bg-gri">
          Zarf Tipi : {initialValues.zarfTipi}
        </Button>

        <Button variant="outline" className="bg-gri">
          Zarf Boyutu : {initialValues.zarfSize}
        </Button>

        <Button variant="outline" className="bg-gri">
          Pencere Tipi : {initialValues.window}
        </Button>
        <div className="col-span-3 flex justify-end">
          <Button
            variant="outline"
            className="shadow-md"
            onClick={() => {
              toast({
                duration: 1500,
                description: "Template seçildi.",
              });
            }}
          >
            Template Seç
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReadyTemplates;
