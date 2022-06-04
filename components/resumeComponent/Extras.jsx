import React, { useState,useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Language from "./Language";
import Certificate from "./Certificate";
import Project from "./Project";


function Extras() {
  const [refalert, setRefAlert] = useState(false);

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const router = useRouter();
  return (
    <>
      <div className="lg:px-16 sm:px-0 mobile">
        <main className=" ">
          <section className="mt-5 min-w-fit ">
            <h1 className="text-4xl mx-2 lg:pt-6 pb-3 uppercase text-gray-700 font-bold">
              Extra details
            </h1>
            <p className="pt-0 mx-2 text-gray-600 text text-base pb-3">
              We suggest including an email and phone number.
            </p>

            <div className="max-w-full  drop-shadow-md mt-8">
              {/* language */}
              <Language />

              {/* certificate */}
              <Certificate />

              {/* projects */}
              <Project />
            </div>
            {/* navigation buttons*/}
            <div className="flex py-2 mt-10">
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
                  // onClick={() => router.push("/refer")}
                  onClick={() => setRefAlert(true)}
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
     
    </>
  );
}

export default Extras;
