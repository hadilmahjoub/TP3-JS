const li = document.querySelectorAll('li');
li.forEach(e => {
    e.className = "btn btn-outline-secondary";
    e.onclick =  function() {
        // console.log(this);
        e.style.color = "#"+Math.floor(Math.random() * 16777215).toString(16);  //! 16777215 = FFFFFF => white
    }
})