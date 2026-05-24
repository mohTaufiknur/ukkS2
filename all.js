//untuk memberi animasi saat di scrool
window.addEventListener("scroll",()=>{
//semua elemen animasi di card budaya
document.querySelectorAll(".card-budaya").forEach(card=>{
//cek psisi card apkh sudah masuk 
if(card.getBoundingClientRect().top < window.innerHeight-50)
//unntuk menbah animasi di class show
card.classList.add("show");
});}); 
//membuka atau menutup side bar
function toggleMenu(){
//menghapsu class active pda side bar
document.getElementById("sidebar").classList.toggle("active");
}