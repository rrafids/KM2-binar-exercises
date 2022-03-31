// Get by getElementById
const container = document.getElementById("container");
const title = document.getElementById("title");
const buttonRed = document.getElementById("button-red");
const buttonWhite = document.getElementById("button-white");
const input = document.getElementById("input");

// Get by querySelector
// const container = document.querySelector("#container");
// const title = document.querySelector("#title");
// const buttonRed = document.querySelector("#button-red");
// const buttonWhite = document.querySelector("#button-white");

input.addEventListener("keypress", (e) => {
  const pressedKey = e.key;

  console.log(`Key yang ditekan: ${pressedKey}`);

  if (pressedKey === "a") {
    console.log("Kamu pasti mas lalu");
  } else {
    console.log("Kamu pasti mas lutfi");
  }
});

buttonRed.addEventListener("click", () => {
  // Ubah bg color container jadi merah
  container.style.backgroundColor = "red";

  // Hide button red
  buttonRed.style.display = "none";

  // Show button white
  buttonWhite.style.display = "block";

  // Ubah text h1
  title.innerText = "Warna Background: Merah";

  // Ubah text color h1
  title.style.color = "white";
});

buttonWhite.addEventListener("click", () => {
  // Ubah bg color container jadi putih
  container.style.backgroundColor = "white";

  // Hide button white
  buttonWhite.style.display = "none";

  // Show button red
  buttonRed.style.display = "block";

  // Ubah text h1
  title.innerText = "Warna Background: Putih";

  // Ubah text color h1
  title.style.color = "red";
});
