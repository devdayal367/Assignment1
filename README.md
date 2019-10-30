# Student information system using Node js and MongoDB
This is a simple student information system  which contains 2 pages. The home page is for entering student's details such as Name, Email address, Phone number and Register number.For this application,nodejs is used for front end and mongodb is used for back end. 

Nodejs is an open source server environment and it allows us to run javascript on the server and MongoDB is a document database which stores data in flexible, JSON-like documents.

The home page 'home.ejs' receives entered information from a user, submitting it by post method transfer the information to the MongoDB database by POST method and is saved there. By clicking 'view details' button in home page, the user will be redirected to the 'details' page which shows the all entered details retrieved from MongoDB database. Repository contains a nodejs code and source code of webpages.

## Storing values
The following code is for inputting values by the user and store it 

 ```app.post('/', function(req,res){  
  var name = req.body.name; 
  var email= req.body.email; 
  var phone=req.body.phone; 
  var regno=req.body.regno;  
  var write={"name": name,"email":email,"phone":phone,"regno":regno}
  db.collection('web').insertOne(write,function(err, collection){  
    if (err) throw err;  
    console.log("Inserted!");  
    db.close; 
});});
```
![homepage](https://user-images.githubusercontent.com/53893442/67897320-2a925a00-fb84-11e9-87fb-3618ba8bd9d5.png)

## Retrieving values 
The code metioned below will retrieve the collected data from database 

```app.get('/details', function(req, res) { 
  db.collection("web").find({}).toArray(function(err, result) { 
    if (err) throw err; 
    res.render('details',{result:result}); 
    db.close; 
});}); 
```
![detailspage](https://user-images.githubusercontent.com/53893442/67897579-b5735480-fb84-11e9-9dff-eb5622673a86.png)

## Inside Database
Informations stored inside database can be viewed and managed through MongoDB Compass which is the official GUI for Mongodb.

![compass](https://user-images.githubusercontent.com/53893442/67897213-eef79000-fb83-11e9-8b0e-a61286347baf.png)

### Modules used
1. Express
2. Body_parser
3. Mongoose
