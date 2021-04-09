var menus = [
    {
        "url": "home.html",
        "name": "Home",
        "visible":true
    },

    {
        "url": "home.html",
        "name": "Car details",
        "visible":true
    },
    {
        "url": "history.html",
        "name": "History",
        "visible":false
    },
    {
        "url": "other-models.html",
        "name": "Other Models",
        "visible":false
    },
    {
        "url": "tech-specs.html",
        "name": "Tech Specs",
        "visible":false
    },
    {
        "url": "films.html",
        "name": "Films & Celebrities",
        "visible":true
    },

    {
        "url": "contact.html",
        "name": "Contact",
        "visible":true
    },

]

function showMenus()
{
    let parent = $("#menu-container");
    for(let menu of menus)
    {
        if (!menu.visible)
            continue;

        let link = document.createElement("a");
        link.setAttribute('href', menu.url);
        let button = document.createElement("button");
        button.setAttribute('class', "header-button");
        $(button).text(menu.name)
        $(link).append(button);
        $(parent).append(link);
    }
}
$(document).ready(function(){
    showMenus();
});
