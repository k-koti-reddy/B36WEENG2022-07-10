{/* <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="First Name">
    </div>
    <div class="form-group col-md-6">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" placeholder="Last Name">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="maleRadio" value="male" checked>
          <label class="form-check-label" for="maleRadio">
            Male
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="femaleRadio" value="female">
          <label class="form-check-label" for="femaleRadio">
            Female
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gender" id="transgenderRadio" value="transgender">
          <label class="form-check-label" for="transgenderRadio">
            Transgender
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Food</div>
    <div class="col-sm-10">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="food1 value="idly">
            <label class="form-check-label" for="food1">
            Idly
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="food2 value="dosa">
            <label class="form-check-label" for="food2">
            Dosa
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="food3 value="vada">
            <label class="form-check-label" for="food3">
            Vada
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="food4 value="poori">
            <label class="form-check-label" for="food4">
            Poori
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="food5 value="upma">
            <label class="form-check-label" for="food5">
            Upma
            </label>
        </div>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}

// First Name
const labelFname = document.createElement('label');
labelFname.setAttribute("for", "first-name");
labelFname.innerText = 'First Name';

const formFname = document.createElement('input');
formFname.setAttribute('type', 'text');
formFname.setAttribute('id', 'first-name');
formFname.setAttribute('name', 'fname');
formFname.setAttribute('class', 'form-control');
formFname.setAttribute('placeholder', 'First Name');

const fNameContainer = document.createElement('div');
fNameContainer.classList.add('col-md-6');
fNameContainer.classList.add('form-group');
fNameContainer.append(labelFname, formFname);

// Last Name
const labelLname = document.createElement('label');
labelLname.setAttribute("for", "last-name");
labelLname.innerText = 'Last Name';

const formLname = document.createElement('input');
formLname.setAttribute('id', 'last-name');
formLname.setAttribute('type', 'text');
formLname.setAttribute('name', 'lname');
formLname.setAttribute('class', 'form-control');
formLname.setAttribute('placeholder', 'Last Name');

const lNameContainer = document.createElement('div');
lNameContainer.classList.add('col-md-6');
lNameContainer.classList.add('form-group');
lNameContainer.append(labelLname, formLname);

const formRow = document.createElement('div');
formRow.setAttribute('class', 'row');
formRow.append(fNameContainer, lNameContainer);

// Gender

{/*   <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="maleRadio" value="male" checked>
          <label class="form-check-label" for="maleRadio">
            Male
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="femaleRadio" value="female">
          <label class="form-check-label" for="femaleRadio">
            Female
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gender" id="transgenderRadio" value="transgender">
          <label class="form-check-label" for="transgenderRadio">
            Transgender
          </label>
        </div>
      </div>
    </div>
  </fieldset> */}

const resContainer = document.createElement('div');
resContainer.setAttribute('class', 'col-sm-10');

const genderLegend = document.createElement('legend');
genderLegend.setAttribute('class', 'col-form-label col-sm-2 pt-0');
genderLegend.innerText = "Gender"

const genderList = ['Male', 'Female', 'Transgender'];
for(let i =0; i < 3; i++) {
    const formRadio = document.createElement('input');
    let radioId = "radio" + i;
    formRadio.setAttribute('type', 'radio');
    formRadio.setAttribute('name', 'gender');
    formRadio.setAttribute('class', 'form-check-input');
    formRadio.setAttribute('id', radioId);
    formRadio.setAttribute('value', genderList[i]);

    const label = document.createElement('label');
    label.setAttribute('class', 'form-check-label');
    label.setAttribute('for', radioId);
    label.innerText = genderList[i];

    const container = document.createElement('div');
    container.setAttribute('class', 'form-check');
    container.append(formRadio, label);

    resContainer.append(container);
}

const rowContainer = document.createElement('div');
rowContainer.setAttribute('class', 'row');
rowContainer.append(genderLegend, resContainer);

const fieldSet = document.createElement('fieldset');
fieldSet.setAttribute('class', 'form-group mt-2');
fieldSet.appendChild(rowContainer);

// Choice of food
{/* <div class="form-group row">
<div class="col-sm-2">Food</div>
<div class="col-sm-10">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="food1 value="idly">
        <label class="form-check-label" for="food1">
        Idly
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="food2 value="dosa">
        <label class="form-check-label" for="food2">
        Dosa
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="food3 value="vada">
        <label class="form-check-label" for="food3">
        Vada
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="food4 value="poori">
        <label class="form-check-label" for="food4">
        Poori
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="food5 value="upma">
        <label class="form-check-label" for="food5">
        Upma
        </label>
    </div>
</div>
</div> */}

