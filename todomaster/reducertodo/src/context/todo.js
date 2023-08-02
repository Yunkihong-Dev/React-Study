import { createContext, useContext, useReducer } from 'react'

const initialState = [
	{
		id: 1,
		title: 'example1',
		content: 'content1',
		state: false,
		checked: false,
	},
	{
		id: 2,
		title: 'example2',
		content: 'content2',
		state: false,
		checked: false,
	},
	{
		id: 3,
		title: 'example3',
		content: 'content3',
		state: false,
		checked: false,
	},
]
export const useTodoStore = () => useContext(TodoStore)
// 통일된 훅함수

const TodoStore = createContext()
// 전역상태가 될 store 생성

const todoReducer = (state, action, content) => {
	switch (action.type) {
		case 'todo/add':
			return [...state, action.payload]
		case 'todo/delete':
			return state.filter(todo => todo.id !== action.payload)
		case 'todo/check':
			return (state.checked = !state.checked)
		case 'todo/update':
			return 
		default:
			// 액션 타입이 "ADD_USER" 또는 "REMOVE_USER"가 아닌 경우에는 기존 상태(state)를 그대로 반환합니다.
			// 이렇게 하면 알 수 없는 액션이 들어왔을 때에도 상태가 변경되지 않습니다.
			return state
	}
}

const TodoStoreProvider = ({ children }) => {
	const [todoList, dispatch] = useReducer(todoReducer, initialState)
	return (
		<TodoStore.Provider value={[todoList, dispatch]}>
			{children}
		</TodoStore.Provider>
	)
}

export default TodoStoreProvider
