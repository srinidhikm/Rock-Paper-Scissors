/* 
0 => Rock
1 => Paper
2 => Scissors
*/

var noOfButtons = document.querySelectorAll(".opt").length;

var userScore = 0;
var compScore = 0;

for(var i=0; i<noOfButtons; i++)
{
    document.querySelectorAll(".opt")[i].addEventListener("click", function ()
    {

        addAnimation(this.id);

        var user = this.id; // User option
        var compEmoji;

        var userEmoji = document.querySelector("#"+this.id).textContent;

        var rand = Math.floor(Math.random()*3);
        var comp; // Computer generated option
        switch(rand)
        {
            case 0:
                comp = "Rock";
                compEmoji = "👊";
                break;
    
            case 1:
                comp = "Paper";
                compEmoji = "🖐️";
                break;
    
            case 2:
                comp = "Scissors";
                compEmoji = "✌️";
                break;
    
            default:
                console.log("error at random number");
        }

     
            document.querySelector("h1").textContent = userEmoji;

            setTimeout(function()
            {
                document.querySelector("h1").textContent = userEmoji+" "+compEmoji
            }, 1000)
     
            setTimeout(function()
            {
                check(comp, user)
            }, 2000);

    })

}

function check(comp, user)
{
    var result;
    if(comp === user)
    {
        result="DRAW!";
    }

    else if(comp === "Rock")
    {
        if(user === "Paper")
        {
            result="USER WINS!";
            userScore++;
        }
        else if(user === "Scissors")
        {
            result="COMPUTER WINS!";
            compScore++;
        }
    }

    else if(comp === "Paper")
    {
        if(user === "Rock")
        {
            result="COMPUTER WINS!";
            compScore++;
        }
        else if(user === "Scissors")
        {
            result="USER WINS!";
            userScore++;
        }
    }

    else if(comp === "Scissors")
    {
        if(user === "Rock")
        {
            result="USER WINS!";
            userScore++;
        }
        else if(user === "Paper")
        {
            result="COMPUTER WINS!";
            compScore++;
        }
    }

   
        document.querySelector("h1").textContent = result;
    

    document.querySelector(".ComputerScore").textContent = compScore;

    document.querySelector(".UserScore").textContent = userScore;

}

function addAnimation(choice)
{
    document.querySelector("#"+choice).classList.remove("shadow");

    setTimeout(function ()
    {
        document.querySelector("#"+choice).classList.add("shadow");
    }, 100)
}

