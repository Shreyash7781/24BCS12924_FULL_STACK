import React from "react";
function LeaveForm({ employee }) {
    return (
        <div>
            <h2>Employee Name: {employee.EmployeeName}</h2>
            <h3>Department: {employee.Department}</h3>
            <h4>Leave Balance: {employee.LeaveBalance}</h4>
        </div>
    );
}   
export default LeaveForm;