var customers = [
{
    "name": "Chars The Great",
    "email": "chars17@great.com",
    "phone": "099-732-2914"
},

{
    "name": "Raziel Mirekel",
    "email": "raziel202@mirekel.com",
    "phone": "093-239-3921"
},

{
    "name": "Alexander Mira",
    "email": "alexandert@great.com",
    "phone": "092-342-4952"
},
{
    "name": "Tate Beard",
    "email": "nunc.sed@outlook.org",
    "phone": "(880) 981-7631"
},
{
    "name": "Kiona Talley",
    "email": "netus.et@aol.com",
    "phone": "(747) 540-7374"
},
{
    "name": "Lunea Price",
    "email": "etiam@icloud.net",
    "phone": "(980) 608-7151"
},
{
    "name": "Cara Benson",
    "email": "dapibus.ligula@aol.ca",
    "phone": "1-728-606-5103"
},
{
    "name": "Alexa Juarez",
    "email": "odio@icloud.edu",
    "phone": "(669) 558-2928"
}]

function addToCustomers(){
    let customersObj = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val()
    }
    $('#customerBody').html("")

    customers.push(customersObj)
    loadData()
}


function deleteCustomer(index) {
    console.log("DELETE",index)
    delete customers[index]  // delete the element from array
    $('#customerBody').html("")
    loadData()
}

function loadData() {
    let allRows = ""
    for (let c in customers) {
        let cellName = `<td><img class='icon' src='delete.png' onclick='deleteCustomer("${c}")' style='width:20px;height:20px;'> ` + customers[c].name + "</td>"
        let cellEmail = '<td class="text-right">' + customers[c].email + "</td>"
        let cellPhone = '<td class="text-right">' + customers[c].phone + "</td>"
        let row = `<tr>${cellName}${cellEmail}${cellPhone}</tr>`
        allRows += row
    }
    $('#customerBody').html(allRows)
}


