import Home from "./Home";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeDiv from "./HomeDiv";
import AboutUsDiv from "./AboutUsDiv";
import AboutUs from "./AboutUs";
import ProjectsDiv from "./ProjectsDiv";
import Projects from "./Projects";
import BlogDiv from "./BlogDiv";
import Blog from "./Blog";
import ContactsDiv from "./ContactsDiv";
import Contacts from "./Contacts";
import NotFound from "./NotFound";

function App() {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="header__block">
                        <h2>go.arch</h2>
                        <h2 className="big1">01 <sup>/ 03</sup></h2>
                    </div>
                    <div className="header__links">
                        <div className="header__links-left">
                            <a href="tel:+72126742510">+7 (212) 674-25-10</a>
                        </div>
                        <div className="header__links-right">
                            <ul>
                                <li><a href="/">HOME</a></li>
                                <li><a href="/AboutUs">ABOUT US</a></li>
                                <li><a href="/Projects">PROJECTS</a></li>
                                <li><a href="/Blog">BLOG</a></li>
                                <li><a href="/Contacts">CONTACTS</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomeDiv/>}/>
                        <Route path="/AboutUs" element={<AboutUsDiv/>}/>
                        <Route path="/Projects" element={<ProjectsDiv/>}/>
                        <Route path="/Blog" element={<BlogDiv/>}/>
                        <Route path="/Contacts" element={<ContactsDiv/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Router>
            </header>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/AboutUs" element={<AboutUs/>}/>
                    <Route path="/Projects" element={<Projects/>}/>
                    <Route path="/Blog" element={<Blog/>}/>
                    <Route path="/Contacts" element={<Contacts/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
