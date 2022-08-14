import CVBuilder from './components/CVBuilder';
import './styles/app.css';

function App() {
  return (
    <div className="cv-container">
      <div className="cv-template">
        <CVBuilder />
      </div>
    </div>
  );
}

export default App;
