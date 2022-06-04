import React from "react";

import Extras from "../../../components/resumeComponent/Extras";

import { useSelector } from 'react-redux';
import ResumeList from '../../../components/resumes/ResumeList';

function Extra() {
  const { resume } = useSelector(state => state)

  return (
    <div className="">
    
      <main className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
        {/* left section */}
        <section className=" col-span-2 px-2">
          <Extras />
          {/* right section */}
        </section>
        <section className="hide side-resume lg:h-screen scale hover:scale-50 ease duration-300">
          <ResumeList />
        </section>
      </main>
    </div>
  );
}

export default Extra;
