import Link from "next/link"
import { getBlogs } from "../lib/datafetch"

async function BlogsPage() {
    const blogs = await getBlogs()

    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-5 px-5 py-3 bg-purple-700">
                <div className="">
                    <h1 className="font-bold text-3xl">Discover latest update about us</h1>
                </div>
                {blogs.map((item: any) => {
                    return (
                        <div key={item.id} className="w-full p-2 border-4 border-black rounded-md bg-red-300">
                            <Link href={`/blogs/${item.id}`}>
                                <h1 className="font-bold text-2xl">{item.title}</h1>
                            </Link>
                            <div className="">
                                <h3 className="text-gray-400 italic">{item.date}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default BlogsPage