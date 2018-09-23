pseudo code:
selectionsort(arr,n){
  for i <- 0 to n-2 // (n-1)th position's element will be at appr position
  {
    imin = i;
    for j <- i+1 to n-1
    {
      if(arr[j] < arr[imin]){  // having any element lesser than current element then update imin, scan all elements to 
        imin = j;              //find the min value
      }
      temp = arr[i];
      arr[i] = arr[imin];    
      arr[imin] = temp;    // swaping the elements
    }
  }
}

==================
JS code
-------

arr = [2,7,4,1,3,5]
function SelectionSort(arr, n){
	var i, j, imin, temp;
  for(i=0;i<=arr.length-2;i++) {
  	imin = i;
    for(j=i+1;j<=arr.length-1;j++) {
    	if(arr[j] < arr[imin]) {
      	imin = j;
      }
    }
    temp = arr[i];
    document.write("temp value"+ temp +"\n");
    arr[i] = arr[imin];
    document.write("arr[imin] value \n"+ imin);
    document.write("arr[i] value \n"+ arr[i]);
    arr[imin] = temp; 
    document.write("arr[i]"+ arr[imin]);
  }
  document.write("arr[i]"+ arr);
}

SelectionSort(arr,6)
