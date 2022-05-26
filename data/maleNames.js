const maleNames = [
  'Aaron',
  'Abel',
  'Abelardo',
  'Abelino',
  'Abiel',
  'Abiezer',
  'Abílio',
  'Abner',
  'Abraão',
  'Acácio',
  'Adailton',
  'Adair',
  'Adalberto',
  'Adalgiso',
  'Adalício',
  'Adalmir',
  'Adalto',
  'Adam',
  'Adamastor',
  'Adamor',
  'Adão',
  'Adeci',
  'Adeildo',
  'Adelair',
  'Adélcio',
  'Adelino',
  'Adélio',
  'Adelson',
  'Ademar',
  'Ademilson',
  'Ademir',
  'Aderbal',
  'Adérito',
  'Adilson',
  'Admilson',
  'Adolfo',
  'Adonai',
  'Adonis',
  'Adónis',
  'Adrian',
  'Adriano',
  'Adriel',
  'Aécio',
  'Afonso',
  'Afrânio',
  'Agenor',
  'Ageo',
  'Agipino',
  'Agnaldo',
  'Agnelo',
  'Agostinho',
  'Aguinaldo',
  'Ailton',
  'Aires',
  'Airton',
  'Aitor',
  'Alair',
  'Alan',
  'Alaôr',
  'Alarico',
  'Albano',
  'Albertino',
  'Alberto',
  'Albino',
  'Alcides',
  'Alcindo',
  'Aldair',
  'Aldemir',
  'Aldenor',
  'Aldo',
  'Alejandro',
  'Alessandro',
  'Alex',
  'Alexandre',
  'Alexandrino',
  'Alexandro',
  'Aléxio',
  'Aléxis',
  'Alfredo',
  'Alípio',
  'Alírio',
  'Alison',
  'Allan',
  'Almerindo',
  'Almir',
  'Aloísio',
  'Alonzo',
  'Altino',
  'Aluísio',
  'Alvantino',
  'Álvaro',
  'Alvino',
  'Amadeo',
  'Amadeu',
  'Amândio',
  'Amarildo',
  'Amauri',
  'Amaury',
  'Ambrósio',
  'Américo',
  'Amílcar',
  'Amilton',
  'Amir',
  'Ananias',
  'Andersen',
  'Anderson',
  'André',
  'Ândreo',
  'Andrés',
  'Anésio',
  'Angélico',
  'Ângelo',
  'Aníbal',
  'Anísio',
  'Anselmo',
  'Antenor',
  'Antero',
  'Anthony',
  'Antônio',
  'Apollo',
  'Apolo',
  'Aprígio',
  'Aquiles',
  'Arcanjo',
  'Ari',
  'Ariel',
  'Aristeu',
  'Aristides',
  'Armando',
  'Armindo',
  'Arnaldo',
  'Aron',
  'Arthur',
  'Artur',
  'Arturo',
  'Ary',
  'Asher',
  'Assis',
  'Ataíde',
  'Athos',
  'Átila',
  'Atlas',
  'Augusto',
  'Aureliano',
  'Aurelino',
  'Aurélio',
  'Aurino',
  'Ayrton',
  'Balbino',
  'Balduíno',
  'Baltasar',
  'Baltazar',
  'Barnabé',
  'Bartolomeu',
  'Basileu',
  'Basílio',
  'Batista',
  'Belarmino',
  'Belchior',
  'Belisário',
  'Belmiro',
  'Bendito',
  'Benedito',
  'Benício',
  'Benito',
  'Benjamim',
  'Benjamin',
  'Bento',
  'Bernardo',
  'Beto',
  'Bill',
  'Boanerges',
  'Bob',
  'Bonifácio',
  'Bóris',
  'Bosco',
  'Brandon',
  'Breno',
  'Brian',
  'Bruce',
  'Bruno',
  'Bryan',
  'Byron',
  'Cacildo',
  'Cadú',
  'Cael',
  'Caetano',
  'Caíco',
  'Caio',
  'Caíque',
  'Calazan',
  'Caleb',
  'Calisto',
  'Calixto',
  'Calvin',
  'Camilo',
  'Cândido',
  'Canuto',
  'Carlos',
  'Casimiro',
  'Cassiano',
  'Cássio',
  'Castiel',
  'Cauã',
  'Cauê',
  'Celestino',
  'Celso',
  'César',
  'Charles',
  'Christian',
  'Christian',
  'Christopher',
  'Cícero',
  'Cid',
  'Cirilo',
  'Ciro',
  'Cláudio',
  'Claus',
  'Clayton',
  'Clementino',
  'Clodomiro',
  'Clovis',
  'Clóvis',
  'Conrad',
  'Conrado',
  'Constantin',
  'Constantino',
  'Cosme',
  'Cristiano',
  'Cristóvão',
  'Cursino',
  'Custódio',
  'Dácio',
  'Dagoberto',
  'Dalmo',
  'Dalton',
  'Damião',
  'Daniel',
  'Danilo',
  'Dante',
  'Dárcio',
  'Dário',
  'Darius',
  'Davi',
  'David',
  'Deivid',
  'Delfim',
  'Delfino',
  'Delmar',
  'Demétrio',
  'Denis',
  'Denzel',
  'Derik',
  'Didier',
  'Diego',
  'Dilan',
  'Dimas',
  'Dinis',
  'Diniz',
  'Dino',
  'Diógenes',
  'Diogo',
  'Dionísio',
  'Djalma',
  'Dom',
  'Domênico',
  'Domingos',
  'Dominic',
  'Donatello',
  'Donatílio',
  'Donato',
  'Donizete',
  'Douglas',
  'Douglas',
  'Durval',
  'Dylan',
  'Ed',
  'Éder',
  'Ederson',
  'Edgar',
  'Edivaldo',
  'Edmilson',
  'Edmir',
  'Edson',
  'Eduardo',
  'Eli',
  'Elias',
  'Eliezer',
  'Élio',
  'Eliseo',
  'Eliseu',
  'Elísio',
  'Élton',
  'Emanuel',
  'Emaús',
  'Emerson',
  'Emílio',
  'Ênio',
  'Enrico',
  'Enrique',
  'Enzo',
  'Erasmo',
  'Erasmus',
  'Eriberto',
  'Eric',
  'Erik',
  'Ernesto',
  'Esdras',
  'Estêvão',
  'Eugénio',
  'Eurico',
  'Evaldo',
  'Evandro',
  'Evaristo',
  'Evelásio',
  'Expedito',
  'Ezekiel',
  'Fabiano',
  'Fábio',
  'Fabrício',
  'Faustino',
  'Fausto',
  'Felipe',
  'Felisberto',
  'Felismino',
  'Félix',
  'Ferdinand',
  'Ferdinando',
  'Fernando',
  'Fernão',
  'Filipe',
  'Firmino',
  'Flávio',
  'Florêncio',
  'Florentino',
  'Floriano',
  'Fortunato',
  'Francesco',
  'Francis',
  'Francisco',
  'Franco',
  'Frank',
  'Franklin',
  'Frederico',
  'Gabriel',
  'Gael',
  'Galdino',
  'Galeno',
  'Galileu',
  'Gaspar',
  'Gastão',
  'Gaudêncio',
  'Genaro',
  'Genésio',
  'Geovani',
  'Geraldo',
  'Germano',
  'Gerson',
  'Giancarlos',
  'Giani',
  'Gianluca',
  'Gil',
  'Gilberto',
  'Gilmar',
  'Gilmar',
  'Gilson',
  'Giovani',
  'Giuseppe',
  'Glauco',
  'Golias',
  'Gonçalo',
  'Graciano',
  'Gregório',
  'Gualter',
  'Guarani',
  'Guilherme',
  'Gumersindo',
  'Gustavo',
  'Guy',
  'Haroldo',
  'Heitor',
  'Hélder',
  'Hélio',
  'Henrique',
  'Henry',
  'Herbert',
  'Hermano',
  'Hernâni',
  'Horácio',
  'Hugo',
  'Humberto',
  'Iago',
  'Ianis',
  'Ícaro',
  'Ike',
  'Inácio',
  'Irineu',
  'Isaac',
  'Isaías',
  'Isidoro',
  'Isidro',
  'Ismael',
  'Israel',
  'Ítalo',
  'Itamar',
  'Ivaldo',
  'Ivan',
  'Ivandro',
  'Ivanildo',
  'Ivo',
  'Jacinto',
  'Jack',
  'Jackson',
  'Jader',
  'Jadiel',
  'Jadir',
  'Jaime',
  'Jair',
  'Jairo',
  'Jamal',
  'James',
  'Jamil',
  'Jandir',
  'Janilson',
  'Januário',
  'Jarbas',
  'Jason',
  'Jason',
  'Javier',
  'Jean',
  'Jefferson',
  'Jeremias',
  'Jerônimo',
  'Jessé',
  'Jessie',
  'Jessiel',
  'Jesualdo',
  'Jesus',
  'Joab',
  'João',
  'Joaquim',
  'Joel',
  'Joelson',
  'Jofre',
  'Johnny',
  'Johnson',
  'Jonas',
  'Jonatã',
  'Jonathan',
  'Jorge',
  'José',
  'Josélio',
  'Joshua',
  'Josias',
  'Josué',
  'Juan',
  'Juliano',
  'Julião',
  'Júlio',
  'Júnior',
  'Jurandir',
  'Juvenal',
  'Kaique',
  'Kauã',
  'Kauan',
  'Kawan',
  'Kelvin',
  'Kennedy',
  'Kevin',
  'Klaus',
  'Kleber',
  'Lael',
  'Laerte',
  'Laertes',
  'Lauro',
  'Lázaro',
  'Leandro',
  'Leon',
  'Leonardo',
  'Leôncio',
  'Leonel',
  'Leónidas',
  'Leopoldo',
  'Levi',
  'Lino',
  'Lineu',
  'Lionel',
  'Lisandro',
  'Lívio',
  'Logan',
  'Lorenzo',
  'Lourenço',
  'Luã',
  'Luan',
  'Luca',
  'Lucas',
  'Luciano',
  'Lúcio',
  'Luigi',
  'Luís',
  'Luiz',
  'Lukas',
  'Luzio',
  'Macário',
  'Magnus',
  'Malvino',
  'Manassés',
  'Manoel',
  'Manuel',
  'Maomé',
  'Marcelo',
  'Márcio',
  'Marco',
  'Marcos',
  'Marcus',
  'Mário',
  'Marley',
  'Marlon',
  'Martim',
  'Martin',
  'Martinho',
  'Marvin',
  'Mateus',
  'Matheo',
  'Matheus',
  'Mathias',
  'Mathieu',
  'Matias',
  'Maurício',
  'Maurílio',
  'Mauro',
  'Max',
  'Maximiliano',
  'Maxwell',
  'Mélvin',
  'Messias',
  'Micael',
  'Michael',
  'Michel',
  'Miguel',
  'Milo',
  'Milton',
  'Mizael',
  'Moacir',
  'Mohamed',
  'Moisés',
  'Murilo',
  'Nataniel',
  'Nazário',
  'Neil',
  'Nélson',
  'Nereu',
  'Nestor',
  'Newton',
  'Ney',
  'Nicola',
  'Nicolas',
  'Nicolau',
  'Nildemar',
  'Nilo',
  'Nilson',
  'Nilton',
  'Nivaldo',
  'Noah',
  'Noé',
  'Noel',
  'Nonato',
  'Norberto',
  'Norildo',
  'Norimar',
  'Nuno',
  'Oceano',
  'Octávio',
  'Odemar',
  'Odilson',
  'Odin',
  'Odorico',
  'Olavo',
  'Olin',
  'Oliver',
  'Olivier',
  'Omar',
  'Omer',
  'Onofre',
  'Orestes',
  'Orlandino',
  'Orlando',
  'Óscar',
  'Osias',
  'Osman',
  'Osmar',
  'Osório',
  'Osvaldo',
  'Otacílio',
  'Otávio',
  'Otto',
  'Ozael',
  'Pablo',
  'Paco',
  'Paolo',
  'Páris',
  'Pascoal',
  'Patrício',
  'Patrick',
  'Paulino',
  'Paulo',
  'Pedro',
  'Pepe',
  'Percival',
  'Péricles',
  'Pierre',
  'Porfírio',
  'Querubim',
  'Quintino',
  'Radamés',
  'Rafael',
  'Rafaelo',
  'Raí',
  'Raimundo',
  'Ralf',
  'Ralph',
  'Ramiro',
  'Ramon',
  'Ramón',
  'Raoni',
  'Raphael',
  'Raúl',
  'Reginaldo',
  'Régis',
  'Reimão',
  'Reinaldo',
  'Renan',
  'Renato',
  'Renê',
  'Ricardo',
  'Rivaldo',
  'Roberto',
  'Robson',
  'Rodney',
  'Rodolfo',
  'Rodrigo',
  'Roger',
  'Rogério',
  'Roland',
  'Rolando',
  'Romão',
  'Romário',
  'Romeo',
  'Romeu',
  'Rômulo',
  'Ronald',
  'Ronaldo',
  'Roni',
  'Rosendo',
  'Rúben',
  'Rúbens',
  'Rudesindo',
  'Rudolfo',
  'Rufino',
  'Rui',
  'Ruy',
  'Ryan',
  'Salomão',
  'Salvador',
  'Samuel',
  'Sandro',
  'Sansão',
  'Santiago',
  'Saúl',
  'Saulo',
  'Sávio',
  'Sebastião',
  'Selton',
  'Serafim',
  'Sérgio',
  'Sertório',
  'Severino',
  'Sidney',
  'Silas',
  'Silvestre',
  'Sílvio',
  'Simão',
  'Simplício',
  'Sinésio',
  'Stefan',
  'Stefano',
  'Stenio',
  'Steve',
  'Steven',
  'Sydney',
  'Taciano',
  'Tadeu',
  'Tales',
  'Tamires',
  'Tâmiris',
  'Tarcísio',
  'Tarik',
  'Tarsício',
  'Telmo',
  'Tenório',
  'Teo',
  'Teobaldo',
  'Teodemiro',
  'Teodoro',
  'Thales',
  'Theo',
  'Thiago',
  'Thomas',
  'Thomaz',
  'Tiago',
  'Tibúrcio',
  'Ticiano',
  'Tierri',
  'Tierry',
  'Timóteo',
  'Tito',
  'Tobias',
  'Tom',
  'Tomás',
  'Tomaz',
  'Tomé',
  'Tristão',
  'Troy',
  'Túlio',
  'Ubirajara',
  'Ubiratã',
  'Ulisses',
  'Urbano',
  'Uriel',
  'Valdemar',
  'Valentim',
  'Valentino',
  'Válter',
  'Vanderlei',
  'Vasco',
  'Venâncio',
  'Veríssimo',
  'Vicente',
  'Vicenzo',
  'Victor',
  'Vílmar',
  'Vilson',
  'Vinício',
  'Vinícius',
  'Virgílio',
  'Vital',
  'Vítor',
  'Vitório',
  'Vladimir',
  'Wagner',
  'Waldir',
  'Waldo',
  'Wallace',
  'Walter',
  'Washington',
  'Watson',
  'Webster',
  'Weller',
  'Wellington',
  'Wendel',
  'Wesley',
  'Will',
  'William',
  'Wilson',
  'Xavier',
  'Xénon',
  'Xerxes',
  'Xico',
  'Yago',
  'Yuri',
  'Yves',
  'Zacarias',
  'Zack',
  'Zaqueu',
  'Zayne',
  'Zion',
]