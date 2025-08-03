# Crash Style Betting Game

This is a "Crash" style betting game where players place bets and must decide when to cash out before the multiplier randomly crashes.

## How to Play

### Game Flow

1. **Place a Bet**
   - Enter your bet amount (1-500 GEL)
   - Click "Place Bet" button
   - Your bet amount is deducted from your balance
   - The game starts automatically

2. **Watch the Multiplier**
   - The multiplier starts at 1.00x and increases continuously
   - The rate of increase accelerates as the multiplier gets higher
   - You can see your potential winnings in real-time

3. **Cash Out or Wait**
   - **Cash Out**: Click the "Cash Out" button to secure your winnings
     - Winnings = Bet Amount × Current Multiplier
     - Your winnings are added to your balance
   - **Wait**: Continue watching the multiplier increase
     - Higher multiplier = higher potential winnings
     - But also higher risk of losing everything

4. **Game Crash**
   - The multiplier will randomly crash at some point
   - If you haven't cashed out before the crash, you lose your bet
   - The crash point is displayed briefly before the game resets

### Game States

- **Waiting**: Ready for a new bet
- **Running**: Multiplier is increasing, can cash out
- **Crashed**: Game crashed, player lost (if bet was placed)
- **Cashed Out**: Player successfully cashed out and won

### Features

- **Real-time multiplier display** with visual effects
- **Dynamic bet amount controls** with quick selection buttons
- **Live winnings calculation** during gameplay
- **Game history tracking** with win/loss statistics
- **Visual feedback** for different game states
- **Balance management** with automatic deductions and additions

### Statistics

The game tracks:
- Total winnings
- Total number of bets placed
- Win rate percentage
- Recent game history (last 10 games)

### Technical Details

- Built with React and SCSS
- Uses Context API for balance management
- Responsive design with modern animations
- Real-time multiplier updates
- Random crash generation (1.0x to 10.0x range)

## File Structure

```
src/components/Game/
├── GameAviator/
│   ├── IndexNumber/          # Multiplier display and crash logic
│   ├── BetContainer/         # Betting interface
│   ├── TotalGameInfo/        # Statistics and game history
│   └── GameAviator.jsx       # Main game coordinator
├── IframeHeader/
│   └── CurrentBalance.jsx    # Balance context and display
└── Aviator.jsx               # Main game wrapper
```

## Game Logic

- **Multiplier Speed**: Increases faster at higher values
  - 1.0x-5.0x: +0.02 per 100ms
  - 5.0x-10.0x: +0.04 per 100ms
  - 10.0x-20.0x: +0.08 per 100ms
  - 20.0x+: +0.11 per 100ms

- **Crash Timing**: Random crash between 2-7 seconds after game starts
- **Crash Range**: Random crash point between 1.0x and 10.0x
- **Game Reset**: 3-second delay after crash or cash out

## Usage

1. Start the development server: `npm run dev`
2. Navigate to the Aviator game page
3. Place a bet and start playing!
4. Try to cash out before the game crashes to win

The game provides an exciting, fast-paced betting experience with real-time decision making and visual feedback. 