/** 
 * @method sort a list by swapping
 * 
 * @param array items
 * @param boolean reverse
 * @returns array sorted
*/
function quickSort (items, reverse) {
  
  reverse = typeof reverse === 'undefined' ? false : reverse;
  var num_swap = 0; // number of swaps
  let n = items.length-1; // index of the last item in array
  
  /** 
   * @method swaps two element in the array list
   * 
   * @param array items
   * @param int l - left pointer
   * @param int r - right pointer
  */
  const swap = (items, l, r) => {

    if( reverse && items[l] < items[r]) {
      var temp = items[l];
      items[l] = items[r];
      items[r] = temp;
      num_swap++;
    } else if(items[l] > items[r]){
      var temp = items[r];
      items[r] = items[l];
      items[l] = temp;
      num_swap++;
    }
  }
  
  /** 
   * @method partitions the array from the middle and 
   * 
   * @param array items
   * @param int i - left pointer
   * @param int j - right pointer
   * @returns int i
  */
  const partition = (items, i, j) => {
    var pivot   = items[Math.floor((j + i) / 2)], //middle element
    
    if(reverse) {
      while (items[i] > pivot) {
        i++;
      }
      while (items[j] < pivot) {
        j--;
      }
    } else {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
    }
    
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }

    return i;
  }
  
  /** 
   * @method recursively sort the array
   * 
   * @param array items
   * @param int left - left pointer
   * @param int right - right pointer
   * @returns array items
  */
  const _quickSort = (items, left, right) => {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            _quickSort(items, left, index - 1);
        }
        if (right > index) { //more elements on the right side of the pivot
            _quickSort(items, index, right);
        }
    }
    return items;
  }
  
  //init _quickSort
  let sorted = _quickSort(items, 0, n);
  
  return sorted;
}