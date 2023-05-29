import { MdPostAdd, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";


function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdModeEdit />
        Post it
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
