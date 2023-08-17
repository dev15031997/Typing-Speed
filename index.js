const setOfWords=["My name is Dev Pal and I am a student.","Hope you are having fun while doing this project.","If you want the source code then link is given below in the description.","So that you create your own project."];

const msg=document.getElementById("msg")
const myWords=document.getElementById("myWords")
const btn=document.getElementById("btn")
let startTime,endTime;

// when user click on start button then only he/she should be able to write otherwise it should be disabled
function playGame()
{
    let randomMsg=Math.floor(Math.random()*setOfWords.length)
    msg.innerText=setOfWords[randomMsg]

    // to find when user clicked on the start button
    let date=new Date()
    startTime=date.getTime()
    btn.innerText="Done"

}

function endPlay()
{
    let date=new Date()
    endTime=date.getTime()
    let totalTime=((endTime-startTime)/1000)            
  
    // to find how many words user have written
    let totalString=myWords.value
    let wordCount=wordCounter(totalString)

    // to calculate speed
    let speed=Math.round((wordCount/totalTime) *60)                   //60 because 1 min has 60 sec

    // final msg
    let finalMsg="You typed at speed of "+speed+ " words per minute ."
     
    // addition to final  msg we will put error words
    finalMsg+=compareWords(msg.innerText,totalString)

    msg.innerText=finalMsg

}

function compareWords(str1,str2)
{
   let words1=str1.split(" ") 
   let words2=str2.split(" ") 
    let cnt=0;

   words1.forEach(function(item,index)
   {
        if(item==words2[index])
        {
            cnt++;
        }
   });

   let errorWords=(words1.length-cnt)
   return (cnt + " Correct out of " + words1.length + " words and the total number of errors are "+ errorWords+ " .")


}

function wordCounter(str)
{
    let response=str.split(" ").length;
    return response; 
}

btn.addEventListener("click",function()
{
     if(this.innerText=="Start")
     {
        myWords.disabled=false;
        playGame()
     }
     else if(this.innerText=="Done")
     {
        myWords.disabled=true;
        btn.innerText=="Start"
        endPlay()
     }
})

