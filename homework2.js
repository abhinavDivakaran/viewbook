const Expres=require('express');

var app=new Expres();

app.set('view engine','ejs');


app.get('/',(Request,Response)=>{
    Response.render('index2');
});

books=[{
    'title':'OOdayil Ninnu','auther':'Thakazhi','publisher':'dc books','price':230,'desc':'good book'
},{
    'title':'Harry poter','auther':'j k Rowling','publisher':'HP books','price':570,'desc':'first book of rowling'
},{
        'title':'Ente balyakala sakhi','auther':'Vaikom muhamad basheer','publisher':'dc books','price':320,'desc':'love story'
    },
{
    'title':'Burid Things','auther':'Joseph Annamkutty','publisher':'DC books','price':600,'desc':'Thought of Joseph'
},{
    'title':'OOdayil Ninnu','auther':'Thakazhi','publisher':'dc books','price':230,'desc':'good book'
},{
        'title':'Ente balyakala sakhi','auther':'Vaikom muhamad basheer','publisher':'dc books','price':320,'desc':'love story'
}];
app.get('/viewbook',(Request,Response) =>{
    Response.render('viewbook2',books);
});
app.get('/addbook',(Request,Response) =>{
    Response.render('addbook2');
});
app.listen(3333,()=>{
    console.log("Work in progress...!");
});
