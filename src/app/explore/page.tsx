import { TypographyH1 } from "@/components/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany({ orderBy: { date: "desc" } });

  return (
    <main className="mt-16 mx-4 md:mx-24 lg:mx-48">
      <TypographyH1 className="my-8">This Moment</TypographyH1>
      <div className="space-y-6 mb-4">
        {posts.map(({ id, avatar, nickname, date, content, imageList }) => (
          <Card
            key={id}
            className="hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>
                    {/^[A-Za-z]/.test(nickname || "")
                      ? nickname
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                      : nickname?.slice(-1)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xl font-medium">{nickname}</span>
              </CardTitle>
              <CardDescription className="mt-1 text-sm">
                {new Date(date || "").toLocaleString("zh-CN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-base">{content}</p>
            </CardContent>
            <CardFooter className="flex-col items-start">
              {imageList?.length ? (
                <div
                  className={`grid gap-2 w-full ${
                    imageList.length === 1
                      ? "grid-cols-1"
                      : imageList.length === 2
                      ? "grid-cols-2"
                      : imageList.length === 3
                      ? "grid-cols-3"
                      : "grid-cols-2 md:grid-cols-4"
                  }`}
                >
                  {imageList.map((image) => (
                    <div
                      key={image}
                      className="relative aspect-square overflow-hidden rounded-lg"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt="Moment image"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
