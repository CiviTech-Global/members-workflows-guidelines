import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import TeamPage from './components/TeamPage';
import RolePage from './components/RolePage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/members-workflows-guidelines/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/:teamId" element={<TeamPage />} />
          <Route path="/team/:teamId/:roleSlug" element={<RolePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
