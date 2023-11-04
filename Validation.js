function validation(event) {
     let fName = document.getElementsByTagName('input')[0].value;
     let lName = document.getElementsByTagName('input')[1].value;

     if(fName === null || fName === '') {
          let inputText = document.getElementsByTagName('input');
          inputText[0].style.border = `solid 2px red`;

          let errorMessage = document.getElementsByTagName('span');
          errorMessage[0].innerText = `This is Empty field`;
          errorMessage[0].style.cssText = `color:red`
          return false;
     }
     if(lName === null || lName === '') {
          let inputText = document.getElementsByTagName('input');
          inputText[1].style.border = `solid 2px red`;

          let errorMessage = document.getElementsByTagName('span');
          errorMessage[1].innerText = `This is Empty field`;
          errorMessage[1].style.cssText = `color:red`
          return false;
     }
     console.log(`${fName} ${lName}`);
     event.preventDefault();
     return true;
}