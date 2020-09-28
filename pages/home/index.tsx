import React from 'react';
import Link from 'next/link';

import { HeaderNavbar } from '@component';

import styles from './style.module.scss';

export default function Home() {
    return (
        <div className={styles.homePage}>
            <HeaderNavbar />

            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <h1 className={styles.animated}>
                            Welcome to ResumeBuild,
                            <br />
                            <span>Hey folks, let's</span>
                            <div className="animated-info">
                                <span className="animated-item">Create</span>
                                <span className="animated-item">Build</span>
                                <span className="animated-item">Draft</span>
                                <br />
                                an eye-catching resume for you.
                            </div>
                        </h1>
                        <a className={styles.start}>
                            <Link href="/resume-builder">
                                <input type="button" value="CREATE YOUR RESUME" />
                            </Link>
                        </a>
                    </div>
                    <div className="col-sm-1">
                        <div className="img-comp">
                            <img src="images/banner.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <section id="Templates">
                <h1>TEMPLATES</h1>
                <h2 className="container">Pick your template</h2>
                <div className="container-def">
                    <div className="row">
                        <div className="col-md-3 mr-20">
                            <a href="personal.html">
                                <img src="img/template1.png" alt="" className="img-temp" />
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="personal.html">
                                <img src="img/template2.png" alt="" className="img-temp" />
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="personal.html">
                                <img src="img/template4.png" alt="" className="img-temp" />
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="personal.html">
                                <img src="img/template5.png" alt="" className="img-temp" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
