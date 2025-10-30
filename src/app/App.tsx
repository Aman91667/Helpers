import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryProvider } from './providers/QueryProvider';
import { AuthProvider } from './providers/AuthProvider';
import ErrorBoundary from '@/core/errors/ErrorBoundary';
import ScrollToTop from '@/shared/components/layout/ScrollToTop';

// Pages
import HomePage from '@/features/home/pages/HomePage';
import LoginPage from '@/features/auth/pages/LoginPage';
import BecomeHelperPage from '@/features/helpers/pages/BecomeHelperPage';
import HelperRegistrationPage from '@/features/helpers/pages/HelperRegistrationPage';
import HelperDashboardPage from '@/features/helpers/pages/HelperDashboardPage';
import BookHelperPage from '@/features/helpers/pages/BookHelperPage';
import SearchingPage from '@/features/helpers/pages/SearchingPage';
import TrackingPage from '@/features/helpers/pages/TrackingPage';
import HelpPage from '@/features/helpers/info/pages/HelpPage';
import AboutPage from '@/features/helpers/info/pages/AboutPage';
import PrivacyPolicyPage from '@/features/helpers/info/pages/PrivacyPolicyPage';
import NotFoundPage from '@/pages/NotFoundPage';

const App = () => {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AuthProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                {/* Core Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/become-healper" element={<BecomeHelperPage />} />
                <Route path="/healper-registration" element={<HelperRegistrationPage />} />
                <Route path="/healper-dashboard" element={<HelperDashboardPage />} />

                {/* Helper Interaction */}
                <Route path="/book-helper" element={<BookHelperPage />} />
                <Route path="/searching" element={<SearchingPage />} />
                <Route path="/tracking" element={<TrackingPage />} />

                {/* Informational Pages */}
                <Route path="/help" element={<HelpPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

                {/* Fallback */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </TooltipProvider>
      </QueryProvider>
    </ErrorBoundary>
  );
};

export default App;
