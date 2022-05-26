export default function handleClick(e) {
  const value = e.target.value;
  if (value.match(/^\d*\.?\d*$/)) {
    return value;
  }
}
