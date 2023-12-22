import { Link } from "react-router-dom";
import "./style/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = ({ links, hideSidebar }) => {
  return (
    <div className="sidebar">
      {links.map((link) => (
        <Link
          to={link.path}
          className="sidebarLinks"
          onClick={hideSidebar}
          key={link.name}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
