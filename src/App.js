import { useState } from "react";
import UserDetails from "./Components/UserDetails";
import ExpenseForm from "./Components/UserForm";


const users = []

function App() {
  const [updatedUsers, setUpdatedUsers] = useState(users)

  const onSaveUserHandler = user => {
    setUpdatedUsers(prev => {
      const userWithId = {...user, id:Math.random().toString()}
      return [userWithId, ...prev]
    })
  };

  return (
    <div>
      <ExpenseForm onSaveUser={onSaveUserHandler} />
      <ui>
        <UserDetails users={updatedUsers} />
      </ui>
    </div>
  );
}

export default App;
