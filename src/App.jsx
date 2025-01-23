import { Header } from "./components/Header/Header";

import styles from "./App.module.css";

import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./styles.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/CaioDetore.png",
      name: "Caio Detore",
      role: "UX Designer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-01-22 15:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Professor",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-01-22 15:00:00"),
  },
];

const comments = [
  'post show'
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                comments={comments}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
