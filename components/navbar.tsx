"use client"
import {ArrowDown, MapPin, Search, ShoppingCartIcon, UserIcon} from "lucide-react"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import LOGO from "@/public/logo.png"
import Image from "next/image"
import {useState} from "react";
import HoverSignin from "@/components/hover-signin";
import Link from "next/link";

export default function Navbar() {
    const [isFocused, setIsFocused] = useState(false);
    const [showSigninMenu, setShowSigninMenu] = useState(false)

    const handleSearchFocus = () => {
        setIsFocused(true);
    };

    const handleSearchBlur = () => {
        setIsFocused(false);
    };

    const handleMouseEnter = () => {
        setShowSigninMenu(true)
        setIsFocused(true)
    }

    const handleMouseLeave = () => {
        setShowSigninMenu(false)
        setIsFocused(false)
    }


    return (
        <>

            {isFocused && (
                <div
                    className="fixed inset-0 bg-black/30 z-40"
                    onClick={() => setIsFocused(false)}
                />
            )}

            <nav className="bg-slate-900 relative z-50">
                {/* Main container - column on mobile, row on desktop */}
                <div className="flex flex-col md:flex-row md:h-16">
                    {/* Top row with logo and cart */}
                    <div className="flex items-center justify-between w-full gap-4 md:gap-8 px-4 h-16 md:h-full">
                        <div className="flex  w-full items-center gap-4 md:gap-8">
                            {/* Logo */}
                            <div className="flex flex-col justify-center items-center">
                                <Image
                                    src={LOGO || "/placeholder.svg"}
                                    alt="logo"
                                    width={150}
                                    height={150}
                                    className="hidden md:block md:w-96 lg:w-auto"
                                />
                                <Image
                                    src={LOGO || "/placeholder.svg"}
                                    alt="logo"
                                    width={100}
                                    height={50}
                                    className="md:hidden"
                                />

                            </div>

                            {/*Delivery*/}
                            <div className="md:flex items-end hidden">
                                <MapPin className="text-white size-4 mb-1"/>
                                <div>
                                    <p className="text-gray-300 text-sm">Deliver to</p>
                                    <h1 className="text-white text-sm font-bold">Bangladesh</h1>
                                </div>
                            </div>

                            {/* Search - visible only on desktop in this row */}
                            <div
                                className="w-full  hidden md:flex items-center group focus-within:ring-2 focus-within:ring-orange-400 focus-within:rounded-sm">
                                <Select>
                                    <SelectTrigger className="w-32 text-sm bg-white rounded-sm rounded-r-none">
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
                                <Input
                                    onFocus={handleSearchFocus}
                                    onBlur={handleSearchBlur}
                                    placeholder="Search products"
                                    className="bg-white text-sm font-semibold rounded-sm rounded-l-none rounded-r-none h-9 focus-visible:border-none focus-visible:ring-transparent"
                                />
                                <div
                                    className="h-9 w-20 bg-orange-400 flex justify-center items-center rounded-r-sm">
                                    <Search className="text-white"/>
                                </div>
                            </div>
                        </div>

                        {/* Cart and sign in */}
                        <div className="flex gap-4 sm:gap-8 min-w-max">
                            <Link href={"/signin"} className={"text-white flex gap-1 sm:hidden"}>
                                Sign In <UserIcon/>
                            </Link>
                            {/*for large screen*/}
                            <div className={"relative"}
                                 onMouseEnter={handleMouseEnter}
                                 onMouseLeave={handleMouseLeave}
                            >
                                <div className={"text-white text-start cursor-pointer hidden sm:block"}

                                >
                                    <p className={"text-sm"}>Hello, sign in</p>
                                    <p className="text-sm hidden sm:flex gap-1 items-center font-semibold">Accounts &
                                        Lists <ArrowDown size={18}/></p>
                                </div>
                                {
                                    showSigninMenu && <div className={"absolute right-0 top-full"}><HoverSignin/></div>
                                }
                            </div>

                            <div className="text-white flex justify-center items-center gap-2">
                                <ShoppingCartIcon className="md:size-8"/>
                                <p className="md:text-lg font-semibold">Cart</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom row with search - visible only on mobile */}
                    <div className="px-4 pb-4 md:hidden w-full">
                        <div
                            className="w-full flex items-center group focus-within:ring-2 focus-within:ring-orange-400 focus-within:rounded-sm">
                            <Select>
                                <SelectTrigger className="w-20 text-xs bg-white rounded-sm rounded-r-none">
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
                            <Input
                                onFocus={handleSearchFocus}
                                onBlur={handleSearchBlur}
                                placeholder="Search products"
                                className="bg-white text-xs rounded-sm rounded-l-none rounded-r-none h-9 focus-visible:border-none focus-visible:ring-transparent"
                            />
                            <div className="h-9 w-20 bg-orange-400 flex justify-center items-center rounded-r-sm">
                                <Search className="text-white"/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

