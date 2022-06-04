import React,{useEffect} from "react";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { skillAction, skillAdd } from "../../redux/actions/skillAction";
import { skillButton } from "../../redux/actions/skillButtonAction";

import Star from "../Star";

const stars = [
  { per: "20%" },
  { per: "40%" },
  { per: "60%" },
  { per: "80%" },
  { per: "100%" },
];

function Skills() {
  const rating = useSelector((state) => state.sampleData.rating);

  const router = useRouter();
  const dispatch = useDispatch();
  const { skills, skills_data } = useSelector((state) => state);

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const handleClick = (data) => {
    dispatch(skillAdd(data));
    dispatch(skillButton(data.id));
  };

  const handleChange = (e, ind) => {
    dispatch(skillAction({ target: e.target, ind: ind }));

  };

  const setRating = (e) => {
    dispatch({
      type: "CHANGE_INPUT_RATING",
      payload: e,
    });
  };
  const handlePercentage = (e) => {
    dispatch({
      type: "CHANGE_INPUT_PER",
      payload: e,
    });
  };

  return (
    <div className="lg:px-16 sm:px-0 mobile">
      <main className="h-screen">
        <section className="h-screen py-4">
          <h1 className="text-4xl mx-2 lg:pt-6 pb-3 uppercase text-gray-700 font-bold">
            Skills
          </h1>

          {/* grid */}
          <div className="lg:flex overflow-hidden justify-between gap-x-10">
            {/*left  */}
            <div className="left summary-height overflow-y-scroll lg:w-96 md:w-auto">
              <div className="overflow-y-scroll text-gray-900 bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {skills_data?.map((item) => (
                  <button
                    onClick={() => handleClick(item)}
                    key={item.id}
                    type="button"
                    className="relative inline-flex w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="blue"
                      strokeWidth="1.5"
                    >
                      {item.isAdded ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      )}
                    </svg>
                    <p className="text-sm text-left py-2 ml-2 w-64">
                      {item.data}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/*right  */}
            <div className="right md:py-10 sm:py-10 lg:py-0">
              <ul className="md:w-auto lg:w-80 h-fit summary-height text-sm  text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2  border-gray-200 dark:border-gray-600">
                  {skills.map((item, index) => (
                    <>
                      <div className="dark:bg-gray-700 mb-3" key={index}>
                        <input
                          className="dark:bg-gray-700"
                          onChange={(e) => handleChange(e, item.id)}
                          value={item.data}
                          name="data"
                        />
                        {stars.map((star, index) => {
                          index += 1;

                          return (
                            <Star
                              key={index}
                              style={index <= rating ? "on" : "off"}
                              setRating={() => (
                                setRating(index), handlePercentage(star.per)
                              )}
                            />
                          );
                        })}
                      </div>
                    </>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          {/* navigation buttons*/}
          <div className="flex py-10 ">
            <button
              onClick={() => router.push("/template/1/skill")}
              className="text-base focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer
        hover:bg-gray-200
        bg-gray-100
        text-gray-700
        border duration-200 ease-in-out
        border-gray-600 transition"
            >
              Previous
            </button>
            <div className="flex-auto flex flex-row-reverse">
              <button
                onClick={() => router.push("/template/1/extra")}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Skills;
