let arr= []
let content_box = document.getElementById("content")
const DisplayMsg =(msgText)=>{
    let msg = document.getElementById("msg-box")
    msg.innerHTML=msgText
    msg.style.display="block"
    msg.style.display="flex"
}
const gettingData = ()=>{
    const xhr =new XMLHttpRequest()
    xhr.open("GET","getting.php",true)
    // xhr.setRequestHeader("Content-type","application/json")
    xhr.responseType="json"
    xhr.onload=()=>{
        if (xhr.status===200) {
            let x= xhr.response
            content_box.innerHTML=""
            for (let i = 0; i < x.length; i++) {
                const element_i = x[i];
                 arr.unshift(element_i)
            }
            for (let j = 0; j < arr.length; j++) {
                const element_j = arr[j];
                
                let html_syntax= `<div id="table" class="mt">
                <div class="firstdiv margin">${element_j.data}</div>
                <div class="seconddiv margin"><button class="editBtn pd" onclick="editbtn(${j})">EDIT</button></div>
                <div class="thirddiv margin"><button class="delBtn pd" onclick="delbtn(${j})">DELETE</button></div>
            </div>`
            content_box.innerHTML+=html_syntax
             }
        }
        else{
            console.log("please try again")
        }
    }
    xhr.send()
}
gettingData()

const additem =()=>{
    let InputValue = document.getElementById("item")
    arr=[]
    const xhr = new XMLHttpRequest()
    xhr.open("POST","inserting.php",true)
    // xhr.setRequestHeader("Content-type","application/json")
    xhr.onload=()=>{
        if (xhr.status===200) {
            console.log(xhr.responseText)
            gettingData()
            DisplayMsg(xhr.responseText)
        }
        else{
            console.log("please try again")
        }
    }
    const sendingData = {value:InputValue.value}
    const sendingDataChange = JSON.stringify(sendingData)
    // console.log(sendingDataChange)
    xhr.send(sendingDataChange)
    InputValue.value=''
}

console.log(arr)

const delbtn = (argument) =>{
    let DelElement = arr[argument].id
    const xhr = new XMLHttpRequest()
    xhr.open("POST","delete.php",true)
    // xhr.setRequestHeader("Content-type","application/json")
    xhr.onload=()=>{
        if (xhr.status===200) {
            arr=[]
            console.log(xhr.responseText)
            content_box.innerHTML=""
            gettingData()
            DisplayMsg(xhr.responseText)
        }
        else{
            console.log("please try again")
        }
    }
    xhr.send(DelElement)
}
const editbtn = (argument) =>{
    let EditElement = arr[argument]
    let val = prompt("enter your changing text",EditElement.data)
    // console.log(val,EditElement.id)
    arr=[]
    const xhr = new XMLHttpRequest()
    xhr.open("POST","editing.php",true)
    // xhr.setRequestHeader("Content-type","application/json")
    xhr.onload=()=>{
        if (xhr.status===200) {
            console.log(xhr.responseText)
            gettingData()
            DisplayMsg(xhr.responseText)
        }
        else{
            console.log("please try again")
        }
    }
    const sendingData = {id:EditElement.id,data:val}
    const sendingDataChange = JSON.stringify(sendingData)
    // console.log(sendingDataChange)
    xhr.send(sendingDataChange)
}