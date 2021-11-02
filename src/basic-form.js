export default function UsernameForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.value;
    alert(`You entered: ${username}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" placeholder="Enter Username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
