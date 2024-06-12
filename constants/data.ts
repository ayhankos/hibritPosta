import { Icons } from "@/components/icons";
import { NavItem, NavItem1, NavItem2, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Posts = {
  id: number;
  name: string;
  description: string;
  postMessage: string;
  adres: string;
  postalCode: string;
  imgUrl: string[];
  selectTemplate: string;
  selectMultiple: string;
  selectIade: string;
  isStatus: string;
};

//admin kısmı
export const navItems: NavItem[] = [
  {
    title: "Ana Sayfa",
    href: "/dashboard",
    icon: "Home",
    label: "Home",
  },
  {
    title: "Müşteri Ekle",
    href: "/dashboard/companyAdd",
    icon: "Users",
    label: "Users",
  },
  {
    title: "Müşteriler",
    href: "/dashboard/companyList",
    icon: "Users",
    label: "Users",
  },
  {
    title: "Fiyat Yönetimi",
    href: "/dashboard/pricingManagement",
    icon: "Wallet",
    label: "Wallet",
  },
  {
    title: "Fiyatlandırma",
    href: "/dashboard/pricing",
    icon: "Wallet",
    label: "Wallet",
  },

  {
    title: "Kontrol Sayfası",
    href: "/dashboard/control",
    icon: "Wallet",
    label: "Wallet",
  },
  {
    title: "Reklam Faaliyetleri",
    href: "/dashboard/advertisingActivities",
    icon: "Users",
    label: "Users",
  },
];

// firma kısmı
export const navItems2: NavItem2[] = [
  {
    title: "Ana Sayfa",
    href: "/company",
    icon: "dashboard",
    label: "Dashboard",
  },
  // {
  //   title: "Template Oluştur",
  //   href: "/company/template",
  //   icon: "dashboard",
  //   label: "Dashboard",
  // },
  {
    title: "Abonelik",
    href: "/company/subs",
    icon: "Wallet",
    label: "Wallet",
  },
  {
    title: "Posta Yükleme",
    href: "/company/posts",
    icon: "mail",
    label: "mail",
  },
  {
    title: "Yüklenen Postalar",
    href: "/company/forwardedPosts",
    icon: "mail",
    label: "mail",
  },
  {
    title: "Posta Durumu",
    href: "/company/postStatus",
    icon: "FileBarChart",
    label: "FileBarChart",
  },
  {
    title: "Posta İstatistikleri",
    href: "/company/postAnalysis",
    icon: "FileBarChart",
    label: "FileBarChart",
  },
  {
    title: "Personel Listesi",
    href: "/company/staffList",
    icon: "Users",
    label: "Users",
  },
  {
    title: "Personel Rolleri",
    href: "/company/roleEditing",
    icon: "Users",
    label: "Users",
  },
];

// baskı kısmı
export const navItems1: NavItem1[] = [
  {
    title: "Ana Sayfa",
    href: "/printCenter",
    icon: "dashboard",
    label: "Dashboard",
  },
  // {
  //   title: "Posta Basım",
  //   href: "/company/profile",
  //   icon: "Printer",
  //   label: "Printer",
  // },
  // {
  //   title: "Durum Raporlama",
  //   href: "/company/kanban",
  //   icon: "kanban",
  //   label: "kanban",
  // },
  {
    title: "Gelen Postalar",
    href: "/printCenter/incomingPosts",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Pazarlama Paneli",
    href: "/printCenter/marketingPanel",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Makineler",
    href: "/printCenter/machines",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Logs",
    href: "/printCenter/logs",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Çıkış",
    href: "/",
    icon: "login",
    label: "login",
  },
];
