import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

const Home = lazy(() => import('./components/Home'));
const TeamsPage = lazy(() => import('./components/TeamsPage'));
const RolesPage = lazy(() => import('./components/RolesPage'));
const TeamPage = lazy(() => import('./components/TeamPage'));
const RolePage = lazy(() => import('./components/RolePage'));
const OpenCall = lazy(() => import('./components/OpenCall'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/members-workflows-guidelines/">
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/team/:teamId" element={<TeamPage />} />
            <Route path="/team/:teamId/:roleSlug" element={<RolePage />} />
            <Route path="/open-call" element={<OpenCall />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
