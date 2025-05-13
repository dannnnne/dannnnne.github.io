import Hello from './components/hello';
import Header from './components/header';
import About from './components/about';
import Stacks from './components/stacks';
import Projects from './components/projects';
import ProjectDetail from './components/projectDetail';

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
                <Header />
                <Stacks />
              </section>
              <section>
                <Header />
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
