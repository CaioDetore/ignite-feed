/* eslint-disable react/prop-types */

import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(state => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/CaioDetore.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio Detore</strong>

              <time
                title="21 de Janeiro de 2025"
                dateTime="2025-01-21 00:00:00"
              >
                Cerca de 1 hora atrás.
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount} </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
