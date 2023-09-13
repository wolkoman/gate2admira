import {contentfulDocumentEntry} from "@/app/(contentful)/fetch";
import {ContentfulDocumentRenderer} from "@/app/(contentful)/renderer";
import {Encasing} from "@/app/[site]/[name]/Encasing";

export default async function Home(props: { params: { site: string } }) {

    const entry = await contentfulDocumentEntry(props.params.site);
    return <>
        <div className="text-4xl font-bold mb-12">{entry.fields.title}</div>
        <ContentfulDocumentRenderer document={entry.fields.content}/>
    </>
}
