function Student({ name, age, course, city }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>City: {city}</p>
    </div>
  );
}

function EmployeeCard({
  employeeName,
  employeeId,
  department,
  salary,
  experience,
}) {
  return (
    <div>
      <h2>Employee Card</h2>
      <p>Name: {employeeName}</p>
      <p>ID: {employeeId}</p>
      <p>Department: {department}</p>
      <p>Salary: ₹{salary}</p>
      <p>Experience: {experience} Years</p>
    </div>
  );
}

function Product({
  productName,
  productPrice,
  productCategory,
  productBrand,
}) {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {productName}</p>
      <p>Price: ₹{productPrice}</p>
      <p>Category: {productCategory}</p>
      <p>Brand: {productBrand}</p>
    </div>
  );
}

function Skills({ skills }) {
  return (
    <div>
      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function UserCard({ user }) {
  const { name, email, phone, city } = user;

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>City: {city}</p>
    </div>
  );
}

function Dashboard(props) {
  return (
    <>
      <Student
        name={props.name}
        age={props.age}
        course={props.course}
        city={props.city}
      />

      <EmployeeCard
        employeeName={props.employeeName}
        employeeId={props.employeeId}
        department={props.department}
        salary={props.salary}
        experience={props.experience}
      />

      <Product
        productName={props.productName}
        productPrice={props.productPrice}
        productCategory={props.productCategory}
        productBrand={props.productBrand}
      />

      <Skills skills={props.skills} />

      <UserCard user={props.user} />
    </>
  );
}

export default Dashboard;