class Queue {
  constructor(){
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element)  
  }
  dequeue(){
    if(this.items.length == 0)
      return "Underflow"
    return this.items.shift();
  }
  front(){
    if(this.items.length == 0)
      return "No elements found";
    return this.items[0];
  }
  printQueue(){
    var str = "";
    for(var i =0; i < this.items.length; i++)
      str += this.items[i]+ " "
    return str;
  }
}
