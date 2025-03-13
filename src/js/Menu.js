export function setupCounter(button) {
  let count = 0;
  button.addEventListener("click", () => {
    count++;
    button.textContent = `Clique (${count})`;
  });
}
  