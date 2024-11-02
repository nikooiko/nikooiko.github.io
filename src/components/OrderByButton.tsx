import { Button } from "@/components/ui/button";
import { CalendarArrowDown, CalendarArrowUp } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export type OrderDirection = "desc" | "asc";

export interface OrderByButtonProps {
  onOrderChange: (direction: OrderDirection) => void;
  defaultOrder?: OrderDirection;
}

export const OrderByButton: React.FC<OrderByButtonProps> = ({
  onOrderChange,
  defaultOrder = "desc",
}) => {
  const [orderDirection, setOrderDirection] =
    useState<OrderDirection>(defaultOrder);

  const handleOrderChange = (newDirection: OrderDirection) => {
    setOrderDirection(newDirection);
    onOrderChange(newDirection);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Sort by date">
          {orderDirection === "desc" ? (
            <CalendarArrowDown className="h-4 w-4" />
          ) : (
            <CalendarArrowUp className="h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleOrderChange("desc")}>
          Newest first
          {orderDirection === "desc" && <span className="ml-2">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleOrderChange("asc")}>
          Oldest first
          {orderDirection === "asc" && <span className="ml-2">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
