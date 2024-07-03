# Characters app

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Steps to run the app:

- npm i
- npm run dev

## App folder structure



```
.
├── ...
├── src                                     # Main directory here can be added other directories 
│   ├── app                                 # Api and store directory
│   │   ├── services                        # 
│   │   │   ├── api.ts                      # ApiSilce
│   │   │   ├── charactersApi.ts            # Extended api slice
│   │   │   └── ...                         # here goes othe apis
│   │   ├── constants.ts                    # constants (in case if getting big will be a directory with categorized constant files)
│   │   └── store.ts                        # App store
│   ├── features                            # 
│   .    ├── charactersTable                # feature directory with feature related files
│   .    │    ├── charactersTable.ts        # main feature file
│   .    │    ├── editDialog.ts             # component
│        │    └── ...                       # componnents or files related to feature including slices
│        └── ...                            # other features
└── ...
```

In src directory will be added folder like components, routes etc.

