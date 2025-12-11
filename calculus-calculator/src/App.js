import React, { useState } from 'react';
import CalculatorInput from './components/CalculatorInput';
import GraphViewer from './components/GraphViewer';
import SolutionSteps from './components/SolutionSteps';
import Header from './components/Header';
import './styles/main.css';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [steps, setSteps] = useState([]);
    const [graphData, setGraphData] = useState(null);

    const handleCalculate = (calculationType, userInput) => {
        // Logic to calculate limits, derivatives, or integrals
        // Update result, steps, and graphData based on the calculation
    };

    return (
        <div className="App">
            <Header />
            <CalculatorInput onCalculate={handleCalculate} />
            {result && <SolutionSteps steps={steps} />}
            {graphData && <GraphViewer data={graphData} />}
        </div>
    );
}

export default App;