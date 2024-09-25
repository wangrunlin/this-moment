import type { APIRoute } from "astro";
import { PrismaClient } from "@prisma/client";
import { PutObjectCommand } from "@aws-sdk/client-s3";

import { s3Client } from "@/lib/s3Client";

const prisma = new PrismaClient();

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const content = formData.get("content") as string;
    const image = formData.get("image") as File | null;

    let imageUrl = "";

    if (image) {
      const buffer = await image.arrayBuffer();
      const filename = `${Date.now()}-${image.name}`;

      await s3Client.send(
        new PutObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME,
          Key: filename,
          Body: Buffer.from(buffer),
          ContentType: image.type,
        })
      );

      imageUrl = `https://${process.env.R2_CUSTOM_DOMAIN}/${filename}`;
    }

    const post = await prisma.post.create({
      data: {
        author: "Leo Wang",
        avatar: "https://github.com/wangrunlin.png",
        date: new Date(),
        content,
        images: JSON.stringify([imageUrl]),
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
