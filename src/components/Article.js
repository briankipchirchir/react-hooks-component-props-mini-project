import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview }) => {
  return (
    <article className="article">
      <h3 className="article-title">{title}</h3>
      <small className="article-date">{date}</small>
      <p className="article-preview">{preview}</p>
    </article>
  );
};

export default Article;
