function ShowNav() {
    document.getElementById("nav").style.display = "inline"; // Show the navbar
    document.getElementById("hamburger").style.display = "none"; // Hide the hamburger
    document.getElementById("content").style.width = "83.33%"; // Content gives nav some width
}

function HideNav() {
    document.getElementById("nav").style.display = "none"; // Hide the navbar
    document.getElementById("hamburger").style.display = "inline"; // Show the hamburger
    document.getElementById("content").style.width = "100%"; // Content absorbs nav's width
}