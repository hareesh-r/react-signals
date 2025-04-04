# React Counter Comparison

A demonstration project comparing different state management approaches in React, specifically focusing on React's built-in `useState` hook versus Signals-based state management.

## Overview

This project showcases three different examples of counter implementations:

1. Simple Counter Example
2. Complex Counter Example
3. Performance Benchmark Comparison

Each example demonstrates how to implement the same functionality using different state management approaches, allowing for direct comparison of their usage patterns and performance characteristics.

## Features

- **Simple Counter**: Basic counter implementation using both `useState` and Signals
- **Complex Counter**: More sophisticated counter with additional state management features
- **Performance Benchmarks**: Direct comparison of rendering performance between different approaches
- **Responsive Design**: Built with Tailwind CSS for a beautiful, responsive interface
- **Modern Stack**: Built with Vite, React, and modern tooling

## Project Structure

```
src/
├── components/
│   ├── Simple/
│   │   ├── UseStateCounter.jsx
│   │   └── SignalCounter.jsx
│   ├── Complex/
│   │   ├── UseStateCounterComplex.jsx
│   │   └── SignalCounterComplex.jsx
│   └── Benchmark/
│       ├── ReactPerf.jsx
│       └── SignalsPerf.jsx
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-counter
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

The application provides three different examples that can be toggled by modifying the `exampleNo` state in `App.jsx`:

1. `exampleNo = 1`: Simple counter comparison
2. `exampleNo = 2`: Complex counter comparison
3. `exampleNo = 3`: Performance benchmarks

## Technologies Used

- React
- Vite
- Tailwind CSS
- Signals (for alternative state management)
- ESLint (for code quality)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
