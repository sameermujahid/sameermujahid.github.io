import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArcadePage,
  ArcadeHeader,
  GameGrid,
  GameCard,
  GameIcon,
  GameTitle,
  GameDescription,
  BackButton,
  GameShell,
  GameWrapper,
  GameHeader,
  GameBoard,
  ScoreBar,
  ActionButton,
  SnakeCell,
  GameOverlay,
  Grid2048,
  Tile2048,
  ReactionArea,
  MemoryGrid,
  MemoryCard,
  TypingArea,
  TypingText,
  TypingInput,
  StatusMessage,
} from './Fun.styles';

import InteractiveEyes from '../Eye';

/* ================================================================
   HELPERS
================================================================ */

const randomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const shuffle = (array) => {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [
      result[j],
      result[i],
    ];
  }

  return result;
};

/* ================================================================
   GAMES
================================================================ */

const GAMES = [
  {
    id: 'snake',
    icon: '🐍',
    title: 'Snake',
    description: 'Eat. Grow. Survive.',
  },
  {
    id: '2048',
    icon: '🔢',
    title: '2048',
    description: 'Merge your way to 2048.',
  },
  {
    id: 'reaction',
    icon: '⚡',
    title: 'Reaction',
    description: 'How fast are you?',
  },
  {
    id: 'memory',
    icon: '🧠',
    title: 'Memory',
    description: 'Find all the pairs.',
  },
  {
    id: 'typing',
    icon: '⌨️',
    title: 'Typing',
    description: 'How fast can you type?',
  },
];

/* ================================================================
   SNAKE
================================================================ */

