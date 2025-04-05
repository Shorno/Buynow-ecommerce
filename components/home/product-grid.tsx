import FourProductCard from "@/components/home/product-card/four-product-card";
import SingleProductCard from "@/components/home/product-card/single-product-card";
import ListProductCard from "@/components/home/product-card/list-product-card";

export default function ProductGrid() {
    return (
        <div className="max-w-[1500px] mx-auto -mt-[300px] relative z-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FourProductCard/>
                <SingleProductCard/>
                <ListProductCard/>
                <FourProductCard/>
            </div>
        </div>

    )
}