// Your code here
function saturdayFun (activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(param = 'special') {
    return `You are ${flair}${param}${flair}!`
  }
}

<<<<<<< HEAD
let Calculator = {
  add : function(a,b){
    return a + b;
  },
  subtract : function(a,b){
    return a-b;
  },
  multiply : function(a,b){
    return a * b;
  },
  divide : function(a,b) {
    return a / b;
  }
}


function actionApplyer(i,array){
  let j = 0;
  for (j=0; j<array.length; j++)
    i=array[j](i);
  return i;
=======
let calculator {
  function add(){}
>>>>>>> 9b2d9be79b3462bb364c19bf1f743fa1f1dc3f05
}