export const levels = [
  {name:'01 · Il primo passo',run:120,walk:60,reps:6},
  {name:'02 · Un po’ più a lungo',run:150,walk:60,reps:6},
  {name:'03 · Trova continuità',run:180,walk:60,reps:6},
  {name:'04 · Allunga il passo',run:240,walk:60,reps:5}
];
export function phases(level){const p=[{name:'Riscaldamento',seconds:300,hint:'Cammina e trova il tuo ritmo.'}];for(let i=1;i<=level.reps;i++){p.push({name:'Corsa',seconds:level.run,hint:`Ripetizione ${i} di ${level.reps} · Corri al tuo ritmo.`},{name:'Camminata',seconds:level.walk,hint:`Ripetizione ${i} di ${level.reps} · Recupera camminando.`});}p.push({name:'Defaticamento',seconds:300,hint:'Rallenta e termina camminando.'});return p;}
export function locate(list,elapsed){let start=0;for(let i=0;i<list.length;i++){if(elapsed<start+list[i].seconds)return {index:i,left:start+list[i].seconds-elapsed,start};start+=list[i].seconds;}return {index:list.length,left:0,start};}
export const format=s=>`${Math.floor(Math.ceil(s)/60).toString().padStart(2,'0')}:${(Math.ceil(s)%60).toString().padStart(2,'0')}`;
