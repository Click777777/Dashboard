// adding item to the form
let mainItem = ["Phone", "Laptop"];
let subItem = [
  { name: "Iphone", no: 1 },
  { name: "Samsaung", no: 1 },
  { name: "Rog", no: 1 },
  { name: "RedMagic 5G", no: 1 },
  { name: "MacBook", no: 2 },
  { name: "Asus", no: 2 },
  { name: "Msi", no: 2 },
  { name: "Lenovo", no: 2 },
];
let mappingMain = mainItem.map((e, index) => {
  index += 1;
  main.innerHTML += `<option value="${index}">${e}</option>`;
});

let mappingSub = subItem.map((e, index) => {
  index += 1;
  sub.innerHTML += `<option value="${index}" itemID="${e.no}">${e.name}</option>`;
});
let test;
main.addEventListener("change", function () {
  sub.innerHTML = "";
  let mainStored = Number(this.value);
  console.log(mainStored);
  subItem.map((e, index) => {
    index += 1;
    if (mainStored === e.no) {
      sub.innerHTML += `<option value="${index}" itemID="${e.no}">${e.name}</option>`;
    }
  });
});
