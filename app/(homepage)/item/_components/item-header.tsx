export const ItemHeader = ({ item }: { item: { name: string, price: number }}) => {
  return ( 
    <div className="flex flex-col gap-2 p-4 border rounded-xl">
        <h1 className="inline text-xl font-medium">{item.name}</h1>
        <p className="text-primary text-xl">{item.price} {" "} ج.م</p>
    </div>
  )
}