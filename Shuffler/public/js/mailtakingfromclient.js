const ul = document.querySelector("ul"),
    input = document.querySelector("input"),
    tagNumb = document.querySelector(".details span");

let maxtags = 10, tags = [];

counttags();
createTag();

function counttags(){
    input.focus();
    tagNumb.innerText = maxtags - tags.length;
}

function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag =>{
        //<i class="fa-solid fa-eraser"></i>
        let liTag = `<li>${tag} <i class="fa-solid fa-eraser" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);
    });
    counttags();
}

function remove(element, tag){
    let index  = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    counttags();
}

function addTag(e){
    if(e.key === "Enter"){
        let tag = e.target.value.replace(/\s+/g, ' ');
        if(tag.length > 1 && !tags.includes(tag) && tag.indexOf('@')!==-1 && tag.indexOf('@')!==0){
            if(tags.length < 10){
                tag.split(',').forEach(tag => {
                    if(!tags.includes(tag)){
                        tags.push(tag);
                        createTag();
                    }
                });
            }
        }
        e.target.value = "";
    }
}

input.addEventListener("keyup", addTag);

const removeBtn = document.querySelector(".details button");
removeBtn.addEventListener("click", () =>{
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => li.remove());
    counttags();
});