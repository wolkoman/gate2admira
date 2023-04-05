import './globals.css'
import {contentfulEntries} from "@/app/(contentful)/fetch";
import React from "react";
import Link from "next/link";
import {ContentfulEntry} from "@/app/(contentful)/types";

export const metadata = {
    title: 'Gate2Admira',
    description: '',
}

export function createSlug(value: ContentfulEntry) {
    return "/" + value.sys.id + "/" + value.fields.title.toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll(/[\(\)\[\]\{\}\!\?\.="§$%&\/]]/g, "")
}

export default async function RootLayout(props: { children: React.ReactNode }) {
    const entries = await contentfulEntries();
    return (
        <html lang="de">
        <body>
        <div className="flex">
            <div className="flex flex-col pr-12">
                {entries.items.map(item => <Link key={item.sys.id} href={createSlug(item)}>
                    <div className="p-4">
                        {item.fields.title}
                    </div>
                </Link>)}
            </div>
            <div className="grow">{props.children}</div>
        </div>
        </body>
        </html>
    )
}
