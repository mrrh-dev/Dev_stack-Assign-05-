import { use, useState } from 'react';
import type { Stacktypes } from './types/Stacktypes';
import Stackcard from './Stackcard';
import Chosestack from './Chosestack';
export interface Promiseprops {
  fetchdata: Promise<Stacktypes[]>;
}
const Techstack = ({ fetchdata }: Promiseprops) => {
  const stack = use(fetchdata);
  //const [count, setcount] = useState(0);
  const [selectedstack, setselectedstack] = useState<Stacktypes[]>([]);
  //const [isadded, setadded] = useState<boolean>(false);
  return (
    <div>
      <div className="container mx-auto px-4 lg:-mt-20">
        <h1 className="text-3xl font-bold">
          Explore the <br className="md:hidden" />
          <span className="text-pink-600">Technologies</span>
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Pick one tchnology per category to build your{' '}
          <br className="md:hidden" /> ideal stack
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((stack: Stacktypes, ind: number) => {
            return (
              <Stackcard
                key={ind}
                stack={stack}
                /*  count={count}
                setcount={setcount} */
                /* isadded={isadded}
                setadded={setadded} */
                selectedstack={selectedstack}
                setselectedstack={setselectedstack}
              ></Stackcard>
            );
          })}
        </div>
        <div className="lg:col-span-1 ">
          <Chosestack
            /* count={count}
            setcount={setcount} */
            selectedstack={selectedstack}
            setselectedstack={setselectedstack}
          ></Chosestack>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
