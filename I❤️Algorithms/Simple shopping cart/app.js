// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  { description: "Goma de borrar", price: 0.25, tax: LOWER_TYPE, stock: 2, units: 0},
  { description: "Lápiz H2", price: 0.4, tax: LOWER_TYPE, stock: 5, units: 0},
  { description: "Cinta rotular", price: 9.3, tax: REGULAR_TYPE, stock: 2, units: 0},
  { description: "Papelera plástico", price: 2.75, tax: REGULAR_TYPE, stock: 5, units: 0},
  { description: "Escuadra", price: 8.4, tax: REGULAR_TYPE, stock: 3, units: 0},
  { description: "Pizarra blanca", price: 5.95, tax: REGULAR_TYPE, stock: 2, units: 0},
  { description: "Afilador", price: 1.2, tax: LOWER_TYPE, stock: 10, units: 0},
  { description: "Libro ABC", price: 19, tax: EXEMPT_TYPE, stock: 2, units: 0},
 
];

//Function to calculate the total units to evaluate if button is enabled or disabled
buttonMode();

function buttonMode () {
    var unitsTotal = 0;
    for (i = 0; i < products.length; i++){
        unitsTotal += parseInt(products[i].units);
    }
    unitsTotal === 0 ? buttonDisabled () : buttonEnabled ();
}

//number of elements = 0 >> button disabled mode
//number of elements != 0 >> button enabled mode

function buttonDisabled () {
    document.getElementById("mybutton").classList.add("error");
    document.getElementById("mybutton").disabled = true; // Disabled
    document.getElementById("mybutton").innerHTML = "¡Carrito vacío! Por favor, añada cantidades";
    document.getElementById("final-subtotal").innerText = "-";
    document.getElementById("final-VAT").innerText = "-";
    document.getElementById("final-price").innerText = "-";
};

function buttonEnabled () {
    document.getElementById("mybutton").classList.remove("error");
    document.getElementById("mybutton").disabled = false; // Enabled
    document.getElementById("mybutton").innerHTML = "Calcular";
};

//Loop to go trough all items in the shopping cart, no matter how many
for (i = 0; i < products.length; i++){
        createProductDiv(i);
        listProduct (i);
}

//Function to create a different div container for each item on the shopping cart
function createProductDiv (i){
    var productI = i + 1;
    var div = document.createElement("div");
    div.setAttribute("class", "product-container");
    div.setAttribute("id", ("product" + productI));
    var main = document.getElementById("main");
    main.appendChild(div); 
}

//Function that will create for each item the HTML tags (inside product div) 
function listProduct (i) {
    var index = i + 1;
    var main = document.getElementById("product" + index);
    createIndex (index, main);   
    createDescription (i, main);
    createInput (i, main);
}

//Function to create HTML span with the index of the item within the cart
function createIndex (index, main) {
    var spanIndex = document.createElement("span");
    spanIndex.setAttribute("class", "product-index");
    spanIndex.innerText = index + ". ";
    main.appendChild(spanIndex);
}

//Function to create a span with the description and price of items
function createDescription (i, main) {
    var span = document.createElement("span");
    span.setAttribute("class", "product-description");
    span.innerText = products[i].description + " - " + products[i].price + " € / ud. ";
    main.appendChild(span); 
}

//Function to create an input with the units (units shown on the array)
function createInput (i, main) {
    var input = document.createElement("input");
    input.setAttribute("class", "product-unit");
    input.setAttribute("type", "number");
    input.setAttribute("max", products[i].stock);
    input.setAttribute("min", 0)
    input.setAttribute("value", products[i].units);
    input.addEventListener("change", event => changeValueInput (event.target.value, i));
    main.appendChild(input);
}

/*
>> Function that takes the event of the event-listener 
on the products input and use to asign to units the new value
>> Everytime we change any input we call the function buttonMode ()
to re-evaluate if total amount of units = 0 >> button disabled / enabled */
function changeValueInput(value, i) {
        products[i].units = value;        
        buttonMode ();
}

//Add event-listener on the button to call function to calculate the totals
document.getElementById("mybutton").addEventListener("click", () => showTotals (vatTotal(), subTotal()));

//function to calculate subtotal
function subTotal () {
    var total = 0;
    for (product of products){
        total += product.price * product.units;
    }
    return total;
}

//function to calculate vatTotal
function vatTotal () {
    var vat = 0;
    for (product of products){
        vat += product.price * product.units * product.tax / 100;
    }
    return vat;
}

//Function to show the totals
function showTotals (vatTotal, subTotal) {
    var total = vatTotal + subTotal;
    document.getElementById("final-subtotal").innerText = subTotal.toFixed(2) + " €";
    document.getElementById("final-VAT").innerText = vatTotal.toFixed(2) + " €";
    document.getElementById("final-price").innerText = total.toFixed(2) + " €";
}


















