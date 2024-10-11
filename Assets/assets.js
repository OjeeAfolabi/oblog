import logo from "./logo.svg";
import rightarrow from "./right-arrow.svg";
import email from "./email.svg";
import blogpost_health from "./healthy-lifestyle.png";
import mosh from "./mosh.jpeg";
import blogpost_tech from "./blogpost_tech.png";
import christianah from "./christy_1.png";
import charles from "./charles.jpg";
import blogpost_art from "./blogpost_art.png";
import blogpost_passing from "./blogpost_Football_pass.png";
import messi from "./messi.jpeg";

export const assets = {
  logo,
  rightarrow,
  email,
  blogpost_health,
  mosh,
  blogpost_tech,
  christianah,
  blogpost_art,
  blogpost_passing,
};

export const blog_data = [
  {
    id: 1,
    title: "Healthy Tips",
    description:
      "To maintain sound health, eat a balanced diet rich in fruits, vegetables, and whole grains. Exercise regularly, stay hydrated, and get enough sleep. Manage stress through mindfulness or hobbies, and avoid harmful habits like smoking.",
    image: blogpost_health,
    date: Date.now(),
    category: "Health",
    author: "Christianah Victoria",
    author_img: christianah,
  },

  {
    id: 2,
    title: "Introduction To Web Development",
    description:
      "Web development is an exciting field where you can create amazing applications. Start with HTML, CSS, and JavaScript, and build your skills step-by-step. Happy coding!",
    image: blogpost_tech,
    date: Date.now(),
    category: "Tech",
    author: "Mosh Hamedani",
    author_img: mosh,
  },
  {
    id: 3,
    title: "The Art Of Drawing & Sculpting",
    description:
      "The art of drawing involves capturing the essence of subjects through lines and shapes. It requires observation, creativity, and practice to develop skills and express ideas visually.",
    image: blogpost_art,
    date: Date.now(),
    category: "Arts and 3D",
    author: "Charles Ukadike",
    author_img: charles,
  },
  {
    id: 4,
    title: "Football",
    description:
      "The art of passing in football involves precision, timing, and vision. Effective passing creates opportunities, maintains possession, and controls the game's tempo. Mastery requires practice and understanding of teammates' movements.",
    image: blogpost_passing,
    date: Date.now(),
    category: "Sport",
    subcategory: "The Art of passing",
    author: "Lionel Messi",
    author_img: messi,
  },
  {
    id: 5,
    title: "Cultural Experiences And Tradition",
    description:
      "Web development is an exciting field where you can create amazing applications. Start with HTML, CSS, and JavaScript, and build your skills step-by-step. Happy coding!",
    image: blogpost_tech,
    date: Date.now(),
    category: "Travel And Adventure",
    author: "Mosh Hamedani",
    author_img: mosh,
  },
];