const resContainerCheckbox = document.createElement('div');
resContainerCheckbox.setAttribute('class', 'col-sm-10');

const foodLabel = document.createElement('div');
foodLabel.setAttribute('class', 'col-sm-2');
foodLabel.innerText = "Food"

const checkList = ['Idly', 'Dosa', 'Vada', 'Poori', 'Upma'];
for(let i =0; i < 5; i++) {
    const formCheck = document.createElement('input');
    let checkId = "food" + i;
    formCheck.setAttribute('type', 'checkbox');
    formCheck.setAttribute('class', 'form-check-input');
    formCheck.setAttribute('id', checkId);
    formCheck.setAttribute('name', 'food');
    formCheck.setAttribute('value', checkList[i]);

    const label = document.createElement('label');
    label.setAttribute('class', 'form-check-label');
    label.setAttribute('for', checkId);
    label.innerText = checkList[i];

    const container = document.createElement('div');
    container.setAttribute('class', 'form-check');
    container.append(formCheck, label);

    resContainerCheckbox.append(container);
}

const invalidFeedBack = document.createElement('div');
invalidFeedBack.setAttribute('class', 'invalid-feedback');
invalidFeedBack.innerText = "select more than 1 option";
resContainerCheckbox.append(invalidFeedBack);

const foodGroup = document.createElement('div');
foodGroup.setAttribute('class', 'form-group row mt-2');
foodGroup.append(foodLabel, resContainerCheckbox);

// Address

{/* <div class="form-group">
<label for="inputAddress">Address</label>
<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
</div>
<div class="form-group">
<label for="inputAddress2">Address 2</label>
<input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
</div> */}

const addressLabel = document.createElement('label');
addressLabel.setAttribute("for", "inputAddress");
addressLabel.innerText = "Address";

const formAddress = document.createElement('textarea');
formAddress.setAttribute('id', 'address');
formAddress.setAttribute('rows', '3');
formAddress.setAttribute('class', 'form-control');
formAddress.setAttribute('name', 'address1');
formAddress.setAttribute('placeholder', '1234 Main St');

const addressContainer = document.createElement('div');
addressContainer.setAttribute('class', 'form-group mt-2');

addressContainer.append(addressLabel, formAddress);

// Country State Pincode  

{/*
<div class="form-row">
<div class="form-group col-md-4">
  <label for="inputCountry">Country</label>
  <select id="inputCountry" class="form-control">
    <option selected>Choose...</option>
    <option>...</option>
  </select>
</div>
<div class="form-group col-md-6">
  <label for="inputState">State</label>
  <select id="inputState" class="form-control">
    <option selected>Choose...</option>
    <option>...</option>
  </select>
</div>
<div class="form-group col-md-2">
  <label for="inputZip">Zip</label>
  <input type="text" class="form-control" id="inputZip">
</div>
</div>*/}
// Country
const countryLabel = document.createElement('label');
countryLabel.setAttribute('for', 'inputCountry');
countryLabel.innerText = "Country";

const countrySelect = document.createElement('select');
countrySelect.setAttribute("id", "inputCountry");
countrySelect.setAttribute("class", "form-control");
countrySelect.setAttribute("name", "country");

const countryList = ['India', 'USA', 'Australia', 'UK', 'Brazil'];
for(let i =0 ; i < countryList.length; i++) {
    const countryOption = document.createElement('option');
    countryOption.innerText = countryList[i];
    countrySelect.appendChild(countryOption);
}

const countryContainer = document.createElement('div');
countryContainer.setAttribute('class', 'form-group col-md-4');

countryContainer.append(countryLabel, countrySelect);

// State
const stateLabel = document.createElement('label');
stateLabel.setAttribute('for', 'inputState');
stateLabel.innerText = "State";

const stateSelect = document.createElement('select');
stateSelect.setAttribute("id", "inputState");
stateSelect.setAttribute("class", "form-control");
stateSelect.setAttribute("name", "state");

const stateList = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Jharkhand', 'Uttar Pradesh'];
for(let i =0 ; i < stateList.length; i++) {
    const stateOption = document.createElement('option');
    stateOption.innerText = stateList[i];
    stateSelect.appendChild(stateOption);
}

