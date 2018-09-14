class Stack {
  constructor() {
    this.items = [];
  }
  push(element){
    this.items.push(element);
  }
  pop(){
    if(this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }
  peek(){
    this.items[this.items.length - 1];
  }
  printstack(){
    var str = " ";
    for(var i=0;i < this.items.length;i++)
      str += this.item[i]+ " ";
    return str
  }
}

