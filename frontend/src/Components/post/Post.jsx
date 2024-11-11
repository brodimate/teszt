import "./Post.css";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from "react-router-dom";

const Post = ({post}) => {
  return (
    <div className="post">
      <div className="user">
        <div className="user-info">
          <img src={post.profilePic} alt=""/>
          <div className="details">
            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
              <span>{post.name}</span>
              <span className="date">1 min ago</span>
            </Link>
          </div>
        </div>
        <MoreHorizOutlinedIcon/>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt=""/>
      </div>
      <div className="info">
        <div className="locationMark">Location</div>
      </div>
    </div>
  )
}

export default Post