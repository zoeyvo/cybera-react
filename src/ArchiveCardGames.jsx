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
          <div className="cardgame-section cardgame-box">
            <div className="game-header">
              <h3 className="game-name accent">Tiến Lên</h3>
              <span className="game-players">4 players</span>
            </div>
            <hr className="cardgame-divider" />
            <div className="game-objective mono">
              <strong>Objective:</strong> Be the first player to play all your cards.
            </div>
            <hr className="cardgame-divider" />
            <div className="game-rules">
              <strong>Rules:</strong>
              <ol className="rules-list" style={{ textAlign: 'left', paddingLeft: '1.2em' }}>
                <li><b>Deck:</b> Standard 52-card deck (no jokers)</li>
                <li><b>Card Rank:</b> 3 (lowest) to 2 (highest): 3-4-5-6-7-8-9-10-J-Q-K-A-2</li>
                <li><b>Setup:</b> 4 players, each dealt 13 cards. Player with 3♠️ starts.</li>
                <li><b>Gameplay:</b> Turns go clockwise. On your turn, play a higher-ranking card/combination than the last play, or pass. If all pass, last player starts new round.</li>
                <li><b>Valid Plays:</b>
                  <ol style={{ paddingLeft: '1.2em' }}>
                    <li>Single: Any single card (e.g., 7♣)</li>
                    <li>Pair: Two cards of same rank (e.g., 7♣ 7♦)</li>
                    <li>Three of a Kind: Three cards of same rank (e.g., 7♣ 7♦ 7♠)</li>
                    <li>Sequence: 3+ consecutive cards (e.g., 4♣ 5♦ 6♠)</li>
                    <li>Pairs Sequence: 3+ consecutive pairs (e.g., 4♣4♦ 5♣5♦ 6♣6♦)</li>
                    <li>Four of a Kind: Four cards of same rank (e.g., 7♣ 7♦ 7♠ 7♥)</li>
                  </ol>
                </li>
                <li><b>2-Killers:</b> Four of a Kind (bomb) or Pairs Sequence of 3+ pairs can defeat a 2 (deuce)</li>
                <li><b>Special:</b> 2s (Deuces) are strongest singles but can be beaten by 2-killers. Ending with a 2 is often a penalty ("chặt heo").</li>
                <li><b>Winning:</b> First to play all cards wins. Others ranked by cards left.</li>
              </ol>
            </div>
          </div>
          {/* Card Game Section 2: Busfahrer (Drive the Bus) */}
          <div className="cardgame-section cardgame-box">
            <div className="game-header">
              <h3 className="game-name accent">Busfahrer (Drive the Bus)</h3>
              <span className="game-players">4+ players</span>
            </div>
            <hr className="cardgame-divider" />
            <div className="game-objective mono">
              <strong>Goal:</strong> Survive the pyramid, avoid being the Busfahrer, and escape the desert with as little drinking as possible!
            </div>
            <hr className="cardgame-divider" />
            <div className="game-rules">
              <strong>What You Need:</strong>
              <ol className="rules-list" style={{ textAlign: 'left', paddingLeft: '1.2em' }}>
                <li>A standard deck of cards (32 or 52 cards)</li>
                <li>Alcoholic drinks</li>
                <li>At least 4 players recommended</li>
              </ol>
            </div>
            <hr className="cardgame-divider" />
            <div className="game-rules">
              <strong>How to Play:</strong>
              <ol className="rules-list" style={{ textAlign: 'left', paddingLeft: '1.2em' }}>
                <li><b>Round 1 – Guessing Round:</b> Each player gets 4 face-down cards. For each card, guess:
                  <ol style={{ paddingLeft: '1.2em' }}>
                    <li>Red or Black? (Suit color)</li>
                    <li>Higher or Lower? (vs. previous card)</li>
                    <li>Inside or Outside? (compared to first two cards)</li>
                    <li>Suit? (Hearts, Diamonds, Clubs, Spades)</li>
                  </ol>
                  <span className="mono">Wrong guess = drink!</span>
                </li>
                <li><b>Round 2 – The Pyramid:</b>
                  <ol style={{ paddingLeft: '1.2em' }}>
                    <li>Arrange cards in a pyramid: 1 card at the top, then 2, 3, 4, etc.</li>
                    <li>Reveal cards row by row (bottom to top).</li>
                    <li>If a pyramid card matches any of your 4 cards → drink!</li>                    <li>Drinking amounts by row:
                      <ol style={{ paddingLeft: '1.2em' }}>
                        <li>Row 1 (bottom): 1 sip per match</li>
                        <li>Row 2: 2 sips per match</li>
                        <li>Row 3: 3 sips per match</li>
                        <li>Row 4: 4 sips per match</li>
                      </ol>
                      <span className="mono">Special: If the pyramid dealer (elected player) turns a card, the drinking amount for that card is doubled!</span>
                    </li>
                  </ol>
                  <span className="mono">The player with the most matches at the end → becomes the Busfahrer (Bus Driver).</span>
                </li>
                <li><b>Round 3 – Drive the Bus (a.k.a. Going into the Desert):</b>
                  <ol style={{ paddingLeft: '1.2em' }}>
                    <li>Place 16 cards face down in a diamond shape (1-2-3-4-3-2-1).</li>
                    <li>The Busfahrer starts at the top and must reach the end of the diamond.</li>
                    <li>At each row, pick one card to reveal:
                      <ol style={{ paddingLeft: '1.2em' }}>
                        <li>If the card is a J, Q, K, or A → you drink and start over at the top!</li>
                        <li>Replace revealed cards with new ones each time.</li>
                      </ol>
                    </li>
                    <li>If you reach the end without hitting a face card, you escape the desert (finish the game).</li>
                    <li><b>If the final card at the tip is a face card, you go back to the start!</b></li>
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
