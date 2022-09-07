const mobiles = {
  Samsung: {
    S1: {
      RAM: 2,
      ROM: 16,
      Price: 20000,
    },
    S2: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
    S7: {
      RAM: 6,
      ROM: 128,
      Price: 2100000,
    },
    S8: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
  },
  Iphone: {
    1: {
      RAM: 2,
      ROM: 16,
      Price: 20000,
    },
    2: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
    3: {
      RAM: 6,
      ROM: 128,
      Price: 2100000,
    },
    14: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
  },
  Vivo: {
    S4: {
      RAM: 2,
      ROM: 16,
      Price: 20000,
    },
    S2: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
    S7: {
      RAM: 6,
      ROM: 128,
      Price: 2100000,
    },
    S8: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
  },
  Qmobile: {
    GrandPrimePro: {
      RAM: 2,
      ROM: 16,
      Price: 8000,
    },
    S2: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
    S7: {
      RAM: 6,
      ROM: 128,
      Price: 2100000,
    },
    S8: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
  },
};

let mobile = Object.keys(mobiles).map(function (i, j) {
  document.getElementById("mobile").innerHTML += `<option>${i}</option>`;
});

let selectedValue;

function getMobileModels(selected) {
  document.getElementById("mobilemodel").innerHTML = "";

  let models = Object.keys(mobiles[selected.value]);
  selectedValue = selected.value;

  models.map(function (i, j) {
    document.getElementById("mobilemodel").innerHTML += `<option>${i}</option>`;
  });

  document.getElementById("mobilemodel").disabled = false;
}

function display(selected) {
  console.log(selected.value);

  console.log(mobiles[selectedValue][selected.value]);

  document.getElementById("display").innerHTML =
    "RAM: " + mobiles[selectedValue][selected.value].RAM;
  document.getElementById("display2").innerHTML =
    "ROM: " + mobiles[selectedValue][selected.value].ROM;
  document.getElementById("display3").innerHTML =
    "PRICE: " + mobiles[selectedValue][selected.value].Price;
}
