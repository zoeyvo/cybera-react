// App.js
import React, { useState, useRef, useEffect } from "react";
import CursorTrail from "./CursorTrail";
import "./App.scss";

const TERMINAL_OPTIONS = [
  { label: "bio", display: "bio" },
  { label: "projects", display: "projects" },
  { label: "resume", display: "resume" },
];

function App() {
  const [entered, setEntered] = useState(false);
  const [terminalValue, setTerminalValue] = useState("");
  const [selected, setSelected] = useState(null);
  const [caretPos, setCaretPos] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (entered && inputRef.current) {
      inputRef.current.focus();
    }
  }, [entered]);

  const handleTerminalInput = (e) => {
    setTerminalValue(e.target.innerText);
    // Update caret position
    const sel = window.getSelection();
    if (sel && sel.anchorNode === e.target.firstChild) {
      setCaretPos(sel.anchorOffset);
    } else {
      setCaretPos(e.target.innerText.length);
    }
  };

  const handleTerminalKeyDown = (e) => {
    if (e.key === "Enter") {
      const val = terminalValue.trim().toLowerCase();
      if (TERMINAL_OPTIONS.some(opt => opt.label === val)) {
        setSelected(val);
      }
      e.preventDefault();
    } else {
      // Update caret position after keydown
      setTimeout(() => {
        const el = inputRef.current;
        if (el) {
          const sel = window.getSelection();
          if (sel && sel.anchorNode === el.firstChild) {
            setCaretPos(sel.anchorOffset);
          } else {
            setCaretPos(el.innerText.length);
          }
        }
      }, 0);
    }
  };

  const handleOptionClick = (label) => {
    setSelected(label);
    setTerminalValue(label);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        // Move caret to end
        const range = document.createRange();
        range.selectNodeContents(inputRef.current);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        setCaretPos(label.length);
      }
    }, 0);
  };

  return (
    <div className="cyberia-root">
      <CursorTrail />
      <audio id="bg-audio" src="/assets/supernova.mp3" autoPlay loop hidden />
      <header className="header"></header>
      <div className="grid-cell cell1">
        {!entered && <img src="/assets/lain.gif" alt="Lain" />}
        {!entered && (
          <button className="enter-btn gothic-text" onClick={() => setEntered(true)}>[enter]</button>
        )}
        {entered && (
          <div className="terminal-container">
            <div className="pixel-stream-bg"></div>
            <div className="terminal-inner">
              <div className="terminal-row">
                <span className="terminal-prompt flicker">&gt;</span>
                <span
                  className="terminal-input"
                  contentEditable
                  suppressContentEditableWarning
                  ref={inputRef}
                  spellCheck={false}
                  onInput={handleTerminalInput}
                  onKeyDown={handleTerminalKeyDown}
                  tabIndex={0}
                  aria-label="Type a command"
                />
                {terminalValue.length > 0 && (
                  <span className="terminal-cursor blink" style={{ left: 'auto', color: '#b57edc', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', fontWeight: 'bold', padding: '0 1px', marginLeft: '-2px', position: 'relative' }}>
                    {terminalValue[caretPos] || ' '}
                  </span>
                )}
              </div>
              <div className="terminal-options">
                {TERMINAL_OPTIONS.map(opt => (
                  <span
                    key={opt.label}
                    className={`terminal-btn${selected === opt.label ? " selected" : ""}`}
                    onClick={() => handleOptionClick(opt.label)}
                  >{opt.display}</span>
                ))}
              </div>
              {selected === "bio" && <div className="terminal-output">[bio content here]</div>}
              {selected === "projects" && <div className="terminal-output">[projects content here]</div>}
              {selected === "resume" && (
                <div className="terminal-output">
                  <a href="/assets/Zoey Vo Resume 2025.pdf" target="_blank" rel="noopener noreferrer">Download Resume (PDF)</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <footer className="footer">
        <span>
          <a href="https://github.com/zoeyvo" target="_blank" rel="noopener noreferrer">github.com/zoeyvo</a>
          {" | "}
          <a href="https://www.linkedin.com/in/zoeyvo" target="_blank" rel="noopener noreferrer">linkedin.com/in/zoeyvo</a>
          {" | "}
          <span className="footer-email" title="Email (obfuscated)">zoeyvo256 [at] gmail.com</span>
        </span>
      </footer>
    </div>
  );
}

export default App;
