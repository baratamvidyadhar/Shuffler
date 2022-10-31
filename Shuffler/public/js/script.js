const getAgents = document.getElementById("getAgents");
const setAgents = document.getElementById("setAgents");
const finalAgent = document.getElementById("finalAgent");

getAgents.addEventListener('click',()=>{
    let s=document.querySelector("body > div > div.content > ul").innerText;
    finalAgent.setAttribute('value',s.split('\n').join(';'));
    const form = document.getElementById('myform');
    let input = document.createElement('input');
    input.type='submit';
    form.appendChild(input);
    console.log(form);
    form.submit();
});