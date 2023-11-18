# LinkedList JavaScript Implementation

This repository contains a simple implementation of a linked list in JavaScript. The implementation consists of two classes: `Node` and `LinkedList`.

## Node Class

The `Node` class represents a node in the linked list. Each node has a `data` property and a reference to the next node (`next`).

## LinkedList Class

The `LinkedList` class is the main class representing the linked list. It has the following methods:

- `append(data)`: Adds a new node containing the given data to the end of the list.
- `prepend(data)`: Adds a new node containing the given data to the start of the list.
- `getSize()`: Returns the total number of nodes in the list.
- `getHead()`: Returns the data of the first node in the list.
- `getLast()`: Returns the data of the last node in the list.
- `getAtIndex(index)`: Returns the data of the node at the specified index.
- `popLast()`: Removes the last element from the list.
- `contains(data)`: Returns `true` if the passed-in value is in the list, otherwise returns `false`.
- `finds(data)`: Returns the index of the node containing the given data, or `null` if not found.
- `toString()`: Represents the linked list as a string.

### Extra Credit

- `insertAt(value, index)`: Inserts a new node with the provided value at the given index.
- `removeAt(index)`: Removes the node at the given index.
