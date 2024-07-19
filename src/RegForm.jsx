import {useState} from 'react'
import "./RegForm.css";
export const RegForm = () => {
    const [user,setUser]=useState({
        name:"Janani",
        age:23,
        gender:"Female",
        isMarried:false,
        country:"India",
        bio:"Write Something about yourself"
    })
    function changeHandler(e){
        const name = e.target.name;
        const value = e.target.type==="checkbox"?e.target.checked:e.target.value;
        setUser({...user,[name]:value});
    }
  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name : </td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age : </td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender : </td>
                <td>{user.gender}</td>
            </tr>
            <tr> 
                <td>Marital  : </td>
                <td>{user.isMarried? "Married":"Not Married"}</td>
            </tr>
            <tr>
                <td>Country : </td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>Bio : </td>
                <td>{user.bio}</td>
            </tr>
        </tbody>
    </table>
    <form>
        <input type="text" name="name" id="" placeholder='FullName' value={user.name} onChange={changeHandler}/>
        <input type="number" name="age" id="" placeholder='Age' value={user.age} onChange={changeHandler}/>
        <div className='gender'>
            <label htmlFor="Male">
                <input type="radio" name="gender" id="Male" onChange={changeHandler} checked={user.gender=="Male"} value="Male" />Male
            </label>
            <label htmlFor="Female">
                <input type="radio" name="gender" id="Female" onChange={changeHandler} checked={user.gender=="Female"} value="Female" />Female
            </label>
        </div>
        <label htmlFor="isMarried">
            <input type="checkbox" name="isMarried" id="isMarried" onChange={changeHandler} checked={user.isMarried} />isMarried
        </label>
        <div className='select-div'>
            <label htmlFor="country">Select Country :</label>
            <select name="country" id="country" value={user.country} onChange={changeHandler} checked={user.country}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>
        </div>
        <textarea name="bio" id="bio" cols="30" rows="5" value={user.bio} onChange={changeHandler} placeholder='Write about You' />
    </form>
    </>
  )
    }
