import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { Stacktypes } from './types/Stacktypes';
import { toast } from 'react-toastify';
//import { RiReactjsFill } from 'react-icons/ri';
export interface Stackprops {
  stack: Stacktypes;
  count: number;
  setcount: Dispatch<SetStateAction<number>>;
}
const Stackcard = ({ stack, count, setcount }: Stackprops) => {
  const [isadded, setadded] = useState<boolean>(false);
  const handleadded = () => {
    if (isadded) toast.warn('Stack already added');
    else {
      setadded(true);
      setcount((count = count + 1));
      toast.success('Stack succesfully added');
    }
  };
  return (
    <div className="">
      <div className="card rounded-xl w-100 h-80 mt-6 bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <img src={stack.icon} alt="react img" className="w-10 h-10"></img>
            </div>
            <div>
              <p className="">{stack.badge}</p>
            </div>
          </div>
          <h1 className="text-xl font-semibold">{stack.name}</h1>
          <p>{stack.description}</p>
          <div>
            <ul className="flex justify-between">
              <li>{stack.category}</li>
              <li>{stack.difficulty}</li>
              <li>{stack.rating}</li>
            </ul>
          </div>
          <button
            /* disabled={isadded} */
            onClick={() => handleadded()}
            className={`w-80 h-10 rounded-xl ${isadded ? 'bg-gray-600' : 'bg-gray-900'}  text-white`}
          >
            {isadded ? 'Added' : 'Add to Stack'}
          </button>
          {/* <h2 className="card-title"></h2>
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

export default Stackcard;
