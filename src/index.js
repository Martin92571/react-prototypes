import React from 'react';
import ReactDOM from 'react-dom';

const user={
    name:"Martin",
    luckyNumber:luckyNumber()
}
ReactDOM.render(
    greeting(user),
    
    document.getElementById('root')
);
function luckyNumber(){
    return Math.floor(Math.random()*1000)+1;
}
function greeting(user){
return <div className="container">
        <h1>hello {user.name}</h1>
        <h2 className="text-muted">my lucky number is {user.luckyNumber}</h2>
       </div>
}

