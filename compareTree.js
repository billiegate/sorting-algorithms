/*
* Compare two tree for similarities in a recursive manner
* 
* @params Array a
* @params Array b
*/

// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise
function compare(a, b){
  
  let same_struct = true;
  for(var k in a) {
    let rightHand = b !== null && b[k] ? b[k] : null; //get the left tree values
    let leftHand = a !== null && a[k] ? a[k] : null; //get the right tree values
    
    if(typeof leftHand === 'object' && rightHand && typeof rightHand === 'object') {
      // if they are both trees compare again
      same_struct = compare(leftHand, rightHand) ? same_struct : false;
    } else if(typeof leftHand == 'object' && typeof rightHand !== 'object' || 
             typeof leftHand !== 'object' && typeof rightHand === 'object'){
      // if they aint both tress that means the do not have same structure
      same_struct = false;
    } else {
      // just compare the values if they do not match that means the tree aint same
      if( leftHand !== rightHand ) {
        same_struct = false;
      }
    }
  }
  
  //return the result
  return same_struct;
}