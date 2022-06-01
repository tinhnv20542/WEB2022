const productList = [
{
    id: 1,
    name: "Product 1",
    img: "https://picsum.photos/300/300",
    time: 10,
    type: "snack"
},
{
    id: 2,
    name: "Product 1",
    img: "https://picsum.photos/300/300",
    time: 20,
    type: "fish"
},
{
    id: 3,
    name: "Product 1",
    img: "https://picsum.photos/300/300",
    time: 30,
    type: "potato"
},
]
function showProduct(products){
    if(!Array.isArray(products) || products.length == 0) return false;
    let result = "";  
    for (let i = 0; i< products.length; i++){
        const product = products[i];
        result += 
    <div>
        <div class="product-img">
            <a href="">
                <img src="${product.img}" alt="" />
            </a>
        </div>
        <div class="product-content">
            <h3><a href="">${product.name}</a></h3>
            <div class="flex">
                <span>${product.time} Times</span>
                <span>${product.type}</span>
            </div>
        </div>
    </div>
    }
    return result;
}
document.getElementById("products").innerHTML = showProduct(productList);
