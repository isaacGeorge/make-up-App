import {component$, useSignal, useTask$} from '@builder.io/qwik';
import {Link, useLocation} from '@builder.io/qwik-city';
import carsData from '~/data';

export default component$(() => {

  const location = useLocation();
  const model = useSignal(null);

  useTask$(async () => {
    const car = carsData.find(car => car.id === parseInt(location.params.id, 10));
    if (car) {
      model.value = car.models.find(model => model.id === (location.params.modelId));
    }
  });

  return (
    <div class='container'>

      {model.value && (
        <div key={model.value.id}>
          <h1 className='font-extrabold text-6xl text-left mb-4'>{model.value.name}</h1>
          <img class='w-full h-[500px] object-cover' src={model.value.image}/>

          <p class=' mt-4 text-md text-white'>{model.value.description}</p>
        </div>
      )}
    </div>
  );

});