// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(newNode){
        this.value = newNode;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(input){
        let newNode = new Node(input);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        }else{
            let oldNode = this.top;
            this.top = newNode;
            this.top.next = oldNode;
        }
        this.length++;
        return this.length;

        
    }
    pop(){
        let oldNode = this.top;
        if (this.length === 0) {
            return null;
        }else if(this.length === 1){
            this.top = this.bottom  = null;
        }else{
            this.top = oldNode.next;
        }
        this.length--;
        return oldNode.value;
        
    }

    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
