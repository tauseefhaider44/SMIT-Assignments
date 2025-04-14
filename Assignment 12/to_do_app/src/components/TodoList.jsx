import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) return <p style={styles.empty}>No tasks yet!</p>

  return (
    <ul style={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
  },
  empty: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
}

export default TodoList
