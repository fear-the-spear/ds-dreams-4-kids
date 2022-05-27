import { useState } from 'react';
import './About.css';

const About = () => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <div className="about">
      <h1>Meet The Founder of DD4K</h1>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>{enteredTitle}</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div>
            <label>Title 2</label>
            <input />
          </div>
          <div>
            <label>Title 3</label>
            <input />
          </div>
        </div>
        <div>
          <button type="submit">Button</button>
        </div>
      </form>
    </div>
  );
};

export default About;
