"use client";
import { Button } from "@/components/ui/button";
import { PrismaClient, uploadFile } from "@prisma/client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import FileUpload from "../file-upload";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { formSchema } from "./multiPostFormSchema";

type PostFormValues = z.infer<typeof formSchema>;

interface PostFormProps<companyId> {
  initialData: any | null;
  companyId: unknown;
  data: uploadFile[];
}

export const MultiPostsForm: React.FC<PostFormProps<any>> = ({
  initialData,
  companyId,
  data,
}) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<any[]>(data);
  const action = initialData ? "Save changes" : "Gönder";

  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isStatus: "Bekleniyor",
      surveyType: "Anket Kağıdı",
      commitment: "null",
      brochure: "Evet",
      customerId: 1,
      date: new Date(),
      postalCode: "12345",
      adres: "Adres",
      customerName: "Müşteri Adı",
      postMessage: "Mesaj",
      // isStatus harici silinecek , test etmek amacıyla yapıldı şuanlık
    },
  });
  useEffect(() => {
    form.setValue("date", new Date());
  }, [form]);

  const handleSelectFile = (selectedValue: string) => {
    const file = files.find((file) => file.title === selectedValue);
    form.setValue("file", file.title);
  };
  const handleSelectSideType = (selectedValue: string) => {
    form.setValue("sideOption", selectedValue);
  };
  const handleSelectColorType = (selectedValue: string) => {
    form.setValue("colorOption", selectedValue);
  };
  const handleSelectEnvelopeType = (selectedValue: string) => {
    form.setValue("envelopeType", selectedValue);
  };
  const handleSelectBrochure = (selectedValue: string) => {
    form.setValue("brochure", selectedValue);
  };
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();
    const formData = { ...form.getValues(), companyId: companyId };
    console.log(formData);
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Yeni gönderi oluşturuldu.");
        // window.location.reload();
      } else {
        throw new Error("Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Gönderi oluşturma hatası:", error);
    }
  };

  return (
    <ScrollArea className="h-full">
      <div className="grid grid-cols-2 mt-5">
        {/* Toplu Gönderim */}

        <Form {...form}>
          <form onSubmit={handleFormSubmit} className="space-y-8 w-full">
            <div className="md:grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="sideOption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Taraf Seçimi</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelectSideType(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Bir taraf seçiniz." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Tek Taraflı">Tek Taraflı</SelectItem>
                        <SelectItem value="Çift Taraflı">
                          Çift Taraflı
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="colorOption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Renk Seçimi</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelectColorType(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Bir renk seçiniz." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Siyah Beyaz">Siyah Beyaz</SelectItem>
                        <SelectItem value="Renkli">Renkli</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="envelopeType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zarf Seçimi</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelectEnvelopeType(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Bir zarf tipi seçiniz." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="C6 Zarf">C6 Zarf</SelectItem>
                        <SelectItem value="C5 Zarf">C5 Zarf</SelectItem>
                        <SelectItem value="C4 Zarf">C4 Zarf</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="surveyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anket Seçimi</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelectEnvelopeType(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Bir zarf tipi seçiniz." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Anket Kağıdı">
                          Anket Kağıdı
                        </SelectItem>
                        <SelectItem value="Anket Zarfı">Anket Zarfı</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brochure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Broşür Seçimi</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelectBrochure(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Broşürlü mü?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Evet">Evet</SelectItem>
                        <SelectItem value="Hayır">Hayır</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>File Name</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          handleSelectFile(value);
                        }}
                        defaultValue={field.value ?? ""}
                      >
                        <SelectTrigger className="w-[11.25rem]">
                          <SelectValue placeholder="File Name" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {files.map((file) => (
                              <SelectItem key={file.id} value={file.title}>
                                {file.title}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Bir tarih seçin</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value || new Date()}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              style={{ marginRight: 20, minWidth: 125 }}
              disabled={loading}
              className="ml-auto"
              type="submit"
            >
              {action}
            </Button>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
};