function SnakeGame() {
  const SIZE = 20;

  const createInitialSnake = useCallback(
    () => [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ],
    [],
  );

  const createFood = useCallback((snake) => {
    const available = [];

    for (let y = 0; y < SIZE; y += 1) {
      for (let x = 0; x < SIZE; x += 1) {
        const occupied = snake.some(
          (part) =>
            part.x === x &&
            part.y === y,
        );

        if (!occupied) {
          available.push({ x, y });
        }
      }
    }

    return available.length
      ? randomItem(available)
      : null;
  }, []);

  const [snake, setSnake] = useState(
    createInitialSnake,
  );

  const [food, setFood] = useState(() =>
    createFood(createInitialSnake()),
  );

  const [direction, setDirection] = useState({
    x: 1,
    y: 0,
  });

  const directionRef = useRef({
    x: 1,
    y: 0,
  });

  const queuedDirectionRef = useRef({
    x: 1,
    y: 0,
  });

  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const reset = useCallback(() => {
    const initial = createInitialSnake();

    const initialDirection = {
      x: 1,
      y: 0,
    };

    setSnake(initial);
    setFood(createFood(initial));
    setDirection(initialDirection);

    directionRef.current =
      initialDirection;

    queuedDirectionRef.current =
      initialDirection;

    setScore(0);
    setGameOver(false);
    setRunning(true);
  }, [
    createFood,
    createInitialSnake,
  ]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key =
        event.key.toLowerCase();

      const directions = {
        arrowup: {
          x: 0,
          y: -1,
        },

        w: {
          x: 0,
          y: -1,
        },

        arrowdown: {
          x: 0,
          y: 1,
        },

        s: {
          x: 0,
          y: 1,
        },

        arrowleft: {
          x: -1,
          y: 0,
        },

        a: {
          x: -1,
          y: 0,
        },

        arrowright: {
          x: 1,
          y: 0,
        },

        d: {
          x: 1,
          y: 0,
        },
      };

      const next =
        directions[key];

      if (!next) return;

      event.preventDefault();

      const current =
        directionRef.current;

      if (
        next.x === -current.x &&
        next.y === -current.y
      ) {
        return;
      }

      queuedDirectionRef.current =
        next;

      setRunning(true);
    };

    window.addEventListener(
      'keydown',
      handleKeyDown,
    );

    return () =>
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
  }, []);

  useEffect(() => {
    if (!running || gameOver) {
      return undefined;
    }

    const speed = Math.max(
      58,
      125 - score * 2,
    );

    const timer =
      window.setInterval(() => {
        setSnake((currentSnake) => {
          const currentDirection =
            directionRef.current;

          const requested =
            queuedDirectionRef.current;

          if (
            !(
              requested.x ===
                -currentDirection.x &&
              requested.y ===
                -currentDirection.y
            )
          ) {
            directionRef.current =
              requested;
          }

          const nextDirection =
            directionRef.current;

          setDirection(
            nextDirection,
          );

          const head =
            currentSnake[0];

          const newHead = {
            x:
              head.x +
              nextDirection.x,

            y:
              head.y +
              nextDirection.y,
          };

          if (
            newHead.x < 0 ||
            newHead.x >= SIZE ||
            newHead.y < 0 ||
            newHead.y >= SIZE
          ) {
            setGameOver(true);
            setRunning(false);

            return currentSnake;
          }

          const eating =
            food &&
            newHead.x === food.x &&
            newHead.y === food.y;

          const body = eating
            ? currentSnake
            : currentSnake.slice(0, -1);

          const collision =
            body.some(
              (part) =>
                part.x === newHead.x &&
                part.y === newHead.y,
            );

          if (collision) {
            setGameOver(true);
            setRunning(false);

            return currentSnake;
          }

          const updatedSnake = [
            newHead,
            ...body,
          ];

          if (eating) {
            setScore(
              (value) => value + 1,
            );

            setFood(
              createFood(updatedSnake),
            );
          }

          return updatedSnake;
        });
      }, speed);

    return () =>
      window.clearInterval(timer);
  }, [
    createFood,
    food,
    gameOver,
    running,
    score,
  ]);

  const snakeSet = useMemo(
    () =>
      new Set(
        snake.map(
          (part) =>
            `${part.x}-${part.y}`,
        ),
      ),
    [snake],
  );

  return (
    <GameWrapper>
      <GameHeader>
        <div>
          <h2>🐍 Snake</h2>

          <ScoreBar>
            Score {score}
          </ScoreBar>
        </div>

        <ActionButton onClick={reset}>
          {gameOver
            ? 'Play Again'
            : 'Start'}
        </ActionButton>
      </GameHeader>

      <GameBoard aria-label="Snake game board">
        {Array.from(
          {
            length:
              SIZE * SIZE,
          },
          (_, index) => {
            const x =
              index % SIZE;

            const y =
              Math.floor(
                index / SIZE,
              );

            const isSnake =
              snakeSet.has(
                `${x}-${y}`,
              );

            const isHead =
              snake[0]?.x === x &&
              snake[0]?.y === y;

            const isFood =
              food?.x === x &&
              food?.y === y;

            return (
              <SnakeCell
                key={index}
                $snake={isSnake}
                $head={isHead}
                $food={isFood}
              />
            );
          },
        )}

        {gameOver && (
          <GameOverlay>
            <div>
              <strong>
                GAME OVER
              </strong>

              <span>
                Score {score}
              </span>
            </div>
          </GameOverlay>
        )}
      </GameBoard>

      <p className="game-hint">
        WASD or arrow keys
      </p>
    </GameWrapper>
  );
}

/* ================================================================
   2048
================================================================ */

const create2048Tile = (
  value,
  x,
  y,
) => ({
  id: `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`,

  value,
  x,
  y,

  isNew: true,
  isMerged: false,
});

const add2048Tile = (tiles) => {
  const occupied = new Set(
    tiles.map(
      (tile) =>
        `${tile.x}-${tile.y}`,
    ),
  );

  const empty = [];

  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      if (
        !occupied.has(
          `${x}-${y}`,
        )
      ) {
        empty.push({ x, y });
      }
    }
  }

  if (!empty.length) {
    return tiles;
  }

  const position =
    randomItem(empty);

  return [
    ...tiles,

    create2048Tile(
      Math.random() < 0.9
        ? 2
        : 4,
      position.x,
      position.y,
    ),
  ];
};

