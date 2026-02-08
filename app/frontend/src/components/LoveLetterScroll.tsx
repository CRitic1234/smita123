import React, { useState, useEffect, useRef } from 'react';
import MediaSection from './MediaSection';
import MusicPlayer from './MusicPlayer';

const LoveLetterScroll: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  useEffect(() => {
    // Start music after component mounts
    const timer = setTimeout(() => {
      setIsMusicPlaying(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cream">
      {/* Music Player */}
      <MusicPlayer isPlaying={isMusicPlaying} onToggle={() => setIsMusicPlaying(!isMusicPlaying)} />

      {/* Header Section */}
      <header className="pt-20 pb-16 px-6 text-center animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-charcoal mb-4">
          For Smita
        </h1>
        <p className="font-terminal text-xl md:text-2xl text-rosegold">
          Subject: The Unhandled Exception
        </p>
      </header>

      {/* Section 1: The Initialization */}
      <MediaSection
        title="The Initialization"
        text="Smita, you know I spend my life trying to make things predictable. I write code to handle errors, I train models to predict outcomes, and I look for logic in everything. My world is usually black screens and green text."
        text2="But then, you happened."
        text3="You didn't fit into any algorithm I knew. You weren't a variable I could declare or a function I could optimize. You were a sudden, beautiful glitch in my system that completely crashed my logic—and for the first time, I didn't want to reboot."
        mediaType="image"
        mediaSrc="/media/image-1.png"
        layout="polaroid"
      />

      {/* Section 2: The Runtime Chaos */}
      <MediaSection
        title="The Runtime Chaos"
        text="They say perfect code doesn't exist. They're right, because the best moments with you are completely unoptimized. They are messy, loud, and don't follow any documentation."
        text2="Whether we are arguing over where to eat or laughing at absolutely nothing, those are the moments my CPU spikes. You bring a chaos into my life that is better than any order I could ever program."
        mediaType="video"
        mediaSrc="/media/video-1.mp4"
        layout="full"
      />

      {/* Section 3: The Training Data */}
      <MediaSection
        title="The Training Data"
        text="In a world obsessed with Artificial Intelligence, you ground me in something real. You are my dataset. Every conversation, every look, every small gesture—it all trains me to be a better version of myself."
        text2="You see the bugs in me that I try to hide, and instead of judging them, you help me patch them. You make the difficult days feel like simple syntax errors—easily fixable as long as you're there to debug them with me."
        mediaType="grid"
        mediaSrc={['/media/image-2.png', '/media/image-3.png', '/media/image-4.png']}
        layout="grid"
      />

      {/* Section 4: The Infinite Loop */}
      <MediaSection
        title="The Infinite Loop"
        text="I'm not looking for a temporary fix or a short-term project. I am looking for Long Term Support (LTS)."
        text2="I want to be there for every version update of your life. Through the crashes, the lags, and the high-performance days. I promise to keep learning you, even when you're complicated, and to support you, even when the server is down."
        mediaType="video"
        mediaSrc="/media/video-2.mp4"
        layout="cinematic"
      />

      {/* Footer Section */}
      <footer className="py-20 px-6 text-center">
        <MediaSection
          text="Smita, in a world full of variables, you are my only constant."
          mediaType="image"
          mediaSrc="/media/image-5.png"
          layout="portrait"
        />
        
        <div className="mt-12 space-y-2">
          <p className="font-terminal text-xl md:text-2xl text-terminal">
            {'> End of Line.'}
          </p>
          <p className="font-terminal text-xl md:text-2xl text-terminal">
            {'> Status: Permanently Yours.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoveLetterScroll;
