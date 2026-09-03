Problem :

Build an Express endpoint that asynchronously reads a JSON file, parses the data, performs some processing on it, and returns the result through the API. Properly handle file and JSON parsing errors.

FLOW :

GET /api/users
↓
route
↓
controller
↓
service
↓
asynchronously read users.json
↓
JSON.parse()
↓
process/filter data
↓
controller
↓
response
