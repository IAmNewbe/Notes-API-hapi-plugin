# Summary

Date : 2023-08-15 01:28:12

Directory c:\\Workspace\\Code\\notes-app-back-end

Total : 43 files,  5188 codes, 43 comments, 257 blanks, all 5488 lines


## Languages
| language | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| JSON | 2 | 3,850 | 0 | 2 | 3,852 |
| JavaScript | 39 | 1,243 | 43 | 248 | 1,534 |
| Markdown | 1 | 76 | 0 | 6 | 82 |
| JSON with Comments | 1 | 19 | 0 | 1 | 20 |

## Directories
| path | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| . | 43 | 5,188 | 43 | 257 | 5,488 |
| . (Files) | 4 | 3,945 | 0 | 9 | 3,954 |
| migrations | 6 | 114 | 19 | 30 | 163 |
| src | 33 | 1,129 | 24 | 218 | 1,371 |
| src (Files) | 1 | 87 | 7 | 14 | 108 |
| src\\api | 12 | 575 | 14 | 77 | 666 |
| src\\api\\authentications | 3 | 147 | 3 | 21 | 171 |
| src\\api\\collaborations | 3 | 105 | 2 | 14 | 121 |
| src\\api\\notes | 3 | 196 | 6 | 24 | 226 |
| src\\api\\users | 3 | 127 | 3 | 18 | 148 |
| src\\exceptions | 5 | 40 | 0 | 12 | 52 |
| src\\services | 5 | 300 | 3 | 89 | 392 |
| src\\services\\inMemory | 1 | 54 | 0 | 18 | 72 |
| src\\services\\postgres | 4 | 246 | 3 | 71 | 320 |
| src\\tokenize | 1 | 17 | 0 | 2 | 19 |
| src\\utils | 1 | 18 | 0 | 2 | 20 |
| src\\validator | 8 | 92 | 0 | 22 | 114 |
| src\\validator\\authentications | 2 | 39 | 0 | 6 | 45 |
| src\\validator\\collaborations | 2 | 17 | 0 | 5 | 22 |
| src\\validator\\notes | 2 | 18 | 0 | 6 | 24 |
| src\\validator\\users | 2 | 18 | 0 | 5 | 23 |

