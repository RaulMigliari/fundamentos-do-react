import CommentsForm from "./components/CommentsForm/CommentsForm"
import styles from "./styles.module.css"
import useCommentCollection from "./hooks/useCommentCollection"
import Comment from "./components/Comment/Comment"

export default function App() {

  const {comments, addComment} = useCommentCollection()

  return (
    <div className={styles.app}>
      <div className={styles.formControl}>
        <h2>Seção de Comentários</h2>
        <CommentsForm addComment={addComment}/>
        <hr style={{marginTop: '1.5rem'}}/>
        {comments.length > 0 
          ? [...comments]
              .sort((a,b) => new Date(b.date) - new Date(a.date))
              .map((comment) => (
              <Comment
                key={comment.id}
                date={comment.date}
                email={comment.email}
                content={comment.content}
              />))
          : (
            <h2 style={{margin: '2rem auto'}}>Seja o primeiro a comentar</h2>
          )}
      </div>
    </div>
  )
}