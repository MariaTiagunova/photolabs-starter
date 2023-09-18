import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
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
