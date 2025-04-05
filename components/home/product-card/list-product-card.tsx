import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Star} from "lucide-react";
import ProductThumbnail from "@/components/home/product-card/product-thumbnail";

export default function ListProductCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Deals</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                        <ProductThumbnail
                            src={"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60"}
                            alt={"watch"}
                            className={"w-24 h-24"}
                        />
                        <div>
                            <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                                <span className="text-sm ml-1">4.5</span>
                            </div>
                            <p className="text-sm font-medium mt-1">Smart Watch Series 7</p>
                            <p className="text-red-500 font-bold mt-1">$299.99</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <ProductThumbnail
                            src={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"}
                            alt={"watch"}
                            className={"w-24 h-24"}
                        />
                        <div>
                            <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                                <span className="text-sm ml-1">4.8</span>
                            </div>
                            <p className="text-sm font-medium mt-1">Wireless Headphones</p>
                            <p className="text-red-500 font-bold mt-1">$159.99</p>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <a href="#" className="text-sm text-blue-500">See all deals</a>
            </CardFooter>
        </Card>
    )
}