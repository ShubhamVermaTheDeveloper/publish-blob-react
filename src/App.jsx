import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <main>
          <Outlet />
        </main>
        <footer className="app__footer"></footer>
      </div>
    </>
  );
}

export default App;
