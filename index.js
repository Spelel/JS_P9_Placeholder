const modal = document.getElementById("modal") 
const closeBtn = document.getElementById("modal-close-btn")
const formInp = document.getElementById("form-inp")
const modalText = document.getElementById("modal-text")



 setTimeout(function() {
    modal.style.display = "inline"
 }, 1500)


 closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
 })

 formInp.addEventListener('submit', function(e) {
   e.preventDefault()
   modalText.innerHTML = `
   <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-Text">
        Uploading your data to the dark web...
    </p>
   </div>
   `
   setTimeout(function() {
      document.getElementById("upload-Text").innerText =  `
      Making the sale. . .
      `
   }, 1500)
})




