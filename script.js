const username=document.getElementById('username');
const submitBtn=document.getElementById('submit');
let easyCircle=document.getElementById('easyCircle');
let mediumCircle=document.getElementById('mediumCircle');
let hardCircle=document.getElementById('hardCircle');
const easy = document.getElementById('Easy');
const medium = document.getElementById('Medium');
const hard = document.getElementById('Hard');
async function submit(){
    const user = username.value.trim();
    if(!user){
        alert("please enter username");
        return;
    }
   try{
        const response = await fetch(`https://leetcode-stats.tashif.codes/${user}`);
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }
        const data =await response.json();
    const easyDone = data.easySolved;
    const easyTotal = data.totalEasy;
    const mediumDone=data.mediumSolved;
    const mediumTotal=data.totalMedium;
    const hardDone = data.hardSolved;
    
    
    const hardTotal=data.totalHard;
    const easyPercent = (easyDone/easyTotal)*100;
    const mediumPercent = (mediumDone/mediumTotal)*100;
    const hardPercent = (hardDone/hardTotal)*100;
    
    
    easyCircle.style.setProperty('--progress-degree',`${easyPercent.toFixed(2)}%`);
    mediumCircle.style.setProperty('--progress-degree',`${mediumPercent.toFixed(2)}%`);
    hardCircle.style.setProperty('--progress-degree',`${hardPercent.toFixed(2)}%`);
   
    easy.textContent=`Easy : ${easyDone}/${easyTotal}`;
   medium.textContent=`Medium : ${mediumDone}/${mediumTotal}`;
   hard.textContent=`Hard : ${hardDone}/${hardTotal}`;
}
   catch{
        alert("Network Error !!!!!");
   }
}


submitBtn.addEventListener('click',submit);


username.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        submit();
    }
});