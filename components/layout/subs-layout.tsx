import Image from "next/image";
import Link from "next/link";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Pricing() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
              <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Ürünlerimiz</CardTitle>
                    <CardDescription>Türler ve ücretleri.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Price
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Total Sales
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Created at
                          </TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Tür 1</TableCell>
                          <TableCell>
                            <Badge variant="outline">Draft</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            $100
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            25
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-07-12 10:42 AM
                          </TableCell>
                          <TableCell>
                            {/* <Button variant="outline" className="bg-gri">
                              Bakiye Yükle
                            </Button> */}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Tür 2</TableCell>
                          <TableCell>
                            <Badge variant="outline">Active</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            $150
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            100
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-10-18 03:21 PM
                          </TableCell>
                          <TableCell>
                            {/* <Button variant="outline" className="bg-gri">
                              Bakiye Yükle
                            </Button> */}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Tür 3</TableCell>
                          <TableCell>
                            <Badge variant="outline">Active</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            $200
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            50
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-11-29 08:15 AM
                          </TableCell>
                          <TableCell>
                            {/* <Button variant="outline" className="bg-gri">
                              Bakiye Yükle
                            </Button> */}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Tür 4</TableCell>
                          <TableCell>
                            <Badge variant="secondary">Draft</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            $250
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            0
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-12-25 11:59 PM
                          </TableCell>
                          <TableCell>
                            {/* <Button variant="outline" className="bg-gri">
                              Bakiye Yükle
                            </Button> */}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Tür 5</TableCell>
                          <TableCell>
                            <Badge variant="outline">Active</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            $300
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            75
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-01-01 12:00 AM
                          </TableCell>
                          <TableCell>
                            {/* <Button variant="outline" className="bg-gri">
                              Bakiye Yükle
                            </Button> */}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <div className="text-xs text-muted-foreground">
                      Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                      products
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
