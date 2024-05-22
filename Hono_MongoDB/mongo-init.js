// Update constants with your needs
const user = "hono";
const pwd = "hono";
const database = "hono";

print("Creating database user");

db = db.getSiblingDB(database);
db.createUser(
    {
        user: user, pwd,
        roles: [
            {
                role: "readWrite",
                db: database
            }
        ]
    }
);

// Add void collection to enable authentication 
db.createCollection('void');

print("User added");