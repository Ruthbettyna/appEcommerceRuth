

const products = [
    {id: 1,title: "Air Force",price: 119,colors: "white"},
    {id: 2,title: "Air Jordan",price: 149,colors: "green"},
    {id: 3,title: "Blazer",price: 109,colors: "blue"},
    {id: 4,title: "Crater",price: 129,colors: "black"},
    {id: 5,title: "Hippie",price: 99,colors: "gray"},
    ];

export const item = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products)
            }, 3000)
        })
    }


