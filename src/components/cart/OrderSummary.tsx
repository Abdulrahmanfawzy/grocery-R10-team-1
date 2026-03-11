import PromoIcon from "@/assets/PromoIcon.svg";

export function OrderSummary({ subtotal }: { subtotal: number }) {
  return (
    <div className="flex justify-between mt-[32px]">
      <div className="w-1/3 ">
        <h2 className="mb-1">Total Amount</h2>
        <div className=" border-1 rounded-[10px] border-[#BCB8B1]">
          <div className="p-[16px]">
            <div className="flex justify-between">
              <p className="tex-[#6B6F75]">Subtotal</p>
              <p className="tex-[#6B6F75]">£{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="tex-[#6B6F75]">Shipping</p>
              <p className="tex-[#6B6F75]">£0.00</p>
            </div>
            <div className="flex justify-between border-t-1 border-[#BCB8B1] mt-[10px] pt-[10px]">
              <p>Total</p>
              <p>£{subtotal.toFixed(2)}</p>
            </div>
            <button className="bg-[#014162] mt-[10px] text-white text-[12px] p-[8px] w-[150px] rounded-[10px]">
              Go To Checkout{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="mb-1">Delivery Details & Promo Code</h2>
        <div className=" border-1 rounded-[10px] border-[#BCB8B1] p-[16px]">
          <div className="flex items-center ">
            <img src={PromoIcon} alt="PromoIcon" className="mr-[8px]" />
            <p>Promo Code</p>
          </div>
          <div className="flex justify-between mt-[10px]">
            <input
              type="text"
              placeholder="   Save 10%"
              className="border-1 rounded-[6px] border-[#BCB8B1] w-[79px] placeholder-[#BCB8B1] placeholder:text-[#BCB8B1] text-[12px]"
            />
            <button className="bg-[#BCB8B1] text-white text-[12px] p-[8px] w-[150px] rounded-[10px]">
              Apply Code
            </button>
          </div>
          <h4 className="mt-[10px]">Delivery Address</h4>
          <div className="flex justify-between mt-[10px] ">
            <input
              type="text"
              placeholder="   Enter Promo Code"
              className="w-[70%] border-1 rounded-[6px] border-[#BCB8B1]  placeholder-[#BCB8B1] placeholder:text-[#BCB8B1] text-[12px]"
            />
            <button className="bg-[#BCB8B1] text-white text-[12px] p-[8px] w-[20%] rounded-[10px]  ">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
