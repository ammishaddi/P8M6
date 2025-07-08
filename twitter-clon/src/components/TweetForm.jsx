import { useState } from "react";
import './estilos.css';

const TweetForm = ({ onAddTweet }) => {

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTweet(text);
    setText("");

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        id= "que"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="¿Qué estás pensando?"

      />

      <button type="submit">Tweet</button>

    </form>

  );

};

export default TweetForm;