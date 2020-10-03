function dragging() {
    console.log('dragging')
}
function getmousePosition(event) {
    const elmnt = document.getElementById("body")
    const clientHeight = elmnt.clientHeight
    const clientWidth = elmnt.clientWidth
    const middleY = clientHeight / 2
    const middleX = clientWidth / 2
    const x = event.clientX;
    const y = event.clientY;

    console.log(clientWidth, clientHeight)
    console.log(middleY, middleX, x, y)
    const angle = Math.atan2( y - middleY , x - middleX ) * 180 / Math.PI;
    console.log(angle)
    const card = document.getElementById("mainCardId")
    card.style.transform = `rotateY(${angle}deg)`;
    // card.style.transform = `rotateX(${angle}deg)`;
    // card.style.transform = `rotateZ(${angle}deg)`;



    // console.log(angle)
    // let deltaX = middleX - x;
    // let deltaY = middleY - y;
    // let rotY = 0
    // let rotX = 0

	// lastMouseX = ev.pageX;
	// lastMouseY = ev.pageY;

	// rotY -= deltaX * 0.1;
	// rotX += deltaY * 0.1;
    // card.style.transform = `translateZ( -100px)`;
    // card.style.transform = `rotateY(${rotY}deg)`;
    // card.style.transform = `rotateX(${rotX}deg)`;
	// $("#cube").css("transform", "translateZ( -100px) ( " + rotX + "deg) rotateY(" + rotY + "deg)");
}

function getMiddle() {

}