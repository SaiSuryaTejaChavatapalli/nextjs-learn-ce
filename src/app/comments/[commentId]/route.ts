import { comments } from "../data";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      commentId: string;
    };
  }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.commentId)
  );

  return Response.json(comment);
}
