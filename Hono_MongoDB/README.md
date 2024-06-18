# Hono & MongoDB

Hono frameworkd for NodeJs. 

MongoDB container with init script. 

Work to validate. 

## Installation 

### VueJS

Run `npm create vue@latest` and follow guidance.  

Run `npm create hono@latest` and follow guidance.   

Update `mongo-init.js` whith your needs. 

Update compose.yml for : 
- MongoDB credentials 
- Api Token
- Hono and Vite volumes directories

Update Dockerfile for the COPY command if needed. 

Run `docker compose up -d` and enjoy.  

Run `git remote set-url origin new.git.url/here` to update remote repository.  