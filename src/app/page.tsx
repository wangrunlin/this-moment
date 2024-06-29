import Image from "next/image";

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

type CardType = {
  id: string;
  avatar?: string;
  nickname?: string;
  date?: string;
  content?: string;
  imageList?: string[];
  videoList?: string[];
};

const contentList: CardType[] = [
  {
    id: "1",
    avatar: "https://github.com/wangrunlin.png",
    nickname: "Leo Wang",
    date: "2024/6/28 20:44:40",
    content: "Card Content",
    imageList: [
      // generate 3 - 5 unsplash images link
      "https://images.unsplash.com/photo-1711834231479-5f6d4556d6f3",
      "https://plus.unsplash.com/premium_photo-1701094772268-842fcc7ce510?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1712009508464-8a41723abf63?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
    ],
    videoList: [""],
  },
  {
    id: "2",
    avatar: "https://github.com/wangrunlin.png",
    nickname: "阿林",
    date: "2024/6/28 20:58:40",
    content: "Card Content 2",
    imageList: [
      // generate 3 - 5 unsplash images link
      "https://images.unsplash.com/photo-1719420062178-8675f842252a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1718169684197-adf733b5c7ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1711834231479-5f6d4556d6f3",
      // "https://plus.unsplash.com/premium_photo-1701094772268-842fcc7ce510?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      // "https://images.unsplash.com/photo-1712009508464-8a41723abf63?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
    ],
    videoList: [""],
  },
];

export default function Home() {
  return (
    <main className="mt-16 mx-4 md:mx-24 lg:mx-48">
      <TypographyH1 className="my-8">This Moment</TypographyH1>
      <div className="space-y-8">
        {contentList.map(
          ({ avatar, nickname, date, content, imageList, videoList }) => (
            <Card key={avatar}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback>
                      {nickname?.at(-1)?.toUpperCase()}
                      {/* todo)) 更新为英文名称缩写或者中文最后一个字 */}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xl text-muted-foreground">
                    {nickname}
                  </span>
                </CardTitle>
                <CardDescription>
                  {new Date(date || "").toLocaleString("zh-CN")}
                </CardDescription>
              </CardHeader>
              <CardContent>{content}</CardContent>
              <CardFooter className="flex-col items-start">
                {imageList?.length &&
                  (imageList.length > 2 ? (
                    <div className="flex space-x-4 ms-0">
                      {imageList.map((image) => (
                        <div key={image} className="">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={image}
                            alt="#"
                            className="object-cover max-h-96"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {imageList.map((image) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={image} src={image} alt="#" />
                      ))}
                    </div>
                  ))}
                {/* image list */}
                {/* link card list */}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </main>
  );
}
