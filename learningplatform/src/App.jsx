import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PropDashboard from "./components/propDrilling/PropDashboard";

function App() {
  const user = {
    name: "Karan Mehta",
    email: "karan@gmail.com",
    program: "Web Development"
  };

  const [enrolledCount, setEnrolledCount] = useState(0);

  useEffect(() => {
    console.log(`Enrollment updated. Total courses: ${enrolledCount}`);
  }, [enrolledCount]);

  function handleEnroll() {
    setEnrolledCount(enrolledCount + 1);
  }

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>SKILLNEST - ONLINE LEARNING PLATFORM</h1>

        <Navbar enrolledCount={enrolledCount} />
        <Dashboard onEnroll={handleEnroll} />

        <hr />

        <h2>Prop Drilling Example</h2>
        <PropDashboard user={user} />
      </div>
    </UserContext.Provider>
  );
}

export default App;