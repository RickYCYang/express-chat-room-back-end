const express = require("express");
const router = express.Router();

const firebaseAdmin = require("../connections/firebase_admin_connect.js");
const employeeRef = "employee"
const systemConfigRef = "System Option List"


router.get("/getDepartmentList", (req,res) => {
    let departmentList = [];
    firebaseAdmin.ref(systemConfigRef + "/"+ "department").once("value", (snapshot) => {
        Object.keys(snapshot.val()).forEach((key, index) => {
            //console.log(key, snapshot.val()[key]);
            departmentList.push(
             {"dept": snapshot.val()[key], "seq": index}   
            );
        });
        res.json(departmentList);
    });
});

router.get("/getStatusList", (req,res) => {
    let statusList = [];
    firebaseAdmin.ref(systemConfigRef + "/"+ "status").once("value", (snapshot) => {
        Object.keys(snapshot.val()).forEach((key, index) => {
            statusList.push(
             {"value": snapshot.val()[key], "seq": index}   
            );
        });
        res.json(statusList);
    });
});

router.get("/getEmployeeList", (req,res) => {
    firebaseAdmin.ref(employeeRef).once("value", (snapshot) => {
        let allEmployee = snapshot.val();
        let employeeByDept;
        let employee;
        let employeeList = [];
        /* All employee by department */
        if(allEmployee){
            Object.keys(allEmployee).forEach((key, index) => {
                employeeByDept = allEmployee[key];
                /* Employee for specific department */
                Object.keys(employeeByDept).forEach((key, index) => {
                    employee = employeeByDept[key];
                    employeeList.push(employee);
                });  
            });
            res.json(employeeList);
        }else{
            res.json({"message":"no data"});
        }
        
    });
});

router.post("/setEmployee", (req, res) => {
    let oldEmployee = req.body.oldEmployee;
    let newEmployee = req.body.newEmployee;
    console.log("oldEmployee", oldEmployee);
    console.log("newEmployee", newEmployee);
    if(oldEmployee != null){
        /* Delete Old Employee */
        firebaseAdmin.ref(employeeRef + "/" + oldEmployee.department + "/" + oldEmployee.englishName+ oldEmployee.chineseName).remove();
    }
    if(newEmployee != null){
        /* Insert New Employee */
        firebaseAdmin.ref(employeeRef + "/" + newEmployee.department + "/" + newEmployee.englishName + newEmployee.chineseName).set(newEmployee);
    }
    res.json({"message":"success"});
});

module.exports = router; 