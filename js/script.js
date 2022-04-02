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


onclick("sixteenGB", "memory-cost", 300);
onclick("eightGB", "memory-cost", 0);
onclick("ssd1", "storage-cost", 0);
onclick("ssd2", "memory-cost", 200);
// onclick("sixteenGB", "memory-cost", 300);
// onclick("sixteenGB", "memory-cost", 300);
// onclick("sixteenGB", "memory-cost", 300);

function onClick(clickId, updateId, price){

    document.getElementById(clickId).addEventListener('click', function () {

        updatePrice(updateId, price);
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