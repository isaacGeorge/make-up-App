import {component$, useSignal, useTask$} from '@builder.io/qwik';
import {Link, useLocation} from '@builder.io/qwik-city';
import carsData from '~/data';
import CarCard from '~/components/carCard';

export default component$(() => {
  const location = useLocation();
  const models = useSignal([]);

  useTask$(async () => {
    const car = carsData.find(car => car.id === parseInt(location.params.id, 10));

    if (car) {
      models.value = car.models;
    }
  });

  return (
    <div class="max-w-screen-lg mx-auto">
      <h1 class="text-6xl text-left">Cars</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 md:p-0 sm:gap-3">
        {models.value.map((model) => {
          return (
            <CarCard key={model.id} image={model.image} year={model.year} model={model.name} href={model.id}>
              {
                ['Atlas', 'Tiguan', 'Range Rover Sport'].includes(model.name) && (
                  <div class="bg-amber-500 text-white text-xs font-bold rounded p-1" q:slot="special">
                    Special
                  </div>
                )
              }
            </CarCard>
          );
        })}
      </div>
    </div>
  );
});