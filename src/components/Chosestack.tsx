import React, { type Dispatch, type SetStateAction } from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import type { Stacktypes } from './types/Stacktypes';
import { MdDeleteForever } from 'react-icons/md';
export interface Chooseprops {
  //stack: Stacktypes[];
  //count: number;
  //setcount: Dispatch<SetStateAction<number>>;
  selectedstack: Stacktypes[];
  setselectedstack: Dispatch<SetStateAction<Stacktypes[]>>;
  //setadded: Dispatch<SetStateAction<boolean>>;
}
const Chosestack = ({
  //stack,
  //count,
  //setcount,
  selectedstack,
  setselectedstack,
  //setadded,
}: Chooseprops) => {
  let count = selectedstack.length;
  const handleremove = (stack: Stacktypes) => {
    const remainingtstack = selectedstack.filter(
      (stak) => stak.name !== stack.name,
    );
    setselectedstack(remainingtstack);
    //setselectedstack((prev) => prev.filter((stak) => stak.name !== stack.name));
    //console.log(remainingtstack);
    //setcount((count = count - 1));
    //setadded(false);
  };
  const handleremoveall = () => {
    setselectedstack([]);
    count = 0;
  };
  /* if (count === 0) {
    return <h2 className="font-bold my-10 text-center">Your stack is empty</h2>;
  } */
  return (
    <div>
      <div className="card w-full rounded-xl mt-6 bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <div>
            <h1 className="text-xl font-semibold">Your Stack</h1>
            <p>
              {count === 0
                ? 'No technology selected yet'
                : `${count} technology selected`}
            </p>
            <div>
              {count === 0 ? (
                <div className="bg-white my-10 flex items-center justify-center w-full h-30 border-gray-200 border-2 border-dotted rounded-xl shadow-sm">
                  Your stack is empty
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div>
            {selectedstack.map((stack) => {
              return (
                <div className="mt-2">
                  <div className="flex justify-between items-center border-2 border-gray-300 rounded-xl py-2 px-4">
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <img
                          src={stack.icon}
                          alt="stack"
                          className="w-10 h-10"
                        ></img>
                      </div>
                      <div>
                        <h1 className="font-bold">{stack.name}</h1>
                        <p className="text-gray-400">{stack.category}</p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleremove(stack)}
                        className="w-16 h-12 rounded-xl bg-white hover:bg-gray-200 flex items-center justify-center"
                      >
                        <MdDeleteForever className="size-7" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {selectedstack.length > 0 && (
            <button
              onClick={handleremoveall}
              className="mt-14 text-xl font-bold w-full h-10 rounded-xl border border-red-300 text-red-500 hover:bg-red-50"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chosestack;
