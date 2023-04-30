const firstStyle = document.getElementById('1st').style;
const secondStyle = document.getElementById('2nd').style;
const thirdStyle = document.getElementById('3rd').style;
const navBar = document.getElementsByClassName('links')[0];
const navBar1 = document.getElementsByClassName('links')[1];
const menuButton = document.getElementById('menuButton');
const HTML5_BTN = document.getElementById('HTML5');
const CSS3_BTN = document.getElementById('CSS3');
const JS_BTN = document.getElementById('JS');
const JSON_BTN = document.getElementById('JSON');
const WA_BTN = document.getElementById('WA');
const PROMISE = fetch('./document/doc.json').then(res=>res.json());
window.addEventListener('resize',event=>{
    if(window.innerWidth>=768){
        menuButton.style.display='none';
        navBar.style.display='inline';
        navBar1.style.display='none';
    }
    else if(window.innerWidth<768){
        menuButton.style.display='inline-flex'
        navBar.style.display='none'
    }
})
menuButton.addEventListener('click',event=>{
    if(firstStyle.position=='static'||firstStyle.position==''){
        firstStyle.position='absolute'
        secondStyle.position='absolute'
        thirdStyle.position='absolute'
        firstStyle.transform='rotate(-45deg)';
        secondStyle.opacity=0;
        thirdStyle.transform='rotate(45deg)';
        navBar1.style.display='block';
    }
    else if(firstStyle.position=='absolute'){
        firstStyle.position='static';
        secondStyle.position='static';
        thirdStyle.position='static';
        firstStyle.transform='rotate(0deg)';
        secondStyle.opacity=1;
        thirdStyle.transform='rotate(0deg)';
        navBar1.style.display='none';
    }
})

HTML5_BTN.addEventListener('click',()=>{
    PROMISE.then(
        (data)=>{
            document.getElementById('view').innerHTML=`<div>
            <img src="${data.HTML_DOC.bgimg}"/>
            <fieldset>
            <legend><img src="${data.HTML_DOC.image}"/></legend>
            ${data.HTML_DOC.text}
            </fieldset>
            </div>`;
        }
    )
});
CSS3_BTN.addEventListener('click',()=>{
    PROMISE.then(
        (data)=>{
            document.getElementById('view').innerHTML=`<div>
            <img src="${data.CSS_DOC.bgimg}"/>
            <fieldset>
            <legend><img src="${data.CSS_DOC.image}"/></legend>
            ${data.CSS_DOC.text}
            </fieldset>
            </div>`;
        }
    )
});
JS_BTN.addEventListener('click',()=>{
    PROMISE.then(
        (data)=>{
            document.getElementById('view').innerHTML=`<div>
            <img src="${data.JS_DOC.bgimg}"/>
            <fieldset>
            <legend><img src="${data.JS_DOC.image}"/></legend>
            ${data.JS_DOC.text}
            </fieldset>
            </div>`;
        }
    )
});
JSON_BTN.addEventListener('click',()=>{
    PROMISE.then(
        (data)=>{
            document.getElementById('view').innerHTML=`<div>
            <img src="${data.JSON_DOC.bgimg}"/>
            <fieldset>
            <legend><img src="${data.JSON_DOC.image}"/></legend>
            ${data.JSON_DOC.text}
            </fieldset>
            </div>`;
        }
    )
});
WA_BTN.addEventListener('click',()=>{
    PROMISE.then(
        (data)=>{
            document.getElementById('view').innerHTML=`<div>
            <img src="${data.WA_DOC.bgimg}"/>
            <fieldset>
            <legend><img src="${data.WA_DOC.image}"/></legend>
            ${data.WA_DOC.text}
            </fieldset>
            </div>`;
        }
    )
});