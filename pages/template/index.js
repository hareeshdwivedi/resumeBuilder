import React, { useEffect, useState } from "react";
import { templateData } from "../../components/data/templateData";

import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { resumeAction } from "../../redux/actions/resumeAction";
import Image from "next/image";
import arrayShuffle from 'array-shuffle';

function Templates() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const [selected, setSelected] = useState("Basic");
  const [filtered, setFiltered] = useState(templateData);
  const filterTypes = [...new Set(templateData.map((item) => item.category))];

  useEffect(() =>{
    let x= arrayShuffle(templateData)
    // let x=templateData.map((item) => (item.id));
    // let random = x[Math.floor(Math.random() * x)]
    setFiltered(x)
  },[])




  const filterItem = (matchcategroy) => {
    const newItem = templateData.filter((newVal) => {
      return newVal.category === matchcategroy;
    });
    setFiltered(newItem);
  };


  const handleClick = (id, withPhoto, category) => {
    dispatch(resumeAction({ id, withPhoto, category }));
    router.push(`/template/${id}/skill`);
  };

  const filterResume = (bool) => {
    if (bool == "all") {
      setFiltered(templateData);
      return;
    }
    const filtered_data = templateData.filter(
      (item) => item.withPhoto === bool
    );
    setFiltered(filtered_data);
  };

  return (
    <>
      <div className="flex justify-between h-20 mx-20 items-center">
        <div className="leftt">
          <div className="text-md font-medium text-center text-gray-600 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px ">
              {filterTypes.map((item, index) => (
                <li
                  key={index}
                  onClick={() => filterItem(item)}
                  className="mr-2 "
                >
                  <a
                    href="#"
                    // className="inline-block p-7 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                    className={
                      selected === item
                        ? "inline-block p-7 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                        : "inline-block p-7 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                    onClick={() => setSelected(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right flex items-center">
          <ul className="flex justify-center items-center">
            <li onClick={() => setFiltered(templateData)}>
              <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  All
                </span>
              </button>
            </li>
            <li onClick={() => filterResume(true)}>
              <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  with photo
                </span>
              </button>
            </li>
            <li onClick={() => filterResume(false)}>
              <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  without photo
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className=" grid px-20 mt-10 grid-cols-1 gap-y-12 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filtered?.map((template) => (
          <div className="relative h-96 w-auto rounded-lg border-4 border-gray-300 overflow-hidden hover:scale-125 ease duration-300">
            <Image
              layout="fill"
              objectFit="cover"
              onClick={() => handleClick(template.id, template.withPhoto)}
              src={template.template}
              alt="templates"
            />
            <p className="text-center z-50 text-black">{template.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Templates;

