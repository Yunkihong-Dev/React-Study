import { ACTION_TYPE } from '../../../../consts/action'
import { useTodoStore } from '../../../../context/todo'
import OneTodo from './one-todo'

const TodoList = () => {
	const [todoList, dispatch] = useTodoStore()
	const updateTodo = (id, content) => {
		dispatch(ACTION_TYPE.oneUpdateTodo(id, content))
	}

	const deleteTodo = id => {
		if (window.confirm('정말 삭제하시겠습니까?')) {
			dispatch(ACTION_TYPE.oneDeleteTodo(id))
		}
	}

	const checkTodo = (id, checked) => {
		const _todoList = [...todoList]
		const todo = _todoList.find(todo => todo.id === id)
		todo.checked = !todo.checked
		dispatch(ACTION_TYPE.oneCheckTodo(id))
	}
	return (
		<>
			{todoList.map(todo => (
				<OneTodo
					key={todo.id}
					todo={todo}
					updateTodo={updateTodo}
					deleteTodo={deleteTodo}
					checkTodo={checkTodo}
				/>
			))}
		</>
	)
}
export default TodoList
