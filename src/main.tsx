
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App'; // On enlève l'extension .jsx ici
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("L'élément root n'a pas été trouvé. Vérifiez votre index.html");
}
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
