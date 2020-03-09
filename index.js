let promise = new Promise(function(res, rej){
    grade = 69;
    if(grade>=60){
        res("pass");
    }else{
        rej("fail");
    }
});

promise.then(function(message){
    document.write(`You ${message} the subject1 `);
}).catch(function(message){
    document.write(`You ${message} the subject 2 `);
});