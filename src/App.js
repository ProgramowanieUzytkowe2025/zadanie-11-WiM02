import { useState } from 'react';
import './App.css';
import { AppHeader } from './AppHeader';
import { AppCalculator } from './AppCalculator';
import { AppCalculationHistory } from './AppCalculationHistory';

function App() {
  const [fontSize, setFontSize] = useState('16px');
  const [history, setHistory] = useState([]);
  
  const [calcValues, setCalcValues] = useState({ a: '', b: '', result: '' });

  const handleCalculate = (a, b, op, res, comp) => {
    setCalcValues({ ...calcValues, result: res });
    setHistory([...history, { a, b, op, res, comp }]);
  };

  const handleRestore = (index) => {
    const item = history[index];
    setCalcValues({
      a: item.a,
      b: item.b,
      result: item.res
    });
    const newHistory = history.slice(0, index + 1);
    setHistory(newHistory);
  };

  return (
    <div className="App" style={{ fontSize: fontSize }}>
      <AppHeader onFontSizeChange={setFontSize} />
      <AppCalculator 
        values={calcValues} 
        setValues={setCalcValues} 
        onCalculate={handleCalculate} 
      />
      <AppCalculationHistory 
        history={history} 
        onRestore={handleRestore} 
      />
    </div>
  );
}

export default App;