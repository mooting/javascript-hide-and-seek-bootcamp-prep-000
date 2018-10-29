const getFirstSelector = selector => document.querySelector( selector )

const nestedTarget = () => document.querySelector( '#nested .target' )

const increaseRankBy = ( n ) => {
  let x = document.querySelectorAll( '.ranked-list li' )
  for( let i = 0; i < x.length; i++ )
    x[i].innerHTML = parseInt( x[i].innerHTML ) + n
}

const deepestChild = () => {
  var grand = document.querySelector( '#grand-node')
  while ( grand.children ){
      console.log('-')
      console.log(grand.children.innerHTML)
      console.log('-')
      grand = grand.children
  }
  console.log(grand.innerHTML)
  return grand
}
