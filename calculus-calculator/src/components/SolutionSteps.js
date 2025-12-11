import React from 'react';

const SolutionSteps = ({ steps }) => {
    return (
        <div className="solution-steps">
            <h2>Solution Steps</h2>
            <ol>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default SolutionSteps;