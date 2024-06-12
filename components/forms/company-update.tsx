"use client";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "../ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { json } from "stream/consumers";

export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Post Name must be at least 3 characters" }),
  location: z
    .string()
    .min(3, { message: "Post Name must be at least 3 characters" }),
  // .min(1, { message: "At least one image must be added." }),

  PricingTypes: z.string().default(""),
});

type PostFormValues = z.infer<typeof formSchema>;

interface CompanyUpdateFormProps {
  companyId: number;
  initialData: any | null;
}

export const CompanyUpdateForm: React.FC<CompanyUpdateFormProps> = ({
  initialData,
  companyId,
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const action = initialData ? "Save changes" : "Güncelle";

  const defaultValues = initialData
    ? initialData
    : {
        companyId: "",
        name: "",
        PricingTypes: "Bekleniyor",
        location: "",
        employees: "",
      };

  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleFormUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const formData = { ...form.getValues(), companyId };

    try {
      const response = await fetch(`/api/updateCompany`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          duration: 1500,
          description: "Firma güncellendi.",
        });
        console.log("Firma bilgileri güncellendi.");
      } else {
        throw new Error("Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Firma güncelleme hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollArea className="h-full">
      <Form {...form}>
        {" "}
        <form onSubmit={handleFormUpdate} className="space-y-8 w-full">
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firma İsmi</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Yeni Firma İsmi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lokasyon</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Yeni Firma Lokasyonu"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="PricingTypes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fiyatlandırma Tipi</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Fiyatlandırma Tipi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          <Button
            style={{ marginRight: 20, minWidth: 125 }}
            disabled={loading}
            className="ml-auto"
            type="submit"
            onClick={() => {
              toast({
                duration: 1500,
                description: "Firma güncellendi.",
              });
            }}
          >
            {action}
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
};
