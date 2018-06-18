import React from 'react';
export default props=>{
    console.log(props)
    const {src,style}=props.about
    
    return (
    <img onClick={
        ()=>
        {
        document.querySelectorAll(".modal")[0].style.display='block'
        document.querySelectorAll(".modal_container")[0].innerHTML=`<img class="fullImg" src="${src}"/>`
    }
    }className="scrapbook-image" style={style} src={src}/>
        )
    }