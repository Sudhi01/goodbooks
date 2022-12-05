import React, { useState } from "react";

import "./styles.css";

const bookList = {
  coding: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
    { name: "Data Structures and Algorithms Made Easy", rating: "4/5" },
    { name: "Cracking the Coding Interview", rating: "3.5/5" }
  ],
  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],

  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ],
  SelfEsteem: [
    {
      name: "Bhagavad Gita",
      rating: "5/5"
    },
    {
      name: "Power of Subconsious Mind",
      rating: "5/5"
    },
    {
      name: "Think and grow rich",
      rating: "3/5"
    }
  ]
};

const bookSection = Object.keys(bookList);

export default () => {
  var [selectSection, setSelectSection] = useState("SelfEsteem");

  function chooseSection(section) {
    setSelectSection(section);
  }

  return (
    <div className="app">
      <h1>📚goodBooks</h1>
      <p> My favourite Books. click on section you like</p>

      <div>
        {bookSection.map((section) => (
          <button
            onClick={() => {
              chooseSection(section);
            }}
            key={section}
          >
            {section}
          </button>
        ))}
      </div>

      <hr />

      <div>
        <ul>
          {bookList[selectSection].map((book) => (
            <li key={book.name}>
              <p>{book.name} </p>
              <p>{book.rating} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
