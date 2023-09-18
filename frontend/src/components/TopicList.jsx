import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const handleTopicClick = (topicId) => {
    // Call the onTopicClick callback when a topic is clicked
    if (props.onTopicClick) {
      props.onTopicClick(topicId);
    }
  };
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem key={topic.id} topic = {topic} onTopicClick={() => handleTopicClick(topic.id)} />
      ))}
    </div>
  );
};

export default TopicList;