const create2048Board = () => {
  const first =
    add2048Tile([]);

  return add2048Tile(first);
};

const has2048Moves = (
  tiles,
) => {
  if (tiles.length < 16) {
    return true;
  }

  const board = Array.from(
    { length: 4 },
    () => Array(4).fill(null),
  );

  tiles.forEach((tile) => {
    board[tile.y][tile.x] =
      tile.value;
  });

  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      const value =
        board[y][x];

      if (value == null) {
        return true;
      }

      if (
        x < 3 &&
        board[y][x + 1] === value
      ) {
        return true;
      }

      if (
        y < 3 &&
        board[y + 1][x] === value
      ) {
        return true;
      }
    }
  }

  return false;
};

function Game2048() {
  const [tiles, setTiles] =
    useState(create2048Board);

  const [score, setScore] =
    useState(0);

  const [won, setWon] =
    useState(false);

  const [gameOver, setGameOver] =
    useState(false);

  const move = useCallback(
    (direction) => {
      if (gameOver) {
        return;
      }

      setTiles(
        (currentTiles) => {
          const source =
            currentTiles.map(
              (tile) => ({
                ...tile,
                isNew: false,
                isMerged: false,
              }),
            );

          const horizontal =
            direction === 'left' ||
            direction === 'right';

          const positive =
            direction === 'right' ||
            direction === 'down';

          let gained = 0;
          let changed = false;

          const result = [];

          for (
            let line = 0;
            line < 4;
            line += 1
          ) {
            const ordered =
              source
                .filter(
                  (tile) =>
                    horizontal
                      ? tile.y === line
                      : tile.x === line,
                )
                .sort(
                  (a, b) => {
                    const aPosition =
                      horizontal
                        ? a.x
                        : a.y;

                    const bPosition =
                      horizontal
                        ? b.x
                        : b.y;

                    return positive
                      ? bPosition -
                          aPosition
                      : aPosition -
                          bPosition;
                  },
                );

            let target = 0;

            for (
              let i = 0;
              i < ordered.length;
              i += 1
            ) {
              const current =
                ordered[i];

              const previous =
                result[
                  result.length - 1
                ];

              const sameLine =
                previous &&
                (
                  horizontal
                    ? previous.y === line
                    : previous.x === line
                );

              if (
                previous &&
                sameLine &&
                previous.value ===
                  current.value &&
                !previous.isMerged
              ) {
                const mergedTile = {
                  ...previous,

                  value:
                    previous.value *
                    2,

                  isNew: false,
                  isMerged: true,
                };

                result[
                  result.length - 1
                ] = mergedTile;

                gained +=
                  mergedTile.value;

                changed = true;

                if (
                  mergedTile.value >=
                  2048
                ) {
                  setWon(true);
                }

                continue;
              }

              const targetPosition =
                positive
                  ? 3 - target
                  : target;

              const nextX =
                horizontal
                  ? targetPosition
                  : line;

              const nextY =
                horizontal
                  ? line
                  : targetPosition;

              if (
                nextX !== current.x ||
                nextY !== current.y
              ) {
                changed = true;
              }

              result.push({
                ...current,

                x: nextX,
                y: nextY,

                isNew: false,
                isMerged: false,
              });

              target += 1;
            }
          }

          if (!changed) {
            return currentTiles;
          }

          const nextTiles =
            add2048Tile(result);

          if (gained > 0) {
            setScore(
              (currentScore) =>
                currentScore +
                gained,
            );
          }

          setGameOver(
            !has2048Moves(
              nextTiles,
            ),
          );

          return nextTiles;
        },
      );
    },
    [gameOver],
  );

  useEffect(() => {
    const handleKey = (event) => {
      const key =
        typeof event.key === 'string'
          ? event.key.toLowerCase()
          : event.key;

      const keys = {
        arrowleft: 'left',
        a: 'left',

        arrowright: 'right',
        d: 'right',

        arrowup: 'up',
        w: 'up',

        arrowdown: 'down',
        s: 'down',
      };

      const direction =
        keys[key];

      if (!direction) {
        return;
      }

      event.preventDefault();

      move(direction);
    };

    window.addEventListener(
      'keydown',
      handleKey,
      {
        passive: false,
      },
    );

    return () =>
      window.removeEventListener(
        'keydown',
        handleKey,
      );
  }, [move]);

  const reset = useCallback(() => {
    setTiles(
      create2048Board(),
    );

    setScore(0);
    setWon(false);
    setGameOver(false);
  }, []);

  return (
    <GameWrapper>
      <GameHeader>
        <div>
          <h2>🔢 2048</h2>

          <ScoreBar>
            Score {score}
          </ScoreBar>
        </div>

        <ActionButton onClick={reset}>
          New Game
        </ActionButton>
      </GameHeader>

      <Grid2048
        aria-label="2048 game board"
        role="application"
      >
        {Array.from(
          { length: 16 },
          (_, index) => (
            <div
              className="grid-cell"
              key={index}
            />
          ),
        )}

        {tiles.map((tile) => (
          <Tile2048
            key={tile.id}
            $value={tile.value}
            $x={tile.x}
            $y={tile.y}
            $new={tile.isNew}
            $merged={tile.isMerged}
          >
            {tile.value}
          </Tile2048>
        ))}

        {(won || gameOver) && (
          <GameOverlay>
            <div>
              <strong>
                {won
                  ? '2048 REACHED'
                  : 'NO MOVES'}
              </strong>

              <span>
                {won
                  ? 'Keep going.'
                  : 'Start a new game.'}
              </span>

              <ActionButton
                onClick={reset}
              >
                New Game
              </ActionButton>
            </div>
          </GameOverlay>
        )}
      </Grid2048>

      <p className="game-hint">
        WASD or arrow keys
      </p>
    </GameWrapper>
  );
}

