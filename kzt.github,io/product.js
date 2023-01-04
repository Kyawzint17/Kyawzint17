//define data
var products = [
    {
        name: "Samsung GS",
        quantity: 1,
        ppu: 25000,
    },
    {
        name: "Apple Xbox",
        quantity: 2,
        ppu: 8000
    },
    {
        name: "iPhone 10 Pro Max Ultra Rare",
        quantity: 1,
        ppu: 50000
    },
    {
        name:"ASUS Gaming Mouse",
        quantity: 1,
        ppu: 6000
    }
]

function loadData() {

    let productList = document.getElementById("productList")
    let gross = 0

    for (let p in products) {
         let row = document.createElement("tr")
         let productName = document.createElement("td")
         productName.innerHTML = products[p].name

         let quantity = document.createElement("td")
         quantity.innerHTML = products[p].quantity
         quantity.classList.add("text-center")

         let ppu = document.createElement("td")
         ppu.innerHTML = products[p].ppu
         ppu.classList.add("text-right")

         let total = document.createElement("td")
         total.innerHTML = products[p].ppu * products[p].quantity
         total.classList.add("text-right")
         gross += products[p].ppu * products[p].quantity
         
         row.appendChild(productName)
         row.appendChild(quantity)
         row.appendChild(ppu)
         row.appendChild(total)
         productList.appendChild(row)
    }

   let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross

    let vat = gross * 0.07
    let net = gross + vat
    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)
}