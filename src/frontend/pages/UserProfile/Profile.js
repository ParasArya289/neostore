import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";
import "./Profile.css"
export const Profile = () => {
  const { user, token, setToken, setUser } = useAuth();
  const logoutHandler = () => {
    setToken("");
    setUser("");
    localStorage.clear();
  };
  console.log(user);
  return (
    <div className="profile-main">
      <h5 className="profile-heading">Profile Details</h5>
      <div className="profile-details">
        <div className="profile-column">
          <p>Full Name</p>
          <p>Email</p>
          <p>Date Joined</p>
        </div>
        <div>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
          <p>{user?.email}</p>
          <p>{user?.createdAt.split("T")[0]}</p>
        </div>
      </div>
      <Button variant="dark" onClick={logoutHandler}>
        Logout
      </Button>
    </div>
  );
};
