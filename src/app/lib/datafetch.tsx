import blogs from "@/app/data/blogs"

export const getBlogs = async () => blogs

export const getBlogByID = async (id: string) => blogs[parseInt(id)]