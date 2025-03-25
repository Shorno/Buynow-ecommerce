import {MapPin, Search, ShoppingCartIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import LOGO from "@/public/logo.png"
import MONOGRAM from "@/public/monogram.png"
import Image from "next/image";


export default function Navbar() {
    return (
        <>
            <nav className={"bg-slate-900 h-16"}>
                <div className={"flex items-center h-full px-4 md:gap-8"}>
                    <div className={"flex justify-between w-full items-center gap-4 md:gap-8"}>
                        <div className={"flex items-center md:gap-8 gap-4 w-full"}>

                            {/*Logo*/}

                            <div className={"flex flex-col justify-center items-center"}>
                                <Image src={LOGO} alt={"logo"} width={120} height={120} className={"hidden md:block"}/>
                                <Image src={MONOGRAM} alt={"monogram"} width={40} height={40} className={"md:hidden"}/>
                            </div>
                            {/*location*/}

                            <div className={"md:flex items-end hidden"}>
                                <MapPin className={"text-white size-4 mb-1"}/>
                                <div>
                                    <p className={"text-gray-300 text-sm"}>Deliver to</p>
                                    <h1 className={"text-white text-sm font-bold"}>Bangladesh</h1>
                                </div>
                            </div>
                            {/*Search*/}

                            <div
                                className={"w-full flex items-center group  group focus-within:ring-2 focus-within:ring-orange-400 focus-within:rounded-sm"}>
                                <Select>
                                    <SelectTrigger className="md:w-32 w-20 text-xs md:text-sm bg-white rounded-sm rounded-r-none ">
                                        <SelectValue placeholder="All"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Input  placeholder={"Search products"}
                                       className={"bg-white text-xs md:text-sm rounded-sm rounded-l-none rounded-r-none h-9 focus-visible:border-none focus-visible:ring-ring/50 focus-visible:ring-[3px]"}/>
                                <div className={"h-9 w-20 bg-orange-400 flex justify-center items-center rounded-r-sm"}>
                                    <Search className={"text-white"}/>
                                </div>
                            </div>

                        </div>

                        {/*cart*/}
                        <div className={"flex gap-8  min-w-max"}>
                            <div className={"text-white hidden md:block"}>
                                <p className={"text-xs"}>Hello,sign in</p>
                                <p className={"text-sm font-semibold"}>Accounts & Lists</p>
                            </div>
                            <div className={"text-white flex justify-center items-center gap-2"}>
                                <ShoppingCartIcon className={"md:size-8"}/>
                                <p className={"md:text-lg font-semibold"}>Cart</p>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
