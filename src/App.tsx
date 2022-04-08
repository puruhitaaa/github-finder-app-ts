import { BrowserRouter, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">Content</main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
