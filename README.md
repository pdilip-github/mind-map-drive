# Mind Map Drive

Mind Map Drive is a web-based mind mapping tool that allows users to create, edit, and save mind maps directly to their Google Drive.

## Features

- **Interactive Canvas:** A pannable and zoomable canvas for creating and arranging nodes.
- **Node Management:** Easily add, edit, and delete text-based nodes.
- **Connections:** Draw connections between nodes to represent relationships.
- **Drag and Drop:** Seamless drag-and-drop functionality for nodes.
- **Google Drive Integration (Planned):**
    - Authenticate using Google OAuth 2.0.
    - Save mind maps to your Google Drive.
    - Load existing mind maps from your Google Drive.

## Technology Stack

- **Frontend:** React (with TypeScript)
- **Mind Map Interface:** React Flow
- **Styling:** Bootstrap CSS
- **Backend:** Node.js with Express.js
- **Google Drive API:** Googleapis

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (LTS recommended)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/pdilip-github/mind-map-drive.git
    cd mind-map-drive
    ```

2.  **Install Backend Dependencies:**

    ```bash
    cd backend
    npm install
    cd ..
    ```

3.  **Install Frontend Dependencies:**

    ```bash
    cd frontend
    npm install
    cd ..
    ```

### Running the Application

1.  **Start the Backend Server:**

    ```bash
    cd backend
    npm start
    # The server will run on http://localhost:3001
    cd ..
    ```

2.  **Start the Frontend Development Server:**

    ```bash
    cd frontend
    npm start
    # The app will open in your browser, usually at http://localhost:3000
    cd ..
    ```

## Usage

-   **Add Node:** Click the "Add Node" button to create a new node on the canvas.
-   **Edit Node:** Click on a node's text to edit its label.
-   **Connect Nodes:** Drag a connection from the source handle (bottom) of one node to the target handle (top) of another node.
-   **Drag and Drop Nodes:** Click and drag any node to reposition it on the canvas.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the ISC License.
