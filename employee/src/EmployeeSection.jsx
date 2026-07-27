import React from "react";
import LeaveForm from "./LeaveForm";    
    function EmployeeSection({ employee }) {
        return<LeaveForm employee={employee} />;
    }
    export default EmployeeSection;