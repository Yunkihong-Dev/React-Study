import { createAction } from '../util/createAction'

export const ACTION_TYPE = {
	addTodo: createAction('todo/add'),
	deleteTodo: createAction('todo/delete'),
	updateTodo: createAction('todo/update'),
	checkTodo: createAction('todo/check'),
}
