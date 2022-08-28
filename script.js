/////////////////
// our buttons //
/////////////////

const n1_btn = document.getElementById("one");
const n2_btn = document.getElementById("two");
const n3_btn = document.getElementById("three");
const n4_btn = document.getElementById("four");
const n5_btn = document.getElementById("five");
const n6_btn = document.getElementById("six");
const n7_btn = document.getElementById("seven");
const n8_btn = document.getElementById("eight");
const n9_btn = document.getElementById("nine");
const n0_btn = document.getElementById("zero");
const add_btn = document.getElementById("add");
const sub_btn = document.getElementById("sub");
const mult_btn = document.getElementById("mult");
const div_btn = document.getElementById("div");
const enter_btn = document.getElementById("enter");
const clear = document.getElementById("clear");

/////////////////////////////
// values from each button //
/////////////////////////////

const n1 = n1_btn.value;
const n2 = n2_btn.value;
const n3 = n3_btn.value;
const n4 = n4_btn.value;
const n5 = n5_btn.value;
const n6 = n6_btn.value;
const n7 = n7_btn.value;
const n8 = n8_btn.value;
const n9 = n9_btn.value;
const n0 = n0_btn.value;
const add = add_btn.value;
const sub = sub_btn.value;
const mult = mult_btn.value;
const div = div_btn.value;

const buttons = [n1_btn, n2_btn, n3_btn, n4_btn, n5_btn, n6_btn, n7_btn, n8_btn, n9_btn, n0_btn, add_btn, sub_btn, mult_btn, div_btn]


////////////////////////////////
// main functions & variables //
////////////////////////////////

var display = document.getElementById("calc_display");

// using function expressions (expressions stored in functions)

function operation(display_val) {
	if (display_val.includes("+")) {
		let find_index = display_val.indexOf("+");
		let a = Number(display_val.slice(0, find_index));
		let b = Number(display_val.slice(find_index+1, display_val.length));
		return (a + b)
	}
	else if (display_val.includes("-")) {
		let find_index = display_val.indexOf("-");
		let a = Number(display_val.slice(0, find_index));
		let b = Number(display_val.slice(find_index+1, display_val.length));
		return (a - b)
	}
	else if (display_val.includes("x")) {
		let find_index = display_val.indexOf("x");
		let a = Number(display_val.slice(0, find_index));
		let b = Number(display_val.slice(find_index+1, display_val.length));
		return (a * b)
	}
	else if (display_val.includes("/")) {
		let find_index = display_val.indexOf("/");
		let a = Number(display_val.slice(0, find_index));
		let b = Number(display_val.slice(find_index+1, display_val.length));
		return (a / b)
	}
}

// when we press each of the buttons

function onPress(item) {
	item.addEventListener("click", function btn_to_data() {
		display.placeholder += item.value;
	});
}

function calculate() {
	let data_string = display.placeholder;
	let result = operation(data_string);
	display.placeholder = result;
}

buttons.forEach(onPress);
enter_btn.addEventListener("click", calculate);
clear.addEventListener("click", function clear() {
	display.placeholder = "";
})