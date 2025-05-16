import Header from './components/layout/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="bg-slate-100 min-h-screen text-gray-800 antialiased">
      <Header />
      <main className="mx-auto px-4 py-6">
        <Home />
      </main>
    </div>
  );
};

export default App;
