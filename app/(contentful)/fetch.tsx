import {ContentfulEntries, ContentfulEntry} from "@/app/(contentful)/types";

export async function contentfulEntry(id: string): Promise<ContentfulEntry> {
    return fetch(` https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries/${id}?access_token=${process.env.CONTENTFUL_TOKEN}`)
        .then(x => x.json())
}
export async function contentfulEntries(): Promise<ContentfulEntries> {
    return fetch(` https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?access_token=${process.env.CONTENTFUL_TOKEN}`)
        .then(x => x.json())
}