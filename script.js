// select the element
const t_book = document.querySelector('.t_book');
const t_author = document.querySelector('.t_author');
const t_id = document.querySelector('.t_id');
const bott = document.querySelector('button');
const info = document.querySelector('#proprty');
const book = document.querySelector('.addBook');
const clea = document.querySelector('.clear');
const delet = document.querySelector('.delete');
const table = t_id.getElementsByClassName('deletRow').length;

    // set number of id
    let i = '000';

    //console.log(leng);
    const count = () =>{

    // check the number of books in stor
    return i = t_id.children.length + 1;

    }


    // create element
    let create_delete = document.createElement('button');

// clear the field of book information
const clear = () => {
    const removeb = document.querySelector('.book').value = '';
    const removea = document.querySelector('.author').value = '';
//    console.log(clea);
}

const addBook = () => {
    // get field value
    const bookcontent = document.querySelector('.book').value;
    // get field value
    const authorcontent = document.querySelector('.author').value;
    // get field value
    const idcontent = document.querySelector('.disid').value;

    // check the validation of fields
    if(bookcontent.length >= 5 && authorcontent.length >= 5){

        // create element
        const createt_book = document.createElement('div');
        // add value of field to new elemnet
        createt_book.innerHTML = bookcontent;
        // add style by add class attribuete
        createt_book.classList.add('bookStyle' ,`item_${i}`);
        // append to parent
        t_book.appendChild(createt_book);

        // create element
        const createt_author = document.createElement('div');
        // add value of field to new elemnet
        createt_author.innerHTML = authorcontent;
        // add style by add class attribuete
        createt_author.classList.add('bookStyle' ,`item_${i}`);
        // append to parent
        t_author.appendChild(createt_author);

        // create element
        const createt_id = document.createElement('div');
        // add value of field to new elemnet
        createt_id.innerHTML = idcontent;
        // add style by add class attribuete
        createt_id.classList.add( 'bookStyle' ,`item_${i}`);
        // append to parent
        t_id.appendChild(createt_id);

        // create element
        let create_delete = document.createElement('button');
        // add value of field to new elemnet
        create_delete.innerHTML = "X";
        // add style by add class attribuete
        create_delete.style.cssText = 
        "background: red; color: black; font-weight: 600; width: 30px"
        // add style by add class attribuete
        create_delete.classList.add('bookStyle' ,`item_${i}`);
        // append to parent
         createt_id.appendChild(create_delete);
        
        clear(); 
        
        // hidd the book field
        info.style.cssText = "visibility: hidden "
    }
}

// display the book field
const showProperty = () => {
    const idcontent = document.querySelector('.disid').value = count();
    info.style.cssText = "visibility: visible "
//    console.log(t_id.children.length)
}

// select element
const muElem = document.querySelector('.t_id');

// when click get children
muElem.onclick = function() {

    // stor the child on array
    const childs = Array.from(this.children);

    // check which child was clicked
    childs.forEach(child => child.addEventListener('click',function(){

        // get class name which clicked
        const classname = this.classList[1];

        // select all element whish have the same class name
        var divs = document.getElementsByClassName(classname);

        // iterate  all element the same class name
        while(divs.length > 0){

            // remove all element whish have same class name
            divs[0].parentNode.removeChild(divs[0]);
        }
            count();
    }))
};

// hidd the book field
const hedden = () => info.style.cssText = "visibility: hidden ";

// show the book field when click
const onclickshow = bott.addEventListener('click',showProperty);

// add book when click
const onclickadd = book.addEventListener('click',addBook);

// clear the book field
const onclickclear = clea.addEventListener('click',clear);

// hidd the book field
const del = delet.addEventListener('click',hedden);
