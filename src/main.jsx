import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ 여기만 바꾸면 됨
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
