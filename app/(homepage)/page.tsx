import { CategoriesNav } from "@/components/navigation/categories-nav";
import { CategorySection } from "../(marketplace)/_components/category-section";

export const dynamic = "force-static";
// export const revalidate = 3600
export default async function Home() {

  return (
    <div className="flex flex-col items-center px-4">
      <CategoriesNav />
      {/* <ClaimShopName /> */}
      <CategorySection name={"أحذية"} />
      <CategorySection name={"ملابس"} />
      <CategorySection name={"عقارات"} />
      {/* <CategorySection name={"لابات"} />
      <CategorySection name={"هدايا"} />
      <CategorySection name={"سيارات"} /> */}
    </div>
  );
}
