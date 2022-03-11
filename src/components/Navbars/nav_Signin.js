import { useAuth0 } from "@auth0/auth0-react";

export const NavbarSignin = () =>{

    const { loginWithRedirect } = useAuth0();

    return(
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Signin" role="button" onClick={() => loginWithRedirect()}>Sign In</a>
            </li>
        </ul>
    );
};