import React from "react";
import "../styles/waiting.css";

export default function Waiting() {
  return (
    <div class="waiting">
      <form>
        <div class="title">
          <img src="https://res.cloudinary.com/dyajk5rfe/image/upload/v1677771930/logo_im5hov.png" />
          <h1>Please wait for the admin to set your role and department!</h1>
        </div>
        <div class="dot-typing"></div>
      </form>
    </div>
  );
}
