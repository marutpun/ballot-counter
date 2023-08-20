export default function SubLayout(props) {
  return (
    <>
      <h1 class="heading">{props.heading}</h1>
      <hr />
      {props.children}
    </>
  );
}
