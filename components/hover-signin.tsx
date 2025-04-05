import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"

export default function HoverSignin() {
    return (
        <Card className="w-max max-w-md shadow-lg rounded-sm z-50">
            <CardContent className="p-0">
                <div className="p-4 flex flex-col items-center">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mb-2">Sign
                        in</Button>
                    <div className="text-sm text-center">
                        New customer?{" "}
                        <Link href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                            Start here.
                        </Link>
                    </div>
                </div>

                <Separator/>

                <div className="flex">
                    <div className="w-1/2 p-4 border-r">
                        <h2 className="font-bold text-lg mb-2">Your Lists</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Create a List
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Find a List or Registry
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-1/2 p-4">
                        <h2 className="font-bold text-lg mb-2">Your Account</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Recommendations
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Browsing History
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Watchlist
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Video Purchases & Rentals
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Kindle Unlimited
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Content & Devices
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Subscribe & Save Items
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Memberships & Subscriptions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 hover:underline">
                                    Music Library
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

