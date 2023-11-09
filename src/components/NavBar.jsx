import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const gettActiveStyles = ({ isActive }) => ({
    borderBottom: isActive && "3px solid var(--dark_color1)"
  });
  return (
    <div className="navbar">
      <NavLink to="/" className="nav_element">
        <h2 style={{ margin: 0 }} className="logo">
          Student Management
        </h2>
      </NavLink>
      <div className="operation_pages">
        <NavLink to="/" className="nav_element" style={gettActiveStyles}>
          Students
        </NavLink>
        <NavLink to="/teacher" className="nav_element" style={gettActiveStyles}>
          Teachers
        </NavLink>
        <NavLink to="/class" className="nav_element" style={gettActiveStyles}>
          Classes
        </NavLink>
        <NavLink to="/school" className="nav_element" style={gettActiveStyles}>
          School
        </NavLink>
      </div>
    </div>
  );
};
