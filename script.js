const cashier = {
    name: 'Dalida',
    workExperience: 3,
    company: 'nfactorial',
    hobby: 'students'
}
let menu = [
    {name: 'espresso', cost: 6},
    {name: 'americano', cost: 2},
    {name: 'capuccino', cost: 3},
    {name: 'latte', cost: 9},
    {name: 'mocha', cost: 9},
]
let desserts = [
    {name: 'pine apple', cost: 6},
    {name: 'ice cream', cost: 1},
    {name: 'cheesecake', cost: 3},
    {name: 'chocolate', cost: 4},
]
console.log('Coffeeshop Dalida\n')
cashier.work = "cashier"
cashier.surname = undefined
console.log('Information about Dalida')
console.log('---------------------------------')
console.log(`\n Cashier's name: ${cashier.name},\n Work experience: ${cashier.workExperience} years,\n She likes: ${cashier.hobby},\n Company: ${cashier.company} \n`)

/*Delete unuseable info*/
const del = ()=>{
delete cashier.hobby
delete cashier.surname
}
del()
function myfunction(){ 
    let array =[];
    array=menu.sort((a,b)=>a.cost-b.cost)
    return array;
}
console.log('Sort coffee by cost')
console.log('---------------------------------')
console.log(myfunction())
console.log('\n')
let num = [];

const result = (name,dessert) =>{ 
console.log('desert:')    
desserts.filter((menu)=>{
    return menu.name.includes(dessert)
}).map((menu)=>{
    num.push(menu.cost)
    menu.name.includes(dessert)?console.log(menu.name):''
})
console.log('coffee: ')
menu.filter((menu)=>{
    return menu.name.includes(name)
}).map((menu)=>{
    num.push(menu.cost)
    menu.name.includes(name)?console.log(menu.name):''
})
console.log("size: 1-300ml, 2-500ml")  

let cost = 0;
for(let i = 0;i<num.length;i++){ 
    cost+=num[i]
}
cost +=chooseSize(1)
let log = cost || console.log('Your selection does not exist')
console.log()
console.log('---------------------------------')
return `You need to pay $${cost}`
}

const chooseSize = (num)=>{
    switch(num){
    case 1: return 2
    case 2: return 2.5
    }  
}


console.log('Make order')
console.log('---------------------------------')
console.log(result('americano','ice cream'))
console.log('\n')







