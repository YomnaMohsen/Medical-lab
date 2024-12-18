import mongoose from "mongoose";
import { type } from "os";

const Schema = mongoose.Schema;

const testItemSchema = new mongoose.Schema({
    testName: {
        type: String,
        required: [true, "Test name is required"],// cholesterol
    },
    result: {
        type: String,
        required: [true, "Test result is required"],
    },
    unit: {
        type: String, // e.g., "mg/dL", "mmol/L"
    },
    referenceRange: {
        type: String, // e.g., "150-200 mg/dL"
    },
});

// Define the schema for the overall test result
const testResultSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient", // Reference to the patient
        required: true,
    },
    title: {
        type: String,
        required: [true, "Test title is required"], // e.g., "Lipids Profile"
    },
    items: [testItemSchema], // Array of test items
    date: {
        type: Date,
        default: Date.now, // When the test was conducted
    },
});

export default mongoose.model("TestResult", testResultSchema);;