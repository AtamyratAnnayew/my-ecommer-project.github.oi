const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");



var products = [{
        id: 1,
        title: "Air force",
        price: 119,
        colors: [{
                code: "black",
                img: "C:/Users/user/Desktop/ECOMMER/img/AIR FORSE.123.png",
            },
            {
                code: "darkblue",
                img: "C:/Users/user/Desktop/ECOMMER/img/images (27)@.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 149,
        colors: [{
                code: "lightgray",
                img: "C:/Users/user/Desktop/ECOMMER/img/images (20)@.png",
            },
            {
                code: "green",
                img: "C:/Users/user/Desktop/ECOMMER/img/images (21)@.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 159,
        colors: [{
                code: "lightgray",
                img: "C:/Users/user/Desktop/ECOMMER/img/images (13)@.png",
            },
            {
                code: "green",
                img: "C:/Users/user/Desktop/ECOMMER/img/images (11)@.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 119,
        colors: [{
                code: "black",
                img: "C:/Users/user/Desktop/ECOMMER/img/images (15)@.png",
            },
            {
                code: "lightgray",
                img: "C:/Users/user/Desktop/ECOMMER/img/images (14)@.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 169,
        colors: [{
                code: "gray",
                img: "C:/Users/user/Desktop/ECOMMER/img/images (16)@.png",
            },
            {
                code: "black",
                img: "C:/Users/user/Desktop/ECOMMER/img/images (17)@.png",
            },
        ],
    },
];


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPice.textContent = "$" +choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color, index) =>{
    color.addEventListener("click", ()=> {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});


currentProductSizes.forEach ((size, index) =>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";    
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector (".payment");
const close = document.querySelector (".close");

productButton.addEventListener ("click", () =>{
    payment.style.display ="flex";
})

close.addEventListener ("click", () =>{
    payment.style.display ="none";
})




// 1c1f50ce36a651968d4f