import { nanoid } from "nanoid";

class Course {
  constuctor(id, { courseName, cat, price, email, teachingAssist }) {
    this.courseName = courseName;
    this.id = id;
    this.cat = cat;
    this.email = email;
    this.teachingAssist = teachingAssist;
  }
}
const courseHolder = {};

const resolvers = {
  getCourse: ({ id }) => {
    return new Course(id, courseholder[id]);
  },

  createCourse: (_, { input }) => {
    let id = nanoid();
    courseholder[id] = input;
    console.log("this is working");
    return new Course(id, Course);
  },
};

export default resolvers;
