import { updatePosts } from "@/utils/post/updatePosts";

export async function PUT(request: Request, response: Response) {
  try {
    const { selectedRows } = await request.json();
    if (
      !Array.isArray(selectedRows) ||
      !selectedRows.every((id) => typeof id === "number")
    ) {
      return Response.json(
        { message: "Invalid request body" },
        { status: 400 },
      );
    }

    const result = await updatePosts(selectedRows);
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: error }, { status: 500 });
  }
}
