import {contentfulDocumentEntry} from "@/app/(contentful)/fetch";
import {ContentfulDocumentRenderer} from "@/app/(contentful)/renderer";

export default async function Home() {

  const entry = await contentfulDocumentEntry("6XdxqW4vh930hK4G3MOyRA");
  return <>
    <div className="text-4xl font-bold mb-12">{entry.fields.title}</div>
    <ContentfulDocumentRenderer document={entry.fields.content}/>
  </>
}
