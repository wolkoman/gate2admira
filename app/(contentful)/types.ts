export interface ContentfulDocument {
    nodeType: "document" | "paragraph"
    content: ContentfulDocumentNode[]
}

interface ContentfulDocumentMark {
    type: "bold"
}

export interface ContentfulDocumentText {
    nodeType: "text"
    value: string
    marks: ContentfulDocumentMark[]
}

export interface ContentfulDocumentHeading {
    nodeType: "heading-1" | "heading-2" | "heading-3"
    content: ContentfulDocumentNode[]
}

export interface ContentfulDocumentAssetEmbedding {
    nodeType: "embedded-asset-block",
    data: { target: { sys: {id: string, linkType: 'Asset'}}},
    enriched?: ContentfulAsset
}
export function isContentfulDocumentAssetEmbedding(node: {nodeType: string}): node is ContentfulDocumentAssetEmbedding{
    return node.nodeType === "embedded-asset-block"
}

export interface ContentfulDocumentOrderedList {
    nodeType: "unordered-list",
    content: ContentfulDocumentNode[]
}
export interface ContentfulDocumentListItem {
    nodeType: "list-item",
    content: ContentfulDocumentNode[]
}

export type ContentfulDocumentNode =
    ContentfulDocument
    | ContentfulDocumentText
    | ContentfulDocumentHeading
    | ContentfulDocumentAssetEmbedding
    | ContentfulDocumentOrderedList
    | ContentfulDocumentListItem

export interface ContentfulEntry {
    fields: {
        title: string,
        content: ContentfulDocument,
        order: number
    },
    sys:{
        id: string
    }
}
export interface ContentfulEntries {
    items: ContentfulEntry[]
}

export interface ContentfulAsset {
    fields: {
        title: string;
        file: {
            url: string,
            details: {
                image: {
                    width: number,
                    height: number
                }
            }
        }
    }
}