import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TemplateFormProps {
  onClose: () => void;
}

export default function TemplateForm({ onClose }: TemplateFormProps) {
  const [title, setTitle] = useState<string>("Template Form");
  const [selectedPaper, setSelectedPaper] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedPaperSide, setSelectedPaperSide] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [zarfTipi, setZarfTipi] = useState<string>("");
  const [zarfSize, setZarfSize] = useState<string>("");
  const [window, setwindow] = useState<string>("");
  const [windowLocation, setWindowLocation] = useState<string>("");

  const buttonValuesPaper = ["Tip 1", "Tip 2", "Tip 3", "Tip 4"];
  const buttonValuesSize = ["Boyut 1", "Boyut 2", "Boyut 3"];
  const buttonValuesPaperSide = ["Arkalı Önlü", "Tek yüz"];
  const buttonValuesColor = ["Renk 1", "Renk 2"];
  const buttonValuesZarfTipi = ["Zarf Tipi 1", "Zarf Tipi 2", "Zarf Tipi 3"];
  const buttonValuesZarfSize = [
    "Zarf Boyutu 1",
    "Zarf Boyutu 2",
    "Zarf Boyutu 3",
  ];
  const buttonValuesWindow = ["Pencereli", "Penceresiz"];
  const buttonValuesWindowLocation = ["1", "2", "3", "4"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      selectedPaper,
      selectedPaperSide,
      selectedSize,
      selectedColor,
      zarfSize,
      zarfTipi,
      window,
      title,
      windowLocation,
    };

    console.log(formData);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="max-w-screen-lg max-h-screen">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="mb-4 md:col-span-3 w-full">
            <Label htmlFor="title">Title:</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <Select
            value={selectedPaper || undefined}
            onValueChange={(value) => setSelectedPaper(value)}
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Kağıt Tipi" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {buttonValuesPaper.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={selectedSize || undefined}
            onValueChange={(value) => setSelectedSize(value)}
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Kağıt Boyut Tipi" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {buttonValuesSize.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={selectedPaperSide || undefined}
            onValueChange={(value) => setSelectedPaperSide(value)}
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Kağıt Arkalı Önlü Mü" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {buttonValuesPaperSide.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={selectedColor || undefined}
            onValueChange={(value) => setSelectedColor(value)}
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Renk Tipi" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {buttonValuesColor.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={zarfTipi || undefined}
            onValueChange={(value) => setZarfTipi(value)}
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Zarf Tipi" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {buttonValuesZarfTipi.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={zarfSize || undefined}
            onValueChange={(value) => setZarfSize(value)}
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Zarf Boyutu" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {buttonValuesZarfSize.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={window || undefined}
            onValueChange={(value) => setwindow(value)}
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Pencere var, yok" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {buttonValuesWindow.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={windowLocation || undefined}
            onValueChange={(value) => setWindowLocation(value)}
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Pencere Konumu" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {buttonValuesWindowLocation.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="col-span-3 flex justify-end">
            <AlertDialogAction type="submit">Create Template</AlertDialogAction>
            <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
