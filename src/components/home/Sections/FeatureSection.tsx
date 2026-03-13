import { features } from "@/data/home/features";

const FeatureSection = () => {
  return (
    <section className="flex flex-col items-center sm:flex-row justify-between gap-8 sm:gap-12 border-b border-gray-200 pb-6 sm:pb-8 px-4">
      {features.map((feature) => (
        <div key={feature.title} className="flex gap-3 items-center w-full sm:w-auto">
          <img
            src={`${feature.images[0]}`}
            alt={feature.title}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
          />
          <div className="space-y-0.5 text-center sm:text-left">
            <h3 className="text-[#253D4E] font-semibold text-sm sm:text-base">{feature.title}</h3>
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
