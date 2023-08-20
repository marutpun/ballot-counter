export default function MainContent(props) {
  return (
    <main class="l-main">
      <div class="u-fixed-width">{props.children}</div>
    </main>
  );
}
