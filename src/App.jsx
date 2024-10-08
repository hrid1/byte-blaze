import "./App.css";
import Nav from "./components/Nav";
import Blogs from "./pages/Blogs";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <h1>Vite + React</h1> */}

      <Nav></Nav>

      <Home>/</Home>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </>
  );
}

export default App;
