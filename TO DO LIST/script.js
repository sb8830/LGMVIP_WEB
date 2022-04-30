document.querySelector('#push').onclick = function()
{
    let today =new Date();
    let month = today.getMonth()+1;
    let year = today.getFullYear();
    let date = today.getDate();

    let current_date = `${month}/${date}/${year}`;

    if(document.querySelector('#newtask input').value.length==0)
    {
        alert("Please enter a task")
    }
    else
    {
        document.querySelector('#tasks').innerHTML
        += `<div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').
        value}         ${current_date}
        </span>
        <button class="delete">X</button>
        </div>`;

        var curr_tasks =document.querySelectorAll('.delete');

        for(var i=0 ; i<curr_tasks.length; i++)
        {
            curr_tasks[i].onclick = function(){
                this.parentNode.remove()
            }
        }

       

       document.querySelector('#newtask input').value = "";
    }
}