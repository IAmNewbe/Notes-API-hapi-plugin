# Summary
Date : 2023-08-14 08:07:08

Directory c:\\Workspace\\Code\\notes-app-back-end

Total : 38 files,  4957 codes, 21 comments, 216 blanks, all 5194 lines

## Languages
| language | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| JSON | 3 | 3,851 | 0 | 2 | 3,853 |
| JavaScript | 29 | 923 | 21 | 180 | 1,124 |
| Markdown | 5 | 164 | 0 | 33 | 197 |
| JSON with Comments | 1 | 19 | 0 | 1 | 20 |

## Directories
| path | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| . | 38 | 4,957 | 21 | 216 | 5,194 |
| . (Files) | 4 | 3,937 | 0 | 10 | 3,947 |
| migrations | 3 | 69 | 3 | 12 | 84 |
| src | 26 | 854 | 18 | 168 | 1,040 |
| src (Files) | 1 | 75 | 6 | 11 | 92 |
| src\\api | 9 | 428 | 9 | 58 | 495 |
| src\\api\\authentications | 3 | 147 | 3 | 21 | 171 |
| src\\api\\notes | 3 | 188 | 4 | 22 | 214 |
| src\\api\\users | 3 | 93 | 2 | 15 | 110 |
| src\\exceptions | 4 | 32 | 0 | 10 | 42 |
| src\\services | 4 | 211 | 3 | 68 | 282 |
| src\\services\\inMemory | 1 | 54 | 0 | 18 | 72 |
| src\\services\\postgres | 3 | 157 | 3 | 50 | 210 |
| src\\tokenize | 1 | 17 | 0 | 2 | 19 |
| src\\utils | 1 | 16 | 0 | 2 | 18 |
| src\\validator | 6 | 75 | 0 | 17 | 92 |
| src\\validator\\authentications | 2 | 39 | 0 | 6 | 45 |
| src\\validator\\notes | 2 | 18 | 0 | 6 | 24 |
| src\\validator\\users | 2 | 18 | 0 | 5 | 23 |
| statistic | 5 | 97 | 0 | 26 | 123 |

# Details
## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.eslintrc.json](/.eslintrc.json) | JSON with Comments | 19 | 0 | 1 | 20 |
| [migrations/1689702130697_create-table-notes.js](/migrations/1689702130697_create-table-notes.js) | JavaScript | 32 | 1 | 4 | 37 |
| [migrations/1691874004378_create-table-users.js](/migrations/1691874004378_create-table-users.js) | JavaScript | 25 | 1 | 4 | 30 |
| [migrations/1691954350783_create-table-authentications.js](/migrations/1691954350783_create-table-authentications.js) | JavaScript | 12 | 1 | 4 | 17 |
| [package-lock.json](/package-lock.json) | JSON | 3,819 | 0 | 1 | 3,820 |
| [package.json](/package.json) | JSON | 31 | 0 | 1 | 32 |
| [readme.md](/readme.md) | Markdown | 68 | 0 | 7 | 75 |
| [src/api/authentications/handler.js](/src/api/authentications/handler.js) | JavaScript | 109 | 3 | 18 | 130 |
| [src/api/authentications/index.js](/src/api/authentications/index.js) | JavaScript | 20 | 0 | 2 | 22 |
| [src/api/authentications/routes.js](/src/api/authentications/routes.js) | JavaScript | 18 | 0 | 1 | 19 |
| [src/api/notes/handler.js](/src/api/notes/handler.js) | JavaScript | 135 | 4 | 18 | 157 |
| [src/api/notes/index.js](/src/api/notes/index.js) | JavaScript | 10 | 0 | 2 | 12 |
| [src/api/notes/routes.js](/src/api/notes/routes.js) | JavaScript | 43 | 0 | 2 | 45 |
| [src/api/users/handler.js](/src/api/users/handler.js) | JavaScript | 70 | 2 | 12 | 84 |
| [src/api/users/index.js](/src/api/users/index.js) | JavaScript | 10 | 0 | 1 | 11 |
| [src/api/users/routes.js](/src/api/users/routes.js) | JavaScript | 13 | 0 | 2 | 15 |
| [src/exceptions/AuthenticationError.js](/src/exceptions/AuthenticationError.js) | JavaScript | 8 | 0 | 2 | 10 |
| [src/exceptions/ClientError.js](/src/exceptions/ClientError.js) | JavaScript | 8 | 0 | 2 | 10 |
| [src/exceptions/InvariantError.js](/src/exceptions/InvariantError.js) | JavaScript | 8 | 0 | 3 | 11 |
| [src/exceptions/NotFoundError.js](/src/exceptions/NotFoundError.js) | JavaScript | 8 | 0 | 3 | 11 |
| [src/server.js](/src/server.js) | JavaScript | 75 | 6 | 11 | 92 |
| [src/services/inMemory/NotesService.js](/src/services/inMemory/NotesService.js) | JavaScript | 54 | 0 | 18 | 72 |
| [src/services/postgres/AuthenticationsService.js](/src/services/postgres/AuthenticationsService.js) | JavaScript | 33 | 0 | 9 | 42 |
| [src/services/postgres/NotesServices.js](/src/services/postgres/NotesServices.js) | JavaScript | 61 | 3 | 19 | 83 |
| [src/services/postgres/UsersService.js](/src/services/postgres/UsersService.js) | JavaScript | 63 | 0 | 22 | 85 |
| [src/tokenize/TokenManager.js](/src/tokenize/TokenManager.js) | JavaScript | 17 | 0 | 2 | 19 |
| [src/utils/index.js](/src/utils/index.js) | JavaScript | 16 | 0 | 2 | 18 |
| [src/validator/authentications/index.js](/src/validator/authentications/index.js) | JavaScript | 23 | 0 | 2 | 25 |
| [src/validator/authentications/schema.js](/src/validator/authentications/schema.js) | JavaScript | 16 | 0 | 4 | 20 |
| [src/validator/notes/index.js](/src/validator/notes/index.js) | JavaScript | 11 | 0 | 3 | 14 |
| [src/validator/notes/schema.js](/src/validator/notes/schema.js) | JavaScript | 7 | 0 | 3 | 10 |
| [src/validator/users/index.js](/src/validator/users/index.js) | JavaScript | 11 | 0 | 3 | 14 |
| [src/validator/users/schema.js](/src/validator/users/schema.js) | JavaScript | 7 | 0 | 2 | 9 |
| [statistic/details.md](/statistic/details.md) | Markdown | 41 | 0 | 6 | 47 |
| [statistic/diff-details.md](/statistic/diff-details.md) | Markdown | 9 | 0 | 6 | 15 |
| [statistic/diff.md](/statistic/diff.md) | Markdown | 12 | 0 | 7 | 19 |
| [statistic/results.json](/statistic/results.json) | JSON | 1 | 0 | 0 | 1 |
| [statistic/results.md](/statistic/results.md) | Markdown | 34 | 0 | 7 | 41 |
