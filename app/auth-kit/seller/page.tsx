"use client";

import { seller } from "@/actions/seller";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ActiveRole } from "@prisma/client";
import { toast } from "sonner";

const SellerPage = () => {
  const onServerActionClick = () => {
    seller()
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }

        if (data.success) {
          toast.success(data.success);
        }
      })
  }
  
  const onApiRouteClick = () => {
    fetch("/api/seller")
      .then((response) => {
        if (response.ok) {
          toast.success("Allowed API Route!");
        } else {
          toast.error("Forbidden API Route!");
        }
      })
  }

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          🔑 Seller
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={ActiveRole.Seller}>
          <FormSuccess
            message="You are allowed to see this content!"
          />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Seller-only API Route
          </p>
          <Button onClick={onApiRouteClick}>
            Click to test
          </Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Seller-only Server Action
          </p>
          <Button onClick={onServerActionClick}>
            Click to test
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SellerPage;
