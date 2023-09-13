import {
    ContentfulDocument,
    ContentfulDocumentAssetEmbedding,
    ContentfulDocumentHeading, ContentfulDocumentListItem,
    ContentfulDocumentNode,
    ContentfulDocumentText
} from "@/app/(contentful)/types";
import Image from "next/image";

export function ContentfulDocumentRenderer(props: { document: ContentfulDocument }): JSX.Element {

    function renderParagraph(item: { content: ContentfulDocumentNode[] }): JSX.Element {
        return <div className="my-2">
            {item.content.map(node => {
                switch (node.nodeType) {
                    case "text":
                        return renderText(node)
                    case "heading-1":
                    case "heading-2":
                    case "heading-3":
                        return renderHeading(node)
                    case "embedded-asset-block":
                        return renderEmbeddedAsset(node)
                    case "list-item":
                        return renderListItem(node)
                    default:
                        return renderParagraph(node)
                }
            })}
        </div>
    }

    function renderEmbeddedAsset(item: ContentfulDocumentAssetEmbedding): JSX.Element {
        if(!('enriched' in item) || item.enriched === undefined) return <></>;
        const originalSize = item.enriched.fields.file.details.image
        return <div className="relative lg:-mx-12 overflow-hidden border border-black" style={{aspectRatio: originalSize.width/originalSize.height}}>
            <Image src={("https:" + item.enriched.fields.file.url) ?? ""} alt={item.enriched.fields.title ?? ""} fill={true}/>
        </div>
    }

    function renderListItem(item: ContentfulDocumentListItem): JSX.Element {
        return <div className="flex"><div className="mt-3.5 mr-2">-</div>
          {renderParagraph(item)}
        </div>;
    }

    function renderHeading(item: ContentfulDocumentHeading): JSX.Element {
        return <span className={{
            "heading-1": "text-3xl font-bold pt-4",
            "heading-2": "text-xl font-bold pt-2",
            "heading-3": "text-lg pt-2",
        }[item.nodeType]}>
          {renderParagraph(item)}
        </span>;
    }

    function renderText(item: ContentfulDocumentText): JSX.Element {
        return <span className={item.marks.map(mark => ({
            bold: "font-bold",
            italic: "italic",
            underline: "underline",
        }[mark.type])).join(" ")}>
          {item.value}
        </span>;
    }

    return renderParagraph(props.document)

}