import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShareModal } from "@/components/ShareModal";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";

interface Props {
  url: URL;
}

export function ShareButton({ url }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  const handleShare = async (content: string, image: File | null, video: File | null) => {
    console.log("Shared:", { content, image, video });

    try {
      const formData = new FormData();
      formData.append("content", content);
      if (image) formData.append("image", image);
      if (video) formData.append("video", video);

      const response = await fetch("/api/create-post", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("发布失败");
      }

      const post = await response.json();
      console.log(post);
      console.log("post created");
      // 刷新页面
      window.location.reload();
    } catch (error) {
      console.error("发布错误:", error);
    }
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
