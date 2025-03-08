
const ol = document.getElementById('ol_li_container');

// -------------------------------get input field value by btn click
const addcart2 = () =>{

    const pruduct_input_field = document.getElementById('product');
    const pruduct_quantity_input_field = document.getElementById('product-quantity');

 const product = pruduct_input_field.value;
 const quantity = pruduct_quantity_input_field.value;

 pruduct_input_field.value = '';
 pruduct_quantity_input_field.value = '';

console.log(product , quantity);

displaytoUi(product , quantity); // input value push pass to (displaytoUi) function

saveUserInputValue_as_aCart_to_localStorage( product , quantity)
}


// ---------------------------display product to ui
const displaytoUi = (productName , product_quantity) => {

    const li = document.createElement('li');
    li.innerText = `${productName} : ${product_quantity}`;

    ol.appendChild(li);
}
// -------------------------------------------------


// ------------------------------------------------- save/set UserInputValue as a Cart to localStorage

const saveUserInputValue_as_aCart_to_localStorage = (product , quantity) => {
const returned_pawa_cart2_obj = getCart2_From_LocalStorage()// return pawa mt cart/obj ta

returned_pawa_cart2_obj[product] = quantity; // return pawa mt cart/obj e user er dewa productname & quantity ta set (product) name ekta property (bracket noteeiton) diye lika tar value hisebe quantity ta set kore dewa hoise, & tarpor set korar pore sei objta 

const userInputValue_ASaCart_mt_obj_e_set_korar_pore_seta_stringify_e_convert = JSON.stringify(returned_pawa_cart2_obj);

const setCartToLocalStorage = localStorage.setItem('cart' ,userInputValue_ASaCart_mt_obj_e_set_korar_pore_seta_stringify_e_convert );



}

// ------------------------------------------------- get cart from localStorage else set mt cart/objct to localStorage
const getCart2_From_LocalStorage =() => {
    let mt_obj_or_cart = {};

    const cart_from_localstorage = localStorage.getItem('cart');
    if( cart_from_localstorage) {

        
        const localStorage_e_pawa_cart_After_converted_JSON_parse = JSON.parse(cart_from_localstorage);

        mt_obj_or_cart = localStorage_e_pawa_cart_After_converted_JSON_parse;

        console.log('localStorage e cart paise,true hoise tai if er conditon  dukce. tai pawa cart ta (json.parse) e convert kore then (mt_obj_or_cart) er notun vlaue hisebe reassign koree dibe, & seta return kora hbe') ;
        return mt_obj_or_cart;

    } 
    
    else {
        console.log('localStorage e cart paini, tai if er conditon e dukeni. tai ei mt object tai khali return hbe.')
        return mt_obj_or_cart;
    }


}


// -----------------------------------------------------------

const show_saved_Cart_to_ui_fromlocalstorage =  () => {
    const saved_carts = getCart2_From_LocalStorage();

    console.log(saved_carts)//full obj/cart e ja data ase sob pete caile
for(const cart1 in saved_carts) {
    console.log(cart1);// shudo key pete caile

    const quantity = saved_carts[cart1];

    console.log(cart1 , quantity )
    displaytoUi( cart1 , quantity);
}
}

// show_saved_Cart_to_ui_fromlocalstorage()
// -----------------------------------------------------------



show_saved_Cart_to_ui_fromlocalstorage()
// const returned_pawa_cart2_obj = getCart2_From_LocalStorage()
// console.log(returned_pawa_cart2_obj)