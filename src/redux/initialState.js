const initialState = {
  order: {
    itemsNr: 0,
    items: [],
    customer: {
      personal: {},
      delivery: "",
      payment: "",
    },
  },
  products: [
    {
      id: 1,
      name: "'Ka' - Family",
      style: "Kaisho",
      img: "family",
      alt: "Family written by Japanese Calligraphy",
      details:
        "Perfect gift for your family, especially when combine with customized names written at sides.",
      price: 29.99,
      available: 15,
    },
    {
      id: 2,
      name: "'Wa' - Harmony",
      style: "Kaisho",
      img: "harmony",
      alt: "Harmony written by Japanese Calligraphy",
      details:
        "Bring some harmony to your lives. One look at this calligraphy is worth of 10 minutes of meditation ;).",
      price: 29.99,
      available: 10,
    },
    {
      id: 3,
      name: "'Ai' - Love",
      style: "Kaisho",
      img: "love",
      alt: "Love written by Japanese Calligraphy",
      details:
        "Give love instead of generic wedding congratulations. Complete it with customized names. ",
      price: 34.99,
      available: 10,
    },
    {
      id: 4,
      name: "Customized names",
      style: "Katakana",
      img: "names",
      alt: "Custom names written by Japanese Calligraphy",
      details:
        "Be original and give your  friends their names written in japanese. Like here in example for Alice and Richard.",
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
        "For strong willed people. Possible also as new-year wish (Kakizome) with name of your own choice.",
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
        "Ideal gift for your boss/teacher/every important person you want to say thank you very much.",
      price: 69.99,
      available: 3,
    },
    {
      id: 7,
      name: "'Bushido' - The Seven Virtues of The Samurai",
      style: "Kaisho/Gyosho",
      img: "samurai-journey",
      alt: "Seven virtues of Samurai written by Japanese Calligraphy",
      details:
        "Not just one, but 6 calligraphies in one collection - everything for the right Samurai",
      price: 109.99,
      available: 0,
    },
  ],
};

export default initialState;
