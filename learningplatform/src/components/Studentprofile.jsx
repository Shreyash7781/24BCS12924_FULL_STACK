import { useUser } from "../UserContext";
function Studentprofile(){
    const {user} = useUser();
    return(
     <div>
        <h2>
            Student Details
        </h2>
        <p>
            Name:{user.name}
        </p>
        <p>
            Email:{user.email}
        </p>
        <p>
            Program:{user.program}
        </p>
     </div>   
    );
}
export default Studentprofile;