# Dijkstra's Algorithm - Pathfinding Visualizer

## Project Overview
This project implements a **pathfinding visualizer** using **Dijkstra's Algorithm**. It allows users to interactively explore how the algorithm finds the shortest path in a grid-based environment. The visualization provides a clear and intuitive representation of the algorithm's working, making it suitable for educational and demonstrative purposes.

## Features
- **Interactive Grid:** Users can set start and end points, and place obstacles on the grid.
- **Visualization:** Animates the process of finding the shortest path.
- **Customizability:** Dynamic resizing of the grid and customizable weights for edges.
- **React Frontend:** Built with React for a responsive and modern UI.

## Technologies Used
- **Frontend Framework:** React.js
- **Algorithm Implementation:** JavaScript (Dijkstra's Algorithm in `dijkstra.js`)
- **Styling:** CSS
- **Assets:** HTML5 and images for better UI/UX.

## How It Works
1. **Grid Setup:** The grid is composed of nodes, each representing a position in the graph.
2. **User Interaction:**
   - Define the source and destination nodes.
   - Add obstacles or walls to the grid.
3. **Algorithm Execution:**
   - The algorithm computes the shortest path from the source to the destination while avoiding obstacles.
   - The pathfinding process is visualized step-by-step.
4. **Result Display:** Highlights the shortest path and the nodes visited during the computation.

## Installation
### Prerequisites
- Node.js and npm installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dijkstras-algorithm-visualizer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dijkstras-algorithm-visualizer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```
   The app will run on `http://localhost:3000/`.

## File Structure
- **`src/algorithms/dijkstra.js`:** Core implementation of Dijkstra's algorithm.
- **`src/PathfindingVisualizer`:** Main visualization logic.
  - `PathfindingVisualizer.jsx`: Renders the grid and controls the visualization process.
  - `Node/Node.jsx`: Handles the properties and display of individual nodes.
- **`public/`:** Contains static assets such as `index.html` and images.
- **`package.json`:** Dependency and script management.

## Usage
1. Run the app locally (as described in the installation steps).
2. Interact with the grid by:
   - Clicking to set the start and end nodes.
   - Drawing walls/obstacles by dragging on the grid.
   - Clicking the "Visualize" button to see Dijkstra's Algorithm in action.

## Example Screenshot
*(Include an image here showing the grid and pathfinding visualization, e.g., `public/img1.png`)*

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push the branch:
   ```bash
   git push origin feature-name
   ```
4. Submit a pull request for review.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Inspired by visualization tools for graph algorithms.
- Thanks to contributors and the open-source community for guidance.

## Contact
For questions or feedback, feel free to reach out:
- GitHub: https://github.com/subhangee-1906
- Email: shubh190601@gmail.com

