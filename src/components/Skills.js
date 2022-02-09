import React from "react";
import { skills } from "../data"; 

function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <img className="w-20 inline-block mb-0 rounded-full" alt="fox" src={require("../Images/dice.png")} />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Folowing are my skills and Technologies which i am comfortable with.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {/* make skills in data */}
          {skills.map((skill) => (
            <div key={skill.skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img className="text-green-400 w-8 h-8 flex-shrink-0 mr-4" alt="badgeCheckIcon" src={require("../Images/BadgeCheckIcon.png")} />
                <span className="title-font font-medium text-white">
                  {skill.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Skills;
