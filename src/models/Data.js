import {Schema, model, models} from "mongoose";



const UserSchema = new Schema({
    title: {type:String},
    notification: {type:String},
    date: {type: String},
    time: {type: String}
})


const userData = models.userData || model("userData", UserSchema);

export default userData;