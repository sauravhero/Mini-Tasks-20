const rest=[
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Laksa Wholegrain La Mian",
        "Style": "Nan",
        "Country": "Singapore",
        "Stars": 5,
        "TopTen": "2016 #1"
    },
    {
        "Brand": "Prima",
        "Variety": "Juzz's Mee Creamy Chicken Flavour",
        "Style": "Pack",
        "Country": "SG",
        "Stars": "NaN",
        "TopTen": "2016 #8"
    },
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Curry Wholegrain La Mian",
        "Style": "Pack",
        "Country": "Singapore",
        "Stars": 5,
        "TopTen": "2016 #5"
    },
    
    
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Chilli Crab La Mian",
        "Style": "NaN",
        "Country": "Singapore",
        "Stars": 5,
        "TopTen": "NaN"
    },
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Laksa La Mian",
        "Style": "Pack",
        "Country": "SG",
        "Stars": 5,
        "TopTen": "2013 #1"
    },
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Curry La Mian",
        "Style": "Pack",
        "Country": "Singapore",
        "Stars": "NaN",
        "TopTen": "2013 #2"
    },
    
    {
        "Brand": "Koka",
        "Variety": "Spicy Black Pepper",
        "Style": "Pack",
        "Country": "SG",
        "Stars": 5,
        "TopTen": "NaN"
    },
]
$("#firv").on("click",function(){
    $("#two").toggle();
    $("#seven").toggle();
})
$("#secv").on("click",function(){
    $("#one").toggle();
    $("#three").toggle();
    $("#four").toggle();
    $("#five").toggle();
    $("#six").toggle();
    $("#seven").toggle();
})
$("#thiv").on("click",function(){
    $("#one").toggle();
    $("#two").toggle();
    $("#three").toggle();
    $("#four").toggle();
    $("#five").toggle();
    $("#six").toggle();
})
$("#firb").on("click",function(){
    $("#seven").toggle();
})
$("#secb").on("click",function(){
     $("#one").toggle();
    $("#two").toggle();
    $("#three").toggle();
    $("#four").toggle();
    $("#five").toggle();
    $("#six").toggle();
})































































// document.getElementById("resume").innerHTML=`
// <h1 class="bg-info text-center">Restaurants in Singapore (${rest.length} results) <h1>
// <p style="color:green;">Sort By:</p>
//   <div class="dropdown" id="drop">
//   <button class="dropbtn" style="margin-top:20px;">Variety</button>
//   <div class="dropdown-content" style="font-size:14px;">
//     <li id="firv">Singapore Laksa Wholegrain La Mian</li>
//     <li id="secv">Juzz's Mee Creamy Chicken Flavour</li>
//     <li id="thiv">Singapore Chilli Crab La Mian</li>
//     <li id="fouv">Singapore Laksa La Mian</li>
//     <li id="fivv">Singapore Curry La Mian</li>
//     <li id="sixv">Spicy Black Pepper</li>
//   </div>
//   </div>
//   <div class="dropdown" id="drop">
//   <button class="dropbtn" style="margin-top:20px;">Brand</button>
//   <div class="dropdown-content" style="font-size:14px;">
//     <li id="firb">Prima Taste</li>
//     <li id="secb">Koka</li>
//   </div>
// </div>
// </div>'
