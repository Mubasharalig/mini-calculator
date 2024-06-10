function enterValue(number)
{
    const textBoxValue=document.getElementById('textbox');
    textBoxValue.value+=number.innerHTML

    
}
function clearAllValue()
{
    document.getElementById('textbox').value=""
}
function clearSingleValue()
{
    const textBoxValue=document.getElementById('textbox');
    console.log(textBoxValue.value)
    textBoxValue.value=textBoxValue.value.slice(0,-1)
}
function result()
{
    const textBoxValue=document.getElementById('textbox');
    textBoxValue.value=eval(textBoxValue.value)
}