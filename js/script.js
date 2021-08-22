//function for update price of all button
function calculation(output_field, price){
    const outputField = document.getElementById(output_field + '-cost');
    const newPrice =price;
    // updating the price
    outputField.innerText = newPrice;
 
 }
// function for calculating the total cost
function totalCost(){
    // taking input of all prices
    const memory =parseInt(document.getElementById("memory-cost").innerText);
    const storage =parseInt(document.getElementById("storage-cost").innerText);
    const delivery =parseInt(document.getElementById("delivery-cost").innerText);
    // calculating total amount
    const totalCost = memory + storage + delivery +1299;
    console.log(totalCost);
    const totalField = document.getElementById("total");
    // insert total amount
    totalField.innerText = totalCost;

    document.getElementById("grand-total").innerText = totalCost;
}
// function for adding promo code discount
function promoCode(){
    
    const promoInput = document.getElementById("promoInput");
    const grandTotal = document.getElementById("grand-total");
    // add condition for promo code
    if(promoInput.value.toLowerCase() =='stevekaku'){
        const previousTotal = parseInt(document.getElementById("total").innerText);
        const discount =parseFloat(previousTotal*0.2);
        const grandTotalAmount =previousTotal-discount;
        grandTotal.innerText = grandTotalAmount;
    }
    else{
        alert("Please enter the right promo code");
    }
    // default promo code value
    promoInput.value=''; 
}
// function call
 document.getElementById("memory").addEventListener('click',function()
 {
     calculation('memory',0);
     totalCost();
 
 })
document.getElementById("extra-memory").addEventListener('click',function()
{
    calculation('memory',180);
    totalCost();

})
document.getElementById("storage").addEventListener('click',function()
{
    calculation('storage',0);
    totalCost();

})
document.getElementById("extra-storage").addEventListener('click',function()
{
    calculation('storage',100);
    totalCost();

})
document.getElementById("extra-storage2").addEventListener('click',function()
{
    calculation('storage',180);
    totalCost();

})
document.getElementById("delivery").addEventListener('click',function()
{
    calculation('delivery',0);
    totalCost();

})
document.getElementById("fast-delivery").addEventListener('click',function()
{
    calculation('delivery',20);
    totalCost();

})













