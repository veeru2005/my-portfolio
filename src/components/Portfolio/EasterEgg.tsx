import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
];

const COMMANDS: Record<string, string[]> = {
  help: [
    'Available commands:',
    '  help     — Show this help message',
    '  about    — Fun facts about me',
    '  skills   — My skill levels',
    '  projects — Project count',
    '  hire     — Let\'s work together',
    '  clear    — Clear terminal',
    '  exit     — Close terminal',
  ],
  about: [
    '┌──────────────────────────────────┐',
    '│  🧑‍💻 Veerendra Chowdary           │',
    '│  📍 Rajahmundry, India           │',
    '│  🎓 B.Tech CSE @ KL University   │',
    '│  ☕ Coffee consumed: 1000+ cups   │',
    '│  🐛 Bugs fixed: countless        │',
    '│  🌙 Preferred mode: Dark Mode    │',
    '│  🎮 Fun fact: Konami code finder │',
    '└──────────────────────────────────┘',
  ],
  skills: [
    'Skill Proficiency:',
    '  React       ████████████████████ 95%',
    '  TypeScript  ██████████████████░░ 90%',
    '  Node.js     █████████████████░░░ 85%',
    '  MongoDB     ████████████████░░░░ 80%',
    '  Docker      ██████████████░░░░░░ 70%',
    '  UI/UX       ██████████████████░░ 90%',
    '  AWS/Cloud   ████████████░░░░░░░░ 60%',
  ],
  projects: [
    '📊 Project Stats:',
    '  Live Projects:   3',
    '  Total Commits:   500+',
    '  Lines of Code:   50,000+',
    '  Certifications:  6',
    '  Happy Clients:   3',
  ],
};

const EasterEgg: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [konamiProgress, setKonamiProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Listen for Konami code
  useEffect(() => {
    let progress = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen) return; // Don't listen when terminal is open

      if (e.code === KONAMI_CODE[progress]) {
        progress++;
        setKonamiProgress(progress);
        if (progress === KONAMI_CODE.length) {
          setIsOpen(true);
          setLines([
            '╔══════════════════════════════════════╗',
            '║  🎮 Secret Terminal Activated!        ║',
            '║  You found the easter egg!            ║',
            '║  Type "help" for available commands   ║',
            '╚══════════════════════════════════════╝',
            '',
          ]);
          progress = 0;
          setKonamiProgress(0);
        }
      } else {
        progress = 0;
        setKonamiProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  const handleCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines = [`$ ${cmd}`];

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    if (trimmed === 'exit') {
      setIsOpen(false);
      setLines([]);
      return;
    }

    if (trimmed === 'hire') {
      newLines.push('Redirecting to contact section... 🚀');
      setLines((prev) => [...prev, ...newLines]);
      setTimeout(() => {
        setIsOpen(false);
        const el = document.getElementById('contact');
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 84;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 800);
      return;
    }

    if (COMMANDS[trimmed]) {
      newLines.push(...COMMANDS[trimmed]);
    } else if (trimmed === '') {
      // Empty command, just add the prompt
    } else {
      newLines.push(`Command not found: ${trimmed}. Type "help" for available commands.`);
    }

    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 32 },
        right: { xs: 16, md: 32 },
        width: { xs: 'calc(100% - 32px)', sm: 480 },
        maxHeight: { xs: '60vh', md: 420 },
        borderRadius: '12px',
        border: '1px solid #22c55e',
        bgcolor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 25px 60px rgba(0,0,0,0.7), 0 0 30px rgba(34,197,94,0.15)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        animation: 'terminalSlideIn 0.3s ease-out',
      }}
    >
      {/* Title Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          bgcolor: 'rgba(34,197,94,0.1)',
          borderBottom: '1px solid rgba(34,197,94,0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#f59e0b' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#22c55e' }} />
        </Box>
        <Typography sx={{ color: '#22c55e', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'monospace' }}>
          veerendra@portfolio ~ %
        </Typography>
        <IconButton
          onClick={() => setIsOpen(false)}
          aria-label="Close terminal"
          sx={{ color: '#666', p: 0.5, '&:hover': { color: '#ef4444' } }}
        >
          <CloseIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>

      {/* Terminal Body */}
      <Box
        ref={terminalRef}
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          fontFamily: '"SF Mono", "Fira Code", "Cascadia Code", monospace',
          fontSize: '0.82rem',
          lineHeight: 1.7,
          '&::-webkit-scrollbar': { width: 4 },
          '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(34,197,94,0.3)', borderRadius: 2 },
        }}
      >
        {lines.map((line, i) => (
          <Typography
            key={i}
            component="pre"
            sx={{
              color: line.startsWith('$') ? '#22c55e' : '#d4d4d4',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              lineHeight: 'inherit',
              m: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {line}
          </Typography>
        ))}

        {/* Input Line */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
          <Typography sx={{ color: '#22c55e', fontFamily: 'inherit', fontSize: 'inherit', flexShrink: 0 }}>
            $
          </Typography>
          <Box
            component="input"
            ref={inputRef}
            value={currentInput}
            onChange={(e: any) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{
              flex: 1,
              border: 'none',
              outline: 'none',
              bgcolor: 'transparent',
              color: '#d4d4d4',
              fontFamily: '"SF Mono", "Fira Code", "Cascadia Code", monospace',
              fontSize: '0.82rem',
              lineHeight: 1.7,
              caretColor: '#22c55e',
              '&::placeholder': { color: '#555' },
            }}
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
          />
        </Box>
      </Box>

      {/* Hint */}
      <Box sx={{ px: 2, py: 0.8, borderTop: '1px solid rgba(34,197,94,0.1)', bgcolor: 'rgba(0,0,0,0.5)' }}>
        <Typography sx={{ color: '#555', fontSize: '0.68rem', fontFamily: 'monospace' }}>
          Press ESC to close • Type "help" for commands
        </Typography>
      </Box>

      <style>{`
        @keyframes terminalSlideIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </Box>
  );
};

export default EasterEgg;
