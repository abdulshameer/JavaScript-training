function partitionOn(pred, items) {
  var p = 0;
  for(var i in items) {
    if(!pred(items[i])) {
      items.splice((p++), 0, items.splice(i, 1)[0]);
    }
  }
  return p;
}