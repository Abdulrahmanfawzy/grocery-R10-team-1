import { Apple, Beef, Carrot, Croissant, Milk, Shrimp, Search, Minus, Plus, Star, Trash } from "lucide-react";
import heroImage from "../assets/heroimg1.jpg";
import container1 from "../assets/container1.png";
import container2 from "../assets/container2.png";
import container3 from "../assets/container3.png";
import container4 from "../assets/container4.png";
import container5 from "../assets/container5.png";
import WinterDiscount from "../components/productlisting/winterdiscount";
import FeaturesBar from "../components/productlisting/featuresbar";
import CategorySlider from "@/components/Category/CategorySlider";
import newProducts from "@/data/home/newProducts";
import { useState } from "react";

// UI components
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider"; // custom wrapper for Radix

const categories = [
    { name: "Vegetables", icon: Carrot },
    { name: "Fruits", icon: Apple },
    { name: "Dairy & Eggs", icon: Milk },
    { name: "Bakery", icon: Croissant },
    { name: "Seafood", icon: Shrimp },
    { name: "Meats", icon: Beef },
];

const brands = ["Brand A", "Brand B", "Brand C"];
const productTypes = ["Fresh", "Organic", "Frozen"];
const availability = ["In stock", "Out of stock"];

const ProductCard = () => {
    const [quantities, setQuantities] = useState<number[]>(new Array(5).fill(1));

    const products = [
        { name: "Peach", price: 32.0, oldPrice: 35.0, image: container1, rating: 4 },
        { name: "Pineapple", price: 50.0, oldPrice: 55.0, image: container2, rating: 4 },
        { name: "Rambutan", price: 70.0, oldPrice: 80.0, image: container3, rating: 5 },
        { name: "Green Apple", price: 45.0, oldPrice: 50.0, image: container4, rating: 4 },
        { name: "Kiwi", price: 60.0, oldPrice: 65.0, image: container5, rating: 4 },
    ];

    const increase = (index: number) => {
        const updated = [...quantities];
        updated[index]++;
        setQuantities(updated);
    };

    const decrease = (index: number) => {
        const updated = [...quantities];
        if (updated[index] > 1) updated[index]--;
        setQuantities(updated);
    };

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 ">
            {products.map((product, index) => (
                <div key={index} className="bg-card  border-[0.8px] rounded-[8px] p-7 pl-2 pr-2 mr-10 ml-10 m-5 text-foreground hover:shadow-lg transition-shadow">
                    <div className="flex gap-2 mb-4">
                        <span className="bg-linear-to-b from-[#014162] to-[#01416280]/90 text-[#F7FCFF] text-xs px-3 py-2 rounded-tl-[15px] rounded-br-[15px] font-body ">In Stock</span>
                        <span className="bg-linear-to-b from-[#014162] to-[#01416280]/90 text-[#F7FCFF] text-xs px-3 py-2 rounded-tl-[15px] rounded-br-[15px] font-body ">Save 20%</span>
                        <span className="bg-linear-to-b from-[#014162] to-[#01416280]/90 text-[#F7FCFF] text-xs px-3 py-2 rounded-tl-[15px] rounded-br-[15px] font-body ">New</span>
                    </div>

                    <div className="flex justify-center items-center mb-4">
                        <img src={product.image} alt={product.name} className="h-40 object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-2">
                        <div className="flex items-center justify-center gap-2">
                            <h3 className="font-display text-[#01050DCC] ">{product.name}</h3>
                            <span className="text-[#0E1112] font-body ">£ {product.price.toFixed(2)}</span>
                            <span className="line-through text-[#BCB8B1] text-sm font-body">£ {product.oldPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={25} className={i < product.rating ? "text-[#FDC040] fill-[#FDC040]" : "text-border"} />
                            ))}
                        </div>
                    </div>



                    <div className="flex items-center gap-3 mt-3">
                        <Button className="bg-[#014162] text-[#F7FCFF]  font-body px-4 py-2 rounded-lg hover:opacity-90 transition">
                            Add To Cart
                        </Button>
                        <div className="flex items-center border border-[#BCB8B1] rounded-[10px] px-3 py-2  gap-9">
                            <button onClick={() => decrease(index)} className="text-foreground hover:text-primary transition">
                                <Trash size={16} />
                            </button>
                            <span className="font-body text-sm">{quantities[index]}</span>
                            <button onClick={() => increase(index)} className="text-foreground hover:text-primary transition">
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProductList = () => {
    const [priceRange, setPriceRange] = useState([50, 80]);
    const [selectedCategory, setSelectedCategory] = useState("Fruits");

    return (
        <div>
            {/* Hero */}

            <div className="relative w-full h-\[400px]">
                <img src={heroImage} alt="Shop" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/80" />
                <div className="absolute inset-0 flex flex-col justify-center px-40 pt-50 text-white">
                    <p className="uppercase tracking-widest text-lg font-bold">// Welcome to our company</p>
                    <h1 className="text-5xl font-bold text-[#08ABFF] mt-5">Shop</h1>
                    <pre className="absolute right-16 top-1/2 -translate-x-1/1 text-base font-semibold pt-30">
                        Home <span className="text-[#08ABFF]">. Shop</span>
                    </pre>
                </div>
            </div>

            <div>
                <div className="flex flex-col lg:flex-row gap-6 mt-10 px-4 lg:px-20">
                    <aside className="w-full lg:w-60 space-y-6">
                        {/* Categories */}
                        <div >
                            <h3 className="font-display text-lg mb-3 text-[#000000]">Categories</h3>
                            <ul className="space-y-1">
                                {categories.map((cat) => (
                                    <li key={cat.name}>
                                        <button
                                            onClick={() => setSelectedCategory(cat.name)}
                                            className="flex items-center gap-3 w-50 px-3 py-2 rounded-md text-sm font-body transition-colors text-foreground hover:bg-muted"
                                            data-selected={selectedCategory === cat.name}
                                        >
                                            <cat.icon size={16} />
                                            {cat.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Brand */}
                        <div >
                            <h3 className="font-display text-lg mb-3 text-[#000000]">Brand</h3>
                            <div className="space-y-2">
                                {brands.map((brand, i) => (
                                    <label key={brand} className="flex items-center gap-2 text-sm font-body text-[#000000] cursor-pointer">
                                        <Checkbox defaultChecked={i === 0} />
                                        {brand}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Product Type */}
                        <div >
                            <h3 className="font-display text-lg mb-3 text-[#000000]">Product Type</h3>
                            <div className="space-y-2">
                                {productTypes.map((type, i) => (
                                    <label key={type} className="flex items-center gap-2 text-sm font-body text-[#000000] cursor-pointer">
                                        <Checkbox defaultChecked={i === 0} />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div >
                            <h3 className="font-display text-lg mb-3 text-[#000000]">Availability</h3>
                            <div className="space-y-2">
                                {availability.map((a, i) => (
                                    <label key={a} className="flex items-center gap-2  text-sm font-body text-[#000000] cursor-pointer">
                                        <Checkbox defaultChecked={i === 0} />
                                        {a}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Search */}
                        <div >
                            <h3 className="font-display text-lg mb-3 text-[#071C1F]"><Minus size={20} className="inline mr-2" /> Search Objects</h3>
                            <div className="flex gap-2">
                                <Input className="text-sm px-4" placeholder="Search your keyword..." />
                                <Button size="icon" className="bg-[#014162] text-primary-foreground shrink-0">
                                    <Search size={20} />
                                </Button>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div >
                            <h3 className="font-display text-lg mb-3 text-[#071C1F]"><Minus size={20} className="inline mr-2" /> Filter By Price</h3>
                            <p className="text-sm text[#0E1112] font-body">
                                Your range: <span className="text-foreground font-semibold ml-10 ">£{priceRange[0]} - £{priceRange[1]}</span>
                            </p>
                            <Slider
                                defaultValue={priceRange}
                                onValueChange={setPriceRange}
                                max={100}
                                step={5}
                                className="w-full mt-7"
                            />
                        </div>
                    </aside>

                    <div className=" w-full">
                        <ProductCard />
                        <CategorySlider
                            categoryName="Fruits"
                            Items={newProducts}
                        />
                    </div>
                </div>
            </div>

            {/* Winter Discount Section */}
            <div className="w-full px-4 lg:px-20 mt-10">
                <WinterDiscount />
            </div>

            {/* Features Bar Section */}
            <div className="w-full px-4 lg:px-20 mt-10">
                <FeaturesBar />
            </div>


        </div>
    );
};

export default ProductList;
