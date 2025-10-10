// src/components/DynamicParagraph.js
import React from 'react';
import { useContent } from '../admin/Hook';

const Collapse = ({ 
  page, 
  section, 
  defaultContent, 
  as: Component = "p",
  showTitle = false,
  titleLevel = "h1",
  ...props 
}) => {
  const content = useContent(page, section, defaultContent);

  const TitleTag = titleLevel;

  return (
    <div {...props}>
      {showTitle && content.titre && <TitleTag>{content.titre}</TitleTag>}
      <Component>{content.contenu}</Component>
    </div>
  );
};

export default Collapse;