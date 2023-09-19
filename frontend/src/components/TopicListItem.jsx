import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  // Callback function to handle topic clicks
  const handleTopicClick = (topicId) => {
    if (props.onTopicClick) {
      props.onTopicClick(topicId);
    }
  };
  return (
    <div className="topic-list__item" onClick={() => handleTopicClick(props.topic.id)}>
      <span>{props.topic.title}</span>
    </div>
  );
};

export default TopicListItem;