const stateContainer = document.createElement('div');
stateContainer.setAttribute('class', 'form-group col-md-6');

stateContainer.append(stateLabel, stateSelect);

// Zip
const labelPincode = document.createElement('label');
labelPincode.setAttribute("for", "pincode");
labelPincode.innerText = "Zip";

const formPincode = document.createElement('input');
formPincode.setAttribute('type', 'text');
formPincode.setAttribute('id', 'pincode');
formPincode.setAttribute('class', 'form-control');
formPincode.setAttribute('name', 'zip');
formPincode.setAttribute('placeholder', '500001');

const pincodeContainer = document.createElement('div');
pincodeContainer.setAttribute('class', 'form-group col-md-2');
pincodeContainer.append(labelPincode, formPincode);

const countryRow = document.createElement('div');
countryRow.setAttribute('class', 'row mt-2');
countryRow.append(countryContainer, stateContainer, pincodeContainer);

// submit button <button type="submit" class="btn btn-primary">Submit</button>

const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.setAttribute('id', 'submit');
button.setAttribute('class', 'btn btn-primary mt-2');
button.innerText = 'Submit';

// Adding form control elements to root container.
const form = document.createElement('form');
form.setAttribute('id', 'form');
form.append(formRow, fieldSet, foodGroup, addressContainer, countryRow, button);

const formContainer = document.getElementById('form-container');
formContainer.appendChild(form);

//Table creation
{/* <table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table> */}
// first_name, last_name, address, gender, food, state, country, pincode

// Header Row
const headerRow = document.createElement('tr');

// Headers
const headers = ['First Name', 'Last Name', 'Gender', 'Food', 'Address', 'Country', 'State', 'Zip'];

for(let i =0; i < headers.length; i++) {
    const elem = document.createElement('th');
    elem.style.border = '1px solid rgb(190, 190, 190)';
    elem.style.padding = '10px';
    elem.style.backgroundColor = '#696969';
    elem.style.color = '#fff';
    elem.innerText = headers[i];
    headerRow.appendChild(elem);
}

// Header
const headerHeader = document.createElement('thead');
headerHeader.appendChild(headerRow);

// Empty body
const bodyTable = document.createElement('tbody');
bodyTable.setAttribute('id', 'bodyTable');

// Table creation
const tableElem = document.createElement('table');
tableElem.classList.add('table');
tableElem.append(headerHeader, bodyTable);

const tableContainer = document.getElementById('table-container');
tableContainer.appendChild(tableElem);

/// Handle event listeners to create a table.
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event)
    const elements = event.target.elements;
    
    const data = {'gender' : '', 'food' : []};
    Array.from(elements).forEach(element => {
        if(element.nodeName === "INPUT") {
            if(element.type === "radio") {
                if(element.checked) {
                    data[element.name] = element.value;
                }
            } else if (element.type === "checkbox") {
                if(element.checked) {
                    data[element.name].push(element.value);
                }
            } 
            else {
                data[element.name] = element.value;
            }
        } else if (element.nodeName === "SELECT") {
            data[element.name] = element.value;
        } else if (element.nodeName === "TEXTAREA") {
          data[element.name] = element.value;
        }
    });

    console.log(data);
    if(data['food'].length < 2) {
        resContainerCheckbox.classList.add('is-invalid');
    }

    /*address1: "Home"
    address2: "sweet home"
    country: "India"
    fname: "koti"
    food: (2) ['Idly', 'Dosa']
    gender: "Male"
    lname: "reddy"
    state: "Andhra Pradesh"
    zip: "522413"*/

    // Create a table.
    // first_name, last_name, address, gender, food, state, country, pincode
    let foodString = '';
    for(let i =0; i < data['food'].length; i++) {
        foodString = foodString + data['food'][i] + ",";
    }

    const tableData = [data['fname'], data['lname'], data['gender'], foodString,`${data['address1']}`, data['country'], data['state'], data['zip']];
    const tableRow = document.createElement('tr');
    for(let i =0; i < tableData.length; i++) {
        const dataElem = document.createElement('td');
        dataElem.innerText = tableData[i];
        dataElem.style.border = '1px solid rgb(190, 190, 190)';
        dataElem.style.padding = '10px';
        tableRow.append(dataElem);
    }

    bodyTable.append(tableRow);

    event.target.reset();
});