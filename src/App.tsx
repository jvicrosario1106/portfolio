import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { ContactPage } from './pages/ContactPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { HomePage } from './pages/HomePage';
import { InterestsPage } from './pages/InterestsPage';
import { StackPage } from './pages/StackPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="stack" element={<StackPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="interests" element={<InterestsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
