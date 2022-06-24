import React ,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const[enteredUsername , setEnteredUsername] = useState('');
    const[enteredAge , setEnteredAge] = useState('');
    const[usernameValid, setUsernameValid] = useState('false');
    const[ageValid, setAgeValid] = useState('false');


    const AddUserHandler = (event) => {
      event.preventDefault();
      console.log(enteredUsername, enteredAge);
      setEnteredUsername('')
      setEnteredAge('')
    };

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    } 

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    } 


  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" value={enteredUsername} id="username" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (in year)</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
