$(document).ready(function(){
    $('#BtnAdd').click(function(){
         let num1 = $('#Num1').val();
         let num2 = $('#Num2').val();

         console.log(`Сумма чисел = ${Number(num1) + Number(num2)}`);
         $('#Result').text(`Сумма чисел = ${Number(num1) + Number(num2)}`);

    });
    $('#BtnSub').click(function(){
        let num1 = $('#Num1').val();
        let num2 = $('#Num2').val();

        console.log(`Сумма чисел = ${Number(num1) - Number(num2)}`);
        $('#Result').text(`Сумма чисел = ${Number(num1) - Number(num2)}`);
   });
   $('#BtnMud').click(function(){
    let num1 = $('#Num1').val();
    let num2 = $('#Num2').val();

    console.log(`Сумма чисел = ${Number(num1) * Number(num2)}`);
    $('#Result').text(`Сумма чисел = ${Number(num1) * Number(num2)}`);
   });
   $('#BtnDiv').click(function(){
    let num1 = $('#Num1').val();
    let num2 = $('#Num2').val();

    console.log(`Сумма чисел = ${Number(num1) / Number(num2)}`);
    $('#Result').text(`Сумма чисел = ${Number(num1) / Number(num2)}`);
});

});