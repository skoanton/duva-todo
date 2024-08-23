import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Header />
      <main className="h-full">
        <Todos />
      </main>
    </>
  );
}

export default App;
