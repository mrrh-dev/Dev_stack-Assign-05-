import { type Dispatch, type SetStateAction } from 'react';
import type { Stacktypes } from './types/Stacktypes';
import { toast } from 'react-toastify';
export interface Stackprops {
  stack: Stacktypes;
  selectedstack: Stacktypes[];
  setselectedstack: Dispatch<SetStateAction<Stacktypes[]>>;
}
const Stackcard = ({ stack, selectedstack, setselectedstack }: Stackprops) => {
  //const [isadded, setadded] = useState<boolean>(false);
  const isadded = selectedstack.some((item) => item.name === stack.name);
  const handleadded = () => {
    if (isadded) toast.warn('Stack already added');
    else {
      //setadded(true);
      //setcount((count = count + 1));
      setselectedstack([...selectedstack, stack]);

      toast.success('Stack succesfully added');
    }
    //setselectedstack([...selectedstack, stack]);
  };
  const badgecolor = (badge: string) => {
    if (badge === 'Popular') return 'bg-blue-200';
    if (badge === 'Versatile') return 'bg-green-100 ';
    if (badge === 'Fast') return 'bg-green-200 ';
    if (badge === 'Cache') return 'bg-red-100 ';
    if (badge === 'Full Stack') return 'bg-gray-200';

    return 'bg-cyan-100';
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
                className={`text-sm font-semibold px-3 py-1 rounded-full ${badgecolor(stack.badge)}`}
              >
                {stack.badge}
              </p>
            </div>
          </div>
          <h1 className="text-xl font-semibold">{stack.name}</h1>
          <p className="text-lg text-pink-600">{stack.category}</p>
          <p>{stack.description}</p>
          <div>
            <ul className="flex justify-between mt-2 items-center">
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
