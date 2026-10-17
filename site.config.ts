import { defineSiteConfig } from "@andrei-leads/core";

// DATOS FICTICIOS para la demo de electricidad-3 «Sin sorpresas». Negocio inventado en Torrent (l'Horta Sud).
// Antes de enseñarla: comprobar el nombre en Google y Maps, y sustituir el teléfono.
// TODOS los precios son ficticios (marcados): borrarlos o sustituirlos en la web del cliente.
export default defineSiteConfig({
  negocio: {
    nombre: "Corrent Electricistas",
    nombreLegal: "Corrent Servicios Eléctricos SL",
    nif: "B96000028",
    sector: "Electricista urgente",
    descripcionCorta:
      "Electricistas 24 h en Torrent y l'Horta Sud. Averías, diferenciales, enchufes y cuadros, con los precios a la vista.",
    anioFundacion: 2014,
    registroMercantil:
      "Inscrita en el Registro Mercantil de Valencia, tomo 0000, folio 00, hoja V-000000 (ficticio)",
    tipoSchema: ["Electrician"],
  },
  contacto: {
    telefono: "+34643647915",
    whatsapp: "+34643647915",
    email: "avisos@correntelectricistas.example",
    direccion: {
      calle: "Calle Mestre Chapí, 18, bajo",
      cp: "46900",
      ciudad: "Torrent",
      provincia: "Valencia",
    },
    horario: [
      { dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "08:00", cierra: "20:00" },
      { dias: ["sabado"], abre: "09:00", cierra: "14:00" },
    ],
    coordenadas: { lat: 39.437, lng: -0.465 },
    mensajeWhatsapp: "Hola, os escribo desde vuestra web. Tengo una avería eléctrica:",
    urgencias24h: true,
    tiempoLlegada: "30-45 min",
  },
  zonas: [
    "Torrent",
    "Picanya",
    "Paiporta",
    "Alaquàs",
    "Aldaia",
    "Xirivella",
    "Alcàsser",
    "Silla",
    "Catarroja",
    "Valencia",
  ],
  valoracion: { media: 4.7, total: 94 },
  imagenesHero: [
    {
      src: "/ejemplo/hero.jpg",
      alt: "Electricista de espaldas, con chaqueta de trabajo gris oscura, comprobando con un destornillador comprobador el cuadro eléctrico abierto de un recibidor, junto a un perchero con una chaqueta granate",
    },
  ],
  servicios: [
    {
      titulo: "Averías urgentes",
      descripcion: "Te quedas sin luz o huele a quemado: vamos a buscar el fallo, de día o de noche.",
      contenido: [
        "Si se ha ido la luz en toda la casa o en una parte, lo primero es mirar el cuadro. Si no está bajado ningún interruptor, puede ser un fallo de la compañía: mira si tus vecinos tienen luz. Si la tienen, el problema está en tu casa.",
        "Si hay olor a quemado, humo o chispas, baja el interruptor general y no lo vuelvas a subir. Si ves fuego, llama antes al 112. Cuando todo esté seguro, llámanos.",
        "Por teléfono te decimos cuánto cuesta venir y cuánto la hora de trabajo. Si es de noche, domingo o festivo, también el recargo. Así sabes lo que vas a pagar antes de que salgamos.",
        "Cuando llegamos, buscamos el fallo antes de cambiar nada. Si es una avería sencilla, la arreglamos en la misma visita. Si necesita una pieza o más tiempo, te dejamos la luz segura y te damos el precio antes de seguir.",
      ],
      incluye: [
        "Desplazamiento y diagnóstico",
        "Reparación en el momento si es posible",
        "Te explicamos qué ha pasado",
        "Factura con IVA",
      ],
      imagenes: [
        {
          src: "/ejemplo/servicio-averia.jpg",
          alt: "Mano con linterna revisando, sin luz, el cuadro eléctrico sobre la puerta de una cocina",
        },
      ],
      preguntas: [
        {
          pregunta: "¿Cuánto tardáis en llegar?",
          respuesta: "Normalmente entre 30 y 45 minutos en Torrent y alrededores. Te decimos la hora al salir.",
        },
        {
          pregunta: "¿Y si es de madrugada?",
          respuesta: "También vamos. Llevamos el recargo de noche, que te decimos por teléfono antes de salir.",
        },
      ],
      mensajeWhatsapp: "Hola, me he quedado sin luz. Os mando una foto del cuadro:",
      precioDesde: "desde 39 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Diferencial que salta",
      descripcion: "Buscamos qué lo hace saltar: un aparato, un enchufe con humedad o un cable dañado.",
      contenido: [
        "El diferencial salta cuando parte de la corriente se escapa por donde no debe. Casi siempre es un aparato estropeado, un enchufe con humedad o un cable dañado. Es una protección: no lo dejes sin armar ni lo puentees.",
        "Puedes probar tú primero. Desenchufa todo lo que tengas conectado, sube el diferencial y ve enchufando los aparatos de uno en uno. Cuando salte, ya sabes cuál es. Si salta sin nada enchufado, el fallo está en la instalación: llámanos.",
        "Con un medidor buscamos por qué circuito se escapa la corriente y dónde. Así no se cambian piezas a ciegas y pagas solo lo que hace falta.",
        "Si el diferencial es muy viejo o ya no protege bien, te lo decimos y te damos el precio de cambiarlo antes de tocar nada.",
      ],
      incluye: ["Diagnóstico con medidor", "Localización del circuito con fuga", "Cambio del diferencial si hace falta", "Factura con IVA"],
      imagenes: [
        {
          src: "/ejemplo/servicio-diferencial.jpg",
          alt: "Detalle de un diferencial nuevo recién montado, al lado del antiguo, amarillento por los años",
        },
      ],
      preguntas: [
        {
          pregunta: "¿Puedo subirlo otra vez sin más?",
          respuesta: "Una vez, para comprobar. Si vuelve a saltar, déjalo bajado y llámanos: hay una fuga que buscar.",
        },
        {
          pregunta: "¿Salta cuando llueve?",
          respuesta: "Suele ser humedad en una caja de registro, un enchufe exterior o la luz del patio. Lo localizamos y lo secamos.",
        },
      ],
      mensajeWhatsapp: "Hola, me salta el diferencial. Esto es lo que pasa:",
      precioDesde: "desde 81 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Enchufes e interruptores",
      descripcion: "Cambiamos enchufes quemados o flojos e instalamos enchufes nuevos.",
      incluye: ["Cambio del mecanismo", "Comprobación del cable y de la caja", "Factura con IVA"],
      imagenes: [
        {
          src: "/ejemplo/servicio-enchufe.jpg",
          alt: "Manos atornillando un enchufe nuevo en un dormitorio; el viejo, sobre un trapo en el suelo",
        },
      ],
      mensajeWhatsapp: "Hola, tengo un enchufe estropeado. Os mando una foto:",
      precioDesde: "desde 35 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Línea para el aire acondicionado",
      descripcion: "Si el aire hace saltar la luz, le ponemos su propia línea y su protección.",
      contenido: [
        "Un aire acondicionado consume mucho al arrancar. Si comparte línea con otros enchufes, es normal que salten las protecciones en las horas de más calor.",
        "La solución es una línea propia desde el cuadro hasta el aparato, con su automático. Se pasa por canaleta o por la pared, y se deja todo etiquetado.",
        "Antes de empezar, miramos qué potencia necesita tu aire y si tu cuadro admite la línea nueva. Te damos el precio por escrito.",
      ],
      incluye: ["Línea propia con su automático", "Canaleta o regata, según la pared", "Factura con IVA"],
      imagenes: [
        {
          src: "/ejemplo/servicio-aire.jpg",
          alt: "Unidad exterior de aire acondicionado en un balcón con una canaleta eléctrica nueva",
        },
      ],
      mensajeWhatsapp: "Hola, mi aire hace saltar la luz. Os cuento:",
      precioDesde: "desde 180 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Cuadros eléctricos",
      descripcion: "Cambio de cuadros quemados o antiguos por cuadros con protecciones nuevas.",
      contenido: [
        "Un cuadro con fusibles de porcelana, cables ennegrecidos o plásticos derretidos necesita cambiarse. No protege bien y puede ser un riesgo.",
        "Montamos un cuadro nuevo con interruptor general, diferenciales y un automático por circuito. Los cables quedan ordenados y todo etiquetado.",
        "Si el cuadro se ha quemado y no hay luz, lo hacemos con urgencia. Te decimos el precio por teléfono antes de ir.",
      ],
      incluye: ["Cuadro nuevo con diferenciales y automáticos", "Etiquetado de circuitos", "Comprobación de la toma de tierra"],
      mensajeWhatsapp: "Hola, necesito cambiar el cuadro eléctrico. Os mando foto:",
      precioDesde: "desde 420 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Boletín eléctrico",
      descripcion: "Certificado para dar de alta la luz o subir la potencia.",
      mensajeWhatsapp: "Hola, necesito un boletín eléctrico. ¿Qué datos os paso?",
      precioDesde: "desde 150 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
  ],
  trabajos: [
    {
      titulo: "Cuadro quemado en una casa de Torrent",
      descripcion:
        "Un automático en mal estado se calentó hasta quemar el cuadro. Lo cambiamos entero esa misma noche y revisamos los circuitos.",
      ubicacion: "Torrent (El Vedat)",
      anio: 2026,
      servicio: "cuadros-electricos",
      duracion: "4 horas",
      precio: "unos 450 €", // PRECIO FICTICIO: borrar en la web del cliente
      imagenes: [
        {
          src: "/ejemplo/trabajo-cuadro.jpg",
          alt: "Cuadro eléctrico nuevo con los automáticos alineados en el hueco bajo la escalera de una casa adosada",
        },
      ],
      antes: {
        src: "/ejemplo/trabajo-cuadro-antes.jpg",
        alt: "El mismo cuadro antes: plásticos chamuscados, cables derretidos y hollín subiendo por la pared hasta la escalera",
      },
      testimonio: {
        autor: "Juan Antonio R.",
        texto: "Me dijeron el precio por teléfono y fue exactamente ese. A la una de la madrugada.",
      },
    },
    {
      titulo: "Línea para el aire en Alaquàs",
      descripcion: "El aire del salón hacía saltar la luz cada tarde. Instalamos una línea propia con su automático.",
      ubicacion: "Alaquàs",
      anio: 2026,
      servicio: "linea-para-el-aire-acondicionado",
      duracion: "3 horas",
      imagenes: [
        {
          src: "/ejemplo/trabajo-aire.jpg",
          alt: "Línea eléctrica nueva por canaleta hasta el aire acondicionado en un salón",
        },
      ],
    },
    {
      titulo: "Diferencial que saltaba en Picanya",
      descripcion:
        "Una caja de registro con humedad hacía saltar el diferencial al llover. La secamos y rehicimos el empalme.",
      ubicacion: "Picanya",
      anio: 2025,
      servicio: "diferencial-que-salta",
      imagenes: [
        {
          src: "/ejemplo/trabajo-diferencial.jpg",
          alt: "Caja de registro abierta en un pasillo con empalmes nuevos, rodeada por una mancha de humedad",
        },
      ],
    },
  ],
  resenas: [
    {
      autor: "Juan Antonio R.",
      texto:
        "Se quemó el cuadro de madrugada. Vinieron en cuarenta minutos y el precio fue el que me dijeron por teléfono.",
      puntuacion: 5,
      fecha: "2026-09-26",
      fuente: "google",
    },
    {
      autor: "Rocío M.",
      texto: "En pleno agosto el aire hacía saltar la luz. Lo solucionaron esa misma tarde y sin sustos en la factura.",
      puntuacion: 5,
      fecha: "2026-08-11",
      fuente: "google",
    },
    {
      autor: "Fernando C.",
      texto: "Correctos y rápidos. El recargo de domingo es caro, pero te lo avisan antes de salir.",
      puntuacion: 4,
      fecha: "2026-06-29",
      fuente: "google",
    },
    {
      autor: "Amparo V.",
      texto: "Saltaba el diferencial un sábado por la noche. Me dijeron el precio al teléfono y a la hora ya estaban aquí.",
      puntuacion: 5,
      fecha: "2026-05-17",
      fuente: "google",
    },
    {
      autor: "Pau S.",
      texto: "Me explicaron qué había fallado y qué costaba cada cosa. Nada de sorpresas al pagar.",
      puntuacion: 5,
      fecha: "2026-03-08",
      fuente: "google",
    },
    {
      autor: "Lola B.",
      texto: "Cambiaron dos enchufes quemados en un momento. Precio claro y factura con IVA.",
      puntuacion: 5,
      fecha: "2026-02-02",
      fuente: "google",
    },
  ],
  tarifas: {
    items: [
      { concepto: "Desplazamiento y diagnóstico", precio: "39 €" }, // PRECIO FICTICIO: borrar en la web del cliente
      { concepto: "Hora de trabajo", precio: "42 €/h" }, // PRECIO FICTICIO: borrar en la web del cliente
      { concepto: "Recargo noche, domingo y festivo", precio: "+40 %" }, // PRECIO FICTICIO: borrar en la web del cliente
      { concepto: "Cambio de enchufe o interruptor", precio: "desde 35 €" }, // PRECIO FICTICIO: borrar en la web del cliente
      { concepto: "Cambio de diferencial", precio: "desde 95 €" }, // PRECIO FICTICIO: borrar en la web del cliente
      { concepto: "Cambio de cuadro eléctrico", precio: "desde 420 €" }, // PRECIO FICTICIO: borrar en la web del cliente
    ],
    nota: "IVA incluido. El precio final te lo decimos antes de empezar, cuando vemos la avería.",
  },
  acreditaciones: [
    {
      nombre: "Empresa instaladora en baja tensión (RII), categoría especialista",
      numero: "46/000000 (ficticio)",
    },
  ],
  garantias: [
    "Precio antes de empezar",
    "Factura con IVA",
    "6 meses de garantía en la reparación",
    "Seguro de responsabilidad civil",
    "Te avisamos al salir hacia tu casa",
  ],
  empresa: {
    historia: [
      "Empezamos en 2014 con una furgoneta y un teléfono que siempre se coge. Hoy somos cuatro electricistas y trabajamos en Torrent y toda l'Horta Sud.",
      "Casi todo lo que hacemos son averías: sin luz, diferenciales que saltan, cuadros quemados. Por eso lo primero que te damos es el precio, antes de salir de la furgoneta.",
    ],
    imagenes: [
      {
        src: "/ejemplo/empresa-furgoneta.jpg",
        alt: "Furgoneta blanca sin rotular de noche bajo una farola, con las puertas traseras abiertas y la luz interior encendida",
      },
    ],
    equipo: [
      { nombre: "Rubén", cargo: "Instalador autorizado y gerente" },
      { nombre: "Marina", cargo: "Oficina y avisos" },
      { nombre: "Dani", cargo: "Oficial electricista" },
    ],
  },
  preguntas: [
    {
      pregunta: "¿Cuánto cuesta una urgencia de noche?",
      respuesta:
        "El desplazamiento y la hora, más el recargo de noche. Te lo decimos por teléfono antes de salir.",
    },
    {
      pregunta: "¿Y si no lo podéis arreglar en el momento?",
      respuesta: "Te dejamos la luz segura y te damos el precio de la reparación antes de hacerla.",
    },
    { pregunta: "¿Cobráis por venir a ver la avería?", respuesta: "Sí, el desplazamiento y diagnóstico. Está en la tabla de precios." },
    { pregunta: "¿Dais factura?", respuesta: "Siempre, con IVA." },
    {
      pregunta: "¿Trabajáis en festivos?",
      respuesta: "Sí, las urgencias las atendemos los 365 días. Con el recargo de festivo, que te decimos antes.",
    },
  ],
  marca: { colorPrimario: "#7e22ce" },
  // Plan Básico: Vercel Web Analytics (sin cookies). Activar también Analytics en el proyecto de Vercel.
  analitica: { vercel: true },
  seo: {
    titulo: "Electricista 24 h en Torrent | Corrent Electricistas",
    descripcion:
      "Electricistas 24 h en Torrent y l'Horta Sud: averías, diferenciales, enchufes y cuadros. Precios a la vista y presupuesto antes de empezar.",
    url: "https://electricidad-3.vercel.app",
  },
});
