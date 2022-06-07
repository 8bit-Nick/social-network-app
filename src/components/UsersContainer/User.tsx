import React from "react";
import {usersType} from "../../redux/usersReducer";

type UsersPropsType = {
  users: usersType
}

const Dialogs: React.FC<UsersPropsType> = (props) => {

  const users = props.users.map(el => <User fullname={el.fullName}/>)

  return (
    <div>

    </div>
  )
}

export default Dialogs;