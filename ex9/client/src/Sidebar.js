import "./Sidebar.css";
import { Link } from "react-router-dom";// 引入 React Router 的 Link

function Sidebar() {
  return (
    <div className="sidenav">
      <Link to="/">Landing View</Link>
      <Link to="/exampledataview">Example Data View</Link>
    </div>
  );
}

export default Sidebar;
