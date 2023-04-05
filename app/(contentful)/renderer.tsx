import {
    ContentfulDocument,
    ContentfulDocumentHeading,
    ContentfulDocumentNode,
    ContentfulDocumentText
} from "@/app/(contentful)/types";

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
                    default:
                        return renderParagraph(node)
                }
            })}
        </div>
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
        return <span className={item.marks.map(mark => ({bold: "font-bold"}[mark.type])).join(" ")}>
          {item.value}
        </span>;
    }

    return renderParagraph(props.document)

}