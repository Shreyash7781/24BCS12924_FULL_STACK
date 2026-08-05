import Studentprofile from "./Studentprofile";
function Courselist({onEnroll}){
    const courses = [
        {id:1,name:"React Basics",price:999},
        {id:2,name:"Node.js Essential",price:1199},
        {id:3,name:"UI/UX design",price:799}];
        return (
            <div>
                {courses.map((course) => (
                    <div key={course.id}>
                        <h3>{course.name}</h3>
                        <p>{course.price}</p>
                        <button onClick={onEnroll}>Enroll</button>
                    </div>
                ))}

            </div>
        );
}
    export default Courselist;  