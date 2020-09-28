import React from 'react';

import { Navbar } from 'react-bootstrap';
import styles from './style.module.scss';

export default function HeaderNavbar() {
    return (
        <Navbar expand="sm" className={['navbar navbar-expand-lg navbar-light bg-info px-2', styles.nav].join(' ')}>
            <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="index.html">
                        Resume <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-link" href="#Templates">
                        Template
                    </a>
                    <a className="nav-link" href="login.html">
                        Signup
                    </a>
                </div>
            </div>
        </Navbar>
    );
}
