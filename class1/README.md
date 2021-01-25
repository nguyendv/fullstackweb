Goals:
- Pure javascript frontend
- Javascript backend
- Text file database

## Getting Started
To get this code to your laptop, run `git clone` command:
```bash
git clone https://github.com/nguyendv/fullstackweb
```

To run the frontend, you'll need install `http-server`:
```bash
npm install -g http-server`

Then
```bash
cd frontend
http-server
```

To run the backend, open new terminal tab, then install its dependencies:
```bash
cd backend
npm install
```

Then:
```bash
node index.js
```

## How frontend and backend interact
Networking protocol:
- predefined behaviors between 2 machines
    - How data packets are structured (message structure)
    - Sequence of sending and receiving those packages (message exchanges)

Example: achine A wants to "shake hand" with machine B. We have a list of actions:
- Machine A gives out their right hand
- Then, Machine B gives out their right hand
- Then, Machine B touches Machine A's hand
- Finally, they pulls their hands back

HTTP Protocol:
Browser sends request, then server responses
GET, POST, DELETE, PUT, OPTION requests

Example: Visit Google.com
1. Browser send GET request to google.com
2. Google server responses with html/css/js of google.com website
3. Browser renders that website

Users enter a search term in Google.com and clicks Search
1. Browser sends POST request, with a message contains the search term
2. Google server responses with a list of results

- GET: for getting some data
- POST: for inserting new data
- PUT: for updating existing data
- DELETE: for deleting existing data

### Ip addressed and port numbers
Address of a machine: IP address. Analogy: apartment address
Port number: each application will have a port number. Analogy: room number

We can have a networking app between a single machine: both frontend and backend is just a single machine. This machine has a special address called "localhost" or "127.0.0.1"

### Synchronous vs Asynchronous
Synchronous: instructions are executed by the order of written
Asynchronous: instructions may need to wait for correct condition before continue of execution

### Frontend get a list of items from backend
Frontend sends a GET /items request to Backend
Backend responds with a list of items

### Homework
** Without editing index.html file **, update the javascript backend and frontend to display a list of todo lists, and for each list display its items.

1. Modify the data.json to have multiple lists, such as:
```
{ 
    "toBuy": [...], 
    "toWork": [...]
}
```

2. Add new request handler for `GET /lists` requests that return a dictionary
```
key: listName
value: list of items in the list
```

3. In frontend, it sends a GET request for a list of lists,
display all the lists and their items

4. In the next class we'll reimplement the same client above with React. Please go over this tutorial https://reactjs.org/tutorial/tutorial.html before the class.