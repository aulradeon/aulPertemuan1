// app/api/users/route.js
import { getBlogs } from '@/app/lib/datafetch'

export async function GET() {
  const data = await getBlogs();
  return Response.json(data);
}