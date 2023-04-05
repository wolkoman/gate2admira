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

export type ContentfulDocumentNode = ContentfulDocument | ContentfulDocumentText | ContentfulDocumentHeading;

export interface ContentfulEntry {
    fields: {
        title: string,
        content: ContentfulDocument
    },
    sys:{
        id: string
    }
}
export interface ContentfulEntries {
    items: ContentfulEntry[]
}