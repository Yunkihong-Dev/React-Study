import { createContext, useContext, useReducer } from "react";
import { createAction } from "../util/createAction";

const initialState = [
  {
    id: 1,
    name: "김성용",
  },
  {
    id: 2,
    name: "장동민",
  },
  {
    id: 3,
    name: "오현우",
  },
  {
    id: 4,
    name: "노승현",
  },
];

export const useUserStore = () => useContext(UserStore);
//  모든 컴포넌트에서 useContext 혹을 import 하지 않도록
// 통합된 훅함수 생성

const UserStore = createContext();
//전역 상태가 저장 될 store를 생성,

// action
export const ADD_USER = createAction("ADD_USER");
export const REMOVE_USER = createAction("REMOVE_USER");

// export const dispatch = (action,id) =>{
//     switch(action.type){
//         case ADD_USER : return {
//         type:"ADD_USER",
//         payload: id};
//         case REMOVE_USER : return {
//             type:"REMOVE_USER",
//             payload: id};
//         default : return action;
//     }
// }
const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      // "ADD_USER" 액션이 발생했을 때, 새로운 사용자를 state에 추가하여 새로운 배열을 반환합니다.
      // action.payload에 새로운 사용자 정보가 전달됩니다.
      return [...state, action.payload];

    case "REMOVE_USER":
      // "REMOVE_USER" 액션이 발생했을 때, action.payload에 전달된 사용자 ID와 일치하지 않는
      // 사용자들로 이루어진 새로운 배열을 반환합니다. 즉, 해당 ID의 사용자가 제거됩니다.
      return state.filter((user) => user.id !== action.payload);

    default:
      // 액션 타입이 "ADD_USER" 또는 "REMOVE_USER"가 아닌 경우에는 기존 상태(state)를 그대로 반환합니다.
      // 이렇게 하면 알 수 없는 액션이 들어왔을 때에도 상태가 변경되지 않습니다.
      return state;
  }
};

// 전역 상태가 시장 될 store를 생성, 그 store 이름은 userStore
const UserStoreProvider = ({ children }) => {
  const [userList, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserStore.Provider value={[userList, dispatch]}>
      {children}
    </UserStore.Provider>
  );
};

export default UserStoreProvider;
