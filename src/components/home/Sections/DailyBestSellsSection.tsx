import DailyBestSellsForm from "../DailyBestSellsForm";

const DailyBestSellsSection = () => {
  return (
    <section className="space-y-8">
      <div className="flex justify-start items-center gap-4">
        <h2 className="text-3xl font-semibold  text-gray-800 ">
          Daily Best Sells
        </h2>
        <ExpirationTimer />
      </div>
      <div className=" md:flex items-center ">
        <div className="flex gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <DailyBestSellsForm />
      </div>
    </section>
  );
};

const ExpirationTimer = () => {
  return (
    <div className="bg-red-600 py-1 px-2 rounded-md text-sm text-red-50">
      <div className="flex gap-2 items-center">
        <span>Expires in:</span>
        <span>10:56:21</span>
      </div>
    </div>
  );
};

const Card = () => {
  return <div className="w-24 h-32 bg-green-500"> </div>;
};

export default DailyBestSellsSection;
