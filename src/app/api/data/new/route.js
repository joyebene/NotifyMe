import { connectToDB } from "@/utils/database";
import userData from "@/models/Data";

export const POST = async (req) => {
  const { dataId, title, notification, date, time } = await req.json();

  try {
    await connectToDB();
    const newData = new userData({
      creator: dataId,
      title,
      notification,
      date,
      time,
    });

    await newData.save();

    return new Response(JSON.stringify(newData), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new Notification", { status: 500 });
  }
};
