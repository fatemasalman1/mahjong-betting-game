Mahjong Betting Game
A web-based Mahjong-inspired betting game built with React. The project focuses on state management, game logic separation, and scalable architecture for future feature expansion.

AI Assistance Clarification

During development, AI tools were used as a support mechanism to assist with debugging and structuring parts of the game logic, particularly the playTurn function.

The AI helped in:

Identifying and fixing runtime and state-related issues during development
Suggesting a clearer order of operations inside the game loop (game flow structure)
Assisting in organizing the logic flow (bet evaluation, state updates, reshuffling, and scoring)

However, the implementation of playTurn, including its logic design, integration with the game state, and rule behavior, was fully understood, reviewed, and adapted manually to fit the project requirements.

AI was used as a guidance tool to improve development speed and code structure, not as a replacement for understanding or design decisions.

Features
* Mahjong tile-based gameplay (Dragons, Winds, Number tiles)
* Betting system: Bet Higher / Bet Lower
* Dynamic scoring system
* Deck reshuffling system
* Game history tracking
* Game Over conditions
* Local leaderboard (Top scores)

Game Rules
Tile Values
* Number tiles → equal face value
* Dragon / Wind tiles → start at value 5
Dynamic Scaling
* If a non-number tile is part of a winning hand → +1 value
* If part of a losing hand → -1 value
Game Over Conditions
* Any Dragon/Wind tile reaches 0 or 10
* Deck reshuffled 3 times

Architecture Overview
The project is structured for scalability and future extensions.
Core Modules
* engine.js → Main game logic (playTurn, game flow)
* deck.js → Deck creation, shuffle, and drawing hands
* rules.js → Scoring logic and tile rules
* scoringEngine.js → Hand total calculation
Design Principle
UI is fully separated from game logic. Game state is managed through a predictable engine system.
This makes it easy to:
* Add new tile types
* Introduce new betting rules
* Extend game mechanics without changing UI

Tech Stack
* React
* JavaScript (ES6+)
* Tailwind CSS
* shadcn/ui components

How to Run
npm install
npm run dev

What was implemented manually vs AI-assisted
Manually built
* Game logic (engine, rules, deck system)
* State management
* UI structure and layout
* Game flow design
AI-assisted
* UI polishing suggestions
* Refactoring ideas
* Documentation structure

Future Improvements
* Add multiplayer mode
* Add animations for tile movement
* Add persistent backend leaderboard
* Add special tile abilities (wild cards, multipliers)

Notes
This project was designed as a technical assessment focusing on:
* Clean architecture
* Extendable logic
* UI clarity
* Game state predictability
