import React, { createContext, useContext, useState, useEffect } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ isMuted, isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
