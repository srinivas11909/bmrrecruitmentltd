import { Schema, model, models } from "mongoose";

const JobSchema = Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    category: [{
        type: String
    }],
    jobType:{
        type: String
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    postedOn:{
        type: Date,
        default: Date.now
    }
}, {timeStamps:true }
)


export default models.Job || model("Job", JobSchema);