import { connectToDB} from "@/utils/database"
import userData from "@/models/Data";

export const GET = async (req, res)=> {
    try {
        
        await connectToDB();

        const latestData = await userData.find().sort({_id: -1}).limit(5);

        if (!latestData) {
            return res.status(404).json({ message: "No data found" });
        }

        return new Response(JSON.stringify(latestData), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all data", { status: 500 });
    }
}