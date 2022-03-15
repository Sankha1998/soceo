

function detectOption(op_clicked,q_no){

    

    //call api for the answer


    var ans = 2 // ans is option 2 for question 1


    if(op_clicked===2){

        $(".op"+op_clicked).attr('src','static/img/quiz/green.png')
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

        $(".op"+op_clicked).attr('src','static/img/quiz/red.png')

    }




    
}

//call api and set questions
var qArr = [0,"q1.png","q2.png","q3.png"]

function nextQ(qno){

    $(".question").attr('src','static/img/quiz/'+qArr[qno])

    var nextqno = qno+1
    if(nextqno<qArr.length){

        $(".nextq").attr('onclick','nextQ('+nextqno+')')

    }else{
        $(".nextq").attr('onclick','nextQ('+1+')')
    }

    for (let i = 1; i < 8; i++) {
        
        var op = "op"+i
        $(".op"+i).attr('src','static/img/quiz/'+op+'.png')
        
    }
    


}