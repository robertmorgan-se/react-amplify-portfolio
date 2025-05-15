import Header from './components/layout/Header';
import Home from './pages/Home';
import './styles/globals.css';

const App = () => {
  return (
    <>
      <Header />
      <div className="main-content"> {/* Ensures padding for the header */}
        <Home />
      </div>
    </>
  );
};

export default App;
