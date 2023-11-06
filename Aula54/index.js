//função callback

function f1(callback){
    setTimeout(function(){
        console.log('f1')
    }, 500)

    if(callback) callback()
}

function f2(callback){
    setTimeout(function(){
        console.log('f2')
    }, 1000)
    if(callback) callback()
}

function f3(callback){
    setTimeout(function(){
        console.log('f3')
    }, 800)
    if(callback) callback()
}


f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo!')
        })
    })
}) //função callback hell


//melhor maneira para criar esta função
f1(f1Callback)

function f1Callback(){
    f2(f2Callback)
}

function f2Callback(){
    f3(f3Callback)
}

function f3Callback(){
    console.log('Olá mundo')
}