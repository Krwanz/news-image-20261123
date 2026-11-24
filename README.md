# WORLD NEWS — 23 November 2026

![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)
![rank](https://make.fun/badge/news-image-20261123/Krwanz/news-image-20261123/rank.svg)
![reward](https://make.fun/badge/news-image-20261123/Krwanz/news-image-20261123/reward.svg)

One image summing up the world's news of Monday 23 November 2026 — a
[make.fun bounty entry](https://make.fun/bounty/news-image-20261123).

The poster (1024×576 PNG) covers six stories of the day, verified against
live news reporting:

1. **COP31 COLLAPSES** — UN climate talks in Antalya end with no deal; the EU
   rejects the weak final text for omitting fossil fuels — the first COP
   without agreement since 2009.
2. **NATO SENDS AWACS TO POLAND** — after three Russian Kh-101 missiles landed
   in Poland on Friday; NATO meets Monday over the strikes on its eastern flank.
3. **UKRAINE SINKS RUSSIAN WARSHIP OFF LIBYA** — Zelenskiy says sea drones
   sank the corvette Merkury in Benghazi port on Sunday, a day after a drone
   strike on the cargo ship Sparta II in the Gulf of Finland.
4. **EU HITS RUSSIA WITH SWEEPING SANCTIONS** — 60 banks cut from SWIFT,
   crypto platforms targeted, 70+ more shadow-fleet vessels listed, Russian
   teams and athletes banned from competing under the Russian flag.
5. **IRAN VOWS TO COUNTER US BLOCKADE** — Tehran says it will use "all its
   tools" against the US naval blockade of Hormuz; the US imposes fresh
   sanctions Monday on dozens linked to Iran's shadow banking networks.
6. **RUSSIA WARNS ESTONIA OF OPEN WAR** — Moscow warns Estonia's planned
   border closure is on the verge of triggering open war; Finland summons
   Russia's ambassador over an airspace violation.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `poster.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` and verifies the output: a valid PNG,
exactly 1024×576, at most 1 MiB, byte-identical to the source poster.
