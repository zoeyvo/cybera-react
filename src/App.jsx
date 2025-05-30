// App.js
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import CursorTrail from "./CursorTrail";
import Bio from "./Bio";
import Projects from "./Projects";
import Resume from "./Resume";
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
  const [output, setOutput] = useState([]); // Store terminal output lines
  const inputRef = useRef(null);
  const terminalInnerRef = useRef(null); // Add ref for terminal-inner
  const navigate = useNavigate();
  const location = useLocation();
  const phwipRef = useRef(null);
  const musicRef = useRef(null);

  // Ensure input is always focusable and editable
  useEffect(() => {
    if (entered && inputRef.current) {
      inputRef.current.focus();
      // Place caret at end
      const el = inputRef.current;
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, [entered, output]);

  // Scroll to bottom when output changes (after Enter)
  useEffect(() => {
    if (entered && terminalInnerRef.current) {
      terminalInnerRef.current.scrollTop = terminalInnerRef.current.scrollHeight;
    }
  }, [output, entered]);

  // Play swap.mp3 on page swap (route change)
  useEffect(() => {
    if (phwipRef.current) {
      phwipRef.current.volume = 0.08; // Much quieter swap sound
      phwipRef.current.currentTime = 0;
      phwipRef.current.play();
    }
  }, [location.pathname]);

  // Add background music (within.mp3) looped, play/pause based on user interaction
  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.volume = 0.18; // Subtle volume
      musicRef.current.loop = true;
      // Only play after user has entered (interacted)
      if (entered) {
        musicRef.current.play().catch(() => {});
      } else {
        musicRef.current.pause();
        musicRef.current.currentTime = 0;
      }
    }
  }, [entered, location.pathname]);

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

  // Play swap.mp3 on link/button press (use only swap.mp3 everywhere)
  const playSwap = () => {
    if (phwipRef.current) {
      phwipRef.current.volume = 0.08; // Much quieter swap sound
      phwipRef.current.currentTime = 0;
      phwipRef.current.play();
    }
  };

  const handleTerminalKeyDown = (e) => {
    if (e.key === "Enter") {
      const val = terminalValue.trim().toLowerCase();
      if (val === "ls") {
        setOutput((prev) => [...prev, { type: 'cmd', value: 'ls', output: TERMINAL_OPTIONS.map(opt => opt.label).join('    ') }]);
        setTerminalValue("");
        setSelected(null);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
        }, 0);
      } else if (val === "clear") {
        setOutput([]);
        setTerminalValue("");
        setSelected(null);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
        }, 0);
      } else if (val === "help") {
        setOutput((prev) => [
          ...prev,
          {
            type: 'cmd',
            value: 'help',
            output: [
              'Available commands:',
              'ls - list available sections',
              'cat [section] - view a section (bio, projects, resume)',
              'help - show this help message',
              'clear - clear the terminal'
            ]
          }
        ]);
        setTerminalValue("");
        setSelected(null);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
        }, 0);
      } else if (["cat bio", "cat projects", "cat resume"].includes(val)) {
        const route = val.replace("cat ", "");
        setOutput((prev) => [...prev, { type: 'cmd', value: val }]);
        setTerminalValue("");
        setSelected(null);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
          navigate(`/${route}`);
        }, 0);
      } else if (TERMINAL_OPTIONS.some(opt => opt.label === val)) {
        setOutput((prev) => [...prev, { type: 'cmd', value: val }]);
        setSelected(val);
        setTerminalValue("");
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
        }, 0);
      } else if (val.length > 0) {
        setOutput((prev) => [
          ...prev,
          {
            type: 'cmd',
            value: val,
            output: `"${val}" is not a command. Use 'help' for a list of commands.`
          }
        ]);
        setTerminalValue("");
        setSelected(null);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
        }, 0);
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

  return (
    <>
      <audio ref={phwipRef} src="/assets/swap.mp3" preload="auto" />
      <audio ref={musicRef} src="/assets/within.mp3" preload="auto" loop style={{ display: 'none' }} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="cyberia-root">
              <CursorTrail />
              <header className="header"></header>
              <div className="grid-cell cell1">
                {/* Row 1: (empty or for future use) */}
                <div className="row1" />
                {/* Row 2: Main content (Lain image/button or terminal) */}
                <div className="row2">
                  {!entered && <img src="/assets/lain.gif" alt="Lain" />}
                  {!entered && (
                    <button className="enter-btn gothic-text" onMouseDown={playSwap} onClick={() => setEntered(true)}>[enter]</button>
                  )}
                  {entered && (
                    <div className="terminal-container">
                      <div className="pixel-stream-bg"></div>
                      <div className="terminal-inner" ref={terminalInnerRef}>
                        {/* Make the input area cover the whole terminal-inner for easier clicking */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: 2,
                            cursor: 'text',
                            background: 'transparent',
                          }}
                          onClick={() => {
                            if (inputRef.current) {
                              inputRef.current.focus();
                              // Place caret at end
                              const el = inputRef.current;
                              const range = document.createRange();
                              range.selectNodeContents(el);
                              range.collapse(false);
                              const sel = window.getSelection();
                              sel.removeAllRanges();
                              sel.addRange(range);
                            }
                          }}
                        />
                        {/* Output history, each command and its output (if any) */}
                        {output.map((line, idx) => (
                          <React.Fragment key={idx}>
                            <div className="terminal-row">
                              <span className="terminal-user">
                                zoey<span className="at-symbol">@</span>wired
                              </span>
                              <span className="terminal-prompt flicker">&gt;</span>
                              <span className="terminal-output-line">
                                <span className="cmd">{line.value}</span>
                              </span>
                            </div>
                            {/* Only render output line for ls, help, and error commands */}
                            {line.output && (line.value === 'ls' || line.value === 'help' || line.value.startsWith('command not found:') || line.output.toString().includes('is not a command')) && (
                              <div className="terminal-row">
                                <span className="terminal-user" style={{visibility:'hidden'}}><span className="footer-email">zoey<span className="at-symbol">@</span>wired</span></span>
                                <span className="terminal-prompt flicker" style={{visibility:'hidden'}}>&gt;</span>
                                <span className={line.value === 'ls' ? 'ls-list' : line.value === 'help' ? 'help-list' : 'error'}>
                                  {Array.isArray(line.output)
                                    ? line.output.map((l, i) => <div key={i}>{l}</div>)
                                    : line.output}
                                </span>
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                        {/* Input row */}
                        <div className="terminal-row">
                          <span className="terminal-user">
                            zoey<span className="at-symbol">@</span>wired
                          </span>
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
                            onClick={e => {
                              // Place caret at end on click
                              const el = e.currentTarget;
                              const range = new Range();
                              range.selectNodeContents(el);
                              range.collapse(false);
                              const sel = window.getSelection();
                              sel.removeAllRanges();
                              sel.addRange(range);
                            }}
                            style={{flex: 1, minWidth: 0, display: 'inline-block'}}
                          />
                          {terminalValue.length > 0 && (
                            <span className="terminal-cursor blink" style={{ left: 'auto', color: '#b57edc', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', fontWeight: 'bold', padding: '0 1px', marginLeft: '-2px', position: 'relative' }}>
                              {terminalValue[caretPos] || ' '}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Row 3: (empty or for future use) */}
                <div className="row3" />
              </div>
              <footer className="footer">
                <span>
                  <a href="https://github.com/zoeyvo" target="_blank" rel="noopener noreferrer" onClick={playSwap}>github.com/zoeyvo</a>
                  {" | "}
                  <a href="https://www.linkedin.com/in/zoeyvo" target="_blank" rel="noopener noreferrer" onClick={playSwap}>linkedin.com/in/zoeyvo</a>
                  {" | "}
                  <span className="footer-email" title="Email (obfuscated)">zoeyvo256<span className="at-symbol">@</span>gmail.com</span>
                </span>
              </footer>
            </div>
          }
        />
        <Route path="/bio" element={<PageLayout playSwap={playSwap}><Bio /></PageLayout>} />
        <Route path="/projects" element={<PageLayout playSwap={playSwap}><Projects /></PageLayout>} />
        <Route path="/resume" element={<PageLayout playSwap={playSwap}><Resume /></PageLayout>} />
      </Routes>
    </>
  );
}

// Minimal layout for blank pages
function PageLayout({ children, playSwap }) {
  return (
    <div className="cyberia-root">
      <div className="header-navi">
        <img src="/assets/navi.png" alt="Navi icon" />
      </div>
      <CursorTrail />
      <header className="header"></header>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { playSwap })
          : child
      )}
      <footer className="footer">
        <span>
          <a href="https://github.com/zoeyvo" target="_blank" rel="noopener noreferrer" onClick={playSwap}>github.com/zoeyvo</a>
          {"  |  "}
          <a href="https://www.linkedin.com/in/zoeyvo" target="_blank" rel="noopener noreferrer" onClick={playSwap}>linkedin.com/in/zoeyvo</a>
          {"  |  "}
          <span className="footer-email" title="Email (obfuscated)">zoeyvo256<span className="at-symbol">@</span>gmail.com</span>
        </span>
      </footer>
      {/* Preload assets for desktop/project frame and icons on all non-landing pages */}
      <div style={{ display: 'none' }}>
        <img src="/assets/whiteboard-frame.png" alt="preload whiteboard frame" />
        <img src="/assets/hands.gif" alt="preload hands" />
        <img src="/assets/static.gif" alt="preload static" />
        <img src="/assets/tv_static.gif" alt="preload tv static" />
        <img src="/assets/navi.png" alt="preload navi" />
        <img src="/assets/lain.gif" alt="preload lain" />
        <link rel="preload" href="/assets/typewriter.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/OldEnglishGothicPixelRegular-gx1jp.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <audio src="/assets/supernova.mp3" preload="auto" />
        <link rel="preload" href="/assets/Zoey%20Vo%20Resume%202025.pdf" as="document" type="application/pdf" crossOrigin="anonymous" />
      </div>
    </div>
  );
}

export default App;
