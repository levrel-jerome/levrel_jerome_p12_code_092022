import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContainer from "./PageContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
