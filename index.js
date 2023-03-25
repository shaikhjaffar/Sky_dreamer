$('.image').ripples({
    dropRadius: 25,
    perturbance: 0.02,
  });

  let title = document.getElementById('title')
  let myText = "WE CAN WRITE HERE COMPANY SLOGAN"
  const input = document.getElementById('varibale')
  const All = document.getElementById('all')
  const button = document.getElementById('btn')
  const inputBox = document.getElementById('input')
  const dataBOx = document.getElementById('data-box')
  let inputIndex = 0
  let index = 1;
  let data = [];
   const formInput = [
    {
      type :"number",
      value : "name",
      placeholder : "Enter your number"
    },
    {
      type :"text",
      value : "Contact No",
      placeholder : "Enter your Name"
    },
    {
      type :"email",
      value : "Email",
      placeholder : "Enter your Email"
    },
   ]
  const typewriter = () =>{
    let new_title = myText.slice(0,index);
    title.innerText = new_title;
     index > myText.length ? index = 1 : index++;
     setTimeout(()=> typewriter(),150)
  }
   typewriter()
  
   function changeInput() {
      inputIndex > formInput.length-2 ? 
        change() : inputIndex++
       data.push(inputBox.value)
       inputBox.type = formInput[inputIndex].type
       inputBox.placeholder = formInput[inputIndex].placeholder
       console.log(data)
      inputBox.innerHTML = ""
   }
   
   function change(){
      inputIndex = 0
      All.style.display = "none"
      button.style.display = "block"
   }
  
  
  