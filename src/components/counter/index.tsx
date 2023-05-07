import {component$, useSignal} from '@builder.io/qwik';

export const Counter = component$(() =>{
  const count = useSignal(0);
  return(
    <>
    <h5>Am a child component press my button</h5>
      <h4>{count.value}</h4>
      <button onClick$={() => count.value++}>count</button>
    </>
  )
})