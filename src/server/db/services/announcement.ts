import { prisma } from "server/db/client";
import { z } from "zod";

const announcementSchema = z.object({
  title: z.string(),
  type: z.enum(["success", "info", "error"]),
  description: z.object({
    html: z.string(),
    json: z.string(),
  }),
});

export const insertAnnouncement = async ({ body }: { body: any }) => {
  const { title, type, description } = announcementSchema.parse(body);

  return await prisma.announcement.create({
    data: {
      title,
      type,
      description: {
        create: description,
      },
    },
  });
};

export const updateAnnouncement = async ({
  body,
  id,
}: {
  body: any;
  id: string;
}) => {
  const { title, type, description } = announcementSchema.parse(body);

  return await prisma.announcement.update({
    where: {
      id,
    },
    data: {
      title,
      type,
      description: {
        update: description,
      },
    },
  });
};

export const getAnnouncement = async (id: string) =>
  await prisma.announcement.findFirst({
    where: {
      id,
    },
    include: {
      description: true,
    },
  });

export const getAnnouncementList = async () =>
  await prisma.announcement.findMany();

export const getAnnouncementListHome = async () =>
  await prisma.announcement.findMany({
    take: 3,
    include: {
      description: true,
    },
  });
