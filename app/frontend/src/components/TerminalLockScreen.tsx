import React, { useState, useEffect, useRef } from 'react';

interface TerminalLockScreenProps {
  onUnlock: () => void;
}

const TerminalLockScreen: React.FC<TerminalLockScreenProps> = ({ onUnlock }) => {
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const bootMessages = [
    '> Initializing Heartbeat Protocol...',
    '> Loading Shared Memories...',
    '> ERROR: Encrypted Directory found.',
    '> Please enter the Decryption Key to proceed.',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootMessages.length) {
        setBootSequence((prev) => [...prev, bootMessages[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowInput(true);
        }, 300);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === '23122003') {
      setError('');
      setIsUnlocking(true);
      
      // Start unlock sequence
      setTimeout(() => {
        onUnlock();
      }, 3000);
    } else {
      setError('> Access Denied. Try again.');
      setPassword('');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Binary cascade animation during unlock */}
      {isUnlocking && (
        <div className="absolute inset-0 z-50 binary-cascade">
          <div className="binary-rain"></div>
          <div className="white-fade"></div>
        </div>
      )}

      {/* Terminal content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-4xl">
          {/* Boot sequence */}
          {bootSequence.map((message, index) => (
            <div
              key={index}
              className="terminal-text mb-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {message}
            </div>
          ))}

          {/* Password input */}
          {showInput && !isUnlocking && (
            <form onSubmit={handleSubmit} className="mt-6 animate-fade-in">
              <div className="flex items-center">
                <span className="terminal-text mr-2">{'>'}</span>
                <input
                  ref={inputRef}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-none outline-none terminal-text flex-1 cursor-blink"
                  placeholder="Enter decryption key..."
                  autoComplete="off"
                />
              </div>
            </form>
          )}

          {/* Error message */}
          {error && (
            <div className="terminal-text text-red-500 mt-2 animate-fade-in">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .terminal-text {
          font-family: 'VT323', 'Courier New', monospace;
          font-size: 1.5rem;
          color: #00FF00;
          text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
          letter-spacing: 0.05em;
        }

        .cursor-blink::after {
          content: '_';
          animation: cursor-blink 1s step-end infinite;
        }

        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        input::placeholder {
          color: rgba(0, 255, 0, 0.4);
        }

        /* Binary cascade effect */
        .binary-cascade {
          animation: cascade-fade 3s ease-in-out forwards;
        }

        .binary-rain {
          position: absolute;
          inset: 0;
          background: black;
          overflow: hidden;
        }

        .binary-rain::before,
        .binary-rain::after {
          content: '0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101';
          position: absolute;
          top: -100%;
          left: 0;
          right: 0;
          font-family: 'VT323', monospace;
          font-size: 1.2rem;
          color: #00FF00;
          text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
          white-space: pre-wrap;
          word-break: break-all;
          line-height: 1.4;
          animation: fall 2s linear forwards;
          opacity: 0.8;
        }

        .binary-rain::after {
          animation-delay: 0.3s;
        }

        @keyframes fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .white-fade {
          position: absolute;
          inset: 0;
          background: white;
          opacity: 0;
          animation: fade-white 3s ease-in-out forwards;
          animation-delay: 1.5s;
        }

        @keyframes fade-white {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes cascade-fade {
          0% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }

        /* Responsive text size */
        @media (max-width: 768px) {
          .terminal-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TerminalLockScreen;
