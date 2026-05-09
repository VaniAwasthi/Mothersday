import MothersDayCard from "@/components/mothers-day-card";
import { withBasePath } from "@/lib/base-path";

export const metadata = {
  title: "Happy Mother’s Day, Mumma 💖",
  description: "A heartfelt mini-book card made with love for Mumma.",
};

const collageImages = [
  "/images/mom-01.jpeg",
  "/images/mom-02.jpeg",
  "/images/mom-03.jpeg",
  "/images/mom-04.jpeg",
  "/images/mom-05.jpeg",
  "/images/mom-06.jpeg",
];

const memoryImages = [
  "/images/mom-07.jpeg",
  "/images/mom-08.jpeg",
  "/images/mom-09.jpeg",
  "/images/mom-10.jpeg",
  "/images/mom-11.jpeg",
  "/images/mom-12.jpeg",
  "/images/mom-13.jpeg",
  "/images/mom-14.jpeg",
  "/images/mom-15.jpeg",
  "/images/mom-16.jpeg",
  "/images/mom-17.jpeg",
  "/images/mom-18.jpeg",
];

const mummaCaptions = [
  {
    title: "My Safe Place ❤️",
    desc: "Your presence makes every place feel like home and comfort.",
  },
  {
    title: "Strongest Woman 🌸",
    desc: "You face every challenge with courage, strength, and grace.",
  },
  {
    title: "Unconditional Love 💖",
    desc: "Your love is pure, endless, and asks for nothing in return.",
  },
  {
    title: "Silent Sacrifices ✨",
    desc: "You sacrifice your happiness just to see me smile.",
  },
  {
    title: "My Biggest Support 🤍",
    desc: "You stand beside me even when the whole world feels against me.",
  },
  {
    title: "Endless Care 🌷",
    desc: "You worry about me before thinking about yourself.",
  },
  {
    title: "Pure Heart 💕",
    desc: "Your kindness and warmth make life more beautiful.",
  },
  {
    title: "My Inspiration 🌟",
    desc: "Your strength inspires me to become a better person every day.",
  },
  {
    title: "Forever Protective 🫶",
    desc: "No matter how old I grow, you still protect me like a child.",
  },
  {
    title: "My Happiness 🌼",
    desc: "Your smile alone can heal my worst days instantly.",
  },
  {
    title: "Fear of Losing You 🥺",
    desc: "As you grow older, my heart fears a life without you.",
  },
  {
    title: "My Mom in Every Life ❤️",
    desc: "If there is another life, I would still choose you as my mother.",
  },
];

const letter = `You are my greatest strength and my whole world. Home never feels complete when you are not around. You are the strongest woman I have ever known and the reason I believe in unconditional love. Your support has always been silent but powerful, guiding me through every phase of life. As you grow older, a part of my heart constantly fears losing you because life without you feels unimaginable. If I ever get another life, I would choose you again and again to be my mother. ❤️
`;

const thankyouMessage = `No matter how much I say it, words will never be enough to express what you mean to me. You are the heart of my life, my biggest blessing, and the purest love I have ever known. Thank you for loving me in ways I may never fully understand. Today, tomorrow, and in every lifetime — I will always love you endlessly. ❤️`;

export default function Page() {
  return (
    <MothersDayCard
      personName="Mumma"
      collageImages={collageImages}
      memoryImages={memoryImages}
      videoSrc={withBasePath("/videos/mumma.mp4")}
      letter={letter}
      captions={mummaCaptions}
      thankyouMessage={thankyouMessage}
    />
  );
}
