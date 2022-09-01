

const evalhandler = (items) => {
    try{
        return(eval(items))
    }
    catch(err){
        return null
    }
}

const AnswerChecker = (x, y, z) => {

    //userAnswer, ansequation, equation

    const ProblemArray = z

    const ProblemAnswer = y

    const Solution = x

    var dupeornot = null
    var fakeornot = null

    const arraySolution = Solution.split("")

    //fake checker
    for(let i of arraySolution){

        if(!isNaN(i)){
            if(ProblemArray.includes(parseInt(i))){

            }else{
                fakeornot = true
                break
            }
        }

        if(i===arraySolution[3]){
            fakeornot = false
        }

    }

    const AnswerChecker = (Array, Answer) => {

        try {

            evalhandler(Array)

        }
        finally {

            logicalCheck(Array, Answer)

        }


    }

    //promise
    const promise = new Promise(function(resolve, reject) {

        try{
            evalhandler(Solution)
        }
        finally{
            if(!fakeornot) {
                AnswerChecker(Solution, ProblemAnswer)
            }
        }

    });

}

export { AnswerChecker, evalhandler }

function logicalCheck(Array, Answer) {
    if (evalhandler(Array) === Answer) {
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }
}
