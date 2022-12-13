import { studentDataModel } from "../db/modals/StudentData";

async function addStudent(req, res) {
  const { name, course, email, age } = req.body;
  const arr = await studentDataModel.find({ name: name, email: email });
  console.log(arr);
  if (!arr.length) {
    try {
      await studentDataModel.create({
        name: name,
        course: course,
        age: age,
        email: email,
      });
    } catch (e) {
      return res.status(500).send(e.message);
    }
    // return res.status(200).send("values stored successfully");
    res.render("submit", {
      name: name,
      course: course,
      age: age,
      email: email,
    });
  }
  return res.status(300).send("value already exists");
}

export { addStudent };
