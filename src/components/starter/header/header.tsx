import {component$} from '@builder.io/qwik';
import {Link} from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header>
      <nav class="bg-amber-500 text-white h-12">
        <ul class="font-extrabold flex flex-row justify-center px-8 space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li> <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/cars">Cars</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
