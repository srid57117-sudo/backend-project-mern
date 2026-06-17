function ArrayRender() {

  const fruits = [
    "Apple",
    "Orange",
    "Mango",
    "Banana",
    "Grapes",
  ];

  return (
    <div>
      <h2>Array Rendering</h2>

      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </div>
  );
}

export default ArrayRender;