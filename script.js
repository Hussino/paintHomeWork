var brush = "green";
function dip(color)
{
    if(color=="red")
    {
        brush = "red"
    }
    else if(color == "green")
    {
        brush = "green"
    }
}
function paint(id)
{
    id.style.backgroundColor =brush
}
function reset()
{
    var items = document.getElementsByClassName('grid-item');
      for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      }
}