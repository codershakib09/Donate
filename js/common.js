function getId(id){
    const value =document.getElementById(id);
    return value;
  }
  function getValue(id){
    const Id =document.getElementById(id);
    const value = parseFloat( Id.value);
    return value;
  }
  
  function getInnerText(id){
    const Id = document.getElementById(id);
    const value = parseFloat(Id.innerHTML);
    return value;
  }

  
  // =====================
  function defaultstyle(id){
   id.className='bg-lime-400 px-12 rounded-md  py-2  border border-gray-300 shadow-sm font-bold text-lg '
  }
  
  function whiteStyle(id){
    id.className='px-12 rounded-md  py-2 bg-white border border-gray-300 shadow-sm font-bold text-lg'
   }
   
   document.getElementById("home").addEventListener("click",() => {
  
    window.location.href = "index.html";
    const userblance =  document.getElementById("userBlance").innerHTML;
     console.log(userblance)      
  });