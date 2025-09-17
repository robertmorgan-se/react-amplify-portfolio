import Header from './components/layout/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-slate-100 min-h-screen text-gray-800 antialiased">
      <Header />
      <main className="mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
