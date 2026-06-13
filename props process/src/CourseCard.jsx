function CourseCard({ courseName, duration, fees }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>{courseName}</h2>
      <p>Duration: {duration}</p>
      <p>Fees: ₹{fees}</p>
    </div>
  );
}

export default CourseCard;