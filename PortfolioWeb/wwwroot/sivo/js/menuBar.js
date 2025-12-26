const hrefs = ["index.html", "html/verticalGallery.html", "../index.html#aboutme", "../index.html#contact", "html/login.html"];
const hrefTexts = ["Home", "Gallery", "About me", "Contact", "Login"];
const htmlRootFolder = "sivoWeb/";

function createMenu()
{
	menuBar();
	footer();
}

function menuBar()
{
    let tbl = document.getElementById("sivoLinks");
    tbl.innerHTML = "";

    for (let i = 0; i < hrefs.length; i++)
    {
        const a = document.createElement("a");
        a.className = "sivoNavButton";
        a.href = i === 0 ? hrefs[i] : htmlRootFolder + hrefs[i];
        a.textContent = hrefTexts[i];

        if (i === 0) 
        {
            a.onclick = closeMenu;
        }
        tbl.appendChild(a);
    }

}
function closeMenu()
{
	document.getElementById("sivoLinks").style.display = "none";
}
function footer()
{
	/*footer = */document.getElementById("footer").innerHTML =
	'<a href="https://ko-fi.com/riyufuchi" target="blank"><img src="https://storage.ko-fi.com/cdn/logomarkLogo.png" alt="KoFi-logo" class="footerLogo"></a>' +
	'<a href="https://github.com/Riyufuchi" target="blank"><img src="pictures/logos/github-mark-white.svg" alt="github-logo" class="footerLogo"></a>';
}
