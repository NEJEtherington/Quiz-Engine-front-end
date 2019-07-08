import React from "react";

const QuizCard = props => {
  // const quiz = props.quiz;
  const newQuiz = (
    <div>
      <p>Simple Arithmetics</p>
      {/* Enclose in Reach Router Link tag - take user to QuizPage  */}
      {/* <p>{quiz.quiz_title}</p>
      <p>{quiz.quiz_id}</p> */}
    </div>
  );
  return newQuiz;
};
export default QuizCard;
