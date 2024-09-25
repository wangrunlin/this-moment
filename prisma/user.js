import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 创建用户
  const newUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
    },
  });
  console.log("Created new user:", newUser);

  // 查询所有用户
  const allUsers = await prisma.user.findMany();
  console.log("All users:", allUsers);

  // 更新用户
  const updatedUser = await prisma.user.update({
    where: { email: "alice@example.com" },
    data: { name: "Alice Wonderland" },
  });
  console.log("Updated user:", updatedUser);

  // 删除用户
  const deletedUser = await prisma.user.delete({
    where: { email: "alice@example.com" },
  });
  console.log("Deleted user:", deletedUser);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
