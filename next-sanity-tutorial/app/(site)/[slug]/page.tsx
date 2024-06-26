import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "next-sanity"
import { getAllContent } from "@/sanity/sanity-utils"

type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug)
    const content = await getAllContent();
    const pageContent = content.find(item => item.slug === params.slug);

    console.log(pageContent)
    

    console.log(page.content)

    return (
        <div>
            <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page.title}</h1>
            <div className="text-lg text-gray-700 mt-10"></div>
            <PortableText value={page.content} />
        </div>
    )
}