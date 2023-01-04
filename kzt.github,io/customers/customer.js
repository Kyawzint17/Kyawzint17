var customers = []

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
    console.log(customers)
}

$(document).ready(function () {
    console.log("ready!");
    // load data
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        //$(this).addClass("done");
        console.log("DONE",data)
        dataStr=""
        for(let d in data){
            customers.push(data[d])
            dataStr += `<tr>
                <td><img class='icon' src='delete.png' onclick='deleteCustomer("${d}")' style='width:20px;height:20px;'> ${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
            </tr>`
        }
        $('#customerBody').html(dataStr)
        console.log(customers)
    });
});






 