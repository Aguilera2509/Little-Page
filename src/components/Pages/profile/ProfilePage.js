import { useAuth0 } from "@auth0/auth0-react";
import './profile.css';

export const ProfilePage = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="padre">
      <div className="hijo">
        <div className="card" style={{"width": "18rem"}}>
          <img src={user.picture} className="card-img-top imgWidth" alt={user.name} />
          <div className="card-body">
          <h5 className="card-title">Username: {user.name}</h5>
          <p className="card-text">Email: {user.email}</p> 
          <p className="card-text">Email Verified: {user.email_verified ? "Yes" : "No"}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};