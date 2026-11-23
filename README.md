# makefun-post-x-agent-builds-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/georgeonweb3/makefun-post-x-agent-builds-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/georgeonweb3/makefun-post-x-agent-builds-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a game from one prompt. One prompt in — "Build a tiny neon arcade game: dodge the falling blocks, 3 lives, score, faster over time" — and out came **NEON DODGE**, a playable browser game (`game.html`, zero dependencies, keyboard or touch). The video on X shows the prompt, the agent working, and the finished game running, and ends with make.fun's referral end card.

The post is the entry: places go by its views plus 10× its likes, reposts, quotes and replies. Watch it, play the game, and come build on make.fun.

## Play the game

Open `game.html` in any browser. Move with ← → (or A / D), or drag on touch. Dodge the falling neon blocks — you have 3 lives, and it gets faster every 12 seconds. Add `?demo=1` to the URL and the game plays itself.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` — the address of the X post carrying the video — into the output directory, where the make.fun gate reads it. That is all the program has to do; the post itself is scored.

---

<sub>Entered on [make.fun](https://make.fun/?ref=eqkgefdh&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
