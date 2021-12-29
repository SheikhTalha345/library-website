console.log("CHECKED");
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
        console.log("Added");

    }
}

class Display {

    add(book) {
        console.log("added");
        let tBody = document.getElementById("tableBody");

        let uiString = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`;
        tBody.innerHTML += uiString;
    }
    Validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            console.log("Enter first")
            return false;
        }
        else {
            return true;
        }
    }

    clear() {
        let a = document.getElementById("libraryForm");
        a.reset();
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if (type === 'success') {
            boldText = 'Success';
        }
        else {
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                        <strong>${boldText}:</strong> ${displayMessage}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                        </button>
                                    </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);

    }
}

//Add event Listener
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    if (cooking.checked) {
        type = cooking.value;
    }
    if (programming.checked) {
        type = programming.value;
    }

    let book = new Book(name, author, type);
    let display = new Display();
    if (display.Validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        display.show('danger', 'Sorry you cannot add this book');
    }
    e.preventDefault();
}
