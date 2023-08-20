import { A } from '@solidjs/router';

export default function Navbar() {
  return (
    <nav class="p-side-navigation">
      <nav class="p-side-navigation__drawer">
        <h2 class="u-off-screen">Menu</h2>
        <ul class="p-side-navigation__list">
          <li class="p-side-navigation__item--title">
            <A class="p-side-navigation__link" href="/" activeClass="is-active" end={true}>
              Home
            </A>
          </li>
          <li class="p-side-navigation__item--title">
            <A class="p-side-navigation__link" href="/new" activeClass="is-active" end={true}>
              Add new candidate
            </A>
          </li>
          <li class="p-side-navigation__item--title">
            <A class="p-side-navigation__link" href="/count" activeClass="is-active" end={true}>
              Count ballots
            </A>
          </li>
          <li class="p-side-navigation__item--title">
            <A class="p-side-navigation__link" href="/result" activeClass="is-active" end={true}>
              Result
            </A>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
