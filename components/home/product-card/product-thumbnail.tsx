import Image from "next/image";
import {cn} from "@/lib/utils";

interface ProductThumbnailProps {
    src: string,
    alt: string,
    className? : string
}

export default function ProductThumbnail({src, alt, className}: ProductThumbnailProps) {
    return <Image
        src={src}
        alt={alt}
        className={cn("w-full object-cover rounded-lg mb-2", className)}
        width={500}
        height={500}
    />
}
