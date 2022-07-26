fetch('./pagination.json')
.then(response => {return response.json()})
.then(data => {
    mainFunction(data);
    } 
);

/* Table creation
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
        </table>
    </div>
*/

/* Pagination
    <div>
        <div id="First"></div>
        <div id="Previous"></div>
        <div id="1"></div>
        <div id="2"></div>
        <div id="3"></div>
        <div id="4"></div>
        <div id="5"></div>
        <div id="Next"></div>
        <div id="Last"></div>
    </div>
*/
const mainFunction = function(data) {
    console.log(data);

    var page = 0;

    const h1Elem = document.createElement('h1');
    h1Elem.setAttribute('id', 'title');
    h1Elem.innerText = "Pagination";

    const pElem = document.createElement('p');
    pElem.setAttribute('id', 'description');
    pElem.innerText = "The page shows a table with pagination bar";

    document.body.append(h1Elem);
    document.body.append(pElem);

    const thr = document.createElement('tr');
    const headings = ['Id', 'Name', 'Email'];
    for(let i =0; i < headings.length; i++) {
        const th = document.createElement('th');
        th.innerText = headings[i];
        thr.append(th);
    }
    
    const theader = document.createElement('thead');
    theader.setAttribute('class', 'table-dark');
    theader.append(thr);

    const tbody = document.createElement('tbody')
    tbody.classList.add('table-group-divider');
    for(let i =0; i < 5; i++) {
        const id_id = 'id' + i;
        const id = document.createElement('td');
        id.setAttribute('id', id_id);
        id.innerText = data[i].id;

        const name_id = 'name' + i;
        const name = document.createElement('td');
        name.setAttribute('id', name_id);
        name.innerText = data[i].name;

        const email_id = 'email' + i;
        const email = document.createElement('td');
        email.setAttribute('id', email_id);
        email.innerText = data[i].email;

        const tr = document.createElement('tr');
        tr.append(id, name, email);
        tbody.append(tr);
    }

    const table = document.createElement('table');
    table.setAttribute('id', 'table');
    table.classList.add('table');
    table.classList.add('table-bordered');
    table.append(theader, tbody);

    const divTable = document.createElement('div');
    divTable.classList.add('container');
    divTable.classList.add('table-responsive');
    divTable.classList.add('mt-4');
    divTable.append(table);

    document.body.append(divTable);

    // add pagination
    const first = document.createElement('button');
    first.innerText = "First"
    const previous = document.createElement('button');
    previous.innerText = "Previous";
    previous.style.borderLeft = '0px';
    const button1 = document.createElement('button');
    button1.innerText = "1";
    button1.style.borderLeft = '0px';
    const button2 = document.createElement('button');
    button2.innerText = "2";
    button2.style.borderLeft = '0px';
    const button3 = document.createElement('button');
    button3.innerText = "3";
    button3.style.borderLeft = '0px';
    const button4 = document.createElement('button');
    button4.innerText = "4";
    button4.style.borderLeft = '0px';
    const button5 = document.createElement('button');
    button5.innerText = "5";
    button5.style.borderLeft = '0px';
    const next = document.createElement('button');
    next.innerText = "Next";
    next.style.borderLeft = '0px';
    const last = document.createElement('button');
    last.innerText = "Last";
    last.style.borderLeft = '0px';

    const divPagination = document.createElement('div');
    divPagination.setAttribute('id', 'buttons');
    divPagination.setAttribute('class', 'container d-flex justify-content-center');
    divPagination.style.textAlign = 'center';
    divPagination.append(first, previous, button1, button2, button3, button4, button5, next, last );
    document.body.append(divPagination);

    function pageRender(page) {
        for(let i =0; i < 5; i++) 
        {
            const id_id = 'id' + i;
            const id = document.getElementById(id_id);
            id.innerText = data[page*5+i].id;

            const name_id = 'name' + i;
            const name = document.getElementById(name_id);
            name.innerText = data[page*5+i].name;

            const email_id = 'email' + i;
            const email = document.getElementById(email_id);
            email.innerText = data[page*5+i].email;
        }
    }

    //add event listeners
    first.addEventListener('click', function(event) {
        page = 0;
        pageRender(page);
    });

    previous.addEventListener('click', function(event){
        if(page != 0) {
            page = page-1;
            pageRender(page);
        }
    });

    button1.addEventListener('click', function(event){
        page = 1;
        pageRender(page);
    });

    button2.addEventListener('click', function(event){
        page = 2;
        pageRender(page);
    });

    button3.addEventListener('click', function(event){
        page = 3;
        pageRender(page);
    });

    button4.addEventListener('click', function(event){
        page = 4;
        pageRender(page);
    });

    button5.addEventListener('click', function(event){
        page = 5;
        pageRender(page);
    });

    next.addEventListener('click', function(event){
        const lastPageNumber =  (data.length/5) - 1;
        if(page < lastPageNumber ) {
            page = page+1;
            pageRender(page);
        } else if (page === lastPageNumber) {
            pageRender(page);
        }
    });

    last.addEventListener('click', function(event){
        page = (data.length/5)- 1;
        pageRender(page);
    });
}