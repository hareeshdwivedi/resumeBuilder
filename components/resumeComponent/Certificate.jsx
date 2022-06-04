import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { certAdd, certAction, certRemove } from "../../redux/actions/certAction";

function Certificate() {
  const dispatch = useDispatch();
  const { certificates } = useSelector((state) => state);
  const [ar, setAr] = useState([1]);
  const handleChange = (e, ind) => {
    dispatch(certAction({ target: e.target, ind: ind }));
  };

  const handleAr = () => {
    let nar = [...ar];
    nar.push(2);
    setAr(nar);
    if (certificates.length > 3) {
      alert("You can add only 4 certificates");
    } else {
      dispatch(certAdd());
    }
  };

  return (
    <div className="relative mb-1 text-gray-600">
      <input type="checkbox" id="toggle2" className="toggle hidden" />
      <label
        className="title block font-bold bg-white p-4 cursor-pointer"
        htmlFor="toggle2"
      >
        Certificate
      </label>
      <div className="content border bg-white overflow-hidden overflow-y-scroll">
        <ul className="p-4 grid grid-cols-4 gap-x-5 max-h-60 overflow-y-scroll overflow-hidden">
          {/* map here */}
          {certificates.map((item, index) => (
            <>
              <li className="rightaddbtn my-1 col-span-2">
                <input
                  name="cert_name"
                  onChange={(e) => handleChange(e, index)}
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
                  placeholder="Certificate name"
                />
              </li>
              <li className=" my-1">
                <input
                  name="cert_date"
                  onChange={(e) => handleChange(e, index)}
                  type="date"
                  placeholder="start date"
                  className="border h-10
                  px-3
                  py-1.5
                  rounded
                 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </li>
              <li className="my-1">
                <button
                  type="button"
                  onClick={handleAr}
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full
                        h-10
                        p-2
                        border
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
                {index !== 0 && (
                  <button
                    onClick={() => dispatch(certRemove(item.id))}
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

export default Certificate;
