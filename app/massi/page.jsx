import MothersDayCard from "@/components/mothers-day-card";

export const metadata = {
  title: "Happy Mother’s Day, Massi 💖",
  description: "A heartfelt mini-book card made with love for you.",
};

const collageImages = [
  "/images/massi/massi-01.jpeg",
  "/images/massi/massi-02.jpeg",
  "/images/massi/massi-03.jpeg",
  "/images/massi/massi-04.jpeg",
  "/images/massi/massi-05.jpeg",
  "/images/massi/massi-06.jpeg",
];

const memoryImages = [
  "/images/massi/massi-07.jpeg",
  "/images/massi/massi-08.jpeg",
  "/images/massi/massi-09.jpeg",
  "/images/massi/massi-10.jpeg",
  "/images/massi/massi-11.jpeg",
  "/images/massi/massi-12.jpeg",
];

const massiCaptions = [
  {
    title: "Second Mother 💖",
    desc: "You have loved and cared for me like your own child.",
  },
  {
    title: "Purest Bond 🌸",
    desc: "Your presence always fills my heart with warmth and comfort.",
  },
  {
    title: "Endless Support 🤍",
    desc: "You stood beside me in every phase of life without hesitation.",
  },
  {
    title: "Beautiful Soul ✨",
    desc: "Your kindness and love make every moment more special.",
  },
  {
    title: "My Safe Space 🫶",
    desc: "Talking to you always feels peaceful and comforting.",
  },
  {
    title: "Strong Woman 🌷",
    desc: "Your strength and patience inspire me every single day.",
  },
  {
    title: "Forever Caring 🌼",
    desc: "No matter what happens, your care never changes.",
  },
  {
    title: "Blessed To Have You ❤️",
    desc: "Life feels more beautiful because you are a part of it.",
  },
];

const letter = `You have always been like a second mother to me. Your kindness, your laughter, and your endless love have made my life brighter in ways I can never fully put into words. Thank you for every story, every hug, every little moment of care. Today I just want to say how grateful I am to have you in my life. ❤️`;

export default function Page() {
  return (
    <MothersDayCard
      personName="Massi"
      collageImages={collageImages}
      memoryImages={memoryImages}
      videoSrc={null}
      letter={letter}
      captions={massiCaptions}
      thankyouMessage="Life feels softer, happier, and more beautiful with you around. I’m truly lucky to have a Massi like you in my life. ❤️"
      signature="Your Jannu mannu."
    />
  );
}
