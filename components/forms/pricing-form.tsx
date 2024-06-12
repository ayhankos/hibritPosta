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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Post Name must be at least 3 characters" }),
  company: z
    .string()
    .min(3, { message: "Company Name must be at least 3 characters" }),
  quantitiyStart: z
    .number()
    .min(3, { message: "Quantity Start must be at least 3" }),
  quantitiyEnd: z
    .number()
    .min(3, { message: "Quantity End must be at least 3" }),
  price: z.number().min(1, { message: "Price must be at least 1" }),
  companyId: z.string().min(1),
});

type PostFormValues = z.infer<typeof formSchema>;

interface PostFormProps<Company> {
  data: Company[];
  initialData: any | null;
}

export const CompanyPricingForm: React.FC<PostFormProps<any>> = ({
  data,
  initialData,
}) => {
  const [companies, setCompanies] = useState<any[]>(data);

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const action = initialData ? "Save changes" : "Gönder";

  const handleSelectCompany = (selectedValue: string) => {
    const selectedCompany = companies.find(
      (company) => company.name === selectedValue,
    );
    form.setValue("company", selectedCompany?.name);
    form.setValue("companyId", selectedCompany?.id);
  };

  const defaultValues = initialData
    ? initialData
    : {
        name: "",
        company: "",
        quantitiyStart: "",
        quantitiyEnd: "",
        companyId: "",
      };

  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();

    const formData = form.getValues();
    console.log(formData);
    try {
      const response = await fetch("/api/companyPricingAdd", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Yeni fiyatlandırma oluşturuldu.");
      } else {
        throw new Error("Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Fiyatlandırma oluşturma hatası:", error);
    }
  };

  return (
    <ScrollArea className="h-full">
      <Form {...form}>
        {" "}
        <form onSubmit={handleFormSubmit} className="space-y-8 w-full">
          <div className="md:grid md:grid-cols-4 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pricing Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-1/2"
                      disabled={loading}
                      placeholder="Pricing Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelectCompany(value);
                      }}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[11.25rem]">
                        <SelectValue placeholder="Company Name" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {companies.map((company) => (
                            <SelectItem key={company.id} value={company.name}>
                              {company.name}
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
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      className="w-1/2"
                      disabled={loading}
                      placeholder="Price"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <div className="my-3">
                <FormField
                  control={form.control}
                  name="quantitiyStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Posta Miktarı Aralığı</FormLabel>
                      <FormControl>
                        <Input
                          className="w-1/2"
                          disabled={loading}
                          placeholder="Miktar Aralığı - 1"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="quantitiyEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="w-1/2"
                          disabled={loading}
                          placeholder="Miktar Aralığı - 2"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <Button
            style={{ marginRight: 20, minWidth: 125 }}
            disabled={loading}
            className="ml-auto"
            type="submit"
            onClick={() => {
              toast({
                duration: 1500,
                description: "Firma oluşturuldu.",
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
