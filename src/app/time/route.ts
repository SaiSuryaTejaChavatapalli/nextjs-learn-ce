export const dynamic = "force-dynamic";
//defaults is auto which makes new request for everytime

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
