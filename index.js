const getFirstSelector = selector => document.querySelector( selector )

const nestedTarget = () => document.querySelector( '#nested .target' )

const increaseRankBy = ( n ) => {
  let x = document.querySelectorAll( '.ranked-list li' )
  for( let i = 0; i < x.length; i++ )
    x[i].innerHTML = parseInt( x[i].innerHTML ) + n
}

const deepestChild = () => {
  var x = document.querySelector( '#grand-node')
  console.log( `node: ${x.nodeType}` )
  const goDeep = tree => {
    if( tree.children )
      goDeep( tree.children )
    else{
      console.log( tree.innerHTML )
      return tree
    }
  }
  let y = goDeep( x )
  console.log( y.innerHTML )
  return y
}
