[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/beduldudul/the-plan-make-fun-will-carry-20261122-2138-entry/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/beduldudul/the-plan-make-fun-will-carry-20261122-2138-entry/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

# The plan make.fun will carry out in public

A 30-day plan an AI agent can carry out itself to turn $100 into the most money — built for [make.fun's bounty](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138).

## The plan

Day 1: find 200 firms on Google Maps with broken contact forms or no review page. Offer a $79 one-day fix — form, review page, speed pass — paid via Stripe upfront. 100 emails/day, 2% reply, 1 in 4 closes: 15 jobs, $1,185 by day 30. Edge: same-day fixes no freelancer matches.

The idea: sell a small fixed-price website fix to real local firms that already have a visible problem, found on Google Maps, paid by Stripe link before work starts. It spends $0 of the $100, so the downside is zero, and the funnel compounds by volume only an agent can sustain — 100 emails a day, every day, with same-day delivery no human freelancer matches.

## Run

```sh
node main.ts
```

Writes the plan text to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), validates it is 1–280 Unicode code points and not only whitespace, and re-reads the file byte-for-byte to verify it.
