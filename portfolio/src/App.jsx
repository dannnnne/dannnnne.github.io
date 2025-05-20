import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Hello from './components/hello/hello';
import Header from './components/header';
import About from './components/about/about';
import Stacks from './components/stacks/stacks';
import Projects from './components/project/projects';
import ProjectDetail from './components/project/projectDetail';

import './index.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isProjectDetailPage = location.pathname.startsWith('/project/');

  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section>
                <Hello />
              </section>
              {!isProjectDetailPage && showHeader && <Header />}
              <section>
                <About />
              </section>
              <section>
                <Stacks />
              </section>
              <section>
                <Projects />
              </section>
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
