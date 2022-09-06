const mobilesNestedObject = {
  Samsung: {
    S1: {
      RAM: 2,
      ROM: 16,
      Price: 20000,
    },
    S2: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
    S7: {
      RAM: 6,
      ROM: 128,
      Price: 2100000,
    },
    S8: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
  },
  Iphone: {
    1: {
      RAM: 2,
      ROM: 16,
      Price: 20000,
    },
    2: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
    3: {
      RAM: 6,
      ROM: 128,
      Price: 2100000,
    },
    14: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
  },
  Vivo: {
    S4: {
      RAM: 2,
      ROM: 16,
      Price: 20000,
    },
    S2: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
    S7: {
      RAM: 6,
      ROM: 128,
      Price: 2100000,
    },
    S8: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
  },
  Qmobile: {
    GrandPrimePro: {
      RAM: 2,
      ROM: 16,
      Price: 8000,
    },
    S2: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
    S7: {
      RAM: 6,
      ROM: 128,
      Price: 2100000,
    },
    S8: {
      RAM: 3,
      ROM: 32,
      Price: 200000,
    },
  },
};

var courseNestedArray = [
  ["EDUCBA", "Online IT Platform", ["Hi", "Happy"]], //0,0 and 0,1 values
  ["Courses", "Java"], //1,0 and 1,1 values
  ["Fee", "5000"], //2,0 and 2,1 values
  ["Hot Course", "Java"], //3,0 and 3,1 values
];

const [variable, variable2, variable3, ...variable4] = courseNestedArray;
const { variable5, variable6, variable7, ...variable8 } =
  mobilesNestedObject.Qmobile.GrandPrimePro;

console.log(variable4);
console.log(variable8);
