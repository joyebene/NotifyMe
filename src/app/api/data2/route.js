import { connectToDB } from "@/utils/database";
import userData from "@/models/Data";

export const GET = async (req) => {
    try {
        await connectToDB();

        const data = await userData.find().sort({_id: -1})
  
        if (!data) return new Response("Data not Found", { status: 404 });

        return new Response(JSON.stringify(data), {status: 200})
    } catch (error) {
        
        return new Response("Failed to fetch all data", {status: 500});
       
        
    }
}