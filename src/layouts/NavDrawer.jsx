export default function NavDrawer(props) {
  return (
    <header class="l-navigation">
      <div class="l-navigation__drawer">{props.children}</div>
    </header>
  );
}
