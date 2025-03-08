
const ol = document.getElementById('ol_li_container');

// -------------------------------get input field value by btn click
const addcart2 = () =>{

    const pruduct_input_field = document.getElementById('product');
    const pruduct_quantity_input_field = document.getElementById('product-quantity');

 const product = pruduct_input_field.value;
 const quantity = pruduct_quantity_input_field.value;

console.log(product , quantity);

displaytoUi(product , quantity); // input value push pass to (displaytoUi) function
}


// ---------------------------display product to ui
const displaytoUi = (productName , product_quantity) => {

    const li = document.createElement('li');
    li.innerText = `${productName} : ${product_quantity}`;

    ol.appendChild(li);
}


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
const returned_pawa_cart2_obj = getCart2_From_LocalStorage()
console.log(returned_pawa_cart2_obj)