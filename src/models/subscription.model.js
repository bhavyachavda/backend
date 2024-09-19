import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subsciber: {
        type: Schema.Types.ObjectId,  // One who is subscribing
        ref: "User"
    },
    channel: {
        type: SchemaType.Types.ObjectId, // one to whom 'subscriber' is subscribing
        ref: "User"
    }
}, {timestamps: true});


export const Subscription = mongoose.model("Subscription", subscriptionSchema); 