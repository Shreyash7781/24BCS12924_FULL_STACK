import Courselist from "./Courselist";
function CourseCatalog({onEnroll}){
    return (
        <div>
            <h2>Course Catalog</h2>
            <Courselist onEnroll={onEnroll}></Courselist>
        </div>
    );
}
export default CourseCatalog;