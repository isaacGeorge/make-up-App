import {component$, useSignal, useStore, useStyles$} from '@builder.io/qwik';
import {Child} from '~/routes/contact';
import Card from '~/components/card/card';
import {Yolan} from '~/components/yolan/yolan';

export default component$(() => {

  const brand = useSignal("");
  const items = useStore(['Mangoes', 'Oranges', 'Pineapples']);
  return (
    <article>
      <h2>About</h2>
      <Yolan />
      <h1>List of items</h1>
      {items.map((item, index) =>(
        <ol key={index}>
          <li>{item}</li>
        </ol>
      ))}
      <h1>{brand}</h1>
      <h5>Enter phone type</h5>
      <input oninput$={(e) => brand.value = (e.target as HTMLInputElement).value} />

      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <p>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
      will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </p>
      <Child />


      <Card>
        <p q:slot='title'>Hello there</p>
        <img q:slot='image' src={'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4'}/>
        <p q:slot='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur deleniti dicta, earum ex illo impedit ipsam libero maiores qui repellat, similique, sit unde voluptas voluptates! Porro rerum ullam veritatis!</p>
      </Card>
    </article>
  );
});