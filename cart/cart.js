
/* 

user card e click koruk ar na koruk oi user er jonno localStorage e ekta mt obj{} rakte hobe ar jodi user card e kuno kisu add kore tkn oi mt object e cart er iteem ta set hoye jabe, ar kisu add na korlew mt object ta roye jabe evabei kaj korte hbe.

*/


const display_container = document.getElementById('product_container');
// -----------------------------------------------------------------

// -----------------------------------------------------------------

const addcart = () => {
    const product_input = document.getElementById('product');
    const product_quantity_input = document.getElementById('product-quantity');

    const product = product_input.value;
    const product_quantity = product_quantity_input.value;
    product_input.value = '';
    product_quantity_input.value = '';
    console.log(product, product_quantity)
    // display_container.innerText = '';
    displayToUi(product, product_quantity)

    saveCartToLocalStorage(product, product_quantity)
}


// -----------------------------------------------------------------

const getStoredShoppingCart = () => {
    let mt_cart = {}; //cart thakok ar na tthakok eta declare korte hobe, jodi cart localStorage eee take tkn set

    const storedCART = localStorage.getItem('cart');
    if (storedCART) {

        // ekane conditon ta hocce  localStorage e jodi (storedCART) ei card ta thake tkn (true) hobe tkn if er condtion e dukbe & bairer (mt_cart) tar value hisebeee sei localStorage e thaka cart ta set hoye jabe ,jeheto localStorage e object/cart ta stringify akare tahkbeee so localStorage theke sei obj ta niye use korar somy (json.parse) e convert hoye seta (mt_cart) er value hisebe sei objwect ta set hoye jabe. 


        //  ar jodi (storedCART) ei cart ta localStorage na tahke tkn if er conditon cheeck korle (false) asbee tkn if er code block e dukbena, & bairee jei cart ta ase setai return kore dibe. & taw mt object ta return korbe, jeehto code block e dukte parbena.
        mt_cart = JSON.parse(storedCART);
    }

    return mt_cart;

}
// ----------------------------------------------------------------- save Cart To LocalStorage

const saveCartToLocalStorage = (product, product_quantity) => {
    const returnPawaCart = getStoredShoppingCart()

    returnPawaCart[product] = product_quantity;//returnPawaCart  e product & tar quantity set kora hoise ,ekn seta localStorage e set kortee caile age stringify te convert kortee hobe , then localStorage e setiem korte hbe. nahoi direct object jodi localStorage e set korteee cai thle hbena.

    console.log(returnPawaCart)

    const returnPawaCartAfterConvertedStringify = JSON.stringify(returnPawaCart);
    // console.log(returnPawaCartAfterConvertedStringify)
    localStorage.setItem('cart', returnPawaCartAfterConvertedStringify);// localStorage e sei cart ta ta set kora holo taw age stringify tee converet kore then
}



// -----------------------------------------------------------------

const displayToUi = (product, product_quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${product_quantity}`;
    display_container.appendChild(li);

}
// -----------------------------------------------------------------




const displayProductFromLocalStorage = () => {

    const saveedd_Cartss_onLocalStorage = getStoredShoppingCart();
    console.log(saveedd_Cartss_onLocalStorage)

    for (const product in saveedd_Cartss_onLocalStorage) {
        console.log(product)// cart theke shudo product pete caile

        quantity = saveedd_Cartss_onLocalStorage[product];// jeheto (saveedd_Cartss_onLocalStorage) eta eekta objeect sekan theeke prottekta product/key dile tar value ta dibe, ortat quantity koto seta dibe, ar seta (quantity) variable e set hoye jabe.
        console.log(product, quantity);


        // localStorage er cart theke pawa product & tar quantity ta ui te show korateee caile just (displayToUi()) ei function ta call koreee product & quantity arugument hisebe pass koree dile hbe.jmn:
        displayToUi(product, quantity)

    }
}
displayProductFromLocalStorage()