const dom = (element, innerHTML,className) => {
    let el = document.createElement(element);
    el.innerHTML = innerHTML;
    
    let div = document.querySelector(".container");
    div.appendChild(el);
    el.classList=className
  };
  
  const domValue = (element, innerHTML,className,value) => {
    let el = document.createElement(element);
    el.innerHTML = innerHTML;
    
    let div = document.querySelector(".container");
    div.appendChild(el);
    el.classList=className
    el.value=value
  };
  
  const domWrapper=(element,wrapperElement,wrapperClass,innerHTML,className)=>{
    let wrapper=document.createElement(wrapperElement);
    wrapper.classList=wrapperClass;
    let el=document.createElement(element);
    el.classList=className
    el.innerHTML=innerHTML
    wrapper.appendChild(el)

  }