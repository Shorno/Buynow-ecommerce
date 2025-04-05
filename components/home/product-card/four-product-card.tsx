import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import ProductThumbnail from "@/components/home/product-card/product-thumbnail";


export default function FourProductCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Gaming accessories</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <Link href={"/headsets"} className={"hover:scale-103 transition-transform duration-100"}>
                        <ProductThumbnail
                            src={"https://images.unsplash.com/photo-1677086813101-496781a0f327?q=80&w=500&auto=format&fit=crop"}
                            alt={"headsets"}
                            className={"h-[100px]"}
                        />
                        <p className="text-sm">Headsets</p>
                    </Link>
                    <div>
                        <ProductThumbnail
                            src={"https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=500&auto=format&fit=crop"}
                            alt={"keyboard"}
                            className={"h-[100px]"}
                        />
                        <p className="text-sm">Keyboards</p>
                    </div>
                    <div>
                        <ProductThumbnail
                            src={"https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60"}
                            alt={"mice"}
                            className={"h-[100px]"}
                        />
                        <p className="text-sm">Mice</p>
                    </div>
                    <div>
                        <ProductThumbnail
                            src={"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500&auto=format&fit=crop&q=60"}
                            alt={"gamepad"}
                            className={"h-[100px]"}
                        />
                        <p className="text-sm">Gamepad</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Link href={"/gaming-accessories"} className="text-sm text-blue-500">See more</Link>
            </CardFooter>
        </Card>
    )
}


