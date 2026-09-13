import { type Dispatch, type SetStateAction } from 'react';
import type { Stacktypes } from './types/Stacktypes';
import { toast } from 'react-toastify';
//import Chosestack from './Chosestack';
//import Chosestack from './Chosestack';
//import { RiReactjsFill } from 'react-icons/ri';
export interface Stackprops {
  stack: Stacktypes;
  //count: number;
  //setcount: Dispatch<SetStateAction<number>>;
  selectedstack: Stacktypes[];
  setselectedstack: Dispatch<SetStateAction<Stacktypes[]>>;
  /* isadded: boolean;
  setadded: Dispatch<SetStateAction<boolean>>; */
}
const Stackcard = ({
  stack,
  //count,
  /// setcount,
  selectedstack,
  setselectedstack,
  /* isadded,
  setadded, */
}: Stackprops) => {
  //const [isadded, setadded] = useState<boolean>(false);
  const isadded = selectedstack.some((item) => item.name === stack.name);
  const handleadded = () => {
    if (isadded) toast.warn('Stack already added');
    else {
      //setadded(true);
      //setcount((count = count + 1));
      setselectedstack([...selectedstack, stack]);
      //setselectedstack((prev) => [...prev, stack]);

      toast.success('Stack succesfully added');
    }
    //setselectedstack([...selectedstack, stack]);
  };
  const badgecolor = (badge: string) => {
    if (badge === 'Popular') return 'bg-green-50 text-green-500';
    if (badge === 'Versatile') return 'bg-green-50 text-green-500';
    if (badge === 'Fast') return 'bg-green-50 text-green-500';
    if (badge === 'Cache') return 'bg-red-50 text-red-500';

    return 'bg-cyan-50 text-cyan-500';
  };
  return (
    <div className="w-full">
      <div className="card rounded-xl w-full min-h-80 mt-6 bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <img src={stack.icon} alt="react img" className="w-10 h-10"></img>
            </div>
            <div>
              <p
                className={`text-xs font-medium px-3 py-1 rounded-full ${badgecolor(stack.badge)}`}
              >
                {stack.badge}
              </p>
            </div>
          </div>
          <h1 className="text-xl font-semibold">{stack.name}</h1>
          <p>{stack.description}</p>
          <div>
            <ul className="flex justify-between mt-2 items-center">
              <li className="text-lg bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                {stack.category}
              </li>
              <li>{stack.difficulty}</li>
              <li className="text-lg font-medium text-gray-700">
                <span className="text-yellow-500 text-2xl">★</span>{' '}
                {stack.rating}
              </li>
            </ul>
          </div>
          <button
            /* disabled={isadded} */
            onClick={() => handleadded()}
            className={`mt-6 w-full h-10 rounded-xl ${isadded ? 'bg-gray-600' : 'bg-gray-900'}  text-white`}
          >
            {isadded ? 'Added' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stackcard;
