import { CategoriesNav } from "@/components/navigation/categories-nav";

export default async function ContactPage() {
  return (
    <div dir="rtl" className="w-full flex flex-col items-center pr-4 md:px-4 border-t">
      <CategoriesNav />
      <div className="p-4">
        تواصل معنا عبر: 
      </div>
    </div>
  );
}
