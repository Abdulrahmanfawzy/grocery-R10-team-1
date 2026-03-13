const BannersSection = () => {
  return (
    <div className="flex gap-5 flex-col md:flex-row">
      {/* Left Card  */}
      <div
        className={`w-full flex justify-between rounded-lg h-48  bg-[#BCB8B1] `}
      >
        <div className=" align-start p-4 flex flex-col items-start justify-between">
          <div className="flex flex-col items-start gap-2.5">
            <span className="px-3 py-0.5 rounded text-[12px] font-light bg-[#014162] text-white">
              Free delivery
            </span>
            <h3 className="font-medium text-xl text-[#253D4E] leading-tight">
              Free Delivery Over £50
            </h3>
            <p className="text-sm font-normal text-[#014162] leading-tight text-balance">
              Shop £50 product and get free delivery anywhere.
            </p>
          </div>
          <button
            className={`px-3 py-2  rounded text-[14px] font-light bg-[#014162] text-white`}
          >
            Shop Now &gt;{" "}
          </button>
        </div>
        <img
          src="/src/assets/home/banner/banner1.svg"
          alt="Banner"
          className="h-full object-cover hidden sm:block"
        />
      </div>
      {/* Right  Card */}
      <div className="w-full flex justify-between rounded-lg h-48  bg-[#014162]  overflow-hidden">
        <div className=" align-start p-4 flex flex-col items-start justify-between ">
          <div className="flex flex-col items-start gap-2.5">
            <span className="px-3 py-0.5 rounded text-[12px] font-light text-[#014162] bg-[#BCB8B1]">
              60% off
            </span>
            <h3 className="font-medium text-white text-xl leading-tight">
              Organic Food
            </h3>
            <p className="text-sm font-normal text-white leading-tight ms:text-balance">
              Saveup to 60% off on you first order
            </p>
          </div>
          <button
            className={`px-3 py-2  rounded text-[14px] font-light text-[#014162] bg-[#BCB8B1]`}
          >
            Shop Now &gt;{" "}
          </button>
        </div>

        {/* This Image Have padding-top 10 */}
        <img
          src="/src/assets/home/banner/banner2.svg"
          alt="Banner"
          className="h-full object-cover pt-10 hidden sm:block"
        />
      </div>
    </div>
  );
};

export default BannersSection;
