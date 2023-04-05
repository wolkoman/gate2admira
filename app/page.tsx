import Image from "next/image";
import {contentfulEntries, contentfulEntry} from "@/app/(contentful)/fetch";
import {ContentfulDocumentRenderer} from "@/app/(contentful)/renderer";


export default async function Home() {

  const entry = await contentfulEntry('6XdxqW4vh930hK4G3MOyRA');

  return <main className="">
    <div className="flex relative">
      <img src="/corner.svg" className="h-10 mt-8"/>
      <div className="absolute flex absolute top-16 mt-2 gap-2 h-full">
        <div className="w-2 bg-black"></div>
        <div className="left-4 w-2 bg-[#f00]"></div>
        <div className="left-8 w-2 bg-black"></div>
      </div>
      <div className="flex justify-center relative grow">
        <div className="absolute top-8 w-full h-2 bg-black"></div>
        <div className="absolute top-12 w-full h-2 bg-[#f00]"></div>
        <div className="absolute top-16 w-full h-2 bg-black"></div>
        <Image src="/hero.png" alt="Gate2Admira Logo" width={1264/5} height={543/5} className="relative"/>
      </div>
    </div>
    <div className="flex">
      <div className="flex gap-2">
        <div className="w-2 bg-black"></div>
        <div className="left-4 w-2 bg-[#f00]"></div>
        <div className="left-8 w-2 bg-black"></div>
      </div>
      <div className="p-8 max-w-2xl mx-auto">
        <ContentfulDocumentRenderer document={entry.fields.content}/>
      </div>
    </div>

  </main>
}
