import React from "react";

export default function AddToCartBtns({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="w-full bg-primary text-white py-2 rounded-lg flex items-center justify-center gap-2">
      {icon}
      {children}
    </div>
  );
}
