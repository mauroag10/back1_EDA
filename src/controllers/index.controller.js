const controller = {};
const connection = require('../dbConnection/connection')
const TestModel = require('../models/test.model')


controller.indexGetAll = async (req, res) =>{
    try{            
        await connection()
        const allTest = await TestModel.find()
        console.log(JSON.stringify(allTest))
        res.send("La conexion ha sido correcta desde index routes.")
    }catch(err){
        console.error(err)
    }
}

controller.GetTestsList = async (req, res) =>{
    try{            
        await connection()
        const allTest = await TestModel.find()
        console.log(allTest)
        res.send("La conexion ha sido correcta desde index routes --GetTestsList--.")
    }catch(err){
        console.error(err)
    }
}

controller.SubmitAnswer = async (req, res) =>{
    try{            
        await connection()
        const allTest = await TestModel.find()
        console.log(allTest)
        res.send("La conexion ha sido correcta desde index routes  +++++SubmitAnswer+++++.")
    }catch(err){
        console.error(err)
    }
}

controller.indexGetAllWithoutCorrectAnswer = async (req, res) =>{
    try{            
        await connection()
        const allTest = await TestModel.find()
        const result = allTest.map(test => {
            test.questions.forEach(question => {
              delete question.correctAnswerId;
              console.log(JSON.stringify(test))
            });
            
            return test;
          });
          //console.log(JSON.stringify(result))
        res.send("La conexion ha sido correcta desde index routes ******indexGetAllWithoutCorrectAnswer*****.")
    }catch(err){
        console.error(err)
    }
}

module.exports = controller