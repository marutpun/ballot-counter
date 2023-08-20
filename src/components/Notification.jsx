export default function Notification(props) {
  return (
    <div class="p-notification--negative">
      <div class="p-notification__content">
        <h5 class="p-notification__title">Error</h5>
        <p class="p-notification__message">{props.message}</p>
      </div>
    </div>
  );
}
