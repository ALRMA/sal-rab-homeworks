function calcShipping(sum, min, shipping,) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    let shippingSum;

    if(productsSum == 0 || productsSum >= freeShippingMinSum) {
        shippingSum = 0
    }else if (productsSum > 0 && productsSum < freeShippingMinSum) {
        shippingSum = shippingPrice
    }

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountPrice;
    
    if (productsSum >= discountMinSum) {
        discountPrice = productsSum * (discountPart / 100)
    }else {
        discountPrice = 0
    }

    return discountPrice;

}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum = productsSum;
        
        totalSum = totalSum - discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
       
        totalSum = totalSum + shippingSum;

    let freeShipping;

        shippingSum == 0 ? freeShipping = true : freeShipping = false;

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
