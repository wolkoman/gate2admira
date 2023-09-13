"use client"

import {ContentfulEntries} from "@/app/(contentful)/types";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {createSlug} from "@/app/layout";
import {useRouter} from "next/navigation";

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