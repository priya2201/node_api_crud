const express=require('express');
const router=express.Router();
//const ObjectId=require('mongoose').Types.ObjectId;
const{Employee}= require('../models/employee');
 //get all employees
 router.get('/employees',(req,res)=>{
    Employee.find({},(err,data) =>{
        if(!err){
            res.send(data);
        }else{
            console.log(err);
        }

    });

 });

 //save employees
 router.post('/employee/add',(req,res)=>{
    const emp=new Employee({
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary
    });
    emp.save((err,data) => {
        if(!err){
        res.status(200).json({code:200,message:'Employee added successfully',
    addEmployee:data})
        }else{
            console.log(err);
        }
    
    });
 });
//get single employee
router.get('/employee/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,data)=>{

        if(!err){
            res.send(data);

        }else{
            console.log(err);
        }
    });
});
//update employee
router.put('/employee/edit/:id',(req,res)=>{
    const emp={
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary
    }
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,data) =>{
        if(!err){
            res.status(200).json({code:200,message:'Employee Updated successfully',
            updateEmployee:data})
        }else{
            console.log(err);
        }
    });
});

//delete employee
router.delete('/employee/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code:200,message:'Employee Deleted Successfully',
        deleteEmployee:data})
        }else{
            console.log(err);
        }

    });
})


 module.exports= router;