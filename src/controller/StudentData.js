import { studentDataModel } from "../db/modals/StudentData";

async function addStudent(req, res) {
  const { name, course, email, age } = req.body;
  const arr = await studentDataModel.find({ name: name, email: email });
  console.log(arr);
  if (arr.length === 0) {
    try {
      await studentDataModel.create({
        name: name,
        course: course,
        age: age,
        email: email,
      });
    } catch (e) {
        return res.render("error", {error: e.message})
    }
    // return res.status(200).send("values stored successfully");
    res.render("submit", {
      name: name,
      course: course,
      age: age,
      email: email,
    });
  } else
  return res.render("error", {error: "Value already exists!"})
}

export { addStudent };
