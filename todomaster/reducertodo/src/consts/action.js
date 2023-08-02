import { createAction } from '../util/createAction'

export const ACTION_TYPE = {
	// 각각의 액션에 대한 생성자 함수를 createAction으로 생성하여 연결합니다.
	oneAddTodo: createAction('todo/add'),
	oneDeleteTodo: createAction('todo/delete'),
	oneUpdateTodo: createAction('todo/update'),
	oneCheckTodo: createAction('todo/check'),
}
