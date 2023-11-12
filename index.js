const title=document.getElementById("title");
const desc=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");
const addbtn=document.getElementById("add");

const tasks=localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[];
showAllTaks();
function showAllTaks()
{
    tasks.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","tasks");

        const innerDiv=document.createElement("div");
        div.append(innerDiv);

        const p=document.createElement("p");
        p.innerText=value.title;

        innerDiv.append(p);

        const span=document.createElement("span");
        span.innerText=value.desc;

        innerDiv.append(span);

        const deletebtn=document.createElement("button");
        deletebtn.setAttribute("class","delete-btn");
        deletebtn.innerText="🗑️";

        deletebtn.addEventListener("click",()=>{
            removeAllTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAllTaks();
        });

        div.append(deletebtn);
        container.append(div);
    })
}

function removeAllTasks(){
    tasks.forEach((value)=>{
        const div=document.querySelector(".tasks");
        if(div)
        {
        div.remove();
        }
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeAllTasks();
    tasks.push({
        title:title.value,
        desc:desc.value,
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTaks();
    title.value="";
    desc.value="";
})

