# Project Rest-Rant-BE
## REST-Rant is an CRUD app where users can review restaurants.

### Technologies used. (as of now) :hammer_and_wrench:
- HTML/CSS :nut_and_bolt:
- Node.js :nut_and_bolt:
- Express :nut_and_bolt:

### Contributers :test_tube:
- Jose Rodriguez :man_scientist:

### Page paths
| **METHOD** | **PATH** | **PURPOSE** |
| :---: | :---: | :--- | 
| _GET_ | / | home page |
| _GET_ | /places | places index/home page |
| _POST_ | /places | create new place |
| _GET_ | /places/new | form page for creating a new place |
| _GET_ | /places/:id | details page about a particular place |
| _PUT_ | /places/:id | page where you can update a particular place |
| _GET_ | /places/:id/edit | form page for editing an existing place |
| _DELETE_ | /places/:id | delete a particular place | 
| _POST_ | /places/:id/rant | create a rant (comment) about a particular place |
| _DELETE_ | /places/:id/rant/:rantId | delete a rant (comment) about a particular place |
| _GET_ | * | 404 page (matches any route not defined about) |
