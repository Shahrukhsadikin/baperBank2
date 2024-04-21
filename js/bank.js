document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositField =document.getElementById('deposit');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString)
    const depositTotalElement=document.getElementById('deposite-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    const currentDepositTotal=previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;
    const balanceTotalelement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalelement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
    balanceTotalelement.innerText=currentBalanceTotal
    depositField.value='';
})