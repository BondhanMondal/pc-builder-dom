/* document.getElementById("sixteenGB").addEventListener('click', function(){
    const memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 200;

    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    // const totalPrice = document.getElementById("total-price");
    // totalPrice.innerText = parseInt(totalPrice.innerText) + 200;

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;

    updatePrice('memory-cost', 300);

}); */


onClick("sixteenGB", "memory-cost", 300);
onClick("eightGB", "memory-cost", 0);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 200);
onClick("ssd3", "storage-cost", 350);
onClick("free-delivery", "delivery-cost", 0);
onClick("paid-delivery", "delivery-cost", 20);


function onClick(clickId, updateId, price){

    document.getElementById(clickId).addEventListener('click', function () {

        updatePrice(updateId, price);
        document.getElementById(clickId).style.backgroundColor = "lightblue"
    });
}





function updatePrice(itemId, price){
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
}

const fakeCode = "phero";
document.getElementById("apply-btn").addEventListener("click", function(){

    const code = document.getElementById("promo-input").value;
    if(code === fakeCode){
        const total = document.getElementById("total-price");
        const totalPrice = parseFloat(total.innerText);

        const discount = totalPrice * .2;
        const newPrice = totalPrice - discount;
        total.innerText = newPrice;
    }
    else{
        console.log('false');
    }
});