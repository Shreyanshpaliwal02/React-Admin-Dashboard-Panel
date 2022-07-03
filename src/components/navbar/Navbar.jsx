import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


export const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            English
          </div>
          <div className="item" onClick = {()=> dispatch({type: "TOGGLE"})}>
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className="icon"/>
          </div>
          <div className="item">
            <img src="https://i.pinimg.com/564x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg" 
            alt="avatar" 
            className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;