/* ================================================================
   REACTION
================================================================ */

function ReactionTest() {
  const [state, setState] =
    useState('idle');

  const [startTime, setStartTime] =
    useState(null);

  const [result, setResult] =
    useState(null);

  const timerRef = useRef(null);

  const start = useCallback(() => {
    window.clearTimeout(
      timerRef.current,
    );

    setState('waiting');
    setResult(null);
    setStartTime(null);

    const delay =
      1400 +
      Math.random() * 3200;

    timerRef.current =
      window.setTimeout(() => {
        setStartTime(
          performance.now(),
        );

        setState('ready');
      }, delay);
  }, []);

  const click = () => {
    if (state === 'waiting') {
      window.clearTimeout(
        timerRef.current,
      );

      setState('idle');
      setResult('Too soon.');

      return;
    }

    if (state !== 'ready') {
      return;
    }

    setResult(
      Math.round(
        performance.now() -
          startTime,
      ),
    );

    setState('result');
  };

  useEffect(() => {
    return () =>
      window.clearTimeout(
        timerRef.current,
      );
  }, []);

  return (
    <GameWrapper>
      <GameHeader>
        <div>
          <h2>
            ⚡ Reaction Test
          </h2>
        </div>

        <ActionButton onClick={start}>
          Start
        </ActionButton>
      </GameHeader>

      <ReactionArea
        $ready={state === 'ready'}
        onClick={click}
      >
        {state === 'idle' &&
          'Click START to begin'}

        {state === 'waiting' &&
          'WAIT…'}

        {state === 'ready' &&
          'CLICK!'}

        {state === 'result' &&
          `${result} ms`}
      </ReactionArea>

      {typeof result ===
        'number' && (
        <StatusMessage>
          Your reaction time:{' '}
          {result} ms
        </StatusMessage>
      )}

      {result ===
        'Too soon.' && (
        <StatusMessage>
          Too soon. Try again.
        </StatusMessage>
      )}
    </GameWrapper>
  );
}

/* ================================================================
   MEMORY
================================================================ */

