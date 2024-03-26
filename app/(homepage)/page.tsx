import { CategoriesNav } from "@/components/navigation/categories-nav";
// import { ClaimShopName } from "@/components/claim-shopname";
import { CategorySection } from "./_components/category-section";

export default async function Home() {
  return (
    <div className="flex flex-col items-center pr-4 md:px-4">
      <CategoriesNav />
      {/* <ClaimShopName /> */}
      <CategorySection name={"أحذية"} />
      <CategorySection name={"ملابس"} />
      <CategorySection name={"عقارات"} />
      <CategorySection name={"لابات"} />
      <CategorySection name={"هدايا"} />
      <CategorySection name={"سيارات"} />
    </div>
  );
}
