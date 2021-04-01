document.getElementById('Enviar_Pedido').addEventListener("click", Redirecionar);

function Redirecionar()
{
sessionStorage.NOMEdoCLIENTE = document.getElementById('cliente2').value;
sessionStorage.PEDIDOdoCLIENTE_1 = document.getElementById('Coffees').value;
sessionStorage.PEDIDOdoCLIENTE_2 = document.getElementById('Drinks').value;
sessionStorage.PEDIDOdoCLIENTE_3 = document.getElementById('Snacks').value;
sessionStorage.PEDIDOdoCLIENTE_4 = document.getElementById('Lunch1').value;
sessionStorage.PEDIDOdoCLIENTE_5 = document.getElementById('Delicacies').value;

window.document.location.href="project6.html"

}

   


       
   
       
       
       
       
       
       
       
       




       
