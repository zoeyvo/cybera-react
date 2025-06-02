// ArchiveCardGames.jsx
import React from "react";

function ArchiveCardGames() {
  const cardGame = {
    name: "Blackjack",
    players: "2-7 players",
    objective: "Get as close to 21 without going over",
    rules: [
      "Each player gets 2 cards initially",
      "Face cards = 10, Ace = 1 or 11",
      "Hit to get more cards, stand to keep current total",
      "Dealer must hit on 16 or less, stand on 17+"
    ]
  };

  return (
    <div className="grid-cell cell1">
      <div className="bio-content">
        <span className="bio-title">~/archive/cardgames</span>
        <span className="gothic-text bio-desc">
          Card games I've learned and their rules
        </span>

        <div className="archive-item">
          <div className="game-header">
            <h3 className="game-name">{cardGame.name}</h3>
            <span className="game-players">{cardGame.players}</span>
          </div>
          <div className="game-objective">
            <strong>Objective:</strong> {cardGame.objective}
          </div>
          <div className="game-rules">
            <strong>Rules:</strong>
            <ul>
              {cardGame.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>        </div>
      </div>
    </div>
  );
}

export default ArchiveCardGames;
