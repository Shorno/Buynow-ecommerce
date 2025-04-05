import Image from "next/image";

const featuredList = [
    {
        imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2070",
        link: "/x-product",
        title: "best of x products"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2070",
        link: "/y-product",
        title: "best of y products"
    }
]
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

export default function FeaturedBannerSlider() {
    return (
        <Carousel>
            <CarouselContent>
                {featuredList.map((item) => (
                    <CarouselItem key={item.link} className={"h-[600px]"}>
                        <Link href={item.link}>
                            <Image src={item.imageUrl} alt={item.title} width={2000} height={1000} className={"w-full h-full"}/>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}
