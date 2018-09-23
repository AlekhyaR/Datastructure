Insertion sort pseudo code
A = [7,2,4,1,3,5]
InsertionSort(A,n){
  for i<- 1 to n-1{
    value <- A[i]           // here A[1]=2, value = 2
    hole <- i               // hole = 1
    while(hole>0 && A[hole-1] < value){
      A[hole]<- A[hole-1]          // 7 is placed in position 1, repeat this till 
      hole <- hole-1               // reduced hole 1 to 0
    }
    A[hole]<-value                     //A[0]=2
  }
}

===============
Insertion sort code in JS

arr = [2,7,4,1,3,5]
function InsertionSort(arr, n){
	var i, hole, val;
  for(i=1;i<=arr.length-1;i++) {
  	val=arr[i];
    hole = i;
		while(hole>0 && arr[hole-1]>val){
			arr[hole] = arr[hole-1];
      hole = hole-1;
    }
    arr[hole]=val; 
    document.write("arr hole"+ arr[hole]);
  }
  document.write("newly arranged array"+ arr);
}

InsertionSort(arr,arr.length)


Best case: Time complexity: O(n)
Worst case: Reverse order: O(n^2)
Average case: O(n^2)
