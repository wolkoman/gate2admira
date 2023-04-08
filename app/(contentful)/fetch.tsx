import {
    ContentfulAsset,
    ContentfulDocument, ContentfulDocumentAssetEmbedding,
    ContentfulDocumentNode,
    ContentfulEntries,
    ContentfulEntry, isContentfulDocumentAssetEmbedding
} from "@/app/(contentful)/types";

export async function contentfulAsset(id: string): Promise<ContentfulAsset> {
    return fetch(` https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/assets/${id}?access_token=${process.env.CONTENTFUL_TOKEN}`, {next: {revalidate: 60}})
        .then(x => x.json())
}
async function contentfulRawEntry(id: string): Promise<ContentfulEntry> {
    return fetch(` https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries/${id}?access_token=${process.env.CONTENTFUL_TOKEN}`, {next: {revalidate: 60}})
        .then(x => x.json())

}
export async function contentfulDocumentEntry(id: string): Promise<ContentfulEntry> {
    const entry = await contentfulRawEntry(id)
    async function enrich<T extends { nodeType: string }>(node: T): Promise<T> {
        if(isContentfulDocumentAssetEmbedding(node)){
            const enriched = await contentfulAsset(node.data.target.sys.id)
            return {...node, enriched}
        }
        if('content' in node && Array.isArray(node.content)){
            return {...node, content: await Promise.all(node.content.map(c => enrich(c)))}
        }
        return node;
    }
    return {...entry, fields: {...entry.fields, content: await enrich(entry.fields.content)}};

}
export async function contentfulEntries(): Promise<ContentfulEntries> {
    return fetch(` https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?access_token=${process.env.CONTENTFUL_TOKEN}`)
        .then(x => x.json())
}