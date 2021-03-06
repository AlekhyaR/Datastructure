Merge Sort pseudo code
======================
MergeSort(A){
  n <- length(A)
  if(n<2) return;
  mid <- n/2
  L <- arr of size(mid)
  R <- arr of size(n-mid)
  for i <- 1 to mid
    L[i]<- A[i]
  for i <- mid to n-1
    R[i-mid] <- A[i]
  MergeSort(left)
  MergeSort(right)
  Merge(left,right,A)
}
Merge(L,R,A){
  nL <- Length(l)
  nR <- Length(R)
  i = j = k = 0
  while(i < nL && j < nR){
    if(L[i]<= R[j])
      A[k]=L[i]
      i = i+1
    else
      A[k] = R[j]
      j = j+1
    k = k+1
  } 
  while(i<nL){
    A[k] = L[i]
    i = i+1;
    k = k+1;
  }
  while(j<nR){
    A[k]=R[i]
    j = j+1
    k = k+1
  }
}

Timecomplexity:
worst case running time: O(nlogn)
space complexity: O(n)
Not inplace sorting
