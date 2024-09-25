import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShareModal } from "@/components/ShareModal";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Props {
  url: URL;
}

export function ShareButton({ url }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  const handleShare = async (content: string, image: File | null, video: File | null) => {
    // 这里处理分享逻辑,例如发送到服务器
    console.log("Shared:", { content, image, video });
    const post = await prisma.post.create({
      data: {
        author: "Leo Wang",
        avatar: "https://github.com/wangrunlin.png",
        date: new Date().toLocaleString("zh-CN"),
        content,
        images: JSON.stringify([image?.name || ""]),
      },
    });
    console.log(post);
    console.log("post created");
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-center bg-background/80 backdrop-blur-sm">
        <Button
          variant="default"
          size="lg"
          className="w-full max-w-screen-sm"
          onClick={() => setIsModalOpen(true)}
        >
          {t("shareNow")}
        </Button>
      </div>
      <ShareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onShare={handleShare}
      />
    </>
  );
}
