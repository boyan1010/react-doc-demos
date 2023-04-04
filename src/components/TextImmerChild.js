export default function ({ onChange, x, y }) {
  console.log("child  render", x, y);
  return (
    <div onClick={onChange}>
      position: [{x},{y}]
    </div>
  );
}
