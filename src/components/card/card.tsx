import {component$, Slot} from '@builder.io/qwik';
import {Link} from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="bg-white w-64 rounded shadow-md ">
      <div class=" ">
        <Slot name="image"/>
      </div>
      <div className='text-gray-800 text-2xl font-black'>
        <Slot name="title"/>
      </div>
      <div class='text-gray-800 text-sm p-4'>
        <Slot name="paragraph"/>
      </div>
      <Link href={'/contact'} >
        <butto >More</butto>
      </Link>

    </div>

  );
});