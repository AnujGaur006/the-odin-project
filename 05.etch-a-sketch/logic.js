document.addEventListener("DOMContentLoaded", () => {
    const parentElem = document.querySelector('.grid-container');
    const btn = document.getElementById("generate");
    const itemCountInput = document.getElementById('itemCount');

    btn.addEventListener('click', () => {
        const itemCount = parseInt(itemCountInput.value, 10);
        console.log(itemCount);
        parentElem.innerHTML = "";

        for(let iter=0; iter< itemCount*itemCount; iter++){
            const innerElem = document.createElement('div');
            innerElem.classList.add('grid-item');
            innerElem.style['flex'] = '1 0 calc(100%/' + itemCount + ')';
            console.log(`1 0 calc(100%/${itemCountInput});`);
            parentElem.appendChild(innerElem);
        }

        const gridItems = document.querySelectorAll(".grid-item"); 
        gridItems.forEach(item => 
            {
                item.addEventListener("mouseenter", () => {
                    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                    item.style.backgroundColor = randomColor;
                });

                item.addEventListener('mouseleave', () => {
                    item.style.backgroundColor = randomColor ; // Reset to default
                });
            });

    })
})