function MemoryGame() {
  const icons = [
    '⚛️',
    '🐍',
    '⚡',
    '🧠',
    '💻',
    '🎨',
    '🚀',
    '🤖',
  ];

  const createCards =
    useCallback(
      () =>
        shuffle([
          ...icons,
          ...icons,
        ]).map(
          (icon, index) => ({
            id: index,
            icon,
            matched: false,
          }),
        ),
      [],
    );

  const [cards, setCards] =
    useState(createCards);

  const [flipped, setFlipped] =
    useState([]);

  const [moves, setMoves] =
    useState(0);

  const lockRef = useRef(false);

  const timeoutRef =
    useRef([]);

  const clearTimers = useCallback(
    () => {
      timeoutRef.current.forEach(
        (id) =>
          window.clearTimeout(id),
      );

      timeoutRef.current = [];
    },
    [],
  );

  useEffect(
    () => clearTimers,
    [clearTimers],
  );

  const handleCard = (
    index,
  ) => {
    if (
      lockRef.current ||
      flipped.length === 2 ||
      cards[index].matched ||
      flipped.includes(index)
    ) {
      return;
    }

    const next = [
      ...flipped,
      index,
    ];

    setFlipped(next);

    if (next.length !== 2) {
      return;
    }

    setMoves(
      (value) => value + 1,
    );

    const first =
      cards[next[0]];

    const second =
      cards[next[1]];

    lockRef.current = true;

    const delay =
      first.icon === second.icon
        ? 420
        : 760;

    const timer =
      window.setTimeout(() => {
        if (
          first.icon ===
          second.icon
        ) {
          setCards(
            (current) =>
              current.map(
                (card, i) =>
                  next.includes(i)
                    ? {
                        ...card,
                        matched: true,
                      }
                    : card,
              ),
          );
        }

        setFlipped([]);
        lockRef.current = false;
      }, delay);

    timeoutRef.current.push(
      timer,
    );
  };

  const reset = () => {
    clearTimers();

    lockRef.current = false;

    setCards(
      createCards(),
    );

    setFlipped([]);
    setMoves(0);
  };

  const complete =
    cards.every(
      (card) => card.matched,
    );

  return (
    <GameWrapper>
      <GameHeader>
        <div>
          <h2>🧠 Memory</h2>

          <ScoreBar>
            Moves {moves}
          </ScoreBar>
        </div>

        <ActionButton onClick={reset}>
          Restart
        </ActionButton>
      </GameHeader>

      <MemoryGrid>
        {cards.map(
          (card, index) => {
            const open =
              flipped.includes(
                index,
              ) ||
              card.matched;

            return (
              <MemoryCard
                key={card.id}
                $open={open}
                $matched={
                  card.matched
                }
                onClick={() =>
                  handleCard(
                    index,
                  )
                }
                aria-label={
                  open
                    ? `Card ${card.icon}`
                    : 'Hidden card'
                }
              >
                <span>
                  {open
                    ? card.icon
                    : '?'}
                </span>
              </MemoryCard>
            );
          },
        )}
      </MemoryGrid>

      {complete && (
        <StatusMessage>
          Memory mastered in{' '}
          {moves} moves.
        </StatusMessage>
      )}
    </GameWrapper>
  );
}

/* ================================================================
   TYPING
================================================================ */

