//Pendientes: 
//(1) vallas de Fibra (2) Kit no fijacion (3) cables para luz y sonido (4) Añadir los alquileres por semanas
//Poner medidas en pies en linea vertical y horizontal
//Poner equivalente precios en dolares (cambio a 1.30$) arreglados y calculados con formula de interpolacion lineal para alquileres

//Indice FUNCIONES
// (1) precios 
// (2) generarCuadricula
// (3) actualizarCuadricula

// Función de control de acceso al estar el código accesible en GitHub
(function () {
    const contraseñaCorrecta = "1968"; // Puedes cambiar la contraseña aquí
    let intentos = 3; // Número de intentos permitidos

    while (intentos > 0) {
        let contraseñaIngresada = prompt("Uso exclusivo XTRAICE - 🔒 Introduce la contraseña de 4 dígitos:");

        if (contraseñaIngresada === contraseñaCorrecta) {
            alert("CALCULADORA DE PISTAS XTRAICE \n\n ✅ Acceso concedido.\n BIENVENIDO. \n\n Si ves algún error en la ejecución de la aplicación o sus resultados, puedes comunicármelo vía mail: tono@xtraice.com");
            return; // Permite que la aplicación continúe
        } else {
            intentos--;
            alert(`❌ Contraseña incorrecta. Intentos restantes: ${intentos}`);
        }
    }

    // Si se acaban los intentos, redirigir o bloquear acceso
    alert("🚫 Acceso denegado");
    document.body.innerHTML = "<h1>Acceso bloqueado ❌</h1>";
})();


function calcularPrecio(m, m1, m2, p1, p2) {
    return p1 + ((m - m1) / (m2 - m1)) * (p2 - p1);
}

