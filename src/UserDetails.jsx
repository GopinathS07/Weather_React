import {useState} from 'react';
export const UserDetails = () => {
    const [user, setUser] = useState({fname:"Janani",lname:"Shree", age:23});

    // function changeName(e){
    //     //alert(e.target.value);
    //     const newStateObject={...user};
    //     newStateObject.name=e.target.value;
    //     setUser(newStateObject);
    // }
    // function changeAge(e){
    //     //alert(e.target.value);
    //     setUser((oldState)=>{
    //         return{...oldState,age: e.target.value};
    //     })
    // }
    function changeHandler(e){
        setUser({...user,[e.target.name]:e.target.value});
    }
  return (
    <>
    <h2>{user.fname} {user.lname}, My Age is {user.age}</h2>
    <form>
        <input type="text" placeholder='Enter First Name' 
        onChange={changeHandler} value={user.fname} name='fname' />
        <input type="text" placeholder='Enter Last Name' 
        onChange={changeHandler} value={user.lname} name='lname' />
        <input type="text" placeholder='Enter User Age' 
        onChange={changeHandler} value={user.age} name='age' />
    </form>
    </>
  )
}
 