import { faker } from "https://esm.sh/@faker-js/faker";

const get = function (selector) {
  return document.querySelector(selector);
};

const newQuoteButton = get(".new-quote");
const quote = get(".quote");
const speaker = get(".name");
const face = get(".picture");

const aboutQuote = [
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    name: "Confucius",
    voiceIndex: 1,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png/330px-%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png"
  },
  {
    quote: "Love is composed of a single soul inhabiting two bodies.",
    name: "Aristotle",
    voiceIndex: 2,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/330px-Aristotle_Altemps_Inv8575.jpg"
  },
  {
    quote:
      "Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.",
    name: "Plato",
    voiceIndex: 3,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/330px-Plato_Silanion_Musei_Capitolini_MC1377.jpg"
  },
  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    name: "Buddha",
    voiceIndex: 0,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tapa_Shotor_seated_Buddha_%28Niche_V1%29.jpg/330px-Tapa_Shotor_seated_Buddha_%28Niche_V1%29.jpg"
  },
  {
    quote: "What you do not want done to yourself, do not do to others.",
    name: "Confucius",
    voiceIndex: 1,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png/330px-%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png"
  },
  {
    quote: "Silence is a true friend who never betrays.",
    name: "Confucius",
    voiceIndex: 1,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png/330px-%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png"
  },
  {
    quote: "Better a diamond with a flaw than a pebble without.",
    name: "Confucius",
    voiceIndex: 1,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png/330px-%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png"
  },
  {
    quote:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    name: "Buddha",
    voiceIndex: 0,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tapa_Shotor_seated_Buddha_%28Niche_V1%29.jpg/330px-Tapa_Shotor_seated_Buddha_%28Niche_V1%29.jpg"
  },
  {
    quote:
      "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
    name: "Buddha",
    voiceIndex: 0,
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tapa_Shotor_seated_Buddha_%28Niche_V1%29.jpg/330px-Tapa_Shotor_seated_Buddha_%28Niche_V1%29.jpg"
  }
];

let lastQuoteIndex = -1;

newQuoteButton.addEventListener("click", function () {
  speechSynthesis.cancel();

  let random = Math.floor(Math.random() * aboutQuote.length);

  if (lastQuoteIndex === random) {
    random = (random + 1) % aboutQuote.length;
  }

  lastQuoteIndex = random;

  quote.innerText = aboutQuote[random].quote;
  speaker.innerText = `-${aboutQuote[random].name}`;
  face.src = aboutQuote[random].picture;
  document.body.style.backgroundImage = `url('${faker.image.urlPicsumPhotos({
    grayscale: true,
    width: 1920,
    height: 1080
  })}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  const msg = new SpeechSynthesisUtterance(quote.innerText);
  msg.voice = speechSynthesis.getVoices()[aboutQuote[random].voiceIndex];
  speechSynthesis.speak(msg);
});

