import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Alert, Footer, Navbar } from './components';
import { useAlert } from './hooks/useAlert';
import { AboutPage, HomePage, NotFoundPage } from './pages';

const App = () => {
  const { msg, type } = useAlert((state) => ({
    msg: state.msg,
    type: state.type,
  }));

  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
          {msg !== '' || type !== '' ? <Alert /> : null}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
