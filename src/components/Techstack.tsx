import React, { use, useState } from 'react';
import type { Stacktypes } from './types/Stacktypes';
import Stackcard from './Stackcard';
import Chosestack from './Chosestack';
export interface Promiseprops {
  fetchdata: Promise<Stacktypes[]>;
}
const Techstack = ({ fetchdata }: Promiseprops) => {
  const stack = use(fetchdata);
  const [count, setcount] = useState(0);
  const [selectedstack, setselectedstack] = useState<Stacktypes[]>([]);
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Explore Technologies</h1>
        <p>Pick one tchnology per category to build your ideal stack</p>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-10">
        <div className="col-span-3 grid grid-cols-3 gap-8">
          {stack.map((stack: Stacktypes, ind: number) => {
            return (
              <Stackcard
                key={ind}
                stack={stack}
                count={count}
                setcount={setcount}
                selectedstack={selectedstack}
                setselectedstack={setselectedstack}
              ></Stackcard>
            );
          })}
        </div>
        <div className="col-span-1">
          <Chosestack
            /*  stack={stack} */

            count={count}
            setcount={setcount}
            selectedstack={selectedstack}
            setselectedstack={setselectedstack}
          ></Chosestack>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 container mx-auto">
        {stack.map((stack: Stacktypes, ind: number) => {
          return <Stackcard key={ind} stack={stack}></Stackcard>;
        })}
      </div> */}
    </div>
  );
};

export default Techstack;
