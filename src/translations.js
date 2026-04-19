const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      proyectos: 'Proyectos',
      sobreMi: 'Sobre mí',
      contacto: 'Contacto',
    },
    hero: {
      tag: '⚙ Ingeniera de Software',
      btnContact: 'Contactarme',
      btnGithub: 'Ver GitHub →',
      btnCV: '⬇ Descargar CV',
      cardSub: 'Ingeniería de Software',
      cardCountry: 'Costa Rica',
      cardUniv: 'Universidad Cenfotec',
    },
    habilidades: {
      label: 'Conocimientos',
      title: 'Áreas de',
      titleSpan: 'especialización',
      skills: [
        {  title: 'Github',desc: 'Guarda, rastrea y comparte código' },
        {  title: 'React', desc: 'Construye componentes reutilizables.' },
        {  title: 'JavaScript', desc: 'Lenguaje de programación web.' },
        {  title: 'CSS3', desc: 'Estilos y diseño visual.' },
        { title: 'Java', desc: 'Lenguaje de programación robusto.' },
        {  title: 'SQL', desc: 'Lenguaje de bases de.' },
      ],
    },
    proyectos: {
      label: 'Identidad profesional',
      title: 'Misión, Visión',
      titleSpan: '& Valores',
      cards: [
        {
          empresa: 'SOPA Technologies',
          titulo: 'Mahou site',
          content: 'Es una plataforma digital innovadora desarrollada por SOPA-Technologies, orientada a la creación literaria asistida por inteligencia artificial (IA). Su propósito es ofrecer un entorno integral para escribir, organizar y desarrollar historias de manera creativa, estructurada e interactiva.',
          isList: false,
          repo: 'https://github.com/SopaTechnologies/Proyecto_Front',
        },

        {
          empresa: 'Byte Dev',
          titulo: 'Multas de tránsito',
          content: 'Creacion de una plataforma para la gestión de multas de tránsito',
          isList: false,
          repo: 'https://www.github.com/FabiMadrigalFlores/mahou-site',
        },

        {
          empresa: 'Genius Code',
          titulo: 'Feria de agricultores',
          content: 'Creación de una plataforma en línea dirigida a los agricultores, con el propósito de facilitar la venta de sus productos sin la necesidad de participar físicamente en las ferias agrícolas.',
          isList: false,
          repo: 'https://github.com/VillArrt/GC-farmonline',
        },
      ],
    },
    identidad: {
      label: 'Marca personal',
      title: 'Mi identidad',
      titleSpan: 'digital',
      p1: 'Soy Ingeniera en Software, con formación académica en el desarrollo de soluciones tecnológicas orientadas a resolver problemas reales de manera eficiente y creativa.',
      p2: 'Me destaco por mi compromiso con el aprendizaje continuo, la responsabilidad y la capacidad de adaptación a nuevas tecnologías. Mi imagen web representa profesionalismo, dedicación y una actitud proactiva hacia el crecimiento.',
      fonts: 'Tipografías',
      palette: 'Paleta 60-30-10'
    },
    contacto: {
      label: '¿Hablamos?',
      title: 'Ponerse en',
      titleSpan: 'contacto',
      intro: 'Estoy abierta a nuevas oportunidades, colaboraciones y proyectos tecnológicos. No dudes en contactarme por cualquiera de estos medios.',
      items: [
        { icon: '✉️', label: 'Correo electrónico', value: 'fabiana.madrigal.f@gmail.com', href: 'mailto:fabiana.madrigal.f@gmail.com' },
        { icon: '💬', label: 'WhatsApp',            value: '+506 8501 7072',               href: 'https://wa.me/50685017072' },
        { icon: '🔗', label: 'LinkedIn',            value: 'fabiana-madrigal-flores',      href: 'https://www.linkedin.com/in/fabiana-madrigal-flores-924b59325' },
        { icon: '💻', label: 'GitHub',              value: 'FabiMadrigalFlores',           href: 'https://github.com/FabiMadrigalFlores' },
      ],
    },
    footer: '© 2026 Fabiana Madrigal Flores',
  },

  en: {
    nav: {
      inicio: 'Home',
      habilidades: 'Skills',
      sobreMi: 'About me',
      contacto: 'Contact',
    },
    hero: {
      tag: '⚙ Software Engineer',
      desc: 'Software Engineer with a solid background in developing technology solutions. Passionate about continuous learning, collaborative work, and building software that creates real impact.',
      btnContact: 'Contact me',
      btnGithub: 'View GitHub →',
      btnCV: '⬇ Download CV',
      cardSub: 'Software Engineering',
      cardCountry: 'Costa Rica',
      cardUniv: 'Cenfotec University',
    },
    habilidades: {
      label: 'Knowledge',
      title: 'Areas of',
      titleSpan: 'expertise',
      skills: [
       { title: 'Github', desc: 'Save, track and share code' },
       { title: 'React', desc: 'Build reusable components.' },
        { title: 'JavaScript', desc: 'Web programming language.' },
        { title: 'CSS3', desc: 'Styles and visual design.' },
        { title: 'Java', desc: 'Robust programming language.' },
        { title: 'SQL', desc: 'Database language.' },
      ],
    },
    proyectos: {
      label: 'Professional identity',
      title: 'Mission, Vision',
      titleSpan: '& Values',
      cards: [
        {
          empresa: 'SOPA Technologies',
          titulo: 'Mahou site',
          content: 'It is an innovative digital platform developed by SOPA-Technologies, focused on AI-assisted literary creation. Its purpose is to provide a comprehensive environment for writing, organizing and developing stories in a creative, structured and interactive way.',
          isList: false,
          repo: 'https://github.com/SopaTechnologies/Proyecto_Front',
        },
        {
          empresa: 'Byte Dev',
          titulo: 'Traffic fines',
          content: 'Development of a platform for traffic fine management.',
          isList: false,
          repo: 'https://www.github.com/FabiMadrigalFlores/mahou-site',
        },
        {
          empresa: 'Genius Code',
          titulo: 'Farmers market',
          content: 'Creation of an online platform aimed at farmers, with the purpose of facilitating the sale of their products without the need to physically participate in agricultural fairs.',
          isList: false,
          repo: 'https://github.com/VillArrt/GC-farmonline',
        },
      ],
    },
    identidad: {
      label: 'Personal brand',
      title: 'My digital',
      titleSpan: 'identity',
      p1: 'I am a Software Engineer with an academic background in developing technology solutions aimed at solving real problems efficiently and creatively.',
      p2: 'I stand out for my commitment to continuous learning, responsibility, and adaptability to new technologies. My web image represents professionalism, dedication and a proactive attitude toward growth.',
      fonts: 'Fonts',
      palette: '60-30-10 Palette',
    },
    contacto: {
      label: "Let's talk?",
      title: 'Get in',
      titleSpan: 'touch',
      intro: "I'm open to new opportunities, collaborations, and tech projects. Feel free to reach out through any of these channels.",
      items: [
        { icon: '✉️', label: 'Email',    value: 'fabiana.madrigal.f@gmail.com', href: 'mailto:fabiana.madrigal.f@gmail.com' },
        { icon: '💬', label: 'WhatsApp', value: '+506 8501 7072',               href: 'https://wa.me/50685017072' },
        { icon: '🔗', label: 'LinkedIn', value: 'fabiana-madrigal-flores',      href: 'https://www.linkedin.com/in/fabiana-madrigal-flores-924b59325' },
        { icon: '💻', label: 'GitHub',   value: 'FabiMadrigalFlores',           href: 'https://github.com/FabiMadrigalFlores' },
      ],
    },
    footer: '© 2026 Fabiana Madrigal Flores',
  },
};

export default translations;
