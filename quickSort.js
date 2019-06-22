function minimumSwaps (ratings) {
  
  var num_swap = 0, was_swapped = false;
  let n = ratings.length-1;
  
  
  const swap = (ratings, l, r) => {
    if(ratings[l] < ratings[r]) {
      var temp = ratings[l];
      ratings[l] = ratings[r];
      ratings[r] = temp;
      num_swap++;
    }
  }
  
  const partition = (ratings, l, r) => {
    var pivot   = ratings[Math.floor((r + l) / 2)], //middle element
        i       = l, //left pointer
        j       = r; //right pointer
        was_swapped = false;
    
        while (ratings[i] > pivot) {
            i++;
        }
        while (ratings[j] < pivot) {
            j--;
        }
        if (i <= j) {
            swap(ratings, i, j); //sawpping two elements
            i++;
            j--;
            was_swapped = true;
        }
    
    return i;
  }
  
  const quickSort = (items, left, right) => {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (right > index) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
  }
  
  quickSort(ratings, 0, n);
  
  return num_swap;
}