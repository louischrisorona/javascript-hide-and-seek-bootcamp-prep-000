function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  n = parseInt(n, 10)

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
    
    var deepest = document.querySelector('#grand-node div div div div')

//node.children.length != 0 means there is another child node
//    for(let i = 0; i < layers.length; i++) {
  //    while (!layers[i].innerHTML) {
    //    continue;
return deepest
  }
