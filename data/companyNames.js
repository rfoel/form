const companyNames = [
  'Adocica',
  'América Online',
  'Amigo Pet Rações',
  'Apetite Assados',
  'Argos Roupas',
  'Arteiras Ateliê',
  'Assados & Cia',
  'Asset Carros',
  'Assim Assado',
  'Asteca Online',
  'Avenida da Ração',
  'Bambolê Moda Infantil',
  'Base Padaria',
  'Beco do Frango',
  'Beco dos Salgados',
  'Bela Beleza',
  'Bendito Assados',
  'Bendito Salgado',
  'Boa Opção',
  'Bombocado',
  'Boomer Celular',
  'Brasa Assados',
  'Braseira Assados',
  'Braseiro Assados',
  'Brilha & Lustra',
  'Brilho Pet',
  'Brilhus Bijus',
  'Brinquedos do Dir',
  'Brinquedos Seguros',
  'Cabelereiro Bit',
  'Cabelereiro Den',
  'Canto Naturais',
  'Carros Balde',
  'Carros Chaves',
  'Carros Livres',
  'Carros Log',
  'Casa da Limpeza',
  'Casa da Massa',
  'Casa do Frango',
  'Casa dos Assados',
  'Castelo Doces',
  'Catavento Doces',
  'Celular Case',
  'Celular Classe',
  'Celularte',
  'Chicken Club',
  'Chocobom',
  'Cia dos Assados',
  'Cia dos Doces',
  'Cocotte Bijus',
  'Cometa Pet',
  'Companhia da Ração',
  'Confeitaria Acento',
  'Confeitaria Geleia',
  'Confiança Cabelos',
  'Consulado da Ração',
  'Contrato Maquiagem',
  'Costa Carros',
  'Cresça Doces',
  'Croc Croc Castanhas',
  'Crossover Papelaria',
  'Crosta Dourada Frangos',
  'Deep Carros',
  'Dinamite Bijuterias',
  'Doce Gula',
  'Doce Mania',
  'Doce Sabor',
  'Docelândia',
  'Doces Choques',
  'Doces Impactos',
  'Docito',
  'Doçurinha',
  'Dolce Brownie',
  'Dolce Doçura',
  'Doutor Limpeza',
  'Empório da Ração',
  'Empório do Sabor Salgados',
  'Empório dos Doces',
  'Empório dos Salgado',
  'Esparta Papelaria',
  'Esquina da Ração',
  'Esquina do Frango',
  'Esquina dos Salgados',
  'Estação dos Doces',
  'Expediton Roupas',
  'Fábrica de Assados',
  'Fabrica Pet',
  'Factual Naturais',
  'Fator Carros',
  'Feira Confeiteira',
  'Frangaria',
  'Frango & Cia',
  'Furmiguinhas',
  'Galeria da Ração',
  'Galeria dos Assados',
  'Garagem do Frango',
  'Garagem Livros',
  'Gelaçaí',
  'Gosto Online',
  'Gulla Salgados',
  'Help Limpeza',
  'Hit Pet',
  'íCone Papelaria',
  'Império da Ração',
  'Império dos Doces',
  'In Voga Moda',
  'Incorre Livros',
  'K-asa Limpa',
  'Ki Doçura',
  'Ki-delícia',
  'La Casa de Pastel',
  'Latitude Doces',
  'Leste Livros',
  'Liga dos Assados',
  'Limp Fácil',
  'Limpar',
  'Livros Primeiros',
  'Louco Por Papelaria',
  'Luxuosos Bijuterias',
  'Magic Candy (Doce Mágico)',
  'Magic Chicken',
  'Magna Doces',
  'Mania Assados',
  'Mania Salgados',
  'Maria Doce',
  'Marshall Roupas',
  'Mata Fome Marmitas',
  'Max Glow',
  'Max Limp',
  'Mercado da Ração',
  'Mestre dos Salgados',
  'Minerva Carros',
  'Mirante Online',
  'Mix Salgados',
  'Moda Qcola',
  'Mulhara Seguros',
  'Mundo Doce',
  'Na Brasa Assados',
  'Na Brasa',
  'Nana Nene Enxoval',
  'Naturais Vet',
  'New Clean',
  'Nhá Salgados',
  'O Frangão',
  'ôBela',
  'Online Personalizados',
  'Online Renascença',
  'Padaria Crescer',
  'Padaria Milagre',
  'Painel Pet',
  'Palácio dos Doces',
  'Paladar Doce',
  'Panaché Bijuterias',
  'Papelaria Gráfica',
  'Papelaria Rede',
  'Papelaria Serenidade',
  'Paraíso das Rações',
  'Paraíso dos Doces',
  'Parceiro Padaria',
  'Perucoso Cabelo',
  'Pet Criações',
  'Pinpont Roupas',
  'Pintando E Bordando Ateliê',
  'Planeta Doce',
  'Point Assados',
  'Point da Ração',
  'Point do Frango',
  'Ponto do Frango',
  'Ponto dos Assados',
  'Pop Pet',
  'Portal da Limpeza',
  'Pura Ração',
  'Quintal do Assado',
  'Ração & Cia',
  'Recanto dos Salgados',
  'Receita de Vó Salgados',
  'Register Confeitaria',
  'Rei da Ração',
  'Rei do Frango',
  'Rei dos Assados',
  'Rei dos Salgados',
  'Roda Livros',
  'Romanos Brinquedos',
  'Romeu Brinquedos',
  'Roupas Especialistas',
  'Roupas Minds',
  'Roupas Negócio',
  'Roupas Pódio',
  'Roupas Soft',
  'Sabor Assados',
  'Sabor Crocante',
  'Sabor do Fogo Assados',
  'Sabor Ração',
  'Sabor Real Frango Assado',
  'Sabor Salgados',
  'Sabor Uai Salgados',
  'Safeway Roupas',
  'Salgados & Cia',
  'Salmão Bijuterias',
  'Santa Limpeza',
  'Seu Salgado',
  'Shine Limpeza (Brilho Limpeza)',
  'Shoestring Roupas',
  'Simplesmente Maquiagem',
  'Social Brinquedos',
  'Sub Maquiagens',
  'Sundeal Carros',
  'Super Assados',
  'Super Candy (Super Doces)',
  'Superior Bijuterias',
  'Tempo Real Online',
  'Tendtudo',
  'Terraço dos Salgados',
  'Tik Tak Brinquedos',
  'Toca Doce',
  'Top Frango',
  'Transcende Papelaria',
  'Travessuras Doces',
  'Tropicana Salgados',
  'Uau Maquiagens',
  'Universo dos Salgados',
  'Urbano Brinquedos',
  'Valente Papelaria',
  'Vapt Vupt Lanches',
  'Viking Online',
  'Vila Candy (Vila Doce)',
  'Vila da Ração',
  'Vila do Frango',
  'Vila dos Assados',
  'Vila dos Salgados',
  'Villa’s Chicken',
  'Villaçaí',
  'Zebra Roupas',
  'Zetta',
]
