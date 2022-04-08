import { useAuth0 } from "@auth0/auth0-react";
import './profile.css';

export const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="padre">
      {isAuthenticated && (
      <div className="hijo">
        <h3>Nombre: {user.name}</h3>
        <img src={user.picture} alt={user.name} className="imgWidth"/>
        <p>Email: {user.email}</p>
        <p>Email Verificado: {user.email_verified ? "Si" : "No"}</p>
      </div>
    )}
    </div>
  );
};