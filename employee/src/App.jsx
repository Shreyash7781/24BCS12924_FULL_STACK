import React from 'react'
import Dashboard from './Dashboard'

function App() {
  const employee = { 
    EmployeeName: "Rahul Sharma",
    Department: "Engineering",
    LeaveBalance: 12
  };

  return <Dashboard employee={employee} />; 
}

export default App;