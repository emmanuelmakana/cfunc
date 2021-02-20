exports.square = function(event, context, callback) {
  const square = Math.pow(parseInt(event.number), 2);

  console.log({"square": square});
}