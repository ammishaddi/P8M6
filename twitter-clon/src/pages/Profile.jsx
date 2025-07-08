
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TweetList from "../components/TweetList";

const Profile = () => {
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(storedTweets);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  const deleteTweet = (id) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== id);
    setTweets(updatedTweets);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <section>
      <section>
        <h2>MI PERFIL</h2>
        <p>administrar mis tweets</p>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </section>

      <section>
        <TweetList tweets={tweets} onLike={likeTweet} onDelete={deleteTweet} />
      </section>
    </section>
  );
};

export default Profile;
