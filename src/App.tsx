import { Route, Routes, useLocation } from 'react-router-dom'
import { routes } from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RouteSync from './components/RouteSync'
import ErrorBoundary from './components/ErrorBoundary'
import HomePage from './pages/HomePage'
import CulturesPage from './pages/CulturesPage'
import CultureDetailPage from './pages/CultureDetailPage'
import StoryPage from './pages/StoryPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <RouteSync />
      <Navbar />
      <div className="app-main" id="main-content" tabIndex={-1}>
        <ErrorBoundary>
          <Routes location={location} key={location.pathname}>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.tribes} element={<CulturesPage />} />
            <Route path={`${routes.tribes}/:cultureId`} element={<CultureDetailPage />} />
            <Route path={routes.story} element={<StoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  )
}
