class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  enqueue(item, priority) {
    const element = { item, priority };
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    this.swap(0, this.heap.length - 1);
    const removed = this.heap.pop();
    this.heapifyDown(0);
    return removed.item;
  }

  heapifyUp(index) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    let smallestChildIndex = null;

    while (currentIndex < this.heap.length) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;

      if (leftChildIndex < this.heap.length) {
        smallestChildIndex = leftChildIndex;

        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex].priority < this.heap[leftChildIndex].priority
        ) {
          smallestChildIndex = rightChildIndex;
        }

        if (this.heap[currentIndex].priority > this.heap[smallestChildIndex].priority) {
          this.swap(currentIndex, smallestChildIndex);
          currentIndex = smallestChildIndex;
        } else {
          break;
        }
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
}

function findPath(start, end, grid) {
  // Define a heuristic function to estimate the cost from a node to the goal
  function heuristic(nodeA, nodeB) {
    // Calculate the Manhattan distance between the two nodes
    const dx = Math.abs(nodeA.x - nodeB.x);
    const dy = Math.abs(nodeA.y - nodeB.y);
    return dx + dy;
  }

  // Define a helper function to check if a node is valid (within the grid boundaries and not an obstacle)
  function isValidNode(node) {
    const { x, y } = node;
    const numRows = grid.length;
    const numCols = grid[0].length;
    return x >= 0 && x < numRows && y >= 0 && y < numCols && grid[x][y] !== 1;
  }

  // Define a helper function to get the neighbors of a given node
  function getNeighbors(node) {
    const { x, y } = node;
    const neighbors = [];

    // Define the possible movements: up, down, left, and right
    const movements = [
      { dx: -1, dy: 0 }, // Up
      { dx: 1, dy: 0 }, // Down
      { dx: 0, dy: -1 }, // Left
      { dx: 0, dy: 1 }, // Right
    ];

    for (const movement of movements) {
      const newX = x + movement.dx;
      const newY = y + movement.dy;
      const neighbor = { x: newX, y: newY };

      if (isValidNode(neighbor)) {
        neighbors.push(neighbor);
      }
    }

    return neighbors;
  }

  // Initialize the open and closed lists
  const openList = new MinHeap();
  const closedList = [];

  // Initialize the cost and parent maps
  const gScore = new Map();
  const fScore = new Map();
  const parentMap = new Map();

  // Set the initial cost of the start node to 0
  gScore.set(start, 0);

  // Set the initial score of the start node (cost + heuristic)
  const hScore = heuristic(start, end);
  fScore.set(start, hScore);

  // A helper function to reconstruct the path from the end node to the start node
  function reconstructPath() {
    const path = [end];
    let currentNode = end;

    while (parentMap.has(currentNode)) {
      currentNode = parentMap.get(currentNode);
      path.unshift(currentNode);
    }

    return path;
  }

  openList.enqueue(start, fScore.get(start));

  while (!openList.isEmpty()) {
    const currentNode = openList.dequeue();

    // Check if we have reached the goal
    if (currentNode === end) {
      return reconstructPath();
    }

    closedList.push(currentNode);

    const neighbors = getNeighbors(currentNode);

    for (const neighbor of neighbors) {
      const tentativeGScore = gScore.get(currentNode) + 1;

      if (!gScore.has(neighbor) || tentativeGScore < gScore.get(neighbor)) {
        parentMap.set(neighbor, currentNode);
        gScore.set(neighbor, tentativeGScore);

        const hScore = heuristic(neighbor, end);
        fScore.set(neighbor, tentativeGScore + hScore);

        if (!closedList.includes(neighbor)) {
          openList.enqueue(neighbor, fScore.get(neighbor));
        }
      }
    }
  }

  // No path found
  return null;
}
const start = { x: 0, y: 0 };
const end = { x: 5, y: 5 };
const grid = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

const path = findPath(start, end, grid);
console.log(path);