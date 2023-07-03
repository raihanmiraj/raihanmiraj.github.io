import React from 'react';

const SkillCard = ({svg, label, category, lang}) => {
    return (
        <>
             <div className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                 {svg}
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">
                    {lang}
                  </h1>
                  <span className="text-sm  font-medium ">
                   {label}
                  </span>
                </div>
              </div>
        </>
    );
}

export default SkillCard;
