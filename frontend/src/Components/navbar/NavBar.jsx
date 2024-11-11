import "./NavBar.css"
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useContext } from "react";
import { AuthContext } from "../../Client/Context/authContext";


const NavBar = () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div className="navBar">
            <div className="left-navBar">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="webName">Valami név</span>
                </Link>
            </div>
            <div className="center-navBar">
                <div className="search">
                <SearchOutlinedIcon/>
                <input type="search" placeholder="Search..."/>
                </div>
            </div>
            <div className="right-navBar">
                <PersonOutlinedIcon/>
                <div className="user">
                    <img src={currentUser.profilePic} alt=""/>
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar