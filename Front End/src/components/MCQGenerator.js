// src/components/MCQGenerator.js
import React, { useState, useEffect } from 'react';

const MCQGenerator = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const response = await fetch('http://127.0.0.1:8000/heroes/');
        const jsonQuestions = await response.json();
        setQuestions(jsonQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <h2>MCQ Generator</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <ul>
            {question.options.split(' ').map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
          <p>Correct Answer: {question.correctAnswer}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MCQGenerator;
