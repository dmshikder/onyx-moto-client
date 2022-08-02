import React from "react";
import "./MyPortfolio.css";

// style={{ backgroundImage: "url(https://i.ibb.co/wR9GfsG/p.jpg)" }}

const MyPortfolio = () => {
  return (
    <div>
      <div
        class="hero min-h-screen bg-gray-100"
        
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-center text-neutral-content">
          <div>
            <h1 class="mb-5 text-5xl font-bold mt-20">
              HI, I'M Dost Mohammad Shikder
            </h1>
            <p class="mb-5 text-justify lg:ml-52 ">
              A Frontend focused Web Developer building the FrontEnd of Websites
              and Web Applications that leads to the success of the overall
              Product
            </p>

            <h2 className="text-3xl font-bold text-center text-amber-300 mt-10 mb-4">ABOUT ME</h2>
            <div className="flex justify-center gap-5 mb-4">
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
            <p className="text-justify lg:ml-52 ">
              Here you will find more information about me, what I do and my
              current skills mostly in terms of programming and technology
            </p>
            
            <div className="text-justify ">
              <h2 className="text-3xl font-bold text-center text-amber-300 mt-10 mb-10">Education</h2>
              <p><span className="badge badge-xs bg-white lg:ml-52"></span> Masters in Information Systems Security (MISS) - Bangladesh University of Professionals (BUP)</p>
              <p><span className="badge badge-xs bg-white lg:ml-52 "></span> BSc in Electrical and Electronic Engineering (EEE) - Independent University, Bangladesh(IUB)</p>
            </div>

            <div class=" grid lg:grid-cols-2  shadow-xl text-black mt-10">
              <div className="p-10">
                <h2 className="text-3xl font-bold text-center text-amber-300 mb-10">Get to know me !</h2>
                <p className="text-justify">
                  I'm a Frontend Web Developer building the Font-end of Websites
                  and Web Applications that leads to the success of the overall
                  product. Check out some of my work in the Projects section.
                  <br /> I also like sharing content related to the stuff that I
                  have learned over the years in Web Development so it can help
                  other people of the Dev Community. Feel free to Connect or
                  Follow me on my <span> </span> 
                  <a
                    href={"https://www.linkedin.com/in/dmshikder/"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-300 font-bold"
                  >
                    LinkedIn 
                  </a>
                  <span> </span> where I post useful content related to Web Development and
                  Programming. <br />
                  I'm open to Job opportunities where I can contribute, learn
                  and grow. If you have a good opportunity that matches my
                  skills then dont't hesitate to contact me. <br />
                  <span className="font-bold">Email:</span> <span  className="text-green-300 font-bold" >dmshikder@gmail.com</span>
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-center text-amber-300 mt-10 mb-10">My Skills</h2>
                <div className="grid grid-cols-3 gap-4 m-10 ">
                  <p className="bg-green-300 rounded-md">HTML</p>
                  <p className="bg-green-300 rounded-md">CSS</p>
                  <p className="bg-green-300 rounded-md">Bootstrap CSS</p>
                  <p className="bg-green-300 rounded-md">Tailwind CSS</p>
                  <p className="bg-green-300 rounded-md">Javascript</p>
                  <p className="bg-green-300 rounded-md">React JS</p>
                  <p className="bg-green-300 rounded-md">GIT</p>
                  <p className="bg-green-300 rounded-md">GitHub</p>
                  <p className="bg-green-300 rounded-md">MongoDB</p>
                  <p className="bg-green-300 rounded-md">Firebase</p>
                  <p className="bg-green-300 rounded-md">Heroku</p>
                  <p className="bg-green-300 rounded-md">daisyUI</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-center text-amber-300 mt-10 mb-10">PROJECTS</h2>
              <p className="text-justify lg:ml-52">
                Here you will find some of my personal projects that I created
                with each project containing its own study.
              </p>
              <div className="grid lg:grid-cols-2 gap-4 mt-10 mb-10 shadow-2xl bg-red-400 rounded-md">
                <div>
                  <img className="h-96 w-full"
                    src="https://i.ibb.co/6sFhSJQ/p-2.png"
                    alt=""
                  />
                </div>
                <div className=" p-4">
                  <h2 className="text-3xl font-bold text-center text-amber-300 mt-10">Bike-analizer</h2>
                  <p className="text-justify mb-6 text-black p-7">
                    Project description: Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Deserunt molestias eveniet explicabo aut
                    praesentium reiciendis sint, ab vitae numquam maxime minus
                    distinctio natus quo inventore laboriosam amet. Accusantium,
                    omnis voluptas.
                  </p>
                  <button className="btn btn-ghost bg-red-500">
                    {" "}
                    <a
                      target="_blank"
                      href="https://candid-caramel-ca3eec.netlify.app/"
                      rel="noreferrer"
                    >
                      Live link
                    </a>
                  </button>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 mt-10 mb-10 shadow-2xl bg-red-400 rounded-md">
                <div>
                  <img className="h-96 w-full"
                    src="https://i.ibb.co/cJbWkkc/p-3.png"
                    alt=""
                  />
                </div>
                <div className=" p-4">
                  <h2 className="text-3xl font-bold text-center text-amber-300 mt-10">DMS Travel Guide</h2>
                  <p className="text-justify mb-6 text-black p-7">
                    Project description: Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Neque, numquam. Hic aliquam sapiente
                    accusamus culpa est maxime amet sequi, deserunt delectus
                    inventore? At ea dignissimos distinctio voluptates aut,
                    possimus ut?
                  </p>
                  <button className="btn btn-ghost bg-red-500">
                    {" "}
                    <a
                      target="_blank"
                      href="https://dms-travel-guide.web.app/"
                      rel="noreferrer"
                    >
                      Live link
                    </a>
                  </button>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 mt-10 mb-10 shadow-2xl bg-red-400 rounded-md">
                <div>
                  <img className="h-96 w-full"
                    src="https://i.ibb.co/3sbYH8Y/p-1.png"
                    alt=""
                  />
                </div>
                <div className=" p-4">
                  <h2 className="text-3xl font-bold text-center text-amber-300 mt-10">Computer World</h2>
                  <p className="text-justify mb-6 text-black p-7">
                    Project description: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Eos quos consectetur sapiente dolores
                    iusto rem provident soluta, ullam cumque deleniti nisi
                    perspiciatis fugit non, expedita dolore minima accusantium
                    vero dignissimos?
                  </p>
                  <button className="btn btn-ghost bg-red-500">
                   
                    <a
                      target="_blank"
                      href="https://computer-world-c827d.web.app/"
                      rel="noreferrer"
                    >
                      Live link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MyPortfolio;
