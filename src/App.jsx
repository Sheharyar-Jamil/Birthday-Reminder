import React, { useState } from "react";
import List from "./components/List";
import data from "./data";

function App() {

  const [people, setPeople] = useState(data);
  const buttonClickHandler = () => {
    setPeople([]);
  }
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people}/>
          <button type="button" onClick={buttonClickHandler}>Clear All</button>
        </section>
      </main>
    </>
  )
}

export default App
