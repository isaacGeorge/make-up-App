import {component$} from '@builder.io/qwik';
interface PersonProps{
  name: string;
  age: number;
  country: string
}
export const Person = component$<PersonProps>((props) =>{
  return(
    <>
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.country}</li>
      </ul>
    </>

  )
})