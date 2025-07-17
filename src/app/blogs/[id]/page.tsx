import content from "../../data/blogs"
import {notFound} from "next/navigation"

interface BlogPageProps {
    params: {
        id: string;
    };
}

function Content({ params }: BlogPageProps) {
    const selected = content.find(b => b.id === params.id)
    if(!selected){
        notFound()
    }
    return (
        <div className="max-w-3xl my-3 mx-auto p-6 bg-gray-100 rounded-md">
            <h1 className="text-3xl font-bold mb-2">{selected?.title}</h1>
            <h3 className="text-gray-600 mb-6">{selected?.date}</h3>
            <p className="leading-relaxed">{selected?.content}</p>
        </div>
    )
}

export default Content