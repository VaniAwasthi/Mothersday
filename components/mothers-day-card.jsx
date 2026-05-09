"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/base-path";

const balloonPositions = [
  "5%",
  "12%",
  "20%",
  "28%",
  "36%",
  "44%",
  "52%",
  "60%",
  "68%",
  "76%",
  "84%",
  "92%",
];

const defaultCaptions = [
  {
    title: "My First Smile",
    desc: "You made my childhood beautiful and full of love.",
  },
  {
    title: "Always Beside Me",
    desc: "You stood beside me in every difficult moment.",
  },
  {
    title: "My Safe Place",
    desc: "Your hugs still feel like home to me.",
  },
  {
    title: "Forever Love",
    desc: "No one can ever replace your love and care.",
  },
];

const FLIP_DURATION_MS = 900;

export default function MothersDayCard({
  personName,
  collageImages,
  memoryImages,
  videoSrc = null,
  letter,
  captions = defaultCaptions,
  thankyouMessage = "You are loved more than words can say.\nToday, tomorrow, and always. ❤️",
}) {
  const memories = memoryImages.map((src, i) => ({
    src,
    ...captions[i % captions.length],
  }));

  // Skip the video page entirely when no video is provided.
  const pageSequence = videoSrc
    ? ["cover", "collage", "message", "memories", "video", "thankyou"]
    : ["cover", "collage", "message", "memories", "thankyou"];

  const [page, setPage] = useState("cover");
  const [exitingPage, setExitingPage] = useState(null);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const memoryDetailRef = useRef(null);

  const startTransition = (nextPage) => {
    if (exitingPage || page === nextPage) return;
    setExitingPage(page);
    setPage(nextPage);
    setSelectedMemory(null);
    window.setTimeout(() => setExitingPage(null), FLIP_DURATION_MS);
  };

  const goNext = () => {
    const i = pageSequence.indexOf(page);
    const next = pageSequence[i + 1];
    if (next) startTransition(next);
  };

  const restart = () => startTransition("cover");

  useEffect(() => {
    if (selectedMemory) {
      memoryDetailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedMemory]);

  const ctx = {
    personName,
    collageImages,
    memories,
    letter,
    thankyouMessage,
    videoSrc,
    selectedMemory,
    setSelectedMemory,
    memoryDetailRef,
    goNext,
    restart,
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50 text-gray-800">
      {/* Floating balloons fixed to viewport */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {balloonPositions.map((left, i) => (
          <div
            key={left}
            className="balloon-animation absolute text-4xl opacity-40 md:text-5xl md:opacity-50"
            style={{
              left,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            🎈
          </div>
        ))}
      </div>

      {/* Book stage. Only the current page is visible at any time;
          during a transition, the exiting page hinges away on top
          and the new page is revealed underneath. */}
      <div
        className="relative z-10 min-h-screen"
        style={{ perspective: "1800px" }}
      >
        <div key={`page-${page}`} className="animate-pageReveal">
          {renderPage(page, ctx)}
        </div>

        {exitingPage && (
          <div
            key={`exit-${exitingPage}`}
            className={cn(
              "pointer-events-none absolute inset-0 top-0 z-20",
              exitingPage === "cover"
                ? "animate-coverOpen"
                : "animate-pageFlipOut"
            )}
          >
            {renderPage(exitingPage, {
              ...ctx,
              selectedMemory: null,
              setSelectedMemory: () => {},
              memoryDetailRef: { current: null },
              goNext: () => {},
              restart: () => {},
            })}
          </div>
        )}
      </div>
    </main>
  );
}

function renderPage(name, ctx) {
  switch (name) {
    case "cover":
      return <CoverPage personName={ctx.personName} onOpen={ctx.goNext} />;
    case "collage":
      return (
        <CollagePage
          personName={ctx.personName}
          images={ctx.collageImages}
          onNext={ctx.goNext}
        />
      );
    case "message":
      return (
        <MessagePage
          personName={ctx.personName}
          letter={ctx.letter}
          onNext={ctx.goNext}
        />
      );
    case "memories":
      return (
        <MemoriesPage
          memories={ctx.memories}
          selectedMemory={ctx.selectedMemory}
          onSelectMemory={ctx.setSelectedMemory}
          memoryDetailRef={ctx.memoryDetailRef}
          showVideoNext={Boolean(ctx.videoSrc)}
          onNext={ctx.goNext}
        />
      );
    case "video":
      return (
        <VideoPage
          src={ctx.videoSrc}
          personName={ctx.personName}
          onEnded={ctx.goNext}
        />
      );
    case "thankyou":
      return (
        <ThankYouPage
          personName={ctx.personName}
          thankyouMessage={ctx.thankyouMessage}
          onRestart={ctx.restart}
        />
      );
    default:
      return null;
  }
}

function CoverPage({ personName, onOpen }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50 px-6 text-center">
      {/* Soft "spine" stripe along the left edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-b from-pink-400 via-rose-400 to-pink-500 shadow-[2px_0_6px_rgba(0,0,0,0.15)] md:w-4"
      />

      <div className="absolute top-10 left-6 animate-bounce text-4xl md:left-10 md:text-5xl">
        ❤️
      </div>
      <div className="absolute right-6 bottom-24 animate-pulse text-4xl md:right-10 md:text-5xl">
        🌸
      </div>
      <div className="absolute top-24 right-10 animate-pulse text-3xl opacity-70 md:text-4xl">
        ✨
      </div>
      <div className="absolute bottom-32 left-10 animate-bounce text-3xl md:text-4xl">
        🌷
      </div>

      <div className="animate-float">
        <p className="text-base font-medium tracking-wide text-pink-500 md:text-xl">
          A special card for a special person
        </p>
        <h1 className="mt-4 text-5xl leading-tight font-extrabold text-pink-600 drop-shadow-md md:text-7xl">
          Happy Mother’s Day,
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
            {personName} 💖
          </span>
        </h1>
        <p className="mt-6 text-base text-pink-700/70 md:text-lg">
          ✨ Tap below to open your card ✨
        </p>
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="mt-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-10 py-5 text-base font-semibold text-white shadow-2xl shadow-pink-500/30 transition-all duration-300 hover:scale-110 hover:shadow-pink-400/50 active:scale-95 md:text-lg"
      >
        💌 Open Card
      </button>
    </section>
  );
}

function PageShell({ children, accent = false }) {
  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-14 md:px-8 md:py-20">
      <div
        className={cn(
          "relative w-full rounded-3xl border border-pink-200 p-6 shadow-xl backdrop-blur-md md:p-10",
          // Subtle "spine" stripe down the left edge
          "before:absolute before:inset-y-6 before:left-0 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-pink-300 before:via-rose-300 before:to-pink-200",
          accent
            ? "bg-gradient-to-br from-pink-100/95 via-rose-50/95 to-white/95"
            : "bg-white/90"
        )}
      >
        {children}
      </div>
    </section>
  );
}

function CardHeader({ children, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-extrabold text-pink-600 md:text-3xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-gray-500 md:text-base">{subtitle}</p>
      )}
    </div>
  );
}

function NextButton({ children, onClick }) {
  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-pink-400/50 active:scale-95"
      >
        {children}
      </button>
    </div>
  );
}

function CollagePage({ personName, images, onNext }) {
  return (
    <PageShell>
      <CardHeader subtitle="A little card just for you">
        For You, {personName} 💕
      </CardHeader>
      <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
        {images.map((src) => (
          <div
            key={src}
            className="relative aspect-square overflow-hidden rounded-2xl border border-pink-200 shadow-md"
          >
            <Image
              src={withBasePath(src)}
              alt={`A photo of ${personName}`}
              fill
              sizes="(max-width: 640px) 30vw, 200px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <NextButton onClick={onNext}>💌 View Message</NextButton>
    </PageShell>
  );
}

function MessagePage({ personName, letter, onNext }) {
  return (
    <PageShell>
      <CardHeader>A Letter For You 💌</CardHeader>
      <div className="mt-6 text-center text-base leading-loose text-gray-700 md:text-lg">
        <p className="mb-4 font-medium text-pink-600">Dear {personName},</p>
        <p className="whitespace-pre-line">{letter}</p>
      </div>
      <NextButton onClick={onNext}>✨ View Memories</NextButton>
    </PageShell>
  );
}

function MemoriesPage({
  memories,
  selectedMemory,
  onSelectMemory,
  memoryDetailRef,
  showVideoNext,
  onNext,
}) {
  return (
    <PageShell>
      <CardHeader subtitle="Tap any photo to view it bigger">
        Beautiful Memories 🌸
      </CardHeader>
      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
        {memories.map((m) => {
          const isSelected = selectedMemory?.src === m.src;
          return (
            <button
              key={m.src}
              type="button"
              onClick={() => onSelectMemory(isSelected ? null : m)}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-xl border border-pink-200 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg",
                isSelected &&
                  "ring-4 ring-pink-400 ring-offset-2 ring-offset-white"
              )}
            >
              <Image
                src={withBasePath(m.src)}
                alt={m.title}
                fill
                sizes="(max-width: 640px) 30vw, 150px"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </button>
          );
        })}
      </div>

      {selectedMemory && (
        <div ref={memoryDetailRef} className="mt-8">
          <MemoryDetail
            memory={selectedMemory}
            onClose={() => onSelectMemory(null)}
          />
        </div>
      )}

      <NextButton onClick={onNext}>
        {showVideoNext ? "🎥 View Video" : "💖 Final Page"}
      </NextButton>
    </PageShell>
  );
}

function MemoryDetail({ memory, onClose }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-pink-200 bg-white shadow-lg">
      <div className="relative aspect-[4/3]">
        <Image
          src={withBasePath(memory.src)}
          alt={memory.title}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close memory"
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-lg text-gray-700 shadow-md transition hover:scale-110 hover:bg-white"
        >
          ✕
        </button>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-pink-600 md:text-2xl">
          {memory.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-gray-700">
          {memory.desc}
        </p>
      </div>
    </div>
  );
}

function VideoPage({ src, personName, onEnded }) {
  return (
    <PageShell>
      <CardHeader subtitle="Just for you">A Special Video 🎥</CardHeader>
      <div className="mx-auto mt-6 w-full max-w-md overflow-hidden rounded-2xl border border-pink-200 bg-black shadow-md md:max-w-lg">
        <video
          controls
          autoPlay
          preload="metadata"
          aria-label={`A special video for ${personName}`}
          onEnded={onEnded}
          className="mx-auto block h-auto max-h-[55vh] w-full object-contain"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
      <p className="mt-6 text-center text-sm text-gray-500">
        The next page turns when the video finishes ✨
      </p>
    </PageShell>
  );
}

function ThankYouPage({ personName, onRestart, thankyouMessage }) {
  return (
    <PageShell accent>  
      <div className="py-6 text-center">
        <div className="animate-float text-6xl md:text-7xl">💖</div>
        <h2 className="mt-4 text-3xl font-extrabold text-pink-600 md:text-4xl">
          Thank You, {personName}!
        </h2>
        <p className="mt-4 text-base leading-relaxed whitespace-pre-line text-gray-700 md:text-lg">
          {thankyouMessage}
        </p>
        <p className="mt-6 text-sm text-pink-500">— With all my love</p>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onRestart}
            className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-pink-400/50 active:scale-95"
          >
            🔁 Read Again
          </button>
        </div>
      </div>
    </PageShell>
  );
}
