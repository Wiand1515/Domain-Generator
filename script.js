let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com','.es','.us','.org','.net','.io']

let combination = [pronoun,adj,noun];

for(let i = 0; i < pronoun.length; i++)
  for (let j = 0; j < adj.length; j++)
    for (let z = 0; z < noun.length; z++)
      for (let y = 0; y < domain.length; y++)
      combination.push(pronoun[i] + adj[j] + noun[z]+ domain[y]);


console.log(pronoun.length);

