


function signup(){
    user=usernamereg.value
    email=emailreg.value
    pass=passwordreg.value

    console.log(user,email,pass);

    loginDetails={
        user,
        email,
        pass,
        balance:0
    }
    if(user=="",email=="",pass==""){
        alert("Enter all fields")
    }else if(user in localStorage){
            alert(`User already exist. Please Sign-In` )
        }else{
            localStorage.setItem(user,JSON.stringify(loginDetails))
            alert(`User ${loginDetails.user} added successfully`)

            window.location="./index.html"
    }
}


function signin(){
    user=usernamelogin.value
    pass=passwordlogin.value
    console.log(user,pass);

    if(user in localStorage){
        loginDetails=JSON.parse(localStorage.getItem(user));
        if(pass==loginDetails.pass){
            alert(`Login Successful`)
            window.location="./main.html"
        }else{
            alert('Password Mismatching')
        }
    }else{
        alert('User does not exist. Please register')
    }
}
// function logout(){
//     localStorage.clear();
    
// }
function clearAll(){
    alert("Are you sure to clear data")
    window.location="./main.html"
    
}


 let  amountBal=0
 let tempBal=0
function income(){

    typeIncome=incometype.value
    amountBal=incomeamount.value
    amountBal=Math.floor(amountBal);
    tempBal+=amountBal

    if(amountBal=="" || typeIncome==""){
        alert('Enter all fields')
    }else{
            document.getElementById("balanceValue").innerHTML=`<div style="color: white;font-weight: 700;font-size: 30px;" id="balanceValue">Rs ${tempBal}/-</div>`
        
            
        document.getElementById("extension").innerHTML+=`<tbody><tr>
        <td scope="col">${typeIncome}</td>
        <td scope="col">Rs.${amountBal}</td>
        <td scope="col">Rs.${tempBal}</td>
        <td scope="col">${date}</td>
      </tr></tbody>`
      incometype.value="";
      incomeamount.value="";
      
}
}
let date=new Date();

function expense(){

    typeExpense=expensetype.value
    amountExp=expenseamount.value
    amountBal=Math.floor(amountBal);
    tempBal-=amountExp
    

    if(amountExp=="" || typeExpense==""){
        alert('Enter all fields');}
       else if(tempBal<0){
        document.getElementById("expenseValue").innerHTML=`<div style="color: white;font-weight: 700;font-size: 30px;" id="balanceValue">Rs ${tempBal}/-</div>`
        
        document.getElementById("extend").innerHTML+=`<tbody><tr>
        <td scope="col">${typeExpense}</td>
        <td scope="col">Rs.${amountExp}</td>
        <td scope="col">Debt of Rs.${Math.abs(tempBal)}</td>
        <td scope="col">${date}</td>
      </tr></tbody>`
      expensetype.value="";
      expenseamount.value="";
        }else{
            document.getElementById("expenseValue").innerHTML=`<div style="color: white;font-weight: 700;font-size: 30px;" id="balanceValue">Rs ${tempBal}/-</div>`
        
            document.getElementById("extend").innerHTML+=`<tbody><tr>
            <td scope="col">${typeExpense}</td>
            <td scope="col">Rs.${amountExp}</td>
            <td scope="col">Rs.${tempBal}</td>
            <td scope="col">${date}</td>
          </tr></tbody>`
          expensetype.value="";
          expenseamount.value="";
        }
        }
