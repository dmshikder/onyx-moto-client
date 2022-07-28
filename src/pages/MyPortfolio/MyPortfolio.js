import React from "react";
import "./MyPortfolio.css";

const MyPortfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold pb-10">Dost Mohammad Shikder</h1>
            <div>
              <div className="grid grid-flow-col gap-4">
                <a
                  href="https://www.linkedin.com/in/dmshikder/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="linkedin fill-current"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  className="github"
                  href="https://github.com/dmshikder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="github fill-current"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/dmshikder21/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-current facebook"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <p class="py-6">
              I am a front end web developer. I have completed my graduation in
              Electrical and Electronic Engineering from Independent University
              Bangladesh (IUB). Currently doing masters in Information System
              Security from Bangladesh University of Professionals (BUP){" "}
            </p>
            <p>Skills:</p>
            <li>CSS3</li>
            <li>Bootstrap 5, Tailwind</li>
            <li>ES6</li>
            <li>React js</li>
            <li>Node js</li>
            <p>Email: dmshikder@gmail.com</p>
            <div>
              <p>My Projects: </p>
              <li>Bike-analizer: <a target='_blank' href="https://candid-caramel-ca3eec.netlify.app/" rel="noreferrer">Live link</a></li>
              <li>DMS Travel Guide: <a target='_blank' href="https://dms-travel-guide.web.app/" rel="noreferrer">Live link</a></li>
              <li>Computer World: <a target='_blank' href="https://computer-world-c827d.web.app/" rel="noreferrer">Live link</a></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
