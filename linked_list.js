class Node{
	constructor(element){
  	this.element = element;
    this.node = null;
  }
}

class LinkedList {
	constructor(){
  	this.head = null;
    this.size = 0;
  }
  // adds an element at the end of list
  add(element){
    // creates a new node
  	var node = new Node(element);
    
    // if the list is empty add the element and make it as head
    if(this.head == null){
    	this.head = node;
    } else {
	    var	current = this.head;
    	while(current.next != null){            // iterate at the end of the list
      	current = current.next;
      }
    	current.next = node; // add node
    }
    this.size ++;
  }
  
  insertAt(element, index){             // insert element at the position index of the list
    
  	if(index > 0 && index > this.size) {
    	return false;
    }else{
    	var node = new Node(element);           // creates a new node
      var curr, prev;
      
    	if(index == 0){                         // add the element to the first index
      	node.next = this.head;
      	this.head = node;
      }else{
      	curr = this.head;
        var it = 0;
        while(it < index) {                   // iterate over the list to find the position to insert
        	it++;
          prev = curr;
          curr = curr.next;
        }
        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
  // removes an element from the specified location
  removeFrom(index){ 
    if(index > 0 && index > this.size){
      return false;
    }else{
      var curr, prev, it = 0;
      curr = this.head;
      prev = curr;
      
      if(index == 0) {                // deleting first element
        this.head = curr.next;
      } else {
        while(it < index){                // iterate over the list to the position to removce an element
          it ++;
          prev = curr;
          curr = curr.next
        }
        prev.next = curr.next;            // remove the element
      }
      this.size--;
      return curr.element;                // return the remove element
    }
  }
  // removes a given element from the list
  removeElement(element){
    var curr = this.head;
    var prev = null;
    
    // iterate over the list
    while(curr != null) {
      if(curr.element === element){       // comparing element with current element if found then remove the and return true
        if(prev == null){
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }
  printList(){
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    document.write(str);
    }
}

const newList = new LinkedList();
newList.add(10);
newList.add(20);
newList.add(30);
newList.add(40); => 10 20 30 40
newList.insertAt(50, 2); => 10 20 50 30 40
newList.removeFrom(2); => 10 20 30 40
newList.add(60); => 10 20 30 40 60
newList.removeElement(30); => 10 20 40 60
newList.printList();














