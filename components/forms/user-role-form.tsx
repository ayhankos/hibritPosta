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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
  username: z
    .string()
    .min(3, { message: "Post Name must be at least 3 characters" }),
  role: z
    .string()
    .min(3, { message: "Company Name must be at least 3 characters" }),
});

type PostFormValues = z.infer<typeof formSchema>;

interface PostFormProps<data, companyId> {
  initialData: any | null;
  companyId: unknown;
}

export const UserRoleForm: React.FC<PostFormProps<string, unknown>> = ({
  initialData,
  companyId,
}) => {
  const [loading, setLoading] = useState(false);
  const action = initialData ? "Save changes" : "Gönder";

  const defaultValues = initialData
    ? initialData
    : {
        username: "",
        role: "",
      };

  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();

    const formData = { ...form.getValues(), companyId: companyId };
    console.log(formData);
    try {
      const response = await fetch("/api/updateUserRole", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Rol değiştirildi.");
        window.location.reload();
      } else {
        throw new Error("Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Rol değiştirme hatası:", error);
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      disabled={loading}
                      placeholder="Enter Username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {initialData.map((role: string) => (
                            <SelectItem key={role} value={role}>
                              {role}
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

            <div></div>
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
    </ScrollArea>
  );
};
