import { dijkstra, getNodesInShortestPathOrder } from './dijkstra.js';

// Grid setup variables
let grid = [];
const rows = 20;
const cols = 50;

// Initialize the grid
function createGrid() {
  grid = [];
  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = '';
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      const node = {
        row,
        col,
        isStart: row === 0 && col === 0,
        isFinish: row === rows - 1 && col === cols - 1,
        isWall: false,
        distance: Infinity,
        isVisited: false,
        previousNode: null,
      };
      currentRow.push(node);
      const nodeDiv = document.createElement('div');
      nodeDiv.id = `node-${row}-${col}`;
      nodeDiv.className = `node ${node.isStart ? 'node-start' : node.isFinish ? 'node-finish' : ''}`;
      nodeDiv.onmousedown = () => toggleWall(row, col);
      gridContainer.appendChild(nodeDiv);
    }
    grid.push(currentRow);
  }
}

// Toggle wall nodes
function toggleWall(row, col) {
  const node = grid[row][col];
  if (!node.isStart && !node.isFinish) {
    node.isWall = !node.isWall;
    document.getElementById(`node-${row}-${col}`).classList.toggle('node-wall');
  }
}

// Run Dijkstra's algorithm
function runAlgorithm() {
  const startNode = grid[0][0];
  const finishNode = grid[rows - 1][cols - 1];
  const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  const shortestPathNodes = getNodesInShortestPathOrder(finishNode);
  animateAlgorithm(visitedNodesInOrder, shortestPathNodes);
}

// Animate algorithm execution
function animateAlgorithm(visitedNodes, shortestPathNodes) {
  for (let i = 0; i < visitedNodes.length; i++) {
    setTimeout(() => {
      const node = visitedNodes[i];
      document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
      if (i === visitedNodes.length - 1) {
        animateShortestPath(shortestPathNodes);
      }
    }, 10 * i);
  }
}

// Animate shortest path
function animateShortestPath(nodes) {
  for (let i = 0; i < nodes.length; i++) {
    setTimeout(() => {
      const node = nodes[i];
      document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-shortest-path';
    }, 50 * i);
  }
}

// Reset grid
function resetGrid() {
  createGrid();
}

// Show grid on "Get Started"
function getStarted() {
  document.querySelector('.card').classList.add('hidden');
  document.getElementById('grid-container').classList.remove('hidden');
  createGrid();
}

window.runAlgorithm = runAlgorithm;
window.resetGrid = resetGrid;
window.getStarted = getStarted;