// Función (1) PRECIOS  ********** INICIO    **** EN OBRAS, ESTAMOS TRABAJANDO EN ELLO **********
function precios(paneles,tapones,foam,vallaRecta,vallaCurva,vallaEspecial,vallaPuerta,vallaEspecialPuerta,piesValla,afiladoraDoble,aspiradora,numpatines,caucho,kitInstalacion){
    
    let precioNuevo=0;
    let precioAlquiler=0;

    let dtopanelesyvallasnuevo=0;
    let dtotaponesnuevo=0;
    let dtoaccesoriosnuevo=0;

    let dtopanelesyvallasSNalta=0;
    let dtotaponesSNalta=0;
    let dtoaccesoriosSNalta=10;

    let dtopanelesyvallasSNbaja=0;
    let dtotaponesSNbaja=0;
    let dtoaccesoriosSNbaja=10;

    let patineros=Math.ceil(numpatines / 40);

    let precio = {
        paneles: 500,
        tapones: 200,
        vallaRecta: 600,
        vallaCurva: 1800,
        vallaEspecial: 600,
        vallaPuerta: 750,
        vallaEspecialPuerta: 600,
        numpatines: 64,
        patineros: 600,
        caucho: 330,
        foam: 120,
        piesValla:120,
        afiladoraDoble:4995,
        aspiradora:100,
        kitInstalacion:59
    };

    let numeroDePaneles=paneles;    

    //Asigno descuentos por tamaño para Nuevo, SNalta, SNbaja
    //25para50m2--49para98m2--80para160m2--100para200m2--150para300m2--196para392m2--300para600m2--400para800m2
    if (numeroDePaneles >= 16 && numeroDePaneles <49) {
        // Descuentos para pistas de hasta 96m2 
        //precioAlquiler=paneles*(11245/25);

        precioAlquiler=calcularPrecio(paneles,25,49,11245,14845)
        dtopanelesyvallasnuevo=25;
        dtotaponesnuevo=80.7;
    
        dtopanelesyvallasSNalta=30.8;
        dtotaponesSNalta=73.3;
    
        dtopanelesyvallasSNbaja=52.2;
        dtotaponesSNbaja=50.5;
    
        } else if (numeroDePaneles >= 49 && numeroDePaneles <80) {
        // Descuentos para pistas desde 98m2 a 158m2
        //Formula de INTERPOLACION LINEAL para cálculos de medidas intermedias
        precioAlquiler=calcularPrecio(paneles,49,80,14845,18995);

        dtopanelesyvallasnuevo=24;
        dtotaponesnuevo=88.6;
    
        dtopanelesyvallasSNalta=30.5;
        dtotaponesSNalta=85.4;
    
        dtopanelesyvallasSNbaja=52;
        dtotaponesSNbaja=64.1;
        } else if (numeroDePaneles >= 80 && numeroDePaneles <100) {
        // Descuentos para pistas desde 160m2 a 198m2
        
        precioAlquiler=calcularPrecio(paneles,80,100,18995,20995)
        
        dtopanelesyvallasnuevo=26.3;
        dtotaponesnuevo=70.7;
    
        dtopanelesyvallasSNalta=32.1;
        dtotaponesSNalta=87.7;
    
        dtopanelesyvallasSNbaja=52.3;
        dtotaponesSNbaja=81.8;
    
        } else if (numeroDePaneles >= 100 && numeroDePaneles<150) {
        // Descuentos para pistas de hasta 200m2
        
        precioAlquiler=calcularPrecio(paneles,100,150,20995,31195)
        
        dtopanelesyvallasnuevo=28.3;
        dtotaponesnuevo=46.6;
    
        dtopanelesyvallasSNalta=34.2;
        dtotaponesSNalta=47.6;
    
        dtopanelesyvallasSNbaja=52.3;
        dtotaponesSNbaja=51.1;
    
        } else if (numeroDePaneles >= 150 && numeroDePaneles<196) {
        // Descuentos para pistas de hasta 300m2
        
        precioAlquiler=calcularPrecio(paneles,150,196,31195,36995)
    
        dtopanelesyvallasnuevo=28.2;
        dtotaponesnuevo=56.7;
    
        dtopanelesyvallasSNalta=34.3;
        dtotaponesSNalta=45.2;
    
        dtopanelesyvallasSNbaja=53.6;
        dtotaponesSNbaja=96.7;
    
        } else if (numeroDePaneles >= 196 && numeroDePaneles<300) {
        // Descuentos para pistas de hasta 392m2
        precioAlquiler=calcularPrecio(paneles,196,300,36995,49345)

        dtopanelesyvallasnuevo=29.1;
        dtotaponesnuevo=25.2;
    
        dtopanelesyvallasSNalta=34.7;
        dtotaponesSNalta=32;
    
        dtopanelesyvallasSNbaja=53.5;
        dtotaponesSNbaja=92.9;
    
        } else if (numeroDePaneles >= 300 && numeroDePaneles<400) {
        // Descuentos para pistas de hasta 600m2
    
        precioAlquiler=calcularPrecio(paneles,300,400,49345,61445)
        
        dtopanelesyvallasnuevo=29.2;
        dtotaponesnuevo=21.4;
    
        dtopanelesyvallasSNalta=35.5;
        dtotaponesSNalta=28.8;
    
        dtopanelesyvallasSNbaja=53.5;
        dtotaponesSNbaja=91.2;
    
        } else if (numeroDePaneles >= 400) {
        // Descuentos para pistas de hasta 800m2 y mas
        precioAlquiler=paneles*(61445/400);
        dtopanelesyvallasnuevo=28.8;
        dtotaponesnuevo=35.9;
    
        dtopanelesyvallasSNalta=35.4;
        dtotaponesSNalta=21.9;
    
        dtopanelesyvallasSNbaja=53.5;
        dtotaponesSNbaja=26.3;
    
        } else {
        // Descuentos para pistas no recogidas en casos anteriores
        console.log("Error en precios por numero de paneles");
        precioAlquiler=0;
    }


    // Usamos la fórmula: Precio final = (Precio de panel * Cantidad de paneles) * (1 - Descuento)

    precioNuevo=
        (paneles*precio.paneles)*(1-(dtopanelesyvallasnuevo/100))+
        (tapones*precio.tapones)*(1-(dtotaponesnuevo/100))+
        (vallaRecta*precio.vallaRecta)*(1-(dtopanelesyvallasnuevo/100))+
        (vallaCurva*precio.vallaCurva)*(1-(dtopanelesyvallasnuevo/100))+
        (vallaEspecial*precio.vallaEspecial)*(1-(dtopanelesyvallasnuevo/100))+
        (vallaPuerta*precio.vallaPuerta)*(1-(dtopanelesyvallasnuevo/100))+
        (vallaEspecialPuerta*precio.vallaEspecialPuerta)*(1-(dtopanelesyvallasnuevo/100))+
        (numpatines*precio.numpatines)*(1-(dtoaccesoriosnuevo/100))+
        (patineros*precio.patineros)*(1-(dtoaccesoriosnuevo/100))+
        (caucho*precio.caucho)*(1-(dtoaccesoriosnuevo/100))+
        (foam*precio.foam)*(1-(dtoaccesoriosnuevo/100))+
        (piesValla*precio.piesValla)*(1-(dtoaccesoriosnuevo/100))+
        (afiladoraDoble*precio.afiladoraDoble)*(1-(dtoaccesoriosnuevo/100))+
        (aspiradora*precio.aspiradora)*(1-(dtoaccesoriosnuevo/100))+
        (kitInstalacion*precio.kitInstalacion)*(1-(dtoaccesoriosnuevo/100));

    let precioSNalta=
        (paneles*precio.paneles)*(1-(dtopanelesyvallasSNalta/100))+
        (tapones*precio.tapones)*(1-(dtotaponesSNalta/100))+
        (vallaRecta*precio.vallaRecta)*(1-(dtopanelesyvallasSNalta/100))+
        (vallaCurva*precio.vallaCurva)*(1-(dtopanelesyvallasSNalta/100))+
        (vallaEspecial*precio.vallaEspecial)*(1-(dtopanelesyvallasSNalta/100))+
        (vallaPuerta*precio.vallaPuerta)*(1-(dtopanelesyvallasSNalta/100))+
        (vallaEspecialPuerta*precio.vallaEspecialPuerta)*(1-(dtopanelesyvallasSNalta/100))+
        (numpatines*precio.numpatines)*(1-(dtoaccesoriosSNalta/100))+
        (patineros*precio.patineros)*(1-(dtoaccesoriosSNalta/100))+
        (caucho*precio.caucho)*(1-(dtoaccesoriosSNalta/100))+
        (foam*precio.foam)*(1-(dtoaccesoriosSNalta/100))+
        (piesValla*precio.piesValla)*(1-(dtoaccesoriosSNalta/100))+
        (afiladoraDoble*precio.afiladoraDoble)*(1-(dtoaccesoriosSNalta/100))+
        (aspiradora*precio.aspiradora)*(1-(dtoaccesoriosSNalta/100))+
        (kitInstalacion*precio.kitInstalacion)*(1-(dtoaccesoriosSNalta/100));

    let precioSNbaja=
        (paneles*precio.paneles)*(1-(dtopanelesyvallasSNbaja/100))+
        (tapones*precio.tapones)*(1-(dtotaponesSNbaja/100))+
        (vallaRecta*precio.vallaRecta)*(1-(dtopanelesyvallasSNbaja/100))+
        (vallaCurva*precio.vallaCurva)*(1-(dtopanelesyvallasSNbaja/100))+
        (vallaEspecial*precio.vallaEspecial)*(1-(dtopanelesyvallasSNbaja/100))+
        (vallaPuerta*precio.vallaPuerta)*(1-(dtopanelesyvallasSNbaja/100))+
        (vallaEspecialPuerta*precio.vallaEspecialPuerta)*(1-(dtopanelesyvallasSNbaja/100))+
        (numpatines*precio.numpatines)*(1-(dtoaccesoriosSNbaja/100))+
        (patineros*precio.patineros)*(1-(dtoaccesoriosSNbaja/100))+
        (caucho*precio.caucho)*(1-(dtoaccesoriosSNbaja/100))+
        (foam*precio.foam)*(1-(dtoaccesoriosSNbaja/100))+
        (piesValla*precio.piesValla)*(1-(dtoaccesoriosSNbaja/100))+
        (afiladoraDoble*precio.afiladoraDoble)*(1-(dtoaccesoriosSNbaja/100))+
        (aspiradora*precio.aspiradora)*(1-(dtoaccesoriosSNbaja/100))+
        (kitInstalacion*precio.kitInstalacion)*(1-(dtoaccesoriosSNbaja/100));
    


    return [
        precioNuevo,
        precioSNalta,
        precioSNbaja,
        precioAlquiler
    ];
}
// Función (1) PRECIOS  ********** FINAL




