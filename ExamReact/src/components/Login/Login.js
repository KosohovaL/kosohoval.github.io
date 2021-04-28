import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { app } from '../../base';
import { AuthContext } from "../Auth/Auth";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const createUser = () => {
        history.push("/signup");
    }

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className="login-form">
            <h1 className="text-info">Playlist React</h1>
            <h2 className="text-info">Log in</h2>
            <form onSubmit={handleLogin}>
                <div className="row mt-4">
                    <div className="col-2 text-left">
                        <label className="text-info" htmlFor="email">Email</label>
                    </div>
                    <div className="col-10 text-right">
                        <input name="email" type="email" placeholder="Email" className="my-input" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-2 text-left">
                        <label className="text-info" htmlFor="password">Password </label>
                    </div>
                    <div className="col-10 text-right">
                        <input name="password" type="password" placeholder="Password" className="my-input" />
                    </div>
                </div>
                <Button variant="outline-info mt-3 mr-5 mb-1" type="submit">Log in
                <FontAwesomeIcon icon={faSignInAlt} className="logo-icon ml-3" />
                </Button>
                <Button variant="outline-info mt-3 mb-1" onClick={createUser}>Create user
                <FontAwesomeIcon icon={faUserPlus} className="logo-icon ml-3" />
                </Button>
            </form>
        </div>
    );
};

export default withRouter(Login);