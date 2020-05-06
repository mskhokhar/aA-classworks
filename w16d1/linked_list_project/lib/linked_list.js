// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val);
        if(this.length === 0){
            this.tail = node;
            this.head = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }  
        return current;      

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.head) return undefined;
        let oldHead;
        if (this.length===1) {
            this.head = null;
            this.tail = null;
        }else{
            oldHead = this.head
            this.head = oldHead.next;
        }
        this.length--;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head;
        while (current) {
            if(current.value === target) return true;
            current = current.next
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index >= this.length) return null;
        let res;
        while (index >0) {
            res = this.head.next;
            index--;
        }
        return res;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (this.length <= index) return false;
        let counter = 0;
        let currNode = this.head;
        while (counter!=index) {
            currNode = currNode.next;
            counter++;
        }
        currNode.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