function TypingTest() {
  const sentences = [
    'I build AI systems that solve actual problems.',
    'Great software is simple until it needs to scale.',
    'FastAPI React Python and AI are a powerful combination.',
    'The best code is the code that solves the right problem.',
    'Document intelligence turns unstructured data into useful information.',
  ];

  const [text, setText] =
    useState(() =>
      randomItem(sentences),
    );

  const [input, setInput] =
    useState('');

  const [started, setStarted] =
    useState(false);

  const [finished, setFinished] =
    useState(false);

  const [time, setTime] =
    useState(30);

  const [startTime, setStartTime] =
    useState(null);

  const reset = () => {
    setText(
      randomItem(sentences),
    );

    setInput('');
    setStarted(false);
    setFinished(false);
    setTime(30);
    setStartTime(null);
  };

  useEffect(() => {
    if (!started || finished) {
      return undefined;
    }

    const timer =
      window.setInterval(() => {
        setTime((value) => {
          if (value <= 1) {
            window.clearInterval(
              timer,
            );

            setFinished(true);

            return 0;
          }

          return value - 1;
        });
      }, 1000);

    return () =>
      window.clearInterval(
        timer,
      );
  }, [started, finished]);

  const handleInput = (
    event,
  ) => {
    const value =
      event.target.value;

    if (!started) {
      setStarted(true);

      setStartTime(
        performance.now(),
      );
    }

    setInput(value);

    if (value === text) {
      setFinished(true);
    }
  };

  const elapsed = startTime
    ? Math.max(
        1,
        (performance.now() -
          startTime) /
          1000,
      )
    : 30;

  const words = input.trim()
    ? input
        .trim()
        .split(/\s+/)
        .length
    : 0;

  const wpm = Math.round(
    words /
      (elapsed / 60),
  );

  let correct = 0;

  for (
    let i = 0;
    i < input.length;
    i += 1
  ) {
    if (
      input[i] === text[i]
    ) {
      correct += 1;
    }
  }

  const accuracy =
    input.length
      ? Math.round(
          (correct /
            input.length) *
            100,
        )
      : 100;

  return (
    <GameWrapper>
      <GameHeader>
        <div>
          <h2>
            ⌨️ Typing Test
          </h2>

          <ScoreBar>
            {time}s · {wpm} WPM ·{' '}
            {accuracy}% accuracy
          </ScoreBar>
        </div>

        <ActionButton onClick={reset}>
          Restart
        </ActionButton>
      </GameHeader>

      <TypingArea>
        <TypingText>
          {text}
        </TypingText>

        <TypingInput
          value={input}
          onChange={handleInput}
          disabled={finished}
          placeholder="Start typing…"
          autoFocus
          spellCheck={false}
        />
      </TypingArea>

      {finished && (
        <StatusMessage>
          Final: {wpm} WPM ·{' '}
          {accuracy}% accuracy
        </StatusMessage>
      )}
    </GameWrapper>
  );
}

/* ================================================================
   MAIN FUN COMPONENT
================================================================ */

