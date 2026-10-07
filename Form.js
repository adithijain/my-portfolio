"use client";

import { useState } from "react";

export default function Form() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <main className="signup-page">
            <p className="brand">AFRIK-MUSIK</p>

            <section className="signup-card">
                <div className="form-panel">
                    <h1>AFRIK-MUSIK</h1>
                    <p className="subtitle">I dont know what im supposed to write .</p>

                    <div className="tabs">
                        <button className={!isLogin ? "selected" : ""} onClick={() => setIsLogin(false)} type="button">Sign Up</button>
                        <button className={isLogin ? "selected" : ""} onClick={() => setIsLogin(true)} type="button">Log In</button>
                    </div>

                      <p className="social-label">{isLogin ? "Log in with your account" : "Sign up with your account"}</p>
                    <div className="social-buttons">
                        <button aria-label="Continue with Google" type="button">G</button>
                        <button aria-label="Continue with Facebook" type="button">f</button>
                        <button aria-label="Continue with Apple" type="button">●</button>
                    </div>

                    <p className="divider">or continue with email</p>

                    <form onSubmit={(event) => event.preventDefault()}>
                        {!isLogin && (
                            <label>
                                Username
                                <input name="username" placeholder="Choose a username" required />
                            </label>
                        )}
                        <label>
                            Email
                            <input name="email" placeholder="adithiii11@example.com" required type="email" />
                        </label>
                        <label>
                            Password
                            <input name="password" placeholder="Enter your password" required type="password" />
                        </label>
                        <label className="remember">
                            <input defaultChecked type="checkbox" />
                            Remember me
                        </label>
                    </form>
                </div>

                <div className="photo-panel">
                    <img alt="Music fan surrounded by instruments and headphones" src="/afro-music-portrait.jpg" />
                </div>
            </section>
        </main>
    );
}