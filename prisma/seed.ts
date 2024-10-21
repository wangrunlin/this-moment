import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const generateRandomImages = (count: number) => {
  return Array.from(
    { length: count },
    () => `https://picsum.photos/400/300?random=${Math.random()}`
  );
};

export const generateRandomDate = () => {
  const start = new Date(2024, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString();
};

export const moments = [
  "今天的晚霞真美,忍不住拍了张照片分享给大家!",
  "刚刚做完一顿美味的晚餐,自己下厨的感觉真好。",
  "周末去爬山了,空气清新,风景宜人,太治愈了。",
  "新买的书终于到了,迫不及待想开始阅读!",
  "今天在公园遇到了一只超可爱的小狗,好想养一只。",
  "刚学会了一首新的吉他曲,感觉自己进步了不少。",
  "参加了一场很棒的音乐会,现场氛围太震撼了。",
  "终于完成了长期以来的工作项目,松了一口气。",
  "和朋友们一起包饺子,聊天说笑,度过了愉快的一天。",
  "今天是个阳光明媚的好天气,心情也跟着明亮起来了。",
  "今天尝试了一家新开的咖啡店，他们的拿铁真的很棒！",
  "终于学会了冥想，感觉整个人都平静下来了。",
  "周末和家人去了动物园，看到了可爱的熊猫，太萌了！",
  "今天参加了一场马拉松，虽然很累但是很有成就感。",
  "刚刚完成了一幅水彩画，还挺满意的，慢慢在进步。",
  "今晚的月亮特别圆，拍了张照片纪念一下。",
  "第一次尝试做寿司，虽然卷得不太完美，但是味道不错！",
  "今天在旧书店淘到了一本珍藏版的小说，开心！",
  "和朋友一起去看了日出，美得让人窒息。",
  "终于学会了一个魔术小技巧，准备在下次聚会上表演。",
];

export const posts = Array.from({ length: 10 }, () => ({
  author: "Leo Wang",
  avatar: "https://github.com/wangrunlin.png",
  date: generateRandomDate(),
  content: moments[Math.floor(Math.random() * moments.length)],
  images: generateRandomImages(Math.floor(Math.random() * 3) + 1),
})).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

async function main() {
  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }

  console.log("测试数据已成功创建");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
