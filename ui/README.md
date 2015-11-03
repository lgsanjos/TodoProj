## Requirements 

[x] User can login
[x] User can sign up.
[x] After signing in, the user can create TODO lists.
[x] Each list can be either public or private.
[x] After creating the list, the user should be able to add tasks via AJAX. Creating tasks should be easy in the user's perspective.
[x] Update tasks via ajax
[ ] The logged user can see public lists from other users.
[ ] The logged user can mark other users' public lists as favorite.
[ ] The logged user can see all the lists he or she marked as favorite.

## How to run:

### UI
It requires npm and bower

npm install grunt-cli -g
npm install phatomjs
npm install grunt-karma
npm install karma

npm install

grunt test
grunt serve

### Backend

Developed in Ruby 2.2.3 and Rails 4

gem install bundler

bundle install
rake db:create
rake db:migrate

rspec
rails start

## 
