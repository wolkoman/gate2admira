import {ReactNode} from "react";
import Image from "next/image";

export function BrandedEncasing(props: { children: ReactNode }) {
    return <main className="min-h-screen flex flex-col">
        <div className="flex relative">
            <div className="flex justify-center relative grow">
                <div className="absolute top-8 w-full h-2 bg-black"></div>
                <div className="absolute top-12 w-full h-2 bg-[#f00]"></div>
                <div className="absolute top-16 w-full h-2 bg-black"></div>
                <Image src="/hero.png" alt="Gate2Admira Logo" width={1264 / 5} height={543 / 5} className="relative"/>
            </div>
        </div>
        <div className="p-8 max-w-2xl mx-auto grow">
                {props.children}
        </div>

    </main>

}