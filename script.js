/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee=>{
      if(employee.profession === "developer")
      console.log(employee);
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(element => {
      if(element.profession === "developer")
      console.log(element);
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj4={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(obj4);
    console.log(obj4);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let newArray;
    arr.forEach(element => {
      if(!element.profession === "admin")
      newArray.push(element);
    });
  
    newArray.forEach(element => {
      console.log(element);
    });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2=[
      { id: 4, name: "Alice", age: "18", profession: "developer" },
      { id: 5, name: "Bob", age: "22", profession: "developer" },
      { id: 6, name: "Cloye", age: "23", profession: "developer" }
    ];
  
    let array=arr.concat(arr2);
    array.forEach(element => {
      console.log(element);
    });
  }
  