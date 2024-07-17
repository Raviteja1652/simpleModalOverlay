import React from "react";

const UserDetails = (props) => {
    return (
        <div>
            {props.users.map((user) => {
                return <li key={user.id}>{user.name} :: {user.age}</li>
            })}
        </div>
    )
};

export default UserDetails;