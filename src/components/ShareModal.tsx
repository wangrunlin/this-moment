import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShare: (content: string, image: File | null, video: File | null) => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, onShare }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShare(content, image, video);
    setContent("");
    setImage(null);
    setVideo(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">分享新动态</h2>
        <form onSubmit={handleSubmit}>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="分享你的想法..."
            className="mb-4"
            required
          />
          <h2>图片</h2>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="mb-4"
          />
          <h2>视频（可选）</h2>
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files?.[0] || null)}
            className="mb-4"
          />
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              取消
            </Button>
            <Button type="submit">分享</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
