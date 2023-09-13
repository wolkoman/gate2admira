import './globals.css'
import {contentfulEntries} from "@/app/(contentful)/fetch";
import React from "react";
import {ContentfulEntry} from "@/app/(contentful)/types";
import {Branding, Encasing} from "@/app/[site]/[name]/Encasing";
import {Navigation} from "@/app/Navigation";

export const metadata = {
  title: 'Gate2Admira',
  description: '',
}

export function createSlug(value: ContentfulEntry) {
  return "/" + value.sys.id + "/" + value.fields.title.toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(/[()\[\]{}!?.="§$%&\/]]/g, "")
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const entries = await contentfulEntries();
  return (
    <html lang="de">
    <body className="bg-[url(/titel.jpg)]">
    <div className=" bg-white my-12 max-w-3xl mx-auto p-6 rounded">
      <div className="flex flex-col items-center">
        <Branding/>
        <div className="font-bold text-3xl p-4">Gate2Admira</div>
        <Navigation entries={entries}/>
      </div>
      <div className="my-8">
        <Encasing>{props.children}</Encasing>
      </div>
    </div>
    </body>
    </html>
  )
}
