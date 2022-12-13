import { model, Schema } from "mongoose";

const studentData = new Schema({
    name: { type: String, required: true },
    course: { type: String, required: true },
    age:{ type: Number, required: true},
    email: { type: String, required: true},
    createAt: { type: Date, default: Date.now, immutable: true },
  });
  
  const studentDataModel = model("studentData", studentData);
  
  export { studentDataModel };
  