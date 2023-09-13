"use client"

import {ContentfulEntries, ContentfulEntry} from "@/app/(contentful)/types";
import Link from "next/link";
import React from "react";

export function createSlug(value: ContentfulEntry) {
  return "/" + value.sys.id + "/" + value.fields.title.toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(/[()\[\]{}!?.="§$%&\/]]/g, "")
}

export function Navigation(props: {
  entries: ContentfulEntries,
}) {

  return <div className="flex flex-wrap pr-12 gap-2">
    {props.entries.items
      .sort((a, b) => a.fields.order - b.fields.order)
      .map(item => <Link key={item.sys.id} href={createSlug(item)}>
        <div className={`py-1 px-4 border border-black rounded hover:bg-[#f00]`}>
          {item.fields.title}
        </div>
      </Link>)}
  </div>;
}