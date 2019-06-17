module.exports = {
  add,
};

// function add(a = 0, b = 0) {
//   return a+b;
// }

function add( ...args) {
  return args.reduce((accu, curr) =>{
    return accu + curr;
  }, 0);
}
