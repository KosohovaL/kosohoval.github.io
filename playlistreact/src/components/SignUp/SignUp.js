import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { app } from '../../base';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
            history.push("/login");
        }
    }, [history]);

    return (
        <div className="login-form">
            <h1 className="text-info">Playlist React</h1>
            <h2 className="text-info">Sign up</h2>
            <form onSubmit={handleSignUp}>
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
                <Button variant="outline-info mt-3 mb-1" type="submit">Create user
                <FontAwesomeIcon icon={faUserPlus} className="logo-icon ml-3" />
                </Button>
            </form>
        </div>
    );
};

export default withRouter(SignUp);