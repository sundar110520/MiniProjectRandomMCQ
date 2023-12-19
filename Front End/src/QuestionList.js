// QuestionList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch random questions from the Django backend
    const fetchQuestions = async () => {
      try {
        
        const response = await axios.get('http://localhost:8000/heroes/');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []); // Run once when the component mounts

  return (
    <div>
      <h1>Random MCQs</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.name}</h3>
          <ul>
            {question.name.map((alias) => (
              <li key={question.id}>{question.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
