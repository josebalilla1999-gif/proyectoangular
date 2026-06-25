import { Injectable } from '@angular/core';
import { Pokemon } from '../services/pokemon';
import { Trainer } from '../models/trainer';
import { BattleResult } from '../models/battle';

@Injectable({
  providedIn:'root'
})
export class BattleService {

calculateBattle(
playerTeam:Pokemon[],
enemy:Trainer
):BattleResult {
let score = 50;
const reasons:string[]=[];

playerTeam.forEach(playerPokemon=>{
 enemy.team.forEach(enemyPokemon=>{
 const advantage =
 this.compareTypes(
 playerPokemon,
 enemyPokemon
 );
 score += advantage;
 });
});

score += this.compareStats(
 playerTeam,
 enemy.team
);

score = Math.min(
 95,
 Math.max(
 5,
 score
 )
);
if(score>60){
reasons.push(
'Ventaja general de tipos'
);
}
if(score<40){
reasons.push(
'El rival tiene ventaja'
);
}
return {
winChance:Math.round(score),
loseChance:
100-Math.round(score),
reasons
};
}

private compareTypes(
attacker:Pokemon,
defender:Pokemon
):number {
let result=0;
attacker.types.forEach((type:any)=>{
const name =
type.type?.name ?? type.name;

if(
this.isStrongAgainst(
 name,
 defender
)){
result +=5;
}
});
return result;
}

private isStrongAgainst(
type:string,
defender:Pokemon
):boolean {

const weaknesses:any={
fire:[
'grass',
'ice',
'bug',
'steel'
],

water:[
'fire',
'ground',
'rock'
],

grass:[
'water',
'ground',
'rock'
],

electric:[
'water',
'flying'
],

ground:[
'electric',
'fire',
'poison',
'rock',
'steel'
]
};

const defenderTypes =
defender.types.map(
(t:any)=>
t.type?.name ?? t.name
);
return weaknesses[type]
?.some(
(t:string)=>
defenderTypes.includes(t)
)
?? false;
}

private compareStats(
player:Pokemon[],
enemy:Pokemon[]
):number {
let playerPower=0;
let enemyPower=0;
player.forEach(p=>{
p.stats.forEach((s:any)=>{
playerPower +=
s.base_stat ?? 0;
});
});
enemy.forEach(p=>{
p.stats.forEach((s:any)=>{
enemyPower +=
s.base_stat ?? 0;
});
});
const difference =
playerPower - enemyPower;
return difference / 50;
}
}