# Details

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.eslintrc.json](/.eslintrc.json) | JSON with Comments | 19 | 0 | 1 | 20 |
| [migrations/1689702130697_create-table-notes.js](/migrations/1689702130697_create-table-notes.js) | JavaScript | 32 | 1 | 4 | 37 |
| [migrations/1691874004378_create-table-users.js](/migrations/1691874004378_create-table-users.js) | JavaScript | 25 | 1 | 4 | 30 |
| [migrations/1691954350783_create-table-authentications.js](/migrations/1691954350783_create-table-authentications.js) | JavaScript | 12 | 1 | 4 | 17 |
| [migrations/1691978641099_add-column-owner-to-table-notes.js](/migrations/1691978641099_add-column-owner-to-table-notes.js) | JavaScript | 11 | 1 | 4 | 16 |
| [migrations/1692022938516_add-foreign-key-to-owner-column.js](/migrations/1692022938516_add-foreign-key-to-owner-column.js) | JavaScript | 11 | 7 | 8 | 26 |
| [migrations/1692029168446_create-collaborations-table.js](/migrations/1692029168446_create-collaborations-table.js) | JavaScript | 23 | 8 | 6 | 37 |
| [package-lock.json](/package-lock.json) | JSON | 3,819 | 0 | 1 | 3,820 |
| [package.json](/package.json) | JSON | 31 | 0 | 1 | 32 |
| [readme.md](/readme.md) | Markdown | 76 | 0 | 6 | 82 |
| [src/api/authentications/handler.js](/src/api/authentications/handler.js) | JavaScript | 109 | 3 | 18 | 130 |
| [src/api/authentications/index.js](/src/api/authentications/index.js) | JavaScript | 20 | 0 | 2 | 22 |
| [src/api/authentications/routes.js](/src/api/authentications/routes.js) | JavaScript | 18 | 0 | 1 | 19 |
| [src/api/collaborations/handler.js](/src/api/collaborations/handler.js) | JavaScript | 74 | 2 | 11 | 87 |
| [src/api/collaborations/index.js](/src/api/collaborations/index.js) | JavaScript | 12 | 0 | 2 | 14 |
| [src/api/collaborations/routes.js](/src/api/collaborations/routes.js) | JavaScript | 19 | 0 | 1 | 20 |
| [src/api/notes/handler.js](/src/api/notes/handler.js) | JavaScript | 143 | 6 | 20 | 169 |
| [src/api/notes/index.js](/src/api/notes/index.js) | JavaScript | 10 | 0 | 2 | 12 |
| [src/api/notes/routes.js](/src/api/notes/routes.js) | JavaScript | 43 | 0 | 2 | 45 |
| [src/api/users/handler.js](/src/api/users/handler.js) | JavaScript | 99 | 3 | 15 | 117 |
| [src/api/users/index.js](/src/api/users/index.js) | JavaScript | 10 | 0 | 1 | 11 |
| [src/api/users/routes.js](/src/api/users/routes.js) | JavaScript | 18 | 0 | 2 | 20 |
| [src/exceptions/AuthenticationError.js](/src/exceptions/AuthenticationError.js) | JavaScript | 8 | 0 | 2 | 10 |
| [src/exceptions/AuthorizationError.js](/src/exceptions/AuthorizationError.js) | JavaScript | 8 | 0 | 2 | 10 |
| [src/exceptions/ClientError.js](/src/exceptions/ClientError.js) | JavaScript | 8 | 0 | 2 | 10 |
| [src/exceptions/InvariantError.js](/src/exceptions/InvariantError.js) | JavaScript | 8 | 0 | 3 | 11 |
| [src/exceptions/NotFoundError.js](/src/exceptions/NotFoundError.js) | JavaScript | 8 | 0 | 3 | 11 |
| [src/server.js](/src/server.js) | JavaScript | 87 | 7 | 14 | 108 |
| [src/services/inMemory/NotesService.js](/src/services/inMemory/NotesService.js) | JavaScript | 54 | 0 | 18 | 72 |
| [src/services/postgres/AuthenticationsService.js](/src/services/postgres/AuthenticationsService.js) | JavaScript | 33 | 0 | 9 | 42 |
| [src/services/postgres/CollaborationsService.js](/src/services/postgres/CollaborationsService.js) | JavaScript | 41 | 0 | 13 | 54 |
| [src/services/postgres/NotesServices.js](/src/services/postgres/NotesServices.js) | JavaScript | 101 | 3 | 26 | 130 |
| [src/services/postgres/UsersService.js](/src/services/postgres/UsersService.js) | JavaScript | 71 | 0 | 23 | 94 |
| [src/tokenize/TokenManager.js](/src/tokenize/TokenManager.js) | JavaScript | 17 | 0 | 2 | 19 |
| [src/utils/index.js](/src/utils/index.js) | JavaScript | 18 | 0 | 2 | 20 |
| [src/validator/authentications/index.js](/src/validator/authentications/index.js) | JavaScript | 23 | 0 | 2 | 25 |
| [src/validator/authentications/schema.js](/src/validator/authentications/schema.js) | JavaScript | 16 | 0 | 4 | 20 |
| [src/validator/collaborations/index.js](/src/validator/collaborations/index.js) | JavaScript | 11 | 0 | 3 | 14 |
| [src/validator/collaborations/schema.js](/src/validator/collaborations/schema.js) | JavaScript | 6 | 0 | 2 | 8 |
| [src/validator/notes/index.js](/src/validator/notes/index.js) | JavaScript | 11 | 0 | 3 | 14 |
| [src/validator/notes/schema.js](/src/validator/notes/schema.js) | JavaScript | 7 | 0 | 3 | 10 |
| [src/validator/users/index.js](/src/validator/users/index.js) | JavaScript | 11 | 0 | 3 | 14 |
| [src/validator/users/schema.js](/src/validator/users/schema.js) | JavaScript | 7 | 0 | 2 | 9 |
