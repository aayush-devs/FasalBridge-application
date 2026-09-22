import React from 'react';

interface PageHeadProps {
  tag: string;
  title: string;
  text: string;
  action?: React.ReactNode;
}

export const PageHead: React.FC<PageHeadProps> = ({ tag, title, text, action }) => {
  return (
    <section className="pagehead-container">
      <div className="pagehead-inner">
        <div className="pagehead-text">
          <div className="eyebrow-tag">{tag}</div>
          <h1 className="pagehead-title">{title}</h1>
          <p className="pagehead-desc">{text}</p>
        </div>
        {action && <div className="pagehead-action">{action}</div>}
      </div>
    </section>
  );
};
