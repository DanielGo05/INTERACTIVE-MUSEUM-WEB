class Museum{
    constructor(){
      this.teams = [];
    }
    getTeams(){
      return this.teams
    }
    setTeams( teams ){
      this.teams = teams;
    }
    initializeTeams(){
      let millonarios = new Team("./img/millonarios.jpg", "Es un club de fútbol de la ciudad de Bogotá, capital de Colombia. Es uno de los clubes más laureados y emblemáticos de Colombia, de allí que sea considerada una de las entidades deportivas más grandes del país y una de las más importantes de Sudamérica. Los orígenes del equipo se remontan hasta la década de los años 1920, pero empezó a ser llamado como Los Millonarios en el año de 1932 cuando su nombre era el Club Deportivo Municipal; oficialmente fue fundado el 18 de junio de 1946 bajo el nombre de Club Deportivo Los Millonarios y, posteriormente, como Millonarios Fútbol Club el 20 de abril de 2011 cuando fue reconstituido como sociedad anónima.", ["15 Ligas Locales", "2 Copa Colombia", "1 SuperLiga Colombiana", "1 Copa Continental", "1 Copa Merconorte"]);
      let nacional = new Team("./img/nacional.jpg", "Es un club de fútbol de la ciudad de Medellín, Colombia. Es considerado uno de los clubes más populares de Colombia y de Sudamérica. Fundado el 7 de marzo de 1947 bajo el nombre de Club Atlético Municipal de Medellín y registrado por escritura pública el 30 de abril de 1947 en la notaría primera de Medellín. En 1950, el expresidente de la Liga Antioqueña de fútbol, Luis Alberto Villegas, cambió el nombre del club por Club Atlético Nacional.El club participa en la máxima categoría de la División Mayor del Fútbol Colombiano, la Categoría Primera A desde su fundación en 1948.", ["16 Ligas Locales", "5 Copa Colombia", "2 SuperLiga Colombiana", "2 Copas Libertadores", "2 Copa Merconorte", "2 Copa Interamericana", "1 Recopa Sudamericana"]);
      let america = new Team("./img/america.png", "Es un club de fútbol colombiano fundado el 13 de febrero de 1927 en la ciudad de Cali. Es considerado uno de los clubes más grandes y populares de Colombia y uno de los más importantes de Sudamérica. Disputa sus partidos en el Estadio Olímpico Pascual Guerrero y el color que identifica al club desde sus inicios es el rojo escarlata.", ["15 Ligas Locales", "1 Liga Local B", "1 Copa Simon Bolivar", "1 Copa Merconorte"]);
      let cali = new Team("./img/cali.png", "Es un club deportivo de la ciudad de Santiago de Cali, en el Valle del Cauca, Colombia, fundado el 23 de noviembre de 1912 como (Cali Football Club) que después de pasar por dos re-estructuraciones desde su fundación por cuestiones económicas, en el año de 1959 se constituye como asociación y es reconocida oficialmente en 1962 lo que en la actualidad es la Asociación Deportivo Cali. El Deportivo Cali es más conocido como un club de fútbol, aunque compite en otras disciplinas como baloncesto, tenis, natación y futsal.", ["10 Ligas Locales", "1 Copa Colombia", "1 SuperLiga Colombiana"]);
      let santafe = new Team("./img/santafe.png", "Es un club de fútbol fundado el 28 de febrero de 1941 en el centro histórico de la ciudad de Bogotá, capital de Colombia. Es uno de los clubes de fútbol de mayor tradición e historia en el país, considerado uno de los más grandes y populares, y de los más importantes de Sudamérica. Disputa sus partidos en el estadio Nemesio Camacho El Campín y es identificado desde sus inicios con los colores rojo y blanco.", ["9 Ligas Locales", "2 Copa Colombia", "4 SuperLiga Colombiana", "1 Copa Simon Bolivar", "1 Copa Sudamericana", "1 Copa Suruga Bank"]);
      this.teams.push( millonarios, nacional, america, cali, santafe );
    }
  }