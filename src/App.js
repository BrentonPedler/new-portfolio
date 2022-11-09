import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Nav from './components/navbar';
import Pageload from './components/pageload';

function App() {
  const [loadState, setLoadState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadState(false);
    }, 500)
  }, [])

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Nav loadState={loadState} />
      {loadState ?
        <Pageload />
        :
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
        </Routes>}
    </div>
  );
}

export default App;
