// contexts/ContentContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export const ContentProvider = ({ children }) => {
  const [contents, setContents] = useState({});

  // Charger les contenus depuis le localStorage au démarrage
  useEffect(() => {
    const savedContents = localStorage.getItem('websiteContents');
    if (savedContents) {
      setContents(JSON.parse(savedContents));
    }
  }, []);

  // Sauvegarder dans le localStorage à chaque modification
  const updateContent = (key, newContent) => {
    const updatedContents = {
      ...contents,
      [key]: newContent
    };
    setContents(updatedContents);
    localStorage.setItem('websiteContents', JSON.stringify(updatedContents));
  };

  const value = {
    contents,
    updateContent
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};