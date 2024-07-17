import React, { useState } from "react";
import './UserForm.css'
import ErrorModal from "./UI/ErrorModal";

const UserForm = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = e => {
        setEnteredName(e.target.value)
    };
    const ageChangeHandler = e => {
        setEnteredAge(e.target.value)
    };
    const submitHandler = e => {
        e.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please Fill all the input fields"
            })
            // alert("Please Fill all the input fields");
            return;
        };
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Enter a Valid Age (above 1)"
            })
            // alert("Enter a valid age")
            return;
        };
        const detail = {
            name: enteredName,
            age: enteredAge
        };
        props.onSaveUser(detail);
        setEnteredAge('')
        setEnteredName('')
    };
    const onConfirmHandler = _ => {
        setError(null)
    };
    
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={onConfirmHandler} />}
            <form className="user-form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default UserForm;