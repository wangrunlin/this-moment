import type { APIRoute } from "astro";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const content = formData.get("content") as string;
    const image = formData.get("image") as File | null;

    const post = await prisma.post.create({
      data: {
        author: "Leo Wang",
        avatar: "https://github.com/wangrunlin.png",
        date: new Date(),
        content,
        images: JSON.stringify([image?.name || ""]),
      },
    });

    return new Response(JSON.stringify(post), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "服务器错误" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
