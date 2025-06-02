// App.js
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import CursorTrail from "./CursorTrail";
import Bio from "./Bio";
import Projects from "./Projects";
import Resume from "./Resume";
import Archive from "./Archive";
import ArchiveCardGames from "./ArchiveCardGames";
import ArchiveRecipes from "./ArchiveRecipes";
import ArchiveMedia from "./ArchiveMedia";
import ArchiveNotes from "./ArchiveNotes";
import ArchiveBookmarks from "./ArchiveBookmarks";
import CustomCursor from './CustomCursor';
import "./App.scss";

const TERMINAL_OPTIONS = [
  { label: "bio", display: "bio" },
  { label: "projects", display: "projects" },
  { label: "resume", display: "resume" },
  { label: "archive", display: "archive" },
];

const ARCHIVE_SECTIONS = [
  "cardgames",
  "recipes", 
  "media",
  "notes",
  "bookmarks"
];

function useCursorEnlargeOnClick() {
  useEffect(() => {
    const handleClick = () => {
      document.body.classList.add('cursor-enlarge');
      setTimeout(() => {
        document.body.classList.remove('cursor-enlarge');
      }, 180); // Match animation duration in SCSS
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);
}

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
  const audioRef = useRef(null);

  useCursorEnlargeOnClick();

  useEffect(() => {
    if (!entered && audioRef.current) {
      audioRef.current.volume = 0.15; // Set wind audio to 25% volume
      audioRef.current.play();
    } else if (entered && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [entered]);

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
      phwipRef.current.volume = 0.05; // Much quieter swap sound
      phwipRef.current.currentTime = 0;
      phwipRef.current.play();
    }
  }, [location.pathname]);

  // Add background music (within.mp3) looped, play/pause based on user interaction
  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.volume = 0.15; // Subtle volume
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
      const val = terminalValue.trim().toLowerCase();      if (val === "ls") {
        setOutput((prev) => [...prev, { type: 'cmd', value: 'ls', output: TERMINAL_OPTIONS.map(opt => opt.label) }]);
        setTerminalValue("");
        setSelected(null);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
        }, 0);
      } else if (val === "ls archive") {
        setOutput((prev) => [...prev, { type: 'cmd', value: 'ls archive', output: ARCHIVE_SECTIONS }]);
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
        }, 0);      } else if (val === "help") {
        setOutput((prev) => [
          ...prev,
          {
            type: 'cmd',
            value: 'help',
            output: [
              'ls',
              'ls archive',
              'cat [section]',
              'cat archive/[section]',
              'help',
              'clear'
            ]
          }
        ]);
        setTerminalValue("");
        setSelected(null);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
        }, 0);      } else if (["cat bio", "cat projects", "cat resume", "cat archive"].includes(val)) {
        const route = val.replace("cat ", "");
        setOutput((prev) => [...prev, { type: 'cmd', value: val }]);
        setTerminalValue("");
        setSelected(null);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
          navigate(`/${route}`);
        }, 0);
      } else if (val.startsWith("cat archive/")) {
        const section = val.replace("cat archive/", "");
        if (ARCHIVE_SECTIONS.includes(section)) {
          setOutput((prev) => [...prev, { type: 'cmd', value: val }]);
          setTerminalValue("");
          setSelected(null);
          setTimeout(() => {
            if (inputRef.current) inputRef.current.innerText = "";
            navigate(`/archive/${section}`);
          }, 0);
        } else {
          setOutput((prev) => [
            ...prev,
            {
              type: 'cmd',
              value: val,
              output: `archive section "${section}" not found. Use 'ls archive' to see available sections.`
            }
          ]);
          setTerminalValue("");
          setSelected(null);
          setTimeout(() => {
            if (inputRef.current) inputRef.current.innerText = "";
          }, 0);
        }
      } else if (val === "cat") {
        setOutput((prev) => [
          ...prev,
          {
            type: 'cmd',
            value: val,
            output: "Usage: cat [section] or cat archive/[section]"
          }
        ]);
        setTerminalValue("");
        setSelected(null);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.innerText = "";
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
      <CustomCursor />
      <audio ref={phwipRef} src={import.meta.env.BASE_URL + 'assets/swap.mp3'} preload="auto" />
      <audio ref={musicRef} src={import.meta.env.BASE_URL + 'assets/within.mp3'} preload="auto" loop style={{ display: 'none' }} />
      <audio ref={audioRef} src={import.meta.env.BASE_URL + 'assets/wind.mp3'} loop autoPlay={!entered} style={{ display: 'none' }} />
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
                  {!entered && <img className="lain-img" src={import.meta.env.BASE_URL + 'assets/lain.gif'} alt="Lain" />}
                  {!entered && (
                    <button className="enter-btn gothic-text" onMouseDown={playSwap} onClick={() => setEntered(true)}>[enter]</button>
                  )}
                  {entered && (
                    <div className="terminal-container" onClick={() => {
                      if (inputRef.current) {
                        inputRef.current.focus();
                        // Place caret at end
                        const el = inputRef.current;
                        const range = new Range();
                        range.selectNodeContents(el);
                        range.collapse(false);
                        const sel = window.getSelection();
                        sel.removeAllRanges();
                        sel.addRange(range);
                      }
                    }}>
                      <div className="pixel-stream-bg"></div>
                      <div className="terminal-inner" ref={terminalInnerRef}>
                        {/* Output history, each command and its output (if any) */}
                        {output.map((line, idx) => (
                          <React.Fragment key={idx}>
                            <div className="terminal-row">
                              <span className="terminal-user">
                                zoey<span className="at-symbol">@</span>wired
                              </span>
                              <span className="terminal-prompt flicker">&gt;</span>
                              <span className="terminal-input-history">
                                <span className="cmd">{line.value}</span>
                              </span>
                            </div>
                            {/* Only render output line for ls, help, and error commands, or for cat usage error */}
                            {line.output && (
                              (line.value === 'ls' || line.value === 'ls archive' || line.value === 'help' || line.value.startsWith('command not found:') || line.output.toString().includes('is not a command') || line.output.toString().includes('not found')) ? (
                                <div className="terminal-row">
                                  <span className="terminal-user" style={{visibility:'hidden'}}><span className="footer-email">zoey<span className="at-symbol">@</span>wired</span></span>
                                  <span className="terminal-prompt flicker" style={{visibility:'hidden'}}>&gt;</span>
                                  <span className={line.value === 'ls' || line.value === 'ls archive' ? 'ls-list' : line.value === 'help' ? 'help-list' : 'error'}>
                                    {/* Highlight commands in output */}
                                    {Array.isArray(line.output)
                                      ? (line.value === 'ls' || line.value === 'ls archive') ? (
                                          <div className="ls-items">
                                            {line.output.map((item, i) => (
                                              <span key={i} className="ls-item">{item}</span>
                                            ))}
                                          </div>
                                        ) : (
                                          line.output.map((l, i) =>
                                            typeof l === 'string' && (l.includes('ls') || l.includes('help') || l.includes('clear') || l.includes('cat') || l.includes('archive')) ? (
                                              <div key={i} dangerouslySetInnerHTML={{__html: l.replace(/(ls|help|clear|cat \[?\w*\/?\w*\]?|archive)/g, '<span class="cmd-accent">$1</span>')}} />
                                            ) : (
                                              <div key={i}>{l}</div>
                                            )
                                          )
                                        )
                                      : typeof line.output === 'string' && (line.output.includes('ls') || line.output.includes('help') || line.output.includes('clear') || line.output.includes('cat') || line.output.includes('archive')) ? (
                                          <span dangerouslySetInnerHTML={{__html: line.output.replace(/(ls|help|clear|cat \[?\w*\/?\w*\]?|archive)/g, '<span class="cmd-accent">$1</span>')}} />
                                        ) : (
                                          line.output
                                        )}
                                  </span>
                                </div>
                              ) : line.value === 'cat' ? (
                                <div className="terminal-row">
                                  <span className="terminal-user" style={{visibility:'hidden'}}><span className="footer-email">zoey<span className="at-symbol">@</span>wired</span></span>
                                  <span className="terminal-prompt flicker" style={{visibility:'hidden'}}>&gt;</span>
                                  <span className="error">{line.output}</span>
                                </div>
                              ) : null
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
        />        <Route path="/bio" element={<PageLayout playSwap={playSwap}><Bio /></PageLayout>} />
        <Route path="/projects" element={<PageLayout playSwap={playSwap}><Projects /></PageLayout>} />
        <Route path="/resume" element={<PageLayout playSwap={playSwap}><Resume /></PageLayout>} />
        <Route path="/archive" element={<PageLayout playSwap={playSwap}><Archive playSwap={playSwap} /></PageLayout>} />
        <Route path="/archive/cardgames" element={<PageLayout playSwap={playSwap}><ArchiveCardGames /></PageLayout>} />
        <Route path="/archive/recipes" element={<PageLayout playSwap={playSwap}><ArchiveRecipes /></PageLayout>} />
        <Route path="/archive/media" element={<PageLayout playSwap={playSwap}><ArchiveMedia /></PageLayout>} />
        <Route path="/archive/notes" element={<PageLayout playSwap={playSwap}><ArchiveNotes /></PageLayout>} />
        <Route path="/archive/bookmarks" element={<PageLayout playSwap={playSwap}><ArchiveBookmarks /></PageLayout>} />
      </Routes>
    </>
  );
}

// ==================================
// CYBERIA SITE PAGE LAYOUT COMPONENT
// ==================================
//
// PageLayout is a minimal wrapper for all non-landing pages.
// - Renders the Navi header, cursor trail, header, children, and footer.
// - Preloads all major assets (images, fonts, audio, PDF) for instant navigation.
// - Passes playSwap to children for consistent sound effects.
// - All layout and sizing is handled by SCSS for consistency.
function PageLayout({ children, playSwap }) {
  // Preload all major assets for instant navigation
  useEffect(() => {
    const assets = [
      'assets/navi.png',
      'assets/lain.gif',
      'assets/static.gif',
      'assets/typewriter.ttf',
      'assets/swap.mp3',
      'assets/within.mp3',
      'assets/Zoey-Vo-Resume-2025.png',
      'assets/cursor.cur'
      // Removed 'assets/favicon.jpg' since favicon is served from root, not assets
    ];
    assets.forEach(asset => {
      const ext = asset.split('.').pop();
      if (["png", "gif", "jpg", "jpeg", "cur"].includes(ext)) {
        const img = new window.Image();
        img.src = import.meta.env.BASE_URL + asset;
      } else if (["mp3", "wav", "ogg"].includes(ext)) {
        const audio = new window.Audio();
        audio.src = import.meta.env.BASE_URL + asset;
      } else if (["ttf", "woff", "woff2", "otf"].includes(ext)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.href = import.meta.env.BASE_URL + asset;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
  }, []);
  // Preload Navi image for instant display
  useEffect(() => {
    const naviImg = new window.Image();
    naviImg.src = import.meta.env.BASE_URL + 'assets/navi.png';
  }, []);
  return (
    <div className="cyberia-root">
      {/* Navi header bar with pixel-art icon */}
      <div className="header-navi">
        <div className="navi-img-wrapper">
          <img
            className="navi-img"
            src={import.meta.env.BASE_URL + 'assets/navi.png'}
            alt="Navi icon"
          />
        </div>
      </div>
      <CursorTrail />
      <header className="header"></header>
      {children}
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
  );
}

export default App;
