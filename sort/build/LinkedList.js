"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    // push one element with data to the end of list
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            // return;
        }
        else {
            var tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        // get length of list
        get: function () {
            if (!this.head)
                return 0;
            var tail = this.head;
            var length = 1;
            while (tail.next) {
                length++;
                tail = tail.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    // returns node at specific index
    LinkedList.prototype.at = function (index) {
        if (!this.head)
            throw new Error('Index out of bounds');
        var counter = 0;
        var node = this.head;
        while (node.next) {
            if (counter === index)
                return node;
            counter++;
            node = node.next;
        }
        if (counter === index)
            return node;
        throw new Error('Index out of bounds');
    };
    // compare data property of two nodes
    LinkedList.prototype.compare = function (currentIndex, nextIndex) {
        if (!this.head)
            throw new Error('List is empty');
        return this.at(currentIndex).data > this.at(nextIndex).data;
    };
    // swap two nodes
    LinkedList.prototype.swap = function (currentIndex, nextIndex) {
        var currentNode = this.at(currentIndex);
        var nextNode = this.at(nextIndex);
        var temp = currentNode.data;
        currentNode.data = nextNode.data;
        nextNode.data = temp;
    };
    // print all items in LinkedList
    LinkedList.prototype.print = function () {
        if (!this.head) {
            console.log([]);
            return;
        }
        var result = [];
        var node = this.head;
        while (node.next) {
            result.push(node.data);
            node = node.next;
        }
        result.push(node.data);
        console.log(result);
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
