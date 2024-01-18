import { type NextRequest } from "next/server";
import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      commentId: string;
    };
  }
) {
  if (parseInt(params.commentId) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.commentId)
  );

  return Response.json(comment);
}

export const PATCH = async (
  request: Request,
  {
    params,
  }: {
    params: {
      commentId: string;
    };
  }
) => {
  const { comment } = await request.json();
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(params.commentId)
  );
  comments[commentIndex].comment = comment;
  return Response.json(comments[commentIndex]);
};

export const DELETE = async (
  request: Request,
  { params }: { params: { commentId: string } }
) => {
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(params.commentId)
  );
  const deletedComment = comments[commentIndex];
  comments.splice(commentIndex, 1);
  return Response.json(deletedComment);
};
