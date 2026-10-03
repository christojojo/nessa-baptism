"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface MusicControlProps {
  isOpened: boolean;
}

export function MusicControl({ isOpened }: MusicControlProps) {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showNotice, setShowNotice] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize and check audio availability
  useEffect(() => {
    const audio = new Audio();
    audio.src = "/audio/baptism-background.mp3";
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const handleCanPlay = () => {
      setIsAvailable(true);
    };

    const handleError = () => {
      setIsAvailable(false);
      setIsPlaying(false);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);

    // Initial check to see if file exists on server
    fetch("/audio/baptism-background.mp3", { method: "HEAD" })
      .then((res) => {
        // If response is not ok (e.g. 404), mark unavailable
        const contentType = res.headers.get("content-type") || "";
        if (!res.ok || contentType.includes("text/html")) {
          setIsAvailable(false);
        } else {
          setIsAvailable(true);
        }
      })
      .catch(() => {
        setIsAvailable(false);
      });

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // When the invitation is opened by lighting the candle, start audio if available
  useEffect(() => {
    if (isOpened && isAvailable && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser or requires another interaction
          setIsPlaying(false);
        });
    }
  }, [isOpened, isAvailable]);

  const togglePlay = () => {
    if (!isAvailable) {
      setShowNotice(true);
      setTimeout(() => setShowNotice(false), 3000);
      return;
    }

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  // Do not render before the opening candle transition begins
  if (!isOpened) return null;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none">
      <div className="relative flex flex-col items-end">
        {/* Subtle Graceful Unavailable Notice */}
        <AnimatePresence>
          {showNotice && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full mb-2.5 right-0 whitespace-nowrap bg-[#FAF7F2] text-[#2F3430] border border-[#C9A96E]/40 shadow-[0_8px_20px_rgba(47,52,48,0.12)] rounded-lg px-3 py-1.5 text-[11px] font-sans tracking-wide"
            >
              <span className="font-medium text-[#8FA58A]">Background audio:</span> Place file at{" "}
              <code className="text-[#C9A96E] font-mono text-[10px]">/public/audio/baptism-background.mp3</code>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Small Elegant Floating Music Control Button */}
        <motion.button
          id="music-control-btn"
          type="button"
          onClick={togglePlay}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          aria-label={
            !isAvailable
              ? "Background music unavailable"
              : isPlaying
              ? "Mute background music"
              : "Play background music"
          }
          title={
            !isAvailable
              ? "Background music file not yet added"
              : isPlaying
              ? "Pause music"
              : "Play music"
          }
          className={`group flex items-center gap-2 p-2.5 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md border shadow-[0_6px_20px_rgba(47,52,48,0.08)] transition-all duration-300 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8FA58A] focus:ring-offset-1 ${
            !isAvailable
              ? "border-[#C9A96E]/25 text-[#2F3430]/40 opacity-70 hover:opacity-100"
              : isPlaying
              ? "border-[#8FA58A] text-[#2F3430] shadow-[0_0_14px_rgba(143,165,138,0.25)] ring-1 ring-[#8FA58A]/30"
              : "border-[#C9A96E]/40 text-[#2F3430]/75 hover:border-[#8FA58A] hover:text-[#2F3430]"
          }`}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-[#8FA58A] animate-pulse" aria-hidden="true" />
              <span className="text-[10px] font-sans tracking-[0.16em] uppercase font-medium text-[#2F3430] pr-1.5 hidden sm:inline">
                Music On
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#2F3430]/50 group-hover:text-[#2F3430]" aria-hidden="true" />
              <span className="text-[10px] font-sans tracking-[0.16em] uppercase font-medium text-[#2F3430]/60 pr-1.5 hidden sm:inline">
                {!isAvailable ? "No Audio" : "Music Off"}
              </span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}
