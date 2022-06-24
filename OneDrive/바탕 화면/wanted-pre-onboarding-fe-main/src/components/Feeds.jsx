import React from 'react';
import FeedsList from './FeedsList';
import { getFeeds } from '../api';
import { useState } from 'react';
import { useEffect } from 'react';

// CSS
import './Feeds.css';
export default function Feeds() {
  const [feedState, setFeedState] = useState([]);

  const handleLoad = async () => {
    const FeedList = await getFeeds();
    console.log(FeedList);
    setFeedState(FeedList);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {/* <button onClick={handleLoad}>버튼</button> */}

      <ul className="FeedList">
        {feedState &&
          feedState.map((feed) => {
            return (
              <li key={feed.id}>
                <FeedsList feed={feed} />
              </li>
            );
          })}
      </ul>
    </>
  );
}
