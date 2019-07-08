import React from "react";
import QuizCard from "./QuizCard";

const QuizList = props => {
  return (
    <div>
      <QuizCard />
      {/* {props.articles.map(quiz => {
        return (
          <div key={quiz.quiz_id}>
            <QuizCard quiz={quiz} />
          </div>
        );
      })} */}
    </div>
  );
};

export default QuizList;
