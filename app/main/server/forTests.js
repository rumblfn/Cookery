let user = {name: 'it', surname: 'mania'};
let frozenUzer = Object.freeze(user);
frozenUzer.name = 'freeeezed'
console.log(frozenUzer)
// { name: 'it', surname: 'mania' }

