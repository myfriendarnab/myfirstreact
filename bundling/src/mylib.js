//inline export
export function add(a,b) {
    console.log(a+b) ;
}

function sub(a,b) {
    console.log(a-b);
}

function mul(a,b) {
    console.log(a*b);
}

function div(a,b) {
    console.log(a/b);
}

//named export
export {sub, mul};

//default export  - only one method is allowed.
export default div;