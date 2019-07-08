import React from "react";
import QuizList from "./QuizList";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h3>Please choose a quiz:</h3>
        <QuizList />
      </div>
    );
  }
}

export default HomePage;
