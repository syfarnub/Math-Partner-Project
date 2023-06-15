function savedButton(){
    // console.log('working or not');
    let wet = document.querySelector('.inputBox1').innerHTML;
    let set = document.querySelector('.inputBox2').innerHTML;

    localStorage.setItem(wet , set);
    console.log(localStorage.getItem(set));
    set++;
}


let hcount = 0;
function historyButton() {
    // console.log("working or not checked");
    hcount++;
    if(hcount%2 == 1){
        document.querySelector(".history-container").style.display = "block";
        let data = document.querySelector(".history-container");

        for(p in localStorage){
            let ans = localStorage.getItem(p);
            if(ans != null){
                
                let h3=document.createElement("h3");
                h3.setAttribute('class', 'remove')
                h3.innerHTML = `${p} => Result = ${ans}`;
                console.log(h3);
                data.appendChild(h3);

            }
        }
    }
    else {
        document.querySelector(".history-container").style.display = "none";
        let rem = document.querySelector(".remove");
        for(var i=0; i<rem.clientHeight; i++){
            rem[i].remove();
        }
    }
}

function SearchButton(){
    event.preventDefault();
    // console.log("working or not");
    let problem = document.getElementById("problemBar").value;
    let category = document.getElementById("categoryBar").value;
    //fetch api here
    let pro = fetch(`https://newton.vercel.app/api/v2/ ${category}/${problem}`) 
    //check in discrip(api link)
     //console.log(pro)
    pro.then((response)=> {
        console.log(response.status)
        console.log(response.ok)
        return response.json()
    })
    
    .then((value)=> {
        console.log(value);
        let input2 = value.result;
        document.querySelector(".inputBox2").innerHTML = input2;
    })
    
    const input1 = document.querySelector(".inputBox1").innerHTML = category+" :" +problem;
    let set = document.querySelector(".inputBox1").value;
    let wet = document.querySelector(".inputBox2").innerHTML;
    localStorage.setItem(set.wet);
    }
    
    function delBtn() {
    // console.log("working or not")
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector(".inputBox2").innerHTML = "";
    }

    // https://spiky-theory-17e.notion.site/Maths-Partner-6664b6153a6549d485b6cc29a548ac54