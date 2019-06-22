# sorting-algorithms
js implementation of some sorting algorithms

<h2>Quick Sort</h2>

Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. 
<br/>
The steps are:
<ul>
    <li>Pick an element, called a pivot, from the array.</li>
    <li>Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.</li>
    <li>Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.<li>
</ul>

------------------------------------------------
<strong>Usage: </strong>
Giving an unsorted item list of [2, 4, 1, 9, 3, 5]
<h5>ex. 1</h5>
<code>
let unsorted = [2, 4, 1, 9, 3, 5]; <br/>
let sorted = quickSort[unsorted]; <br/>
console.log(sorted) // [1, 2, 3, 4, 5, 9] <br/>
</code>
<h5>ex. 2</h5>
<code>
let unsorted = [2, 4, 1, 9, 3, 5]; <br/>
let sorted = quickSort[unsorted, true]; //sorts in the reverse order <br/>
console.log(sorted) // [9, 5, 4, 3, 2, 1] <br/>
</code>
