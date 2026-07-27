import React from "react"; 
import EmployeeSection from "./EmployeeSection";        
    function Dashboard({ employee }) {
        return <EmployeeSection employee={employee} />;
    }
    export default Dashboard;