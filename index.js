class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) =>
      a - b
    )
    this.length+=1
  }

  get(pos) {
    if(pos <= this.length){
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if(this.length === 0){
      return 0
    } else {
      return  this.items.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )
    }
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.sum()/this.items.length
    }
  }
}

module.exports = SortedList;

let sorted = new SortedList()
sorted.add(1)
sorted.add(10)