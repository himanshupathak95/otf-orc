import { airbnb, apple, disney, facebook, quora, samsung, sass, spark } from "../assets";

const LogoCarousel = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        x-ref="logos"
        class="flex items-center justify-center md:justify-start [&_li]:mx-15 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <img src={facebook} alt="Facebook" />
        </li>
        <li>
          <img src={disney} alt="Disney" />
        </li>
        <li>
          <img src={airbnb} alt="Airbnb" />
        </li>
        <li>
          <img src={apple} alt="Apple" />
        </li>
        <li>
          <img src={spark} alt="Spark" />
        </li>
        <li>
          <img src={samsung} alt="Samsung" />
        </li>
        <li>
          <img src={quora} alt="Quora" />
        </li>
        <li>
          <img src={sass} alt="Sass" />
        </li>
        <li>
          <img src={quora} alt="Quora" />
        </li>
        <li>
          <img src={sass} alt="Sass" />
        </li>
      </ul>
    </div>
  );
};

export default LogoCarousel;
