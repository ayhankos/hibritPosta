"use client";
import BreadCrumb from "@/components/breadcrumb-company";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import PricingCard from "@/components/ui/pricingCard";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState, useEffect } from "react";
import { Pricing } from "@/components/layout/subs-layout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const breadcrumbItems = [{ title: "Aboneliğim", link: "/dashboard/subs" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: paramsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState<any[]>([]);
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const totalUsers = 1000; // Örnek veri
  const wallet = 100;
  const pageLimit = Number(searchParams.limit) || 10;
  const pageCount = Math.ceil(totalUsers / pageLimit);

  // ------ KALAN ABONELİK HAK BİLGİLERİ BURADA ALINACAK ------
  // useEffect(() => {
  //   const fetchSubscriptionData = async () => {
  //     try {
  //       const response = await fetch("API_URL"); // API_URL, gerçek API'nizin URL'siyle değiştirilmelidir
  //       if (!response.ok) {
  //         throw new Error("Subscription data fetch işlemi başarısız oldu.");
  //       }
  //       const data = await response.json();
  //       setSubscriptionData(data);
  //     } catch (error) {
  //       console.error(
  //         "Subscription data fetch işlemi sırasında hata oluştu:",
  //         error,
  //       );
  //     }
  //   };

  //   fetchSubscriptionData();
  // }, []);

  const handleViewSubscription = async () => {
    // try {
    //   const response = await fetch("API_URL"); // API_URL, gerçek API'nizin URL'siyle değiştirilmelidir
    //   if (!response.ok) {
    //     throw new Error("Subscription data fetch işlemi başarısız oldu.");
    //   }
    //   const data = await response.json();
    //   setCurrentSubscription(data.currentSubscription);
    //   setIsOpen(true); // Modal'ı aç
    // } catch (error) {
    //   console.error("Mevcut abonelik bilgisi alınamadı:", error);
    // }
  };
  const handleBalanceTopUp = () => {};
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-center justify-between space-y-2">
          <div>
            <Heading
              title={`Aboneliğim (${totalUsers})`}
              description="Manage packets"
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Kalan Haklar</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              {subscriptionData.length > 0 ? (
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">
                      Abonelik Ayrıntıları
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Abonelikte kalan haklarınız.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    {subscriptionData.map((item: any) => (
                      <div
                        className="grid grid-cols-3 items-center gap-4"
                        key={item.id}
                      >
                        <Label htmlFor={item.id}>{item.label}</Label>
                        <span id={item.id} className="col-span-2 h-8">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </PopoverContent>
          </Popover>
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" onClick={handleViewSubscription}>
                  Mevcut Aboneliği Görüntüle
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Mevcut Abonelik</AlertDialogTitle>
                  <AlertDialogDescription>
                    {/* Mevcut abonelik bilgileri buraya gelecek */}
                    Mevcut aboneliğiniz: ... {/* Örnek bir abonelik bilgisi */}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div>
            <Button variant="outline">Bakiye Yükle</Button>
          </div>
          <div>
            <Button variant="outline">Mevcut Bakiye= {`${wallet}`}$</Button>
          </div>
        </div>
        <Separator />
        {/* <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <PricingCard
                title="Basic"
                price="20"
                features={[
                  "10 team members",
                  "1000+ components",
                  "20+ built-in pages",
                  "6 months free updates",
                  "Lifetime technical support",
                ]}
                buttonText="Buy Now"
              />
              <PricingCard
                title="Standard"
                price="30"
                features={[
                  "5 team members",
                  "200+ components",
                  "40+ built-in pages",
                  "1 year free updates",
                  "Lifetime technical support",
                ]}
                buttonText="Buy Now"
              />
              <PricingCard
                title="Premium"
                price="50"
                features={[
                  "10 team members",
                  "300+ components",
                  "60+ built-in pages",
                  "2 years free updates",
                  "Lifetime technical support",
                ]}
                buttonText="Buy Now"
              />
              <PricingCard
                title="Premium"
                price="75"
                features={[
                  "10 team members",
                  "300+ components",
                  "60+ built-in pages",
                  "2 years free updates",
                  "Lifetime technical support",
                ]}
                buttonText="Buy Now"
              />
              <PricingCard
                title="Premium"
                price="100"
                features={[
                  "10 team members",
                  "300+ components",
                  "60+ built-in pages",
                  "2 years free updates",
                  "Lifetime technical support",
                ]}
                buttonText="Buy Now"
              />
            </div>
          </TabsContent>
        </Tabs> */}
        <Pricing />
      </div>
    </ScrollArea>
  );
}
