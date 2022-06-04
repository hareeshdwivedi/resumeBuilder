import React from "react";
import Resume from "../../../components/resumeComponent/Resume";
import Skills from "../../../components/resumeComponent/Skills";

import ResumeList from '../../../components/resumes/ResumeList';

function Skill() {
  return (
    <div className="">
     
      <main className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
        {/* left section */}
        <section className="h-screen col-span-2 px-2">
          <Skills />
          {/* right section */}
        </section>
        <section className="hide side-resume lg:h-screen scale hover:scale-50 ease duration-300">
          <ResumeList />
        </section>
      </main>
    </div>
  );
}

export default Skill;
