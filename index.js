const modal = document.getElementById("modal") 
const closeBtn = document.getElementById("modal-close-btn")
const formInp = document.getElementById("form-inp")
const modalText = document.getElementById("modal-text")
const navBtn = document.getElementById("modal-choice-btns")



 setTimeout(function() {
    modal.style.display = "inline"
 }, 1500)


 closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
 })

 document.getElementById("decline-btn").addEventListener("mouseover", function() {
   navBtn.classList.toggle('reverse')
  })

 formInp.addEventListener('submit', function(e) {
   e.preventDefault()
   const formInpData = new FormData(formInp)
   const name = formInpData.get('UserName')

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


   setTimeout(function() {
      document.getElementById("modal-inner").innerHTML = `
      <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
      <p>We just sold the rights to your eternal soul.</p>
      <div class="idiot-gif">
        <img src="images/pirate.gif">
      </div>
      `
      closeBtn.disabled = false
   }, 3000)
})




