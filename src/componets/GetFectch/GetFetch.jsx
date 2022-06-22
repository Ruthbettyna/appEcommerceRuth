

const products = [
    {id: '1',categoria:'sport' ,title: 'Air Force',price: 119,colors: 'black',img:'../../../img/air.png'},
    {id: '2',categoria:'sport' ,title: 'Air Jordan',price: 149,colors: 'pink',img:'../../../img/jordan.png'},
    {id: '3',categoria:'sport' ,title: 'Blazer',price: 109,colors: 'green',img:'../../../img/blazer2.png'},
    {id: '4',categoria:'run' ,title: 'Crater',price: 129,colors: 'white',img:'../../../img/crater2.png'},
    {id: '5',categoria:'run' ,title: 'Hippie',price: 99,colors: 'gray',img:'../../../img/hippie.png'},
    ];


export const GetFetch = (id) => {
    
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (id){
            resolve(products.find(prod => prod.id === id))
            } else {
                resolve(products)
            }
        }, 3000)
    });
};


//Detail
/*let producto = {id: '1',title: 'Air Force',price: 119,colors: 'black',img:'../../../img/air.png'}


export const GetFetchOne = () => {

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(producto)
        }, 2000)
    });
};  */
