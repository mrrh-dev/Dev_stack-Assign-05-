import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import type { Stacktypes } from './types/Stacktypes';
export interface Chooseprops {
  stack: Stacktypes[];
  count: number;
}
const Chosestack = ({ stack, count }: Chooseprops) => {
  return (
    <div>
      <div className="card rounded-xl w-80 h-80 mt-6 bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <div>
            <h1 className="text-xl font-semibold">Your Stack</h1>
            <p>{count} Technology Selected</p>
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
