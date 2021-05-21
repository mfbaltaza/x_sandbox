export default function UsernameForm() {
  function handleSubmit(event) {
    if (event.target.misteryInput.value === "") {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const inputData = event.target.misteryInput.value;
    alert(`${inputData}`);
    event.target.misteryInput.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" id="misteryInput" />
      </div>
    </form>
  );
}
