import star from "@/assets/star.png";
import check from "@/assets/check.png";
import right from "@/assets/right.png";
import car from "@/assets/swvl.png";
export default function FeaturesBar() {
    const features = [
        {
            Image: star,
            title: "Curated Products",
            desc: "Provide free home delivery for all product over £100",
        },
        {
            Image: right,
            title: "Handmade",
            desc: "We ensure the product quality that is our main goal",
        },
        {
            Image: check,
            title: "Natural Food",
            desc: "Return product within 3 days for any product you buy",
        },
        {
            Image: car,
            title: "Free home delivery",
            desc: "We ensure the product that you can trust easily",
            length
        },
    ];

    return (
        <div className="w-full bg-[#FFFFFF] border-primary shadow-lg shadow-[#00000040]">
            <div className="max-w-7xl mx-auto px-5 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                    {features.map((item, index) => {
                        return (
                            <div key={index} className="flex items-start gap-4">
                                <div className="p-3 ">
                                    <img src={item.Image} alt={item.title} className="w-23 h-10 " />
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-lg text-[#071C1F]">{item.title}</h3>
                                    <p className="text-[#071C1F] font-body">{item.desc}</p>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>
        </div>
    );
}
