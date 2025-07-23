// app/api/users/route.js
import { NextResponse } from 'next/server';
import { getBlogs } from '@/app/lib/datafetch'

export async function GET() {
  const data = await getBlogs()
  return NextResponse.json(data);
}