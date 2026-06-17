import ClassComponent from "./components/ClassComponent";
import Counter from "./components/Counter";
import ObjectState from "./components/ObjectState";
import ArrayRender from "./components/ArrayRender";
import ArrayObjectRender from "./components/ArrayObjectRender";

function App() {
  return (
    <>
      <h1>React State & Lifecycle Methods</h1>

      <ClassComponent />

      <hr />

      <Counter />

      <hr />

      <ObjectState />

      <hr />

      <ArrayRender />

      <hr />

      <ArrayObjectRender />
    </>
  );
}

export default App;