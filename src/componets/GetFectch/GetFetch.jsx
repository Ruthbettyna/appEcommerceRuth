

const products = [
    {id: 1,title: "Air Force",price: 119,colors: "white",img:'../../../img/air.png'},
    {id: 2,title: "Air Jordan",price: 149,colors: "green",img:'../../../img/jordan.png'},
    {id: 3,title: "Blazer",price: 109,colors: "blue",img:'../../../img/blazer2.png'},
    {id: 4,title: "Crater",price: 129,colors: "black",img:'../../../img/crater2.png'},
    {id: 5,title: "Hippie",price: 99,colors: "gray",img:'../../../img/hippie.png'},
    ];


export const GetFetch = () => {
    
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(products)
        }, 3000)
    });
};


//Detail
let producto = {id: 1,title: "Air Force",price: 119,colors: "white",img:'../../../img/air.png'}


export const GetFetchOne = () => {

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(producto)
        }, 2000)
    });
};
