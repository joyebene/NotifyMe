import { connectToDB} from "@/utils/database"
import userData from "@/models/Data";

//GET (read)
export const GET = async (req, { params }) => {
  try {
    await connectToDB();



    const data = await userData.findById(params.id);

    if (!data) return new Response("Data not Found", { status: 404 });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all data", { status: 500 });
  }
};

//PaTCH (update)
export const PATCH = async (req, { params }) => {
  const {  notification, date, time } = await req.json();
  

  try {
    await connectToDB();
    const existingData = await userData.findById(params.id);

    if (!existingData) return new Response("Data not found", { status: 404 });
  
    
    existingData.notification = notification;
    existingData.date = date;
    existingData.time = time;

    await existingData.save();
    
    // console.log("hry");
    

    return new Response(JSON.stringify(existingData), { status: 200 });
  } catch (error) {
    return new Response("Failed to update data", { status: 500 });
  }
};

//DELETE (delete)

export const DELETE = async (req, { params }) => {
  
  
  try {
    await connectToDB();

    await userData.findByIdAndDelete(params.id);
    console.log(params);
    return new Response(`Data deleted successfully`, { status: 200 });
  } catch (error) {
    return new Response("Failed to delete data", { status: 500 });
  }
};
