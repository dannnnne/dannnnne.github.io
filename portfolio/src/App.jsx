import Hello from './components/hello/hello';
import Header from './components/header';
import About from './components/about/about';
import Stacks from './components/stacks/stacks';
import Projects from './components/project/projects';
import ProjectDetail from './components/project/projectDetail';

import './index.css';

import { Routes, Route } from 'react-router-dom';

function App() {
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
              <section>
                <Header />
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
