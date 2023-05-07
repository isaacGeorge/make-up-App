import {component$, useStore} from '@builder.io/qwik';
import carsData from '~/data';
import {Link} from '@builder.io/qwik-city';
import CarCard from '~/components/carCard';


export default component$(() => {

  const cars = useStore(carsData);
  const images = [
    'http://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png',
    'http://makeup-api.herokuapp.com/assets/single-pot-4ce398e7d8c527ef248ace7a783cc52fd583375a25a7dcdb7b16f7a0958ccb17.png',
    'http://makeup-api.herokuapp.com/assets/lips-c35ec4a3350ec779c6bf6a785981ad9ef2e21bd9fe26a2be1c766d56edb2e11f.png',
    'http://makeup-api.herokuapp.com/assets/nail-polish-4c7ee1a5f7a5cbaff9757c3bcfa4f6e89d7a6f2ffc49d267e04e010ba94cfd7c.png',
    'http://makeup-api.herokuapp.com/assets/eyeshadow-18fa4bed267bec6a67506150d9574259d0dcc67700e69de4ba720d9afe8204a2.png'
  ];
  return (
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-8">
        <div>
          {images.slice(0, 2).map(image => (
            <img class="mb-2 sm:mb-3 last-of-type:mb-0" src={image}/>
          ))}
        </div>
        <div>
          {images.slice(images.length / 2, (images.length / 2) + 1).map(image => (
            <img class='h-full'  src={image}/>
          ))}
        </div>
        <div class='col-span-2 sm:col-span-1'>
          <div class='grid grid-cols-2 gap-2 sm:block'>
            {images.slice(3, images.length).map(image => (
              <img class=" sm:mb-3 last-of-type:mb-0" src={image}/>
            ))}
          </div>
        </div>

      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
        {carsData.map((car, index) => {
          return (
            <div class="bg-white drop-shadow-md p-12  rounded-lg flex flex-col items-center space-y-2" key={index}>
              <img class="h-12" src={car.logo}/>
              <p class="text-gray-900 text-lg font-semibold">{car.brand}</p>
              <p class='text-sm'>{car.country}</p>
              <Link href={`${car.id}`}>
                <button type="button" class="bg-sky-500 hover:bg-sky-700 p-2 font-semibold rounded-lg text-white text-xs">Check out</button>
              </Link>
            </div>

          );
        })}
      </div>

      <div class='grid grid-cols-5 gap-5'>
        <div class='h-64 bg-amber-500'>Box</div>
        <div class='h-64 bg-amber-500'>Box</div>
        <div class='h-64 bg-amber-500'>Box</div>
        <div class='h-64 bg-amber-500'>Box</div>
        <div class='h-64 bg-amber-500'>Box</div>
        <div class='h-64 bg-amber-500'>Box</div>
        <div class='h-64 bg-amber-500'>Box</div>
        <div class='h-64 bg-amber-500'>Box</div>
        <div class='h-64 bg-amber-500'>Box</div>
        <div class='h-64 bg-amber-500'>Box</div>
      </div>
    </div>
  );
});