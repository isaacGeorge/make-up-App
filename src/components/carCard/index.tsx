import {component$, Slot} from '@builder.io/qwik';
import {Link} from '@builder.io/qwik-city';

export interface CarCardProps {
  image: string;
  model: string;
  year: string;
  href: number;
  buttonLabel: string;

}

export default component$<CarCardProps>((props) => {
  return (
    <>
      <div class="bg-white drop-shadow-md rounded-md overflow-hidden ">
        <img className="w-full h-64 object-cover" src={props.image}/>
        <div class="flex flex-col p-5 space-y-1">
          <p class="text-xl font-bold text-gray-800">{props.model}</p>
          <p class="text-gray-800">{props.year}</p>
          <Link href={props.href}>
            <button type="button"
                    class="bg-sky-500 hover:bg-sky-700 p-2 text-xs text-white font-semibold rounded-lg">Read more
            </button>
          </Link>
          <div class="absolute top-1 right-0">
            <Slot name="special"/>
          </div>
        </div>
      </div>
    </>
  );
});