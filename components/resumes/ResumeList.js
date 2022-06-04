import React from "react";
import Resume1A from "./withPhoto/ResumeA1";
import Resume2A from "./withPhoto/ResumeA2";



import Resume1B from "./withoutPhoto/ResumeB1";
import Resume2B from "./withoutPhoto/ResumeB2";



import Resume from "../resumeComponent/Resume";
import { useSelector } from "react-redux";

function ResumeList(e) {

  e.preventDefault
  const { id } = useSelector((state) => state.resume);


  const getReseume = () => {
    switch (id) {
      case 1:
        return <Resume1A />;
      case 2:
        return <Resume1B />;
      case 3:
        return <Resume2A />;
      case 4:
        return <Resume2B />;

      default:
        return <Resume/>;
    }
  };

  return <>
  {getReseume()}
  
  </>;
}



export default ResumeList;
