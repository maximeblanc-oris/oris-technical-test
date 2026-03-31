# Bug Hunting Instructions / Instructions de recherche de bugs

This project includes several intentional bugs. The app looks functional at first glance, but some behaviors are incorrect.  
Ce projet contient plusieurs bugs volontaires. L'application semble fonctionner en surface, mais certains comportements sont incorrects.

## Goal / Objectif

Identify and explain the bugs using three approaches:  
Identifier et expliquer les bugs en utilisant trois approches :

- static analysis (Biome),  
  analyse statique (Biome),
- UI behavior observation,  
  observation du comportement UI,
- focused code review.  
  relecture de code ciblee.

## 1) Run the project / Lancer le projet

```bash
npm install
npm run dev
```

Open the app in the browser and interact with tasks.  
Ouvrir l'application dans le navigateur et manipuler les taches.

## 2) Run Biome analysis / Lancer l'analyse Biome

```bash
npm run lint
```

Guidelines / Consignes:

- note every reported error,  
  noter chaque erreur signalee,
- locate the file and line involved,  
  localiser le fichier et la ligne concernes,
- explain why it is a React/TypeScript issue.  
  expliquer pourquoi c'est un probleme en React/TypeScript.

## 3) UI verification scenarios / Scenarios de verification UI

Follow these scenarios and note suspicious behavior:  
Suivre ces scenarios et noter les comportements suspects :

1. Add 3-4 tasks, then delete one in the middle of the list.  
   Ajouter 3-4 taches, puis en supprimer au milieu de la liste.
2. Quickly check/uncheck multiple tasks.  
   Cocher/decocher rapidement plusieurs taches.
3. Switch filters (`all`, `active`, `completed`) and verify the active task counter.  
   Changer de filtre (`toutes`, `actives`, `terminees`) et verifier le compteur de taches actives.
4. Leave the page open for several minutes and watch fluidity/performance.  
   Laisser la page ouverte plusieurs minutes et surveiller la fluidite/performance.

## 4) Focused code review / Relecture de code ciblee

Inspect these files first / Inspecter en priorite :

- `src/components/TodoList.tsx`
- `src/components/TodoItem.tsx`
- `src/hooks/useTodos.ts`
- `src/components/Clock.tsx`

Guiding questions / Questions guides:

- Are React keys stable and unique?  
  Les cles React sont-elles stables et uniques ?
- Are state updates immutable?  
  Les updates de state sont-elles immuables ?
- Are hook dependencies complete and correct?  
  Les dependances des hooks sont-elles completes et correctes ?
- Are effects that allocate async resources properly cleaned up?  
  Les effets qui ouvrent des ressources asynchrones sont-ils nettoyes ?
- Are TypeScript types strict and explicit?  
  Les types TypeScript sont-ils stricts et explicites ?

## 5) Expected report / Restitution attendue

For each bug found, provide:  
Pour chaque bug trouve, fournir :

- **Symptom / Symptome**
- **Root cause / Cause racine**
- **Impacted file / Fichier concerne**
- **Proposed fix / Correctif propose**

Optional / Optionnel:

- apply fixes, then run `npm run lint` and `npm run build` again to validate.  
  appliquer les correctifs puis relancer `npm run lint` et `npm run build` pour validation.
