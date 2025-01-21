import { Header } from './components/Header/Header'

import styles from './App.module.css'

import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

import './styles.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="aaaaaa"
            content="bbbbbbbbbbb"
          />
        </main>
      </div>
    </div>
  )
}

export default App
