const RandomEquation = ({ setEQ }) => {

    let randomArray = Array(4).fill(0)
    var randomNumberLogical = true

    do {
            for(let i = 0; i < 4; i++){
                randomArray[i] = Math.floor(Math.random() * 10);
            }

            let promise = new Promise((resolve, reject) => {
                if(randomArray[3] !== 0){resolve(true)}
            });

            promise.then(
                result => startrandomChecker(randomArray),
                error => console.log('error')
            )
        
            if(randomNumberLogical) {
                setEQ(randomArray)
                break
            }

    } while (true);

    

}

const startrandomChecker = (Array) => {
    let duplicates = Array.filter((item, index) => index !== Array.indexOf(item));
    let duperPromise = new Promise((resolve, reject) => {
        if(duplicates.length !== 0){resolve(true)}
    });

    duperPromise.then(
        result=>(()=>{
            ZeroDuper(duplicates)
            NumberDuper(duplicates, Array)
        })
    )
}

const ZeroDuper = (Dupe) => {
    if (Dupe.includes(0)){
        return null
    }
}

const NumberDuper = (Dupe, Array) => {
    
    for(let i of Dupe){
        var dupecountNumberDuper = 0
        if(i !== 0){
            for(let j of Array){
                if(i===j){
                    dupecountNumberDuper = dupecountNumberDuper+1
                }
            }
        }
    }

    const NumberDuperProm = new Promise((resolve, reject) => {
        if(dupecountNumberDuper>=3){
            reject(true)
        }
    });

    NumberDuperProm.then(
        reject => (()=>{
            return(true)
        })
    )
}


const RandomEquationAnswer = ({ setANSEQ }) => {

    let randomArray = Array(2).fill(0)

    for(let i = 0; i < 2; i++){
        randomArray[i] = Math.floor(Math.random() * 10);
    }

    setANSEQ((randomArray[0]*10)+(randomArray[1]))
}


export { RandomEquation, RandomEquationAnswer }