export default function Fun() {
  const navigate = useNavigate();

  const [
    selectedGame,
    setSelectedGame,
  ] = useState(null);

  /*
   * ==============================================================
   * GLOBAL MOUSE TRACKING
   * ==============================================================
   *
   * This keeps the cursor position available while the user moves
   * over game cards, games, buttons, boards, etc.
   *
   * InteractiveEyes can then react to the actual viewport cursor
   * instead of only reacting while hovering its own small wrapper.
   */

  useEffect(() => {
    const handleMouseMove = (
      event,
    ) => {
      document.documentElement.style.setProperty(
        '--mouse-x',
        `${event.clientX}px`,
      );

      document.documentElement.style.setProperty(
        '--mouse-y',
        `${event.clientY}px`,
      );

      document.documentElement.style.setProperty(
        '--mouse-x-percent',
        `${(event.clientX /
          window.innerWidth) *
          100}%`,
      );

      document.documentElement.style.setProperty(
        '--mouse-y-percent',
        `${(event.clientY /
          window.innerHeight) *
          100}%`,
      );
    };

    window.addEventListener(
      'mousemove',
      handleMouseMove,
      {
        passive: true,
      },
    );

    return () =>
      window.removeEventListener(
        'mousemove',
        handleMouseMove,
      );
  }, []);

  /*
   * ==============================================================
   * SELECTED GAME
   * ==============================================================
   */

  const renderGame = () => {
    switch (selectedGame) {
      case 'snake':
        return <SnakeGame />;

      case '2048':
        return <Game2048 />;

      case 'reaction':
        return <ReactionTest />;

      case 'memory':
        return <MemoryGame />;

      case 'typing':
        return <TypingTest />;

      default:
        return null;
    }
  };

  /*
   * ==============================================================
   * GAME SCREEN
   * ==============================================================
   */

  if (selectedGame) {
    return (
      <ArcadePage $gameMode>
        <BackButton
          onClick={() =>
            setSelectedGame(null)
          }
        >
          ← Back to Arcade
        </BackButton>

        <GameShell>
          {renderGame()}
        </GameShell>

        {/* 
          Keep the eyes available even while a game is open.
          pointerEvents none means they never block game controls.
        */}
        <div
          className="fun-zone-eyes"
          aria-hidden="true"
        >
          <InteractiveEyes compact />
        </div>
      </ArcadePage>
    );
  }

  /*
   * ==============================================================
   * ARCADE HOME
   * ==============================================================
   */

  return (
    <ArcadePage>
      <BackButton
        onClick={() => navigate('/')}
      >
        ← Portfolio
      </BackButton>

      <ArcadeHeader>
        <div className="fun-zone-title">
          <h1>FUN ZONE</h1>

          <div
            className="topbar-eye-wrapper"
            aria-hidden="true"
          >
            <InteractiveEyes compact />
          </div>
        </div>
      </ArcadeHeader>

      <GameGrid>
        {GAMES.map((game) => (
          <GameCard
            key={game.id}
            onClick={() =>
              setSelectedGame(
                game.id,
              )
            }
            data-spotlight
            onMouseEnter={() => {
              document.documentElement.style.setProperty(
                '--eye-hover',
                '1',
              );
            }}
            onMouseLeave={() => {
              document.documentElement.style.setProperty(
                '--eye-hover',
                '0',
              );
            }}
          >
            <GameIcon>
              {game.icon}
            </GameIcon>

            <GameTitle>
              {game.title}
            </GameTitle>

            <GameDescription>
              {game.description}
            </GameDescription>

            <span>
              PLAY →
            </span>
          </GameCard>
        ))}
      </GameGrid>

      {/* ==========================================================
          EYE STYLES
      ========================================================== */}

      <style>
        {`
          /*
           * ========================================================
           * EYE TRACKER
           * ========================================================
           */

          .fun-zone-title {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .topbar-eye-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;

            position: relative;

            width: 68px;
            height: 42px;

            flex: 0 0 auto;

            margin-left: 7px;
            margin-right: 5px;

            overflow: visible;

            z-index: 20;

            /*
             * IMPORTANT:
             * Do not block the mouse.
             *
             * The eyes are visual only.
             */
            pointer-events: none;
          }

          .topbar-eye-wrapper * {
            pointer-events: none;
          }

          .fun-zone-eyes {
            position: fixed;

            right: 24px;
            bottom: 24px;

            width: 72px;
            height: 48px;

            z-index: 9999;

            pointer-events: none;
          }

          .fun-zone-eyes * {
            pointer-events: none;
          }

          /*
           * Give the eye component access to the current cursor
           * position through CSS variables.
           *
           * These variables are updated globally by the mousemove
           * listener above.
           */

          .topbar-eye-wrapper,
          .fun-zone-eyes {
            --cursor-x: var(--mouse-x, 50vw);
            --cursor-y: var(--mouse-y, 50vh);
          }

          /*
           * Hovering game cards can now visually activate the
           * eye system if Eye.jsx uses --eye-hover.
           */

          [data-spotlight] {
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .topbar-eye-wrapper {
              width: 56px;
              height: 36px;

              margin-left: 4px;
              margin-right: 2px;
            }

            .fun-zone-eyes {
              right: 16px;
              bottom: 16px;

              width: 58px;
              height: 40px;
            }
          }

          @media (max-width: 480px) {
            .topbar-eye-wrapper {
              width: 49px;
              height: 32px;

              margin-left: 3px;
              margin-right: 1px;
            }

            .fun-zone-eyes {
              right: 10px;
              bottom: 10px;

              width: 50px;
              height: 34px;
            }
          }
        `}
      </style>
    </ArcadePage>
  );
}
