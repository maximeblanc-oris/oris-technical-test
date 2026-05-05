# Bug Hunting Instructions

This project includes several intentional bugs. The app looks functional at first glance, but some behaviors are incorrect.

## Goal

Identify and explain the bugs using three approaches:

- static analysis (Biome),
- UI behavior observation,
- focused code review.

## 1) Run the project

```bash
npm install
npm run dev
```

Open the app in the browser and interact with tasks.

## 2) Run Biome analysis

```bash
npm run lint
```

For each reported error:

- locate the file and line involved,
- explain why it is a React/TypeScript issue.

## 3) UI verification scenarios

Follow these scenarios and note suspicious behavior:

1. Add 3-4 tasks, then delete one in the middle of the list.
2. Quickly check/uncheck multiple tasks.
3. Switch filters (`all`, `active`, `completed`) and verify the active task counter.
4. Leave the page open for several minutes and watch fluidity/performance.

## 4) Focused code review

Inspect these files first:

- `src/components/TodoList.tsx`
- `src/components/TodoItem.tsx`
- `src/hooks/useTodos.ts`
- `src/components/Clock.tsx`

Guiding questions:

- Are React keys stable and unique?
- Are state updates immutable?
- Are hook dependencies complete and correct?
- Are effects that allocate async resources properly cleaned up?
- Are TypeScript types strict and explicit?
