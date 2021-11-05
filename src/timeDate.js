export default function Tick() {
  const time = new Date().toTimeString();
  const date = new Date().toDateString();

  return (
    <div className="container">
      <input value={time} className="time" />
      <input value={date} className="date" />
      <input value={time} className="time" />
      <input value={date} className="date" />
    </div>
  );
}
