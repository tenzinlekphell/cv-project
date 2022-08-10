import EducationalInfo from './components/EducationalInfo';
import GeneralInfo from './components/GeneralInfo';
import PracticalExp from './components/PracticalExp';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <GeneralInfo />
      <EducationalInfo />
      <PracticalExp />
    </div>
  );
}

export default App;
