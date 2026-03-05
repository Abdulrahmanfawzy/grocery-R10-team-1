import { features } from "@/data/home/features";

const FeatureSection = () => {
  return (
    <section className=" flex flex-col items-center sm:flex-row justify-between gap-12 border-b border-gray-200 pb-8 px-4">
      {features.map((feature) => (
        <div key={feature.title} className="flex gap-3 items-center ">
          <img
            src={`${feature.images[0]}`}
            alt={feature.title}
            className="w-10 h-10 object-contain"
          />
          <div className="space-y-0.5">
            <h3 className="text-[#253D4E] font-semibold">{feature.title}</h3>
            <p className="text-xs text-[#ADADAD] text-balance">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;
