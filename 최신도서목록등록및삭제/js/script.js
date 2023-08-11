import books from './booklist.js';

let newBooks = document.querySelector('#content')
let newSubject = document.querySelector('#subjectId')
let newAuthor = document.querySelector('#authorId')
let newPublisher = document.querySelector('#publisherId')
let newDate = document.querySelector('#dateId')
let newPrice = document.querySelector('#priceId')
let newSummary = document.querySelector('#summaryId')
let newPhoto = document.querySelector('#photoId')
let newAddon = document.querySelector('#addon')

function list(){
 let ul = "<ul>"
for (let i in books){
ul += "<li>"
ul += "<div>"
    ul+=  `<img src="../images/${books[i].photo}" onerror="this.src='../images/noimage.gif'" alt="">`
    ul+= `<p><span>제목:</span> ${books[i].subject}</p>`
    ul+= `<p><span>저자</span>: ${books[i].author}</p>`
    ul+= `<p<span>출판사:</span> ${books[i].publisher}</p>`
    ul+= `<p><span>발행일:</span> ${books[i].date}</p>`
    ul+= `<p><span>가격:</span> ${books[i].price}</p>`
    ul+= `<p><span>요약:</span> ${books[i].summary}</p>`
    ul += "</div>"
    ul +=  `<button id="delbtn">삭제</button>`
ul += "</li>"
}
ul += "</ul>"
newBooks.innerHTML = ul;
}
list()
let addbtn = document.querySelector('#addbtn')
addbtn.addEventListener('click', function(){
    let add = {
        subject: newSubject.value,
        author: newAuthor.value,
        publisher : newPublisher.value,
        date : newDate.value,
        price : newPrice.value,
        summary : newSummary.value,
        photo : newPhoto.value
    }
books.push(add)
list()
newSubject.value=""
newAuthor.value=""
newPublisher.value=""
newDate.value=""
newPrice.value=""
newSummary.value=""
newPhoto.value=""
return false;
})
let delbtn = document.querySelector('#delbtn')
    delbtn.addEventListener('click', function(){
      let parentIndex = books.indexOf(delbtn.parentElement);
      books.splice(parentIndex, 1)
      list()
    })
console.log(books)