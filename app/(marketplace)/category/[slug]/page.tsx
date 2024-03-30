import Link from "next/link";
import Image from "next/image";

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = decodeURIComponent(params.slug);
  const products = [
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
  ]

  return (
    <div>
      <div dir="rtl" className="flex flex-col items-center my-4 px-8">
        <h1 className="text-4xl font-medium mt-8 mb-4 w-full">{categoryName}</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-6 w-full my-4">
          {products.map((c, i) => (
            <Link href={`/item/${i + 1}`} key={i}>
              <div className="basis-auto active:scale-95 transition-all duration-75 ease-in-out">
                <div className={`flex flex-col gap-2 items-center justify-center text-center rounded-2xl bg-[#EFEFF2] aspect-square relative overflow-hidden`}>
                  <Image
                    src={"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={c.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 25vw"
                    className="object-cover object-center hover:scale-110 duration-200 ease-in-out transition-all"
                    priority={i < 4 ? true : false}
                  />
                </div>
                <div className="p-2"><p className="text-lg">منتج رقم {i + 1}</p></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
