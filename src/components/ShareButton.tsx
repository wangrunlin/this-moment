import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShareModal } from "@/components/ShareModal";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";
import { posts } from "@/pages/index.astro";

interface Props {
  url: URL;
}

export function ShareButton({ url }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  const handleShare = (content: string, image: File | null, video: File | null) => {
    // 这里处理分享逻辑,例如发送到服务器
    console.log("Shared:", { content, image, video });
    posts.push({
      author: "Leo Wang",
      avatar: "https://github.com/wangrunlin.png",
      date: new Date().toLocaleString("zh-CN"),
      content,
      images: [image?.name || ""],
    });
    console.log(posts);
    // 在实际应用中,您需要将这些数据发送到服务器
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
