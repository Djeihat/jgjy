# Claude Instructions — Community Material Flow Map

## Efficiency
- Make parallel tool calls wherever possible — file reads, writes, and API
  calls that don't depend on each other should run simultaneously.
- Batch git add, commit, and push into a single command chain.
- Don't re-read files you just wrote unless there's a specific reason.

## Modularity
- Keep concerns separated: data sources, design, research, and decisions each
  live in their own folder. Don't collapse them back into a single file.
- When adding a new data category, create a new file in `data-sources/` rather
  than appending to an existing one.
- Update `data-sources/README.md` index whenever a new data source file is
  added.

## Scalability
- Structure new files and folders so they can grow without reorganization.
  If a folder is likely to accumulate many files, add a README index.
- When a section in an existing file grows large enough to warrant its own
  file, split it proactively and update any links.
- Prefer relative links between markdown files so the repo remains portable.

## Repo Structure
```
jgjy/
├── README.md               — project overview and doc index
├── IDEAS.md                — raw brainstorming and open threads
├── DECISIONS.md            — decisions made and rationale
├── data-sources/           — one file per data category
├── design/                 — visualization concepts, UX, style
└── research/               — external analyses, competitive landscape
```
