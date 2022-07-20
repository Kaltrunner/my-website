function changeImage(){
    let displayImage = document.getElementById('erik')
    if(displayImage.src.match('https://f4.bcbits.com/img/0025478606_10.jpg')){
        displayImage.src = 'https://i.scdn.co/image/ab6761610000e5ebc2ff79b6143a9fe9e55d71c8'
    }else {
        displayImage.src ='https://f4.bcbits.com/img/0025478606_10.jpg'
    }
}