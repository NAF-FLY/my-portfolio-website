import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { DrawerMenu } from './drawerMenu/drawerMenu';
import { SocialMenu } from './socialMenu/socialMenu';

import Home from "./pages/home";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Sources from "./pages/sources";
import Projects from "./pages/projects";

import './App.css';
import './socialMenu/socialMenu.css';

import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <SocialMenu classes='header__socials' />
      <DrawerMenu />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sources" element={<Sources />} /> */
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
