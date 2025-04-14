function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <li style={styles.item}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          style={styles.checkbox}
        />
        <span style={{
          ...styles.text,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#888' : '#000',
        }}>
          {todo.text}
        </span>
        <button onClick={() => onDelete(todo.id)} style={styles.delete}>
          ❌
        </button>
      </li>
    )
  }
  
  const styles = {
    item: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
      gap: '8px',
    },
    checkbox: {
      transform: 'scale(1.2)',
    },
    text: {
      flex: 1,
      fontSize: '16px',
    },
    delete: {
      background: 'transparent',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    },
  }
  
  export default TodoItem
  