import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Course {
    id: ID
    courseName: String
    cat: String
    price: Int
    email: String
    teachingAssist: [TechAssist]

}
    type TechAssist{
    firstName: String
    LastName: String
    exp: Int
}
    enum STACK{
    WEB
    MOBILE
    OTHER
}
    type Query {
    getCourse(id: ID):Course
}
    input CourseInput{
    id: ID
    courseName: String
    cat: String
    price: Int
    email: String
    teachingAssist: [TechAssistInput]
}
    input TechAssistInput{
    firstName: String
    LastName: String
    exp: Int
}
    type Mutation{
    CreateCourse(input: CourseInput): Course
}
`);
export default schema;
