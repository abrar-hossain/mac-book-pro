//memory function
//this function will check the customize memory cost and then call totalPrice function;
function extraMemory(memorySpace) {
    const extraMemory = document.getElementById('extra-memory');
    if (memorySpace == 8) {
        extraMemory.innerText = 0;
    }
    else {
        extraMemory.innerText = 180;
    }
    totalPrice();//calling totalPrice function
};



//memory function call by click event
document.getElementById('8Memory-required').addEventListener('click', function () {

    extraMemory(8);
});
document.getElementById('16Memory-required').addEventListener('click', function () {

    extraMemory(16);
});



//storage function
//this function will check the customize storage cost and then call totalPrice function;
function extraStorage(storage) {
    const extraStorage = document.getElementById('extra-storage');
    if (storage == 256) {
        extraStorage.innerText = 0;
    }
    else if (storage == 512) {
        extraStorage.innerText = 100;
    }
    else {
        extraStorage.innerText = 180;
    }
    totalPrice();//calling totalPrice function
};



//storage function call by click event
document.getElementById('256Storage-required').addEventListener('click', function () {
    extraStorage(256);

});
document.getElementById('512Storage-required').addEventListener('click', function () {

    extraStorage(512);
});
document.getElementById('1tbStorage-required').addEventListener('click', function () {

    extraStorage(1);
});



//delivery
//this function will check free delivery or extra charge cost and then call totalPrice function;
function deliveryCharge(charge) {
    const extraCharge = document.getElementById('extra-charge');
    if (charge == 1) {
        extraCharge.innerText = 0;
    }
    else {
        extraCharge.innerText = 20;
    }
    totalPrice();//calling total price function
};


//delivery function call by click event
document.getElementById('freeDelivery-required').addEventListener('click', function () {

    deliveryCharge(1);

});
document.getElementById('paidDelivery-required').addEventListener('click', function () {

    deliveryCharge(2);
});


//Calculate the total Price
function totalPrice() {

    //get the extra cost by Id
    const memoryCost = document.getElementById('extra-memory');
    const storageCost = document.getElementById('extra-storage');
    const chargeCost = document.getElementById('extra-charge');

    //convert inner  text to integer number
    const memory = parseInt(memoryCost.innerText);
    const storage = parseInt(storageCost.innerText);
    const charge = parseInt(chargeCost.innerText);

    //here calculate the total value
    const total = document.getElementById('total-price').innerText = 1299 + memory + storage + charge;

    //bonus part
    document.getElementById('bonus-total').innerText = total;

};


//Promo Code;


document.getElementById('button-field').addEventListener('click', function () {


    const promoCode = document.getElementById('input-field').value;
    const bonusTotal = document.getElementById('total-price').innerText;
    //check the input field;
    if (promoCode == 'stevekaku') {

        //update Bonus Total by using promo code;
        document.getElementById('bonus-total').innerText = bonusTotal - (bonusTotal * .2);

    }
    document.getElementById('input-field').value = '';
});





