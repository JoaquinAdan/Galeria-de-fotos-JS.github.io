// daniel
const arrowAlbum = document.getElementById('arrowAlbum');

arrowAlbum.onclick=() => {
    const table = document.getElementById('table');

    table.classList.toggle('active');
}


// adan
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});
function crearGaleria() {
	const galeria = document.querySelector(".galeria-imagenes");
	for (let i = 1; i <= 15; i++) {
		const imagen = document.createElement("IMG");
		imagen.src = `build/img/${i}.webp`;
		imagen.dataset.imagenId = i;

		// añadir funcion mostrar imagen
		imagen.onclick = mostrarImagen;

		const lista = document.createElement("LI");
		lista.appendChild(imagen);
		galeria.appendChild(lista);
	}
}

function mostrarImagen(e) {
    const id = parseInt( e.target.dataset.imagenId);

	// Div hijo
	const pieFoto = document.createElement('DIV');
	pieFoto.classList.add('pieFoto');
	
    //generar la imagen
    const imagen  = document.createElement('IMG');
    imagen.setAttribute('id','div');
    imagen.classList.add('img-tamaño')
    imagen.src = `build/img/${id}.webp`;
    console.log(imagen.id)

    //DIV OVERLAY
    const overlay = document.createElement ('DIV');
    overlay.appendChild(imagen);
    overlay.appendChild(pieFoto);
    overlay.classList.add('overlay');

    //boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    //cerrarImagen.textContent = 'X';
    //cerrarImagen.classList.add('btn-cerrar');

	//guardar
	const guardar = document.createElement('A');
    guardar.setAttribute("href", "#");
    guardar.textContent = "Guardar";
    guardar.classList.add('boton', 'grid-guardar');
    pieFoto.appendChild(guardar)
	
    //share
    const share = document.createElement('A');
    share.setAttribute("href", "#");
    share.classList.add('grid-share')
    pieFoto.appendChild(share)
    const shareImg = document.createElement('IMG');
    shareImg.src = `build/img/icon/share.webp`
    shareImg.classList.add('icon')
    share.appendChild(shareImg)

    //download
	const download = document.createElement('A');
    download.setAttribute("href", "#");
    download.classList.add('grid-download');
    pieFoto.appendChild(download)
    const downloadImg = document.createElement('IMG');
    downloadImg.src = `build/img/icon/download.webp`
    downloadImg.classList.add('icon')
    download.appendChild(downloadImg)

    //cuando se da click cerrar la imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    // Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    overlay.appendChild(cerrarImagen);
	console.log(cerrarImagen.textContent)

  
    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
    
}
