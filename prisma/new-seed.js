import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.movie.createMany({
    data: [
      // Filmes
      { 
        title: 'O Poderoso Chefão', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('1972-03-24'),
        synopsis: 'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
      },
      { 
        title: 'Forrest Gump', 
        genre: 'Drama/Romance', 
        releaseDate: new Date('1994-07-06'),
        synopsis: 'Mesmo com o QI abaixo da média, Forrest Gump nunca se sentiu desfavorecido. Graças ao apoio da mãe, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietnã ou como capitão de um barco de camarão, ele inspirou a todos.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
      },
      { 
        title: 'Titanic', 
        genre: 'Drama/Romance', 
        releaseDate: new Date('1997-12-19'),
        synopsis: 'Jack é um artista pobre que ganha uma passagem para a viagem inaugural do Titanic, um luxuoso transatlântico que afundou em 1912. A bordo do navio, ele conhece Rose, uma jovem rica que está infeliz com seu noivado. Eles se apaixonam, mas um desastre inesperado põe suas vidas em perigo.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
      },
      { 
        title: 'Matrix', 
        genre: 'Ficção científica/Ação', 
        releaseDate: new Date('1999-03-31'),
        synopsis: 'Um programador de computador é levado a uma guerra contra máquinas superinteligentes após descobrir que sua realidade é apenas uma ilusão digital criada por uma inteligência artificial.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
      },
      { 
        title: 'O Senhor dos Anéis: A Sociedade do Anel', 
        genre: 'Fantasia/Aventura', 
        releaseDate: new Date('2001-12-19'),
        synopsis: 'Um jovem hobbit, Frodo Bolseiro, embarca em uma jornada para destruir um anel mágico e impedir que ele caia nas mãos do mal.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
      },
      { 
        title: 'Star Wars: Episódio IV – Uma Nova Esperança', 
        genre: 'Ficção científica/Aventura', 
        releaseDate: new Date('1977-05-25'),
        synopsis: 'Luke Skywalker junta-se a um cavaleiro Jedi, um piloto arrogante, um Wookiee e dois dróides para salvar a galáxia da estação espacial do Império, enquanto tenta resgatar a princesa Leia das garras de Darth Vader.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
      },
      { 
        title: 'Clube da Luta', 
        genre: 'Drama/Suspense', 
        releaseDate: new Date('1999-10-15'),
        synopsis: 'Um homem desiludido com sua vida corporativa forma um clube de luta como forma de liberar suas tensões, mas as coisas saem do controle quando o clube evolui para algo muito mais sombrio.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
      },
      { 
        title: 'O Cavaleiro das Trevas', 
        genre: 'Ação/Crime', 
        releaseDate: new Date('2008-07-18'),
        synopsis: 'Quando a ameaça conhecida como o Coringa emerge do submundo de Gotham, causando destruição e caos, o Batman precisa aceitar um dos maiores testes psicológicos e físicos para lutar contra a injustiça.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'
      },
      { 
        title: 'Pulp Fiction: Tempo de Violência', 
        genre: 'Crime/Drama', 
        releaseDate: new Date('1994-10-14'),
        synopsis: 'As vidas de dois assassinos da máfia, um boxeador, um gângster e sua esposa, e um par de bandidos se entrelaçam em quatro histórias de violência e redenção.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
      },
      { 
        title: 'Avatar', 
        genre: 'Ficção científica/Aventura', 
        releaseDate: new Date('2009-12-18'),
        synopsis: 'Um militar paraplégico enviado a uma lua chamada Pandora em missão entra em conflito de lealdades quando se apaixona por uma nativa Na\'vi e é acolhido por sua tribo.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg'
      },
      { 
        title: 'Parasita', 
        genre: 'Drama/Suspense', 
        releaseDate: new Date('2019-05-21'),
        synopsis: 'A família Kim, desempregada e morando em um porão, desenvolve interesse pela rica família Park, criando um relacionamento parasitário que tem consequências inesperadas.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg'
      },
      { 
        title: 'La La Land', 
        genre: 'Musical/Drama', 
        releaseDate: new Date('2016-12-09'),
        synopsis: 'Enquanto navegam por suas carreiras, ambições e os desafios de viver em Los Angeles, um pianista de jazz e uma aspirante a atriz se apaixonam e tentam conciliar seus sonhos e seu relacionamento.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg'
      },
      { 
        title: 'Coringa (Joker)', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('2019-10-04'),
        synopsis: 'Em Gotham City, o comediante fracassado Arthur Fleck se envolve em uma espiral de crime e caos quando adota o alter ego conhecido como Coringa.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
      },
      { 
        title: 'Interstellar', 
        genre: 'Ficção científica/Drama', 
        releaseDate: new Date('2014-11-07'),
        synopsis: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade em um novo planeta habitável.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
      },
      { 
        title: 'A Origem (Inception)', 
        genre: 'Ficção científica/Ação', 
        releaseDate: new Date('2010-07-16'),
        synopsis: 'Um ladrão que rouba segredos corporativos através do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
      },
      { 
        title: 'Pantera Negra', 
        genre: 'Ação/Ficção científica', 
        releaseDate: new Date('2018-02-16'),
        synopsis: 'T\'Challa, príncipe de Wakanda, sobe ao trono da avançada nação africana após a morte de seu pai, mas é desafiado por um adversário que questiona seu direito ao trono e se opõe à sua política isolacionista.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg'
      },
      { 
        title: 'O Grande Gatsby', 
        genre: 'Drama/Romance', 
        releaseDate: new Date('2013-05-10'),
        synopsis: 'Um escritor e corretor de ações, Nick Carraway, é atraído para o mundo extravagante do seu vizinho milionário, Jay Gatsby, enquanto testemunha seu amor obsessivo por uma antiga paixão, Daisy Buchanan.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_.jpg'
      },
      { 
        title: 'Gladiador', 
        genre: 'Ação/Drama', 
        releaseDate: new Date('2000-05-05'),
        synopsis: 'Um general romano traído se torna gladiador e busca vingança contra o corrupto imperador que assassinou sua família e o enviou à escravidão.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
      },
      { 
        title: 'Vingadores: Ultimato', 
        genre: 'Ação/Ficção científica', 
        releaseDate: new Date('2019-04-26'),
        synopsis: 'Após os eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas. Com a ajuda dos aliados restantes, os Vingadores se reúnem mais uma vez para tentar desfazer as ações de Thanos e restaurar o equilíbrio do universo.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'
      },
      { 
        title: 'Barbie', 
        genre: 'Comédia/Fantasia', 
        releaseDate: new Date('2023-07-21'),
        synopsis: 'Barbie e Ken estão se divertindo no mundo colorido e aparentemente perfeito de Barbie Land. Entretanto, quando têm a oportunidade de ir ao mundo real, eles descobrem as alegrias e os perigos de viver entre os humanos.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg'
      },
      { 
        title: 'Oppenheimer', 
        genre: 'Drama/Histórico', 
        releaseDate: new Date('2023-07-21'),
        synopsis: 'A história do físico americano J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg'
      },
      { 
        title: 'Homem-Aranha: Sem Volta Para Casa', 
        genre: 'Ação/Fantasia', 
        releaseDate: new Date('2021-12-17'),
        synopsis: 'Com a identidade do Homem-Aranha revelada, Peter Parker pede ajuda ao Doutor Estranho. Quando um feitiço dá errado, inimigos perigosos de outros universos começam a aparecer, forçando Peter a descobrir o que realmente significa ser o Homem-Aranha.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg'
      },
      { 
        title: 'Duna', 
        genre: 'Ficção científica/Aventura', 
        releaseDate: new Date('2021-10-22'),
        synopsis: 'O filho de uma família nobre é confiado com a proteção do ativo mais valioso e vital da galáxia, enquanto forças malignas explodem em conflito pelo controle exclusivo do planeta desértico Arrakis.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
      },
      { 
        title: 'Tudo em Todo Lugar ao Mesmo Tempo', 
        genre: 'Ficção científica/Comédia', 
        releaseDate: new Date('2022-03-25'),
        synopsis: 'Uma imigrante chinesa se vê envolvida em uma aventura selvagem, onde ela sozinha pode salvar o mundo explorando outros universos e conectando-se com as vidas que poderia ter levado.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg'
      },
      { 
        title: 'O Resgate do Soldado Ryan', 
        genre: 'Guerra/Drama', 
        releaseDate: new Date('1998-07-24'),
        synopsis: 'Após o Dia D, um grupo de soldados americanos vai atrás das linhas inimigas para recuperar um paraquedista cujos irmãos foram mortos em ação.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg'
      },
      { 
        title: 'Uma Linda Mulher', 
        genre: 'Romance/Comédia', 
        releaseDate: new Date('1990-03-23'),
        synopsis: 'Um empresário rico contrata uma garota de programa como acompanhante por uma semana e os dois acabam se apaixonando.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMwNTA5ODAxM15BMl5BanBnXkFtZTYwNTQwODU5._V1_.jpg'
      },
      // Séries
      { 
        title: 'Breaking Bad', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('2008-01-20'),
        synopsis: 'Um professor de química do ensino médio diagnosticado com câncer de pulmão inoperável se volta para a fabricação e venda de metanfetamina para garantir o futuro financeiro de sua família.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg'
      },
      { 
        title: 'Game of Thrones', 
        genre: 'Fantasia/Drama', 
        releaseDate: new Date('2011-04-17'),
        synopsis: 'Nove famílias nobres lutam pelo controle das terras míticas de Westeros, enquanto um inimigo antigo retorna depois de estar adormecido por milhares de anos.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg'
      },
      { 
        title: 'Stranger Things', 
        genre: 'Ficção científica/Terror', 
        releaseDate: new Date('2016-07-15'),
        synopsis: 'Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos, forças sobrenaturais aterrorizantes e uma menina muito estranha.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
      },
      { 
        title: 'The Office (EUA)', 
        genre: 'Comédia', 
        releaseDate: new Date('2005-03-24'),
        synopsis: 'Um olhar cômico sobre o dia a dia de funcionários de escritório em Scranton, Pensilvânia, filial da empresa fictícia Dunder Mifflin Paper Company.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg'
      },
      { 
        title: 'Friends', 
        genre: 'Comédia', 
        releaseDate: new Date('1994-09-22'),
        synopsis: 'Segue as vidas pessoais e profissionais de seis amigos de vinte e poucos anos que vivem em Manhattan.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
      },
      { 
        title: 'The Crown', 
        genre: 'Drama/Histórico', 
        releaseDate: new Date('2016-11-04'),
        synopsis: 'Segue a vida política e pessoal da Rainha Elizabeth II desde sua coroação até os dias atuais.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGI1ODkzZDQtZTYxYS00MTg1LWFlN2ItZTI1YTI2YjI0OWNlXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_.jpg'
      },
      { 
        title: 'The Mandalorian', 
        genre: 'Ficção científica/Aventura', 
        releaseDate: new Date('2019-11-12'),
        synopsis: 'As aventuras de um caçador de recompensas mandaloriano nos confins da galáxia, longe da autoridade da Nova República.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg'
      },
      { 
        title: 'Black Mirror', 
        genre: 'Ficção científica/Drama', 
        releaseDate: new Date('2011-12-04'),
        synopsis: 'Uma série antológica que explora um futuro próximo distópico, onde as grandes inovações tecnológicas da humanidade colidem com os seus instintos mais obscuros.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
      },
      { 
        title: 'Succession', 
        genre: 'Drama', 
        releaseDate: new Date('2018-06-03'),
        synopsis: 'Os membros de uma família rica e disfuncional lutam pelo controle de seu império de mídia global após a saúde do patriarca começar a declinar.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BODY5YjA3OGItMTFjZS00M2RhLWJlYjgtZDM2N2IzNzc0ZmQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
      },
      { 
        title: 'Dark', 
        genre: 'Ficção científica/Suspense', 
        releaseDate: new Date('2017-12-01'),
        synopsis: 'O desaparecimento de crianças na cidade alemã de Winden traz à tona o passado fraturado de quatro famílias, revelando mistérios geracionais que remontam a 1986.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg'
      },
      { 
        title: 'The Last of Us', 
        genre: 'Drama/Ficção científica', 
        releaseDate: new Date('2023-01-15'),
        synopsis: 'Após uma pandemia global destruir a civilização, um sobrevivente endurecido é contratado para transportar uma menina de 14 anos que pode ser a cura para a doença em uma perigosa jornada pelos EUA.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg'
      },
      { 
        title: 'Euphoria', 
        genre: 'Drama', 
        releaseDate: new Date('2019-06-16'),
        synopsis: 'Um grupo de estudantes do ensino médio navega pelo amor e amizades em um mundo de drogas, sexo, trauma e mídias sociais.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'
      },
      { 
        title: 'The Witcher', 
        genre: 'Fantasia/Ação', 
        releaseDate: new Date('2019-12-20'),
        synopsis: 'Geralt de Rivia, um caçador de monstros mutante, viaja em direção ao seu destino em um mundo turbulento onde as pessoas frequentemente se provam mais perversas que as bestas.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
      },
      { 
        title: 'Better Call Saul', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('2015-02-08'),
        synopsis: 'A história de como o advogado de moral duvidosa, Jimmy McGill, se transformou em Saul Goodman, o defensor criminal que vimos em Breaking Bad.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg'
      },
      { 
        title: 'Vikings', 
        genre: 'Drama/Histórico', 
        releaseDate: new Date('2013-03-03'),
        synopsis: 'Vikings segue a vida e aventuras de Ragnar Lothbrok, um fazendeiro que se torna o maior guerreiro de sua era, eventualmente se tornando Rei de partes da Dinamarca e Suécia.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'
      },
      { 
        title: 'The Boys', 
        genre: 'Ação/Sátira', 
        releaseDate: new Date('2019-07-26'),
        synopsis: 'Um grupo de vigilantes embarca em uma missão heroica para derrubar os super-heróis corruptos que abusam de seus superpoderes.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg'
      },
      { 
        title: 'Wandavision', 
        genre: 'Ação/Fantasia', 
        releaseDate: new Date('2021-01-15'),
        synopsis: 'Wanda Maximoff e Vision vivem vidas suburbanas idealizadas, mas começam a suspeitar que nem tudo é como parece.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_.jpg'
      },
      { 
        title: 'The Bear', 
        genre: 'Drama', 
        releaseDate: new Date('2022-06-23'),
        synopsis: 'Um jovem chef de um restaurante fino volta a Chicago para administrar a lanchonete da família após a morte trágica de seu irmão.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzI0MzQyODUtNjdjYy00ZTliLWI0MTUtYTA0YjJmYTdiYWMxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'
      },
      { 
        title: 'House of the Dragon', 
        genre: 'Fantasia/Drama', 
        releaseDate: new Date('2022-08-21'),
        synopsis: 'Centrada na casa Targaryen, 300 anos antes dos eventos de Game of Thrones, esta série conta a história da guerra civil que dividiu a família.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'
      },
      { 
        title: 'Peaky Blinders', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('2013-09-12'),
        synopsis: 'Uma gangue de família na Inglaterra em 1919, liderada pelo feroz Tommy Shelby, um criminoso disposto a subir na vida a qualquer preço.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg'
      },
      { 
        title: 'Bridgerton', 
        genre: 'Romance/Drama', 
        releaseDate: new Date('2020-12-25'),
        synopsis: 'A série acompanha os oito irmãos da família Bridgerton enquanto tentam encontrar o amor e a felicidade na alta sociedade londrina durante o período da Regência.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjk5YTU0OTAtMTM1NC00Zjc1LWEzZjAtOWJkYzcxOGRhNWNhXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg'
      }
    ]
  });
  console.log('Filmes e séries cadastrados!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });