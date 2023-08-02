import React from "react";
import { REMOVE_USER, useUserStore } from "../context/user";

function UserList() {
  const [userList, dispatch] = useUserStore();
  const handleDeleteUser = (id) => {
    dispatch(REMOVE_USER(id));
    //    dispatch(
    //     {
    //         type : REMOVE_USER,
    //         payload : id
    //     })
  };
  return userList.map((user, index) => (
    <div key={user.id}>
      {index + 1}. {user.name}
      <button onClick={() => handleDeleteUser(user.id)}>삭제</button>
    </div>
  ));
}
export default UserList;
