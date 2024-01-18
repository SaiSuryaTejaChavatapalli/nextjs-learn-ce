import { type NextRequest } from "next/server";
import { comments } from "./data";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  console.log("Query", query);
  const filteredComments = query
    ? comments.filter((comment) => comment.comment.includes(query))
    : comments;
  console.log(filteredComments);
  return Response.json(filteredComments);
};

export const POST = async (request: Request) => {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    comment: comment.comment,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
