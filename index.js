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
  var goDeep = node => {
    if( node.children )
      goDeep( node.children )
    else
      return node
  }
  return goDeep( x )
}
