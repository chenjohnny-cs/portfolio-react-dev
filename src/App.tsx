import NavigationBar from "./components/navbar";
import About from "./pages/About";
import Contact from "./pages/Contacts";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <NavigationBar />
            <div className="container">
                <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/about"} element={<About />}></Route>
                    <Route path={"/project"} element={<Projects />}></Route>
                    <Route path={"/resume"} element={<Resume />}></Route>
                    <Route path={"/contact"} element={<Contact />}></Route>
                </Routes>
            </div>  
        </>
    )
}

export default App;
