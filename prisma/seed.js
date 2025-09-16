
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.movie.createMany({
    data: [
      // Filmes
      { 
        title: 'O Poderoso Chefão', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('1972-01-01'),
        synopsis: 'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.'
      },
      { 
        title: 'Forrest Gump', 
        genre: 'Drama/Romance', 
        releaseDate: new Date('1994-01-01'),
        synopsis: 'Mesmo com o QI abaixo da média, Forrest Gump nunca se sentiu desfavorecido. Graças ao apoio da mãe, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietnã ou como capitão de um barco de camarão, ele inspirou a todos.'
      },
      { 
        title: 'Titanic', 
        genre: 'Drama/Romance', 
        releaseDate: new Date('1997-01-01'),
        synopsis: 'Jack é um artista pobre que ganha uma passagem para a viagem inaugural do Titanic, um luxuoso transatlântico que afundou em 1912. A bordo do navio, ele conhece Rose, uma jovem rica que está infeliz com seu noivado. Eles se apaixonam, mas um desastre inesperado põe suas vidas em perigo.'
      },
      { 
        title: 'Matrix', 
        genre: 'Ficção científica/Ação', 
        releaseDate: new Date('1999-01-01'),
        synopsis: 'Um programador de computador é levado a uma guerra contra máquinas superinteligentes após descobrir que sua realidade é apenas uma ilusão digital criada por uma inteligência artificial.'
      },
      { 
        title: 'O Senhor dos Anéis: A Sociedade do Anel', 
        genre: 'Fantasia/Aventura', 
        releaseDate: new Date('2001-01-01'),
        synopsis: 'Um jovem hobbit, Frodo Bolseiro, embarca em uma jornada para destruir um anel mágico e impedir que ele caia nas mãos do mal.'
      },
      { 
        title: 'Star Wars: Episódio IV – Uma Nova Esperança', 
        genre: 'Ficção científica/Aventura', 
        releaseDate: new Date('1977-01-01'),
        synopsis: 'A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e Han Solo precisam libertá-la e restaurar a liberdade na galáxia.'
      },
      { 
        title: 'Clube da Luta', 
        genre: 'Drama/Suspense', 
        releaseDate: new Date('1999-01-01'),
        synopsis: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu apartamento é destruído. A dupla forma um clube clandestino com regras rígidas.'
      },
      { 
        title: 'O Cavaleiro das Trevas', 
        genre: 'Ação/Crime', 
        releaseDate: new Date('2008-01-01'),
        synopsis: 'Batman, com a ajuda do Tenente Jim Gordon e do promotor público Harvey Dent, combate o novo gênio do crime, um criminoso cruel que se auto-intitula Coringa.'
      },
      { 
        title: 'Pulp Fiction: Tempo de Violência', 
        genre: 'Crime/Drama', 
        releaseDate: new Date('1994-01-01'),
        synopsis: 'Vários personagens se entrelaçam em histórias de crime em Los Angeles, incluindo dois assassinos filosóficos, um gângster e sua esposa misteriosa, um boxeador e um casal de assaltantes.'
      },
      { 
        title: 'Avatar', 
        genre: 'Ficção científica/Aventura', 
        releaseDate: new Date('2009-01-01'),
        synopsis: 'No exuberante mundo alienígena de Pandora vivem os Na\'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Um ex-fuzileiro naval fica dividido entre seguir ordens e proteger o mundo que sente ser seu lar.'
      },
      { 
        title: 'Parasita', 
        genre: 'Drama/Suspense', 
        releaseDate: new Date('2019-01-01'),
        synopsis: 'Uma família pobre engana uma família rica para conseguir empregos em sua mansão. As coisas se complicam quando seu golpe é ameaçado por uma descoberta inesperada.'
      },
      { 
        title: 'La La Land', 
        genre: 'Musical/Drama', 
        releaseDate: new Date('2016-01-01'),
        synopsis: 'Em Los Angeles, um pianista de jazz e uma aspirante a atriz se apaixonam enquanto perseguem seus sonhos.'
      },
      { 
        title: 'Coringa (Joker)', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('2019-01-01'),
        synopsis: 'Arthur Fleck, um comediante com problemas mentais, vive desrespeitado pela sociedade. Aos poucos, ele se transforma no gênio do crime conhecido como Coringa.'
      },
      { 
        title: 'Interstellar', 
        genre: 'Ficção científica/Drama', 
        releaseDate: new Date('2014-01-01'),
        synopsis: 'Em um futuro onde a Terra está se tornando inabitável, uma equipe de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.'
      },
      { 
        title: 'A Origem (Inception)', 
        genre: 'Ficção científica/Ação', 
        releaseDate: new Date('2010-01-01'),
        synopsis: 'Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente durante o estado de sono. Ele é oferecido uma chance de redenção como pagamento para realizar o impossível: plantar uma ideia na mente de alguém.'
      },
      { 
        title: 'Pantera Negra', 
        genre: 'Ação/Ficção científica', 
        releaseDate: new Date('2018-01-01'),
        synopsis: 'T\'Challa, herdeiro do reino de Wakanda, deve dar um passo à frente para liderar seu povo para um novo futuro e deve confrontar um desafiante do passado de seu país.'
      },
      { 
        title: 'O Grande Gatsby', 
        genre: 'Drama/Romance', 
        releaseDate: new Date('2013-01-01'),
        synopsis: 'Um escritor e aspirante a vendedor de títulos se muda para Nova York e aluga uma casa vizinha à mansão de um misterioso milionário que realiza festas extravagantes.'
      },
      { 
        title: 'Gladiador', 
        genre: 'Ação/Drama', 
        releaseDate: new Date('2000-01-01'),
        synopsis: 'Quando um general romano é traído e sua família é assassinada pelo filho corrupto do imperador, ele vai a Roma como um gladiador para se vingar.'
      },
      { 
        title: 'Vingadores: Ultimato', 
        genre: 'Ação/Ficção científica', 
        releaseDate: new Date('2019-01-01'),
        synopsis: 'Após Thanos eliminar metade da vida no universo, os heróis sobreviventes devem se reunir uma última vez para desfazer as ações do titã louco e restaurar a ordem no universo.'
      },
      { 
        title: 'Barbie', 
        genre: 'Comédia/Fantasia', 
        releaseDate: new Date('2023-01-01'),
        synopsis: 'Barbie e Ken estão se divertindo no mundo colorido e aparentemente perfeito de Barbie Land. Contudo, quando eles têm a oportunidade de ir ao mundo real, logo descobrem as alegrias e perigos de viver entre os humanos.'
      },
      { 
        title: 'Oppenheimer', 
        genre: 'Drama/Histórico', 
        releaseDate: new Date('2023-01-01'),
        synopsis: 'A história do cientista americano J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.'
      },
      { 
        title: 'Homem-Aranha: Sem Volta Para Casa', 
        genre: 'Ação/Fantasia', 
        releaseDate: new Date('2021-01-01'),
        synopsis: 'Com a identidade do Homem-Aranha revelada, Peter Parker pede ajuda ao Doutor Estranho. Quando um feitiço dá errado, inimigos perigosos de outros universos começam a aparecer.'
      },
      { 
        title: 'Duna', 
        genre: 'Ficção científica/Aventura', 
        releaseDate: new Date('2021-01-01'),
        synopsis: 'Paul Atreides, um jovem brilhante nascido em um grande destino, deve viajar para o planeta mais perigoso do universo para garantir o futuro de sua família e seu povo.'
      },
      { 
        title: 'Tudo em Todo Lugar ao Mesmo Tempo', 
        genre: 'Ficção científica/Comédia', 
        releaseDate: new Date('2022-01-01'),
        synopsis: 'Uma imigrante chinesa envolve-se numa aventura louca onde só ela pode salvar o mundo explorando outros universos e outras vidas que poderia ter vivido.'
      },
      { 
        title: 'O Resgate do Soldado Ryan', 
        genre: 'Guerra/Drama', 
        releaseDate: new Date('1998-01-01'),
        synopsis: 'Durante a invasão da Normandia, na Segunda Guerra Mundial, um grupo de soldados americanos é enviado para salvar o paraquedista James Ryan, o último sobrevivente de quatro irmãos.'
      },
      { 
        title: 'Uma Linda Mulher', 
        genre: 'Romance/Comédia', 
        releaseDate: new Date('1990-01-01'),
        synopsis: 'Um empresário rico contrata uma garota de programa para ser sua acompanhante durante uma semana e acaba se apaixonando por ela.'
      },
      { 
        title: 'Velozes e Furiosos', 
        genre: 'Ação/Crime', 
        releaseDate: new Date('2001-01-01'),
        synopsis: 'Um policial disfarçado se infiltra no mundo das corridas de rua para investigar uma série de roubos, mas acaba se envolvendo demais com a comunidade.'
      },
      { 
        title: 'Velozes e Furiosos 5: Operação Rio', 
        genre: 'Ação/Crime', 
        releaseDate: new Date('2011-01-01'),
        synopsis: 'Dominic Toretto e sua equipe de corredores planejam um audacioso assalto para comprar sua liberdade enquanto são perseguidos por um agente federal.'
      },
      { 
        title: 'Velozes e Furiosos 7', 
        genre: 'Ação/Crime', 
        releaseDate: new Date('2015-01-01'),
        synopsis: 'Após a morte de Han, Dominic Toretto e sua equipe são alvo de um assassino vingativo, o irmão de um antigo inimigo.'
      },
      { 
        title: 'Velozes e Furiosos 10 (Fast X)', 
        genre: 'Ação/Crime', 
        releaseDate: new Date('2023-01-01'),
        synopsis: 'Dom Toretto e sua família enfrentam o adversário mais letal que já encontraram: um inimigo com sede de vingança pelo passado.'
      },
      { 
        title: 'Harry Potter e a Pedra Filosofal', 
        genre: 'Fantasia/Aventura', 
        releaseDate: new Date('2001-01-01'),
        synopsis: 'Um menino órfão descobre que é um bruxo e é convidado a frequentar a Escola de Magia e Bruxaria de Hogwarts, onde enfrenta desafios mágicos e descobre seu destino.'
      },
      { 
        title: 'Harry Potter e as Relíquias da Morte: Parte 2', 
        genre: 'Fantasia/Aventura', 
        releaseDate: new Date('2011-01-01'),
        synopsis: 'Harry, Ron e Hermione continuam sua busca para destruir as Horcruxes de Lord Voldemort. A batalha final entre as forças do bem e do mal acontece em Hogwarts.'
      },
      { 
        title: 'Animais Fantásticos e Onde Habitam', 
        genre: 'Fantasia/Aventura', 
        releaseDate: new Date('2016-01-01'),
        synopsis: 'O excêntrico magizoologista Newt Scamander chega a Nova York com uma maleta cheia de criaturas mágicas que escapam, causando problemas para a comunidade mágica e não-mágica.'
      },
      { 
        title: 'O Hobbit: Uma Jornada Inesperada', 
        genre: 'Fantasia/Aventura', 
        releaseDate: new Date('2012-01-01'),
        synopsis: 'Bilbo Bolseiro é recrutado para uma perigosa jornada por Gandalf, o Cinzento, para ajudar treze anões a recuperar o reino da Montanha Solitária do dragão Smaug.'
      },
      { 
        title: 'Mulher-Maravilha', 
        genre: 'Ação/Fantasia', 
        releaseDate: new Date('2017-01-01'),
        synopsis: 'Quando um piloto cai na ilha paradisíaca onde Diana, princesa das Amazonas, vive, ela descobre a existência de um conflito mundial e decide sair da ilha para combater a ameaça.'
      },
      { 
        title: 'Batman: O Cavaleiro das Trevas Ressurge', 
        genre: 'Ação/Drama', 
        releaseDate: new Date('2012-01-01'),
        synopsis: 'Oito anos após os eventos de O Cavaleiro das Trevas, Batman enfrenta as consequências físicas e emocionais de sua luta contra o crime, enquanto um novo vilão, Bane, ameaça Gotham City.'
      },
      { 
        title: 'Homem de Ferro', 
        genre: 'Ação/Ficção científica', 
        releaseDate: new Date('2008-01-01'),
        synopsis: 'Tony Stark, um industrial bilionário e inventor brilhante, é sequestrado e forçado a construir uma arma devastadora. Em vez disso, ele constrói uma armadura para combater seus captores e retornar aos Estados Unidos.'
      },
      { 
        title: 'Capitão América: Guerra Civil', 
        genre: 'Ação/Ficção científica', 
        releaseDate: new Date('2016-01-01'),
        synopsis: 'Divergências políticas sobre como os Vingadores devem ser regulamentados colocam o Capitão América e o Homem de Ferro em lados opostos, causando uma ruptura na equipe.'
      },
      { 
        title: 'Doutor Estranho no Multiverso da Loucura', 
        genre: 'Ação/Fantasia', 
        releaseDate: new Date('2022-01-01'),
        synopsis: 'O Dr. Strange lança um feitiço proibido que abre um portal para o multiverso e enfrenta uma ameaça que pode ser grande demais para sua equipe lidar.'
      },
      { 
        title: 'Guardiões da Galáxia', 
        genre: 'Ação/Ficção científica', 
        releaseDate: new Date('2014-01-01'),
        synopsis: 'Um grupo de criminosos intergalácticos se une para impedir que um fanático guerreiro destrua o universo usando um poderoso artefato.'
      },
      { 
        title: 'Deadpool', 
        genre: 'Ação/Comédia', 
        releaseDate: new Date('2016-01-01'),
        synopsis: 'Um ex-militar e mercenário é submetido a um experimento que o deixa com poderes de cura acelerada, mas também completamente desfigurado. Ele adota o alter ego Deadpool para caçar o homem que quase destruiu sua vida.'
      },
      { 
        title: 'Logan', 
        genre: 'Ação/Drama', 
        releaseDate: new Date('2017-01-01'),
        synopsis: 'Em um futuro onde mutantes estão quase extintos, um envelhecido Logan cuida de um Professor Xavier doente, quando uma jovem mutante chega, perseguida por forças obscuras.'
      },
      { 
        title: 'Homem-Aranha: De Volta ao Lar', 
        genre: 'Ação/Fantasia', 
        releaseDate: new Date('2017-01-01'),
        synopsis: 'Depois de sua experiência com os Vingadores, Peter Parker volta à sua vida no Queens como Homem-Aranha e tenta voltar à sua rotina normal, mas é desafiado pelo aparecimento de um novo vilão, o Abutre.'
      },
      { 
        title: 'Shrek', 
        genre: 'Animação/Comédia', 
        releaseDate: new Date('2001-01-01'),
        synopsis: 'Um ogro mal-humorado embarca em uma jornada com um burro tagarela para resgatar uma princesa e recuperar seu pântano de contos de fadas indesejados.'
      },
      { 
        title: 'Toy Story', 
        genre: 'Animação/Aventura', 
        releaseDate: new Date('1995-01-01'),
        synopsis: 'Um cowboy de brinquedo é ameaçado e fica com ciúmes quando um novo brinquedo, um patrulheiro espacial, se torna o favorito do menino que os possui.'
      },
      { 
        title: 'Procurando Nemo', 
        genre: 'Animação/Aventura', 
        releaseDate: new Date('2003-01-01'),
        synopsis: 'Depois que seu filho é capturado no Grande Recife de Coral e levado para Sydney, um peixe-palhaço tímido embarca em uma perigosa jornada para trazê-lo para casa.'
      },
      { 
        title: 'Os Incríveis', 
        genre: 'Animação/Ação', 
        releaseDate: new Date('2004-01-01'),
        synopsis: 'Uma família de super-heróis aposentados é forçada a voltar à ação para salvar o mundo.'
      },
      { 
        title: 'Meu Malvado Favorito', 
        genre: 'Animação/Comédia', 
        releaseDate: new Date('2010-01-01'),
        synopsis: 'Um supervilão adota três órfãs como parte de seu plano para roubar a lua, mas acaba sendo transformado por seu amor genuíno.'
      },
      { 
        title: 'Frozen', 
        genre: 'Animação/Musical', 
        releaseDate: new Date('2013-01-01'),
        synopsis: 'Quando um reino fica preso em um inverno eterno, a princesa Anna se junta a um montanhista, sua rena e um boneco de neve para encontrar sua irmã, a Rainha da Neve, e quebrar seu feitiço gelado.'
      },
      { 
        title: 'Divertida Mente', 
        genre: 'Animação/Família', 
        releaseDate: new Date('2015-01-01'),
        synopsis: 'Após uma mudança repentina para uma nova cidade, as emoções de uma menina de 11 anos trabalham para ajudá-la a lidar com sua nova vida.'
      },
      { 
        title: 'O Rei Leão (original)', 
        genre: 'Animação/Drama', 
        releaseDate: new Date('1994-01-01'),
        synopsis: 'Após a morte do rei da Savana, Simba, um jovem leão, deve superar seu passado trágico e assumir seu lugar como o legítimo rei.'
      },
      // Séries
      { 
        title: 'Breaking Bad', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('2008-01-01'),
        synopsis: 'Um professor de química do ensino médio diagnosticado com câncer terminal se junta a um ex-aluno para produzir e vender metanfetamina para garantir o futuro financeiro de sua família.'
      },
      { 
        title: 'Game of Thrones', 
        genre: 'Fantasia/Drama', 
        releaseDate: new Date('2011-01-01'),
        synopsis: 'Várias famílias nobres lutam pelo controle dos Sete Reinos de Westeros, enquanto uma antiga ameaça retorna após milhares de anos.'
      },
      { 
        title: 'Stranger Things', 
        genre: 'Ficção científica/Terror', 
        releaseDate: new Date('2016-01-01'),
        synopsis: 'Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos, forças sobrenaturais aterrorizantes e uma menina muito estranha.'
      },
      { 
        title: 'The Office (EUA)', 
        genre: 'Comédia', 
        releaseDate: new Date('2005-01-01'),
        synopsis: 'Uma comédia de mocumentário que segue o dia a dia dos funcionários de um escritório de uma empresa de papel em Scranton, Pensilvânia.'
      },
      { 
        title: 'Friends', 
        genre: 'Comédia', 
        releaseDate: new Date('1994-01-01'),
        synopsis: 'Acompanha a vida pessoal e profissional de seis amigos de vinte e tantos anos que vivem em Manhattan, Nova York.'
      },
      { 
        title: 'The Crown', 
        genre: 'Drama/Histórico', 
        releaseDate: new Date('2016-01-01'),
        synopsis: 'Segue a vida da Rainha Elizabeth II desde seu casamento até os dias atuais, explorando eventos históricos e políticos que moldaram o mundo.'
      },
      { 
        title: 'The Mandalorian', 
        genre: 'Ficção científica/Aventura', 
        releaseDate: new Date('2019-01-01'),
        synopsis: 'As aventuras de um caçador de recompensas mandaloriano nos confins da galáxia, longe da autoridade da Nova República.'
      },
      { 
        title: 'Black Mirror', 
        genre: 'Ficção científica/Drama', 
        releaseDate: new Date('2011-01-01'),
        synopsis: 'Uma série de antologia que explora um futuro próximo onde as inovações tecnológicas humanas colidem com nossos instintos mais obscuros.'
      },
      { 
        title: 'Succession', 
        genre: 'Drama', 
        releaseDate: new Date('2018-01-01'),
        synopsis: 'A história da família Roy, proprietária de um dos maiores conglomerados de mídia e entretenimento do mundo, enquanto lutam pelo controle do império familiar.'
      },
      { 
        title: 'Dark', 
        genre: 'Ficção científica/Suspense', 
        releaseDate: new Date('2017-01-01'),
        synopsis: 'Crianças começam a desaparecer na pequena cidade alemã de Winden, expondo os relacionamentos fraturados, vidas duplas e passado sombrio de quatro famílias, tudo conectado através do tempo.'
      },
      { 
        title: 'The Last of Us', 
        genre: 'Drama/Ficção científica', 
        releaseDate: new Date('2023-01-01'),
        synopsis: 'Joel, um sobrevivente endurecido, é contratado para contrabandear Ellie, uma garota de 14 anos, para fora de uma zona de quarentena opressiva após um surto de pandemia mortal nos EUA.'
      },
      { 
        title: 'Euphoria', 
        genre: 'Drama', 
        releaseDate: new Date('2019-01-01'),
        synopsis: 'Um grupo de estudantes do ensino médio navega pelo amor e amizades em um mundo de drogas, sexo, trauma e mídias sociais.'
      },
      { 
        title: 'The Witcher', 
        genre: 'Fantasia/Ação', 
        releaseDate: new Date('2019-01-01'),
        synopsis: 'O caçador de monstros Geralt de Rívia, um bruxo mutante, luta para encontrar seu lugar em um mundo onde as pessoas frequentemente se provam mais perversas do que as bestas.'
      },
      { 
        title: 'Better Call Saul', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('2015-01-01'),
        synopsis: 'A história de como o advogado Jimmy McGill se transformou no moralente flexível Saul Goodman antes de conhecer Walter White em Breaking Bad.'
      },
      { 
        title: 'Vikings', 
        genre: 'Drama/Histórico', 
        releaseDate: new Date('2013-01-01'),
        synopsis: 'A saga de Ragnar Lothbrok, um agricultor viking que se torna um guerreiro temido e explora novas civilizações com sua ambição de conquistar territórios.'
      },
      { 
        title: 'The Boys', 
        genre: 'Ação/Sátira', 
        releaseDate: new Date('2019-01-01'),
        synopsis: 'Em um mundo onde super-heróis abraçam o lado negro de suas celebridades, um grupo de vigilantes embarca em uma busca heróica para expor a verdade sobre Os Sete e sua empresa que os apoia, a Vought.'
      },
      { 
        title: 'Wandavision', 
        genre: 'Ação/Fantasia', 
        releaseDate: new Date('2021-01-01'),
        synopsis: 'Wanda Maximoff e Visão - dois seres superpoderosos vivendo suas vidas suburbanas ideais - começam a suspeitar que nem tudo é o que parece.'
      },
      { 
        title: 'The Bear', 
        genre: 'Drama', 
        releaseDate: new Date('2022-01-01'),
        synopsis: 'Um jovem chef de um restaurante refinado volta a Chicago para administrar a lanchonete da família após a trágica morte de seu irmão.'
      },
      { 
        title: 'House of the Dragon', 
        genre: 'Fantasia/Drama', 
        releaseDate: new Date('2022-01-01'),
        synopsis: 'Conta a história da Casa Targaryen 200 anos antes dos eventos de Game of Thrones e o início da queda da dinastia Targaryen.'
      },
      { 
        title: 'Peaky Blinders', 
        genre: 'Drama/Crime', 
        releaseDate: new Date('2013-01-01'),
        synopsis: 'Uma gangue de família da classe trabalhadora em Birmingham, Inglaterra, logo após a Primeira Guerra Mundial, liderada pelo feroz Tommy Shelby, um chefe do crime determinado a subir no mundo a qualquer preço.'
      },
      { 
        title: 'Narcos', 
        genre: 'Crime/Drama', 
        releaseDate: new Date('2015-01-01'),
        synopsis: 'Uma crônica da guerra contra o cartel de drogas colombiano liderado por Pablo Escobar, bem como os vários outros cartéis de drogas que surgiram.'
      },
      { 
        title: 'Bridgerton', 
        genre: 'Romance/Drama', 
        releaseDate: new Date('2020-01-01'),
        synopsis: 'Oito irmãos inseparáveis da poderosa família Bridgerton buscam amor e felicidade na alta sociedade londrina do início do século XIX.'
      },
      { 
        title: 'How I Met Your Mother', 
        genre: 'Comédia/Romance', 
        releaseDate: new Date('2005-01-01'),
        synopsis: 'Um pai conta aos seus filhos, através de uma série de flashbacks, a jornada que ele e seus quatro melhores amigos viveram para ele conhecer a mãe dos seus filhos.'
      },
      { 
        title: 'Ozark', 
        genre: 'Drama/Suspense', 
        releaseDate: new Date('2017-01-01'),
        synopsis: 'Um consultor financeiro arrasta sua família de Chicago para os lagos de Ozark, no Missouri, onde ele deve lavar 500 milhões de dólares em cinco anos para apaziguar um chefe do tráfico de drogas.'
      },
      { 
        title: 'Sherlock', 
        genre: 'Policial/Drama', 
        releaseDate: new Date('2010-01-01'),
        synopsis: 'Uma versão moderna do clássico Arthur Conan Doyle, com Sherlock Holmes investigando crimes no século 21 em Londres, auxiliado pelo Dr. John Watson, que recentemente voltou do serviço militar no Afeganistão.'
      },
      { 
        title: 'The Big Bang Theory', 
        genre: 'Comédia', 
        releaseDate: new Date('2007-01-01'),
        synopsis: 'As vidas de dois físicos brilhantes mudam quando uma linda jovem aspirante a atriz se muda para o apartamento em frente ao deles.'
      },
      { 
        title: 'Grey\'s Anatomy', 
        genre: 'Drama/Médico', 
        releaseDate: new Date('2005-01-01'),
        synopsis: 'Segue a vida pessoal e profissional de um grupo de médicos no Hospital Grey Sloan Memorial em Seattle.'
      },
      { 
        title: 'The Walking Dead', 
        genre: 'Terror/Drama', 
        releaseDate: new Date('2010-01-01'),
        synopsis: 'O policial Rick Grimes acorda de um coma e descobre um mundo pós-apocalíptico dominado por zumbis. Em terra estrangeira, ele precisa liderar um grupo de sobreviventes para se manterem vivos.'
      },
      { 
        title: 'Lost', 
        genre: 'Ficção científica/Suspense', 
        releaseDate: new Date('2004-01-01'),
        synopsis: 'Os sobreviventes de um acidente aéreo estão perdidos em uma misteriosa ilha do Pacífico. Forçados a unir forças para sobreviver, eles descobrem que a ilha guarda muitos segredos.'
      },
      { 
        title: 'Prison Break', 
        genre: 'Ação/Suspense', 
        releaseDate: new Date('2005-01-01'),
        synopsis: 'Um homem é injustamente condenado por um crime que não cometeu e enviado para a prisão. Seu irmão elabora um plano elaborado para ajudá-lo a escapar da prisão e limpar seu nome.'
      },
      { 
        title: 'House M.D.', 
        genre: 'Drama/Médico', 
        releaseDate: new Date('2004-01-01'),
        synopsis: 'Um médico anti-social mas brilhante especializado em diagnósticos médicos lidera uma equipe de médicos para resolver casos médicos complexos e intrigantes.'
      },
      { 
        title: 'Supernatural', 
        genre: 'Fantasia/Terror', 
        releaseDate: new Date('2005-01-01'),
        synopsis: 'Dois irmãos seguem os passos de seu pai como caçadores, lutando contra monstros sobrenaturais, demônios, e até mesmo deuses que andam na Terra.'
      },
      { 
        title: 'Lucifer', 
        genre: 'Fantasia/Policial', 
        releaseDate: new Date('2016-01-01'),
        synopsis: 'Entediado com a vida no inferno, o diabo se muda para Los Angeles, onde abre um bar e se torna consultor do Departamento de Polícia de Los Angeles.'
      },
      { 
        title: 'Riverdale', 
        genre: 'Drama/Suspense', 
        releaseDate: new Date('2017-01-01'),
        synopsis: 'Uma interpretação sombria das histórias em quadrinhos da Archie Comics, onde a cidade aparentemente perfeita de Riverdale é palco de mistérios e segredos.'
      },
      { 
        title: 'Outer Banks', 
        genre: 'Aventura/Drama', 
        releaseDate: new Date('2020-01-01'),
        synopsis: 'Um grupo de adolescentes dos Outer Banks da Carolina do Norte, os "Pogues", embarca em uma missão para encontrar o pai desaparecido do líder do grupo e um tesouro lendário.'
      },
      { 
        title: 'Elite', 
        genre: 'Drama/Suspense', 
        releaseDate: new Date('2018-01-01'),
        synopsis: 'Quando três adolescentes da classe trabalhadora se matriculam em uma escola exclusiva na Espanha, o conflito entre eles e os alunos ricos leva a um assassinato.'
      },
      { 
        title: 'Sex Education', 
        genre: 'Comédia/Drama', 
        releaseDate: new Date('2019-01-01'),
        synopsis: 'Um adolescente socialmente desajeitado que vive com sua mãe, uma terapeuta sexual, se une a uma colega rebelde para criar uma clínica clandestina de terapia sexual na escola.'
      },
      { 
        title: 'Emily in Paris', 
        genre: 'Comédia/Romance', 
        releaseDate: new Date('2020-01-01'),
        synopsis: 'Uma jovem executiva de marketing de Chicago consegue o emprego dos sonhos em Paris, onde tenta equilibrar sua nova carreira, amigos, amor e cultura, enfrentando diversos desafios.'
      },
      { 
        title: 'Round 6 (Squid Game)', 
        genre: 'Suspense/Drama', 
        releaseDate: new Date('2021-01-01'),
        synopsis: 'Centenas de jogadores com dificuldades financeiras aceitam um estranho convite para competir em jogos infantis. Dentro, os aguarda um prêmio tentador, mas com riscos mortais.'
      },
      { 
        title: 'You', 
        genre: 'Suspense/Psicológico', 
        releaseDate: new Date('2018-01-01'),
        synopsis: 'Um gerente de livraria obsessivo cruza o caminho com uma aspirante a escritora e usa a internet e as redes sociais para reunir os detalhes mais íntimos de sua vida para se aproximar dela.'
      },
      { 
        title: 'Wednesday', 
        genre: 'Mistério/Fantasia', 
        releaseDate: new Date('2022-01-01'),
        synopsis: 'Wednesday Addams é enviada para a Academia Nevermore, onde tenta dominar sua habilidade psíquica emergente, frustrar uma onda de assassinatos monstruosos e resolver o mistério sobrenatural que afetou sua família há 25 anos.'
      },
      { 
        title: 'Manifest', 
        genre: 'Drama/Suspense', 
        releaseDate: new Date('2018-01-01'),
        synopsis: 'Depois que um voo comercial aterrissa com segurança após um voo turbulento, a tripulação e os passageiros descobrem que se passaram cinco anos e suas vidas, amigos e famílias não são mais os mesmos.'
      },
      { 
        title: 'Cobra Kai', 
        genre: 'Ação/Comédia', 
        releaseDate: new Date('2018-01-01'),
        synopsis: 'Trinta anos após o torneio de karatê de 1984, Johnny Lawrence busca redenção reabrindo o infame dojo Cobra Kai, reacendendo sua rivalidade com Daniel LaRusso.'
      },
      { 
        title: 'Brooklyn Nine-Nine', 
        genre: 'Comédia/Policial', 
        releaseDate: new Date('2013-01-01'),
        synopsis: 'As aventuras cômicas de um detetive talentoso e imaturo que, com a ajuda de seu grupo diversificado de colegas, deve se ajustar quando um novo comandante assume o controle de sua delegacia.'
      },
      { 
        title: 'Modern Family', 
        genre: 'Comédia', 
        releaseDate: new Date('2009-01-01'),
        synopsis: 'Três famílias diferentes e relacionadas vivem suas vidas em estilos únicos mas relacionados de comédia.'
      },
      { 
        title: 'Glee', 
        genre: 'Musical/Drama', 
        releaseDate: new Date('2009-01-01'),
        synopsis: 'Um grupo de estudantes ambiciosos e desajustados encontram alegria, amizade e direção no clube de coral mais notório da escola.'
      },
      { 
        title: 'The Vampire Diaries', 
        genre: 'Fantasia/Drama', 
        releaseDate: new Date('2009-01-01'),
        synopsis: 'Uma jovem se vê presa em um triângulo amoroso entre dois irmãos vampiros em uma pequena cidade do estado da Virgínia, onde criaturas sobrenaturais vivem em segredo entre seus habitantes.'
      },
      { 
        title: 'Gossip Girl (original)', 
        genre: 'Drama/Romance', 
        releaseDate: new Date('2007-01-01'),
        synopsis: 'Adolescentes privilegiados da elite de Manhattan têm suas vidas expostas e comentadas por um blogueiro anônimo que revela todos os segredos do grupo.'
      },
      { 
        title: 'The 100', 
        genre: 'Ficção científica/Drama', 
        releaseDate: new Date('2014-01-01'),
        synopsis: 'Cem jovens delinquentes são enviados de volta à Terra para investigar se o planeta é habitável novamente, quase um século depois que a humanidade foi quase extinta por um apocalipse nuclear.'
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
