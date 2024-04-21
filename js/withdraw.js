document.getElementById('btn-withdrow').addEventListener('click',function(){
    const withdrawField =document.getElementById('withdrow-field');
    const newWithDrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithDrawAmountString);
    const withdrawtotalelement =document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawtotalelement.innerText;
    const previouswithdrawTotal=parseFloat(previouswithdrawTotalString);
    const currentWithdrawTotal=previouswithdrawTotal+newWithdrawAmount;
    withdrawtotalelement.innerText=currentWithdrawTotal;
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    const newbalanceTotal =previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText =newbalanceTotal;



    withdrawField.value='';

})