import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.task.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Teset Task 1",
      color: "Blue",
      completed: false,
    },
  });

  await prisma.task.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Test Task 2",
      color: "Red",
      completed: false,
    },
  });

  await prisma.task.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "Test Task 3",
      color: "Yellow",
      completed: false,
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
