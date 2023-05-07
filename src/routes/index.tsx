import {component$, useSignal, useStore} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import {Counter} from '~/components/Counter';
import {Person} from '~/components/person';
import {Angela} from '~/components/angela/angela';


export default component$(() => {
  const name = useSignal('Isaac');
  const person = useStore({name: 'George', age: 15});
  const blogs = useStore([
    {id: 1, title: 'The new England'},
    {id: 2, title: 'Welcome to Uganda'},
    {id: 3, title: 'Man comes to live'}
  ]);

  const countries = useStore(['uganda', 'Sudan', 'Rwanda', 'Israel']);
  const countryListVisible = useSignal(false);

  const persons = useStore([
    {name: 'Yolan', age: 17, country: 'Kenya'}
  ]);

  const buttonLabel = useSignal('On');
  const isVisibleSignal = useSignal(false);
  return (
    <div class="container text-white">
      <Counter/>
      <h2>Hello, {name.value}</h2>
      <p>I know you are {person.age} years old</p>
      <input oninput$={(e) => name.value = (e.target as HTMLInputElement).value}/>

      {blogs.map(blog => (
        <h4 key={blog.id}>{blog.title}</h4>
      ))}

      <button onclick$={() => blogs.pop()}>Remove item</button>

      <h2>Names of countries</h2>
      {countries.map((country, index) => (
        <p key={index}>{country}</p>
      ))}

      {persons.map((person, index) => (

        <Person key={index} name={person.name} age={person.age} country={person.country}/>

      ))}

      {isVisibleSignal.value ? <Person name={'Angela'} age={15} country={'Uganda'}/> : null}

      <button
        type="button" class="bg-sky-500 hover:bg-sky-700 p-2 text-xs text-white font-semibold rounded-lg"
        onClick$={() => {
          isVisibleSignal.value = !isVisibleSignal.value;
          buttonLabel.value = 'off';
        }}
      >
        Switch
      </button>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'MakeUp',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
};
