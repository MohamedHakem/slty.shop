import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="py-8 px-4 flex flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-8">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
          <Button className="mt-4">Add Product</Button>
          {/* <div>
            Dashboard
            - get all user roles, and get the active role based on what the user choose
            from the dropdown menu, or get the highest role (seller is higher than user/marketer)
            or simply save the active role in the url ?role=seller
            - show the dashboard based on the current active role.
            use components for each dashboard, if the dashboard mostly are the same
            then add all static/similar section in the main dashboard/page.tsx
            and the different (or dynamic) sections in their own components.
            and group the role-specific sections in a component for easy import.
          </div> */}
        </div>
      </div>
    </div>
  )
}
