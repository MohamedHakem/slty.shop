import { CategoriesNav } from "@/components/navigation/categories-nav";
// import { ClaimShopName } from "@/components/claim-shopname";
import { CategorySection } from "../(marketplace)/_components/category-section";
// import { currentUser } from "@/lib/auth";

export default async function Home() {
  // console.time("🚀 ~ Home ~ server ~ user")
  // const user = await currentUser()
  // console.timeEnd("🚀 ~ Home ~ server ~ user")
  
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
