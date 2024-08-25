import Header from "./components/Header";
import Todos from "./components/Todos";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <Header />
      <main className="flex flex-col justify-between">
        <Todos />
      </main>
    </TodoProvider>
  );
}

export default App;
