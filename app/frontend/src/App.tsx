import React, { useState } from 'react';
import TerminalLockScreen from './components/TerminalLockScreen';
import LoveLetterScroll from './components/LoveLetterScroll';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <div className="w-full min-h-screen">
      {!isUnlocked ? (
        <TerminalLockScreen onUnlock={handleUnlock} />
      ) : (
        <LoveLetterScroll />
      )}
    </div>
  );
}

export default App;
