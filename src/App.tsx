import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { AboutPage, HomePage, NotFoundPage } from './pages';
import { GithubProvider } from './context/github/GithubContext';
import Compose from './helpers/CombineProviders';

const App = () => {
  return (
    <Compose components={[BrowserRouter, GithubProvider]}>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Compose>
  );
};

export default App;
