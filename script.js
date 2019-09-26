

fetch('adressbok-1.json')
    .then((resp) => resp.json())
    .then(function(data) {
        //console.log(data);
        
        // Sortering efter yngst först
        data.sort(function (a, b) {
            return a.age - b.age;
        });

        // För varje indexposition 
        for (i=0; i<data.length; i++) {
            let imgNr = i + 1;
            
            //console.log(data[i]);

            let listEmployees = document.getElementById('employee-list');
            
            var img = document.createElement('img'); 
            img.src =  'team' + imgNr + '.png';
            img.width = '250'; 
            listEmployees.appendChild(img);
            
            let li = document.createElement('li'); 
            listEmployees.appendChild(li); 
            li.innerHTML = data[i].lastname + " " + data[i].firstname + "<br>Email: " + data[i].email + "<br><br>";
            
        }
    })
    .catch(function(error) {
        console.log(error);
    }); 