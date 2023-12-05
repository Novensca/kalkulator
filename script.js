const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

const specialChars = ["%", "*", "/", "-", "+", "="];

let output = "";

// Tentuin fungsi buat ngitung berdasarkan tombol yang diklik.

const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    // Kalo output ada '%', ganti dengan '/100' sebelum dihitung.

    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // Kalo tombol DEL diklik, hapus karakter terakhir dari output.

    output = output.toString().slice(0, -1);
  } else {
    // Kalo output kosong dan tombol adalah specialChars, maka balik

    if (output === "" && specialChars.includes(btnValue)) return;

    output += btnValue;
  }

  display.value = output;
};

// Tambahin event listener ke tombol, panggil calculate() pas diklik.

buttons.forEach((button) => {
  // Listener klik tombol manggil calculate() dengan nilai dataset sebagai argumen.

  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
