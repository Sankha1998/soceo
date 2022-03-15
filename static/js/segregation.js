

function detectOption(op_clicked,q_no){

    

    //call api for the answer
    


    var ans = 2 // ans is option 2 for question 1


    if(op_clicked===3){

        $(".op"+op_clicked).attr('src','static/img/segregation/green.png')
        Toastify({
            text: "Correct !",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #96c93d, #96c93d)",
            },
            
          }).showToast();
        

    }else{
        Toastify({
            text: "Wrong !",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            
            style: {
            background: "linear-gradient(to right, #93291E, #93291E)",
            },
          }).showToast();

        $(".op"+op_clicked).attr('src','static/img/segregation/red.png')

    }




    
}

//call api and set questions
var qArr = [0,"banana.png","bandaid.png","bottle1.png","cardboardbox.png"]

function nextQ(qno){

    $(".question").attr('src','static/img/segregation/'+qArr[qno])

    var nextqno = qno+1
    if(nextqno<qArr.length){

        $(".nextq").attr('onclick','nextQ('+nextqno+')')

    }else{
        $(".nextq").attr('onclick','nextQ('+1+')')
    }

    for (let i = 1; i < 8; i++) {
        

        if(i==1){
            $(".op"+i).attr('src','static/img/segregation/biodegradablewaste.png')
        }else if(i==2){
            $(".op"+i).attr('src','static/img/segregation/plasticwaste.png')
        }
        else if(i==3){
            $(".op"+i).attr('src','static/img/segregation/otherrecyclablewaste.png')
        }
        else if(i==4){
            $(".op"+i).attr('src','static/img/segregation/sanitarywaste.png')
        }
       
        
    }
    


}