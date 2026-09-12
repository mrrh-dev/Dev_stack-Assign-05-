import React, { type Dispatch, type SetStateAction } from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import type { Stacktypes } from './types/Stacktypes';
import { MdDeleteForever } from 'react-icons/md';
export interface Chooseprops {
  //stack: Stacktypes[];
  count: number;
  setcount: Dispatch<SetStateAction<number>>;
  selectedstack: Stacktypes[];
  setselectedstack: Dispatch<SetStateAction<Stacktypes[]>>;
}
const Chosestack = ({
  //stack,
  count,
  setcount,
  selectedstack,
  setselectedstack,
}: Chooseprops) => {
  const handleremove = (stack: Stacktypes) => {
    const remainingtstack = selectedstack.filter(
      (stak) => stak.name !== stack.name,
    );
    setselectedstack(remainingtstack);
    //console.log(remainingtstack);
    setcount((count = count - 1));
  };
  /* if (count === 0) {
    return <h2 className="font-bold my-10 text-center">Your stack is empty</h2>;
  } */
  return (
    <div>
      <div className="card container mx-auto  rounded-xl mt-6 bg-base-100 card-xl shadow-sm">
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
                <div className="bg-white my-10 flex items-center justify-center w-70 h-30 border-gray-200 border-2 border-dotted rounded-xl shadow-sm">
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
                  <div className="flex justify-between items-center border-2 border-gray-300 rounded-xl space-y-3 py-2 px-4">
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
                        className="w-16 h-12 rounded-xl bg-white hover:bg-gray-200 py-2 px-4 mb-4"
                      >
                        <MdDeleteForever className="size-7" />
                      </button>
                    </div>
                  </div>
                  {/* <div>
                    <button className="w-80 h-10 rounded-xl bg-red-200 ">
                      Remove All
                    </button> 
                  </div> */}
                </div>
              );
            })}
          </div>
          {/* <h2 className="card-title">Xlarge Card</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button> 
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Chosestack;
