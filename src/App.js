import React, {useState} from 'react';
import AddUser from './Users/AddUser';
import UserList from './Users/UserList';


function App() {
  const [userList , setUserList] = useState([]);


  const userDataHandler = (uName , uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList, {name:uName , age: uAge , id: Math.random().toString()} ]})
  }
  console.log(userList)

  return (
    <div>
        <AddUser onAddUser={userDataHandler} />
        <UserList usersData={userList}/>
    </div>
  );
}

export default App;
