const RandomEquation = ({ setEQ }) => {

    let randomArray = Array(4).fill(0)

    do {
            for(let i = 0; i < 4; i++){
                randomArray[i] = Math.floor(Math.random() * 10);
            }

            let promise = new Promise((resolve, reject) => {
                if(randomArray[3] !== 0){

                }
            });
        
            if(true) {
                setEQ(randomArray)
                break
            }

    } while (true);

}

const RandomEquationAnswer = ({ setANSEQ }) => {

    let randomArray = Array(2).fill(0)

    for(let i = 0; i < 2; i++){
        randomArray[i] = Math.floor(Math.random() * 10);
    }

    setANSEQ((randomArray[0]*10)+(randomArray[1]))
}


export { RandomEquation, RandomEquationAnswer }