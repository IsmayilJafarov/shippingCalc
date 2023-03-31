const firstPriceNode = document.querySelector('.first-price');
const finalPriceNode = document.querySelector('.final-price');
const selectShopNode = document.querySelector('.shop');
const resultButtonEbay = document.querySelector('.result-eBay');
const resultButtonCompUniverse = document.querySelector('.result-CompUniverse');
const resultButtonConvertAzn = document.querySelector('.result-AZN');


function PriceAfterShippingEbay() {
    if (firstPriceNode.value > 300) {
        let Tax = (parseInt(firstPriceNode.value) - 292) * 1.36 + 300;
        finalPriceNode.innerHTML = Tax;
        console.log(Tax)
    } else {
        let Tax2 = (parseInt(firstPriceNode.value) + 8)
        finalPriceNode.innerHTML = Tax2;
    }
}

function PriceAfterShippingCompUniverse() {
    if (firstPriceNode.value > 300) {
        let Tax = (parseInt(firstPriceNode.value) - 250) * 1.36 + 300;
        finalPriceNode.innerHTML = Tax;
        console.log(Tax)
    } else {
        let Tax2 = (parseInt(firstPriceNode.value) + 50)
        finalPriceNode.innerHTML = Tax2;
    }
}

function ConvertToAzn()  {
    let ConvertAzn = parseInt(firstPriceNode.value) * 1.7;
    finalPriceNode.innerHTML = ConvertAzn;

}

//==========================================================================

resultButtonEbay.addEventListener('click', () => {
    return PriceAfterShippingEbay();
});

resultButtonCompUniverse.addEventListener('click', () => {
    return PriceAfterShippingCompUniverse();
});

resultButtonConvertAzn.addEventListener('click', () => {
    return ConvertToAzn();
});

// console.log(finalPriceNode.innerHTML)
