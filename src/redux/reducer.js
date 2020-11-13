const initialState = {
  products: [
    {
      id: 1,
      name: "'Ka' - Family",
      style: "Kaisho",
      img: "family",
      alt: "Family written by Japanese Calligraphy",
      price: 29.99,
      available: 15,
    },
    {
      id: 2,
      name: "'Wa' - Harmony",
      style: "Kaisho",
      img: "harmony",
      alt: "Harmony written by Japanese Calligraphy",
      price: 29.99,
      available: 10,
    },
    {
      id: 3,
      name: "'Ai' - Love",
      style: "Kaisho",
      img: "love",
      alt: "Love written by Japanese Calligraphy",
      price: 34.99,
      available: 10,
    },
    {
      id: 4,
      name: "Custom names",
      style: "Katakana",
      img: "names",
      alt: "Custom names written by Japanese Calligraphy",
      details:
        "Whatever name you want to have written in japanese. On the image example for Alice and Richard.",
      price: 40.99,
      available: 30,
    },
    {
      id: 5,
      name: "Strong Will",
      style: "Gyosho",
      img: "strong-will",
      alt: "Strong will written by Japanese Calligraphy",
      details:
        "Possible also as new-year wish - Kakizome with your own name at.",
      price: 49.99,
      available: 5,
    },
    {
      id: 6,
      name: "'Arigatou Gozaimasu' - Thank you",
      style: "Hiragana/Sosho",
      img: "arigato",
      alt: "Thank you written by Japanese Calligraphy",
      details:
        "Ideal gift for your boss/teacher/every superior person you want to say thank you.",
      price: 69.99,
      available: 3,
    },
    {
      id: 6,
      name: "'Bushido' - The Seven Virtues of The Samurai",
      style: "Kaisho/Gyosho",
      img: "samurai-journey",
      alt: "Seven virtues of Samurai written by Japanese Calligraphy",
      details:
        "Collection of 6 calligraphies depicting the seven virtues of samurai.",
      price: 109.99,
      available: 3,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
