
function discountWidget(price){
    let newPrice=price;
    if(price>=20 && price<100){
        newPrice-=price*20/100;
        return newPrice;
    }
    else if(price>=100 && price<=499.99){
        newPrice-=price*30/100;
        return newPrice;
    }
    else if(price>=500){
        newPrice-=price*40/100;
        return newPrice;
    }
}

export default discountWidget;