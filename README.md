# Tic Tac Toe

This is the classical TicTacToe game made with Ruby on Rails with ActionCable and ReactJs

## Main Idea
The main idea is that there are 9 tiles
with a number on them

| 1 | 2 |  3|
|:-:|:-:|:-:|
| 4 | 5 | 6 |
| 7 | 8 | 9 |

There are 8 winning combinations

```

[1,2,3], [4,5,6], [7,8,9]
[1,4,7], [2,5,8], [3,6,9]
[1,5,9], [3,5,7]

```
## Technical Description
We have a Game object and a Move object
Game has many moves
Move acs as list
Player 1 makes the odd moves
Player 2 makes the even moves

- A click is made on a tile
- The number of the tile is sent via Javascript and Action Cable to the Rails App
- A move is saved to the database with the number of the tile
- A job is created after the object is saved
- The job sends an event through the ActionCable channel and informs React for the changes
- React informs the relevant tiles

If a player manages to click on a winning combination, we have a winner
If we have 9 moves without a winner we have a tie
