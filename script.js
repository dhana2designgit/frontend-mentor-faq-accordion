var accordionItemHead = document.getElementsByClassName("accordion-item-head");
var i;

for (i=0; i < accordionItemHead.length; i++) {

    accordionItemHead[i].addEventListener("click", function() {

        this.classList.toggle("active");
        var accordionItemBody = this.nextElementSibling;

        if(accordionItemBody.style.maxHeight) {
            accordionItemBody.style.maxHeight = null;
        } 
        
        else {

            let active = document.querySelectorAll(".accordion .accordion-item-head.active");
            for( j=0; j < active.length; j++) {

                active[j].classList.remove("active");
                active[j].nextElementSibling.style.maxHeight = null;

            };

            this.classList.toggle("active");
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";

        }
    });
}





