const users = ['Medha', 'Hello', 'Practice'];
const members = document.querySelector('.members');
const add = document.querySelector('.add')


const userIcons = () =>{
    users.reverse();
    users.map((curEle) =>{
        members.insertAdjacentHTML('afterbegin',`
        <button class = "btn" ><span>${curEle}</span></button>
        `);
        
        
        
    })
};

add.addEventListener('click', () => {
    let userName = prompt('Please enter your name');

    if(userName != null && !users.includes(userName)){
        users.push(userName);
        console.log(users);
        members.insertAdjacentHTML('afterbegin',`
        <button class = "btn"><span>${userName}</span></button>
        
        `);
     
        
    }else{
        alert('Sorry!! username already exist');
    }
})

userIcons();