// Función (2) GENERAR CUADRÍCULA ********** para generar la cuadrícula y realizar los cálculos
function generarCuadricula(panelsX, panelsY, puertas, patines, tipoVallas) {
    let panelWidth = 19.66; // Escalado para dibujo 19.66 = 1,966mt
    let panelHeight = 9.66; // Escalado para dibujo ***Puedo cambiar medidas para otros paneles
    let escala = 10; //10 lo normal...incorporar boton RADIO para cambiar en pantalla (1 a 4 por ejemplo), y ajustar pies y puerta para que se adapten a al escala.

    escala = parseFloat(document.getElementById("escala").value)

    let vallasEspecialesLargo = [];
    let vallasEspecialesCorto = [];

    panelWidth = parseFloat(document.getElementById("panelLargo").value)*escala; // Ancho del panel
    panelHeight = parseFloat(document.getElementById("panelAncho").value)*escala; // Largo del panel

    document.getElementById("resetPanel").addEventListener("click", function() {
        document.getElementById("panelAncho").value = 0.966;
        document.getElementById("panelLargo").value = 1.966;
    });
    
    const realPanelWidth = panelWidth/escala; // Medida real en metros
    const realPanelHeight = panelHeight/escala; // Medida real en metros
    const startX = 50; //PUNTO DE INICIO X
    const startY = 20; //PUNTO DE INICIO Y
    let svgContent = `<svg width="820" height="820">`; // Crear el contenedor SVG

    // Generar la cuadrícula
    for (let y = 0; y < panelsY; y++) {
        for (let x = 0; x < panelsX; x++) {
            let posX = startX + x * panelWidth;
            let posY = startY + y * panelHeight;
            svgContent += `<rect x="${posX}" y="${posY}" width="${panelWidth}" height="${panelHeight}" stroke="black" fill="none"/>`; // Dibuja el rectángulo para cada panel
        }
    }

    // Líneas de cotas en metros
    let totalWidth = panelsX * panelWidth;
    let totalRealWidth = panelsX * realPanelWidth;

    svgContent += `<line x1="${startX}" y1="${startY + panelsY * panelHeight + 10}" x2="${startX + totalWidth}" y2="${startY + panelsY * panelHeight + 10}" stroke="red"/>`;
    svgContent += `<text x="${(startX + totalWidth / 2)-35}" y="${startY + panelsY * panelHeight + 25}">
        <tspan fill="black" font-size="14px">${totalRealWidth.toFixed(2)}m</tspan> 
        <tspan fill="blue" font-size="12px"> (${(totalRealWidth*3.2808399).toFixed(2)}ft)</tspan>
        </text>`;

    let totalHeight = panelsY * panelHeight;
    let totalRealHeight = panelsY * realPanelHeight;

    svgContent += `<line x1="${startX - 10}" y1="${startY}" x2="${startX - 10}" y2="${startY + totalHeight}" stroke="red"/>`;
    svgContent += `<text x="${startX - 30}" y="${startY + 60 + totalHeight / 2}" transform="rotate(-90, ${startX - 30}, ${startY + 60 + totalHeight / 2})">
        <tspan fill="black" font-size="14px">${totalRealHeight.toFixed(2)}m</tspan>
        <tspan fill="blue" font-size="12px"> (${(totalRealHeight * 3.2808399).toFixed(2)}ft)</tspan>
        </text>`;



    // Validar las dimensiones antes de continuar
    if (totalRealWidth < 7.5 || totalRealHeight < 3.5) {
        const sonido = new Audio('sonido-error.mp3'); // Ruta al archivo de sonido
        sonido.play();
        setTimeout(() => {
            alert("❌ Error: Las dimensiones mínimas son 7.5m en lado largo y 3.5m den lado corto. No puedo ACTUALIZAR con las medidas de paneles actuales.");
        }, 1000); // Espera 1 segundo antes de mostrar el mensaje
        return; // Detener la ejecución si las dimensiones son incorrectas
    }
    // Rectángulo representando el vallado 
    //svgContent += '<rect x="150" y="50" width="${totalWidth}" height="${totalHeight}" stroke="red" stroke-width="2" fill="none"/>';
    const margin = (0.15 / realPanelWidth) * panelWidth; // Esto da aproximadamente 0.5
    svgContent += `<rect 
    x="${startX + margin}" 
    y="${startY + margin}" 
    width="${totalWidth - 2 * margin}" 
    height="${totalHeight - 2 * margin}" 
    stroke="blue" 
    stroke-width="1.5" 
    fill="none" 
    rx="${1*escala}" ry="${1*escala}"/>`;//Bordes redondeados

    // Representación de pies de valla INICIO ******************************** 29.4m representa 2 veces 1.4m curva + 0,07m pie
    const pieXHeight=0.3*escala; //Alto del pie cuando se representa en eje X
    const pieXWidth=0.2*escala; //Ancho del pie cuando se representa en eje X 
    const pieYHeight=0.2*escala; //Alto del pie cuando se representa en eje Y
    const pieYWidth=0.3*escala; //Ancho del pie cuando se representa en eje Y
    const largoXpies=totalWidth-(2.94*escala); // quitando las curvas de inicio fin, esta es la longitud que queda 
    const largoYpies=totalHeight-(2.94*escala); // quitando las curvas de inicio fin, esta es la longitud que queda 

    //Primer pie de curva 1 eje X arriba y abajo
    svgContent += `<rect x="${startX +(1.47*escala)}" y="${startY - (pieXHeight-margin)}" width="${pieXWidth}" height="${pieXHeight}" stroke="black" stroke-width="1" fill="black"/>`;
    svgContent += `<rect x="${startX +(1.47*escala)}" y="${startY - (pieXHeight-margin)+totalHeight}" width="${pieXWidth}" height="${pieXHeight}" stroke="black" stroke-width="1" fill="black"/>`;
 
    let limitePiesX = Math.floor(largoXpies / (2*escala)); // Número total de pies sin contar el resto
    let restoX = largoXpies % (2*escala); // Resto en metros

    if (restoX < 4) {
        limitePiesX -= 1; // Si el resto es menor a 0.40m, reducir un pie de valla y poner una valla de 1.60m manualmente
        svgContent += `<rect x="${startX+largoXpies}" y="${startY - (pieXHeight-margin)}" width="${pieXWidth}" height="${pieXHeight}" stroke="red" stroke-width="1" fill="red"/>`;
        svgContent += `<rect x="${startX+largoXpies}" y="${startY - (pieXHeight-margin)+totalHeight}" width="${pieXWidth}" height="${pieXHeight}" stroke="red" stroke-width="1" fill="red"/>`;
    }

    for (let i = 1; i <= limitePiesX; i++) {
    let color = (i === limitePiesX) ? "red" : "black"; // Último pie en rojo si es el último del bucle
    svgContent += `<rect x="${(startX + (1.46*escala)) + (i * (2*escala))}" y="${startY - (pieXHeight - margin)}" width="${pieXWidth}" height="${pieXHeight}" stroke="${color}" stroke-width="1" fill="${color}"/>`;
    svgContent += `<rect x="${(startX + (1.46*escala)) + (i * (2*escala))}" y="${startY - (pieXHeight - margin)+totalHeight}" width="${pieXWidth}" height="${pieXHeight}" stroke="${color}" stroke-width="1" fill="${color}"/>`;
    }
    // Dibujar el último pie en rojo al final del largoXpies
    svgContent += `<rect x="${(startX + (1.46*escala)) + largoXpies}" y="${startY - (pieXHeight - margin)}" width="${pieXWidth}" height="${pieXHeight}" stroke="red" stroke-width="1" fill="red"/>`;
    svgContent += `<rect x="${(startX + (1.46*escala)) + largoXpies}" y="${startY - (pieXHeight - margin)+totalHeight}" width="${pieXWidth}" height="${pieXHeight}" stroke="red" stroke-width="1" fill="red"/>`;
    
    // Pies del eje Y
    //Primer pie de curva 1 eje Y izquierda y derecha
    svgContent += `<rect x="${startX-margin}" y="${startY+(1.46*escala)}" width="${pieYWidth}" height="${pieYHeight}" stroke="black" stroke-width="1" fill="black"/>`;
    svgContent += `<rect x="${startX +totalWidth-margin}" y="${startY+(1.46*escala)}" width="${pieYWidth}" height="${pieYHeight}" stroke="black" stroke-width="1" fill="black"/>`;
 
    let limitePiesY = Math.floor(largoYpies / (2*escala)); // Número total de pies sin contar el resto
    let restoY = largoYpies % (2*escala); // Resto en metros

    if (restoY < 4) {
        limitePiesY -= 1; // Si el resto es menor a 0.40m, reducir un pie de valla y poner una valla de 1.60m manualmente
        svgContent += `<rect x="${startX-margin}" y="${startY +largoYpies}" width="${pieYWidth}" height="${pieYHeight}" stroke="red" stroke-width="1" fill="red"/>`;
        svgContent += `<rect x="${startX+totalWidth-margin}" y="${startY +largoYpies}" width="${pieYWidth}" height="${pieYHeight}" stroke="red" stroke-width="1" fill="red"/>`;
    }

    for (let i = 1; i <= limitePiesY; i++) {
    let color = (i === limitePiesY) ? "red" : "black"; // Último pie en rojo si es el último del bucle
    svgContent += `<rect x="${(startX-margin)}" y="${(startY+(1.46*escala)) +(i*(2*escala))}" width="${pieYWidth}" height="${pieYHeight}" stroke="${color}" stroke-width="1" fill="${color}"/>`;
    svgContent += `<rect x="${(startX + totalWidth)-margin}" y="${(startY+(1.46*escala))  + (i * (2*escala))}" width="${pieYWidth}" height="${pieYHeight}" stroke="${color}" stroke-width="1" fill="${color}"/>`;
    }
    // Dibujar el último pie en rojo al final del largoXpies
    svgContent += `<rect x="${(startX)-margin}" y="${(startY+(1.46*escala)) +largoYpies}" width="${pieYWidth}" height="${pieYHeight}" stroke="red" stroke-width="1" fill="red"/>`;
    svgContent += `<rect x="${(startX + totalWidth)-margin}" y="${(startY+(1.46*escala)) +largoYpies}" width="${pieYWidth}" height="${pieYHeight}" stroke="red" stroke-width="1" fill="red"/>`;
    
    // Representación de pies de valla FINAL ********************************

    // Representando las puertas (1 o 2) 
    let pospuerta1Y = startY + (panelsY*panelHeight) - margin
    let pospuerta1X = startX + (3.3*escala)
    let pospuerta2Y = pospuerta1Y
    let pospuerta2X = pospuerta1X + (2.0*escala)
    
    // Línea horizontal hacia la izquierda
    svgContent += `<line x1="${pospuerta1X}" y1="${pospuerta1Y}" x2="${pospuerta1X - (0.7*escala)}" y2="${pospuerta1Y}" stroke="black" stroke-width="1"/>`;

    // Línea vertical hacia abajo
    svgContent += `<line x1="${pospuerta1X}" y1="${pospuerta1Y}" x2="${pospuerta1X}" y2="${pospuerta1Y + (0.7*escala)}" stroke="black" stroke-width="1"/>`;

    // Arco que conecta las líneas formando un cuarto de círculo inferior izquierdo
    let c=0.7 * escala
    svgContent += `<path d="M ${pospuerta1X} ${pospuerta1Y + (0.7*escala)} 
    A ${c} ${c} 0 0 1 ${pospuerta1X - (0.7*escala)} ${pospuerta1Y}" 
    stroke="black" stroke-width="1" fill="none" 
    stroke-dasharray="3,1"/>`;

    // Pie de valla de la puerta
    svgContent += `<rect x="${pospuerta1X-(1.1*escala)}" y="${pospuerta1Y}" width="${pieXWidth}" height="${pieXHeight}" stroke="green" stroke-width="1" fill="green"/>`;


    let dospuertas = document.getElementById("puertas").value; // Obtiene el valor como string
    dospuertas = parseInt(puertas); // Convierte el valor a número entero

    if (dospuertas === 2) {
        svgContent += `<line x1="${pospuerta1X+(2*escala)}" y1="${pospuerta1Y}" x2="${pospuerta1X+(2*escala)}" y2="${pospuerta1Y + (0.7*escala)}" stroke="black" stroke-width="1"/>`;
        svgContent += `<path d="M ${pospuerta1X + (2*escala)} ${pospuerta1Y + (0.7*escala)} 
        A ${c} ${c} 0 0 1 ${pospuerta1X + (2*escala) - (0.7*escala)} ${pospuerta1Y}" 
        stroke="black" stroke-width="1" fill="none" 
        stroke-dasharray="3,1"/>`;
         // Pie de valla de la segunda puerta
    svgContent += `<rect x="${pospuerta1X + (2*escala) -(1.1*escala)}" y="${pospuerta1Y}" width="${pieXWidth}" height="${pieXHeight}" stroke="green" stroke-width="1" fill="green"/>`;
    }



    svgContent += `</svg>`; // Cerrar el contenedor SVG
    // Insertar el contenido del SVG en el contenedor en HTML
    document.getElementById("svgContainer").innerHTML = svgContent;
    
    // 🔹 Calcular los productos necesarios
    let paneles = panelsX * panelsY;
    let tapones = Math.ceil((paneles * 6) / 500);
    const areaFoam = 1.5 * 42; //Los rollos de Foam son de 1,5m de ancho por 42m de largo = 63m2 de superficie. 
    let foam = Math.ceil(((panelsX*realPanelHeight)*(panelsY*realPanelWidth))/areaFoam);
    let areaPista = (panelsX*realPanelHeight)*(panelsY*realPanelWidth);
    let vallaRecta = 0
    let vallaCurva = 4;
    let vallaEspecial = 4;
    let piesValla = 0;
    const numpatines = parseInt(document.getElementById("patines").value) || 0;
    
    let vallaPuerta = puertas;
    let vallaEspecialPuerta = puertas;

    //let piesValla = vallaRecta + vallaCurva + vallaEspecial + vallaPuerta + vallaEspecialPuerta;
    let afiladoraDoble;
    if (paneles >= 400) {
        afiladoraDoble = 3;
    } else if (paneles >= 300) {
        afiladoraDoble = 2;
    } else if (paneles > 0) {
        afiladoraDoble = 1;
    } else {
        afiladoraDoble = 0; // Si paneles es 0 o negativo
    }

    let aspiradora = afiladoraDoble;
    let caucho;
    if (paneles >= 300) {
        caucho = 5;
    } else if (paneles >= 150) {
        caucho = 3;
    } else if (paneles >= 49) {
        caucho = 2;
    } else if (paneles > 0) {
        caucho = 1;
    } else {
        caucho = 0; // Si paneles es 0 o negativo
    }
    let kitInstalacion = 1;

    // 🔹 Calcular las vallas especiales
    // Calcular medidas y cantidad de vallas especiales por lado
    vallasEspecialesLargo = [];
    vallasEspecialesCorto = [];

    // Lados largos

    let largoTotal = panelsX * realPanelWidth - 2.94; // Restamos el espacio de las curvas
    let vallasRectasLargo = Math.floor(largoTotal / 2); // Cuántas vallas rectas caben
    console.log();
    let resto = largoTotal - vallasRectasLargo * 2; // El resto después de las vallas rectas
    vallaRecta = vallaRecta + vallasRectasLargo * 2;

    for (let i = 0; i < 2; i++) {
        // Si el resto es menor que 0.40m, creamos dos vallas especiales
        if (resto < 0.40) {
            vallasEspecialesLargo.push(`1.60m`);
            vallasEspecialesLargo.push(`${(resto + 0.40).toFixed(2)}m`);
        } else {
            vallasEspecialesLargo.push(`${resto.toFixed(2)}m`);
        }
    }
    
    let cortoTotal = panelsY * realPanelHeight - 2.94; // Restamos el espacio de las curvas
    let vallasRectasCorto = Math.floor(cortoTotal / 2); // Cuántas vallas rectas caben
    let resto2 = cortoTotal - vallasRectasCorto * 2; // El resto después de las vallas rectas
    vallaRecta = vallaRecta + vallasRectasCorto * 2;
    
    // Lados cortos
    for (let i = 0; i < 2; i++) {
        // Si el resto es menor que 0.40m, creamos dos vallas especiales
        if (resto2 < 0.40) {
            vallasEspecialesCorto.push(`1.60m`);
            vallasEspecialesCorto.push(`${(resto2 + 0.40).toFixed(2)}m`); // Cambio aquí de `resto` a `resto2`
        } else {
            vallasEspecialesCorto.push(`${resto2.toFixed(2)}m`); // Cambio aquí de `resto` a `resto2`
        }
    }

    vallaEspecial = vallasEspecialesCorto.length + vallasEspecialesLargo.length;
    vallaRecta = vallaRecta - vallaPuerta;
    piesValla = vallaRecta + vallaCurva + vallaEspecial + vallaPuerta + vallaEspecialPuerta;    
    
    let [precioNuevo, precioSNalta, precioSNbaja, precioAlquiler]=precios(paneles,tapones,foam,vallaRecta,vallaCurva,vallaEspecial,vallaPuerta,vallaEspecialPuerta,piesValla,afiladoraDoble,aspiradora,numpatines,caucho,kitInstalacion)
    
    // DISTRIBUCION DE PATINES POR TALLA
    let distribucionTallas = {}; // Objeto para almacenar la distribución de patines por talla

    // Reparto de patines por talla
    const repartoTallas = [
        1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 5, 5, 4, 4, 3, 2, 1
    ];

    // Sumar el total de patines en el reparto
    let totalReparto = repartoTallas.reduce((a, b) => a + b, 0);

    // Calcular la distribución de patines según el número total de patines
    let totalDistribuido = 0; // Para verificar cuántos patines hemos asignado
    for (let talla = 25; talla <= 47; talla++) {
        const cantidad = repartoTallas[talla - 25]; // Ajuste porque el array empieza en la talla 25
        let cantidadPatines = Math.round((cantidad / totalReparto) * numpatines);
        distribucionTallas[talla] = cantidadPatines; // Asignar la cantidad de patines por talla
        totalDistribuido += cantidadPatines; // Sumar la cantidad distribuida
    }

    // Ajustar la diferencia para que el total sea igual a numpatines
    let diferencia = numpatines - totalDistribuido;

    // Ajustamos las tallas de valores más altos (por ejemplo, talla 34)
    if (diferencia > 0) {
        for (let talla = 38; talla >= 25; talla--) {
            if (diferencia === 0) break;
            distribucionTallas[talla]++;
            diferencia--;
        }
        } else if (diferencia < 0) {
            for (let talla = 44; talla <= 47; talla++) {
                if (diferencia === 0) break;
                if (distribucionTallas[talla] > 0) {
                    distribucionTallas[talla]--;
                    diferencia++;
                }
            }
    }
    //mostrar los resultados
    let patinesHTML = "<div style='column-count: 2; column-gap: 20px; line-height: 1.5;'>";
    for (let talla = 25; talla <= 47; talla++) {
        patinesHTML += `
            <div style="font-size: 12px; font-family: Arial;">
                Talla ${talla}: ${distribucionTallas[talla]} pares
            </div>`;
    }
    patinesHTML += "</div>";

   

    // 🔹 Insertar los datos en el contenedor de productos
    document.getElementById("productosContainer").innerHTML = `
        <h3 id="cabeceramateriales"><strong>DATOS Y MATERIALES DE LA PISTA</strong></h3>
        <p><strong>Superficie paneles:</strong> ${Math.round(areaPista,2)}m&sup2</p>
        <p><strong>Medidas paneles:</strong> ${realPanelWidth.toFixed(3)} mt x ${realPanelHeight.toFixed(3)} mt</p>
        <p><strong>Lado largo x lado corto:</strong> ${totalRealWidth.toFixed(2)}mt x ${totalRealHeight.toFixed(2)}mt</p>
        <p><strong>Espacio mínimo necesario:</strong> ${(totalRealWidth+0.7).toFixed(2)}mt x ${(totalRealHeight+0.7).toFixed(2)}mt</p>
        <br>
        <p><strong>A00005 Paneles:</strong> ${paneles} paneles, (Con paneles Pro equivalente = pista:  ${paneles*2}m2)</p>
        <p><strong>A00006 Tapones:</strong> ${Math.round(tapones)} bolsa/s 500uds. (Necesarios: ${paneles*6}, sobran: ${(Math.round(tapones)*500)-(paneles*6)})</p>
        <p><strong>A00088 Foam:</strong> ${Math.round(foam)} rollo/s * 63m2 cada uno = ${Math.round(foam)*63} m2 de suelo de espuma</p>
        <p><strong>A00042 Valla Recta:</strong> ${Math.round(vallaRecta)} uds</p>
        <p><strong>------ Rectas lado largo:</strong> ${Math.round(vallasRectasLargo)} uds</p>
        <p><strong>------ Rectas lado Puerta:</strong> ${Math.round(vallasRectasLargo-vallaPuerta)} uds</p>
        <p><strong>------ Rectas lados cortos:</strong> ${Math.round(vallasRectasCorto)} uds</p><br>

        <p><strong>A00044 Valla Curva:</strong> ${vallaCurva} uds</p>
        <p><strong>A00043 Valla Especial:</strong> ${vallaEspecial} uds</p> <!-- Aquí mostramos la variable vallaEspecial -->
        <p><strong>------ Medidas Valla Especial (Largo):</strong> ${vallasEspecialesLargo.join(', ')}</p>
        <p><strong>------ Medidas Valla Especial (Corto):</strong> ${vallasEspecialesCorto.join(', ')}</p><br>


        <p><strong>A00045 Valla Puerta:</strong> ${vallaPuerta} ud</p>
        <p><strong>A00477 Valla Especial Puerta:</strong> ${vallaEspecialPuerta} ud</p>
        <p><strong>A00184 Pies de Valla:</strong> ${piesValla} uds</p>
        <p><strong>A00364 Afiladora Doble:</strong> ${afiladoraDoble} uds</p>
        <p><strong>A00080 Aspiradora:</strong> ${aspiradora} ud</p>
        <p><strong>A000XX Patines:</strong> ${numpatines} pares</p>
        <p><strong>A000XX Patineros:</strong> ${Math.ceil(numpatines/40)} uds</p>
        <p><strong>A00082 Caucho:</strong> ${caucho} rollos</p>
        <p><strong>A00089 Kit de Instalación:</strong> ${kitInstalacion} caja herramientas</p>
        <br>
        <p><strong>MEDIDAS EN PIES ** USA **</strong></p>
        <p><strong>Superficie paneles:</strong> In feets: (${(Math.round(areaPista*10.7639104))} ft&sup2)</p>
        <p><strong>Medidas paneles:</strong> In feets: (${(realPanelWidth*3.2808399).toFixed(2)} ft x ${(realPanelHeight*3.2808399).toFixed(2)} ft)
        <p><strong>Lado largo x lado corto:</strong> In feets: (${(totalRealWidth*3.2808399).toFixed(2)} ft x ${(totalRealHeight*3.2808399).toFixed(2)} ft)</p>
        <p><strong>Espacio mínimo necesario:</strong> In feets: (${((totalRealWidth+0.7)*3.2808399).toFixed(2)} ft x ${((totalRealHeight+0.7)*3.2808399).toFixed(2)} ft)</p>
        <br>
        <p><strong>Desglose ${numpatines} pares de patines por talla:</strong></p>
        <p><strong>${patinesHTML}</strong></p>
    `;
    document.getElementById("preciosContainer").innerHTML = `
        <p><strong> EUROS: Precio Nuevo: </strong> ${precioNuevo.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€
        <strong>---- Precio SNalta: </strong> ${precioSNalta.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€
        <strong>---- Precio SNbaja: </strong> ${precioSNbaja.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€
        <strong>---- Precio Alquiler(1 mes): </strong> ${precioAlquiler.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€
        <br> (Precios orientativos con paneles PRO) <br><br>
        <span style="color: blue;">
        <strong> DOLARES: Precio Nuevo: </strong> $${(precioNuevo*1.3).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        <strong>---- Precio SNalta: </strong> $${(precioSNalta*1.3).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        <strong>---- Precio SNbaja: </strong> $${(precioSNbaja*1.3).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
         </p>
    `;
    
}
// Función (2) GENERAR CUADRÍCULA ********** FINAL


// Función (3) ACTUALIZAR CUADRÍCULA ********** para actualizar la cuadrícula con los valores ingresados
function actualizarCuadricula() {
    // Reproducir sonido
    const sonido = new Audio('sonido-actualizar.mp3'); // Ruta al archivo de sonido
    sonido.play();

    let panelsX = Math.min(40, parseInt(document.getElementById("panelsX").value, 10));
    let panelsY = Math.min(40, parseInt(document.getElementById("panelsY").value, 10));
    let puertas = Math.min(3, Math.max(1, parseInt(document.getElementById("puertas").value, 10)));
    
    generarCuadricula(panelsX, panelsY, puertas);
}
// Función (3) ACTUALIZAR CUADRÍCULA ********** FINAL


// Llamar a la función con valores predeterminados
generarCuadricula(7, 7, 1);
