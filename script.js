let myImage = document.querySelectorAll('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "https://f4.bcbits.com/img/0025478606_10.jpg")
    {
        myImage.setAttribute('src', "https://i1.sndcdn.com/artworks-000466843089-ztjz41-t240x240.jpg");
    }
    else
    {
        myImage.setAttribute('src', "https://f4.bcbits.com/img/0025478606_10.jpg");
    }
}
