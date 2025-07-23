import { notFound } from "next/navigation"
import { localENV } from "@/app/lib/config";


async function Content({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const item = await fetch(localENV(`/api/blogs/${id}`)).then(res => res.json()).catch(() => notFound())
    console.log(item)

    return (
        <div className="max-w-3xl my-3 mx-auto p-6 bg-gray-100 rounded-md">
            <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
            <h3 className="text-gray-600 mb-6">{item.date}</h3>
            <p className="leading-relaxed">{item.content}</p>
        </div>
    )
}

export default Content