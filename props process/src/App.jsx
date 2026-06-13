import Dashboard from "./Dashboard";
import PropsDrilling from "./PropsDrilling";
import CourseCard from "./CourseCard";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  const user = {
    name: "Sudhan",
    email: "sudhan@gmail.com",
    phone: "9876543210",
    city: "Chennai",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Props Tasks</h1>

      <Dashboard
        name="Sudhan"
        age={22}
        course="MERN Stack"
        city="Chennai"
        employeeName="Sudhan"
        employeeId="EMP101"
        department="IT"
        salary={50000}
        experience={2}
        productName="Laptop"
        productPrice={60000}
        productCategory="Electronics"
        productBrand="Dell"
        skills={skills}
        user={user}
      />

      <hr />

      <PropsDrilling
        companyName="Infosys"
        employeeName="Sudhan"
        employeeRole="React Developer"
        employeeSalary={60000}
        name="Sudhan"
        course="MERN"
      />

      <hr />

      <h1>Course Cards</h1>

      <CourseCard
        courseName="MERN Stack"
        duration="6 Months"
        fees={30000}
      />

      <CourseCard
        courseName="Python Full Stack"
        duration="5 Months"
        fees={25000}
      />

      <CourseCard
        courseName="Java Full Stack"
        duration="6 Months"
        fees={28000}
      />
    </div>
  );
}

export default App;