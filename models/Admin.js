import mongoose from "mongoose";
import { type } from "os";

const Schema = mongoose.Schema;

const AdminSchema = new Schema({

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Invalid email address"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
        select: false, // Prevent the password from being returned in queries
    },

    role: {
        type: String,
        enum: ["patient", "admin", "doctor"],
        default: "admin", // Default role if not specified
        required: [true, "Role is required"],
    }
});

export default mongoose.model("Admin", AdminSchema);