import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function PageNotFound() {
  useEffect(() => {
    document.title = "Error 404 (Not Found)!!1"
 }, []);

  return (
    <div className="notfound-wrapper">
    <div className="notfound-container">
      <div className="left-container">
        <picture className="notfound-logo">
        <Link to="/">
          <img src="googlelogo_color_150x54dp.png" alt="logo" />
        </Link> 
        </picture>
        <p className="notfound-p">
        <b>404. </b>
        <ins>That's an error.</ins>
        </p>
        <p className="notfound-p">
        <span>The requested URL {window.location.pathname} was not found on this server. </span>
        <ins>That's all we know.</ins>
        </p>
      </div>
      <div className="right-container">
        <picture className="robot">
          <img src="robot.png" alt="robot" />
        </picture>
      </div>
    </div>
    </div>
  )
}