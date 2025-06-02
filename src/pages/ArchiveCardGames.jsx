// ArchiveCardGames.jsx
import React from "react";

function ArchiveCardGames() {
  // Tiến Lên (Vietnamese card game) — Rules Summary
  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/cardgames</span>
        <div className="archive-cardgames-grid">
          {/* Card Game Section 1: Tiến Lên */}
          <div className="cardgame-section cardgame-box">            <div className="game-header">
              <h3 className="game-name accent"><span>Tiến Lên</span> 🇻🇳</h3>
              <span className="game-players">4 players required</span>
            </div><hr className="cardgame-divider" />            <div className="game-rules">
              <strong className="section-heading">Objective:</strong>
              <div className="objective-text">
                Be the first player to play all your cards.
              </div>
            </div>
            <hr className="cardgame-divider" />
            <div className="game-rules">
              <strong className="section-heading">Rules:</strong>              <ol className="rules-list">
                <li><strong className="rule-label">Deck:</strong> Standard 52-card deck (no jokers)</li>
                <li><strong className="rule-label">Card Rank:</strong> 3 (lowest) to 2 (highest): 3-4-5-6-7-8-9-10-J-Q-K-A-2</li>
                <li><strong className="rule-label">Setup:</strong> 4 players, each dealt 13 cards. Player with the 3 of spades starts.</li>
                <li><strong className="rule-label">Gameplay:</strong> Turns go clockwise. On your turn, play a higher-ranking card/combination than the last play, or pass. If all pass, last player starts new round.</li>                <li><strong className="rule-label">Valid Plays:</strong>
                  <ol>
                    <li>Single: Any single card (e.g., 7♣)</li>
                    <li>Pair: Two cards of same rank (e.g., 7♣ 7♦)</li>
                    <li>Three of a Kind: Three cards of same rank (e.g., 7♣ 7♦ 7♠)</li>
                    <li>Sequence: 3+ consecutive cards (e.g., 4♣ 5♦ 6♠)</li>
                    <li>Pairs Sequence: 3+ consecutive pairs (e.g., 4♣4♦ 5♣5♦ 6♣6♦)</li>
                    <li>Four of a Kind: Four cards of same rank (e.g., 7♣ 7♦ 7♠ 7♥)</li>
                  </ol>
                </li><li><strong className="rule-label">2-Killers:</strong> Four of a Kind or Pairs Sequence of 3+ pairs can defeat a 2 (deuce)</li>
                <li><strong className="rule-label">Special:</strong> 2's are strongest singles but can be beaten by 2-killers. Ending with a 2 is often a penalty ("chặt heo").</li>
                <li><strong className="rule-label">Winning:</strong> First to play all cards wins. Others ranked by cards left.</li>
              </ol>
            </div>
          </div>
          {/* Card Game Section 2: Busfahrer (Drive the Bus) */}
          <div className="cardgame-section cardgame-box">            <div className="game-header">
              <h3 className="game-name accent"><span>Busfahrer</span> 🇩🇪</h3>
              <span className="game-players">4+ players recommended</span>
            </div><hr className="cardgame-divider" />            <div className="game-rules">
              <strong className="section-heading">Objective:</strong>
              <div className="objective-text">
                Survive the pyramid, avoid being the Busfahrer, and escape the desert with as little drinking as possible!
              </div>
            </div>
            <hr className="cardgame-divider" />
            <div className="game-rules">
              <strong className="section-heading">What You Need:</strong>
              <ol className="rules-list">
                <li>A standard deck of cards (32 or 52 cards)</li>
                <li>Alcoholic drinks</li>
              </ol>
            </div>
            <hr className="cardgame-divider" />            <div className="game-rules">
              <strong className="section-heading">How to Play:</strong>
              <ol className="rules-list">                <li><strong className="round-label">Round 1 – Guessing Round:</strong> Each player gets 4 face-down cards. For each card, guess:
                  <ol>
                    <li>Red or Black? (Suit color)</li>
                    <li>Higher or Lower? (vs. previous card)</li>
                    <li>Inside or Outside? (compared to first two cards)</li>
                    <li>Suit? (Hearts, Diamonds, Clubs, Spades)</li>
                  </ol>
                  <span className="mono">Wrong guess = drink!</span>
                </li>
                <li><strong className="round-label">Round 2 – The Pyramid:</strong>
                  <ol>
                    <li>Arrange cards in a pyramid: 1 card at the top, then 2, 3, 4, etc.</li>                    <li>Reveal cards row by row (bottom to top).</li>
                    <li>If a pyramid card matches any of your 4 cards → drink!</li>
                    <li>Drinking amounts by row:
                      <ol>
                        <li>Row 1 (bottom): 1 sip per match</li>
                        <li>Row 2: 2 sips per match</li>
                        <li>Row 3: 3 sips per match</li>
                        <li>Row 4: 4 sips per match</li>
                      </ol>
                      <span className="mono">Special: If the pyramid dealer (elected player) turns a card, the drinking amount for that card is doubled!</span>
                    </li>
                  </ol>
                  <span className="mono">The player(s) with the most matches at the end → becomes the Busfahrer (Bus Driver).</span>
                </li>                <li><strong className="round-label">Round 3 – Drive the Bus (a.k.a. Going into the Desert):</strong>
                  <ol>
                    <li>The Busfahrer(s) repeat Round 1 with 4 new face-down cards.</li>
                    <li>They must guess each card in sequence (Red/Black, Higher/Lower, Inside/Outside, Suit).</li>
                    <li><strong>If they get ANY guess wrong at ANY stage → they drink and start over completely with 4 new cards!</strong></li>
                    <li>This continues until they get all 4 guesses correct without making a single mistake.</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveCardGames;
