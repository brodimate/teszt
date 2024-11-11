import Posts from "../../Components/posts/Posts";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="image">
        <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="profile"/>
        <span>John Doe</span>
      </div>
      <div className="contentBox">
        <Posts/>
      </div>
    </div>
  )
}

export default Profile