import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Gift} from "lucide-react";
import ProductThumbnail from "@/components/home/product-card/product-thumbnail";

export default function SingleProductCard() {
    return (

        <Card>
            <CardHeader>
                <CardTitle>Holiday Deals</CardTitle>
            </CardHeader>
            <CardContent>
                <ProductThumbnail
                    src={"https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=500&auto=format&fit=crop&q=60"}
                    alt={"holiday deal"}
                    className={"h-[300px]"}
                />
                <div className="mt-4 flex items-center">
                    <Gift className="w-5 h-5 text-red-500 mr-2"/>
                    <span className="text-sm text-red-500 font-semibold">Up to 60% off</span>
                </div>
            </CardContent>
            <CardFooter>
                <a href="#" className="text-sm text-blue-500">Shop now</a>
            </CardFooter>
        </Card>

    )
}

