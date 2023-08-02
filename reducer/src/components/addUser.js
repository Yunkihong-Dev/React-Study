import { ADD_USER, useUserStore } from "../context/user";

function AddUser() {
  const [userList, dispatch] = useUserStore();
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 100000),
      name: e.target.user.value,
    };
    e.target.user.value = "";
    dispatch(ADD_USER(newUser));
  };

  return (
    <form onSubmit={handleAddUser}>
      <input name="user" />
      <button> 추가 </button>
    </form>
  );
}
export default AddUser;
