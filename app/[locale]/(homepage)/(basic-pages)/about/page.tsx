import { CategoriesNav } from "@/components/navigation/categories-nav";

export const revalidate = 3600 * 24
export default function AboutPage() {
  return (
    <div dir="rtl" className="flex flex-col items-center pr-4 md:px-4">
      <CategoriesNav />
      <div className="w-full p-4 border-t">
        منصة سلتي هي منصة...
      </div>
    </div>
  );
}
