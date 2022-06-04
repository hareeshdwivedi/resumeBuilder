import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  projectAction,
  projectAdd,
  projectRemove,
} from "../../redux/actions/projectAction";

function Project() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state);
  const [ar, setAr] = useState([1]);
  const handleChange = (e, ind) => {
    dispatch(projectAction({ target: e.target, ind: ind }));
  };

  const handleAr = () => {
    let nar = [...ar];
    nar.push(2);
    setAr(nar);
    if (projects.length > 3) {
      alert("You can add only 4 Refrence");
    } else {
      dispatch(projectAdd());
    }
  };

  return (
    <div className="relative mb-1 text-gray-600">
      <input type="checkbox" id="toggle3" className="toggle hidden" />
      <label
        className="title block font-bold bg-white p-4 cursor-pointer"
        htmlFor="toggle3"
      >
        Projects
      </label>
      <div className="content bg-white overflow-hidden">
        <ul className="p-4 grid grid-cols-2 gap-x-5 gap-y-5 max-h-60 overflow-y-scroll overflow-hidden">
          {/* map here */}
          {projects.map((item,index) => (
            <>
              <li className="leftinput">
                <input
                  onChange={(e) => handleChange(e, index)}
                  name="project"
                  type="text"
                  className="
        form-control
        block
        w-full
        h-10
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Title"
                />
              </li>
              <li className="leftinput">
                <input
                  onChange={(e) => handleChange(e, index)}
                  name="url"
                  type="url"
                  className="
        form-control
        block
        w-full
        h-10
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Paste url"
                />
              </li>

              <li className="leftinput col-span-2">
                <textarea
                  onChange={(e) => handleChange(e, index)}
                  name="description"
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Description"
                ></textarea>
              </li>

              <li className="col-span-3">
                <button
                  onClick={handleAr}
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full
                        h-10
                        p-2

                        inline-flex items-center dark:bg-blue-800 dark:hover:blue-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
                {item.id !== 0 && (
                  <button
                    onClick={() => dispatch(projectRemove(item.id))}
                    style={{ color: "red" }}
                    type="button"
                    className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full
                        h-10
                        p-2
                        ml-2
                        inline-flex items-center dark:bg-blue-800 dark:hover:blue-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                )}
              </li>
            </>
          ))}
          {/* map end */}
        </ul>
      </div>
    </div>
  );
}

export default Project;
