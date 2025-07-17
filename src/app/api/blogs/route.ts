// app/api/users/route.js
import { getData } from '../../data/data';

export async function GET() {
  const data = getData();
  return Response.json(data);
}