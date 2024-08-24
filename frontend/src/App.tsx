import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between">
        <Todos />
      </main>
    </>
  );
}

export default App;
