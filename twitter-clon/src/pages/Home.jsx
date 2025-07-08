import { useState, useEffect } from "react";
import './Home.css'

import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";
import { Link } from 'react-router-dom';

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(storedTweets);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
    };

    setTweets([newTweet, ...tweets]);

  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <section>

            <section className="arriba">
                <h2>INICIO</h2>
                <Link to="/profile">
                <h2 id="botoncito">MI PERFIL</h2>
                </Link> 

                <Link to="/Login">
                <h2>INICIO DE SESIÓN</h2>
                </Link> 

            </section>


            <section>
                <TweetForm onAddTweet={addTweet} />
                <TweetList tweets={tweets} onLike={likeTweet} />

            </section>

            


    </section>

  );

};

export default Home;