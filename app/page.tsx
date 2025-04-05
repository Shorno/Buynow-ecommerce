import ProductGrid from "@/components/home/product-grid";
import FeaturedBannerSlider from "@/components/home/featured-banner-slider";

export default function Home() {
    return (
        <main className="container mx-auto">
            <FeaturedBannerSlider/>
            <ProductGrid/>
        </main>
    );
}
