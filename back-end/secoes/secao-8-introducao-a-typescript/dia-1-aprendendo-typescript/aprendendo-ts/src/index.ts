import * as Functions from './myFunctions';
import users from './data';

console.log(`Lista de pessoas usuárias do GitHub ${Functions.getUsersNames(users)}.`);

console.log(`Pessoas com pelo menos 20 repositórios: ${Functions.getUsersByRepository(users, 20)}`);

console.log(`Essa é a conta mais ativa da lista ? ${Functions.IsMostActiveUser('João Paulo Aramuni', users)}.`);


