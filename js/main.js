
var siteNameInput = document.getElementById("site");
var webUrlInput = document.getElementById("webUrl");
var alertSite = document.getElementById("alertSite");
var alertUrl = document.getElementById("alertUrl");
var arrList=[];
if(localStorage.getItem("name")!==null)
{
    arrList=JSON.parse(localStorage.getItem("name"))
    displaySite(arrList)
}

function addSites()
{
    if(siteValid() == true && webUrlValid()==true)
    {
        var site =
        {
            siteName:siteNameInput.value,
            wrbUrlName:webUrlInput.value
        }
        arrList.push(site)
        localStorage.setItem("name",JSON.stringify(arrList))
        displaySite(arrList)
        
        clear()
    }
    else
    {
        validId.classList.replace("d-none","d-flex");
    }

}

function closed()
{
    validId.classList.replace("d-flex" , "d-none")

}

function displaySite(site)
{
    
    temp=``;
    for(var i =0; i<arrList.length;i++)
    {
        temp+=`<tr><td>${i+1}</td>
                <td>${site[i].siteName}</td>
                <td><a href="https://${site[i].wrbUrlName}" class="btn btn-secondary"><i class="fa-solid fa-eye pe-2"></i> visit</a></td>
                <td><button onclick="deleted(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td></tr>`
    }
    document.getElementById("demo").innerHTML=temp;
}

function deleted(i)
{
    arrList.splice(i,1);
    localStorage.setItem("name",JSON.stringify(arrList))
    displaySite(arrList)

}
function clear()
{
    siteNameInput.value=""
    webUrlInput.value="";

}

siteNameInput.addEventListener("change",siteValid)
function siteValid()
{
    var siteRegex=/^\w{3,}(\s+\w+)*$/;
    if(siteRegex.test(siteNameInput.value) ==true)
    {
        siteNameInput.classList.add("is-valid")
        siteNameInput.classList.remove("is-invalid")
        // alertSite.classList.add("d-none")
        return true;
    }
    else
    {
        siteNameInput.classList.add("is-invalid")
        siteNameInput.classList.remove("is-valid")
        // alertSite.classList.remove("d-none")
        return false;
    }
}

webUrlInput.addEventListener("change",webUrlValid)
function webUrlValid()
{
    var urlRegex= /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
    if(urlRegex.test(webUrlInput.value))
    {
        webUrlInput.classList.add("is-valid")
        webUrlInput.classList.remove("is-invalid")
        // alertUrl.classList.add("d-none")
        return true;

    }else
    {
        webUrlInput.classList.add("is-invalid")
        webUrlInput.classList.remove("is-valid")
        // alertUrl.classList.remove("d-none")
        return false;

    }
   
}


































