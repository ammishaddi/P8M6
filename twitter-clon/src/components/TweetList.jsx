import Tweet from "./Tweet";

import './estilos.css'

const TweetList = ({ tweets, onLike, onDelete }) => {
  return (
    <section id="listaa">
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          onLike={onLike}
          onDelete={onDelete}
        
        />
      ))}
    </section>
  );
};

export default TweetList;
