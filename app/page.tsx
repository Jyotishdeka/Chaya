'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Music, Pause, Play } from 'lucide-react';

export default function ApologyPage() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    // State updates from onPlay/onPause so it stays correct if play fails
  };

  const handleReadClick = () => {
    mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    setHasScrolled(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-blue-50">
      {/* Background music - add daylight.mp3 to /public */}
      <audio
        ref={audioRef}
        loop
        src="/Let-her-go.mp3"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      />
      {/* Floating music toggle */}
      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
        title={isMusicPlaying ? 'Pause Daylight' : 'Play Daylight – Taylor Swift'}
      >
        {isMusicPlaying ? <Pause className="h-6 w-6" /> : <Music className="h-6 w-6" />}
      </button>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center fade-in">
          <div className="mb-8 flex justify-center">
            <div className="float">
              <img
                src="/cat-sorry.webp"
                alt="Cute cat saying sorry"
                className="h-48 w-48 sm:h-64 sm:w-64 rounded-full shadow-xl object-fill"
              />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4 text-balance leading-tight">
            I'm Sorry, Baby 💕
          </h1>
          <p className="text-xl sm:text-2xl text-primary mb-6 font-light fade-in-delay-1">
            I know words aren't enough, but I need you to hear this...
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 font-light fade-in-delay-2">
            Please read this with all the love I have for you ✨
          </p>
          <div className="fade-in-delay-3">
            <Button
              onClick={handleReadClick}
              className="px-8 py-6 text-base rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              Let Me Explain 💌
            </Button>
          </div>
        </div>
      </section>

      {/* Main Message Section */}
      <section
        ref={mainContentRef}
        className="flex items-center justify-center min-h-screen px-4 py-16"
      >
        <div className="w-full max-w-2xl">
          <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 sm:p-14 fade-in border-2 border-pink-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Dear Chaya 💔</h2>
              <p className="text-muted-foreground italic">My heart is heavy, but I'm ready to make this right.</p>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground font-light">
                I know I hurt you, and it breaks me. I won't make excuses, I won't blame anything else. The truth is, Chaya, I messed up badly, and I own every bit of it.
              </p>
              <p className="text-lg leading-relaxed text-foreground font-light">
                I was so caught up planning a future with you that I forgot to protect the beautiful present we had. I missed so many moments with you that I should have cherished. That's my biggest regret.
              </p>
              <p className="text-lg leading-relaxed text-foreground font-light">
                These past Hours without you have been the hardest of my life. I've been reflecting every single minute, and I want you to know I'm doing real work on myself—not just saying it, actually doing it.
              </p>
              <p className="text-lg leading-relaxed text-foreground font-light">
                Three years with you, Chaya, weren't just time. They were my life. Every laugh we shared, every adventure, even our fights—they all meant the world to me because they were us. You mean so much more to me than I ever showed you.
              </p>
              <p className="text-lg leading-relaxed text-foreground font-light">
                I'm not saying this to pressure you or manipulate you. I just need you to know that I'm changing. I'm working on being better—better for you, and better for myself.
              </p>
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 my-8">
                <p className="text-lg leading-relaxed text-foreground font-light italic text-center">
                  Chaya, whenever you're ready to talk—if you ever want to—I'll be here. Waiting. Calmly. With all the patience and love you deserve. ❤️
                </p>
              </div>
              <p className="text-lg leading-relaxed text-foreground font-light text-center">
                No matter what happens, all I want is for you to be happy, to smile again, and to have everything you deserve. You're truly special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="flex items-center justify-center min-h-screen px-4 py-16">
        <div className="w-full max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary text-center mb-4 fade-in">
            I'm Changing 💪
          </h2>
          <p className="text-center text-muted-foreground mb-12 fade-in-delay-1 text-lg">
            Not just saying it—actually doing the work
          </p>
          <ul className="space-y-6">
            {[
              { emoji: '👂', text: 'Actually listening to you without getting defensive or angry' },
              { emoji: '😤', text: 'Learning to control my anger and think before I react' },
              { emoji: '❤️', text: 'Being truly present with you, not just physically but emotionally' },
              { emoji: '🌹', text: 'Cherishing what we have TODAY, not always chasing tomorrow' },
            ].map((item, index) => (
              <li
                key={index}
                className={`flex items-start gap-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 fade-in ${
                  index === 0
                    ? ''
                    : index === 1
                      ? 'fade-in-delay-1'
                      : index === 2
                        ? 'fade-in-delay-2'
                        : 'fade-in-delay-3'
                }`}
              >
                <span className="text-3xl flex-shrink-0 mt-1">{item.emoji}</span>
                <span className="text-lg text-foreground font-light leading-relaxed pt-1">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing Section */}
      <section className="flex items-center justify-center min-h-screen px-4 py-16">
        <div className="w-full max-w-2xl text-center">
          <div className="fade-in space-y-8">
            <div className="heartbeat mb-8 flex justify-center">
              <span className="text-8xl">💕</span>
            </div>
            <p className="text-3xl sm:text-4xl leading-relaxed text-foreground font-bold">
              Thank you, Chaya, for the beautiful years.
            </p>
            <p className="text-xl text-primary font-light">
              Every moment with you was precious, and I took it for granted.
            </p>
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl p-8 my-8">
              <p className="text-2xl text-foreground font-bold">
                If you ever want to give us another chance...
                <br />
                <span className="text-primary">I promise I'll spend forever making you feel loved.</span>
              </p>
            </div>
            <p className="text-lg text-muted-foreground font-light italic">
              With all my love, honesty, and hope for you, Chaya. 🐱✨
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
