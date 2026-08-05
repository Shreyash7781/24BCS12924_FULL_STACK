import CourseCatalog from "./CourseCatalog";
function Dashboard({onEnroll}){
    return <CourseCatalog onEnroll={onEnroll}></CourseCatalog>;
}
export default Dashboard;