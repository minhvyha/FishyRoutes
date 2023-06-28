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
  const openList = [start];
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

  while (openList.length > 0) {
    // Sort the open list based on the fScore
    openList.sort((a, b) => fScore.get(a) - fScore.get(b));

    // Get the node with the lowest fScore (the current best option)
    const currentNode = openList.shift();

    // Check if we have reached the goal
    if (currentNode === end) {
      return reconstructPath();
    }

    // Move the current node to the closed list
    closedList.push(currentNode);

    // Get the neighbors of the current node
    const neighbors = getNeighbors(currentNode);

    for (const neighbor of neighbors) {
      // Calculate the tentative gScore for the neighbor
      const tentativeGScore = gScore.get(currentNode) + 1;

      if (!gScore.has(neighbor) || tentativeGScore < gScore.get(neighbor)) {
        // Update the parent and cost maps
        parentMap.set(neighbor, currentNode);
        gScore.set(neighbor, tentativeGScore);

        // Calculate the fScore for the neighbor (cost + heuristic)
        const hScore = heuristic(neighbor, end);
        fScore.set(neighbor, tentativeGScore + hScore);

        if (!openList.includes(neighbor)) {
          // Add the neighbor to the open list
          openList.push(neighbor);
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