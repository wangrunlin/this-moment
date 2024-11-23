import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 清理现有数据
  await prisma.post.deleteMany();

  // 创建测试数据
  const posts = [
    {
      avatar: "https://github.com/wangrunlin.png",
      nickname: "Leo Wang",
      date: new Date("2024-03-28T20:44:40"),
      content:
        "Just finished an amazing coding session! Built some cool new features for my latest project. Love how the UI is coming together. What do you think about these design inspirations? 🚀 #coding #webdev",
      imageList: [
        "https://images.unsplash.com/photo-1711834231479-5f6d4556d6f3",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      ],
      videoList: [],
    },
    {
      avatar: "https://github.com/wangrunlin.png",
      nickname: "阿林",
      date: new Date("2024-03-28T20:58:40"),
      content:
        "春天来了，公园里的樱花开得真美！周末和朋友一起去野餐，度过了愉快的下午。分享一些照片，希望这份美好也能传递给大家 🌸 #春天 #樱花 #周末",
      imageList: [
        "https://images.unsplash.com/photo-1522383225653-ed111181a951",
        "https://images.unsplash.com/photo-1516353302158-d8ea39485544",
        "https://images.unsplash.com/photo-1518563222397-1875011bbf5a",
        "https://images.unsplash.com/photo-1519674908016-15876737f0f7",
      ],
      videoList: [],
    },
  ];

  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
