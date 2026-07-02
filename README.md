Mahjong Betting Game
A web-based Mahjong-inspired betting game built with React. The project focuses on state management, game logic separation, and scalable architecture for future feature expansion.

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
