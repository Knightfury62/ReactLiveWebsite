import React, { useEffect } from "react";
import me from "../Assets/me2.jpeg";
import ScrollReveal from "scrollreveal";
import "./About.css";
function About() {
  useEffect(() => {
    ScrollReveal().reveal(".para", {
      delay: 200,
      reset: true,
      distance: "50px",
      origin: "top",
    });
    ScrollReveal().reveal(".myimg", {
      delay: 200,
      reset: true,
      origin: "left",
      distance: "50px",
    });
  }, []);
  return (
    <div className="about h-[100vh] flex justify-center items-center drop-shadow-2xl" id="about">
      <div className="sm:mx-5 md:mx-16 lg:mx-28 xl:mx-48 bg-white/5 rounded-3xl">
        <h1 className="text-center text-3xl font-bold text-teal-400 mt-5">
          About Me
        </h1>
        <div className="md:flex items-center mt-14">
          <div className="w-full">
            <img className=" myimg m-auto h-52 w-52 rounded-full" src={me} alt="" />
          </div>
          <div className="w-full border-l-2 border-l-white-500">
            <p className="mt-5 para mx-6 text-white text-justify">
              Hi, I am Chetan Shivaji Kurkute. I am in fourth year of engineering at
              D.Y.Patil College Of Engineering Akurdi, Pune. I have
              knowledge in different programming languages like C, Java,
              JavaScript etc. I am problem solver and team player. Apart from
              that I like to play pc games. And also Passoniate with Cricket.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-10 flex text-center items-center justify-center">
          <ul className="socials">
            <li className="social">
              <a href="https://github.com/Knightfury62">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li className="social">
              <a href="https://www.instagram.com/chetan__62/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li className="social">
              <a href="https://www.linkedin.com/in/chetan-kurkute-2996a1233">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
