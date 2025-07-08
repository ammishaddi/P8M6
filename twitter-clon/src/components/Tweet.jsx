// import { useState } from "react"; //
import './estilos.css';

const Tweet = ({ tweet, onLike, onDelete }) => {
  return (
    <section className="tweet">
      <p>{tweet.text}</p>
      <button onClick={() => onLike(tweet.id)}>
        ❤ {tweet.likes}
      </button>
      {onDelete && (
        <button onClick={() => onDelete(tweet.id)}>
          🗑 Borrar
        </button>
      )}
    </section>
  );
};

export default Tweet;
