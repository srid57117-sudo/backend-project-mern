function Employee({
  companyName,
  employeeName,
  employeeRole,
  employeeSalary,
}) {
  return (
    <div>
      <h2>Employee Details</h2>

      <p>Company: {companyName}</p>
      <p>Name: {employeeName}</p>
      <p>Role: {employeeRole}</p>
      <p>Salary: ₹{employeeSalary}</p>
    </div>
  );
}

function Company(props) {
  return <Employee {...props} />;
}

function GrandChild({ name, course }) {
  return (
    <div>
      <h2>GrandChild Component</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function Child({ name, course }) {
  return <GrandChild name={name} course={course} />;
}

function Parent({ name, course }) {
  return <Child name={name} course={course} />;
}

function PropsDrilling(props) {
  return (
    <>
      <h1>Company Dashboard</h1>

      <Company
        companyName={props.companyName}
        employeeName={props.employeeName}
        employeeRole={props.employeeRole}
        employeeSalary={props.employeeSalary}
      />

      <h1>Props Drilling Example</h1>

      <Parent
        name={props.name}
        course={props.course}
      />
    </>
  );
}

export default PropsDrilling;