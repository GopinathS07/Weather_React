import PropTypes from "prop-types";
import './UserCard.css'

const userData =[{
    name:"Michael",
    city:"New York", 
    description:"Front-end Developer",
    skill:["UI/UX","Front End Development","HTML5","CSS3","JavaScript","React","Node","Design"],
    online:true,
    profile:"img/1.jpeg",
},{
    name:"Akane",
    city:"Japan",
    description:"Programmer Analyst",
    skill:["Python","Git ","Data Structure","APIs","PHP","Problem Solving","server","Java"],
    online:false,
    profile:"img/2.jpeg",
},{
    name:"Charles",
    city:"France",
    description:"System Software Engineer",
    skill:["C","BIOS","Windows","Firware","Linux","OS","Microsoft","IOS"],
    online:true,
    profile:"img/3.jpeg",
},
];
function User(props) {
     return (
    <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>{props.skill.map((skill,index)=>
            (<li key={index}>{skill}</li>))}</ul>
        </div>
     </div>
    )
}

export const UserCard = () => {
  return <>{userData.map((user,index)=>(<User key={index}
  name={user.name} city={user.city} description={user.description} skill={user.skill} online={user.online} profile={user.profile}/>))}

  <p className="copyright">Designed by <span>Gopi ♥ Janani</span></p>
  </>;
}


{/* <User  name="James" city="New York" 
  description="Front-end Developer" 
  skill={["UI/UX","Front End Development","HTML5","CSS3","JavaScript","React","Node",]}
  online={false} profile="img/1.jpeg" /> */}

User.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skill:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
};