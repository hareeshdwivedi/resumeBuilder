import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  languageAdd,
  languageAction,
  languageRemove,
} from "../../redux/actions/languageAction";
import ReactStars from "react-rating-stars-component";

function Language() {
  const dispatch = useDispatch();
  const { languages } = useSelector((state) => state);
  const [ar, setAr] = useState([1]);

  const handleChange = (e, ind) => {
    dispatch(languageAction({ target: e.target, ind: ind }));
  };

  const handleAr = () => {
    let nar = [...ar];
    nar.push(2);
    setAr(nar);
    if (languages.length > 3) {
      alert("You can add only 4 Refrence");
    } else {
      dispatch(languageAdd());
    }
  };

  return (
    <div className="relative mb-1 text-gray-600">
      <input type="checkbox" id="toggle1" className="toggle hidden" />
      <label
        className="title text-base block font-bold bg-white p-4 cursor-pointer"
        htmlFor="toggle1"
      >
        Language
      </label>
      <div className="content bg-white overflow-hidden overflow-y-scroll">
        <ul className="p-4 grid grid-cols-2 gap-x-5 max-h-60 overflow-y-scroll overflow-hidden">
          {/* map here */}
          {languages.map((language, index) => (
            <>
              <li className="left bg-none my-1">
                <input
                  onChange={(e) => handleChange(e, index)}
                  name="language"
                  type="text"
                  placeholder="Enter language"
                  value={language.language}
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
                />
                 <ReactStars
                        count={5}
                        size={30}
                        name="rating"
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
              </li>
              <li className="my-1">
                <button
                  onClick={handleAr}
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full
                        h-10
                        px-2
                        py-1.5
                        inline-flex items-center dark:bg-blue-800 dark:hover:blue-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    strokeWidth="4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
                {language.id !== 0 && (
                  <button
                    onClick={() => dispatch(languageRemove(language.id))}
                    type="button"
                    className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full
                    h-10
                    px-2
                    py-1.5
                    mx-2
                    inline-flex items-center dark:bg-blue-800 dark:hover:blue-900"
              >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
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

export default Language;
