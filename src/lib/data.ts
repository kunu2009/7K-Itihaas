
import type { Chapter, Paper } from '@/lib/types';

export const chapters: Chapter[] = [
  {
    id: '1',
    title: 'Renaissance in Europe and Development of Science',
    description: 'Renaissance, Crusades, Scientific inventions, Industrial Revolution & Economic Nationalism',
    content: `### The Dawn of the Renaissance ###

The period from the 14th to the 17th century in Europe is known as the Renaissance, which means 'rebirth'. It was a time of renewed interest in the art, literature, and philosophy of ancient Greece and Rome. This revival of classical learning sparked a wave of creativity and intellectual curiosity that transformed European society. The movement started in Italy, a region with a unique concentration of ancient Roman ruins and a wealthy class of merchants and bankers willing to sponsor arts and scholarship. Key factors contributing to the Renaissance include the fall of Constantinople in 1453, which led to an influx of Greek scholars and texts into Italy.

### The Power of the Printing Press ###

The invention of the printing press by Johannes Gutenberg around 1440 was a pivotal moment in human history. It allowed for the mass production of books, making knowledge more accessible than ever before. Before the printing press, books were painstakingly copied by hand, making them rare and expensive. Gutenberg's invention democratized knowledge, fueling the Reformation, spreading Renaissance ideas, and increasing literacy rates across Europe.

### Art, Architecture, and Patronage ###

The Renaissance was defined by its artistic masterpieces. Wealthy merchant families, like the Medici in Florence, became patrons of the arts, commissioning masterpieces from artists like Leonardo da Vinci (The Mona Lisa, The Last Supper), Michelangelo (Statue of David, Sistine Chapel Ceiling), and Raphael (The School of Athens). This period saw groundbreaking developments in techniques like perspective and realism. Architecture also flourished, with figures like Filippo Brunelleschi designing the magnificent dome of the Florence Cathedral.

### The Scientific Revolution ###

The Renaissance spirit of inquiry laid the groundwork for the Scientific Revolution. Thinkers began to question long-held beliefs and instead emphasized observation, experimentation, and reason. Nicolaus Copernicus challenged the geocentric (Earth-centered) model of the universe, proposing a heliocentric (Sun-centered) system. Johannes Kepler further refined this model with his laws of planetary motion. Galileo Galilei's observations with the newly invented telescope provided evidence to support Copernicus's theory, though he faced persecution from the Church for his views. In medicine, Andreas Vesalius revolutionized the study of human anatomy.

### New Frontiers in Thought and Politics ###

The revolution in thinking extended to political thought as well. Niccolò Machiavelli's "The Prince" offered a pragmatic and secular analysis of power, a stark departure from the religious and moral frameworks that had previously dominated political philosophy. He argued that the ends justify the means for a ruler trying to maintain power. This marked a significant shift towards modern political science.

### The Legacy of the Crusades ###

Simultaneously, events like the Crusades, a series of religious wars between Christians and Muslims from the 11th to 13th centuries, had profound long-term effects. While their military objectives were mixed, they facilitated immense cultural exchange between Europe and the Middle East. Europeans were introduced to new goods (spices, silk, sugar), ideas (Arabic numerals, advanced mathematics, medical knowledge), and technologies, which helped stimulate the changes of the Renaissance.

### The Industrial Revolution ###

This era of change culminated in the Industrial Revolution, beginning in Great Britain in the late 18th century. Inventions like the steam engine (perfected by James Watt), the spinning jenny, and the power loom mechanized production, particularly in the textile industry. This led to the factory system, mass migration to cities (urbanization), and the rise of a new industrial working class. The economic landscape of Europe was reshaped, giving rise to economic nationalism, where nations sought to protect their own industries and markets through policies like tariffs and colonization. The Renaissance, therefore, was not merely a cultural flowering but the starting point of a long chain of events that created the modern world.`,
    quiz: [
      {
        question: "What does the term 'Renaissance' mean?",
        options: ['Revolution', 'Rebirth', 'Reformation', 'Restoration'],
        correctAnswer: 'Rebirth',
        explanation: "The term 'Renaissance' is derived from the French word for 'rebirth', signifying the revival of art and learning from the classical period."
      },
      {
        question: 'Who invented the printing press, a key invention for the spread of knowledge?',
        options: ['Galileo Galilei', 'Leonardo da Vinci', 'Johannes Gutenberg', 'Niccolò Machiavelli'],
        correctAnswer: 'Johannes Gutenberg',
        explanation: 'Johannes Gutenberg invented the printing press around 1440, which revolutionized the production of books and the dissemination of information.'
      },
      {
        question: 'Which family was a famous patron of the arts in Florence during the Renaissance?',
        options: ['The Borgias', 'The Sforzas', 'The Habsburgs', 'The Medici'],
        correctAnswer: 'The Medici',
        explanation: 'The Medici family of Florence were powerful bankers and prominent patrons of the arts, funding many of the great artists of the Renaissance.'
      },
      {
        question: 'The heliocentric model of the universe was proposed by which astronomer?',
        options: ['Ptolemy', 'Nicolaus Copernicus', 'Isaac Newton', 'Galileo Galilei'],
        correctAnswer: 'Nicolaus Copernicus',
        explanation: 'Nicolaus Copernicus was the astronomer who formulated a model of the universe that placed the Sun, rather than Earth, at its center.'
      },
      {
        question: 'What major event in 1453 contributed to the start of the Renaissance in Italy?',
        options: ['The end of the Hundred Years\' War', 'The invention of the telescope', 'The fall of Constantinople', 'The discovery of America'],
        correctAnswer: 'The fall of Constantinople',
        explanation: 'The fall of Constantinople to the Ottoman Empire in 1453 caused many Greek scholars to flee to Italy, bringing with them classical texts and knowledge.'
      },
      {
        question: 'Who wrote "The Prince," a landmark work of political philosophy?',
        options: ['Dante Alighieri', 'Francis Bacon', 'Niccolò Machiavelli', 'Thomas More'],
        correctAnswer: 'Niccolò Machiavelli',
        explanation: '"The Prince" by Niccolò Machiavelli is a famous political treatise that advises rulers on acquiring and maintaining power, often through ruthless means.'
      },
      {
        question: 'Which artist is famous for painting the ceiling of the Sistine Chapel?',
        options: ['Leonardo da Vinci', 'Raphael', 'Donatello', 'Michelangelo'],
        correctAnswer: 'Michelangelo',
        explanation: 'Michelangelo, a master of the High Renaissance, painted the intricate and iconic frescoes on the ceiling of the Sistine Chapel in the Vatican.'
      },
      {
        question: 'The Crusades facilitated the exchange of goods and ideas between Europe and which region?',
        options: ['The Americas', 'East Asia', 'The Middle East', 'Sub-Saharan Africa'],
        correctAnswer: 'The Middle East',
        explanation: 'The Crusades, despite being wars, led to significant contact and cultural exchange between European crusaders and the Islamic civilizations of the Middle East.'
      },
      {
        question: 'Where did the Industrial Revolution begin?',
        options: ['France', 'Germany', 'Great Britain', 'Italy'],
        correctAnswer: 'Great Britain',
        explanation: 'The Industrial Revolution originated in Great Britain in the late 18th century due to a confluence of factors including resources, capital, and technological innovation.'
      },
      {
        question: 'James Watt is famously associated with the improvement of which invention?',
        options: ['The printing press', 'The telescope', 'The steam engine', 'The power loom'],
        correctAnswer: 'The steam engine',
        explanation: 'James Watt\'s improvements to the steam engine made it a much more efficient power source, which was crucial for powering the machines of the Industrial Revolution.'
      },
      {
        question: 'The intellectual movement that focused on human potential and achievements during the Renaissance is known as?',
        options: ['Scholasticism', 'Humanism', 'Feudalism', 'Mercantilism'],
        correctAnswer: 'Humanism',
        explanation: 'Humanism was the core intellectual movement of the Renaissance, emphasizing classical studies and the potential of the individual.'
      },
      {
        question: 'Who designed the dome of the Florence Cathedral?',
        options: ['Michelangelo', 'Leonardo da Vinci', 'Filippo Brunelleschi', 'Donato Bramante'],
        correctAnswer: 'Filippo Brunelleschi',
        explanation: 'Filippo Brunelleschi was the architect and engineer who designed the iconic dome of the Florence Cathedral, a masterpiece of Renaissance engineering.'
      },
      {
        question: 'Which of these was NOT a key Renaissance artist?',
        options: ['Raphael', 'Titian', 'Vincent van Gogh', 'Sandro Botticelli'],
        correctAnswer: 'Vincent van Gogh',
        explanation: 'Vincent van Gogh was a Post-Impressionist painter in the 19th century, long after the Renaissance period.'
      },
      {
        question: 'The theory that the Earth is the center of the universe is called:',
        options: ['Heliocentrism', 'Geocentrism', 'Universalism', 'Ecocentrism'],
        correctAnswer: 'Geocentrism',
        explanation: 'Geocentrism, also known as the Ptolemaic system, was the long-held belief that the Earth was the center of the universe.'
      },
      {
        question: 'Which scientist is credited with developing the laws of motion and universal gravitation?',
        options: ['Galileo Galilei', 'Johannes Kepler', 'Isaac Newton', 'Francis Bacon'],
        correctAnswer: 'Isaac Newton',
        explanation: 'Sir Isaac Newton\'s work, particularly his "Philosophiæ Naturalis Principia Mathematica," laid the foundations for classical mechanics.'
      },
      {
        question: 'The shift of population from rural areas to cities is known as:',
        options: ['Suburbanization', 'Gentrification', 'Urbanization', 'Colonization'],
        correctAnswer: 'Urbanization',
        explanation: 'Urbanization was a major social consequence of the Industrial Revolution as people moved to cities in search of factory work.'
      },
      {
        question: 'Economic nationalism often involves the use of what to protect domestic industries?',
        options: ['Free trade agreements', 'Open borders', 'Tariffs', 'Foreign aid'],
        correctAnswer: 'Tariffs',
        explanation: 'Tariffs, which are taxes on imported goods, are a common tool of economic nationalism used to make foreign products more expensive and protect domestic ones.'
      },
      {
        question: 'Andreas Vesalius made significant contributions to which field of science?',
        options: ['Astronomy', 'Chemistry', 'Anatomy', 'Physics'],
        correctAnswer: 'Anatomy',
        explanation: 'Andreas Vesalius is considered the father of modern human anatomy for his detailed work "De humani corporis fabrica."'
      },
      {
        question: 'Which of the following was a direct result of the invention of the printing press?',
        options: ['A decrease in literacy', 'An increase in the price of books', 'The rapid spread of ideas like the Reformation', 'The decline of universities'],
        correctAnswer: 'The rapid spread of ideas like the Reformation',
        explanation: 'The printing press allowed for the quick and widespread dissemination of texts, such as Martin Luther\'s Ninety-five Theses, which fueled the Protestant Reformation.'
      },
      {
        question: 'The Medici family exercised their power and patronage in which Italian city-state?',
        options: ['Venice', 'Rome', 'Milan', 'Florence'],
        correctAnswer: 'Florence',
        explanation: 'Florence was the heart of the early Renaissance, largely due to the immense wealth and patronage of the Medici family.'
      },
      {
        question: 'The concept of "perspective" was a major innovation in which field?',
        options: ['Music', 'Literature', 'Painting and Art', 'Philosophy'],
        correctAnswer: 'Painting and Art',
        explanation: 'The development of linear perspective allowed Renaissance artists to create realistic representations of three-dimensional space on a two-dimensional surface.'
      },
      {
        question: 'Francis Bacon was a major proponent of which scientific approach?',
        options: ['The deductive method', 'The empirical method', 'The scholastic method', 'The Socratic method'],
        correctAnswer: 'The empirical method',
        explanation: 'Francis Bacon championed the empirical method, which emphasizes observation and experimentation as the basis for scientific knowledge.'
      },
      {
        question: 'The Spinning Jenny and the Power Loom were key inventions in which industry?',
        options: ['The steel industry', 'The railway industry', 'The textile industry', 'The shipping industry'],
        correctAnswer: 'The textile industry',
        explanation: 'These inventions revolutionized the process of spinning yarn and weaving cloth, making the textile industry one of the first and most important sectors of the Industrial Revolution.'
      },
      {
        question: 'Which of these goods was NOT a primary motivator for early European exploration introduced by the Crusades?',
        options: ['Spices', 'Silk', 'Potatoes', 'Sugar'],
        correctAnswer: 'Potatoes',
        explanation: 'Potatoes were a New World crop and were introduced to Europe only after the voyages of Columbus to the Americas, not through the Crusades.'
      },
      {
        question: 'Galileo\'s use of the telescope provided evidence for which model of the universe?',
        options: ['The Geocentric model', 'The Heliocentric model', 'The Tychonic model', 'The Flat Earth model'],
        correctAnswer: 'The Heliocentric model',
        explanation: 'Galileo\'s observations of the phases of Venus and the moons of Jupiter were incompatible with the Geocentric model and strongly supported the Heliocentric model.'
      },
      {
        question: 'Who is often called the "Father of Humanism"?',
        options: ['Dante Alighieri', 'Petrarch', 'Boccaccio', 'Giotto'],
        correctAnswer: 'Petrarch',
        explanation: 'Francesco Petrarca, known as Petrarch, is considered the "Father of Humanism" for his role in rediscovering and promoting classical texts and ideas.'
      },
      {
        question: 'The architectural style of the Renaissance was inspired by:',
        options: ['Gothic cathedrals', 'Viking longhouses', 'Classical Greek and Roman buildings', 'Egyptian pyramids'],
        correctAnswer: 'Classical Greek and Roman buildings',
        explanation: 'Renaissance architects rejected the complex Gothic style and returned to the principles of symmetry, proportion, and geometry found in classical architecture.'
      },
      {
        question: 'The idea that a ruler should be feared rather than loved, if he cannot be both, is a key point in:',
        options: ['More\'s "Utopia"', 'Plato\'s "Republic"', 'Machiavelli\'s "The Prince"', 'Aristotle\'s "Politics"'],
        correctAnswer: 'Machiavelli\'s "The Prince"',
        explanation: 'This famous piece of advice is a classic example of the pragmatic and often ruthless political philosophy outlined by Machiavelli.'
      },
      {
        question: 'Which of the following is NOT a characteristic of Renaissance art?',
        options: ['Realism and expression', 'Abstract shapes and colors', 'Perspective and depth', 'Emphasis on the individual'],
        correctAnswer: 'Abstract shapes and colors',
        explanation: 'Abstract art was a development of the late 19th and 20th centuries. Renaissance art was focused on achieving realism and lifelike representation.'
      },
      {
        question: 'What term describes the system where a nation tries to amass wealth by exporting more than it imports, often using colonies?',
        options: ['Capitalism', 'Communism', 'Feudalism', 'Mercantilism'],
        correctAnswer: 'Mercantilism',
        explanation: 'Mercantilism was the dominant economic theory during the age of colonization, where colonies served as sources of raw materials and markets for the mother country.'
      },
      {
        question: 'William Harvey was a scientist known for his discoveries about:',
        options: ['Planetary orbits', 'The laws of gravity', 'The circulation of blood', 'The chemical elements'],
        correctAnswer: 'The circulation of blood',
        explanation: 'William Harvey was the first to describe completely and in detail the systemic circulation and properties of blood being pumped to the brain and body by the heart.'
      },
      {
        question: 'The fall of which city in 1204 during the Fourth Crusade weakened the Byzantine Empire?',
        options: ['Jerusalem', 'Rome', 'Constantinople', 'Alexandria'],
        correctAnswer: 'Constantinople',
        explanation: 'The sack of Constantinople by Western Crusaders in 1204 was a major turning point that severely weakened the Byzantine Empire, long before its final fall in 1453.'
      },
      {
        question: 'Which country did NOT become a major colonial power during the Renaissance era?',
        options: ['Spain', 'Portugal', 'England', 'Germany'],
        correctAnswer: 'Germany',
        explanation: 'Germany did not become a unified nation-state until the late 19th century and thus was not a major player in the first wave of European colonialism.'
      },
      {
        question: 'Leonardo da Vinci\'s "Vitruvian Man" is a famous depiction of:',
        options: ['The anatomy of the human eye', 'The ideal proportions of the human body', 'A flying machine', 'A battle scene'],
        correctAnswer: 'The ideal proportions of the human body',
        explanation: 'The "Vitruvian Man" is a celebrated drawing by Leonardo da Vinci that correlates the ideal geometry of a circle and a square with the proportions of the human form.'
      },
      {
        question: 'The factory system replaced which earlier system of production?',
        options: ['The guild system', 'The domestic system (or cottage industry)', 'The feudal system', 'The barter system'],
        correctAnswer: 'The domestic system (or cottage industry)',
        explanation: 'Before the Industrial Revolution, goods were often produced in homes under the domestic system. The factory system centralized production in one location.'
      },
      {
        question: 'Which Renaissance writer is famous for his work "The Divine Comedy"?',
        options: ['Petrarch', 'Dante Alighieri', 'Boccaccio', 'Castiglione'],
        correctAnswer: 'Dante Alighieri',
        explanation: 'Dante\'s "Divine Comedy," an epic poem describing a journey through Hell, Purgatory, and Paradise, is a masterpiece of world literature and a bridge from the Middle Ages to the Renaissance.'
      },
      {
        question: 'The term "Renaissance Man" refers to someone who:',
        options: ['Is a skilled warrior', 'Is very wealthy', 'Is knowledgeable and skilled in many different fields', 'Is a devoutly religious person'],
        correctAnswer: 'Is knowledgeable and skilled in many different fields',
        explanation: 'A "Renaissance Man" (or Polymath) is an individual, like Leonardo da Vinci, who excels in a wide variety of subjects and fields.'
      },
      {
        question: 'Which of these was a major city-state in Renaissance Italy, known for its maritime trade?',
        options: ['Florence', 'Venice', 'Rome', 'Naples'],
        correctAnswer: 'Venice',
        explanation: 'The Republic of Venice was a major financial and maritime power during the Middle Ages and Renaissance, controlling a vast trade network in the Mediterranean.'
      },
      {
        question: 'What was the primary purpose of the enclosure movement in Britain?',
        options: ['To create public parks', 'To fence off common land for private farming', 'To build new cities', 'To protect forests'],
        correctAnswer: 'To fence off common land for private farming',
        explanation: 'The enclosure movement was a key precursor to the Industrial Revolution, as it consolidated small landholdings into larger, more efficient farms, pushing many rural people to seek work in cities.'
      },
      {
        question: 'René Descartes is famous for which philosophical statement?',
        options: ['"The unexamined life is not worth living"', '"I think, therefore I am"', '"God is dead"', '"To be or not to be"'],
        correctAnswer: '"I think, therefore I am"',
        explanation: '"Cogito, ergo sum" is the famous Latin phrase from René Descartes, a foundational element of Western philosophy that emphasizes reason and self-awareness.'
      },
      {
        question: 'The use of Arabic numerals (0-9) replaced which older system in Europe?',
        options: ['Hieroglyphics', 'Cuneiform', 'Roman numerals', 'Tally marks'],
        correctAnswer: 'Roman numerals',
        explanation: 'The Hindu-Arabic numeral system, including the concept of zero, was introduced to Europe and gradually replaced the cumbersome Roman numeral system, greatly simplifying arithmetic and commerce.'
      },
      {
        question: 'Who was the first Christian leader to call for a Crusade?',
        options: ['King Richard the Lionheart', 'Pope Urban II', 'Charlemagne', 'Emperor Constantine'],
        correctAnswer: 'Pope Urban II',
        explanation: 'Pope Urban II initiated the First Crusade in 1095 at the Council of Clermont, calling on Christians to aid the Byzantines and liberate Jerusalem from Muslim control.'
      },
      {
        question: 'The rise of a wealthy merchant class was most important in which aspect of the Renaissance?',
        options: ['Military conquests', 'Patronage of the arts', 'The decline of religion', 'The establishment of feudalism'],
        correctAnswer: 'Patronage of the arts',
        explanation: 'The new wealth of merchants and bankers created a class of patrons who could afford to commission expensive works of art, fueling the artistic boom.'
      },
      {
        question: 'The "Mona Lisa" is a famous portrait by which artist?',
        options: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Titian'],
        correctAnswer: 'Leonardo da Vinci',
        explanation: 'The Mona Lisa, known for its subject\'s enigmatic smile, is one of the most famous paintings in the world, created by the ultimate Renaissance Man, Leonardo da Vinci.'
      },
      {
        question: 'The Industrial Revolution led to the rise of which two new social classes?',
        options: ['Nobility and Serfs', 'Clergy and Laity', 'The industrial middle class (bourgeoisie) and the urban working class (proletariat)', 'Artisans and Merchants'],
        correctAnswer: 'The industrial middle class (bourgeoisie) and the urban working class (proletariat)',
        explanation: 'The Industrial Revolution reshaped society, creating a new class of factory owners and professionals, and a large class of wage-earning factory workers.'
      },
      {
        question: 'Which book, written by Castiglione, described the ideal Renaissance gentleman?',
        options: ['"The Prince"', '"The Book of the Courtier"', '"Utopia"', '"Don Quixote"'],
        correctAnswer: '"The Book of the Courtier"',
        explanation: 'Baldassare Castiglione\'s "The Book of the Courtier" was a highly influential etiquette and philosophy book that defined the qualities of the ideal courtier.'
      },
      {
        question: 'The rediscovery of the works of which classical philosopher heavily influenced Renaissance thought?',
        options: ['Plato', 'Socrates', 'Diogenes', 'Epicurus'],
        correctAnswer: 'Plato',
        explanation: 'The rediscovery and translation of Plato\'s works, in particular, had a profound impact on Renaissance humanism and philosophy, challenging the dominance of Aristotelian thought.'
      },
      {
        question: 'Which of the following was a major health crisis that preceded the Renaissance and may have contributed to social changes?',
        options: ['The Spanish Flu', 'The Black Death', 'The Plague of Justinian', 'Smallpox'],
        correctAnswer: 'The Black Death',
        explanation: 'The Black Death (1347-1351) was a devastating pandemic that killed a significant portion of Europe\'s population, leading to major social, economic, and religious changes that helped set the stage for the Renaissance.'
      },
      {
        question: 'The development of what financial practice helped fuel Renaissance commerce?',
        options: ['Double-entry bookkeeping', 'Cryptocurrency', 'Bartering', 'Tribute systems'],
        correctAnswer: 'Double-entry bookkeeping',
        explanation: 'The adoption of double-entry bookkeeping, which originated in Italy, allowed merchants to better track their assets and liabilities, leading to more complex commercial enterprises.'
      }
    ],
    flashcards: [
      { term: 'Renaissance', definition: "A period in European history (14th-17th C), meaning 'rebirth', marking the transition from the Middle Ages to modernity with a revival of classical art and learning." },
      { term: 'Humanism', definition: 'An intellectual movement at the heart of the Renaissance that focused on human potential and achievements, rather than divine matters.' },
      { term: 'Patronage', definition: 'Financial support provided by wealthy individuals or families (like the Medici) to artists, scholars, and writers.' },
      { term: 'Johannes Gutenberg', definition: 'German inventor who developed the printing press with movable type around 1440, revolutionizing communication.' },
      { term: 'Heliocentrism', definition: 'The astronomical model, proposed by Copernicus, in which the Earth and planets revolve around the Sun.' },
      { term: 'Geocentrism', definition: 'The older, Ptolemaic model of the universe where the Earth is at the center.' },
      { term: 'Galileo Galilei', definition: 'Italian astronomer and physicist who used the telescope to provide evidence for heliocentrism, leading to conflict with the Church.' },
      { term: 'Niccolò Machiavelli', definition: 'Renaissance political philosopher who wrote "The Prince," a work of political theory that advises rulers on how to gain and maintain power.' },
      { term: 'Leonardo da Vinci', definition: 'A true "Renaissance man," known for his masterpieces like the Mona Lisa and The Last Supper, as well as his inventions and scientific studies.' },
      { term: 'Michelangelo', definition: 'An Italian sculptor, painter, architect, and poet of the High Renaissance, famous for the Sistine Chapel ceiling and the statue of David.' },
      { term: 'Crusades', definition: 'A series of religious wars (11th-13th C) initiated by Latin Christians to reclaim the Holy Land, which also spurred trade and cultural exchange.' },
      { term: 'Scientific Revolution', definition: 'A series of events that marked the emergence of modern science during the early modern period, when developments in mathematics, physics, astronomy, biology, and chemistry transformed views of society and nature.' },
      { term: 'Isaac Newton', definition: 'An English mathematician and physicist who developed the laws of motion and universal gravitation, a key figure in the Scientific Revolution.' },
      { term: 'Industrial Revolution', definition: 'The transition to new manufacturing processes in the late 18th and early 19th centuries, starting in Great Britain.' },
      { term: 'Steam Engine', definition: 'A key invention of the Industrial Revolution, improved by James Watt, that powered machinery, locomotives, and ships.' },
      { term: 'Urbanization', definition: 'The process of population shift from rural areas to urban areas, a major social consequence of the Industrial Revolution.' },
      { term: 'Factory System', definition: 'A method of manufacturing using machinery and division of labor, which replaced the domestic system.' },
      { term: 'Economic Nationalism', definition: 'An ideology that favors state interventionism in the economy, including policies like protectionism (tariffs) to support domestic industries.' },
      { term: 'Tariff', definition: 'A tax imposed on imported goods and services, used as a tool of economic nationalism.' },
      { term: 'Fall of Constantinople', definition: 'The capture of the capital of the Byzantine Empire by the Ottoman Empire in 1453, a key event that spurred the Renaissance in Italy.' },
      { term: 'Medici Family', definition: 'A wealthy and powerful banking family in Florence who were influential patrons of the arts during the Renaissance.' },
      { term: 'Florence', definition: 'An Italian city-state that was the birthplace and epicentre of the Renaissance.' },
      { term: 'Petrarch', definition: 'An Italian scholar and poet in Renaissance Italy, and one of the earliest humanists. Often called the "Father of Humanism".' },
      { term: 'Perspective', definition: 'An artistic technique used to create an illusion of three dimensions (depth and space) on a two-dimensional surface.' },
      { term: 'Raphael', definition: 'An Italian painter and architect of the High Renaissance, celebrated for the perfection and grace of his paintings, such as "The School of Athens".' },
      { term: 'Filippo Brunelleschi', definition: 'A founding father of Renaissance architecture, most famous for designing the dome of the Florence Cathedral.' },
      { term: 'Nicolaus Copernicus', definition: 'A Renaissance-era mathematician and astronomer who formulated a model of the universe that placed the Sun rather than Earth at the center.' },
      { term: 'Johannes Kepler', definition: 'A German astronomer who discovered three major laws of planetary motion, confirming and refining the heliocentric theory.' },
      { term: 'Francis Bacon', definition: 'An English philosopher and statesman who developed the empirical method or Baconian method of scientific inquiry.' },
      { term: 'The Prince', definition: 'A 16th-century political treatise by Niccolò Machiavelli, arguing that the ends justify the means in politics.' },
      { term: 'Arabic Numerals', definition: 'The numeral system (0, 1, 2, 3...) introduced to Europe from the Middle East, which replaced Roman numerals and simplified commerce.' },
      { term: 'James Watt', definition: 'A Scottish inventor whose improvements to the steam engine were fundamental to the changes brought by the Industrial Revolution.' },
      { term: 'Spinning Jenny', definition: 'An early multi-spindle spinning frame and one of the key developments in the industrialization of weaving during the early Industrial Revolution.' },
      { term: 'Power Loom', definition: 'A mechanized loom powered by a line shaft, and another key invention of the Industrial Revolution.' },
      { term: 'Mercantilism', definition: 'The economic theory that trade generates wealth and is stimulated by the accumulation of profitable balances, which a government should encourage by means of protectionism.' },
      { term: 'Andreas Vesalius', definition: 'A 16th-century Flemish anatomist, physician, and author of one of the most influential books on human anatomy, "De humani corporis fabrica".' },
      { term: 'William Harvey', definition: 'An English physician who made seminal contributions in anatomy and physiology by being the first to describe the circulation of blood.' },
      { term: 'René Descartes', definition: 'A French philosopher, mathematician, and scientist. Dubbed the father of modern Western philosophy, famous for the statement "I think, therefore I am."' },
      { term: 'Sistine Chapel Ceiling', definition: 'A series of frescoes painted by Michelangelo between 1508 and 1512, considered a cornerstone work of High Renaissance art.' },
      { term: 'Statue of David', definition: 'A masterpiece of Renaissance sculpture, created in marble between 1501 and 1504 by the Italian artist Michelangelo.' },
      { term: 'The Last Supper', definition: 'A late 15th-century mural painting by Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy.' },
      { term: 'Mona Lisa', definition: 'A half-length portrait painting by Leonardo da Vinci that has been acclaimed as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world."' },
      { term: 'Venice', definition: 'A major Italian city-state and maritime republic during the Middle Ages and Renaissance, a key center of commerce and art.' },
      { term: 'Dante Alighieri', definition: 'An Italian poet, writer and philosopher. His Divine Comedy is considered one of the most important poems of the Middle Ages and the greatest literary work in the Italian language.' },
      { term: 'Polymath', definition: 'A person whose expertise spans a significant number of different subject areas; such a person is known to draw on complex bodies of knowledge to solve specific problems. Also known as a "Renaissance Man".' },
      { term: 'Protestant Reformation', definition: 'A major 16th-century movement in Western Christianity that posed a religious and political challenge to the Roman Catholic Church, spurred by the printing press.' },
      { term: 'Double-entry Bookkeeping', definition: 'A bookkeeping system where every entry to an account requires a corresponding and opposite entry to a different account, developed in Renaissance Italy.' },
      { term: 'Black Death', definition: 'A bubonic plague pandemic occurring in Afro-Eurasia from 1346 to 1353. It is the most fatal pandemic recorded in human history, causing major societal upheaval.' },
      { term: 'Council of Clermont', definition: 'An assembly for church reform called by Pope Urban II in 1095 which was the starting point of the First Crusade.' },
      { term: 'Enclosure Movement', definition: 'The process in England of consolidating small landholdings into a smaller number of larger farms from the 13th century onward. It was a key precursor to the Industrial Revolution.' }
    ],
  },
  {
    id: '2',
    title: 'European Colonialism',
    description: 'Causes and global impact of European Colonialism',
    content: `### The Age of Discovery: A New Worldview ###

European colonialism, a dominant force from the 15th to the 20th century, began with the Age of Discovery. This era was characterized by extensive overseas exploration, which fundamentally changed the European understanding of the world. Portugal and Spain were the pioneers. Driven by the desire to find new trade routes to Asia that would bypass the Ottoman-controlled land routes, Portuguese explorers like Bartolomeu Dias and Vasco da Gama charted a path around Africa to India, establishing a lucrative spice trade. Spain, seeking a westward route, sponsored Christopher Columbus's voyage in 1492. Instead of Asia, he reached the Americas, opening up two "New World" continents to European colonization.

### Motivations: Gold, God, and Glory ###

The drivers behind this expansion are often summarized as "Gold, God, and Glory."
**Gold:** This refers to the intense desire for wealth. It included not just precious metals like gold and silver, which Spain extracted in vast quantities from the Aztec and Inca empires, but also the control of trade in valuable resources like spices, sugar, silk, and later, raw materials for industry like cotton and rubber.
**God:** This represents the religious impulse to spread Christianity. The missionary zeal to convert indigenous peoples to Catholicism (for Spain and Portugal) or Protestantism (for England and the Netherlands) was a genuine and powerful motivation.
**Glory:** This signifies the intense competition between emerging European nation-states. Building a vast overseas empire was a measure of national prestige and power. Colonies provided strategic military and naval bases and asserted a nation's dominance on the global stage.

### The Rise of Mercantilism ###

The economic theory underpinning this first wave of colonialism was mercantilism. Mercantilists believed that a nation's wealth (measured in gold and silver) was finite, and the only way to increase it was at the expense of other nations. Colonies played a crucial role in this system. They were seen as exclusive sources of raw materials and captive markets for the manufactured goods of the "mother country." This system was designed to ensure a positive balance of trade, where exports exceeded imports, enriching the imperial power.

### The Second Wave: New Imperialism and the Scramble for Africa ###

In the 19th century, a new, more aggressive wave of imperialism began. The Industrial Revolution in Europe created a massive demand for raw materials and new markets for its industrial output. This, combined with technological advances like the steamship and machine gun, allowed for deeper penetration into continents. This "New Imperialism" was most evident in the "Scramble for Africa." The Berlin Conference of 1884-85 formalized the partition of Africa among European powers. They drew arbitrary boundaries across the continent, ignoring existing ethnic, linguistic, and political realities. The consequences were profound and long-lasting, leading to political instability and conflict that persists to this day. In Asia, Britain solidified its control over India, France colonized Indochina (modern-day Vietnam, Laos, and Cambodia), and the Netherlands controlled the East Indies (Indonesia).

### The Devastating Impact ###

The impact of colonialism was devastating for indigenous populations. In the Americas, European diseases like smallpox, to which the native populations had no immunity, combined with violence and exploitation, led to a demographic catastrophe of staggering proportions. To replace the dying local labor force, especially on sugar and cotton plantations, the transatlantic slave trade was established. This forcibly transported millions of Africans to the Americas under brutal conditions, creating a system of chattel slavery that lasted for centuries.

In colonized lands, traditional economies were systematically dismantled. Local industries were often destroyed to eliminate competition with the mother country's products. Agriculture was reorganized to focus on cash crops for export rather than food for local consumption, leading to famines. Societies were restructured to serve the interests of the colonizers. While colonizers often introduced new infrastructure like railways, ports, and schools, these were primarily built to facilitate resource extraction and administration, not for the benefit of the local population. The legacy of colonialism is complex, including redrawn global maps, deep-seated economic disparities, and enduring political and cultural conflicts.`,
    quiz: [
      {
        question: 'What are the "Three Gs" often cited as the main motives for European colonialism?',
        options: ['Guns, Germs, and Steel', 'Gold, God, and Glory', 'Goods, Grains, and Gold', 'Glory, Grace, and Government'],
        correctAnswer: 'Gold, God, and Glory',
        explanation: '"Gold" (wealth), "God" (spreading Christianity), and "Glory" (national prestige) are the three primary motivations for European colonial expansion.'
      },
      {
        question: 'Which two countries were the pioneers of the Age of Discovery?',
        options: ['Britain and France', 'Netherlands and Belgium', 'Spain and Portugal', 'Italy and Germany'],
        correctAnswer: 'Spain and Portugal',
        explanation: 'Spain and Portugal led the initial wave of global exploration and colonization in the 15th and 16th centuries.'
      },
      {
        question: 'What was the purpose of the Berlin Conference of 1884-85?',
        options: ['To end the slave trade', 'To promote free trade in Africa', 'To divide Africa among European powers', 'To grant independence to African nations'],
        correctAnswer: 'To divide Africa among European powers',
        explanation: 'The Berlin Conference was held to regulate European colonization and trade in Africa, leading to its formal partition among the colonial powers.'
      },
      {
        question: 'What economic theory supported the practice of colonialism by emphasizing wealth accumulation through a positive balance of trade?',
        options: ['Capitalism', 'Socialism', 'Mercantilism', 'Feudalism'],
        correctAnswer: 'Mercantilism',
        explanation: 'Mercantilism was the dominant economic theory, which stated that colonies existed for the economic benefit of the mother country.'
      },
      {
        question: 'The transatlantic slave trade supplied labor primarily for what type of plantations in the Americas?',
        options: ['Wheat and corn', 'Spices and tea', 'Sugar and cotton', 'Rice and indigo'],
        correctAnswer: 'Sugar and cotton',
        explanation: 'The demand for labor on highly profitable sugar and cotton plantations was a primary driver of the transatlantic slave trade.'
      },
      {
        question: 'What was the most devastating impact of European contact on the indigenous populations of the Americas?',
        options: ['Forced conversion to Christianity', 'The introduction of firearms', 'The spread of infectious diseases', 'The loss of political autonomy'],
        correctAnswer: 'The spread of infectious diseases',
        explanation: 'Diseases like smallpox and measles, to which Native Americans had no immunity, caused a massive demographic collapse, killing up to 90% of the population in some areas.'
      },
      {
        question: 'The "Scramble for Africa" refers to:',
        options: ['A series of African independence movements', 'A gold rush in South Africa', 'The rapid invasion and partition of Africa by European powers in the late 19th century', 'A competition to map the African continent'],
        correctAnswer: 'The rapid invasion and partition of Africa by European powers in the late 19th century',
        explanation: 'The "Scramble for Africa" was a period of intense competition among European nations to colonize African territory.'
      },
      {
        question: 'Which European power colonized Indochina (modern Vietnam, Laos, and Cambodia)?',
        options: ['Great Britain', 'Netherlands', 'France', 'Portugal'],
        correctAnswer: 'France',
        explanation: 'French Indochina was a grouping of French colonial territories in Southeast Asia.'
      },
      {
        question: 'The Treaty of Tordesillas (1494) divided the non-European world between which two countries?',
        options: ['England and France', 'Spain and Portugal', 'The Netherlands and England', 'Portugal and France'],
        correctAnswer: 'Spain and Portugal',
        explanation: 'The Treaty of Tordesillas, brokered by the Pope, drew a line of demarcation, assigning lands to the east to Portugal and lands to the west to Spain.'
      },
      {
        question: 'Hernán Cortés and Francisco Pizarro were famous:',
        options: ['Portuguese explorers', 'Spanish conquistadors', 'Dutch merchants', 'French missionaries'],
        correctAnswer: 'Spanish conquistadors',
        explanation: 'Cortés conquered the Aztec Empire in Mexico, and Pizarro conquered the Inca Empire in Peru.'
      },
      {
        question: 'What was the primary goal of Vasco da Gama\'s voyage in 1497-1499?',
        options: ['To circumnavigate the globe', 'To discover the Americas', 'To establish a sea route to India', 'To conquer the Ottoman Empire'],
        correctAnswer: 'To establish a sea route to India',
        explanation: 'Vasco da Gama was the first European to successfully sail around Africa to reach India, opening a direct maritime trade route.'
      },
      {
        question: 'The term "mother country" in a colonial context refers to:',
        options: ['The colony with the largest population', 'The land where the indigenous people originated', 'The imperial nation that owns the colony', 'The first colony established by an empire'],
        correctAnswer: 'The imperial nation that owns the colony',
        explanation: 'The "mother country" was the colonizing state that extracted resources from and sold goods to its colonies.'
      },
      {
        question: 'What is a "cash crop"?',
        options: ['A crop grown for the farmer\'s own consumption', 'A crop that can be easily exchanged for money', 'A crop grown for export to make a profit', 'A crop that requires a lot of water'],
        correctAnswer: 'A crop grown for export to make a profit',
        explanation: 'Colonial economies were often restructured to focus on cash crops like sugar, cotton, and rubber for the benefit of the colonizer, sometimes leading to local food shortages.'
      },
      {
        question: 'Which of the following technologies was key to the "New Imperialism" of the 19th century?',
        options: ['The printing press', 'The longbow', 'The steamship', 'The chariot'],
        correctAnswer: 'The steamship',
        explanation: 'The steamship allowed Europeans to travel up rivers and deep into the interiors of Africa and Asia, which had previously been inaccessible.'
      },
      {
        question: 'The conquest of which two empires provided Spain with immense wealth in gold and silver?',
        options: ['Roman and Greek', 'Mughal and Ottoman', 'Aztec and Inca', 'Egyptian and Persian'],
        correctAnswer: 'Aztec and Inca',
        explanation: 'The plunder of the Aztec and Inca empires in the Americas brought enormous quantities of gold and silver into Spain.'
      },
      {
        question: 'The Dutch were most dominant in colonizing which region?',
        options: ['North America', 'India', 'The East Indies (Indonesia)', 'West Africa'],
        correctAnswer: 'The East Indies (Indonesia)',
        explanation: 'The Dutch East India Company (VOC) focused on the lucrative spice trade and established long-lasting control over the islands that now form Indonesia.'
      },
      {
        question: 'What is meant by "arbitrary boundaries" in the context of colonialism in Africa?',
        options: ['Borders based on geographical features', 'Borders agreed upon by African leaders', 'Borders drawn by Europeans without regard for ethnic or linguistic groups', 'Temporary borders that changed frequently'],
        correctAnswer: 'Borders drawn by Europeans without regard for ethnic or linguistic groups',
        explanation: 'These arbitrary boundaries are a major legacy of colonialism and have been a source of much post-colonial conflict in Africa.'
      },
      {
        question: 'Which of these was a major British colony, often called the "Jewel in the Crown" of the British Empire?',
        options: ['Canada', 'Australia', 'India', 'South Africa'],
        correctAnswer: 'India',
        explanation: 'India was considered the most valuable and prestigious colony of the British Empire due to its vast population, resources, and market.'
      },
      {
        question: 'The idea of a "civilizing mission" was used by Europeans to justify colonialism by claiming they were:',
        options: ['Bringing superior culture and progress to "backward" peoples', 'Preserving indigenous cultures', 'Promoting democracy and independence', 'Learning from other civilizations'],
        correctAnswer: 'Bringing superior culture and progress to "backward" peoples',
        explanation: 'The "civilizing mission" was a paternalistic and racist ideology that presented colonialism as a noble enterprise to uplift other races.'
      },
      {
        question: 'What is neocolonialism?',
        options: ['The first stage of colonization', 'A new form of colonization using settlers', 'Economic and political influence exerted by a former colonial power over its ex-colony', 'The period of anti-colonial struggle'],
        correctAnswer: 'Economic and political influence exerted by a former colonial power over its ex-colony',
        explanation: 'Neocolonialism refers to the continued dependency of former colonies on their old rulers, achieved through economic and cultural means rather than direct political control.'
      },
      {
        question: 'Who was the Portuguese prince who sponsored many early voyages of exploration along the African coast?',
        options: ['King John I', 'Prince Henry the Navigator', 'King Manuel I', 'Vasco da Gama'],
        correctAnswer: 'Prince Henry the Navigator',
        explanation: 'Prince Henry was a central figure in the early days of the Portuguese Empire and the Age of Discovery, sponsoring expeditions to explore the West African coast.'
      },
      {
        question: 'What was the "Middle Passage"?',
        options: ['The sea route from Europe to India around Africa', 'The journey of enslaved Africans across the Atlantic to the Americas', 'The land route from Europe to China', 'The final voyage of a colonial official back to the mother country'],
        correctAnswer: 'The journey of enslaved Africans across the Atlantic to the Americas',
        explanation: 'The Middle Passage was the horrific second stage of the triangular trade, characterized by extreme brutality, disease, and high mortality rates.'
      },
      {
        question: 'The British East India Company was an example of a:',
        options: ['Government department', 'Missionary society', 'Joint-stock company', 'Scientific expedition'],
        correctAnswer: 'Joint-stock company',
        explanation: 'Joint-stock companies were a key tool of early colonialism, allowing private investors to pool capital for large-scale and risky ventures like overseas trade and colonization.'
      },
      {
        question: 'In the mercantilist system, a colony\'s role was to provide the mother country with what?',
        options: ['Manufactured goods and soldiers', 'Raw materials and a market for its goods', 'Gold and nothing else', 'Political ideas and art'],
        correctAnswer: 'Raw materials and a market for its goods',
        explanation: 'Colonies were forbidden from developing their own industries and were forced to buy manufactured goods from the mother country while supplying it with cheap raw materials.'
      },
      {
        question: 'The decline of which empire in the Americas made it easier for Spain to conquer vast territories?',
        options: ['The Roman Empire', 'The Mongol Empire', 'The Aztec and Inca Empires', 'The Ottoman Empire'],
        correctAnswer: 'The Aztec and Inca Empires',
        explanation: 'While powerful, the Aztec and Inca Empires were destabilized by internal conflicts and disease, which the Spanish conquistadors exploited.'
      },
      {
        question: 'Which of the following is a long-term political legacy of colonialism?',
        options: ['Universal peace and stability', 'Economic equality between nations', 'Ongoing ethnic conflicts due to arbitrary borders', 'The disappearance of national identities'],
        correctAnswer: 'Ongoing ethnic conflicts due to arbitrary borders',
        explanation: 'Many modern conflicts have their roots in the colonial practice of drawing borders that grouped together rival ethnic groups or split a single group between different states.'
      },
      {
        question: 'What was a primary commodity the Portuguese sought in their Asian trade?',
        options: ['Gold', 'Silver', 'Spices', 'Cotton'],
        correctAnswer: 'Spices',
        explanation: 'Spices like pepper, cloves, and cinnamon were extremely valuable in Europe, and controlling the spice trade was a major goal of Portuguese exploration.'
      },
      {
        question: 'The term "demographic catastrophe" refers to what event in the Americas?',
        options: ['A massive population boom', 'A huge decline in population due to disease and violence', 'A large-scale migration to Europe', 'A shift from rural to urban living'],
        correctAnswer: 'A huge decline in population due to disease and violence',
        explanation: 'The arrival of Europeans led to a catastrophic decline in the indigenous population of the Americas, primarily due to lack of immunity to Old World diseases.'
      },
      {
        question: 'King Leopold II of Belgium is infamous for his brutal exploitation of which colony?',
        options: ['South Africa', 'India', 'The Congo Free State', 'Brazil'],
        correctAnswer: 'The Congo Free State',
        explanation: 'King Leopold II ran the Congo Free State as his personal fiefdom, committing horrific atrocities against the local population in the pursuit of rubber and ivory.'
      },
      {
        question: 'The first permanent English settlement in North America was:',
        options: ['New York', 'Boston', 'Jamestown', 'Quebec'],
        correctAnswer: 'Jamestown',
        explanation: 'Jamestown, Virginia, founded in 1607, was the first permanent English settlement in the Americas.'
      },
      {
        question: 'Which of the following was NOT a major European colonial power?',
        options: ['Great Britain', 'France', 'Spain', 'Austria-Hungary'],
        correctAnswer: 'Austria-Hungary',
        explanation: 'Austria-Hungary was a large European land empire but did not possess significant overseas colonies like the other powers listed.'
      },
      {
        question: 'How did the Industrial Revolution fuel 19th-century imperialism?',
        options: ['It decreased the need for foreign trade', 'It created a huge demand for raw materials and new markets', 'It promoted isolationist policies', 'It made European nations weaker'],
        correctAnswer: 'It created a huge demand for raw materials and new markets',
        explanation: 'Factories in Europe required vast amounts of raw materials (like cotton, rubber, and oil) and needed new populations to sell their mass-produced goods to.'
      },
      {
        question: 'What was the "White Man\'s Burden"?',
        options: ['A poem by Rudyard Kipling used to justify imperialism', 'The economic debt of European nations', 'A disease that affected colonizers', 'The name of a famous colonial ship'],
        correctAnswer: 'A poem by Rudyard Kipling used to justify imperialism',
        explanation: 'The phrase "White Man\'s Burden" became a slogan for the belief that it was the duty of white colonizers to "civilize" other, non-white peoples.'
      },
      {
        question: 'Which country controlled the colony of Brazil?',
        options: ['Spain', 'Portugal', 'France', 'Netherlands'],
        correctAnswer: 'Portugal',
        explanation: 'Brazil was the largest and most valuable colony in the Portuguese Empire.'
      },
      {
        question: 'The Sepoy Rebellion of 1857 was a major anti-colonial uprising in:',
        options: ['China', 'India', 'South Africa', 'Algeria'],
        correctAnswer: 'India',
        explanation: 'The Sepoy Rebellion was a major turning point in the history of British colonialism in India.'
      },
      {
        question: 'The term "settler colony" refers to a colony where:',
        options: ['The colonizers were a small ruling minority', 'Large numbers of people from the mother country moved to live permanently', 'The primary purpose was trade', 'The local population was granted self-rule'],
        correctAnswer: 'Large numbers of people from the mother country moved to live permanently',
        explanation: 'Countries like Australia, Canada, and the United States are examples of settler colonies, where European immigrants eventually outnumbered the indigenous population.'
      },
      {
        question: 'What was the outcome of the Opium Wars between Britain and China?',
        options: ['China successfully banned opium', 'Britain was defeated and expelled from China', 'China was forced to open its ports to trade and cede Hong Kong to Britain', 'The two countries became close allies'],
        correctAnswer: 'China was forced to open its ports to trade and cede Hong Kong to Britain',
        explanation: 'The Opium Wars were a clear example of Western powers using military force to impose unequal trade terms on an Asian nation.'
      },
      {
        question: 'What was the main purpose of a colonial education system?',
        options: ['To preserve and promote indigenous languages and culture', 'To provide universal literacy for all', 'To train a small class of locals for administrative and clerical jobs', 'To encourage critical thinking and anti-colonial sentiment'],
        correctAnswer: 'To train a small class of locals for administrative and clerical jobs',
        explanation: 'Colonial education was typically designed to create a compliant class of local intermediaries to help run the colony, not to broadly educate the population.'
      },
      {
        question: 'The Monroe Doctrine (1823) was a US policy that:',
        options: ['Encouraged European colonization in the Americas', 'Opposed further European colonization in the Americas', 'Divided the Americas between the US and Britain', 'Established free trade for all'],
        correctAnswer: 'Opposed further European colonization in the Americas',
        explanation: 'The Monroe Doctrine was an early assertion of US influence, warning European powers not to interfere in the affairs of the Western Hemisphere.'
      },
      {
        question: 'Which of these resources was the primary cause for the brutal exploitation of the Congo?',
        options: ['Gold', 'Diamonds', 'Rubber', 'Tea'],
        correctAnswer: 'Rubber',
        explanation: 'During the rubber boom of the late 19th century, King Leopold II\'s regime in the Congo Free State used forced labor and extreme violence to extract rubber.'
      },
      {
        question: 'Who led the successful slave revolt that resulted in the independence of Haiti?',
        options: ['Toussaint Louverture', 'Simon Bolivar', 'George Washington', 'Napoleon Bonaparte'],
        correctAnswer: 'Toussaint Louverture',
        explanation: 'Toussaint Louverture was the leader of the Haitian Revolution, the only slave uprising that led to the founding of a state free from slavery and ruled by non-whites.'
      },
      {
        question: 'The Fashoda Incident was a tense territorial dispute in Africa between which two European powers?',
        options: ['Britain and Germany', 'Britain and France', 'France and Belgium', 'Germany and Portugal'],
        correctAnswer: 'Britain and France',
        explanation: 'The Fashoda Incident of 1898 was the climax of imperial territorial disputes between Britain and France in Eastern Africa, almost leading to war.'
      },
      {
        question: 'Which European country was the last to give up its African colonies?',
        options: ['Great Britain', 'France', 'Belgium', 'Portugal'],
        correctAnswer: 'Portugal',
        explanation: 'Portugal, under the authoritarian Estado Novo regime, clung to its colonies (Angola, Mozambique) until a 1974 revolution in Portugal itself led to their independence.'
      },
      {
        question: 'The construction of the Suez Canal in Egypt was of strategic importance primarily to which colonial power?',
        options: ['Germany', 'Russia', 'Great Britain', 'United States'],
        correctAnswer: 'Great Britain',
        explanation: 'The Suez Canal provided a much shorter maritime route to its most important colony, India, making control over Egypt a key strategic priority for Britain.'
      },
      {
        question: 'The Boxer Rebellion was an anti-foreign, anti-colonial uprising in:',
        options: ['India', 'China', 'Japan', 'Vietnam'],
        correctAnswer: 'China',
        explanation: 'The Boxer Rebellion (1899-1901) was a violent uprising in China against foreign influence, which was eventually suppressed by an alliance of eight foreign nations.'
      },
      {
        question: 'What is a "protectorate"?',
        options: ['A territory that is fully annexed by a colonial power', 'A state that is controlled and protected by another, retaining some autonomy', 'A colony designated for religious missions', 'A military base in a foreign land'],
        correctAnswer: 'A state that is controlled and protected by another, retaining some autonomy',
        explanation: 'A protectorate was a common form of colonial control where the local ruler was left in place but had to follow the advice of the European power, especially in foreign affairs.'
      },
      {
        question: 'Cecil Rhodes was a British imperialist most associated with the colonization of:',
        options: ['East Africa', 'West Africa', 'Southern Africa', 'North Africa'],
        correctAnswer: 'Southern Africa',
        explanation: 'Cecil Rhodes was a mining magnate and politician in southern Africa who was a fervent believer in British imperialism and founded the territory of Rhodesia (now Zimbabwe and Zambia).'
      },
      {
        question: 'The term "informal empire" refers to:',
        options: ['An empire that is not officially recognized', 'A region where a stronger state has significant economic and political influence without direct territorial control', 'An empire ruled by a company instead of a government', 'An empire with no clear leader'],
        correctAnswer: 'A region where a stronger state has significant economic and political influence without direct territorial control',
        explanation: 'For example, Britain exerted so much economic power over countries like Argentina in the 19th century that it was considered part of its "informal empire."'
      },
      {
        question: 'What was the primary resource extracted by the French from their colonies in West Africa?',
        options: ['Spices', 'Gold', 'Peanuts and palm oil', 'Diamonds'],
        correctAnswer: 'Peanuts and palm oil',
        explanation: 'Agricultural products like peanuts and palm oil were key exports from French West Africa, used in Europe for making soap and other industrial products.'
      }
    ],
    flashcards: [
      { term: 'Colonialism', definition: 'The policy or practice of acquiring full or partial political control over another country, occupying it with settlers, and exploiting it economically.' },
      { term: 'Imperialism', definition: 'A policy of extending a country\'s power and influence through diplomacy or military force, often by acquiring colonies.' },
      { term: 'Gold, God, and Glory', definition: 'A summary of the primary motivations for European exploration and colonization: economic wealth, religious conversion, and national prestige.' },
      { term: 'Age of Discovery', definition: 'A period from the early 15th century to the early 17th century during which Europeans engaged in intensive exploration of the world.' },
      { term: 'Vasco da Gama', definition: 'A Portuguese explorer and the first European to reach India by sea, establishing a new route for the spice trade.' },
      { term: 'Christopher Columbus', definition: 'An Italian explorer sailing for Spain whose 1492 voyages to the Americas initiated the European colonization of the "New World."' },
      { term: 'Treaty of Tordesillas', definition: 'A 1494 agreement between Spain and Portugal aimed at settling conflicts over lands newly discovered or explored by their navigators.' },
      { term: 'Mercantilism', definition: 'An economic policy designed to maximize the exports and minimize the imports for an economy, often through the exploitation of colonies.' },
      { term: 'Colony', definition: 'A territory under the immediate political control of a state, distinct from the home territory of the sovereign.' },
      { term: 'Mother Country', definition: 'The country from which the settlers of a territory originally came; the imperial power in a colonial relationship.' },
      { term: 'Transatlantic Slave Trade', definition: 'The forced transportation of millions of enslaved Africans across the Atlantic Ocean to the Americas from the 16th to the 19th century.' },
      { term: 'Scramble for Africa', definition: 'The invasion, occupation, division, and colonization of most of Africa by seven Western European powers during a short period known as New Imperialism (1881-1914).' },
      { term: 'Berlin Conference (1884-1885)', definition: 'A meeting that regulated European colonization and trade in Africa and resulted in the formal partition of the continent.' },
      { term: 'British Empire', definition: 'The largest empire in history, which at its height included dominions, colonies, protectorates, mandates, and other territories ruled or administered by the United Kingdom.' },
      { term: 'East India Company', definition: 'A British joint-stock company that grew to account for half of the world\'s trade, particularly in commodities like cotton, silk, and tea, and effectively ruled India.' },
      { term: 'Conquistadors', definition: 'Spanish soldiers, explorers, and fortune hunters who took part in the conquest of the Americas in the 16th century.' },
      { term: 'Aztec Empire', definition: 'A powerful Mesoamerican empire in central Mexico that was conquered by Spanish conquistador Hernán Cortés in 1521.' },
      { term: 'Inca Empire', definition: 'The largest empire in pre-Columbian America, located in the Andean region of South America, conquered by Spanish conquistador Francisco Pizarro.' },
      { term: 'Raw Materials', definition: 'Basic materials from which a product is made, such as cotton, rubber, and minerals, which were heavily extracted from colonies.' },
      { term: 'Legacy of Colonialism', definition: 'The long-term effects of colonialism, including arbitrary borders, economic dependency, political instability, and cultural hybridity.' },
      { term: 'New Imperialism', definition: 'A period of colonial expansion by European powers, the United States, and Japan during the late 19th and early 20th centuries.' },
      { term: 'Demographic Catastrophe', definition: 'The massive decline of the indigenous population of the Americas after European arrival, primarily due to disease.' },
      { term: 'Cash Crop', definition: 'A crop produced for its commercial value rather than for use by the grower (e.g., sugar, cotton, tobacco).' },
      { term: 'Indochina', definition: 'The name for the French colonies in Southeast Asia, comprising modern-day Vietnam, Laos, and Cambodia.' },
      { term: 'Dutch East Indies', definition: 'The Dutch colony that became modern Indonesia.' },
      { term: 'Arbitrary Borders', definition: 'Boundaries drawn by colonial powers in Africa and Asia, ignoring local ethnic or linguistic groups, which have caused later conflict.' },
      { term: 'Hernán Cortés', definition: 'The Spanish Conquistador who led the expedition that caused the fall of the Aztec Empire.' },
      { term: 'Francisco Pizarro', definition: 'The Spanish conquistador who led the conquest of the Inca Empire.' },
      { term: 'Joint-Stock Company', definition: 'A business entity in which shares of the company\'s stock can be bought and sold by shareholders. A key tool of early colonialism (e.g., British EIC, Dutch VOC).' },
      { term: 'Civilizing Mission', definition: 'The concept that colonizers had a duty to bring Western civilization to what they perceived as "backward" peoples. It was a justification for colonialism.' },
      { term: 'Middle Passage', definition: 'The stage of the triangular trade in which millions of Africans were forcibly transported to the New World as part of the Atlantic slave trade.' },
      { term: 'Plantation', definition: 'A large-scale estate, generally centered on a plantation house, meant for farming that specializes in cash crops.' },
      { term: 'Bartolomeu Dias', definition: 'A Portuguese explorer who was the first European to sail around the southernmost tip of Africa in 1488.' },
      { term: 'Prince Henry the Navigator', definition: 'A central figure in the early days of the Portuguese Empire, responsible for sponsoring many voyages of exploration.' },
      { 'term': 'King Leopold II', 'definition': 'The King of Belgium who founded and brutally exploited the Congo Free State as his private venture.' },
      { 'term': 'Congo Free State', 'definition': 'A large state in Central Africa from 1885 to 1908, which was in a personal union with the Kingdom of Belgium under Leopold II. Notorious for atrocities.' },
      { 'term': 'Suez Canal', 'definition': 'An artificial sea-level waterway in Egypt, connecting the Mediterranean Sea to the Red Sea. Its control was vital for Britain\'s route to India.' },
      { 'term': 'Opium Wars', 'definition': 'Two wars waged between the Qing dynasty and Western powers in the mid-19th century over the British trade in opium, resulting in a Chinese defeat.' },
      { 'term': 'Hong Kong', 'definition': 'An island ceded to the British Empire by the Qing dynasty of China after the First Opium War (1839–42).' },
      { 'term': 'Settler Colony', 'definition': 'A form of colonialism where foreign families move into a region and reproduce, aiming to displace the indigenous population (e.g., USA, Australia).' },
      { 'term': 'Protectorate', 'definition': 'A state that is controlled and protected by another sovereign state, maintaining a local ruler but ceding control of foreign policy.' },
      { 'term': 'Sphere of Influence', 'definition': 'A country or area in which another country has power to affect developments although it has no formal authority.' },
      { 'term': 'Toussaint Louverture', 'definition': 'The most prominent leader of the Haitian Revolution, the only successful slave revolt in modern history.' },
      { 'term': 'Haitian Revolution', 'definition': 'A successful insurrection by self-liberated slaves against French colonial rule in Saint-Domingue, now the sovereign state of Haiti.' },
      { 'term': 'Cecil Rhodes', 'definition': 'A British mining magnate and politician in southern Africa who served as Prime Minister of the Cape Colony and was a fervent imperialist.' },
      { 'term': 'Boer Wars', 'definition': 'Two wars fought during 1880–81 and 1899–1902 by the British Empire against the Dutch-speaking settlers (Boers) of two independent Boer republics in Southern Africa.' },
      { 'term': 'Social Darwinism', 'definition': 'The application of ideas about evolution and "survival of the fittest" to human societies, used as a justification for imperialist expansion.' },
      { 'term': 'Monroe Doctrine', 'definition': 'A United States policy of opposing European colonialism in the Americas beginning in 1823.' },
      { 'term': 'Spanish-American War', 'definition': 'A conflict in 1898 between Spain and the United States, the result of which was the end of Spanish colonialism in the Americas and the acquisition of territories by the US.' },
      { 'term': 'Informal Empire', 'definition': 'The spheres of influence which an empire may develop that are not part of its formal colonial system, based on economic and political dominance.' }
    ]
  },
  {
    id: '3',
    title: 'India and European Colonialism',
    description: 'Colonial powers in India — Portuguese, British, Dutch, French',
    content: `### The Portuguese Arrival and Dominance ###

The quest for a direct sea route to India, driven by the highly profitable spice trade, led Europeans to its shores. The Portuguese were the first to arrive, with Vasco da Gama landing in Calicut in 1498. They aimed to break the monopoly of Venetian and Arab merchants on the spice trade. The Portuguese established a number of coastal forts and trading posts, with Goa becoming their main base and capital of their "Estado da Índia" (State of India) after its capture in 1510. Their strategy was not to conquer large land empires but to control the sea lanes of the Indian Ocean through naval superiority. They established the "Cartaz" system, a naval trade license that non-Portuguese ships were required to buy, enforced by their powerful fleets.

### The Dutch and other European Rivals ###

Following the Portuguese, the Dutch arrived in the early 17th century. The Dutch East India Company (Verenigde Oostindische Compagnie, or VOC), established in 1602, was a formidable military and commercial power. While their primary focus was on the spice-rich islands of Indonesia (the "Spice Islands"), they also established trading posts in India, in places like Surat, Cochin, and Nagapattinam. They were major commercial rivals to the Portuguese, eventually displacing them from many of their strongholds in Asia. Other European powers like the Danes and the Swedes also had minor trading posts, but they were never major players in the subcontinent.

### The Rise of the British East India Company ###

The English, through the British East India Company (EIC), chartered in 1600, gradually became the dominant European power. They initially focused purely on trade, establishing "factories" (fortified trading posts) in Surat (1613), Madras (Chennai), Bombay (Mumbai), and Calcutta (Kolkata). A key turning point was receiving Bombay as part of a dowry in 1661 and gaining a royal charter to acquire territory and wage war. The EIC's fortunes changed dramatically in the mid-18th century as the Mughal Empire, the dominant power in India, began to decline after the death of Emperor Aurangzeb in 1707. This created a power vacuum, with various regional powers vying for supremacy, which the EIC skillfully exploited.

### The Anglo-French Carnatic Wars ###

The French also established their own French East India Company (Compagnie française pour le commerce des Indes orientales) and became the primary rivals to the British in the mid-18th century. The Anglo-French rivalry in India was a direct extension of their frequent conflicts in Europe and North America. The Carnatic Wars (1746-1763) were a series of military conflicts fought between the British and French, along with their respective local allies, for control over Southern India. The brilliant French governor Joseph-François Dupleix initially had success using Indian sepoys trained in European tactics. However, the British, under the dynamic leadership of figures like Robert Clive, ultimately proved victorious. The British victory at the Battle of Wandiwash (1760) was decisive, effectively ending French ambitions of building a territorial empire in India.

### From Traders to Rulers: Plassey and Buxar ###

The Battle of Plassey (1757) is a pivotal moment in Indian history. Robert Clive's EIC forces, through conspiracy and bribery, defeated the much larger army of the Nawab of Bengal, Siraj-ud-Daulah. Though it was a small battle, its political consequences were immense. It marked the beginning of British political dominance in India, giving them control over the rich province of Bengal. The subsequent Battle of Buxar (1764) was even more significant militarily. The EIC decisively defeated the combined armies of the Mughal Emperor, the Nawab of Awadh, and the deposed Nawab of Bengal. This victory confirmed British power and led to the Treaty of Allahabad (1765), which granted the EIC the 'Diwani'—the right to collect revenue from Bengal, Bihar, and Orissa. This gave the EIC vast financial resources, which they used to expand their military and administrative control, completing the transition from a trading company to a ruling power.`,
    quiz: [
        {
          question: 'Which European nation was the first to establish a direct sea route to India?',
          options: ['Netherlands', 'Great Britain', 'France', 'Portugal'],
          correctAnswer: 'Portugal',
          explanation: 'Portugal, with Vasco da Gama\'s voyage in 1498, was the first European power to establish a direct sea route to India around Africa.'
        },
        {
          question: 'The Battle of Plassey in 1757 was a decisive victory for which entity?',
          options: ['The French East India Company', 'The Mughal Empire', 'The British East India Company', 'The Maratha Empire'],
          correctAnswer: 'The British East India Company',
          explanation: 'The Battle of Plassey was a pivotal victory for the British East India Company, led by Robert Clive, which established its political and military supremacy in Bengal.'
        },
        {
          question: 'The Carnatic Wars were fought between which two European powers for control over Southern India?',
          options: ['British and Dutch', 'Portuguese and Dutch', 'British and French', 'French and Portuguese'],
          correctAnswer: 'British and French',
          explanation: 'The Carnatic Wars (1746-1763) were a series of military conflicts between the British and French East India Companies for control and influence in Southern India.'
        },
        {
          question: 'What right did the British East India Company gain after the Battle of Buxar?',
          options: ['The right to mint coins', 'The Diwani of Bengal', 'The monopoly on salt trade', 'The title of Emperor of India'],
          correctAnswer: 'The Diwani of Bengal',
          explanation: 'After the Battle of Buxar (1764), the Mughal Emperor granted the EIC the Diwani—the right to collect revenue from Bengal, Bihar, and Orissa, which massively increased its resources.'
        },
        {
            question: 'What was the "Cartaz" system implemented by the Portuguese?',
            options: ['A system of religious conversion', 'A type of fortress', 'A naval trade license to control sea lanes', 'A military alliance with Indian rulers'],
            correctAnswer: 'A naval trade license to control sea lanes',
            explanation: 'The Portuguese used their naval power to force other ships in the Indian Ocean to buy a "Cartaz" (license) to trade, thereby controlling commerce.'
        },
        {
            question: 'The Dutch East India Company was known by which acronym?',
            options: ['DEIC', 'EIC', 'VOC', 'FEIC'],
            correctAnswer: 'VOC',
            explanation: 'VOC stands for "Verenigde Oostindische Compagnie," which is Dutch for United East India Company.'
        },
        {
            question: 'Which city, received as part of a royal dowry, became a major headquarters for the British EIC?',
            options: ['Madras (Chennai)', 'Calcutta (Kolkata)', 'Surat', 'Bombay (Mumbai)'],
            correctAnswer: 'Bombay (Mumbai)',
            explanation: 'Bombay was part of the dowry of Catherine of Braganza, a Portuguese princess, when she married King Charles II of England in 1661. He then leased it to the EIC.'
        },
        {
            question: 'Who was the ambitious French Governor-General who was a major rival to Robert Clive?',
            options: ['Louis XIV', 'Marquis de Bussy-Castelnau', 'Joseph-François Dupleix', 'Napoleon Bonaparte'],
            correctAnswer: 'Joseph-François Dupleix',
            explanation: 'Dupleix was the Governor-General of French India and a key figure in the Carnatic Wars, known for his strategy of using trained Indian sepoys.'
        },
        {
            question: 'The Battle of Wandiwash (1760) was a decisive defeat for which European power in India?',
            options: ['The Portuguese', 'The Dutch', 'The French', 'The Danes'],
            correctAnswer: 'The French',
            explanation: 'The British victory at the Battle of Wandiwash shattered French ambitions in India and was a turning point in the Third Carnatic War.'
        },
        {
            question: 'Siraj-ud-Daulah, who was defeated at Plassey, was the Nawab of which province?',
            options: ['Awadh', 'Hyderabad', 'Carnatic', 'Bengal'],
            correctAnswer: 'Bengal',
            explanation: 'Siraj-ud-Daulah was the last independent Nawab of Bengal. His defeat marked the beginning of EIC rule.'
        },
        {
            question: 'What was the primary commodity that first attracted Europeans to trade with India?',
            options: ['Cotton textiles', 'Gold and diamonds', 'Spices', 'Tea'],
            correctAnswer: 'Spices',
            explanation: 'Spices like pepper, cloves, and cinnamon were extremely valuable in Europe, and the desire to control this trade was the initial driver of exploration.'
        },
        {
            question: 'Which city, founded by the EIC, became the capital of British India until 1911?',
            options: ['Bombay', 'Madras', 'Calcutta', 'Delhi'],
            correctAnswer: 'Calcutta',
            explanation: 'Calcutta (now Kolkata), centered around Fort William, served as the capital of British India from the 18th century until it was moved to Delhi in 1911.'
        },
        {
            question: 'The decline of which Indian empire created the power vacuum that Europeans exploited?',
            options: ['The Maratha Empire', 'The Vijayanagara Empire', 'The Mughal Empire', 'The Gupta Empire'],
            correctAnswer: 'The Mughal Empire',
            explanation: 'The weakening of the central Mughal authority after 1707 allowed regional powers and European companies to vie for control.'
        },
        {
            question: 'A "factory" in the context of the East India Company was a:',
            options: ['Place for manufacturing goods', 'Fortified trading post and warehouse', 'Shipbuilding yard', 'School for local children'],
            correctAnswer: 'Fortified trading post and warehouse',
            explanation: 'The term "factory" referred to the office and residence of the "factors" or agents of the company, and the warehouses where goods were stored.'
        },
        {
            question: 'The Treaty of Allahabad (1765) was signed after which battle?',
            options: ['Battle of Plassey', 'First Carnatic War', 'Battle of Buxar', 'Battle of Wandiwash'],
            correctAnswer: 'Battle of Buxar',
            explanation: 'The treaty was signed following the decisive British victory at Buxar, formalizing their control over Bengal by granting them Diwani rights.'
        },
        {
            question: 'Which of these was the first major British settlement in Southern India?',
            options: ['Goa', 'Cochin', 'Madras', 'Surat'],
            correctAnswer: 'Madras',
            explanation: 'The British established Fort St. George in Madras (now Chennai) in 1644, which became their primary center in the south.'
        },
        {
            question: 'The main interest of the Dutch East India Company (VOC) was in:',
            options: ['The spice trade of Indonesia', 'The cotton trade of Gujarat', 'The diamonds of Golconda', 'The politics of Delhi'],
            correctAnswer: 'The spice trade of Indonesia',
            explanation: 'While the VOC had posts in India, its primary focus and source of wealth was the control of the spice-producing islands of what is now Indonesia.'
        },
        {
            question: 'Robert Clive was a key figure who worked for which organization?',
            options: ['The British Government', 'The French East India Company', 'The Dutch East India Company', 'The British East India Company'],
            correctAnswer: 'The British East India Company',
            explanation: 'Robert Clive was an employee (a "writer" or clerk who rose to become a military commander) of the EIC, not a direct government official, during his key victories.'
        },
        {
            question: 'The policy of "Subsidiary Alliance" was a tool used by the British to:',
            options: ['Promote free trade', 'Encourage local rulers to be independent', 'Gain indirect control over Indian states', 'Build railways and canals'],
            correctAnswer: 'Gain indirect control over Indian states',
            explanation: 'Through Subsidiary Alliances, Indian rulers were forced to accept British troops and a British "resident" in their court, effectively losing their sovereignty.'
        },
        {
            question: 'The "Doctrine of Lapse" was a policy of annexation associated with which Governor-General?',
            options: ['Lord Wellesley', 'Robert Clive', 'Lord Dalhousie', 'Warren Hastings'],
            correctAnswer: 'Lord Dalhousie',
            explanation: 'The Doctrine of Lapse stated that any princely state without a natural heir would be annexed by the British, a policy that created great resentment.'
        },
        {
            question: 'Vasco da Gama landed in which port city in 1498?',
            options: ['Goa', 'Bombay', 'Calicut', 'Cochin'],
            correctAnswer: 'Calicut',
            explanation: 'Vasco da Gama\'s fleet landed in Calicut (now Kozhikode) in Kerala, which was a major trading port on the Malabar Coast.'
        },
        {
            question: 'The Portuguese lost control of which important trading post to the British in 1622 with Persian help?',
            options: ['Goa', 'Hormuz', 'Diu', 'Malacca'],
            correctAnswer: 'Hormuz',
            explanation: 'The capture of Hormuz (Ormus) in the Persian Gulf was a major blow to Portuguese power and a significant victory for the British EIC.'
        },
        {
            question: 'In the 17th century, the main export from India for the EIC was:',
            options: ['Spices', 'Cotton textiles', 'Tea', 'Iron and steel'],
            correctAnswer: 'Cotton textiles',
            explanation: 'Indian textiles, particularly calico and muslin, were in extremely high demand in Europe, and formed the bulk of the EIC\'s early trade.'
        },
        {
            question: 'Who was the Mughal emperor who granted the EIC the right to reside and build factories in Surat?',
            options: ['Akbar', 'Aurangzeb', 'Jahangir', 'Shah Jahan'],
            correctAnswer: 'Jahangir',
            explanation: 'After Sir Thomas Roe\'s embassy to the Mughal court, Emperor Jahangir granted a firman (royal decree) to the EIC allowing them to establish a factory in Surat.'
        },
        {
            question: 'Mir Jafar was installed as the puppet Nawab of Bengal by the British after which battle?',
            options: ['Battle of Buxar', 'Battle of Wandiwash', 'Battle of Plassey', 'First Carnatic War'],
            correctAnswer: 'Battle of Plassey',
            explanation: 'Mir Jafar was the commander who betrayed Siraj-ud-Daulah and was made the Nawab by Clive as a reward, becoming the first of the puppet rulers under the EIC.'
        },
        {
            question: 'The term "sepoy" refers to:',
            options: ['A British officer', 'An Indian soldier trained and commanded by Europeans', 'A French diplomat', 'A Portuguese merchant'],
            correctAnswer: 'An Indian soldier trained and commanded by Europeans',
            explanation: 'The European companies, particularly the French and British, raised large armies of Indian soldiers, known as sepoys, to fight their wars.'
        },
        {
            question: 'Which of these was NOT a major British EIC presidency?',
            options: ['Bengal (Calcutta)', 'Bombay', 'Madras', 'Goa'],
            correctAnswer: 'Goa',
            explanation: 'Goa was the center of Portuguese power in India. The three major British administrative centers, or Presidencies, were Bengal, Bombay, and Madras.'
        },
        {
            question: 'The primary aim of the Portuguese "Estado da Índia" was:',
            options: ['To conquer the entire Indian subcontinent', 'To establish a Christian kingdom in India', 'To control the maritime trade of the Indian Ocean', 'To assimilate into Indian society'],
            correctAnswer: 'To control the maritime trade of the Indian Ocean',
            explanation: 'The Portuguese aimed to create a seaborne empire ("thalassocracy") based on controlling key ports and trade routes, not on large-scale land conquest.'
        },
        {
            question: 'The French headquarters in India was located at:',
            options: ['Chandernagore', 'Pondicherry', 'Mahe', 'Karaikal'],
            correctAnswer: 'Pondicherry',
            explanation: 'Pondicherry (now Puducherry) was the capital of French India.'
        },
        {
            question: 'What was the Black Hole of Calcutta?',
            options: ['A British victory', 'A story of an incident where British prisoners were held in a small dungeon', 'A French fortress', 'A treaty signed in Calcutta'],
            correctAnswer: 'A story of an incident where British prisoners were held in a small dungeon',
            explanation: 'The Black Hole of Calcutta was an alleged incident where the Nawab of Bengal, Siraj-ud-Daulah, held British prisoners of war in a tiny dungeon, leading to many deaths. It was used as a pretext for British retaliation.'
        },
        {
            question: 'The battle of Colachel (1741) was a significant victory for which Indian kingdom against a European power?',
            options: ['The Marathas against the British', 'The Kingdom of Travancore against the Dutch', 'The Mughals against the Portuguese', 'The Sikhs against the French'],
            correctAnswer: 'The Kingdom of Travancore against the Dutch',
            explanation: 'The victory of the Travancore army under King Marthanda Varma over the Dutch East India Company ended Dutch colonial ambitions in Kerala.'
        },
        {
            question: 'The "drain of wealth" theory, which criticized British economic policies, was famously proposed by:',
            options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dadabhai Naoroji', 'B.R. Ambedkar'],
            correctAnswer: 'Dadabhai Naoroji',
            explanation: 'Dadabhai Naoroji argued that Britain was draining India of its wealth and resources, which benefited Britain at India\'s expense.'
        },
        {
            question: 'The first "factory" of the English East India Company was established at which location?',
            options: ['Madras', 'Hooghly', 'Surat', 'Bombay'],
            correctAnswer: 'Surat',
            explanation: 'The EIC established its first trading post, or "factory", in Surat in 1613 after receiving permission from the Mughal emperor Jahangir.'
        },
        {
            question: 'The Regulating Act of 1773 was the first step by the British government to:',
            options: ['Grant India independence', 'Control and regulate the affairs of the East India Company', 'Ban trade with India', 'Declare war on France'],
            correctAnswer: 'Control and regulate the affairs of the East India Company',
            explanation: 'Due to widespread corruption in the EIC, the British Parliament passed the Regulating Act to bring its activities under government oversight.'
        },
        {
            question: 'Which Indian product was a major focus for the French East India Company?',
            options: ['Spices', 'Indigo', 'Cotton textiles', 'Tea'],
            correctAnswer: 'Cotton textiles',
            explanation: 'Like the British, the French were heavily involved in the trade of Indian cotton textiles, which were in high demand in Europe.'
        },
        {
            question: 'The city of Goa was captured by the Portuguese from which kingdom?',
            options: ['The Sultanate of Bijapur', 'The Vijayanagara Empire', 'The Mughal Empire', 'The Zamorin of Calicut'],
            correctAnswer: 'The Sultanate of Bijapur',
            explanation: 'Afonso de Albuquerque, the Portuguese governor, conquered Goa from the Sultan of Bijapur in 1510.'
        },
        {
            question: 'Which of the following was a reason for the success of European companies in India?',
            options: ['Superior numbers of soldiers', 'Support from all Indian rulers', 'Lack of unity among Indian powers and superior military technology', 'Better understanding of Indian culture'],
            correctAnswer: 'Lack of unity among Indian powers and superior military technology',
            explanation: 'Europeans exploited the rivalries between Indian princes and had an advantage in terms of disciplined infantry, artillery, and naval power.'
        },
        {
            question: 'The War of the Austrian Succession in Europe directly led to which conflict in India?',
            options: ['The Battle of Plassey', 'The First Carnatic War', 'The Battle of Buxar', 'The Second Anglo-Maratha War'],
            correctAnswer: 'The First Carnatic War',
            explanation: 'The rivalry between Britain and France in Europe often spilled over into their colonies, and the War of the Austrian Succession was the direct cause of the First Carnatic War.'
        },
        {
            question: 'The Danish East India company had its main trading post at:',
            options: ['Cochin', 'Surat', 'Tranquebar', 'Calcutta'],
            correctAnswer: 'Tranquebar',
            explanation: 'The Danes established a colony at Tranquebar (Tharangambadi) in Tamil Nadu in 1620, which remained their primary base in India.'
        },
        {
            question: 'What is a "monopoly"?',
            options: ['A type of ship', 'Exclusive control of the supply or trade in a commodity or service', 'A form of government', 'A military strategy'],
            correctAnswer: 'Exclusive control of the supply or trade in a commodity or service',
            explanation: 'The European East India Companies were granted monopolies by their governments, meaning no other company from their country could legally trade in that region.'
        },
        {
            question: 'Which European power controlled the colony of Ceylon (modern Sri Lanka) before the British took it over?',
            options: ['Portugal', 'France', 'The Netherlands', 'Denmark'],
            correctAnswer: 'The Netherlands',
            explanation: 'The Dutch captured Ceylon from the Portuguese and controlled it until the British took over during the Napoleonic Wars.'
        },
        {
            question: 'The British policy of creating "ring-fences" was designed to:',
            options: ['Build walls around their cities', 'Create buffer zones around their territories by defending their neighbours\' frontiers', 'Isolate their factories from local populations', 'Promote free movement of goods'],
            correctAnswer: 'Create buffer zones around their territories by defending their neighbours\' frontiers',
            explanation: 'This was an early defensive policy where the EIC would enter into alliances with states on its borders to protect its own core territories from attack.'
        },
        {
            question: 'The Anglo-Dutch rivalries in Asia were primarily focused on control of what?',
            options: ['The silk trade', 'The spice trade', 'The cotton trade', 'The slave trade'],
            correctAnswer: 'The spice trade',
            explanation: 'The intense competition over the highly profitable spice trade, especially in the Indonesian archipelago, was the main source of conflict between the English and the Dutch.'
        },
        {
            question: 'Who was the first governor of the "Estado da Índia"?',
            options: ['Vasco da Gama', 'Afonso de Albuquerque', 'Francisco de Almeida', 'Pedro Álvares Cabral'],
            correctAnswer: 'Francisco de Almeida',
            explanation: 'Dom Francisco de Almeida was appointed the first governor and viceroy of the Portuguese State of India in 1505.'
        },
        {
            question: 'The system of "dual government" in Bengal, introduced by Robert Clive, meant that:',
            options: ['The British and French ruled together', 'The company controlled revenues and the army, while the Nawab handled civil administration', 'Hindus and Muslims had separate governments', 'Bengal was divided into two provinces'],
            correctAnswer: 'The company controlled revenues and the army, while the Nawab handled civil administration',
            explanation: 'This system gave the EIC power without responsibility, leading to massive corruption and the devastating Bengal famine of 1770.'
        },
        {
            question: 'The use of mobile, ship-mounted cannons gave which European power a major advantage in the Indian Ocean?',
            options: ['The French', 'The British', 'The Dutch', 'The Portuguese'],
            correctAnswer: 'The Portuguese',
            explanation: 'The ability of Portuguese ships to fire powerful cannons without ramming or boarding enemy vessels was a revolutionary naval tactic at the time and key to their dominance.'
        },
        {
            question: 'The EIC was eventually abolished and its powers transferred to the British Crown after which event?',
            options: ['The Battle of Plassey', 'The Napoleonic Wars', 'The Indian Revolt of 1857', 'The First World War'],
            correctAnswer: 'The Indian Revolt of 1857',
            explanation: 'The Revolt of 1857 convinced the British government that a private company could no longer be trusted to govern a vast territory like India, leading to the establishment of the British Raj.'
        },
        {
            question: 'In the Carnatic Wars, the British and French supported rival candidates for the throne of which Indian state?',
            options: ['Bengal', 'Mysore', 'Hyderabad', 'Maratha Confederacy'],
            correctAnswer: 'Hyderabad',
            explanation: 'A key aspect of the Carnatic Wars was the European powers intervening in local succession disputes, such as the one for the Nizam of Hyderabad, to gain influence.'
        },
        {
            question: 'Which of the following cities was NOT a major center for the Portuguese in India?',
            options: ['Goa', 'Daman and Diu', 'Bombay', 'Calcutta'],
            correctAnswer: 'Calcutta',
            explanation: 'Calcutta was a major British settlement. The Portuguese presence was concentrated on the western coast, with bases like Goa, Daman, and Diu.'
        }
    ],
    flashcards: [
      { term: 'Vasco da Gama', definition: 'Portuguese explorer who in 1498 became the first European to reach India by sea, landing in Calicut.' },
      { term: 'Goa', definition: 'A state in western India which served as the main base and capital of Portuguese India for over 450 years.' },
      { term: 'Cartaz System', definition: 'A naval trade license or pass issued by the Portuguese in the Indian Ocean during the 16th century, a tool to control trade.' },
      { term: 'Dutch East India Company (VOC)', definition: 'A chartered company established in 1602, which became a major rival to the Portuguese and British in Asian trade.' },
      { term: 'British East India Company (EIC)', definition: 'An English company formed in 1600 to trade in the Indian Ocean region, which eventually came to rule large areas of India.' },
      { term: 'Factory (Trading Post)', definition: 'A term used for a trading post where merchants and goods were housed, not a place of manufacturing. Examples: Surat, Madras, Calcutta.' },
      { term: 'Mughal Empire', definition: 'The dominant power in the Indian subcontinent from the mid-16th to the early 18th century, whose decline created a power vacuum.' },
      { term: 'French East India Company', definition: 'The primary European rival to the British East India Company in the 18th century.' },
      { term: 'Robert Clive', definition: 'A key British figure in the EIC who was instrumental in establishing British political supremacy in India, especially through his victory at Plassey.' },
      { term: 'Carnatic Wars', definition: 'A series of military conflicts (1746-1763) between the British, the French, and their local allies for control of Southern India.' },
      { term: 'Siraj-ud-Daulah', definition: 'The last independent Nawab of Bengal, who was defeated by the British at the Battle of Plassey.' },
      { term: 'Battle of Plassey (1757)', definition: 'A decisive victory for the British EIC over the Nawab of Bengal, marking the start of British rule in India.' },
      { term: 'Battle of Buxar (1764)', definition: 'A battle that consolidated British power after Plassey, leading to the EIC gaining revenue rights in Bengal.' },
      { term: 'Diwani Rights', definition: 'The right to collect revenue (taxes) from a territory, granted to the EIC for Bengal, Bihar, and Orissa after the Battle of Buxar.' },
      { term: 'Subsidiary Alliance', definition: 'A policy devised by Lord Wellesley where Indian rulers were forced to accept British forces in their territory and pay for their maintenance.' },
      { term: 'Doctrine of Lapse', definition: 'A policy of annexation started by Lord Dalhousie, where any princely state without a natural heir would be annexed by the British.' },
      { term: 'Surat', definition: 'An important port city in Gujarat where the British East India Company established its first factory in India.' },
      { term: 'Madras (Chennai)', definition: 'Site of Fort St. George, one of the first major British settlements and a key center for the EIC in the south.' },
      { term: 'Calcutta (Kolkata)', definition: 'Site of Fort William, which became the capital of British India until 1911.' },
      { term: 'Bombay (Mumbai)', definition: 'An archipelago of seven islands that was part of a dowry from Portugal to England and became a major EIC headquarters.' },
      { term: 'Estado da Índia', definition: 'The name for the Portuguese colonial possessions in India and the wider Indian Ocean region.' },
      { term: 'Afonso de Albuquerque', definition: 'A Portuguese general and governor of India who was instrumental in establishing the Portuguese colonial empire in the Indian Ocean.' },
      { term: 'Joseph-François Dupleix', definition: 'The Governor-General of French India and a rival of Robert Clive. He pioneered the strategy of using trained Indian soldiers (sepoys).' },
      { term: 'Sepoy', definition: 'An Indian soldier serving under British or other European orders. The backbone of the Company armies.' },
      { term: 'Battle of Wandiwash (1760)', definition: 'A decisive battle in the Third Carnatic War where the British decisively defeated the French.' },
      { term: 'Treaty of Allahabad (1765)', definition: 'The treaty signed after the Battle of Buxar, which granted the EIC Diwani rights and marked a major step in its transformation into a ruling power.' },
      { term: 'Mir Jafar', definition: 'The commander who betrayed Siraj-ud-Daulah at Plassey and was made a puppet Nawab by the British.' },
      { term: 'Dual Government', definition: 'A system introduced by Clive in Bengal where the EIC had control over revenue and the military while the Nawab had responsibility for civil administration, leading to abuse of power.' },
      { term: 'Calicut', definition: 'A major port on the Malabar Coast of India where Vasco da Gama first landed in 1498.' },
      { term: 'Sir Thomas Roe', definition: 'An English diplomat who was an ambassador to the Mughal court of Emperor Jahangir, securing permission for the EIC to trade.' },
      { 'term': 'Fort William', 'definition': 'A fortification built in Calcutta by the British East India Company, which became the center of the Bengal Presidency.' },
      { 'term': 'Fort St. George', 'definition': 'The first English fortress in India, founded in 1644 at the coastal city of Madras.' },
      { 'term': 'Pondicherry', 'definition': 'The capital city of the French colonial possessions in India.' },
      { 'term': 'Monopoly', 'definition': 'The exclusive possession or control of the supply of or trade in a commodity or service. The EIC held a monopoly on English trade with the East.' },
      { 'term': 'Firman', 'definition': 'A royal decree or mandate issued by a sovereign in certain historical Islamic states, like the one Jahangir gave to the EIC.' },
      { 'term': 'Malabar Coast', 'definition': 'The southwestern coast of the Indian subcontinent, famous for its spice trade.' },
      { 'term': 'Coromandel Coast', 'definition': 'The southeastern coast region of the Indian subcontinent, where the British and French fought for dominance.' },
      { 'term': 'Battle of Colachel (1741)', 'definition': 'A significant battle where the army of the Kingdom of Travancore defeated the forces of the Dutch East India Company.' },
      { 'term': 'Black Hole of Calcutta', 'definition': 'An incident in which British prisoners of war were allegedly held in a small dungeon, used by the EIC as a justification for war.' },
      { 'term': 'Regulating Act of 1773', 'definition': 'The first act of the British Parliament to control the territories of the East India Company.' },
      { 'term': 'Pitt\'s India Act of 1784', 'definition': 'An act that established a Board of Control to further bring the East India Company\'s rule in India under the control of the British Government.' },
      { 'term': 'Warren Hastings', 'definition': 'The first Governor-General of Bengal, who was famously impeached by the British Parliament for corruption.' },
      { 'term': 'Lord Wellesley', 'definition': 'A Governor-General famous for introducing the Subsidiary Alliance system, which greatly expanded British influence.' },
      { 'term': 'Lord Dalhousie', 'definition': 'A Governor-General known for introducing the Doctrine of Lapse, railways, postal system, and telegraph.' },
      { 'term': 'Drain of Wealth Theory', 'definition': 'A theory by Dadabhai Naoroji that argued Britain was enriching itself by draining India of its economic resources.' },
      { 'term': 'Thalassocracy', 'definition': 'A state with primarily maritime realms—an empire at sea (like the Portuguese aimed for), as opposed to a land-based empire.' },
      { 'term': 'Presidency', 'definition': 'An administrative subdivision of British India. The three main ones were Bengal, Bombay, and Madras.' },
      { 'term': 'Joint-Stock Company', 'definition': 'A company whose stock is owned jointly by the shareholders. The EICs were early examples of these powerful entities.' },
      { 'term': 'Hyder Ali', 'definition': 'The ruler of the Kingdom of Mysore in southern India and a formidable opponent of the British East India Company during the Anglo-Mysore Wars.' },
      { 'term': 'Tipu Sultan', 'definition': 'Son of Hyder Ali, known as the "Tiger of Mysore." He continued the fight against the British and was a pioneer of rocket artillery.' }
    ]
  },
  {
    id: '4',
    title: 'Colonialism and the Marathas',
    description: 'Interactions between European powers, Afghans, Siddis, and the Maratha Empire',
    content: `### The Rise of the Maratha Empire ###

The Maratha Empire, which rose to prominence in the 17th century under the visionary leadership of Chhatrapati Shivaji Maharaj, was a formidable indigenous power. Carving a kingdom out of the declining Sultanates of the Deccan, Shivaji Maharaj challenged the might of the Mughal Empire under Aurangzeb. He was a master of guerrilla warfare (known as Ganimi Kava) and a brilliant administrator, establishing a powerful and efficient state based on principles of justice and local governance. The Maratha Empire, at its peak, controlled a vast territory across western and central India and was a major obstacle to British expansion.

### Coastal Conflicts: Portuguese and the Siddis ###

The Maratha relationship with the Portuguese was one of early and consistent conflict. The Portuguese controlled key coastal territories like Goa, and the Marathas, under Shivaji and later his son Sambhaji, fought to check their influence and expand their own control over the Konkan coast. These conflicts were over territory, trade, and religious tensions. The Siddis of Janjira, naval mercenaries of Abyssinian (African) origin, were another coastal power. They controlled the unconquerable sea fort of Janjira and were often allied with the Mughals and the Portuguese against the Marathas, leading to numerous, hard-fought naval and land-based campaigns. Shivaji Maharaj recognized the importance of naval power and built a strong navy to counter these coastal threats.

### The Afghan Threat and the Battle of Panipat ###

In the mid-18th century, as Maratha influence spread northwards to control Delhi, they came into direct conflict with the Afghan ruler, Ahmad Shah Abdali (also known as Ahmad Shah Durrani). Abdali invaded India multiple times to plunder its wealth. This rivalry culminated in the Third Battle of Panipat in 1761. The Marathas, under the command of Sadashivrao Bhau, suffered a catastrophic defeat. The battle was a massive blow to their prestige and power, resulting in the death of many of their key leaders. It effectively checked their northward expansion and created a power vacuum in north India that the British would eventually exploit.

### The Anglo-Maratha Wars: The Final Showdown ###

The most significant interaction for the Marathas was with the British, leading to three Anglo-Maratha Wars that ultimately decided the fate of India.
**First Anglo-Maratha War (1775-1782):** This war began with the British interfering in the complex Peshwa succession politics in Pune. The Marathas, united under the brilliant statesman Nana Phadnavis, inflicted a humiliating defeat on the British at the Battle of Wadgaon. The war was largely a stalemate, concluding with the Treaty of Salbai, which restored the pre-war status quo but gave the British the island of Salsette and a 20-year period of peace.

**Second Anglo-Maratha War (1803-1805):** This war was a result of deep internal divisions within the Maratha Confederacy. The Peshwa, Baji Rao II, feeling threatened by other Maratha chiefs, signed the Treaty of Bassein (1802), a subsidiary alliance with the British. This treaty was seen as a surrender of independence by other powerful Maratha chiefs like the Scindias and Holkars, who then went to war with the British. The British, under generals like Arthur Wellesley (later the Duke of Wellington), decisively defeated the disunited Maratha armies, leading to significant territorial losses for the Marathas.

**Third Anglo-Maratha War (1817-1818):** This was the final and decisive conflict. The Peshwa, chafing under British control, attempted one last time to rally the Maratha chiefs and throw off British rule. The attempt failed disastrously. The British decisively defeated the last vestiges of Maratha power. The Peshwaship was abolished, and the last Peshwa, Baji Rao II, was pensioned off and exiled. The Maratha Empire was extinguished, and its vast territories were annexed by the British, cementing their status as the paramount power in India.`,
    quiz: [
        {
          question: 'Who was the founder of the Maratha Empire?',
          options: ['Peshwa Baji Rao I', 'Sambhaji Maharaj', 'Chhatrapati Shivaji Maharaj', 'Mahadaji Scindia'],
          correctAnswer: 'Chhatrapati Shivaji Maharaj',
          explanation: 'Chhatrapati Shivaji Maharaj is credited with founding the Maratha Empire in the 17th century and establishing a strong base for its future expansion.'
        },
        {
          question: 'The Third Battle of Panipat (1761) was fought between the Marathas and whom?',
          options: ['The British', 'The Mughals', 'The Portuguese', 'Ahmad Shah Abdali'],
          correctAnswer: 'Ahmad Shah Abdali',
          explanation: 'The Third Battle of Panipat was a major conflict between the Maratha Empire and the invading Afghan army led by Ahmad Shah Abdali.'
        },
        {
          question: 'Which treaty concluded the First Anglo-Maratha War?',
          options: ['Treaty of Bassein', 'Treaty of Salbai', 'Treaty of Surat', 'Treaty of Pune'],
          correctAnswer: 'Treaty of Salbai',
          explanation: 'The First Anglo-Maratha War ended with the Treaty of Salbai in 1782, which resulted in a 20-year period of peace between the two powers.'
        },
        {
          question: 'What was the ultimate outcome of the Third Anglo-Maratha War?',
          options: ['A Maratha victory', 'A restoration of Maratha territories', 'The abolition of the Peshwaship and British annexation', 'A long-term truce'],
          correctAnswer: 'The abolition of the Peshwaship and British annexation',
          explanation: 'The Third Anglo-Maratha War resulted in a decisive British victory, the end of the Maratha Empire, the abolition of the Peshwa\'s rule, and the annexation of most Maratha territory.'
        },
        {
            question: 'The Siddis of Janjira, who were often in conflict with the Marathas, were naval mercenaries of what origin?',
            options: ['Persian', 'Turkish', 'African (Abyssinian)', 'Arab'],
            correctAnswer: 'African (Abyssinian)',
            explanation: 'The Siddis were descendants of East African sailors, merchants, and mercenaries, and they established a powerful, unconquered state centered on the Janjira sea fort.'
        },
        {
            question: 'What was the Marathi term for the guerrilla warfare tactics used by Shivaji Maharaj?',
            options: ['Sardeshmukhi', 'Chauthai', 'Ganimi Kava', 'Ashta Pradhan'],
            correctAnswer: 'Ganimi Kava',
            explanation: 'Ganimi Kava refers to the guerrilla tactics of surprise raids and swift attacks, which were perfected by Shivaji Maharaj and were highly effective against larger, slower armies.'
        },
        {
            question: 'The signing of which treaty by Peshwa Baji Rao II led to the Second Anglo-Maratha War?',
            options: ['Treaty of Salbai', 'Treaty of Allahabad', 'Treaty of Bassein', 'Treaty of Lahore'],
            correctAnswer: 'Treaty of Bassein',
            explanation: 'The Treaty of Bassein was a subsidiary alliance with the British, which other Maratha leaders saw as a betrayal and a surrender of Maratha independence.'
        },
        {
            question: 'Who was the Maratha commander at the Third Battle of Panipat?',
            options: ['Peshwa Balaji Baji Rao', 'Sadashivrao Bhau', 'Malharrao Holkar', 'Vishwasrao'],
            correctAnswer: 'Sadashivrao Bhau',
            explanation: 'Sadashivrao Bhau was the cousin of the Peshwa and the commander-in-chief of the Maratha army at Panipat, where he was killed in battle.'
        },
        {
            question: 'The British suffered a humiliating defeat at which battle during the First Anglo-Maratha War?',
            options: ['Battle of Assaye', 'Battle of Plassey', 'Battle of Wadgaon', 'Battle of Delhi'],
            correctAnswer: 'Battle of Wadgaon',
            explanation: 'The Battle of Wadgaon was a decisive Maratha victory where they trapped the British force and forced them to sign a treaty favorable to the Marathas.'
        },
        {
            question: 'Who was the astute Maratha statesman who held the confederacy together against the British during the First Anglo-Maratha War?',
            options: ['Baji Rao II', 'Mahadaji Scindia', 'Nana Phadnavis', 'Yashwantrao Holkar'],
            correctAnswer: 'Nana Phadnavis',
            explanation: 'Nana Phadnavis was a brilliant minister and the political brain behind the Maratha resistance during the First Anglo-Maratha War.'
        },
        {
            question: 'The abolition of the Peshwaship meant the end of the rule of which family?',
            options: ['The Scindia family', 'The Holkar family', 'The Bhonsle family', 'The Bhat family (Peshwas)'],
            correctAnswer: 'The Bhat family (Peshwas)',
            explanation: 'The Peshwas were hereditary prime ministers from the Bhat family who became the de facto rulers of the Maratha Empire from their base in Pune.'
        },
        {
            question: 'Which future British hero gained his reputation in the Second Anglo-Maratha War?',
            options: ['Robert Clive', 'Lord Cornwallis', 'Arthur Wellesley (Duke of Wellington)', 'Warren Hastings'],
            correctAnswer: 'Arthur Wellesley (Duke of Wellington)',
            explanation: 'Arthur Wellesley, who would later defeat Napoleon at Waterloo, won decisive victories at Assaye and Argaon during the Second Anglo-Maratha War.'
        },
        {
            question: 'The Maratha Empire was not a single state but a:',
            options: ['Democracy', 'Confederacy', 'Dictatorship', 'Vassal of the Mughals'],
            correctAnswer: 'Confederacy',
            explanation: 'The Maratha Empire was a confederacy of powerful, semi-independent chiefs (like Scindia, Holkar, Gaekwad, Bhonsle) who were theoretically loyal to the Peshwa.'
        },
        {
            question: 'Chhatrapati Shivaji Maharaj established his capital at which fort?',
            options: ['Pratapgad', 'Panhala', 'Sinhagad', 'Raigad'],
            correctAnswer: 'Raigad',
            explanation: 'Shivaji Maharaj was coronated at Raigad fort, which he made the capital of his kingdom.'
        },
        {
            question: 'What was the primary reason for Ahmad Shah Abdali\'s invasions of India?',
            options: ['To spread Islam', 'To conquer and rule India', 'To plunder the wealth of North India', 'To form an alliance with the Marathas'],
            correctAnswer: 'To plunder the wealth of North India',
            explanation: 'Abdali\'s main objective was to loot the riches of the decaying Mughal Empire and carry the wealth back to Afghanistan.'
        },
        {
            question: 'Which of these was a major consequence of the Third Battle of Panipat?',
            options: ['The Marathas conquered Afghanistan', 'It paved the way for British expansion in North India', 'Ahmad Shah Abdali became the Emperor of India', 'The Mughal Empire was restored to its former glory'],
            correctAnswer: 'It paved the way for British expansion in North India',
            explanation: 'The defeat of the Marathas created a power vacuum in North India which the British East India Company was able to exploit in the following decades.'
        },
        {
            question: 'Who was the last Peshwa of the Maratha Empire?',
            options: ['Balaji Vishwanath', 'Baji Rao I', 'Madhavrao I', 'Baji Rao II'],
            correctAnswer: 'Baji Rao II',
            explanation: 'Baji Rao II was the last Peshwa. He was defeated in the Third Anglo-Maratha War and exiled by the British.'
        },
        {
            question: 'The Marathas fought with the Portuguese for control over which coastal region?',
            options: ['Coromandel Coast', 'Malabar Coast', 'Konkan Coast', 'Northern Circars'],
            correctAnswer: 'Konkan Coast',
            explanation: 'The Konkan coast, the region south of Mumbai including Goa, was the primary theater of conflict between the Marathas and the Portuguese.'
        },
        {
            question: 'A key reason for the Maratha defeat in the Second and Third Anglo-Maratha wars was:',
            options: ['Lack of bravery', 'Inferior numbers', 'Internal disunity and rivalries', 'Lack of knowledge of the terrain'],
            correctAnswer: 'Internal disunity and rivalries',
            explanation: 'The infighting and rivalries among the major Maratha chiefs (Scindia, Holkar, etc.) were skillfully exploited by the British, who fought them one by one.'
        },
        {
            question: 'After the Third Anglo-Maratha War, the heartland of the Maratha empire became part of which British presidency?',
            options: ['Bengal Presidency', 'Madras Presidency', 'Bombay Presidency', 'Punjab Province'],
            correctAnswer: 'Bombay Presidency',
            explanation: 'The territories of the Peshwa, centered around Pune, were annexed and incorporated into the expanding Bombay Presidency.'
        },
        {
            question: 'The Maratha revenue demands of "Chauth" and "Sardeshmukhi" were essentially:',
            options: ['Religious tithes', 'Trade tariffs', 'Taxes collected for protection from surrounding territories', 'Fines for breaking laws'],
            correctAnswer: 'Taxes collected for protection from surrounding territories',
            explanation: 'Chauth (one-fourth of revenue) and Sardeshmukhi (an additional tenth) were taxes the Marathas demanded from territories they dominated but did not administer directly.'
        },
        {
            question: 'Which Maratha ruler expanded the empire to its greatest extent, reaching as far as Attock in the north?',
            options: ['Shivaji Maharaj', 'Sambhaji Maharaj', 'Peshwa Baji Rao I', 'Peshwa Madhavrao I'],
            correctAnswer: 'Peshwa Baji Rao I',
            explanation: 'Peshwa Baji Rao I was a brilliant military strategist who never lost a battle and greatly expanded Maratha influence across North and Central India.'
        },
        {
            question: 'The sea fort of Janjira was the stronghold of:',
            options: ['The Portuguese', 'The British', 'The Marathas', 'The Siddis'],
            correctAnswer: 'The Siddis',
            explanation: 'The fort of Janjira was famously impregnable and remained the capital of the Siddis despite numerous Maratha attempts to capture it.'
        },
        {
            question: 'What was the immediate cause for the start of the First Anglo-Maratha War?',
            options: ['A Maratha attack on Bombay', 'A British attack on Pune', 'The British supporting a rival claimant to the Peshwa throne', 'A dispute over trade rights'],
            correctAnswer: 'The British supporting a rival claimant to the Peshwa throne',
            explanation: 'The British EIC in Bombay signed the Treaty of Surat to support the claim of Raghunathrao for the Peshwaship in exchange for territory, thus starting the war.'
        },
        {
            question: 'The Holkars were a powerful Maratha dynasty based in which city?',
            options: ['Gwalior', 'Baroda', 'Nagpur', 'Indore'],
            correctAnswer: 'Indore',
            explanation: 'The Holkars ruled as the Maharajas of Indore. Gwalior was ruled by the Scindias, Baroda by the Gaekwads, and Nagpur by the Bhonsles.'
        },
        {
            question: 'Sambhaji Maharaj, the son of Shivaji Maharaj, was captured and executed by which ruler?',
            options: ['Ahmad Shah Abdali', 'The Portuguese Viceroy', 'The Siddi of Janjira', 'The Mughal Emperor Aurangzeb'],
            correctAnswer: 'The Mughal Emperor Aurangzeb',
            explanation: 'After a prolonged struggle, Sambhaji Maharaj was captured by Mughal forces in 1689 and executed under the orders of Aurangzeb.'
        },
        {
            question: 'The British strategy in the Second Anglo-Maratha War was to:',
            options: ['Fight a single decisive battle', 'Engage and defeat the Maratha chiefs separately', 'Use only naval power', 'Negotiate a peaceful settlement'],
            correctAnswer: 'Engage and defeat the Maratha chiefs separately',
            explanation: 'The British successfully implemented a "divide and conquer" strategy, preventing the powerful Maratha chiefs from uniting their forces against them.'
        },
        {
            question: 'The Maratha navy was founded by:',
            options: ['The Peshwas', 'Kanhoji Angre', 'Chhatrapati Shivaji Maharaj', 'The Siddis'],
            correctAnswer: 'Chhatrapati Shivaji Maharaj',
            explanation: 'Shivaji Maharaj is considered the "Father of the Indian Navy" as he was the first Indian ruler in the medieval period to establish a formal naval force to protect the coast.'
        },
        {
            question: 'What is the significance of the Treaty of Salbai?',
            options: ['It ended the Maratha Empire', 'It gave the British control over all of India', 'It established a 20-year peace between the British and Marathas', 'It made the French the dominant power'],
            correctAnswer: 'It established a 20-year peace between the British and Marathas',
            explanation: 'The treaty ended the First Anglo-Maratha war on a note of relative parity and led to a two-decade-long peace, during which the British consolidated their power elsewhere.'
        },
        {
            question: 'Mahadaji Scindia was a powerful Maratha ruler who controlled territory around which major city?',
            options: ['Pune', 'Delhi', 'Calcutta', 'Madras'],
            correctAnswer: 'Delhi',
            explanation: 'In the late 18th century, Mahadaji Scindia was the de facto ruler of Delhi and served as the protector of the weakened Mughal Emperor.'
        },
        {
            question: 'The Pindaris were:',
            options: ['A Maratha warrior clan', 'A religious sect', 'Irregular military plunderers associated with the Maratha armies', 'A group of British spies'],
            correctAnswer: 'Irregular military plunderers associated with the Maratha armies',
            explanation: 'The British campaign to suppress the Pindaris became entangled with their conflict with the Maratha chiefs, leading to the Third Anglo-Maratha War.'
        },
        {
            question: 'The Battle of Assaye was a major victory for:',
            options: ['The Marathas over the British', 'The British under Arthur Wellesley over the Marathas', 'The French over the Marathas', 'The Afghans over the Marathas'],
            correctAnswer: 'The British under Arthur Wellesley over the Marathas',
            explanation: 'It was one of the first major victories for Wellesley in India and a key battle of the Second Anglo-Maratha War, despite the British being heavily outnumbered.'
        },
        {
            question: 'The Maratha light cavalry was particularly famous for its:',
            options: ['Heavy armor', 'Use of cannons', 'Speed and mobility', 'Defensive formations'],
            correctAnswer: 'Speed and mobility',
            explanation: 'The Maratha cavalry was renowned for its lightning-fast raids and ability to cover vast distances quickly, which was a key part of their military success.'
        },
        {
            question: 'The Ashta Pradhan Mandal was:',
            options: ['A council of eight ministers established by Shivaji Maharaj', 'A group of eight Maratha warrior families', 'A tax collected by the Marathas', 'A treaty between eight Maratha chiefs'],
            correctAnswer: 'A council of eight ministers established by Shivaji Maharaj',
            explanation: 'The Ashta Pradhan (Council of Eight) was the administrative and advisory council set up by Chhatrapati Shivaji Maharaj to govern his kingdom.'
        },
        {
            question: 'Who succeeded Chhatrapati Shivaji Maharaj?',
            options: ['Rajaram', 'Shahu', 'Sambhaji', 'Baji Rao'],
            correctAnswer: 'Sambhaji',
            explanation: 'Sambhaji Maharaj was the elder son of Shivaji Maharaj and succeeded him as the second Chhatrapati of the Maratha Empire.'
        },
        {
            question: 'Which of the following was NOT a major Maratha family in the confederacy?',
            options: ['Scindia of Gwalior', 'Holkar of Indore', 'Nizam of Hyderabad', 'Gaekwad of Baroda'],
            correctAnswer: 'Nizam of Hyderabad',
            explanation: 'The Nizam of Hyderabad was the ruler of a separate, rival state and was not part of the Maratha Confederacy.'
        },
        {
            question: 'The period after the death of Aurangzeb in 1707 saw:',
            options: ['The strengthening of the Mughal Empire', 'The rapid expansion of Maratha power', 'The end of European involvement in India', 'A long period of peace and stability'],
            correctAnswer: 'The rapid expansion of Maratha power',
            explanation: 'The death of the strong emperor Aurangzeb led to the weakening of the Mughal central authority, which the Marathas under the Peshwas exploited to expand their empire.'
        },
        {
            question: 'The British acquisition of Salsette and Bassein gave them control over the area around which major port?',
            options: ['Calcutta', 'Madras', 'Bombay', 'Goa'],
            correctAnswer: 'Bombay',
            explanation: 'The islands of Salsette and Bassein were strategically important for the defense and growth of the British port of Bombay.'
        },
        {
            question: 'What was the final destination of the exiled Peshwa Baji Rao II?',
            options: ['London, England', 'Varanasi, India', 'Bithur, near Kanpur', 'Rangoon, Burma'],
            correctAnswer: 'Bithur, near Kanpur',
            explanation: 'The British exiled Baji Rao II to Bithur with a large pension. His adopted son, Nana Saheb, would later be a key figure in the Revolt of 1857.'
        },
        {
            question: 'The Maratha conflict with the Nizam of Hyderabad was primarily over the control of which region?',
            options: ['The Deccan', 'Bengal', 'Punjab', 'The Carnatic'],
            correctAnswer: 'The Deccan',
            explanation: 'The Marathas and the Nizam were the two major powers of the Deccan plateau and were constantly in conflict for supremacy over the region.'
        },
        {
            question: 'Kanhoji Angre was a famous Maratha:',
            options: ['General', 'Prime Minister', 'Naval Commander', 'Poet'],
            correctAnswer: 'Naval Commander',
            explanation: 'Kanhoji Angre was a highly successful Maratha admiral who commanded a powerful fleet and challenged European naval power on the western coast.'
        },
        {
            question: 'A key feature of the Subsidiary Alliance was that the Indian ruler had to:',
            options: ['Disband his own army', 'Pay for the maintenance of a British force stationed in his territory', 'Convert to Christianity', 'Only trade with Britain'],
            correctAnswer: 'Pay for the maintenance of a British force stationed in his territory',
            explanation: 'The ruler had to pay a "subsidy" for the British troops, which was often so high that it crippled the state\'s finances, leading to further British control.'
        },
        {
            question: 'The defeat at Panipat was a particularly big blow to the Marathas because:',
            options: ['They lost their entire treasury', 'They lost an entire generation of their best leaders and soldiers', 'The British immediately attacked them', 'It caused a massive famine'],
            correctAnswer: 'They lost an entire generation of their best leaders and soldiers',
            explanation: 'The scale of the casualties, including the deaths of Sadashivrao Bhau and the Peshwa\'s son, was immense and took the Marathas years to recover from.'
        },
        {
            question: 'Which of the following forts was famously conquered by Tanaji Malusare for Shivaji Maharaj?',
            options: ['Raigad', 'Pratapgad', 'Kondhana (Sinhagad)', 'Janjira'],
            correctAnswer: 'Kondhana (Sinhagad)',
            explanation: 'The capture of Kondhana is a celebrated tale of Maratha bravery, where Tanaji Malusare famously sacrificed his life, leading Shivaji to remark, "Gad ala, pan sinha gela" (The fort is won, but the lion is lost).'
        },
        {
            question: 'After 1818, the paramount power in India was unquestionably:',
            options: ['The Mughals', 'The Marathas', 'The French', 'The British'],
            correctAnswer: 'The British',
            explanation: 'With the final defeat of their last major Indian rivals, the Marathas, the British East India Company became the undisputed supreme power in the subcontinent.'
        },
        {
            question: 'Yashwantrao Holkar was a Maratha chief who notably defeated a British force under:',
            options: ['Arthur Wellesley', 'Colonel Monson', 'Lord Lake', 'Robert Clive'],
            correctAnswer: 'Colonel Monson',
            explanation: 'Yashwantrao Holkar inflicted a disastrous defeat on Colonel Monson\'s force during the Second Anglo-Maratha War, a rare setback for the British.'
        },
        {
            question: 'The city of Pune was the administrative seat of which Maratha figure?',
            options: ['The Chhatrapati', 'The Scindias', 'The Peshwas', 'The Holkars'],
            correctAnswer: 'The Peshwas',
            explanation: 'Pune, specifically the Shaniwar Wada, was the administrative capital and seat of power for the Peshwas.'
        },
        {
            question: 'The Maratha Empire\'s expansion was checked in the south by which powerful kingdom?',
            options: ['The Kingdom of Travancore', 'The Sultanate of Bijapur', 'The Kingdom of Mysore', 'The Vijayanagara Empire'],
            correctAnswer: 'The Kingdom of Mysore',
            explanation: 'Under rulers like Hyder Ali and Tipu Sultan, the Kingdom of Mysore was a powerful, modernised state that fiercely resisted Maratha expansion in the south.'
        }
    ],
    flashcards: [
      { term: 'Maratha Empire', definition: 'A powerful Hindu warrior group from the western Deccan Plateau that rose to prominence in the 17th C and controlled a large part of India.' },
      { term: 'Chhatrapati Shivaji Maharaj', definition: 'The founder of the Maratha Empire, known for his pioneering guerilla warfare tactics and administrative skills.' },
      { term: 'Peshwa', definition: 'The equivalent of a modern Prime Minister in the Maratha Empire. Over time, the Peshwas became the de facto rulers of the empire.' },
      { term: 'Konkan Coast', definition: 'The rugged section of the western coastline of India, a key area of conflict between the Marathas, Portuguese, and Siddis.' },
      { term: 'Siddis of Janjira', definition: 'A community of African descent who established a state on the western coast of India and were often naval adversaries of the Marathas.' },
      { term: 'Ahmad Shah Abdali', definition: 'The founder of the Durrani Empire and king of Afghanistan who invaded India and defeated the Marathas at the Third Battle of Panipat.' },
      { term: 'Third Battle of Panipat (1761)', definition: 'A catastrophic defeat for the Marathas against Ahmad Shah Abdali, which halted their expansion and created a power vacuum in North India.' },
      { term: 'Anglo-Maratha Wars', definition: 'A series of three wars fought between the British East India Company and the Maratha Empire between 1775 and 1818.' },
      { term: 'First Anglo-Maratha War (1775-1782)', definition: 'The first of three wars, which began with British involvement in Peshwa succession and ended in a stalemate with the Treaty of Salbai.' },
      { term: 'Treaty of Salbai (1782)', definition: 'The treaty that ended the First Anglo-Maratha War, recognizing the British possession of Salsette but otherwise restoring the status quo.' },
      { term: 'Second Anglo-Maratha War (1803-1805)', definition: 'Resulted from the Peshwa accepting a subsidiary alliance with the British, leading to major Maratha defeats and territorial loss.' },
      { term: 'Treaty of Bassein (1802)', definition: 'A subsidiary alliance treaty signed by Peshwa Baji Rao II with the British, a key cause of the Second Anglo-Maratha War.' },
      { term: 'Third Anglo-Maratha War (1817-1818)', definition: 'The final and decisive conflict that resulted in the complete defeat of the Marathas and the end of their empire.' },
      { term: 'Baji Rao II', definition: 'The last Peshwa of the Maratha Empire, whose signing of the Treaty of Bassein and subsequent rebellion led to the empire\'s downfall.' },
      { term: 'Abolition of Peshwaship', definition: 'The outcome of the Third Anglo-Maratha War, where the British dissolved the office of the Peshwa and pensioned off Baji Rao II.' },
      { term: 'Maratha Confederacy', definition: 'A union of powerful Maratha chiefs (e.g., Scindia, Holkar, Gaekwad, Bhonsle) who were theoretically subordinate to the Peshwa but often acted independently.' },
      { term: 'Guerilla Warfare', definition: 'A form of irregular warfare in which small groups of combatants use military tactics including ambushes, sabotage, and raids. Famously used by Shivaji Maharaj.' },
      { term: 'Salsette Island', definition: 'An island which includes the city of Mumbai, gained by the British from the Marathas as part of the Treaty of Salbai.' },
      { term: 'Arthur Wellesley', definition: 'A British commander (later Duke of Wellington) who achieved decisive victories against the Marathas in the Second Anglo-Maratha War.' },
      { term: 'Paramount Power', definition: 'The status the British achieved in India after defeating major rivals like the Marathas, becoming the supreme political authority in the subcontinent.' },
      { term: 'Ganimi Kava', definition: 'The Marathi term for the guerrilla warfare tactics perfected by Shivaji Maharaj.' },
      { term: 'Sadashivrao Bhau', definition: 'The commander-in-chief of the Maratha army at the Third Battle of Panipat, who died in the conflict.' },
      { term: 'Battle of Wadgaon', definition: 'A battle in the First Anglo-Maratha War where the Marathas inflicted a decisive defeat on the British.' },
      { term: 'Nana Phadnavis', definition: 'An influential minister and statesman of the Maratha Empire during the Peshwa administration in Pune.' },
      { term: 'Raigad Fort', definition: 'The hill fort that served as the capital of Chhatrapati Shivaji Maharaj\'s empire.' },
      { term: 'Sambhaji Maharaj', definition: 'The second Chhatrapati of the Maratha Empire, son of Shivaji, who fought valiantly against the Mughal Empire.' },
      { term: 'Aurangzeb', definition: 'The Mughal emperor who spent the latter part of his reign in a long and costly war against the Marathas in the Deccan.' },
      { term: 'Chauth and Sardeshmukhi', definition: 'Taxes levied by the Marathas on territories they controlled or from which they offered protection.' },
      { term: 'Peshwa Baji Rao I', definition: 'A celebrated general and Peshwa who is credited with expanding the Maratha Empire to its zenith.' },
      { term: 'Holkars of Indore', definition: 'A prominent Maratha clan and ruling dynasty of the Maratha Confederacy.' },
      { term: 'Scindias of Gwalior', definition: 'A Hindu Maratha dynasty that ruled the Gwalior State, a major power in the confederacy.' },
      { term: 'Gaekwads of Baroda', definition: 'A Hindu dynasty of Maratha origin that ruled the princely state of Baroda in western India.' },
      { term: 'Bhonsles of Nagpur', definition: 'A Maratha dynasty that ruled the Kingdom of Nagpur in central India.' },
      { term: 'Pune', definition: 'The administrative seat of the Peshwas and the political center of the Maratha Empire in the 18th century.' },
      { term: 'Treaty of Surat', definition: 'A treaty signed between the British and a claimant to the Peshwa throne, Raghunathrao, which was a precursor to the First Anglo-Maratha War.' },
      { term: 'Mahadaji Scindia', definition: 'A powerful Maratha ruler of Gwalior who dominated North Indian politics in the late 18th century and was the regent of the Mughal Emperor.' },
      { term: 'Pindaris', definition: 'Bands of irregular horsemen and plunderers in central India who were associated with the Maratha armies. The British campaign against them led to the Third Anglo-Maratha War.' },
      { term: 'Ashta Pradhan', definition: 'A council of eight ministers that administered the Maratha empire, established by Shivaji Maharaj.' },
      { term: 'Kanhoji Angre', definition: 'A skilled Maratha naval chief who controlled the western coast of India and was a formidable opponent to European naval forces.' },
      { term: 'Shaniwar Wada', definition: 'A historical fortification in the city of Pune in Maharashtra, India. It was the seat of the Peshwas of the Maratha Empire until 1818.' },
      { 'term': 'Hyder Ali', 'definition': 'Ruler of the Kingdom of Mysore and a constant adversary of the Marathas in the south.' },
      { 'term': 'Tipu Sultan', 'definition': 'Son of Hyder Ali, who continued his father\'s struggle against the Marathas and the British.' },
      { 'term': 'Raghunathrao', 'definition': 'A claimant to the Peshwa throne whose ambition and alliance with the British led to the First Anglo-Maratha War.' },
      { 'term': 'Madhavrao I', 'definition': 'A highly capable Peshwa who restored Maratha power and prestige after the disaster at Panipat.' },
      { 'term': 'Battle of Assaye', 'definition': 'A major battle of the Second Anglo-Maratha War where a British EIC army under Arthur Wellesley defeated a larger Maratha force.' },
      { 'term': 'Janjira Fort', 'definition': 'An impregnable sea fort off the Konkan coast that was the capital of the Siddis.' },
      { 'term': 'Maratha Navy', 'definition': 'A strong naval force established by Shivaji Maharaj to protect the Maratha coastline and challenge European sea power.' },
      { 'term': 'Deccan', 'definition': 'The large plateau in southern India which was the heartland of the Maratha-Mughal and Maratha-Nizam conflicts.' },
      { 'term': 'Tanaji Malusare', 'definition': 'A Maratha military leader famous for his heroic capture of the Kondhana fort, after which it was renamed Sinhagad.' },
      { 'term': 'Paramountcy', 'definition': 'The principle by which the British claimed supreme power over the Indian princely states after defeating major rivals like the Marathas.' }
    ]
  },
  {
    id: '5',
    title: 'India: Social and Religious Reforms',
    description: 'Social & religious reform movements in India, including princely states',
    content: `### The Context for Reform ###

The 19th century in India was a period of profound intellectual and social ferment. The consolidation of British rule, the introduction of Western education and modern communications, and the work of Christian missionaries posed a significant challenge to traditional Indian society and religious beliefs. In response, a number of educated Indians initiated various social and religious reform movements. These movements aimed to modernize Indian society by challenging deeply entrenched social evils, reinterpreting religious tenets, and promoting a rational and humane worldview.

### Brahmo Samaj and Raja Ram Mohan Roy ###

One of the earliest and most influential reformers was Raja Ram Mohan Roy, often called the "Father of Modern India." In 1828, he founded the Brahmo Sabha (which later became the Brahmo Samaj) in Calcutta. The Brahmo Samaj advocated for monotheism (worship of one God) based on the Upanishads and condemned practices like idol worship, polytheism, and meaningless rituals. Ram Mohan Roy is most famous for his relentless campaign against Sati, the horrific practice of a widow immolating herself on her husband's funeral pyre. His tireless efforts, which involved petitioning the British government and citing ancient Hindu texts, were instrumental in the passing of the Bengal Sati Regulation in 1829, which banned the practice. He also championed women's rights and advocated for the introduction of modern, scientific education in India.

### Arya Samaj and Swami Dayananda Saraswati ###

Swami Dayananda Saraswati founded the Arya Samaj in Bombay in 1875. His motto was "Go back to the Vedas," as he believed the Vedas were the infallible, divinely inspired source of all true knowledge and that later Hindu texts like the Puranas were responsible for corrupt practices. The Arya Samaj strongly worked against idol worship, the rigid hereditary caste system, child marriage, and untouchability. It actively promoted female education and the right of widows to remarry. The Arya Samaj also started the Shuddhi movement, a purification ritual to reconvert Hindus who had converted to other religions like Islam and Christianity.

### Satyashodhak Samaj and the Phules ###

In Western India, Jyotiba Phule and his wife Savitribai Phule led a powerful movement against caste and gender discrimination. Jyotiba Phule, who came from a lower caste, founded the Satyashodhak Samaj (Society of Truth Seekers) in 1873. Its primary aim was to fight for the social and economic rights of the non-Brahmin lower-caste people (whom he termed Bahujans) and liberate them from the oppression of the Brahmin elite. He advocated for education as the main tool for liberation. Savitribai Phule is revered as a pioneer of women's education in India. Together, they opened the first school for girls in Pune in 1848, a revolutionary act at the time.

### Ramakrishna Mission and Swami Vivekananda ###

The Ramakrishna Mission was founded by Swami Vivekananda in 1897, inspired by the teachings of his guru, the mystic saint Sri Ramakrishna Paramahamsa. Vivekananda's message was one of spiritual revival and practical, selfless service. He famously introduced Hindu philosophy (specifically Vedanta) to the Western world at the 1893 Parliament of the World's Religions in Chicago. The Ramakrishna Mission did not focus on changing rituals but on a synthesis of Eastern spirituality and Western practicality. It focused on the principle of "service to man is service to God" (Daridra Narayana Seva) and established numerous hospitals, schools, orphanages, and disaster relief operations.

### Other Important Reform Movements ###

Several other movements contributed to this era of change. The Aligarh Movement, led by Sir Syed Ahmed Khan, promoted modern, scientific education among Muslims and founded the Muhammadan Anglo-Oriental College, which later became Aligarh Muslim University. In Bengal, Ishwar Chandra Vidyasagar was a relentless campaigner for the remarriage of widows, leading to the Hindu Widows' Remarriage Act of 1856. The Prarthana Samaj in Maharashtra and the Theosophical Society also worked towards social and religious reform. These diverse movements played a crucial role in shaping a modern Indian identity and laying the intellectual foundations for the later nationalist movement.`,
    quiz: [
      {
        question: 'Who is known as the "Father of Modern India" and founded the Brahmo Samaj?',
        options: ['Swami Vivekananda', 'Dayananda Saraswati', 'Raja Ram Mohan Roy', 'Jyotiba Phule'],
        correctAnswer: 'Raja Ram Mohan Roy',
        explanation: 'Raja Ram Mohan Roy is renowned for his efforts to abolish Sati and for founding the Brahmo Samaj to reform Hindu society.'
      },
      {
        question: 'The Arya Samaj was founded by whom with the motto "Go back to the Vedas"?',
        options: ['Swami Vivekananda', 'Dayananda Saraswati', 'Sir Syed Ahmed Khan', 'Savitribai Phule'],
        correctAnswer: 'Dayananda Saraswati',
        explanation: 'Swami Dayananda Saraswati founded the Arya Samaj in 1875 to revive Vedic ideals and challenge social evils like the caste system.'
      },
      {
        question: 'Jyotiba Phule founded which organization to fight for the rights of lower-caste people?',
        options: ['Brahmo Samaj', 'Arya Samaj', 'Ramakrishna Mission', 'Satyashodhak Samaj'],
        correctAnswer: 'Satyashodhak Samaj',
        explanation: 'Jyotiba Phule founded the Satyashodhak Samaj (Society of Truth Seekers) to work for the social and economic rights of the lower castes.'
      },
      {
        question: 'The Aligarh Movement was led by Sir Syed Ahmed Khan to promote what among Muslims?',
        options: ['Traditional religious education', 'Political separatism', 'Modern scientific education', 'Adherence to purdah'],
        correctAnswer: 'Modern scientific education',
        explanation: 'Sir Syed Ahmed Khan started the Aligarh Movement to encourage Muslims to adopt modern, Western-style scientific education to advance socially and economically.'
      },
      {
        question: 'Savitribai Phule is considered a pioneer in which field in India?',
        options: ['Women\'s suffrage', 'Women\'s education', 'Trade union leadership', 'Scientific research'],
        correctAnswer: 'Women\'s education',
        explanation: 'Savitribai Phule, along with her husband Jyotiba Phule, opened the first school for girls in India in 1848, a revolutionary step.'
      },
      {
        question: 'The campaign against the practice of Sati was famously led by:',
        options: ['Swami Vivekananda', 'Raja Ram Mohan Roy', 'Ishwar Chandra Vidyasagar', 'Mahatma Gandhi'],
        correctAnswer: 'Raja Ram Mohan Roy',
        explanation: 'Raja Ram Mohan Roy\'s persistent efforts were crucial in persuading the British government to ban Sati in 1829.'
      },
      {
        question: 'Swami Vivekananda founded which organization based on the principle of "service to man is service to God"?',
        options: ['Arya Samaj', 'Brahmo Samaj', 'Theosophical Society', 'Ramakrishna Mission'],
        correctAnswer: 'Ramakrishna Mission',
        explanation: 'The Ramakrishna Mission, inspired by Sri Ramakrishna Paramahamsa, emphasizes social service like running hospitals and schools as a form of spiritual practice.'
      },
      {
        question: 'The "Shuddhi" movement, aimed at reconverting people to Hinduism, was started by which organization?',
        options: ['Brahmo Samaj', 'Ramakrishna Mission', 'Arya Samaj', 'Satyashodhak Samaj'],
        correctAnswer: 'Arya Samaj',
        explanation: 'The Shuddhi (purification) movement was an initiative of the Arya Samaj to bring individuals who had converted to other faiths back into the Hindu fold.'
      },
      {
        question: 'Ishwar Chandra Vidyasagar was a key figure in the campaign for:',
        options: ['Banning child marriage', 'The remarriage of widows', 'Abolishing the caste system', 'Promoting Western dress'],
        correctAnswer: 'The remarriage of widows',
        explanation: 'Ishwar Chandra Vidyasagar\'s efforts led to the passage of the Hindu Widows\' Remarriage Act in 1856, a landmark social reform.'
      },
      {
        question: 'The Prarthana Samaj was a reform movement primarily active in which region of India?',
        options: ['Bengal', 'Punjab', 'Madras', 'Maharashtra'],
        correctAnswer: 'Maharashtra',
        explanation: 'The Prarthana Samaj was founded in Bombay (now Mumbai) and was an influential reform movement in Western India, similar in its ideology to the Brahmo Samaj.'
      },
      {
        question: 'What does "monotheism" mean, a key principle of the Brahmo Samaj?',
        options: ['Worship of many gods', 'Worship of idols', 'Worship of one God', 'Absence of belief in God'],
        correctAnswer: 'Worship of one God',
        explanation: 'Monotheism is the belief in a single, supreme being. The Brahmo Samaj rejected the polytheism common in popular Hinduism in favor of monotheism based on the Upanishads.'
      },
      {
        question: 'Sir Syed Ahmed Khan founded a college that later became which famous university?',
        options: ['Delhi University', 'Banaras Hindu University', 'Aligarh Muslim University', 'Jamia Millia Islamia'],
        correctAnswer: 'Aligarh Muslim University',
        explanation: 'He founded the Muhammadan Anglo-Oriental College in 1875, which was designed to provide modern education to Muslims and later grew into Aligarh Muslim University.'
      },
      {
        question: 'At which international event did Swami Vivekananda make his famous speech in 1893?',
        options: ['The First World Peace Conference', 'The Olympic Games', 'The Parliament of the World\'s Religions', 'The Universal Exposition'],
        correctAnswer: 'The Parliament of the World\'s Religions',
        explanation: 'Swami Vivekananda\'s address at the Parliament of Religions in Chicago is legendary for its powerful message of universal tolerance and acceptance.'
      },
      {
        question: 'The term "Bahujan" was used by Jyotiba Phule to refer to:',
        options: ['The Brahmin elite', 'The British rulers', 'The non-Brahmin majority, including lower castes and untouchables', 'Educated Indians'],
        correctAnswer: 'The non-Brahmin majority, including lower castes and untouchables',
        explanation: 'Phule used the term "Bahujan" to create a sense of shared identity among the oppressed majority castes in his struggle against the Brahmin-dominated social hierarchy.'
      },
      {
        question: 'Which sacred texts did Swami Dayananda Saraswati consider to be infallible?',
        options: ['The Puranas', 'The Upanishads', 'The Vedas', 'The Ramayana and Mahabharata'],
        correctAnswer: 'The Vedas',
        explanation: 'The central tenet of the Arya Samaj was the supreme and infallible authority of the Vedas, which they believed contained all true scientific and religious knowledge.'
      },
      {
        question: 'The Theosophical Society, which also contributed to reform, was founded by:',
        options: ['Annie Besant and Allan Octavian Hume', 'Madame Blavatsky and Colonel Olcott', 'Swami Vivekananda and Sister Nivedita', 'Jyotiba and Savitribai Phule'],
        correctAnswer: 'Madame Blavatsky and Colonel Olcott',
        explanation: 'The Theosophical Society was founded in New York in 1875 by Helena Blavatsky and Henry Steel Olcott. It later moved its headquarters to Adyar, India, and became influential under Annie Besant.'
      },
      {
        question: 'Which of the following was a major goal of almost all 19th-century reform movements?',
        options: ['The overthrow of British rule', 'The establishment of a Hindu state', 'The elevation of the status of women', 'The rejection of all Western ideas'],
        correctAnswer: 'The elevation of the status of women',
        explanation: 'Issues like women\'s education, abolition of Sati and child marriage, and support for widow remarriage were common themes across most of the major reform movements.'
      },
      {
        question: 'Sri Ramakrishna Paramahamsa, the guru of Swami Vivekananda, was a priest at which temple?',
        options: ['Kashi Vishwanath Temple, Varanasi', 'Dakshineswar Kali Temple, Calcutta', 'Meenakshi Temple, Madurai', 'Jagannath Temple, Puri'],
        correctAnswer: 'Dakshineswar Kali Temple, Calcutta',
        explanation: 'Sri Ramakrishna was a mystic and priest at the Dakshineswar Kali Temple, where he had profound spiritual experiences that attracted many followers, including Vivekananda.'
      },
      {
        question: 'The main difference between the Brahmo Samaj and the Arya Samaj was:',
        options: ['The Brahmo Samaj was for women, the Arya Samaj was for men', 'The Brahmo Samaj was inspired by the Vedas, while the Arya Samaj was inspired by the Upanishads', 'The Brahmo Samaj was more syncretic and influenced by Western thought, while the Arya Samaj was more orthodox and exclusively Vedic', 'The Brahmo Samaj was based in Bombay, the Arya Samaj in Calcutta'],
        correctAnswer: 'The Brahmo Samaj was more syncretic and influenced by Western thought, while the Arya Samaj was more orthodox and exclusively Vedic',
        explanation: 'While both were reform movements, the Brahmo Samaj under Ram Mohan Roy synthesized Hindu and Western ideas, whereas the Arya Samaj under Dayananda Saraswati rejected later developments and called for a return to what it saw as pure Vedic principles.'
      },
      {
        question: 'The term "Satyashodhak" means:',
        options: ['Truth Seeker', 'Vedic Scholar', 'Self-Rule', 'Servant of God'],
        correctAnswer: 'Truth Seeker',
        explanation: 'Satyashodhak Samaj translates to the "Society of Truth Seekers," reflecting its mission to find truth and fight against religious and social hypocrisy.'
      },
      {
        question: 'The Hindu Widows\' Remarriage Act was passed in which year?',
        options: ['1829', '1856', '1875', '1901'],
        correctAnswer: '1856',
        explanation: 'Largely due to the efforts of Ishwar Chandra Vidyasagar, the act was passed in 1856, just before the Revolt of 1857.'
      },
      {
        question: 'What was a primary method used by Raja Ram Mohan Roy to argue for his reforms?',
        options: ['Organizing violent protests', 'Citing ancient Hindu scriptures to show the practice was not sanctioned', 'Calling for a boycott of British goods', 'Ignoring religious texts completely'],
        correctAnswer: 'Citing ancient Hindu scriptures to show the practice was not sanctioned',
        explanation: 'A key part of his strategy was to demonstrate that many social evils, like Sati, were not supported by the most ancient and authoritative Hindu texts.'
      },
      {
        question: 'Which social evil did Jyotiba Phule and Savitribai Phule NOT primarily focus on?',
        options: ['Caste discrimination', 'Lack of education for girls', 'The oppression of "untouchables"', 'The abolition of the zamindari system'],
        correctAnswer: 'The abolition of the zamindari system',
        explanation: 'While they fought for the rights of peasants, their primary focus was on social and cultural oppression (caste and gender), not specifically on the land tenure system of zamindari.'
      },
      {
        question: 'The work of Christian missionaries in India had what effect on Hindu society?',
        options: ['It led to the complete conversion of India to Christianity', 'It prompted Hindu reformers to defend and reform their own religion', 'It had no effect at all', 'It caused the British to ban all religions'],
        correctAnswer: 'It prompted Hindu reformers to defend and reform their own religion',
        explanation: 'The missionaries\' criticism of practices like idol worship and the caste system spurred a response from Hindu intellectuals to reform their society from within.'
      },
      {
        question: 'The concept of "Daridra Narayana Seva" (service to the poor as service to God) is central to the ideology of:',
        options: ['Arya Samaj', 'Satyashodhak Samaj', 'Ramakrishna Mission', 'Aligarh Movement'],
        correctAnswer: 'Ramakrishna Mission',
        explanation: 'This was a key teaching of Swami Vivekananda, who believed that serving humanity, especially the poor and suffering (Daridra Narayana), was a valid and noble path to spiritual realization.'
      },
      {
        question: 'What was the name of the book written by Jyotiba Phule that criticized the caste system?',
        options: ['Satyartha Prakash', 'Gulamgiri (Slavery)', 'Anandmath', 'My Experiments with Truth'],
        correctAnswer: 'Gulamgiri (Slavery)',
        explanation: '"Gulamgiri," written in 1873, is one of Phule\'s most famous texts, drawing a parallel between the condition of American slaves and the lower castes in India.'
      },
      {
        question: 'The reform movements of the 19th century laid the intellectual foundation for what larger movement?',
        options: ['The Industrial Revolution in India', 'The Indian Nationalist Movement', 'The Non-Aligned Movement', 'The Green Revolution'],
        correctAnswer: 'The Indian Nationalist Movement',
        explanation: 'By fostering a sense of pride in Indian culture (while also seeking to reform it) and creating a new class of educated and aware citizens, the reform movements paved the way for the struggle for independence.'
      },
      {
        question: 'The Bengal Sati Regulation of 1829 was passed during the tenure of which Governor-General?',
        options: ['Lord Dalhousie', 'Lord Curzon', 'Lord William Bentinck', 'Lord Cornwallis'],
        correctAnswer: 'Lord William Bentinck',
        explanation: 'Governor-General Lord William Bentinck was sympathetic to Ram Mohan Roy\'s cause and passed the regulation to make the practice of Sati illegal and punishable.'
      },
      {
        question: 'The headquarters of the Theosophical Society in India is located at:',
        options: ['Calcutta', 'Bombay', 'Adyar (Madras)', 'Pune'],
        correctAnswer: 'Adyar (Madras)',
        explanation: 'After its founding in New York, the society moved its international headquarters to Adyar, a neighborhood in present-day Chennai.'
      },
      {
        question: 'Which of these was NOT a practice condemned by the Arya Samaj?',
        options: ['Idol Worship', 'Caste System', 'Study of the Vedas', 'Child Marriage'],
        correctAnswer: 'Study of the Vedas',
        explanation: 'The Arya Samaj did not condemn the study of the Vedas; on the contrary, it held the Vedas as the supreme and infallible source of all knowledge.'
      },
      {
        question: 'Which reformer is associated with the founding of the Deccan Education Society?',
        options: ['Raja Ram Mohan Roy', 'Jyotiba Phule', 'Gopal Ganesh Agarkar and Lokmanya Tilak', 'Swami Dayananda Saraswati'],
        correctAnswer: 'Gopal Ganesh Agarkar and Lokmanya Tilak',
        explanation: 'The Deccan Education Society was founded in 1884 in Pune by prominent figures like Tilak and Agarkar to provide quality modern education, establishing Fergusson College.'
      },
      {
        question: 'The Singh Sabha movement was a social and religious reform movement among which community?',
        options: ['The Muslims', 'The Parsis', 'The Sikhs', 'The Jains'],
        correctAnswer: 'The Sikhs',
        explanation: 'The Singh Sabha movement arose in the late 19th century to revive and reform Sikhism, promote education, and counter the proselytizing activities of Christian missionaries and the Arya Samaj.'
      },
      {
        question: 'Which reformer from Maharashtra wrote the influential text "Shetkaryacha Asud" (The Cultivator\'s Whipcord)?',
        options: ['Gopal Hari Deshmukh', 'Jyotiba Phule', 'B. R. Ambedkar', 'V. D. Savarkar'],
        correctAnswer: 'Jyotiba Phule',
        explanation: '"Shetkaryacha Asud" was another critical work by Jyotiba Phule that detailed the exploitation of the peasant masses.'
      },
      {
        question: 'Debendranath Tagore, father of Rabindranath Tagore, took over the leadership of which organization after Ram Mohan Roy?',
        options: ['Arya Samaj', 'Satyashodhak Samaj', 'Brahmo Samaj', 'Ramakrishna Mission'],
        correctAnswer: 'Brahmo Samaj',
        explanation: 'Debendranath Tagore revitalized the Brahmo Samaj and gave it a formal structure and creed after the death of its founder.'
      },
      {
        question: 'The introduction of what by the British was a major catalyst for the reform movements?',
        options: ['Railways', 'The English language and Western education', 'The game of cricket', 'A new currency'],
        correctAnswer: 'The English language and Western education',
        explanation: 'Western education exposed a section of Indian society to ideas of rationalism, humanism, democracy, and science, which prompted them to re-examine their own society.'
      },
      {
        question: 'Keshub Chandra Sen was associated with a more radical branch of which reform movement?',
        options: ['Brahmo Samaj', 'Arya Samaj', 'Theosophical Society', 'Prarthana Samaj'],
        correctAnswer: 'Brahmo Samaj',
        explanation: 'Keshub Chandra Sen led a more radical faction of the Brahmo Samaj, called the Brahmo Samaj of India, which advocated for more drastic social reforms. However, a controversy over his daughter\'s child marriage led to a split.'
      },
      {
        question: 'The idea of "One religion, one caste, one God for mankind" was a teaching of which reformer from Kerala?',
        options: ['Chattampi Swamikal', 'Narayana Guru', 'Ayyankali', 'Vaikunta Swamikal'],
        correctAnswer: 'Narayana Guru',
        explanation: 'Sri Narayana Guru was a pivotal social reformer from Kerala who led a movement against the rigid caste system and preached a message of spiritual and social equality.'
      },
      {
        question: 'Pandita Ramabai was a prominent Indian social reformer whose work primarily focused on:',
        options: ['The rights of industrial workers', 'The education and emancipation of women', 'The abolition of landlordism', 'Environmental protection'],
        correctAnswer: 'The education and emancipation of women',
        explanation: 'Pandita Ramabai was a champion of women\'s rights and education, founding the Arya Mahila Samaj and the Sharada Sadan to provide housing and education for widows.'
      },
      {
        question: 'The Self-Respect Movement, a major social reform movement, was founded in which region?',
        options: ['Bengal', 'Punjab', 'Maharashtra', 'Tamil Nadu'],
        correctAnswer: 'Tamil Nadu',
        explanation: 'The Self-Respect Movement was founded by E. V. Ramasamy (Periyar) in Tamil Nadu to challenge the Brahminical social hierarchy and promote a rational, atheistic worldview.'
      },
      {
        question: 'What was the primary language used by Swami Dayananda Saraswati for his writings and speeches to reach a wider audience?',
        options: ['Sanskrit', 'English', 'Bengali', 'Hindi'],
        correctAnswer: 'Hindi',
        explanation: 'Although he was a profound Sanskrit scholar, Dayananda Saraswati chose to write his major work, "Satyartha Prakash," and preach in Hindi to make his message accessible to the common people of North India.'
      },
      {
        question: 'The main target of the Aligarh Movement was to:',
        options: ['Reconcile modern scientific knowledge with Islamic faith', 'Overthrow the British', 'Establish a separate Muslim state', 'Revive traditional Islamic education (madrasas)'],
        correctAnswer: 'Reconcile modern scientific knowledge with Islamic faith',
        explanation: 'Sir Syed Ahmed Khan believed that the Muslim community needed to embrace modern education to progress, and he worked to show that this was not incompatible with their religious beliefs.'
      },
      {
        question: 'Which of the following describes the approach of the Prarthana Samaj?',
        options: ['Radical and revolutionary', 'Focused only on political change', 'Gradual and cautious social reform', 'Exclusively religious and spiritual'],
        correctAnswer: 'Gradual and cautious social reform',
        explanation: 'Influenced by the Brahmo Samaj, the Prarthana Samaj in Maharashtra focused on promoting gradual social and religious reform through education and persuasion rather than direct confrontation.'
      },
      {
        question: 'Which reform movement is associated with Annie Besant in India?',
        options: ['Arya Samaj', 'Theosophical Society', 'Ramakrishna Mission', 'Brahmo Samaj'],
        correctAnswer: 'Theosophical Society',
        explanation: 'Annie Besant, an Irish socialist and women\'s rights activist, became the president of the Theosophical Society and played a crucial role in popularizing it in India and linking it to Indian nationalism.'
      },
      {
        question: 'The practice of untouchability was most forcefully challenged by:',
        options: ['Raja Ram Mohan Roy', 'Swami Vivekananda', 'Jyotiba Phule and later B.R. Ambedkar', 'Sir Syed Ahmed Khan'],
        correctAnswer: 'Jyotiba Phule and later B.R. Ambedkar',
        explanation: 'While many reformers opposed untouchability, Jyotiba Phule in the 19th century and Dr. B.R. Ambedkar in the 20th century made the fight against it the central part of their life\'s work.'
      },
      {
        question: 'The reformers\' emphasis on education led to the establishment of many:',
        options: ['Factories and mills', 'Schools and colleges', 'Temples and mosques', 'Political parties'],
        correctAnswer: 'Schools and colleges',
        explanation: 'A key legacy of the reform movements was the founding of numerous educational institutions, often with a focus on modern subjects and education for women and lower castes.'
      },
      {
        question: 'Gopal Hari Deshmukh, a reformer from Maharashtra, was popularly known by which pen name?',
        options: ['Lokmanya', 'Lokahitawadi', 'Mahatma', 'Gurudev'],
        correctAnswer: 'Lokahitawadi',
        explanation: 'Gopal Hari Deshmukh wrote a series of letters in a weekly paper under the pen name "Lokahitawadi" (One who works for the good of the people), in which he advocated for social reform.'
      },
      {
        question: 'A common criticism of the early reform movements was that they were:',
        options: ['Too focused on the poor', 'Largely confined to the educated, urban elite', 'Too aggressive and violent', 'Completely anti-British'],
        correctAnswer: 'Largely confined to the educated, urban elite',
        explanation: 'Initially, the message and membership of many reform movements were limited to a small class of Western-educated individuals in cities like Calcutta, Bombay, and Madras.'
      },
      {
        question: 'The work of the Ramakrishna Mission can be best described as:',
        options: ['Political activism', 'Doctrinal reform', 'Humanitarian and educational work', 'Literary revival'],
        correctAnswer: 'Humanitarian and educational work',
        explanation: 'The Mission\'s primary focus has always been on practical philanthropy, such as running hospitals, schools, rural development projects, and disaster relief, as a form of spiritual service.'
      },
      {
        question: 'The fight against which social evil was a common thread between Raja Ram Mohan Roy and Ishwar Chandra Vidyasagar?',
        options: ['The caste system', 'Idol worship', 'The oppression of women', 'British rule'],
        correctAnswer: 'The oppression of women',
        explanation: 'Both reformers dedicated a significant part of their lives to improving the status of women, with Roy focusing on abolishing Sati and Vidyasagar on legalizing widow remarriage.'
      }
    ],
    flashcards: [
      { term: 'Social Reform', definition: 'A movement that aims to make gradual change in certain aspects of society, rather than rapid or fundamental changes.' },
      { term: 'Raja Ram Mohan Roy', definition: 'An influential 19th-century reformer, founder of the Brahmo Samaj, and campaigner against the practice of Sati.' },
      { term: 'Brahmo Samaj', definition: 'A monotheistic Hindu reform movement founded in 1828 that condemned idol worship, the caste system, and advocated for social reform.' },
      { term: 'Sati', definition: 'The historical Hindu practice of a widow sacrificing herself by sitting atop her deceased husband\'s funeral pyre. It was banned in 1829.' },
      { term: 'Swami Dayananda Saraswati', definition: 'Founder of the Arya Samaj and a Hindu religious scholar who believed in the infallible authority of the Vedas.' },
      { term: 'Arya Samaj', definition: 'A Hindu reform movement founded in 1875 that promoted values and practices based on the Vedas and opposed social evils like idolatry and caste.' },
      { term: 'Shuddhi Movement', definition: 'A proselytizing movement started by the Arya Samaj to bring back people who had converted from Hinduism to other religions.' },
      { term: 'Jyotiba Phule', definition: 'A social reformer from Maharashtra who worked for the upliftment of lower castes and women, and founded the Satyashodhak Samaj.' },
      { term: 'Savitribai Phule', definition: 'A pioneer of women\'s education in India, wife of Jyotiba Phule, who opened the first school for girls in Pune in 1848.' },
      { term: 'Satyashodhak Samaj', definition: '"Society of Truth Seekers," founded by Jyotiba Phule in 1873 to liberate the lower castes from exploitation and discrimination.' },
      { term: 'Swami Vivekananda', definition: 'A key figure in the introduction of Vedanta and Yoga to the Western world and the founder of the Ramakrishna Mission.' },
      { term: 'Sri Ramakrishna Paramahamsa', definition: 'A 19th-century Hindu mystic and spiritual leader whose teachings inspired the Ramakrishna Mission.' },
      { term: 'Ramakrishna Mission', definition: 'A Hindu religious and spiritual organization founded in 1897 which engages in extensive educational and philanthropic work.' },
      { term: 'Vedanta', definition: 'A school of philosophy in Hindu traditions that focuses on the Upanishads and their teachings.' },
      { term: 'Sir Syed Ahmed Khan', definition: 'A Muslim reformer, philosopher, and educator who founded Aligarh Muslim University and led the Aligarh Movement.' },
      { term: 'Aligarh Movement', definition: 'A movement to establish a modern system of education for the Muslim population of British India.' },
      { term: 'Ishwar Chandra Vidyasagar', definition: 'A key figure of the Bengal Renaissance who championed the cause of widow remarriage and female education.' },
      { term: 'Widow Remarriage Act, 1856', definition: 'Legislation passed due to the efforts of Ishwar Chandra Vidyasagar, which legalized the remarriage of Hindu widows.' },
      { term: 'Caste System', definition: 'A rigid social hierarchy in Hinduism that was a primary target for many 19th-century social reformers.' },
      { term: 'Monotheism', definition: 'The belief in one God, a central tenet of reform movements like the Brahmo Samaj, contrasting with polytheistic practices.' },
      { term: 'Father of Modern India', definition: 'A title often given to Raja Ram Mohan Roy for his pioneering reformist efforts.' },
      { term: 'Go Back to the Vedas', definition: 'The famous slogan of Swami Dayananda Saraswati and the Arya Samaj.' },
      { term: 'Bahujan', definition: 'A term used by Jyotiba Phule to refer to the majority non-Brahmin population.' },
      { term: 'Gulamgiri (Slavery)', definition: 'An influential book by Jyotiba Phule that strongly criticized the caste system.' },
      { term: 'Daridra Narayana Seva', definition: 'The concept of serving the poor as serving God, central to the Ramakrishna Mission.' },
      { term: 'Parliament of the World\'s Religions (1893)', definition: 'The event in Chicago where Swami Vivekananda gained international fame for his speech on Hinduism.' },
      { term: 'Aligarh Muslim University', definition: 'The university that grew out of the Muhammadan Anglo-Oriental College founded by Sir Syed Ahmed Khan.' },
      { term: 'Prarthana Samaj', definition: 'A social-religious reform movement in Maharashtra, founded in 1867, with aims similar to the Brahmo Samaj.' },
      { term: 'Theosophical Society', definition: 'An organization that promoted esoteric philosophies and played a role in the revival of Hinduism and Buddhism in India, famously led by Annie Besant.' },
      { term: 'Annie Besant', definition: 'An Irish socialist and women\'s rights activist who became president of the Theosophical Society and was active in Indian nationalism.' },
      { term: 'Untouchability', definition: 'The practice of ostracizing a minority group by segregating them from the mainstream by social custom or legal mandate. A key target of reformers.' },
      { 'term': 'Lord William Bentinck', 'definition': 'The Governor-General of India who passed the Bengal Sati Regulation in 1829, officially banning the practice.' },
      { 'term': 'Idol Worship (Murti Puja)', 'definition': 'The worship of physical images or statues as representations of deities, a practice condemned by reform movements like the Brahmo Samaj and Arya Samaj.' },
      { 'term': 'Polytheism', 'definition': 'The belief in or worship of more than one god, which reformers contrasted with the monotheistic ideal they found in the Upanishads.' },
      { 'term': 'Pandita Ramabai', 'definition': 'A prominent female social reformer and a pioneer in the education and emancipation of women in India.' },
      { 'term': 'Sharada Sadan', 'definition': 'A school and home for destitute widows founded by Pandita Ramabai in Bombay.' },
      { 'term': 'Debendranath Tagore', 'definition': 'Father of Rabindranath Tagore, who became a central figure in the Brahmo Samaj after Raja Ram Mohan Roy.' },
      { 'term': 'Keshub Chandra Sen', 'definition': 'A leader of a more radical faction of the Brahmo Samaj, known as the Brahmo Samaj of India.' },
      { 'term': 'Lokahitawadi', 'definition': 'The pen name of Gopal Hari Deshmukh, a social reformer from Maharashtra who wrote extensively against social evils.' },
      { 'term': 'Singh Sabha Movement', 'definition': 'A Sikh reform movement that arose in the late 19th century to revive and spread the Sikh faith.' },
      { 'term': 'Narayana Guru', 'definition': 'A social reformer from Kerala who led a movement against the injustices of the caste system, famously consecrating a temple for all.' },
      { 'term': 'Self-Respect Movement', 'definition': 'A movement started by E.V. Ramasamy (Periyar) in Tamil Nadu to reject Brahminical dominance and promote a rationalist ideology.' },
      { 'term': 'Periyar E. V. Ramasamy', 'definition': 'Founder of the Self-Respect Movement and the Dravidar Kazhagam, a key figure in the Dravidian movement.' },
      { 'term': 'Deccan Education Society', 'definition': 'An organization that established a network of schools and colleges in Maharashtra, including Fergusson College, to promote modern education.' },
      { 'term': 'Fergusson College', 'definition': 'A prominent college in Pune founded by the Deccan Education Society.' },
      { 'term': 'Syncretism', 'definition': 'The combining of different beliefs, a characteristic of the Brahmo Samaj which blended Hindu, Christian, and Western ideas.' },
      { 'term': 'Rationalism', 'definition': 'A belief or theory that opinions and actions should be based on reason and knowledge rather than on religious belief or emotional response. A key idea for reformers.' },
      { 'term': 'Social Evils', 'definition': 'A collective term for practices like Sati, child marriage, untouchability, and the caste system that reformers sought to eradicate.' },
      { 'term': 'Western Education', 'definition': 'The introduction of English language and modern subjects like science and history, which was a major catalyst for the reform movements.' },
      { 'term': 'B. R. Ambedkar', 'definition': 'Though a 20th-century figure, he is the intellectual successor to Phule and the most powerful critic of the caste system, who eventually drafted the Indian Constitution.' }
    ]
  },
  {
    id: '6',
    title: 'Indian Struggle against Colonialism',
    description: 'From 1857 Revolt to Gandhi’s Non-cooperation, INA, Quit India',
    content: `### The Great Revolt of 1857 ###

The struggle against British colonialism in India was a long and multifaceted process, but the Revolt of 1857 was a major turning point. It began as a mutiny of sepoys of the East India Company's army, sparked by the introduction of new rifle cartridges greased with animal fat, which offended both Hindu and Muslim soldiers. However, the mutiny quickly spread into a widespread rebellion across northern and central India, fueled by years of resentment against British policies of annexation, high taxes, and social interference. While the revolt saw participation from various sections of society, including deposed rulers like Rani Lakshmibai of Jhansi and Nana Saheb, it was ultimately crushed by the British due to a lack of central leadership, coordination, and a unified vision among the rebels. The revolt's failure had significant consequences: it led to the end of the East India Company's rule and the beginning of direct rule by the British Crown (the British Raj). It also left a legacy of deep racial bitterness and mistrust.

### The Rise of Organized Nationalism ###

The latter half of the 19th century saw the birth of organized nationalism. The Indian National Congress (INC) was founded in 1885, initially as a platform for educated, elite Indians to voice their grievances and seek more participation in governance through constitutional methods. These early nationalists, known as Moderates, believed in the British sense of justice and used petitions, prayers, and protests to achieve their limited aims.

### The Extremist Phase and Swadeshi Movement ###

By the early 20th century, a more assertive faction, the Extremists, grew impatient with the slow pace of the Moderates. Led by figures like Bal Gangadhar Tilak, Lala Lajpat Rai, and Bipin Chandra Pal (Lal-Bal-Pal), they advocated for more direct action and called for "Swaraj" or self-rule. Tilak famously declared, "Swaraj is my birthright, and I shall have it!" The Partition of Bengal in 1905 by Viceroy Lord Curzon acted as a catalyst, enraging Indians and leading to the Swadeshi movement. This movement promoted the use of Indian goods and the boycott of British products, becoming the first major mass movement of the freedom struggle.

### The Gandhian Era: Mass Mobilization ###

The arrival of Mohandas Karamchand Gandhi on the Indian political scene in 1915 marked a new phase. He introduced the techniques of Satyagraha (non-violent resistance), which he had developed in South Africa. His approach transformed the INC from an elite organization into a mass movement. His first major nationwide movement was the Non-Cooperation Movement (1920-22), launched in response to the Jallianwala Bagh massacre and in support of the Khilafat movement. This was followed by the Civil Disobedience Movement, famously launched with the Dandi Salt March in 1930, where Gandhi and his followers marched to the sea to illegally make salt, defying the British salt tax. These movements involved millions of Indians from all walks of life—peasants, workers, students, and women—in the struggle for freedom.

### Revolutionaries and the Final Push ###

Alongside the non-violent struggle, a parallel stream of revolutionary activities also continued. Figures like Bhagat Singh, Sukhdev, Rajguru, and Chandrashekhar Azad believed in armed struggle to overthrow the British and made the ultimate sacrifice for their cause. During World War II, the political situation intensified. Subhas Chandra Bose, a former Congress president, broke with Gandhi's non-violent methods. He escaped from India, went to Germany and then Japan, and formed the Indian National Army (INA) or "Azad Hind Fauj" with the help of the Axis powers to fight the British.

The final phase of the struggle was the Quit India Movement, launched by Gandhi in August 1942 with the powerful call to "Do or Die." It was a spontaneous mass uprising that, despite being brutally suppressed, demonstrated the fierce determination of the Indian people to achieve independence. The end of World War II left Britain economically drained and politically weakened. The INA trials after the war and naval mutinies further showed that the British could no longer rely on Indian soldiers to maintain their rule. This combination of factors made Indian independence inevitable. In August 1947, British rule finally ended, but it came at the cost of the tragic Partition of India.`,
    quiz: [
        {
          question: 'The Indian Revolt of 1857 led to which major political change?',
          options: ['The formation of the Indian National Congress', 'The end of British rule', 'The start of direct rule by the British Crown', 'The partition of Bengal'],
          correctAnswer: 'The start of direct rule by the British Crown',
          explanation: 'After the 1857 Revolt, the rule of the East India Company was abolished, and India came under the direct control of the British government and Queen Victoria.'
        },
        {
          question: 'Who was a prominent leader of the "Extremist" faction of the Indian National Congress?',
          options: ['Gopal Krishna Gokhale', 'A.O. Hume', 'Bal Gangadhar Tilak', 'Dadabhai Naoroji'],
          correctAnswer: 'Bal Gangadhar Tilak',
          explanation: 'Bal Gangadhar Tilak, along with Lala Lajpat Rai and Bipin Chandra Pal, was a key leader of the Extremist faction that called for Swaraj.'
        },
        {
          question: 'The Dandi March is associated with which movement led by Mahatma Gandhi?',
          options: ['Non-Cooperation Movement', 'Quit India Movement', 'Swadeshi Movement', 'Civil Disobedience Movement'],
          correctAnswer: 'Civil Disobedience Movement',
          explanation: 'The Dandi Salt March in 1930 was the inaugural act of the Civil Disobedience Movement, where Gandhi and his followers protested the British salt tax.'
        },
        {
          question: 'Who formed the Indian National Army (INA) to fight the British during World War II?',
          options: ['Bhagat Singh', 'Mahatma Gandhi', 'Subhas Chandra Bose', 'Jawaharlal Nehru'],
          correctAnswer: 'Subhas Chandra Bose',
          explanation: 'Subhas Chandra Bose left the Congress and formed the INA in Southeast Asia with the help of Japan to wage a military campaign for India\'s independence.'
        },
        {
            question: 'What was the immediate spark for the Revolt of 1857?',
            options: ['High taxes', 'The Doctrine of Lapse', 'The introduction of new rifle cartridges', 'The Partition of Bengal'],
            correctAnswer: 'The introduction of new rifle cartridges',
            explanation: 'The cartridges were rumored to be greased with cow and pig fat, which was offensive to both Hindu and Muslim sepoys, providing the immediate trigger for the mutiny.'
        },
        {
            question: 'The Indian National Congress was founded in which year?',
            options: ['1857', '1905', '1885', '1915'],
            correctAnswer: '1885',
            explanation: 'The INC was founded in Bombay in 1885, with A.O. Hume, a retired British civil servant, playing a key role.'
        },
        {
            question: 'The "Moderates" in the INC believed in which method of protest?',
            options: ['Armed revolution', 'Mass civil disobedience', 'Boycotts and strikes', 'Constitutional agitation through petitions and prayers'],
            correctAnswer: 'Constitutional agitation through petitions and prayers',
            explanation: 'The Moderates had faith in the British sense of justice and preferred to use constitutional means to voice their demands.'
        },
        {
            question: 'The Partition of Bengal in 1905 was ordered by which Viceroy?',
            options: ['Lord Dalhousie', 'Lord Curzon', 'Lord Mountbatten', 'Lord Ripon'],
            correctAnswer: 'Lord Curzon',
            explanation: 'Viceroy Lord Curzon ordered the partition, ostensibly for administrative efficiency, but it was widely seen as a "divide and rule" tactic to weaken Bengali nationalism.'
        },
        {
            question: '"Swaraj is my birthright, and I shall have it!" was the famous declaration of:',
            options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Bhagat Singh', 'Bal Gangadhar Tilak'],
            correctAnswer: 'Bal Gangadhar Tilak',
            explanation: 'This powerful slogan captured the spirit of the Extremist faction and their demand for self-rule.'
        },
        {
            question: 'The Jallianwala Bagh massacre occurred in which city in 1919?',
            options: ['Delhi', 'Lahore', 'Amritsar', 'Calcutta'],
            correctAnswer: 'Amritsar',
            explanation: 'British troops under General Dyer fired on a peaceful crowd gathered in Jallianwala Bagh, Amritsar, killing hundreds and galvanizing the nationalist movement.'
        },
        {
            question: 'The Non-Cooperation Movement (1920-22) was called off by Gandhi because of:',
            options: ['The Jallianwala Bagh massacre', 'A compromise with the British', 'The Chauri Chaura incident', 'The start of World War II'],
            correctAnswer: 'The Chauri Chaura incident',
            explanation: 'Gandhi called off the movement after an angry mob set fire to a police station in Chauri Chaura, killing several policemen, as it violated his principle of non-violence.'
        },
        {
            question: 'Who were the "Lal-Bal-Pal" of the Extremist movement?',
            options: ['Lal Bahadur Shastri, Balasaheb Thackeray, Pallavi Joshi', 'Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal', 'Lal Krishna Advani, Balram Jakhar, P. Chidambaram', 'Lala Hardayal, Balwant Singh, Palwankar Baloo'],
            correctAnswer: 'Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal',
            explanation: 'This trio of nationalist leaders represented the core of the Extremist faction in the early 20th century.'
        },
        {
            question: 'The Khilafat Movement was started by Indian Muslims to protest against the treatment of:',
            options: ['The Mughal Emperor', 'The Sultan of Turkey (Caliph)', 'The King of Saudi Arabia', 'The Shah of Iran'],
            correctAnswer: 'The Sultan of Turkey (Caliph)',
            explanation: 'The movement was a pan-Islamic protest against the harsh terms imposed on the Ottoman Sultan, who was the Caliph or spiritual head of Sunni Muslims, after WWI. Gandhi supported it to foster Hindu-Muslim unity.'
        },
        {
            question: 'Bhagat Singh and his associates were executed for their role in which case?',
            options: ['The Kakori train robbery', 'The Alipore bomb case', 'The Lahore Conspiracy Case (killing of Saunders)', 'The assassination of Lord Curzon'],
            correctAnswer: 'The Lahore Conspiracy Case (killing of Saunders)',
            explanation: 'Bhagat Singh, Sukhdev, and Rajguru were executed in 1931 for the assassination of British police officer John Saunders.'
        },
        {
            question: 'The slogan of the Quit India Movement was:',
            options: ['"Swaraj is my birthright"', '"Inquilab Zindabad"', '"Do or Die"', '"Jai Hind"'],
            correctAnswer: '"Do or Die"',
            explanation: 'Gandhi gave this powerful call to the nation at the launch of the Quit India Movement in August 1942, urging a final, determined struggle for freedom.'
        },
        {
            question: 'Rani Lakshmibai was the queen of which princely state?',
            options: ['Gwalior', 'Indore', 'Satara', 'Jhansi'],
            correctAnswer: 'Jhansi',
            explanation: 'Rani Lakshmibai of Jhansi was one of the most iconic figures of the 1857 Revolt, who led her troops into battle against the British.'
        },
        {
            question: 'The "Doctrine of Lapse" was a policy of annexation associated with which Governor-General that caused widespread resentment before 1857?',
            options: ['Lord Wellesley', 'Lord Dalhousie', 'Lord Canning', 'Lord Bentinck'],
            correctAnswer: 'Lord Dalhousie',
            explanation: 'This policy, which involved annexing states without a natural heir, was seen as an illegitimate land grab by the British and was a major cause of the 1857 Revolt.'
        },
        {
            question: 'The Simon Commission was boycotted by Indians because:',
            options: ['It proposed partitioning India', 'It had no Indian members', 'It recommended higher taxes', 'It was against self-rule'],
            correctAnswer: 'It had no Indian members',
            explanation: 'Indians were outraged that a commission sent to decide India\'s political future did not include a single Indian representative, leading to widespread protests with the slogan "Simon Go Back".'
        },
        {
            question: 'What was Satyagraha?',
            options: ['A form of armed struggle', 'A political party', 'Gandhi\'s philosophy of non-violent resistance', 'A religious movement'],
            correctAnswer: 'Gandhi\'s philosophy of non-violent resistance',
            explanation: 'Satyagraha, meaning "truth force" or "soul force," was Gandhi\'s core philosophy, which involved active but non-violent opposition to injustice.'
        },
        {
            question: 'The "Azad Hind Fauj" was another name for:',
            options: ['The Indian National Congress', 'The Muslim League', 'The Indian National Army', 'The Ghadar Party'],
            correctAnswer: 'The Indian National Army',
            explanation: 'Azad Hind Fauj (Free India Army) was the Hindi name for the Indian National Army (INA) formed by Subhas Chandra Bose.'
        },
        {
            question: 'The Poona Pact (1932) was an agreement between Mahatma Gandhi and:',
            options: ['Muhammad Ali Jinnah', 'Lord Irwin', 'B.R. Ambedkar', 'Jawaharlal Nehru'],
            correctAnswer: 'B.R. Ambedkar',
            explanation: 'The Poona Pact was an agreement over the political representation of the "Depressed Classes" (Dalits), where separate electorates were abandoned in favor of an increased number of reserved seats.'
        },
        {
            question: 'Who was the last Viceroy of British India?',
            options: ['Lord Wavell', 'Lord Linlithgow', 'Lord Mountbatten', 'Lord Curzon'],
            correctAnswer: 'Lord Mountbatten',
            explanation: 'Lord Mountbatten was the last Viceroy, and he was tasked with overseeing the transfer of power and the partition of India.'
        },
        {
            question: 'The Ghadar Party was a revolutionary group founded by Indians in which country?',
            options: ['Germany', 'Japan', 'USA and Canada', 'Great Britain'],
            correctAnswer: 'USA and Canada',
            explanation: 'The Ghadar Party was formed by immigrant Indians on the West Coast of North America to organize a rebellion to liberate India from British rule.'
        },
        {
            question: 'The slogan "Inquilab Zindabad" (Long Live the Revolution) was popularized by:',
            options: ['Mahatma Gandhi', 'Subhas Chandra Bose', 'Bhagat Singh', 'Bal Gangadhar Tilak'],
            correctAnswer: 'Bhagat Singh',
            explanation: 'Bhagat Singh and his comrades used this slogan frequently, and it became a rallying cry for the revolutionary movement.'
        },
        {
            question: 'The main political objective of the Muslim League, led by Muhammad Ali Jinnah, by the 1940s was:',
            options: ['A united, independent India', 'Dominion status within the British Empire', 'The creation of a separate state of Pakistan', 'An alliance with the Indian National Congress'],
            correctAnswer: 'The creation of a separate state of Pakistan',
            explanation: 'The Muslim League passed the Lahore Resolution in 1940, formally demanding separate homelands for Muslims in the northwestern and eastern zones of India.'
        },
        {
            question: 'The Swadeshi movement encouraged the boycott of:',
            options: ['Indian goods', 'Foreign goods, particularly British textiles', 'All forms of education', 'Government jobs'],
            correctAnswer: 'Foreign goods, particularly British textiles',
            explanation: 'A key component of the Swadeshi movement was the economic boycott of British manufactured goods to harm their commercial interests and promote Indian industries.'
        },
        {
            question: 'Chandrashekhar Azad was a famous Indian:',
            options: ['Moderate leader', 'Poet', 'Revolutionary', 'Social reformer'],
            correctAnswer: 'Revolutionary',
            explanation: 'Chandrashekhar Azad was a key figure in the Hindustan Socialist Republican Association and a mentor to Bhagat Singh. He died fighting the police, fulfilling his pledge never to be captured alive.'
        },
        {
            question: 'The Round Table Conferences were held in London to discuss:',
            options: ['The start of World War II', 'India\'s role in the Commonwealth', 'Future constitutional reforms in India', 'The partition of India'],
            correctAnswer: 'Future constitutional reforms in India',
            explanation: 'Three Round Table Conferences were held between 1930 and 1932 to discuss constitutional reforms based on the report of the Simon Commission. Gandhi attended the second one.'
        },
        {
            question: 'What was the main outcome of the Gandhi-Irwin Pact of 1931?',
            options: ['India was granted independence', 'The British agreed to release all political prisoners and Gandhi agreed to suspend the Civil Disobedience Movement', 'The salt tax was permanently abolished', 'The Round Table Conferences were cancelled'],
            correctAnswer: 'The British agreed to release all political prisoners and Gandhi agreed to suspend the Civil Disobedience Movement',
            explanation: 'This pact was a temporary truce that allowed for the Congress to participate in the Second Round Table Conference.'
        },
        {
            question: 'Nana Saheb was a prominent leader of the 1857 Revolt in which city?',
            options: ['Delhi', 'Lucknow', 'Kanpur', 'Jhansi'],
            correctAnswer: 'Kanpur',
            explanation: 'Nana Saheb, the adopted son of the last Peshwa, led the rebellion in Kanpur.'
        },
        {
            question: 'The Komagata Maru incident involved:',
            options: ['A ship carrying Indian immigrants being turned away from Canada', 'A train robbery by revolutionaries', 'A mutiny in the British Indian army', 'A protest against high taxes'],
            correctAnswer: 'A ship carrying Indian immigrants being turned away from Canada',
            explanation: 'The incident in 1914 highlighted the discriminatory immigration laws of the time and fueled revolutionary sentiment among Indians abroad.'
        },
        {
            question: 'The All India Forward Bloc was a political party founded by:',
            options: ['Jawaharlal Nehru', 'Sardar Patel', 'Subhas Chandra Bose', 'B.R. Ambedkar'],
            correctAnswer: 'Subhas Chandra Bose',
            explanation: 'Subhas Chandra Bose formed the Forward Bloc in 1939 after resigning from the presidency of the Indian National Congress.'
        },
        {
            question: 'The Government of India Act of 1935 introduced:',
            options: ['Complete independence', 'Direct rule from London', 'Provincial autonomy', 'The abolition of princely states'],
            correctAnswer: 'Provincial autonomy',
            explanation: 'This act was a significant step, granting Indian provinces a large measure of self-government, and formed the basis for many parts of the later Indian constitution.'
        },
        {
            question: 'The Cripps Mission of 1942 failed because:',
            options: ['The British refused to grant any concessions', 'It was rejected by all major Indian political parties as inadequate', 'World War II ended before it could be implemented', 'Lord Linlithgow vetoed the proposals'],
            correctAnswer: 'It was rejected by all major Indian political parties as inadequate',
            explanation: 'The Congress rejected it as it did not offer immediate independence, and the Muslim League rejected it as it did not explicitly promise Pakistan. Gandhi called it a "post-dated cheque on a failing bank."'
        },
        {
            question: 'The Royal Indian Navy mutiny of 1946 was a significant event because:',
            options: ['It led to a major naval battle', 'It showed that the British could no longer rely on Indian armed forces to maintain their rule', 'It was led by Mahatma Gandhi', 'It resulted in the sinking of several British ships'],
            correctAnswer: 'It showed that the British could no longer rely on Indian armed forces to maintain their rule',
            explanation: 'The widespread mutiny was a clear signal to the British government that their control over the instruments of power was collapsing, hastening their decision to leave.'
        },
        {
            question: 'Who was the first President of the Indian National Congress?',
            options: ['A.O. Hume', 'Dadabhai Naoroji', 'W.C. Bonnerjee', 'Surendranath Banerjee'],
            correctAnswer: 'W.C. Bonnerjee',
            explanation: 'Womesh Chunder Bonnerjee, a barrister from Calcutta, was the president of the first session of the INC in Bombay in 1885.'
        },
        {
            question: 'The concept of "Divide and Rule" is most associated with which British policy?',
            options: ['The introduction of railways', 'The establishment of universities', 'The Partition of Bengal and the introduction of separate electorates', 'The abolition of Sati'],
            correctAnswer: 'The Partition of Bengal and the introduction of separate electorates',
            explanation: 'Policies like the 1905 Partition of Bengal and the 1909 Morley-Minto reforms (which created separate electorates for Muslims) were seen as deliberate attempts to divide Hindus and Muslims.'
        },
        {
            question: 'The Hindustan Socialist Republican Association (HSRA) was a:',
            options: ['Social reform society', 'Moderate political group', 'Revolutionary organization', 'Literary club'],
            correctAnswer: 'Revolutionary organization',
            explanation: 'The HSRA was a prominent revolutionary group whose members included Bhagat Singh, Chandrashekhar Azad, and others who believed in armed struggle.'
        },
        {
            question: 'The "Individual Satyagraha" was launched by Gandhi as:',
            options: ['A mass movement to overthrow the British', 'A symbolic protest against India\'s forced participation in WWII', 'A campaign to promote cottage industries', 'A hunger strike for independence'],
            correctAnswer: 'A symbolic protest against India\'s forced participation in WWII',
            explanation: 'In 1940, instead of a mass movement, Gandhi chose individuals (starting with Vinoba Bhave) to court arrest by making anti-war speeches, as a limited, symbolic protest.'
        },
        {
            question: 'Who gave the famous "Tryst with Destiny" speech on the eve of India\'s independence?',
            options: ['Mahatma Gandhi', 'Sardar Patel', 'B.R. Ambedkar', 'Jawaharlal Nehru'],
            correctAnswer: 'Jawaharlal Nehru',
            explanation: 'Jawaharlal Nehru, as the first Prime Minister of India, delivered this iconic speech to the Constituent Assembly on the night of August 14-15, 1947.'
        },
        {
            question: 'The Anushilan Samiti and Jugantar were:',
            options: ['Literary societies in Bombay', 'Revolutionary groups in Bengal', 'Social reform movements in Punjab', 'Peasant uprisings in Bihar'],
            correctAnswer: 'Revolutionary groups in Bengal',
            explanation: 'These were two of the most prominent secret societies in Bengal in the early 20th century that advocated for revolutionary violence to overthrow British rule.'
        },
        {
            question: 'The Nehru Report (1928) was a document that:',
            options: ['Demanded the partition of India', 'Outlined a proposed constitution for an independent India with dominion status', 'Was a critique of Gandhian policies', 'Planned the economic development of India'],
            correctAnswer: 'Outlined a proposed constitution for an independent India with dominion status',
            explanation: 'The Nehru Report, drafted by a committee led by Motilal Nehru, was the Indian response to the challenge posed by the Simon Commission, outlining a framework for a self-governing India.'
        },
        {
            question: 'The Bardoli Satyagraha (1928) was a successful peasant movement against high taxes in Gujarat led by:',
            options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel', 'Rajendra Prasad'],
            correctAnswer: 'Sardar Vallabhbhai Patel',
            explanation: 'The successful organization of this movement earned Vallabhbhai Patel the title of "Sardar" (leader) from the women of Bardoli.'
        },
        {
            question: 'The "Direct Action Day" called by the Muslim League in 1946 led to:',
            options: ['The immediate partition of India', 'A successful negotiation with the Congress', 'Widespread communal riots, especially in Calcutta', 'The British agreeing to leave immediately'],
            correctAnswer: 'Widespread communal riots, especially in Calcutta',
            explanation: 'The call for "Direct Action Day" to achieve Pakistan led to horrific communal violence, known as the Great Calcutta Killings, hardening attitudes and making partition seem inevitable.'
        },
        {
            question: 'The Chittagong Armoury Raid (1930) was a daring revolutionary act led by:',
            options: ['Bhagat Singh', 'Surya Sen', 'Rash Behari Bose', 'Batukeshwar Dutt'],
            correctAnswer: 'Surya Sen',
            explanation: 'Surya Sen, a teacher known as "Master-da," led a group of revolutionaries in a raid on the police armoury in Chittagong, Bengal, in an attempt to spark a wider uprising.'
        },
        {
            question: 'What was the primary goal of the Swaraj Party, formed by C.R. Das and Motilal Nehru?',
            options: ['To continue the boycott of all government institutions', 'To enter the legislative councils and obstruct them from within', 'To start an armed rebellion', 'To focus only on social reform'],
            correctAnswer: 'To enter the legislative councils and obstruct them from within',
            explanation: 'After the suspension of the Non-Cooperation Movement, the Swarajists argued for "council entry" as a new tactic to fight the British from within the system.'
        },
        {
            question: 'During the Quit India Movement, a parallel government ("prati sarkar") was famously established in which region of Maharashtra?',
            options: ['Nagpur', 'Pune', 'Satara', 'Bombay'],
            correctAnswer: 'Satara',
            explanation: 'The Satara "prati sarkar," led by figures like Nana Patil, was one of the most successful and long-lasting underground parallel governments established during the Quit India Movement.'
        },
        {
            question: 'The trial of INA officers Shahnawaz Khan, P.K. Sahgal and G.S. Dhillon took place at:',
            options: ['The Lahore Fort', 'The Cellular Jail in Andaman', 'The Red Fort in Delhi', 'The Tower of London'],
            correctAnswer: 'The Red Fort in Delhi',
            explanation: 'The INA trials held at the Red Fort became a major public event, galvanizing massive support for the INA and the cause of independence across India.'
        },
        {
            question: 'The final decision to partition British India was made in the:',
            options: ['Cripps Mission', 'Wavell Plan', 'Cabinet Mission Plan', 'Mountbatten Plan (3rd June Plan)'],
            correctAnswer: 'Mountbatten Plan (3rd June Plan)',
            explanation: 'The Mountbatten Plan was the final plan for Indian independence, which included the partition of the subcontinent and was accepted by the major political parties.'
        }
    ],
    flashcards: [
      { term: 'Indian Revolt of 1857', definition: 'A large-scale rebellion against the rule of the British East India Company, which began as a sepoy mutiny.' },
      { term: 'Sepoy', definition: 'An Indian soldier serving under British or other European orders.' },
      { term: 'British Raj', definition: 'The period of direct British rule over the Indian subcontinent from 1858 to 1947.' },
      { term: 'Indian National Congress (INC)', definition: 'A political party founded in 1885 that became the principal leader of the Indian independence movement.' },
      { term: 'Moderates', definition: 'The early leaders of the INC who believed in petitioning the British government and using constitutional methods to achieve reforms.' },
      { term: 'Extremists', definition: 'A faction within the INC that advocated for more assertive methods, including boycotts and mass agitations, to achieve Swaraj (self-rule).' },
      { term: 'Bal Gangadhar Tilak', definition: 'A prominent Extremist leader known for his slogan, "Swaraj is my birthright, and I shall have it!"' },
      { term: 'Partition of Bengal (1905)', definition: 'The division of the Bengal province by the British Viceroy Lord Curzon, which sparked the Swadeshi movement and widespread protest.' },
      { term: 'Swadeshi Movement', definition: 'A self-sufficiency movement that was part of the Indian independence struggle, emphasizing the boycott of British goods and the promotion of Indian-made products.' },
      { term: 'Mahatma Gandhi', definition: 'The preeminent leader of the Indian independence movement, known for his philosophy of non-violent civil disobedience (Satyagraha).' },
      { term: 'Satyagraha', definition: 'A philosophy and practice of nonviolent resistance developed by Mahatma Gandhi, meaning "truth force."' },
      { term: 'Non-Cooperation Movement (1920-22)', definition: 'A nationwide non-violent movement led by Gandhi, urging Indians to withdraw cooperation from the British government.' },
      { term: 'Civil Disobedience Movement', definition: 'Launched by Gandhi in 1930 with the Salt March, it involved the deliberate and public refusal to obey certain laws.' },
      { term: 'Dandi Salt March (1930)', definition: 'An act of nonviolent civil disobedience led by Gandhi to protest the British salt tax, marking the start of the Civil Disobedience Movement.' },
      { term: 'Revolutionaries', definition: 'Nationalists who believed in using armed struggle to overthrow British rule, such as Bhagat Singh and Chandrashekhar Azad.' },
      { term: 'Bhagat Singh', definition: 'An Indian revolutionary who was a key figure in the independence movement and was executed by the British in 1931.' },
      { term: 'Subhas Chandra Bose', definition: 'A nationalist leader who broke with Gandhi, escaped from India during WWII, and formed the Indian National Army (INA).' },
      { term: 'Indian National Army (INA)', definition: 'An armed force formed by Indian nationalists in 1942 in Southeast Asia during WWII to secure Indian independence.' },
      { term: 'Quit India Movement (1942)', definition: 'A mass civil disobedience movement launched by Gandhi demanding an end to British rule in India, with the slogan "Do or Die."' },
      { term: 'Partition of India (1947)', definition: 'The division of British India into two independent dominions, India and Pakistan, which accompanied the end of British rule.' },
      { term: 'Doctrine of Lapse', definition: 'A policy of annexation by Lord Dalhousie that fueled resentment leading to the 1857 Revolt.' },
      { term: 'Rani Lakshmibai', definition: 'The Queen of Jhansi, an iconic freedom fighter and a leading figure in the 1857 Revolt.' },
      { term: 'Lord Curzon', definition: 'The Viceroy of India who oversaw the Partition of Bengal in 1905.' },
      { term: 'Lal-Bal-Pal', definition: 'A trio of assertive nationalist leaders: Lala Lajpat Rai, Bal Gangadhar Tilak, and Bipin Chandra Pal.' },
      { term: 'Jallianwala Bagh Massacre', definition: 'A 1919 incident where British troops fired on a large crowd of unarmed Indians in Amritsar, killing hundreds.' },
      { term: 'Khilafat Movement', definition: 'A pan-Islamic movement to protect the Ottoman Caliphate, which Gandhi supported to foster Hindu-Muslim unity.' },
      { term: 'Chauri Chaura Incident', definition: 'An incident of mob violence in 1922 that prompted Gandhi to call off the Non-Cooperation Movement.' },
      { term: 'Simon Commission', definition: 'A commission sent to India in 1928 to study constitutional reform, boycotted because it had no Indian members.' },
      { 'term': 'Inquilab Zindabad', 'definition': '"Long Live the Revolution," a slogan popularized by revolutionary leader Bhagat Singh.' },
      { 'term': 'Lahore Conspiracy Case', 'definition': 'The legal case following the assassination of a British police officer for which Bhagat Singh, Sukhdev and Rajguru were executed.' },
      { 'term': 'Azad Hind Fauj', 'definition': 'The Hindi name for the Indian National Army (INA).' },
      { 'term': 'Do or Die', 'definition': 'The powerful slogan given by Mahatma Gandhi at the launch of the Quit India Movement.' },
      { 'term': 'A.O. Hume', 'definition': 'A retired British civil servant who played a key role in the formation of the Indian National Congress.' },
      { 'term': 'Gopal Krishna Gokhale', 'definition': 'A prominent Moderate leader of the INC, considered by Mahatma Gandhi to be his political guru.' },
      { 'term': 'Separate Electorates', 'definition': 'A system introduced by the British where members of a particular religion would vote for candidates of their own religion. Seen as a "divide and rule" tactic.' },
      { 'term': 'Round Table Conferences', 'definition': 'A series of three conferences held in London to discuss constitutional reforms for India.' },
      { 'term': 'Gandhi-Irwin Pact', 'definition': 'A 1931 political agreement between Mahatma Gandhi and the Viceroy, Lord Irwin, which led to the suspension of the Civil Disobedience Movement.' },
      { 'term': 'Poona Pact', 'definition': 'An agreement between Mahatma Gandhi and B.R. Ambedkar in 1932 regarding political representation for the Depressed Classes.' },
      { 'term': 'Muslim League', 'definition': 'A political party founded in 1906 that, under Muhammad Ali Jinnah, advocated for and achieved the creation of Pakistan.' },
      { 'term': 'Muhammad Ali Jinnah', 'definition': 'The leader of the Muslim League and the founder of Pakistan.' },
      { 'term': 'Cabinet Mission (1946)', 'definition': 'A high-powered mission sent by the British government to India to discuss the transfer of power, but it failed to reach a consensus.' },
      { 'term': 'Lord Mountbatten', 'definition': 'The last Viceroy of British India and the first Governor-General of independent India.' },
      { 'term': 'Swaraj Party', 'definition': 'A political party formed by Motilal Nehru and C.R. Das that advocated for entering legislative councils to obstruct British policy.' },
      { 'term': 'Hindustan Socialist Republican Association (HSRA)', 'definition': 'A revolutionary organization founded by figures like Chandrashekhar Azad and Bhagat Singh.' },
      { 'term': 'Chandrashekhar Azad', 'definition': 'A prominent Indian revolutionary who was a leader of the HSRA and a mentor to Bhagat Singh.' },
      { 'term': 'Surya Sen', 'definition': 'A Bengali revolutionary who led the 1930 Chittagong Armoury Raid.' },
      { 'term': 'Royal Indian Navy Mutiny (1946)', 'definition': 'A widespread mutiny by Indian sailors that was a major blow to British authority and hastened their departure.' },
      { 'term': 'W.C. Bonnerjee', 'definition': 'The first president of the Indian National Congress in its inaugural session in 1885.' },
      { 'term': 'Tryst with Destiny', 'definition': 'The famous speech delivered by Jawaharlal Nehru, the first Prime Minister of India, on the eve of independence.' },
      { 'term': 'Dadabhai Naoroji', 'definition': 'A prominent Moderate leader known as the "Grand Old Man of India," who first proposed the "Drain of Wealth" theory.' }
    ]
  },
  {
    id: '7',
    title: 'Decolonisation to Political Integration of India',
    description: 'India’s political integration post-independence—Goa, Dadra & Nagar Haveli, Puducherry',
    content: `### The Challenge of a Fragmented Nation ###

The end of British rule on August 15, 1947, was a moment of triumph, but it also presented independent India with a monumental challenge: the political integration of a fragmented subcontinent. The Indian Independence Act of 1947 partitioned British India into the two dominions of India and Pakistan. However, it also declared the "lapsing of paramountcy," the British Crown's authority over the princely states. This meant that over 565 princely states, varying in size from a few acres to the size of France, were theoretically free to join either India or Pakistan, or to remain independent. This created the dangerous possibility of the "balkanization" of India, a political landscape fractured into hundreds of independent entities.

### Sardar Patel and the Integration of States ###

The colossal task of persuading these states to join the Indian Union fell to Sardar Vallabhbhai Patel, India's first Deputy Prime Minister and Home Minister, ably assisted by his secretary, V. P. Menon. Patel employed a combination of strategies. He appealed to the rulers' sense of patriotism, reminding them of their shared culture and history. He used diplomatic persuasion and offered generous terms, including "privy purses" (government allowances) and the retention of their titles and privileges. At the same time, he made it clear that India would not tolerate independent states within its borders, using the implicit threat of both public protest and military action. Through this masterful mix of diplomacy and pressure, Patel and Menon secured the accession of almost all states with territories contiguous to India by August 15, 1947.

### The Problem States: Junagadh, Hyderabad, and Kashmir ###

A few states, however, proved difficult. The ruler of Junagadh, a coastal state in Gujarat with a Hindu-majority population, was Muslim and announced his decision to accede to Pakistan. This was geographically absurd and against the wishes of his people, who revolted. India blockaded the state, and a plebiscite (public vote) was held, which resulted in an overwhelming vote in favor of joining India.

The Nizam of Hyderabad, who ruled a large, prosperous, and landlocked state in the heart of India, dreamed of an independent status. He refused to join India and began building up his army of irregulars, known as the Razakars, who terrorized the local population. After months of failed negotiations, the Indian government launched a swift five-day "police action" codenamed "Operation Polo" in September 1948. The Nizam's forces were quickly defeated, and Hyderabad was integrated into the Indian Union.

The case of Jammu and Kashmir was the most complex. The ruler, Maharaja Hari Singh, was a Hindu, while the population was majority-Muslim. He initially wanted to remain independent. However, in October 1947, an invasion by Pashtun tribesmen backed by the Pakistan army forced his hand. He appealed to India for help and signed the Instrument of Accession to India in exchange for military assistance. This led to the first Indo-Pakistani War and a long-standing dispute over the region that continues to this day.

### Completing Decolonisation: French and Portuguese Territories ###

The process of decolonisation was not complete with the departure of the British. The French and Portuguese still held small colonial enclaves in India. The French territories included Puducherry (Pondicherry), Karaikal, Yanam, and Mahe. After prolonged negotiations and the growth of strong local pro-merger movements, the French government peacefully transferred de facto control of these territories to India in 1954.

The Portuguese, under the authoritarian Salazar regime, were much more stubborn. They refused to relinquish their control over Goa, Daman, and Diu, claiming they were integral parts of Portugal, not colonies. After years of diplomatic efforts failed and popular unrest grew within Goa, the Indian government finally launched a military operation called "Operation Vijay" in December 1961. After a brief 36-hour conflict, the Portuguese forces surrendered. These territories were formally incorporated into India, finally completing the political and geographical integration of the subcontinent.`,
    quiz: [
        {
          question: 'Who was primarily responsible for the integration of princely states into the Indian Union?',
          options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Sardar Vallabhbhai Patel', 'B.R. Ambedkar'],
          correctAnswer: 'Sardar Vallabhbhai Patel',
          explanation: 'As the first Home Minister of India, Sardar Vallabhbhai Patel, along with V.P. Menon, skillfully managed the accession of over 560 princely states.'
        },
        {
          question: 'Which military action led to the integration of Hyderabad into India?',
          options: ['Operation Vijay', 'Operation Polo', 'Operation Blue Star', 'Operation Cactus'],
          correctAnswer: 'Operation Polo',
          explanation: '"Operation Polo" was the codename for the police action launched in September 1948 by the Indian Army to annex the princely state of Hyderabad.'
        },
        {
          question: 'The ruler of which princely state signed the Instrument of Accession to India after an invasion by Pakistani tribesmen?',
          options: ['Hyderabad', 'Junagadh', 'Travancore', 'Jammu and Kashmir'],
          correctAnswer: 'Jammu and Kashmir',
          explanation: 'Maharaja Hari Singh of Jammu and Kashmir acceded to India in October 1947 to get military help against an invasion from Pakistan.'
        },
        {
          question: 'How were the French territories like Puducherry integrated into India?',
          options: ['Through military conquest', 'Through a referendum', 'Through a peaceful treaty of cession', 'They were purchased by India'],
          correctAnswer: 'Through a peaceful treaty of cession',
          explanation: 'The French government, after negotiations, peacefully transferred its Indian territories to the Republic of India via a treaty in 1954.'
        },
        {
            question: '"Operation Vijay" was the codename for the military action to liberate which territories?',
            options: ['Hyderabad and Junagadh', 'Jammu and Kashmir', 'Puducherry and Karaikal', 'Goa, Daman, and Diu'],
            correctAnswer: 'Goa, Daman, and Diu',
            explanation: '"Operation Vijay" was the military operation launched by India in 1961 to end Portuguese colonial rule on the subcontinent.'
        },
        {
            question: 'What was the "lapsing of paramountcy"?',
            options: ['The end of Mughal rule', 'The transfer of power from the EIC to the Crown', 'The termination of British authority over the princely states', 'The law that allowed the British to annex states'],
            correctAnswer: 'The termination of British authority over the princely states',
            explanation: 'Paramountcy was the British Crown\'s complex set of rights and obligations over the princely states. Its lapse in 1947 left the states legally independent.'
        },
        {
            question: 'V. P. Menon, who assisted Sardar Patel, held what position?',
            options: ['Army General', 'Finance Minister', 'Secretary of the Ministry of States', 'Chief Justice of India'],
            correctAnswer: 'Secretary of the Ministry of States',
            explanation: 'V. P. Menon was a senior and highly skilled civil servant who played the crucial role of chief negotiator with the princely states.'
        },
        {
            question: 'The integration of Junagadh was ultimately decided by:',
            options: ['A war with Pakistan', 'A United Nations resolution', 'A plebiscite (public vote)', 'A decision by the British government'],
            correctAnswer: 'A plebiscite (public vote)',
            explanation: 'After the Nawab fled to Pakistan, a plebiscite was held, and the people of Junagadh voted overwhelmingly to join India.'
        },
        {
            question: 'The Razakars were a private militia associated with the ruler of which state?',
            options: ['Kashmir', 'Hyderabad', 'Mysore', 'Travancore'],
            correctAnswer: 'Hyderabad',
            explanation: 'The Razakars were a radical Islamist militia that supported the Nizam of Hyderabad\'s desire for independence and committed atrocities against the local population.'
        },
        {
            question: 'What was the Instrument of Accession?',
            options: ['A declaration of independence', 'A trade agreement', 'A legal document signed by rulers to join India or Pakistan', 'A constitution for the princely states'],
            correctAnswer: 'A legal document signed by rulers to join India or Pakistan',
            explanation: 'By signing this document, the rulers agreed to accede to the Dominion of India (or Pakistan) on three subjects: defense, foreign affairs, and communications.'
        },
        {
            question: 'Maharaja Hari Singh was the ruler of which princely state?',
            options: ['Jodhpur', 'Bhopal', 'Jammu and Kashmir', 'Baroda'],
            correctAnswer: 'Jammu and Kashmir',
            explanation: 'Maharaja Hari Singh was the Hindu Dogra ruler of the Muslim-majority state of Jammu and Kashmir at the time of independence.'
        },
        {
            question: 'Why did the Portuguese refuse to negotiate the transfer of Goa?',
            options: ['They believed Goa was not a colony but an integral part of Portugal', 'They were waiting for a higher price', 'They did not have a stable government', 'The people of Goa wanted to remain under Portuguese rule'],
            correctAnswer: 'They believed Goa was not a colony but an integral part of Portugal',
            explanation: 'The authoritarian Salazar regime in Portugal amended its constitution to designate its colonies as "overseas provinces," using this as a legal argument to refuse decolonization.'
        },
        {
            question: 'The term "balkanization" refers to:',
            options: ['The process of uniting a region', 'The fragmentation of a region into smaller, often hostile states', 'A type of economic policy', 'A military strategy'],
            correctAnswer: 'The fragmentation of a region into smaller, often hostile states',
            explanation: 'The term originates from the historical fragmentation of the Balkan peninsula. It was a major fear for Indian leaders regarding the princely states.'
        },
        {
            question: 'What was a "privy purse"?',
            options: ['A secret tax', 'A government allowance paid to the former rulers of princely states', 'A fund for military spending', 'A type of handbag'],
            correctAnswer: 'A government allowance paid to the former rulers of princely states',
            explanation: 'The offer of a privy purse was one of the inducements used by Sardar Patel to persuade the princes to accede to India.'
        },
        {
            question: 'Which country\'s government was in power in Portugal when Goa was liberated?',
            options: ['A democratic government', 'The British government', 'The Salazar authoritarian regime', 'A monarchy'],
            correctAnswer: 'The Salazar authoritarian regime',
            explanation: 'The dictatorial "Estado Novo" regime of António de Oliveira Salazar was fiercely colonial and refused to negotiate, leading to India\'s military action.'
        },
        {
            question: 'Puducherry (Pondicherry) was the capital of which European power\'s territories in India?',
            options: ['The British', 'The Portuguese', 'The Dutch', 'The French'],
            correctAnswer: 'The French',
            explanation: 'Pondicherry was the main administrative center for all French establishments in India.'
        },
        {
            question: 'The integration of the princely states was mostly completed by which date?',
            options: ['August 15, 1947', 'January 26, 1950', 'December 19, 1961', 'November 1, 1954'],
            correctAnswer: 'August 15, 1947',
            explanation: 'Remarkably, Sardar Patel and V.P. Menon managed to secure the accession of nearly all states by the day of India\'s independence, with only a few exceptions.'
        },
        {
            question: 'The ruler of Hyderabad was known by what title?',
            options: ['Maharaja', 'Nawab', 'Sultan', 'Nizam'],
            correctAnswer: 'Nizam',
            explanation: 'The title of the ruler of the princely state of Hyderabad was the Nizam.'
        },
        {
            question: 'The "police action" in Hyderabad is a euphemism for what?',
            options: ['A diplomatic meeting', 'A large-scale police raid', 'A full-scale military invasion', 'An economic blockade'],
            correctAnswer: 'A full-scale military invasion',
            explanation: 'The term "police action" was used to avoid the appearance of a war, but it involved the Indian Army invading and occupying the state of Hyderabad.'
        },
        {
            question: 'Which of these states initially wished to remain independent before joining India?',
            options: ['Mysore', 'Gwalior', 'Travancore', 'Patiala'],
            correctAnswer: 'Travancore',
            explanation: 'Travancore, along with Hyderabad and Kashmir, was one of the states that initially announced its intention to become an independent country.'
        },
        {
            question: 'The integration of the French territories into India was accomplished:',
            options: ['Peacefully through diplomacy', 'After a long and bloody war', 'Through a United Nations intervention', 'After India purchased the territory'],
            correctAnswer: 'Peacefully through diplomacy',
            explanation: 'Unlike the Portuguese, the French government was pragmatic and agreed to a peaceful transfer of power after it became clear the local population wanted to merge with India.'
        },
        {
            question: 'The Indian Independence Act of 1947 was passed by which government?',
            options: ['The Indian National Congress', 'The Constituent Assembly of India', 'The British Parliament', 'The United Nations'],
            correctAnswer: 'The British Parliament',
            explanation: 'The act that granted independence and partitioned British India was legislation passed by the Parliament of the United Kingdom.'
        },
        {
            question: 'Approximately how many princely states existed at the time of Indian independence?',
            options: ['About 50', 'About 100', 'Over 560', 'Over 1000'],
            correctAnswer: 'Over 560',
            explanation: 'The sheer number of states (565 is the most common figure) illustrates the complexity of the integration task faced by Sardar Patel.'
        },
        {
            question: 'The ruler of which state, with a Hindu majority and a Muslim ruler, tried to join Pakistan?',
            options: ['Bhopal', 'Junagadh', 'Rampur', 'Hyderabad'],
            correctAnswer: 'Junagadh',
            explanation: 'The case of Junagadh was the reverse of Kashmir: a Muslim ruler of a Hindu-majority state attempting to join Pakistan.'
        },
        {
            question: 'After its liberation, Goa was initially administered as a:',
            options: ['Separate state', 'Part of Maharashtra', 'Union Territory', 'Part of Karnataka'],
            correctAnswer: 'Union Territory',
            explanation: 'Goa, along with Daman and Diu, was administered as a Union Territory for many years before Goa was granted full statehood in 1987.'
        },
        {
            question: 'Dadra and Nagar Haveli were territories belonging to which colonial power before their integration into India?',
            options: ['France', 'Britain', 'Netherlands', 'Portugal'],
            correctAnswer: 'Portugal',
            explanation: 'Dadra and Nagar Haveli were two small Portuguese enclaves that were liberated by pro-India volunteers before the liberation of Goa.'
        },
        {
            question: 'What was the main argument used by Sardar Patel to persuade princes to join India?',
            options: ['The threat of a communist takeover', 'The promise of becoming Prime Minister', 'Appeals to patriotism and the threat of anarchy', 'A guarantee that they could keep their armies'],
            correctAnswer: 'Appeals to patriotism and the threat of anarchy',
            explanation: 'Patel argued that in the absence of a central power, there would be chaos and that it was the princes\' patriotic duty to join the new Indian nation.'
        },
        {
            question: 'The Standstill Agreement was an option for princely states to:',
            options: ['Declare independence permanently', 'Maintain existing administrative arrangements with India temporarily', 'Join the United Nations directly', 'Form their own union of states'],
            correctAnswer: 'Maintain existing administrative arrangements with India temporarily',
            explanation: 'It was a temporary measure to ensure that essential services like post and railways continued uninterrupted while negotiations for full accession were ongoing.'
        },
        {
            question: 'The States Reorganisation Act of 1956, which reorganized India on linguistic lines, was a consequence of:',
            options: ['The integration of princely states', 'A demand from the British', 'The first general election', 'The desire to create more manageable administrative units'],
            correctAnswer: 'The integration of princely states',
            explanation: 'Once the princely states were integrated, the old, arbitrary boundaries had to be redrawn to create more logical and representative states, leading to the linguistic reorganization.'
        },
        {
            question: 'What was the final outcome for the Nizam of Hyderabad after Operation Polo?',
            options: ['He was exiled to Pakistan', 'He was executed for treason', 'He was made the constitutional head (Rajpramukh) of Hyderabad state for a time', 'He fled to Britain'],
            correctAnswer: 'He was made the constitutional head (Rajpramukh) of Hyderabad state for a time',
            explanation: 'In a gesture of reconciliation, after his surrender, the Nizam was made the Rajpramukh (governor) of the state of Hyderabad within India.'
        },
        {
            question: 'The dispute over Kashmir led to the first war between which two countries?',
            options: ['India and China', 'India and Portugal', 'India and Pakistan', 'India and Afghanistan'],
            correctAnswer: 'India and Pakistan',
            explanation: 'The Indo-Pakistani War of 1947-48 began immediately after the Maharaja of Kashmir acceded to India.'
        },
        {
            question: 'The integration of the French territories is an example of decolonization through:',
            options: ['Military action', 'Diplomatic negotiation', 'Economic pressure', 'Revolution'],
            correctAnswer: 'Diplomatic negotiation',
            explanation: 'The French transfer of power was a model of peaceful decolonization achieved through talks between the two governments.'
        },
        {
            question: 'The primary political party leading the pro-merger movement in Goa was:',
            options: ['The Indian National Congress', 'The Communist Party of India', 'The Goa Liberation Army', 'There were several, including the Goa Congress'],
            correctAnswer: 'There were several, including the Goa Congress',
            explanation: 'Various groups, including the National Congress (Goa) and the Azad Gomantak Dal, organized satyagrahas and protests against Portuguese rule.'
        },
        {
            question: 'Which of the following was NOT an option given to the princely states in 1947?',
            options: ['Join India', 'Join Pakistan', 'Remain Independent', 'Become a British colony again'],
            correctAnswer: 'Become a British colony again',
            explanation: 'The Indian Independence Act made it clear that British rule was ending completely; returning to colonial status was not an option.'
        },
        {
            question: 'Chandernagore, another French territory, was integrated into which Indian state?',
            options: ['Orissa', 'Bihar', 'West Bengal', 'Andhra Pradesh'],
            correctAnswer: 'West Bengal',
            explanation: 'Chandernagore, a French enclave located north of Calcutta, was integrated into the state of West Bengal after a plebiscite.'
        },
        {
            question: 'The Indian military intervention in Goa in 1961 was met with:',
            options: ['Strong international approval', 'Fierce, prolonged Portuguese resistance', 'Criticism from some Western countries but was over quickly', 'A counter-attack by Pakistan'],
            correctAnswer: 'Criticism from some Western countries but was over quickly',
            explanation: 'While countries like the USA and UK criticized India\'s use of force, the military operation was swift and successful with minimal casualties.'
        },
        {
            question: 'The integration of the princely states is often called the:',
            options: ['Unification of India', 'Annexation of India', 'Colonization of India', 'Partition of India'],
            correctAnswer: 'Unification of India',
            explanation: 'Sardar Patel\'s successful integration of the states is hailed as the unification of India, creating a single, cohesive political entity from a patchwork of states.'
        },
        {
            question: 'The accession of which state was particularly important for India due to its strategic location and size?',
            options: ['Manipur', 'Bhopal', 'Hyderabad', 'Sikkim'],
            correctAnswer: 'Hyderabad',
            explanation: 'An independent Hyderabad, located in the center of India, would have been a major threat to the country\'s unity and stability, making its integration crucial.'
        },
        {
            question: 'Who was the ruler of Travancore who initially declared independence?',
            options: ['The Nizam', 'The Maharaja', 'The Nawab', 'The Diwan, C. P. Ramaswami Iyer'],
            correctAnswer: 'The Diwan, C. P. Ramaswami Iyer',
            explanation: 'While the Maharaja was the formal head, the decision to declare Travancore independent was driven by its powerful and ambitious Diwan (Prime Minister), C.P. Ramaswami Iyer.'
        },
        {
            question: 'The problem of integrating princely states was a direct legacy of which system of British rule?',
            options: ['Direct rule', 'Indirect rule (paramountcy)', 'The zamindari system', 'The factory system'],
            correctAnswer: 'Indirect rule (paramountcy)',
            explanation: 'The British system of ruling through local princes (indirect rule) created the complex situation where these states were not technically part of British India, leading to the integration challenge.'
        },
        {
            question: 'The liberation of Goa is celebrated annually on which date?',
            options: ['August 15', 'January 26', 'December 19', 'November 1'],
            correctAnswer: 'December 19',
            explanation: 'December 19 is celebrated as Goa Liberation Day, marking the day the Indian armed forces took control of the territory from the Portuguese in 1961.'
        },
        {
            question: 'What was the immediate trigger for the invasion of Kashmir by Pakistani tribesmen?',
            options: ['A famine in Kashmir', 'A revolt by the local population against the Maharaja', 'The Maharaja\'s decision to join India', 'The partition of Punjab'],
            correctAnswer: 'A revolt by the local population against the Maharaja',
            explanation: 'A rebellion in the western part of the state against the Maharaja\'s rule provided a pretext for the invasion by Pakistani tribesmen and irregulars.'
        },
        {
            question: 'The city of Bhopal, which also hesitated to join, was ruled by a:',
            options: ['Maharaja', 'Nawab', 'Rana', 'Raja'],
            correctAnswer: 'Nawab',
            explanation: 'The Nawab of Bhopal, who was a close friend of Jinnah, also harbored ambitions of independence before eventually acceding to India.'
        },
        {
            question: 'The successful integration of the states ensured that independent India had:',
            options: ['A weak central government', 'Many internal borders and customs duties', 'A unified political and administrative structure', 'No army'],
            correctAnswer: 'A unified political and administrative structure',
            explanation: 'This unification was crucial for creating a single economy, a single administration, and a single defense force for the new nation.'
        },
        {
            question: 'The final legal transfer of the French territories to India (de jure transfer) happened in:',
            options: ['1947', '1950', '1954', '1962'],
            correctAnswer: '1962',
            explanation: 'While the de facto (actual) transfer happened in 1954, the French Parliament only ratified the treaty of cession in 1962, making the transfer legally permanent.'
        },
        {
            question: 'Which of the following was NOT a Portuguese territory integrated into India?',
            options: ['Goa', 'Daman', 'Diu', 'Mahe'],
            correctAnswer: 'Mahe',
            explanation: 'Mahe was a French territory, located on the Malabar coast.'
        },
        {
            question: 'The Indian Army\'s advance into Kashmir in 1947 managed to secure:',
            options: ['The entire state of Jammu and Kashmir', 'Only the Jammu region', 'Roughly two-thirds of the state, including the Kashmir Valley', 'Only the city of Srinagar'],
            correctAnswer: 'Roughly two-thirds of the state, including the Kashmir Valley',
            explanation: 'The war resulted in a ceasefire line (now the Line of Control) that left about one-third of the state under Pakistani control and two-thirds under Indian control.'
        },
        {
            question: 'The policy of integrating the states can be best described as:',
            options: ['Exclusively violent', 'Exclusively peaceful', 'A mix of persuasion, diplomacy, and coercion', 'Handled entirely by the United Nations'],
            correctAnswer: 'A mix of persuasion, diplomacy, and coercion',
            explanation: 'Sardar Patel\'s approach was pragmatic, using appeals to patriotism and offering incentives (the "carrot") while also making the consequences of not joining clear (the "stick").'
        }
    ],
    flashcards: [
      { term: 'Decolonisation', definition: 'The process by which a country withdraws from its former colony, leaving it independent.' },
      { term: 'Political Integration', definition: 'The process of bringing together smaller political units (like princely states) into a larger, cohesive political entity.' },
      { term: 'Princely States', definition: 'Semi-sovereign territories in British India ruled by local rulers under the indirect suzerainty of the British Crown.' },
      { term: 'Sardar Vallabhbhai Patel', definition: 'India\'s first Deputy Prime Minister, credited with the monumental task of integrating over 560 princely states into India.' },
      { term: 'V. P. Menon', definition: 'A senior Indian civil servant who was the constitutional adviser and political secretary to Sardar Patel during the integration of the states.' },
      { term: 'Instrument of Accession', definition: 'A legal document signed by the rulers of princely states, ceding control over defense, foreign affairs, and communications to the Dominion of India.' },
      { term: 'Junagadh', definition: 'A princely state that was integrated into India following a plebiscite after its ruler tried to accede to Pakistan.' },
      { term: 'Plebiscite', definition: 'A direct vote by which all the people of a region are asked to accept or reject a proposal, such as joining a country.' },
      { term: 'Hyderabad', definition: 'A large princely state that was integrated into India in 1948 through a police action codenamed "Operation Polo."' },
      { term: 'Operation Polo', definition: 'The codename for the Indian military action in September 1948 that led to the annexation of Hyderabad.' },
      { term: 'Jammu and Kashmir', definition: 'A princely state whose ruler acceded to India in 1947, leading to a long-standing dispute with Pakistan.' },
      { term: 'Maharaja Hari Singh', definition: 'The last ruling Maharaja of the princely state of Jammu and Kashmir, who signed the Instrument of Accession to India.' },
      { term: 'Puducherry (Pondicherry)', definition: 'The largest of the former French territories in India, which were peacefully transferred to India in 1954.' },
      { term: 'French India', definition: 'The collective name for the French establishments in India, which included Puducherry, Karaikal, Yanam, Mahe, and Chandernagore.' },
      { term: 'Goa', definition: 'A former Portuguese colony on the west coast of India, which was liberated and integrated into India in 1961.' },
      { term: 'Portuguese India', definition: 'The Portuguese colonial possessions in India, which included Goa, Daman, Diu, and Dadra and Nagar Haveli.' },
      { term: 'Operation Vijay (1961)', definition: 'The Indian military operation that led to the capture of Goa, Daman, and Diu from the Portuguese, completing India\'s decolonisation.' },
      { term: 'Suzerainty', definition: 'A relationship in which one state controls the foreign policy and relations of a tributary state, while allowing the tributary state to have internal autonomy.' },
      { term: 'Standstill Agreement', definition: 'An agreement signed between India and some princely states that provided for the continuation of pre-existing agreements and administrative practices.' },
      { term: 'States Reorganisation Act, 1956', definition: 'A major reform of the boundaries of India\'s states and territories, organizing them along linguistic lines.' },
      { term: 'Lapsing of Paramountcy', definition: 'The legal termination of British authority over the Indian princely states upon Indian independence in 1947.' },
      { term: 'Balkanization', definition: 'The fragmentation of a larger region or state into smaller regions or states, which are often hostile or uncooperative with one another.' },
      { term: 'Privy Purse', definition: 'An allowance paid by the Indian government to the former rulers of princely states as part of their accession agreements.' },
      { term: 'Nizam', definition: 'The title of the monarch of the princely state of Hyderabad.' },
      { term: 'Razakars', definition: 'A private Islamist militia that resisted the integration of Hyderabad into India.' },
      { term: 'Police Action', definition: 'A euphemism for a military invasion, used to describe the Indian army\'s intervention in Hyderabad.' },
      { term: 'Salazar Regime', definition: 'The authoritarian, corporatist regime that ruled Portugal from the 1930s to 1974 and stubbornly resisted decolonization.' },
      { term: 'Goa Liberation Day', definition: 'Celebrated on December 19th, marking the day the Indian Armed Forces liberated Goa from Portuguese rule in 1961.' },
      { term: 'De facto transfer', definition: 'The transfer of actual control and governance, as when France handed over its territories in 1954.' },
      { term: 'De jure transfer', definition: 'The formal, legal transfer of sovereignty, as when the French Parliament ratified the treaty of cession in 1962.' },
      { term: 'Chandernagore', definition: 'A former French enclave in Bengal that was integrated into India after a plebiscite.' },
      { term: 'Dadra and Nagar Haveli', definition: 'Portuguese territories that were liberated by pro-India volunteers and subsequently integrated into India.' },
      { 'term': 'Travancore', 'definition': 'A princely state in the south (modern-day Kerala) that initially sought independence before acceding to India.' },
      { 'term': 'Jodhpur', 'definition': 'A princely state whose ruler initially flirted with the idea of joining Pakistan before being persuaded by Patel to join India.' },
      { 'term': 'Bhopal', 'definition': 'A princely state with a Muslim Nawab who also wished to remain independent before acceding to India.' },
      { 'term': 'Dominion of India', 'definition': 'The official name of the independent Indian state between 1947 and 1950, before it became a republic.' },
      { 'term': 'Dominion of Pakistan', 'definition': 'The official name of the independent Pakistani state between 1947 and 1956.' },
      { 'term': 'Line of Control (LoC)', 'definition': 'The military control line between the Indian and Pakistani controlled parts of the former princely state of Jammu and Kashmir. It was originally the ceasefire line of 1949.' },
      { 'term': 'Rajpramukh', 'definition': 'A constitutional head of a state in India between 1947 and 1956. The Nizam of Hyderabad was made the Rajpramukh of his state after integration.' },
      { 'term': 'Ministry of States', 'definition': 'The government department, headed by Sardar Patel, that was responsible for relations with and the integration of the princely states.' },
      { 'term': 'Union Territory', 'definition': 'A type of administrative division in India that is directly governed by the central government.' },
      { 'term': 'Statehood', 'definition': 'The status of being a recognized, self-governing state. Goa was granted full statehood in 1987.' },
      { 'term': 'Accession', 'definition': 'The act of a state joining another, larger state. For example, the accession of princely states to India.' },
      { 'term': 'Indo-Pakistani War of 1947', 'definition': 'The first of four wars fought between India and Pakistan, which was fought over the princely state of Jammu and Kashmir.' },
      { 'term': 'C. P. Ramaswami Iyer', 'definition': 'The Diwan (Prime Minister) of Travancore who controversially declared the state\'s independence before an assassination attempt reversed the decision.' },
      { 'term': 'Indian Independence Act 1947', 'definition': 'The act of the Parliament of the United Kingdom that partitioned British India and granted independence.' },
      { 'term': 'Two-Nation Theory', 'definition': 'The ideology that the primary identity and unifying factor for Muslims in the Indian subcontinent was their religion, rather than their language or ethnicity, which was the basis for the creation of Pakistan.' },
      { 'term': 'Satyagraha (in Goa)', 'definition': 'The use of non-violent protests and civil disobedience by Goan nationalists and Indian volunteers to oppose Portuguese rule.' },
      { 'term': 'Tribal Invasion of Kashmir', 'definition': 'The invasion of Kashmir in October 1947 by Pashtun tribesmen from Pakistan\'s North-West Frontier Province, which triggered the state\'s accession to India.' },
      { 'term': 'Unification of India', 'definition': 'A term used to describe the successful integration of the diverse princely states into a single political entity, largely credited to Sardar Patel.' }
    ]
  },
  {
    id: '8',
    title: 'World Wars and India',
    description: "India's role in WWI & WWII, and their effects on the country",
    content: `### World War I (1914-1918) ###

India, as the largest and most important part of the British Empire, was automatically and without consultation declared to be at war with Germany in 1914. The impact of this global conflict on India was immense and multifaceted.

**Military Contribution:** India made one of the largest troop contributions to the war. Over 1.3 million Indian soldiers, both combatants and non-combatants, served overseas. They fought in crucial theaters of war, from the trenches of the Western Front in France and Belgium to the deserts of Mesopotamia (modern Iraq), Egypt, Palestine, and the hills of Gallipoli and East Africa. The Indian Army played a vital role in many British victories, particularly in the Middle East against the Ottoman Empire. This massive contribution came at a heavy cost, with tens of thousands of Indian soldiers killed.

**Economic Impact:** The Indian economy was heavily harnessed for the war effort. India supplied vast quantities of food, raw materials like jute and cotton, and money to Britain. Taxes were increased, and war loans were raised from the Indian populace. This led to severe economic distress, with high inflation and shortages of essential goods causing hardship for the common people. However, the war also provided a stimulus for some Indian industries, such as steel (Tata Steel), textiles, and cement, as they had to meet wartime demands and faced less foreign competition.

**Political Consequences:** Mainstream nationalist leaders in the Indian National Congress, including Mahatma Gandhi (who had recently returned from South Africa), initially supported the war effort. They hoped that India's loyalty and sacrifice would be rewarded with significant political concessions, possibly even "Swaraj" or self-government (dominion status) after the war. However, the end of the war brought disillusionment. Instead of reforms, Britain imposed the repressive Rowlatt Act in 1919, which allowed for detention without trial. This was seen as a betrayal and led to widespread protests, culminating in the horrific Jallianwala Bagh massacre and fueling Gandhi's first nationwide Non-Cooperation Movement.

### World War II (1939-1945) ###

When World War II broke out, the Viceroy of India, Lord Linlithgow, once again declared war on Germany on India's behalf without consulting any Indian political leaders. This unilateral action was fiercely condemned by the Indian National Congress.

**Political Division and the Quit India Movement:** In protest, the elected Congress ministries in the provinces, which had taken office in 1937, resigned. The political situation became complex. The British government, desperate for India's manpower and resources, made promises of post-war independence, most notably in the Cripps Mission of 1942. However, these proposals were seen as inadequate and were rejected. Gandhi famously called the Cripps offer "a post-dated cheque on a failing bank." The failure of the mission led Gandhi to launch the Quit India Movement in August 1942, with the call to "Do or Die." It was a mass uprising that, despite being brutally suppressed, signaled the end of British rule. In contrast, the Muslim League, led by Muhammad Ali Jinnah, chose to cooperate with the British war effort. This tactical cooperation strengthened the League's political position and its demand for a separate state of Pakistan.

**Subhas Chandra Bose and the INA:** A different path was chosen by Subhas Chandra Bose, a former Congress President who disagreed with Gandhi's non-violent methods. He made a dramatic escape from India and sought help from the Axis powers (Germany and Japan). In Southeast Asia, he formed the Indian National Army (INA), or Azad Hind Fauj, from Indian prisoners of war captured by the Japanese. The INA fought alongside the Japanese against the British in Burma. While the INA's military campaign was ultimately unsuccessful, the subsequent trials of its soldiers at the Red Fort in Delhi after the war created a massive wave of nationalist sentiment and patriotic fervor across India.

**The Aftermath:** WWII was the final nail in the coffin of the British Empire. It left Britain exhausted, both economically and militarily. The war shattered the myth of British invincibility and moral superiority. The immense pressure from the invigorated Indian independence movement, combined with Britain's weakened global position and pressure from the new superpowers (USA and USSR), made holding onto India impossible. Indian independence in 1947 was now a certainty.`,
    quiz: [
        {
          question: 'Why did mainstream Indian nationalists initially support the British war effort in World War I?',
          options: ['They were promised immediate independence.', 'They hoped it would lead to dominion status and self-government.', 'They were forced to by the British military.', 'They wanted to defeat Germany.'],
          correctAnswer: 'They hoped it would lead to dominion status and self-government.',
          explanation: 'Many Indian leaders believed that by demonstrating loyalty and contributing to the war, India would earn greater political autonomy from the British Empire.'
        },
        {
          question: 'What repressive law was passed by the British after World War I, leading to widespread protest?',
          options: ['The Morley-Minto Reforms', 'The Rowlatt Act', 'The Government of India Act, 1919', 'The Simon Commission'],
          correctAnswer: 'The Rowlatt Act',
          explanation: 'The Anarchical and Revolutionary Crimes Act of 1919, popularly known as the Rowlatt Act, allowed for the detention of political prisoners without trial, causing outrage in India.'
        },
        {
          question: 'Why did the Congress ministries in the provinces resign in 1939?',
          options: ['They were dismissed by the Viceroy.', 'The Cripps Mission failed.', 'They were protesting the Viceroy\'s decision to declare war on India\'s behalf without consultation.', 'Gandhi called for a boycott of the government.'],
          correctAnswer: 'They were protesting the Viceroy\'s decision to declare war on India\'s behalf without consultation.',
          explanation: 'The Indian National Congress was incensed that the Viceroy had committed India to World War II without consulting its elected representatives.'
        },
        {
          question: 'The Cripps Mission of 1942 offered India what status after World War II?',
          options: ['Complete independence', 'Dominion status', 'Provincial autonomy', 'Representation in the British Parliament'],
          correctAnswer: 'Dominion status',
          explanation: 'The Cripps Mission offered India dominion status but was rejected by the Congress as it did not promise full independence and gave provinces the right to secede.'
        },
        {
            question: 'Approximately how many Indian soldiers served in World War I?',
            options: ['100,000', '500,000', 'Over 1.3 million', 'Over 5 million'],
            correctAnswer: 'Over 1.3 million',
            explanation: 'India made a massive contribution to the Allied war effort, sending more than 1.3 million soldiers to fight in various theaters.'
        },
        {
            question: 'Indian soldiers in WWI played a particularly crucial role in the British campaigns in which region?',
            options: ['Russia', 'South America', 'Mesopotamia (Middle East)', 'China'],
            correctAnswer: 'Mesopotamia (Middle East)',
            explanation: 'The Indian Army was the main force used by the British in their successful campaign against the Ottoman Empire in Mesopotamia (modern Iraq).'
        },
        {
            question: 'What was the immediate political outcome in India after World War I?',
            options: ['Grant of Dominion Status', 'Grant of complete independence', 'The passing of repressive laws like the Rowlatt Act', 'A period of economic boom'],
            correctAnswer: 'The passing of repressive laws like the Rowlatt Act',
            explanation: 'Instead of being rewarded for its war effort, India was met with repressive legislation, which was seen as a betrayal.'
        },
        {
            question: 'Who described the Cripps Mission offer as "a post-dated cheque on a failing bank"?',
            options: ['Jawaharlal Nehru', 'Muhammad Ali Jinnah', 'Sardar Patel', 'Mahatma Gandhi'],
            correctAnswer: 'Mahatma Gandhi',
            explanation: 'Gandhi used this famous phrase to dismiss the Cripps offer, implying that the promise of future dominion status was worthless as the British Empire itself was collapsing.'
        },
        {
            question: 'Which political party in India cooperated with the British during World War II?',
            options: ['Indian National Congress', 'Communist Party of India', 'All India Forward Bloc', 'Muslim League'],
            correctAnswer: 'Muslim League',
            explanation: 'The Muslim League, under Jinnah, chose to cooperate with the war effort, which allowed it to gain political leverage and strengthen its demand for Pakistan.'
        },
        {
            question: 'Subhas Chandra Bose formed the Indian National Army (INA) with the help of which powers?',
            options: ['Allied Powers (USA, UK)', 'Axis Powers (Germany, Japan)', 'Soviet Union and China', 'United Nations'],
            correctAnswer: 'Axis Powers (Germany, Japan)',
            explanation: 'Based on the principle "an enemy\'s enemy is a friend," Bose sought and received assistance from the Axis powers to fight against the British.'
        },
        {
            question: 'The "Do or Die" slogan is associated with which movement?',
            options: ['Non-Cooperation Movement', 'Civil Disobedience Movement', 'Swadeshi Movement', 'Quit India Movement'],
            correctAnswer: 'Quit India Movement',
            explanation: 'This was Gandhi\'s powerful call to the Indian people in August 1942, urging them to make a final, determined push for freedom.'
        },
        {
            question: 'The trials of the INA soldiers after WWII were held at which landmark?',
            options: ['Lahore Fort', 'Cellular Jail, Andaman', 'Red Fort, Delhi', 'Viceroy\'s House, Delhi'],
            correctAnswer: 'Red Fort, Delhi',
            explanation: 'The INA trials at the Red Fort became a symbol of the independence struggle, and the widespread public support for the accused soldiers further weakened British authority.'
        },
        {
            question: 'What was a major economic effect of WWI on the Indian population?',
            options: ['Deflation and falling prices', 'High inflation and scarcity of goods', 'A decrease in taxes', 'A government surplus'],
            correctAnswer: 'High inflation and scarcity of goods',
            explanation: 'Heavy war expenditure and disruption of trade led to a sharp rise in prices, causing great hardship for ordinary Indians.'
        },
        {
            question: 'Who was the Viceroy of India at the start of World War II?',
            options: ['Lord Mountbatten', 'Lord Wavell', 'Lord Linlithgow', 'Lord Irwin'],
            correctAnswer: 'Lord Linlithgow',
            explanation: 'It was Lord Linlithgow who unilaterally declared India at war with Germany in 1939 without consulting Indian leaders.'
        },
        {
            question: 'The formation of the INA was primarily from which group of people?',
            options: ['Volunteers from India', 'Indian civilians living in Southeast Asia', 'Indian prisoners of war captured by the Japanese', 'German soldiers of Indian descent'],
            correctAnswer: 'Indian prisoners of war captured by the Japanese',
            explanation: 'The bulk of the INA was formed from Indian soldiers of the British Indian Army who had been captured by the Japanese after the fall of Singapore.'
        },
        {
            question: 'The Bengal Famine of 1943, which killed millions, occurred during which major conflict?',
            options: ['World War I', 'The 1857 Revolt', 'World War II', 'The Cold War'],
            correctAnswer: 'World War II',
            explanation: 'The devastating famine was exacerbated by wartime inflation, military needs, and the British government\'s policies of denial and inaction.'
        },
        {
            question: 'What was the main reason the Indian National Congress rejected the Cripps Mission?',
            options: ['It did not offer immediate full independence', 'It proposed partitioning India', 'It was pro-Muslim League', 'It banned the Congress party'],
            correctAnswer: 'It did not offer immediate full independence',
            explanation: 'The Congress was unwilling to accept a promise of future dominion status and demanded the immediate transfer of power to an Indian government.'
        },
        {
            question: 'The Western Front, a major theatre of WWI, was located in:',
            options: ['Russia and Poland', 'Turkey and Greece', 'France and Belgium', 'Italy and Austria'],
            correctAnswer: 'France and Belgium',
            explanation: 'The trench warfare of the Western Front in France and Belgium was one of the deadliest theatres of the war, where many Indian soldiers fought.'
        },
        {
            question: 'The slogan of the INA was:',
            options: ['"Do or Die"', '"Jai Hind"', '"Inquilab Zindabad"', '"Vande Mataram"'],
            correctAnswer: '"Jai Hind"',
            explanation: '"Jai Hind" (Victory to India) was adopted as the official slogan of the Indian National Army and was later adopted by the independent Indian government.'
        },
        {
            question: 'Which Indian industry received a major boost due to WWI?',
            options: ['The automobile industry', 'The aviation industry', 'The steel industry (Tata Steel)', 'The software industry'],
            correctAnswer: 'The steel industry (Tata Steel)',
            explanation: 'With British steel being diverted for the war effort, Indian industries like Tata Steel had to step up production to meet the demands for rails, machinery, and other materials.'
        },
        {
            question: 'The primary political impact of WWII on the British Empire was that it:',
            options: ['Strengthened its global position', 'Allowed it to gain new colonies', 'Financially and militarily weakened it, making it unable to hold onto colonies', 'Led to a stronger alliance with India'],
            correctAnswer: 'Financially and militarily weakened it, making it unable to hold onto colonies',
            explanation: 'The war left Britain with huge debts and a diminished international standing, making the cost of maintaining its empire unsustainable.'
        },
        {
            question: 'The fall of which British stronghold in Southeast Asia to the Japanese in 1942 was a major blow to British prestige?',
            options: ['Hong Kong', 'Singapore', 'Rangoon', 'Colombo'],
            correctAnswer: 'Singapore',
            explanation: 'The surrender of Singapore was a humiliating military defeat for the British and shattered the myth of their invincibility in Asia. It also led to the capture of tens of thousands of Indian soldiers who would later form the INA.'
        },
        {
            question: 'The "Home Rule" movement in India, which gained strength during WWI, was led by:',
            options: ['Mahatma Gandhi and Jawaharlal Nehru', 'Annie Besant and Bal Gangadhar Tilak', 'Subhas Chandra Bose and Sardar Patel', 'Muhammad Ali Jinnah and Liaquat Ali Khan'],
            correctAnswer: 'Annie Besant and Bal Gangadhar Tilak',
            explanation: 'The Home Rule Leagues were started in 1916 to demand self-government for India within the British Empire, inspired by a similar movement in Ireland.'
        },
        {
            question: 'What was the stance of the Communist Party of India during the Quit India Movement?',
            options: ['They led the movement', 'They remained neutral', 'They actively supported the movement', 'They opposed the movement and supported the British war effort'],
            correctAnswer: 'They opposed the movement and supported the British war effort',
            explanation: 'After the Soviet Union entered the war on the Allied side, the Communist Party of India changed its stance, calling it a "People\'s War" and opposing the Quit India Movement which they felt would weaken the Allied war effort against fascism.'
        },
        {
            question: 'The Montagu-Chelmsford Reforms of 1919 introduced a system of "dyarchy" in the provinces, which was seen as:',
            options: ['A step towards complete independence', 'A wholly unsatisfactory and complex system', 'A fair and balanced power-sharing formula', 'A system to abolish the princely states'],
            correctAnswer: 'A wholly unsatisfactory and complex system',
            explanation: 'Dyarchy, which divided provincial subjects into "transferred" and "reserved" categories, was seen as a flawed and inadequate reform, falling far short of the expectations of self-government.'
        },
        {
            question: 'The Jallianwala Bagh massacre was a direct result of protests against which Act?',
            options: ['The Government of India Act, 1919', 'The Rowlatt Act', 'The Defence of India Act', 'The Cripps Mission proposals'],
            correctAnswer: 'The Rowlatt Act',
            explanation: 'The gathering at Jallianwala Bagh was part of the widespread protests against the repressive Rowlatt Act, which allowed for indefinite detention without trial.'
        },
        {
            question: 'The Government of India Act, 1919, is also known as:',
            options: ['The Morley-Minto Reforms', 'The Montagu-Chelmsford Reforms', 'The Simon Commission Report', 'The Nehru Report'],
            correctAnswer: 'The Montagu-Chelmsford Reforms',
            explanation: 'It was named after Edwin Montagu, the Secretary of State for India, and Lord Chelmsford, the Viceroy of India.'
        },
        {
            question: 'During WWII, the British were most concerned about a potential Axis invasion of India from which direction?',
            options: ['From the North, via the Soviet Union', 'From the West, via the Middle East', 'From the East, via Burma', 'From the South, via a naval invasion'],
            correctAnswer: 'From the East, via Burma',
            explanation: 'After the Japanese conquered Burma, the threat of an overland invasion of India from the east became a major military concern for the British.'
        },
        {
            question: 'What was the "scorched earth" policy implemented by the British in Bengal during WWII?',
            options: ['A policy to improve agriculture', 'A policy to build more factories', 'A "denial policy" to destroy boats and rice stocks to hinder a potential Japanese invasion', 'A policy of planting more trees'],
            correctAnswer: 'A "denial policy" to destroy boats and rice stocks to hinder a potential Japanese invasion',
            explanation: 'This policy severely disrupted the local economy and is considered a major contributing factor to the Bengal Famine of 1943.'
        },
        {
            question: 'The Wavell Plan of 1945 proposed:',
            options: ['Immediate independence for India', 'The partition of India', 'The formation of a new Executive Council with all Indian members except the Viceroy and Commander-in-Chief', 'The abolition of the Indian Army'],
            correctAnswer: 'The formation of a new Executive Council with all Indian members except the Viceroy and Commander-in-Chief',
            explanation: 'The Wavell Plan was another attempt to break the political deadlock, but it failed due to disagreements between the Congress and the Muslim League over representation.'
        },
        {
            question: 'The August Offer (1940) was a proposal by the British government that:',
            options: ['Accepted the demand for Pakistan', 'Offered immediate independence', 'Offered future dominion status and the expansion of the Viceroy\'s Executive Council', 'Announced the British would be leaving India within a year'],
            correctAnswer: 'Offered future dominion status and the expansion of the Viceroy\'s Executive Council',
            explanation: 'The August Offer was an attempt to secure Indian cooperation in the war, but it was rejected by the Congress as it did not go far enough.'
        },
        {
            question: 'The famous Battle of Imphal and Kohima was fought between:',
            options: ['British and German forces', 'Japanese and INA forces against British and Indian forces', 'Indian and Pakistani forces', 'Chinese and Indian forces'],
            correctAnswer: 'Japanese and INA forces against British and Indian forces',
            explanation: 'This was the climactic battle of the Burma Campaign. The Japanese and INA forces attempted to invade India but were decisively defeated, marking a major turning point in the war in Asia.'
        },
        {
            question: 'Which of these was NOT a theater of war for the Indian Army in WWI?',
            options: ['The Western Front', 'Mesopotamia', 'East Africa', 'South America'],
            correctAnswer: 'South America',
            explanation: 'Indian soldiers fought across Europe, the Middle East, and Africa, but not in the Americas.'
        },
        {
            question: 'The Indian National Congress first demanded "Purna Swaraj" (complete independence) at which session?',
            options: ['The Surat Session, 1907', 'The Lucknow Session, 1916', 'The Lahore Session, 1929', 'The Bombay Session, 1942'],
            correctAnswer: 'The Lahore Session, 1929',
            explanation: 'At the Lahore session, with Jawaharlal Nehru as president, the Congress declared complete independence as its goal and decided to celebrate January 26th as Independence Day.'
        },
        {
            question: 'What was a major reason for the initial success of the Japanese in Southeast Asia in WWII?',
            options: ['They had help from the Americans', 'They used nuclear weapons', 'They achieved air and naval superiority and used effective jungle warfare tactics', 'The British and other colonial powers surrendered without a fight'],
            correctAnswer: 'They achieved air and naval superiority and used effective jungle warfare tactics',
            explanation: 'The Japanese forces were well-trained, highly motivated, and used innovative tactics that overwhelmed the unprepared Allied defenders in places like Malaya and Singapore.'
        },
        {
            question: 'The "Individual Satyagraha" of 1940 was initiated by Gandhi to:',
            options: ['Start a mass uprising', 'Protest the arrest of Subhas Chandra Bose', 'Assert the right to freedom of speech against the war', 'Demand immediate partition'],
            correctAnswer: 'Assert the right to freedom of speech against the war',
            explanation: 'It was a limited, symbolic movement where chosen individuals would make an anti-war speech and court arrest, to protest without hampering the war effort against fascism on a large scale.'
        },
        {
            question: 'Who was the first person selected by Gandhi to offer Individual Satyagraha?',
            options: ['Jawaharlal Nehru', 'Sardar Patel', 'Vinoba Bhave', 'Maulana Azad'],
            correctAnswer: 'Vinoba Bhave',
            explanation: 'Acharya Vinoba Bhave was the first satyagrahi, followed by Jawaharlal Nehru.'
        },
        {
            question: 'The political deadlock during WWII in India was primarily between:',
            options: ['The British and the princely states', 'The Indian National Congress and the Muslim League', 'The landlords and the peasants', 'The industrialists and the workers'],
            correctAnswer: 'The Indian National Congress and the Muslim League',
            explanation: 'The inability of the Congress and the League to agree on a power-sharing formula for an independent India was the main political obstacle.'
        },
        {
            question: 'The end of which war directly led to the establishment of the League of Nations?',
            options: ['The Napoleonic Wars', 'World War I', 'World War II', 'The Cold War'],
            correctAnswer: 'World War I',
            explanation: 'The League of Nations was created after WWI with the aim of preventing future global conflicts, though it ultimately failed.'
        },
        {
            question: 'The end of which war directly led to the establishment of the United Nations?',
            options: ['The Crimean War', 'World War I', 'World War II', 'The Vietnam War'],
            correctAnswer: 'World War II',
            explanation: 'The United Nations was founded in 1945 after the devastation of WWII to replace the ineffective League of Nations and to promote international peace and cooperation.'
        },
        {
            question: 'The idea of "dyarchy" introduced in 1919 meant:',
            options: ['Rule by two kings', 'A division of administrative subjects between elected Indian ministers and British-appointed councillors', 'Complete self-rule', 'Direct rule from London'],
            correctAnswer: 'A division of administrative subjects between elected Indian ministers and British-appointed councillors',
            explanation: 'Key departments like finance and law and order were "reserved" for the British, while less important ones like education and health were "transferred" to Indian ministers, making the system largely powerless.'
        },
        {
            question: 'Which of the following was a major long-term consequence of WWI?',
            options: ['The strengthening of European colonial empires', 'The rise of the United States as a major world power', 'A decrease in nationalism worldwide', 'A long period of global peace'],
            correctAnswer: 'The rise of the United States as a major world power',
            explanation: 'The war exhausted the old European powers and marked the emergence of the United States as a leading economic and political force on the world stage.'
        },
        {
            question: 'The Atlantic Charter, signed by Roosevelt and Churchill, supported the principle of:',
            options: ['Maintaining colonial empires', 'The right of all peoples to choose their own form of government', 'The supremacy of the Axis powers', 'A world government'],
            correctAnswer: 'The right of all peoples to choose their own form of government',
            explanation: 'Although Churchill later claimed it did not apply to the British Empire, Indian nationalists used the principle of self-determination mentioned in the Atlantic Charter to strengthen their case for independence.'
        },
        {
            question: 'The demand for Pakistan was formally adopted by the Muslim League at its session in which city?',
            options: ['Delhi', 'Dhaka', 'Lahore', 'Karachi'],
            correctAnswer: 'Lahore',
            explanation: 'The Lahore Resolution of 1940 is a landmark document in the history of Pakistan, where the Muslim League formally called for the creation of independent states for Muslims.'
        },
        {
            question: 'What was the main sentiment in Britain regarding its empire immediately after WWII?',
            options: ['A desire to expand the empire further', 'A realization that the empire was no longer sustainable', 'A plan to grant independence to all colonies immediately', 'A belief that the empire was stronger than ever'],
            correctAnswer: 'A realization that the empire was no longer sustainable',
            explanation: 'The new Labour government, led by Clement Attlee, was elected in 1945 and was more sympathetic to Indian independence, recognizing that Britain no longer had the resources or the will to maintain its empire.'
        },
        {
            question: 'Indian soldiers were awarded the highest British military honor, the Victoria Cross, for their bravery in which war?',
            options: ['Only in WWI', 'Only in WWII', 'In both WWI and WWII', 'Never'],
            correctAnswer: 'In both WWI and WWII',
            explanation: 'Many Indian soldiers received the Victoria Cross for exceptional bravery in both World Wars, highlighting their significant military contribution.'
        },
        {
            question: 'The Simla Conference of 1945 was an attempt by Viceroy Wavell to:',
            options: ['Plan the invasion of Japan', 'Finalize the partition of India', 'Form an executive council of Indian leaders', 'Discuss the post-war economy'],
            correctAnswer: 'Form an executive council of Indian leaders',
            explanation: 'The conference was convened to agree on the composition of a new executive council, but it failed due to disagreements between the Congress and the Muslim League over the nomination of Muslim members.'
        },
        {
            question: 'The slogan "Delhi Chalo" (On to Delhi) was given by:',
            options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel', 'Subhas Chandra Bose'],
            correctAnswer: 'Subhas Chandra Bose',
            explanation: '"Delhi Chalo" was the rallying cry given by Subhas Chandra Bose to the soldiers of the INA, urging them to march to Delhi and liberate India.'
        },
        {
            question: 'Ultimately, India\'s independence in 1947 was a result of:',
            options: ['Only the non-violent movement', 'Only the revolutionary activities', 'Only the impact of the World Wars', 'A combination of mass movements, revolutionary actions, and the impact of the World Wars'],
            correctAnswer: 'A combination of mass movements, revolutionary actions, and the impact of the World Wars',
            explanation: 'Indian independence was the culmination of a long struggle with many different streams, combined with the changed global circumstances after WWII that made continued British rule impossible.'
        }
    ],
    flashcards: [
      { term: 'World War I (1914-1918)', definition: 'A global war centered in Europe, to which India contributed over a million soldiers and significant resources as part of the British Empire.' },
      { term: 'Western Front', definition: 'The main theatre of war during WWI, located in France and Belgium, where many Indian soldiers fought and died.' },
      { term: 'Mesopotamia', definition: 'A region in modern-day Iraq where a large number of Indian troops fought against the Ottoman Empire during WWI.' },
      { term: 'Dominion Status', definition: 'A status of autonomous communities within the British Empire, equal in status, but united by a common allegiance to the Crown. The goal of early Indian nationalists.' },
      { term: 'Rowlatt Act (1919)', definition: 'A repressive act passed by the British after WWI that allowed for detention without trial, leading to major protests like the Jallianwala Bagh massacre.' },
      { term: 'World War II (1939-1945)', definition: 'A global war in which India was again involved as part of the British Empire, with over 2.5 million Indian soldiers serving.' },
      { term: 'Viceroy', definition: 'The official who ruled a colony or province as the representative of the monarch. In India, the Viceroy declared war on Germany in 1939.' },
      { term: 'Cripps Mission (1942)', definition: 'A failed attempt by the British government to secure full Indian cooperation and support for their efforts in World War II, offering post-war dominion status.' },
      { term: 'Quit India Movement (1942)', definition: 'A mass movement launched by Gandhi demanding an end to British rule, triggered by the failure of the Cripps Mission.' },
      { term: 'Muslim League', definition: 'A political party that, under Muhammad Ali Jinnah, advocated for the creation of a separate Muslim state, Pakistan. It cooperated with the British during WWII.' },
      { term: 'Subhas Chandra Bose', definition: 'A nationalist leader who allied with the Axis Powers during WWII to fight for Indian independence.' },
      { term: 'Indian National Army (INA)', definition: 'An armed force formed by Subhas Chandra Bose with the aim of liberating India from British rule through military means.' },
      { term: 'Axis Powers', definition: 'The military coalition that fought in World War II against the Allies, primarily consisting of Germany, Italy, and Japan.' },
      { term: 'Allies', definition: 'The countries that together opposed the Axis Powers during WWII, led by Great Britain, the United States, and the Soviet Union.' },
      { term: 'Inflation', definition: 'A general increase in prices and fall in the purchasing value of money, a major economic consequence for India during both world wars.' },
      { 'term': 'Industrialisation', 'definition': 'The process of developing industries in a country. Both wars gave a boost to certain Indian industries like steel and textiles.' },
      { term: 'Jallianwala Bagh Massacre (1919)', definition: 'An event where British troops fired on a large crowd of unarmed Indians in Amritsar, a direct consequence of protests against the Rowlatt Act.' },
      { term: 'The Great Depression', definition: 'A severe worldwide economic depression that took place mostly during the 1930s, which had already weakened the global economy before WWII.' },
      { term: 'Wavell Plan (1945)', definition: 'A proposal by Viceroy Lord Wavell for Indian self-government, which failed due to disagreements between the Congress and the Muslim League.' },
      { term: 'Cabinet Mission (1946)', definition: 'A mission sent by the British government to India to discuss the transfer of power, which ultimately failed to find a compromise acceptable to all parties.' },
      { term: 'Lord Linlithgow', definition: 'The Viceroy of India who declared India to be at war in 1939 without consulting Indian leaders.' },
      { term: 'Resignation of Congress Ministries', definition: 'An act of protest in 1939 by the elected INC governments in the provinces against the Viceroy\'s unilateral declaration of war.' },
      { term: 'Post-dated cheque on a failing bank', definition: 'Mahatma Gandhi\'s famous dismissal of the Cripps Mission\'s offer of future dominion status.' },
      { term: 'Do or Die', definition: 'The powerful slogan given by Gandhi at the launch of the Quit India Movement in 1942.' },
      { term: 'Azad Hind Fauj', definition: 'The Hindi name for the Indian National Army (INA) formed by Subhas Chandra Bose.' },
      { term: 'INA Trials', definition: 'The court-martial of soldiers of the INA at the Red Fort in Delhi, which sparked massive public support for them and the cause of independence.' },
      { term: 'Bengal Famine of 1943', definition: 'A devastating famine in which millions died, exacerbated by wartime policies and British inaction.' },
      { term: 'Home Rule Movement', definition: 'A movement led by Annie Besant and Bal Gangadhar Tilak during WWI, demanding self-government for India.' },
      { term: 'Dyarchy', definition: 'A system of dual government introduced in the provinces by the Government of India Act, 1919, seen as unsatisfactory.' },
      { term: 'Montagu-Chelmsford Reforms', definition: 'The constitutional reforms of 1919 that introduced dyarchy and fell short of Indian expectations.' },
      { 'term': 'August Offer (1940)', 'definition': 'An offer made by Viceroy Linlithgow to secure Indian cooperation in the war, offering future dominion status. It was rejected.' },
      { 'term': 'Fall of Singapore (1942)', 'definition': 'A major military defeat for the British, where Japan captured the strategic port and tens of thousands of Indian soldiers who later formed the INA.' },
      { 'term': 'Battle of Imphal and Kohima', 'definition': 'The decisive battle where British and Indian forces stopped the Japanese invasion of India in 1944.' },
      { 'term': 'Simla Conference (1945)', 'definition': 'A meeting called by Viceroy Wavell to form an all-Indian executive council, which failed due to disagreements between Congress and the Muslim League.' },
      { 'term': 'Labour Government (UK)', 'definition': 'The government of Clement Attlee, elected in 1945, which was more sympathetic to Indian independence and initiated the final transfer of power.' },
      { 'term': 'Clement Attlee', 'definition': 'The British Prime Minister who oversaw the independence of India.' },
      { 'term': 'Royal Indian Navy Mutiny (1946)', 'definition': 'A significant revolt by Indian sailors that further convinced the British that they could no longer hold onto India.' },
      { 'term': 'Lahore Session (1929)', 'definition': 'The session where the Indian National Congress, under the presidency of Nehru, declared "Purna Swaraj" (complete independence) as its goal.' },
      { 'term': 'Purna Swaraj', 'definition': 'The demand for complete independence, as opposed to dominion status, formally adopted by the INC in 1929.' },
      { 'term': 'Commonwealth', 'definition': 'After independence, India made the decision to remain a member of the Commonwealth of Nations, an association of former British colonies.' },
      { 'term': 'Self-determination', 'definition': 'The right of a people to choose their own government, a principle championed during WWII that Indian nationalists used to argue their case.' },
      { 'term': 'Atlantic Charter', 'definition': 'A 1941 pivotal policy statement issued during World War II which defined the Allied goals for the post-war world, including the principle of self-determination.' },
      { 'term': 'Tata Steel', 'definition': 'An Indian company whose steel production was greatly boosted by the demand created during World War I.' },
      { 'term': 'War Loans', 'definition': 'Money borrowed by the government to finance a war. The British raised significant war loans from India during both World Wars.' },
      { 'term': 'Unilateral Declaration', 'definition': 'An action or decision made by one party without the agreement of others, such as the Viceroy declaring war on India\'s behalf.' },
      { 'term': 'People\'s War', 'definition': 'The term used by the Communist Party of India to describe WWII after the USSR was invaded by Germany, leading them to support the British war effort.' },
      { 'term': 'Scorched Earth Policy', 'definition': 'A military strategy of destroying anything that might be useful to the enemy. British denial policies in Bengal during WWII contributed to the famine.' },
      { 'term': 'Gallipoli Campaign', 'definition': 'A major WWI campaign in the Ottoman Empire where Indian soldiers fought alongside British, Australian, and New Zealand troops.' },
      { 'term': 'Victoria Cross', 'definition': 'The highest award for gallantry in the face of the enemy that can be awarded to British and Commonwealth forces. Many were awarded to Indian soldiers.' },
      { 'term': 'Delhi Chalo', 'definition': '"On to Delhi," the rousing slogan given by Subhas Chandra Bose to the INA.' }
    ]
  },
  {
    id: '9',
    title: 'World: Decolonisation',
    description: 'Decolonisation in Asia & Africa',
    content: `### The End of Empires ###

Decolonisation is the process by which colonies become independent of the colonizing country, marking the undoing of colonialism. The period after World War II saw an unstoppable wave of decolonisation that led to the emergence of dozens of new nations in Asia and Africa, fundamentally reshaping the world map and the global balance of power.

### Factors Fueling Decolonisation ###

Several powerful factors converged to fuel this global movement:
1.  **Weakening of Colonial Powers:** The war severely weakened the main colonial powers, Britain and France, both economically and militarily. They were heavily in debt and lacked the resources and political will to maintain their vast, restive empires.
2.  **Shattered Myth of Invincibility:** The myth of European invincibility was shattered by Japan's early and swift victories in Southeast Asia, where they defeated the British, French, and Dutch. This proved that European powers were not unbeatable.
3.  **Rise of Nationalism:** Strong, organized nationalist movements had grown within the colonies. Leaders like Gandhi and Nehru in India, Ho Chi Minh in Vietnam, and Sukarno in Indonesia had mobilized their populations and were demanding independence.
4.  **Pressure from New Superpowers:** The two new superpowers that emerged from the war, the United States and the Soviet Union, were ideologically opposed to the old European colonial empires. For their own strategic reasons during the Cold War, they both supported the end of colonialism to gain influence with the newly independent nations.
5.  **The Atlantic Charter and UN:** The ideals of freedom and self-determination, championed by the Allies in documents like the Atlantic Charter and enshrined in the charter of the newly formed United Nations, were hard to deny to the very colonies that had helped them win the war.

### Decolonisation in Asia ###

In Asia, the process was swift but often violent. India's independence in 1947, though marred by the violence of Partition, created a domino effect. Burma (Myanmar) and Ceylon (Sri Lanka) gained independence from Britain in 1948. In Indonesia, nationalists led by Sukarno declared independence in 1945 right after the Japanese surrender. This led to a bitter four-year war of independence against the Dutch, who tried to reclaim their colony. The French fought a long and brutal war in Indochina (1946-1954) to retain their colony but were ultimately defeated by the Viet Minh forces led by Ho Chi Minh at the decisive Battle of Dien Bien Phu. This led to the creation of North and South Vietnam, Laos, and Cambodia.

### The Liberation of Africa ###

In Africa, the path to independence varied. The process began in North Africa with Libya's independence in 1951, followed by Sudan (1956), Tunisia (1956), and Morocco (1956). The Algerian War (1954-1962) was another exceptionally bloody conflict for independence from France, which considered Algeria an integral part of its nation.

In sub-Saharan Africa, Ghana (formerly the Gold Coast) became the first country to gain independence in 1957, under the charismatic leadership of Kwame Nkrumah. Ghana's independence sparked a firestorm of independence movements across the continent. The year 1960 is famously known as the "Year of Africa," as 17 African nations gained independence, mostly from France. The process continued through the 1960s. However, in southern Africa, settler-dominated regimes in Rhodesia and South Africa, and the stubborn Portuguese empire, held on for longer. The Portuguese colonies of Angola and Mozambique only gained independence after a revolution in Portugal itself in 1974.

### The Legacy of Decolonisation ###

Independence did not always lead to stability or prosperity. The arbitrary borders drawn by colonizers often grouped rival ethnic groups together or split communities, leading to tragic civil wars (e.g., Nigeria, Rwanda) and political instability. Many newly independent nations remained economically dependent on their former colonizers through trade and investment, a situation sometimes referred to as "neocolonialism." The legacy of colonialism—in its political structures, economic dependencies, and cultural identities—continues to shape the realities of many countries in the post-colonial world.`,
    quiz: [
        {
          question: 'What was a major impact of World War II on the process of decolonisation?',
          options: ['It strengthened the colonial powers', 'It weakened the colonial powers economically and militarily', 'It stopped all independence movements', 'It led to more colonies being created'],
          correctAnswer: 'It weakened the colonial powers economically and militarily',
          explanation: 'WWII left Britain and France, the two largest colonial empires, exhausted and unable to afford the costs of maintaining their empires against growing nationalist movements.'
        },
        {
          question: 'Which two new superpowers emerged after WWII and were generally supportive of decolonisation?',
          options: ['Britain and France', 'Germany and Japan', 'USA and USSR', 'China and India'],
          correctAnswer: 'USA and USSR',
          explanation: 'Both the United States and the Soviet Union, for their own ideological and strategic reasons in the Cold War, opposed the old European colonial empires.'
        },
        {
          question: 'The year 1960 is often called the "Year of Africa" because:',
          options: ['The African Union was formed', 'A major war started in Africa', '17 African nations gained independence', 'The Scramble for Africa began'],
          correctAnswer: '17 African nations gained independence',
          explanation: '1960 saw a massive wave of decolonisation on the African continent, with 17 countries achieving sovereignty, mostly from France.'
        },
        {
          question: 'What is neocolonialism?',
          options: ['A new wave of acquiring colonies', 'The process of a colony becoming independent', 'Economic and political pressures to control or influence a country, without direct rule', 'The cultural exchange between a colony and its former ruler'],
          correctAnswer: 'Economic and political pressures to control or influence a country, without direct rule',
          explanation: 'Neocolonialism describes the situation where post-colonial nations remain economically and politically dependent on more powerful countries, particularly their former colonizers.'
        },
        {
            question: 'The principle of "self-determination" enshrined in the Atlantic Charter meant that peoples had the right to:',
            options: ['Choose their own form of government', 'Unlimited free trade', 'Join a superpower bloc', 'Maintain their colonial status'],
            correctAnswer: 'Choose their own form of government',
            explanation: 'This principle was a powerful ideological weapon used by nationalist movements to argue for their right to independence.'
        },
        {
            question: 'The French defeat at which battle led to their withdrawal from Indochina?',
            options: ['Battle of Saigon', 'Battle of Hanoi', 'Battle of Dien Bien Phu', 'Battle of the Mekong Delta'],
            correctAnswer: 'Battle of Dien Bien Phu',
            explanation: 'The decisive victory of the Viet Minh at Dien Bien Phu in 1954 was a humiliating defeat for the French army and forced them to negotiate their withdrawal.'
        },
        {
            question: 'Who was the leader of the Vietnamese independence movement against the French?',
            options: ['Pol Pot', 'Sukarno', 'Ho Chi Minh', 'Mao Zedong'],
            correctAnswer: 'Ho Chi Minh',
            explanation: 'Ho Chi Minh was the founder of the Viet Minh and a key figure in the struggle for Vietnam\'s independence from both France and later the United States.'
        },
        {
            question: 'Kwame Nkrumah was the leader who led which country to be the first in sub-Saharan Africa to gain independence?',
            options: ['Nigeria', 'Kenya', 'Congo', 'Ghana'],
            correctAnswer: 'Ghana',
            explanation: 'Kwame Nkrumah led the Gold Coast to independence in 1957, renaming it Ghana, which inspired independence movements across the continent.'
        },
        {
            question: 'The brutal Algerian War of Independence was fought against which colonial power?',
            options: ['Great Britain', 'Belgium', 'Portugal', 'France'],
            correctAnswer: 'France',
            explanation: 'France considered Algeria an integral part of its nation, leading to a particularly long and violent war for independence.'
        },
        {
            question: 'Who was the leader of the Indonesian independence movement?',
            options: ['Suharto', 'Sukarno', 'Hatta', 'Tan Malaka'],
            correctAnswer: 'Sukarno',
            explanation: 'Sukarno was a prominent leader of the Indonesian nationalist movement and became the first President of Indonesia.'
        },
        {
            question: 'The Mau Mau Uprising was a rebellion against British rule in which colony?',
            options: ['South Africa', 'India', 'Kenya', 'Egypt'],
            correctAnswer: 'Kenya',
            explanation: 'The Mau Mau Uprising in the 1950s was a militant nationalist movement by the Kikuyu people against British colonial rule in Kenya.'
        },
        {
            question: 'The Portuguese colonies of Angola and Mozambique gained independence after what event?',
            options: ['A UN resolution', 'A long war with Britain', 'The Carnation Revolution in Portugal', 'A peace treaty signed in Africa'],
            correctAnswer: 'The Carnation Revolution in Portugal',
            explanation: 'The overthrow of the authoritarian regime in Portugal in 1974 led to a new government that quickly granted independence to its remaining colonies.'
        },
        {
            question: 'The "Wind of Change" speech, acknowledging the growth of African nationalism, was made by which political leader?',
            options: ['Winston Churchill', 'Charles de Gaulle', 'Harold Macmillan', 'John F. Kennedy'],
            correctAnswer: 'Harold Macmillan',
            explanation: 'British Prime Minister Harold Macmillan\'s 1960 speech to the South African parliament recognized that the tide had turned in favor of independence, signaling a shift in British policy.'
        },
        {
            question: 'Which of these was a major problem faced by many newly independent African nations?',
            options: ['Lack of natural resources', 'Underpopulation', 'Ethnic conflicts caused by arbitrary colonial borders', 'Too much foreign investment'],
            correctAnswer: 'Ethnic conflicts caused by arbitrary colonial borders',
            explanation: 'The borders drawn by Europeans often lumped together rival ethnic groups, leading to civil wars and instability after independence.'
        },
        {
            question: 'The Suez Crisis of 1956 was a diplomatic humiliation for which two colonial powers?',
            options: ['USA and USSR', 'Britain and France', 'Portugal and Belgium', 'Netherlands and Spain'],
            correctAnswer: 'Britain and France',
            explanation: 'Their invasion of Egypt to reclaim the Suez Canal was opposed by both the US and USSR, forcing them into a humiliating withdrawal and demonstrating their diminished world status.'
        },
        {
            question: 'What was Apartheid?',
            options: ['An independence movement in Africa', 'A system of institutionalized racial segregation in South Africa', 'An economic theory', 'A treaty between colonial powers'],
            correctAnswer: 'A system of institutionalized racial segregation in South Africa',
            explanation: 'Apartheid was a system of white minority rule and racial segregation enforced by the National Party government in South Africa from 1948 to 1994.'
        },
        {
            question: 'Jomo Kenyatta was the first president of which independent nation?',
            options: ['Tanzania', 'Uganda', 'Nigeria', 'Kenya'],
            correctAnswer: 'Kenya',
            explanation: 'Jomo Kenyatta was a leading figure in the Kenyan nationalist movement and became its first president after independence in 1963.'
        },
        {
            question: 'Patrice Lumumba was the first democratically elected Prime Minister of which country, before being assassinated?',
            options: ['Ghana', 'Nigeria', 'Congo', 'Algeria'],
            correctAnswer: 'Congo',
            explanation: 'Patrice Lumumba\'s assassination in 1961, amidst the Congo Crisis and with foreign involvement, was a major tragedy of the decolonization era.'
        },
        {
            question: 'The Dutch tried to reclaim which colony after World War II?',
            options: ['Suriname', 'South Africa', 'Indonesia', 'New Guinea'],
            correctAnswer: 'Indonesia',
            explanation: 'The Indonesian War of Independence was fought from 1945 to 1949 between Indonesian nationalists and the Netherlands, who sought to re-establish their colonial rule.'
        },
        {
            question: 'The United Nations played what role in decolonization?',
            options: ['It actively opposed decolonization', 'It provided a platform for anti-colonial movements and encouraged self-determination', 'It had no role', 'It sent armies to enforce colonial rule'],
            correctAnswer: 'It provided a platform for anti-colonial movements and encouraged self-determination',
            explanation: 'The UN Charter and its Trusteeship Council provided a forum and legitimacy for colonies to demand independence.'
        },
        {
            question: 'The term "Third World" during the Cold War originally referred to:',
            options: ['The poorest countries', 'Countries not aligned with either the US or the USSR', 'Countries in the Southern Hemisphere', 'Communist countries'],
            correctAnswer: 'Countries not aligned with either the US or the USSR',
            explanation: 'The "First World" was the US and its allies, the "Second World" was the USSR and its allies, and the "Third World" comprised the non-aligned, often newly decolonized, nations.'
        },
        {
            question: 'Which of these Asian countries was NOT a European colony?',
            options: ['India', 'Indonesia', 'Vietnam', 'Thailand'],
            correctAnswer: 'Thailand',
            explanation: 'Thailand (formerly Siam) skillfully managed to remain independent by playing the British and French empires off against each other, serving as a buffer state.'
        },
        {
            question: 'The Bandung Conference of 1955 was a meeting of:',
            options: ['European colonial powers', 'The United States and the Soviet Union', 'Asian and African states', 'The United Nations Security Council'],
            correctAnswer: 'Asian and African states',
            explanation: 'The Bandung Conference was a key precursor to the Non-Aligned Movement, where leaders of newly independent nations met to promote economic and cultural cooperation and oppose colonialism.'
        },
        {
            question: 'What was the "domino theory"?',
            options: ['A theory about economic development', 'A US foreign policy theory that if one country fell to communism, surrounding countries would follow', 'A military strategy for decolonization', 'A theory about population growth'],
            correctAnswer: 'A US foreign policy theory that if one country fell to communism, surrounding countries would follow',
            explanation: 'The domino theory was a major justification for US intervention in places like Vietnam, as they feared communism would spread throughout Southeast Asia.'
        },
        {
            question: 'The partitioning of which British colony led to the creation of India and Pakistan?',
            options: ['Burma', 'Ceylon', 'British India', 'Malaya'],
            correctAnswer: 'British India',
            explanation: 'The partition of British India in 1947 was a traumatic event that accompanied the independence of the two nations.'
        },
        {
            question: 'The "French Community" was an organization similar to what British institution?',
            options: ['The National Health Service', 'The British Commonwealth', 'The House of Lords', 'The East India Company'],
            correctAnswer: 'The British Commonwealth',
            explanation: 'The French Community was an association of France and its former colonies, designed to maintain ties and influence after independence.'
        },
        {
            question: 'In what decade did most of the decolonization of Africa occur?',
            options: ['1940s', '1950s', '1960s', '1980s'],
            correctAnswer: '1960s',
            explanation: 'The 1960s saw a massive wave of independence across the African continent, beginning with the "Year of Africa" in 1960.'
        },
        {
            question: 'The Belgian Congo became which independent nation?',
            options: ['Nigeria', 'Ghana', 'The Democratic Republic of the Congo', 'Angola'],
            correctAnswer: 'The Democratic Republic of the Congo',
            explanation: 'The Belgian Congo, which was taken over by the Belgian state from King Leopold II, gained independence in 1960.'
        },
        {
            question: 'Gamal Abdel Nasser was the nationalist leader of which country?',
            options: ['Algeria', 'Libya', 'Egypt', 'Morocco'],
            correctAnswer: 'Egypt',
            explanation: 'Nasser was the second President of Egypt and a major proponent of Pan-Arabism. His nationalization of the Suez Canal led to the Suez Crisis.'
        },
        {
            question: 'The British policy of "divide and rule" involved:',
            options: ['Splitting colonies into smaller, more manageable units', 'Promoting divisions between ethnic or religious groups to maintain control', 'Dividing economic tasks between the colony and the mother country', 'Separating the military from the civilian government'],
            correctAnswer: 'Promoting divisions between ethnic or religious groups to maintain control',
            explanation: 'This strategy, famously used between Hindus and Muslims in India, was a way to prevent a unified opposition from forming against colonial rule.'
        },
        {
            question: 'Which of the following was NOT a factor that contributed to decolonization?',
            options: ['The economic and military exhaustion of colonial powers after WWII', 'The rise of strong nationalist movements', 'The desire of colonized peoples to remain under European rule', 'Pressure from the USA and the USSR'],
            correctAnswer: 'The desire of colonized peoples to remain under European rule',
            explanation: 'On the contrary, the desire for freedom and self-determination was the primary driving force behind the anti-colonial movements.'
        },
        {
            question: 'The Malayan Emergency was a guerrilla war fought by communist fighters against the rule of which colonial power?',
            options: ['France', 'The Netherlands', 'Great Britain', 'Portugal'],
            correctAnswer: 'Great Britain',
            explanation: 'The Malayan Emergency was a long and successful counter-insurgency campaign fought by British and Commonwealth forces, which eventually led to the independence of Malaya (now Malaysia).'
        },
        {
            question: 'The term "settler colonialism" best describes the situation in which of these countries?',
            options: ['India', 'Nigeria', 'Algeria', 'Indonesia'],
            correctAnswer: 'Algeria',
            explanation: 'Algeria had a large population of permanent French settlers (known as "pieds-noirs"), which made the war for independence particularly brutal and complex.'
        },
        {
            question: 'The Atlantic Charter was a joint declaration by which two leaders?',
            options: ['Stalin and Hitler', 'Churchill and Roosevelt', 'De Gaulle and Churchill', 'Roosevelt and Truman'],
            correctAnswer: 'Churchill and Roosevelt',
            explanation: 'The Atlantic Charter, signed in 1941, set out the Allied goals for the post-war world, even before the US entered the war.'
        },
        {
            question: 'The process of decolonization in the Belgian Congo was notably:',
            options: ['Peaceful and well-planned', 'Chaotic and poorly prepared, leading to immediate crisis', 'Delayed until the 1990s', 'Managed by the United Nations from the start'],
            correctAnswer: 'Chaotic and poorly prepared, leading to immediate crisis',
            explanation: 'Belgium did very little to prepare its colony for independence, leading to the Congo Crisis, a period of immense turmoil and civil war, almost immediately after.'
        },
        {
            question: 'Pan-Africanism, an ideology that inspired many independence leaders, advocated for:',
            options: ['The division of Africa into smaller states', 'The political and economic unity of the African continent', 'An alliance with the Soviet Union', 'Maintaining colonial borders'],
            correctAnswer: 'The political and economic unity of the African continent',
            explanation: 'Leaders like Kwame Nkrumah were strong proponents of Pan-Africanism, believing that unity was essential for Africa to be truly independent and strong.'
        },
        {
            question: 'The Organisation of African Unity (OAU), the precursor to the African Union, was founded in:',
            options: ['1957', '1960', '1963', '1994'],
            correctAnswer: '1963',
            explanation: 'The OAU was established in Addis Ababa, Ethiopia, to promote cooperation among African states and to help eradicate colonialism from the continent.'
        },
        {
            question: 'Which country in Southeast Asia was formerly known as Siam?',
            options: ['Vietnam', 'Cambodia', 'Malaysia', 'Thailand'],
            correctAnswer: 'Thailand',
            explanation: 'Thailand is unique in Southeast Asia for never having been formally colonized by a European power.'
        },
        {
            question: 'Robert Mugabe was a nationalist leader who fought against white minority rule in which country?',
            options: ['South Africa', 'Namibia', 'Rhodesia (now Zimbabwe)', 'Angola'],
            correctAnswer: 'Rhodesia (now Zimbabwe)',
            explanation: 'Robert Mugabe was a key figure in the guerrilla war against the white-led government of Rhodesia, becoming the first Prime Minister of independent Zimbabwe.'
        },
        {
            question: 'What was the immediate result of the end of Portuguese rule in Angola and Mozambique?',
            options: ['A period of lasting peace and prosperity', 'The peaceful establishment of democracy', 'Long and devastating civil wars fueled by Cold War rivalries', 'The immediate unification of the two countries'],
            correctAnswer: 'Long and devastating civil wars fueled by Cold War rivalries',
            explanation: 'After independence, different liberation movements, backed by opposing sides in the Cold War (USA/South Africa vs USSR/Cuba), fought for control, leading to protracted civil wars.'
        },
        {
            question: 'The term "Balkanization" is often used to describe a potential negative outcome of decolonization. It means:',
            options: ['Rapid economic growth', 'The peaceful formation of a federation', 'The fragmentation of a state into smaller, hostile units', 'The establishment of a single-party state'],
            correctAnswer: 'The fragmentation of a state into smaller, hostile units',
            explanation: 'This was a major fear for large, diverse colonies like India and Nigeria, where leaders worried the country could break apart after independence.'
        },
        {
            question: 'The official end of the British Empire is often symbolized by:',
            options: ['The independence of India in 1947', 'The Suez Crisis in 1956', 'The handover of Hong Kong to China in 1997', 'The independence of Ghana in 1957'],
            correctAnswer: 'The handover of Hong Kong to China in 1997',
            explanation: 'The return of Hong Kong, one of Britain\'s last major colonial possessions, is widely seen as the final act in the dismantling of the empire.'
        },
        {
            question: 'The Non-Aligned Movement (NAM) was a direct response by newly independent nations to:',
            options: ['The threat of climate change', 'The pressures of the Cold War', 'The spread of capitalism', 'The legacy of colonialism'],
            correctAnswer: 'The pressures of the Cold War',
            explanation: 'NAM was created so that developing countries could avoid being forced to choose between the two superpower blocs and could instead focus on their own development and interests.'
        },
        {
            question: 'The FLN (National Liberation Front) was the main nationalist organization in which country?',
            options: ['Congo', 'Kenya', 'Vietnam', 'Algeria'],
            correctAnswer: 'Algeria',
            explanation: 'The FLN led the armed struggle for independence against France from 1954 to 1962.'
        },
        {
            question: 'Léopold Sédar Senghor, a poet and politician, was the first president of which country?',
            options: ['Ivory Coast', 'Senegal', 'Mali', 'Guinea'],
            correctAnswer: 'Senegal',
            explanation: 'Senghor was a major intellectual figure, a proponent of the concept of "Négritude," and he led Senegal to independence from France.'
        },
        {
            question: 'The United Gold Coast Convention (UGCC) was the first nationalist party in:',
            options: ['Nigeria', 'Ghana', 'Sierra Leone', 'Gambia'],
            correctAnswer: 'Ghana',
            explanation: 'The UGCC initially invited Kwame Nkrumah to be its secretary, but he later broke away to form the more radical Convention People\'s Party (CPP).'
        },
        {
            question: 'The decolonization of the Philippines was primarily from which colonial power?',
            options: ['Spain, then the United States', 'Great Britain', 'The Netherlands', 'Portugal'],
            correctAnswer: 'Spain, then the United States',
            explanation: 'The Philippines was a Spanish colony for centuries before being ceded to the United States after the Spanish-American War of 1898. It gained full independence from the US in 1946.'
        },
        {
            question: 'The "Front for the Liberation of Mozambique" (FRELIMO) fought against the colonial rule of:',
            options: ['Belgium', 'Britain', 'France', 'Portugal'],
            correctAnswer: 'Portugal',
            explanation: 'FRELIMO was the main liberation movement in Mozambique and became the ruling party after independence.'
        },
        {
            question: 'Which of the following best describes the economic legacy of colonialism for many new nations?',
            options: ['Highly developed industrial economies', 'Economies structured around exporting raw materials to the former colonizer', 'Complete economic self-sufficiency', 'Equal trading partnerships with all nations'],
            correctAnswer: 'Economies structured around exporting raw materials to the former colonizer',
            explanation: 'Colonial economies were designed for extraction, not for balanced development. This legacy of dependency on a few primary commodities was a major challenge for newly independent nations.'
        }
    ],
    flashcards: [
      { term: 'Decolonisation', definition: 'The undoing of colonialism, where a nation establishes and maintains its domination over dependent territories.' },
      { term: 'Self-Determination', definition: 'The principle that a people should have the right to freely choose their sovereignty and international political status without interference.' },
      { term: 'Nationalism', definition: 'An ideology that promotes the interests of a particular nation, especially with the aim of gaining and maintaining the nation\'s sovereignty over its homeland.' },
      { term: 'Cold War', definition: 'The state of geopolitical tension after WWII between powers in the Eastern Bloc (the Soviet Union) and powers in the Western Bloc (the United States).' },
      { term: 'Indonesian War of Independence', definition: 'A four-year armed conflict and diplomatic struggle between Indonesia and the Netherlands after WWII, leading to Indonesian sovereignty.' },
      { term: 'Sukarno', definition: 'The first President of Indonesia, who led the country to independence from Dutch rule.' },
      { term: 'First Indochina War (1946-1954)', definition: 'A conflict between the French Union and the Viet Minh, which resulted in the end of French colonial rule in Indochina.' },
      { term: 'Viet Minh', definition: 'A national independence coalition formed in Vietnam, led by Ho Chi Minh, that fought against the French and Japanese.' },
      { term: 'Ho Chi Minh', definition: 'A Vietnamese revolutionary and politician who was a key figure in the foundation of the Democratic Republic of Vietnam (North Vietnam).' },
      { term: 'Algerian War (1954-1962)', definition: 'A complex and brutal war of independence fought between France and the Algerian National Liberation Front (FLN).' },
      { term: 'Ghana', definition: 'Formerly the Gold Coast, it became the first sub-Saharan African country to gain independence from European colonization in 1957.' },
      { term: 'Kwame Nkrumah', definition: 'An influential advocate of Pan-Africanism and the leader of Ghana and its predecessor state, the Gold Coast, from 1951 to 1966.' },
      { term: 'Year of Africa (1960)', definition: 'A year that saw a massive wave of decolonisation in Africa, with 17 nations gaining their independence.' },
      { term: 'Neocolonialism', definition: 'The use of economic, political, cultural, or other pressures to control or influence other countries, especially former dependencies.' },
      { term: 'Pan-Africanism', definition: 'A worldwide intellectual movement that aims to encourage and strengthen bonds of solidarity between all people of African descent.' },
      { term: 'Apartheid', definition: 'A system of institutionalised racial segregation that existed in South Africa and South West Africa from 1948 until the early 1990s.' },
      { term: 'Suez Crisis (1956)', definition: 'An invasion of Egypt by Israel, followed by the United Kingdom and France, which resulted in a diplomatic humiliation for the European powers and highlighted their declining influence.' },
      { term: 'United Nations (UN)', definition: 'An intergovernmental organization founded in 1945 to promote international co-operation and to create and maintain international order. It played a role in supporting decolonisation.' },
      { term: 'Arbitrary Borders', definition: 'Colonial boundaries drawn by European powers without regard to existing ethnic, linguistic, or cultural divisions, a major cause of post-colonial conflict.' },
      { term: 'Commonwealth of Nations', definition: 'A political association of 54 member states, almost all of which are former territories of the British Empire.' },
      { term: 'Atlantic Charter', definition: 'A 1941 pivotal policy statement issued during World War II which defined the Allied goals for the post-war world, including the principle of self-determination.' },
      { term: 'Battle of Dien Bien Phu', definition: 'The climactic 1954 confrontation of the First Indochina War between the French Union and Viet Minh communist revolutionaries. The French defeat was a major blow to their colonial empire.' },
      { 'term': 'Jomo Kenyatta', 'definition': 'A Kenyan anti-colonial activist and politician who played a significant role in Kenya\'s independence and became its first president.' },
      { 'term': 'Mau Mau Uprising', 'definition': 'A war in the British Kenya Colony (1952–1960) between the Kenya Land and Freedom Army (Mau Mau) and the British authorities.' },
      { 'term': 'Patrice Lumumba', 'definition': 'The first democratically elected Prime Minister of the Democratic Republic of the Congo, assassinated in 1961.' },
      { 'term': 'Congo Crisis', 'definition': 'A period of political upheaval and conflict in the Republic of the Congo between 1960 and 1965, beginning almost immediately after its independence from Belgium.' },
      { 'term': 'Carnation Revolution', 'definition': 'A military coup in Portugal in 1974 which overthrew the authoritarian Estado Novo regime and led to the rapid decolonization of its African colonies.' },
      { 'term': 'Wind of Change Speech', 'definition': 'A 1960 address by UK Prime Minister Harold Macmillan acknowledging the rise of African nationalism and the inevitability of decolonization.' },
      { 'term': 'Third World', 'definition': 'A term that arose during the Cold War to define countries that remained non-aligned with either NATO or the Communist Bloc.' },
      { 'term': 'Bandung Conference (1955)', 'definition': 'A meeting of Asian and African states, most of which were newly independent, which was a major step towards the establishment of the Non-Aligned Movement.' },
      { 'term': 'Non-Aligned Movement (NAM)', 'definition': 'A forum of developing world states that are not formally aligned with or against any major power bloc, formed in 1961.' },
      { 'term': 'Gamal Abdel Nasser', 'definition': 'The second President of Egypt, known for his brand of Pan-Arab nationalism and his nationalization of the Suez Canal.' },
      { 'term': 'FLN (National Liberation Front)', 'definition': 'The nationalist movement that led the Algerian War of Independence against France.' },
      { 'term': 'Pieds-noirs', 'definition': 'The term for people of French and other European origin who were born in Algeria during the period of French rule from 1830 to 1962.' },
      { 'term': 'Organisation of African Unity (OAU)', 'definition': 'Established in 1963 to promote unity and solidarity among African states and to eradicate colonialism. It was the precursor to the African Union (AU).' },
      { 'term': 'Léopold Sédar Senghor', 'definition': 'A Senegalese poet, politician, and cultural theorist who, for two decades, served as the first president of Senegal.' },
      { 'term': 'Négritude', 'definition': 'A literary and ideological movement developed by francophone black intellectuals, writers, and politicians as a protest against French colonial rule and assimilation.' },
      { 'term': 'Robert Mugabe', 'definition': 'A Zimbabwean revolutionary and politician who served as Prime Minister and later President of Zimbabwe, after fighting against white minority rule in Rhodesia.' },
      { 'term': 'Angolan Civil War', 'definition': 'A major civil war in the decolonized nation of Angola, which became a proxy battleground for the Cold War superpowers.' },
      { 'term': 'FRELIMO', 'definition': 'The "Front for the Liberation of Mozambique," which fought for and won independence from Portugal.' },
      { 'term': 'Partition of India', 'definition': 'The 1947 division of British India into two independent dominions, India and Pakistan, which accompanied decolonization.' },
      { 'term': 'French Community', 'definition': 'An association of France and its former colonies, established in 1958, similar in concept to the British Commonwealth.' },
      { 'term': 'Domino Theory', 'definition': 'A Cold War-era theory that speculated that if one state in a region came under the influence of communism, then the surrounding countries would follow in a domino effect.' },
      { 'term': 'Ho Chi Minh Trail', 'definition': 'A logistical system that ran from North Vietnam to South Vietnam through Laos and Cambodia, used to supply the Viet Cong during the Vietnam War.' },
      { 'term': 'Trusteeship Council', 'definition': 'One of the main organs of the United Nations, created to supervise the administration of trust territories placed under the UN system to promote their advancement towards self-government or independence.' },
      { 'term': 'Buffer State', 'definition': 'A country lying between two rival or potentially hostile greater powers. Its existence can sometimes be thought to prevent conflict between them. (e.g., Thailand between British Burma and French Indochina).' },
      { 'term': 'Malayan Emergency', 'definition': 'A guerrilla war fought in British Malaya from 1948 to 1960, between Commonwealth armed forces and the Malayan National Liberation Army.' },
      { 'term': 'Hague Round Table Conference', 'definition': 'The 1949 conference that led to the Netherlands formally recognizing Indonesian sovereignty.' },
      { 'term': 'Congo Free State', 'definition': 'The notorious private colony of King Leopold II of Belgium before it was taken over by the Belgian state.' },
      { 'term': 'Handover of Hong Kong', 'definition': 'The transfer of sovereignty over Hong Kong from the United Kingdom to the People\'s Republic of China in 1997, seen as the symbolic end of the British Empire.' }
    ]
  },
  {
    id: '10',
    title: 'Cold War',
    description: 'Cold War politics, non‑alignment, SAARC, Commonwealth, NATO etc.',
    content: `### The Dawn of a Bipolar World ###

The Cold War (approx. 1947-1991) was a period of intense geopolitical tension and ideological rivalry between two opposing superpowers: the United States and the Soviet Union. It emerged from the ashes of World War II, as the wartime alliance between the two nations broke down over disagreements about the future of a post-war Europe. It was a "cold" war because there was no large-scale direct fighting between the two superpowers, largely due to the terrifying prospect of nuclear annihilation. Instead, they engaged in a global struggle for influence, fighting numerous proxy wars in other parts of the world.

### Two Blocs: NATO vs. the Warsaw Pact ###

The world became broadly divided into two hostile blocs.
**The Western Bloc:** Led by the United States, this bloc championed capitalism, liberal democracy, and individual freedoms. To counter the perceived threat of Soviet expansion, the U.S. and its Western European allies formed the North Atlantic Treaty Organization (NATO) in 1949. NATO was a collective security alliance based on the principle that an attack on one member was an attack on all.
**The Eastern Bloc:** Led by the Soviet Union (USSR), this bloc promoted communism, a state-controlled command economy, and one-party rule. The USSR established its control over the countries of Eastern Europe, which became known as its satellite states. In response to the formation of NATO, the Soviet Union formed its own military alliance, the Warsaw Pact, in 1955. The "Iron Curtain," a term famously coined by Winston Churchill, symbolized the ideological and physical boundary dividing Europe into these two separate areas.

### Hallmarks of the Cold War ###

The Cold War was characterized by several key features:
*   **The Arms Race:** A frantic competition between the US and USSR to develop more numerous and powerful weapons, particularly nuclear weapons. This led to a state of "Mutually Assured Destruction" (MAD), where both sides had enough firepower to destroy each other completely, a fact that ironically kept the peace through terror.
*   **The Space Race:** A competition for dominance in space exploration, which served as a proxy for technological and ideological superiority. It began with the Soviet launch of Sputnik in 1957 and culminated in the US landing a man on the Moon in 1969.
*   **Proxy Wars:** The superpowers avoided direct conflict but supported opposing sides in regional wars around the globe, such as the Korean War (1950-53), the Vietnam War (1955-1975), and the Soviet-Afghan War (1979-1989).
*   **Espionage and Propaganda:** Both sides engaged in intense intelligence gathering through agencies like the CIA (US) and the KGB (USSR), and used propaganda to demonize the opposing ideology.

### The Non-Aligned Movement: A Third Path ###

In the midst of this bipolar world, many newly independent nations of Asia and Africa sought to carve out a third path. This led to the formation of the Non-Aligned Movement (NAM) at the Belgrade Conference in 1961. Led by figures like India's Jawaharlal Nehru, Egypt's Gamal Abdel Nasser, and Yugoslavia's Josip Broz Tito, NAM provided a platform for these nations to assert their independence and avoid being drawn into the superpower blocs. They sought to pursue their own interests and promote global peace and cooperation.

### Regional Organizations ###

Regional organizations also played a significant role. The **Commonwealth of Nations**, a voluntary association of former British colonies including India, evolved into a forum for cooperation. In South Asia, the **South Asian Association for Regional Cooperation (SAARC)** was established in 1985 by nations including India, Pakistan, and Bangladesh to promote economic and social development.

### The End of the Cold War ###

The Cold War began to thaw in the late 1980s under the leadership of the last Soviet Premier, Mikhail Gorbachev. His transformative policies of "glasnost" (openness) and "perestroika" (economic restructuring) unleashed forces that the Soviet system could not contain. This led to a series of largely peaceful revolutions that overthrew communist regimes across Eastern Europe in 1989. The dramatic fall of the Berlin Wall in November 1989 became the most powerful symbol of the end of the Cold War. The war formally concluded with the dissolution of the Soviet Union itself in December 1991, leaving the United States as the world's sole superpower.`,
    quiz: [
        {
          question: 'The Cold War was a period of geopolitical tension between which two superpowers?',
          options: ['USA and China', 'UK and Germany', 'USA and Soviet Union', 'France and Russia'],
          correctAnswer: 'USA and Soviet Union',
          explanation: 'The Cold War was defined by the ideological, political, and military rivalry between the capitalist United States and the communist Soviet Union.'
        },
        {
          question: 'What was NATO?',
          options: ['A trade agreement', 'A cultural exchange program', 'A military alliance of communist countries', 'A military alliance of Western countries'],
          correctAnswer: 'A military alliance of Western countries',
          explanation: 'The North Atlantic Treaty Organization (NATO) was formed in 1949 as a collective defense alliance led by the United States to counter Soviet influence.'
        },
        {
          question: 'The Non-Aligned Movement (NAM) was formed by countries that wanted to:',
          options: ['Join the Soviet bloc', 'Join the Western bloc', 'Remain independent of both superpower blocs', 'Create a new military alliance'],
          correctAnswer: 'Remain independent of both superpower blocs',
          explanation: 'NAM was founded by newly independent nations to assert their neutrality and avoid being drawn into the Cold War conflicts between the US and the USSR.'
        },
        {
          question: 'What event in 1989 is widely seen as the symbolic end of the Cold War?',
          options: ['The start of the Vietnam War', 'The Cuban Missile Crisis', 'The dissolution of the Soviet Union', 'The fall of the Berlin Wall'],
          correctAnswer: 'The fall of the Berlin Wall',
          explanation: 'The fall of the Berlin Wall in November 1989 symbolized the collapse of the "Iron Curtain" and the impending end of communist rule in Eastern Europe.'
        },
        {
            question: 'The military alliance formed by the Soviet Union and its Eastern European allies was called:',
            options: ['The Moscow Agreement', 'The Eastern Bloc Alliance', 'The Warsaw Pact', 'The Comintern'],
            correctAnswer: 'The Warsaw Pact',
            explanation: 'The Warsaw Pact was created in 1955 as a direct response to West Germany joining NATO.'
        },
        {
            question: 'The term "Iron Curtain" was famously coined by whom to describe the division of Europe?',
            options: ['Harry S. Truman', 'Joseph Stalin', 'Winston Churchill', 'Franklin D. Roosevelt'],
            correctAnswer: 'Winston Churchill',
            explanation: 'Winston Churchill used the phrase in a speech in 1946 to describe the ideological and physical boundary separating Soviet-controlled Eastern Europe from the West.'
        },
        {
            question: 'What was a "proxy war"?',
            options: ['A war fought entirely with machines', 'A war instigated by a major power that does not itself become directly involved', 'A war fought over a legal document (proxy)', 'A short, limited war'],
            correctAnswer: 'A war instigated by a major power that does not itself become directly involved',
            explanation: 'During the Cold War, the US and USSR supported opposing sides in conflicts like the Korean and Vietnam Wars instead of fighting each other directly.'
        },
        {
            question: 'Which of these was a major Cold War crisis that brought the world to the brink of nuclear war?',
            options: ['The Suez Crisis', 'The Cuban Missile Crisis', 'The Falklands War', 'The Six-Day War'],
            correctAnswer: 'The Cuban Missile Crisis',
            explanation: 'The 1962 crisis over Soviet nuclear missiles placed in Cuba is considered the closest the two superpowers ever came to a full-scale nuclear exchange.'
        },
        {
            question: 'The Soviet Union\'s equivalent of the American CIA was the:',
            options: ['MI6', 'Mossad', 'Stasi', 'KGB'],
            correctAnswer: 'KGB',
            explanation: 'The KGB (Committee for State Security) was the main security agency for the Soviet Union from 1954 until its 1991 dissolution.'
        },
        {
            question: 'Which of these leaders was NOT a key founder of the Non-Aligned Movement?',
            options: ['Jawaharlal Nehru (India)', 'Gamal Abdel Nasser (Egypt)', 'Mao Zedong (China)', 'Josip Broz Tito (Yugoslavia)'],
            correctAnswer: 'Mao Zedong (China)',
            explanation: 'China, as a major communist power, was part of the Eastern Bloc and not a member of the Non-Aligned Movement.'
        },
        {
            question: 'The policy of "glasnost" introduced by Mikhail Gorbachev refers to:',
            options: ['Economic restructuring', 'Increased openness and transparency', 'Military expansion', 'Suppression of dissent'],
            correctAnswer: 'Increased openness and transparency',
            explanation: '"Glasnost" allowed for greater freedom of speech and press, which exposed the deep problems within the Soviet system.'
        },
        {
            question: 'The Cold War officially ended with what event in 1991?',
            options: ['The reunification of Germany', 'The end of the Vietnam War', 'The dissolution of the Soviet Union', 'The signing of the SALT II treaty'],
            correctAnswer: 'The dissolution of the Soviet Union',
            explanation: 'The formal dissolution of the USSR in December 1991 marked the end of the bipolar world order and the conclusion of the Cold War.'
        },
        {
            question: 'The "Space Race" began with which event?',
            options: ['The US moon landing', 'The launch of the Hubble Telescope', 'The Soviet launch of the Sputnik satellite', 'The creation of NASA'],
            correctAnswer: 'The Soviet launch of the Sputnik satellite',
            explanation: 'The successful launch of Sputnik 1 by the Soviets in 1957 shocked the United States and kicked off the intense competition for space dominance.'
        },
        {
            question: 'SAARC is a regional cooperation organization for countries in which region?',
            options: ['Southeast Asia', 'South Asia', 'South America', 'Sub-Saharan Africa'],
            correctAnswer: 'South Asia',
            explanation: 'SAARC stands for the South Asian Association for Regional Cooperation.'
        },
        {
            question: 'The concept of "Mutually Assured Destruction" (MAD) was based on the massive arsenals of what type of weapons?',
            options: ['Chemical weapons', 'Biological weapons', 'Conventional armies', 'Nuclear weapons'],
            correctAnswer: 'Nuclear weapons',
            explanation: 'MAD is a doctrine of military strategy where a full-scale use of nuclear weapons by two opposing sides would cause the complete annihilation of both the attacker and the defender.'
        },
        {
            question: 'The Truman Doctrine was a US policy aimed at:',
            options: ['Creating the United Nations', 'Containing the spread of communism', 'Promoting free trade', 'Ending colonialism'],
            correctAnswer: 'Containing the spread of communism',
            explanation: 'The Truman Doctrine, established in 1947, pledged US support for free peoples resisting subjugation by armed minorities or outside pressures, which was directed at Soviet influence.'
        },
        {
            question: 'The Marshall Plan was a US initiative to:',
            options: ['Rebuild Western Europe after WWII', 'Invade the Soviet Union', 'Develop nuclear weapons', 'Create NATO'],
            correctAnswer: 'Rebuild Western Europe after WWII',
            explanation: 'The Marshall Plan provided billions of dollars in aid to help rebuild war-torn European economies, partly to make them less susceptible to the appeal of communism.'
        },
        {
            question: 'The Berlin Blockade was a Soviet attempt to:',
            options: ['Build a wall through Berlin', 'Force the Western Allies out of West Berlin', 'Start a war with the US', 'Deliver supplies to East Berlin'],
            correctAnswer: 'Force the Western Allies out of West Berlin',
            explanation: 'The Soviets blocked all land and rail access to West Berlin in 1948, prompting the Western Allies to supply the city through a massive airlift.'
        },
        {
            question: 'In which country did the US and the USSR fight a major proxy war from 1955 to 1975?',
            options: ['Korea', 'Cuba', 'Afghanistan', 'Vietnam'],
            correctAnswer: 'Vietnam',
            explanation: 'The Vietnam War was a long and divisive conflict where the US and its allies supported South Vietnam against the communist North Vietnam, which was backed by the USSR and China.'
        },
        {
            question: 'The policy of "perestroika" introduced by Gorbachev aimed to:',
            options: ['Increase military spending', 'Restrict personal freedoms', 'Restructure the Soviet economy and political system', 'Expand the Soviet Union\'s territory'],
            correctAnswer: 'Restructure the Soviet economy and political system',
            explanation: '"Perestroika" involved introducing elements of market economics and decentralizing control to combat the stagnation of the Soviet economy.'
        },
        {
            question: 'Which of these countries is a founding member of SAARC?',
            options: ['China', 'Myanmar', 'India', 'Thailand'],
            correctAnswer: 'India',
            explanation: 'India, along with Pakistan, Bangladesh, Sri Lanka, Nepal, Maldives, and Bhutan, was a founding member of SAARC in 1985.'
        },
        {
            question: 'Yugoslavia, under Josip Broz Tito, was unique in the Eastern Bloc because it:',
            options: ['Was a member of NATO', 'Resisted Soviet domination and pursued an independent form of communism', 'Remained a monarchy', 'Had the strongest economy'],
            correctAnswer: 'Resisted Soviet domination and pursued an independent form of communism',
            explanation: 'Tito\'s break with Stalin in 1948 allowed Yugoslavia to follow its own path and become a key leader of the Non-Aligned Movement.'
        },
        {
            question: 'The "domino theory" was a US justification for its involvement in:',
            options: ['The Middle East', 'Latin America', 'Southeast Asia', 'Africa'],
            correctAnswer: 'Southeast Asia',
            explanation: 'The domino theory held that if one country in Southeast Asia fell to communism, others would follow, which was used to justify the Vietnam War.'
        },
        {
            question: 'The Commonwealth of Nations is a voluntary association of:',
            options: ['Former French colonies', 'Former British colonies', 'All European countries', 'All South Asian countries'],
            correctAnswer: 'Former British colonies',
            explanation: 'The Commonwealth is a political association of 54 member states, almost all of which are former territories of the British Empire.'
        },
        {
            question: 'The Korean War resulted in:',
            options: ['A victory for North Korea', 'A victory for South Korea', 'A stalemate, with the country remaining divided', 'The unification of Korea under a neutral government'],
            correctAnswer: 'A stalemate, with the country remaining divided',
            explanation: 'The war ended in 1953 with an armistice that established a demilitarized zone (DMZ) near the 38th parallel, roughly the original boundary.'
        },
        {
            question: 'The period of relaxed tensions between the US and USSR in the 1970s was known as:',
            options: ['Glasnost', 'Perestroika', 'Détente', 'Containment'],
            correctAnswer: 'Détente',
            explanation: 'Détente was a period of improved relations, characterized by arms control talks (SALT) and increased trade and cooperation.'
        },
        {
            question: 'The Soviet invasion of which country in 1979 effectively ended the period of détente?',
            options: ['Vietnam', 'Cuba', 'Afghanistan', 'Poland'],
            correctAnswer: 'Afghanistan',
            explanation: 'The Soviet-Afghan War was a major turning point that led to a new period of hostility, including the US boycott of the 1980 Moscow Olympics.'
        },
        {
            question: 'The "satellite states" of the Soviet Union were located in:',
            options: ['Western Europe', 'Eastern Europe', 'Central Asia', 'Latin America'],
            correctAnswer: 'Eastern Europe',
            explanation: 'Countries like Poland, Hungary, Czechoslovakia, and East Germany were under the political, economic, and military control of the Soviet Union.'
        },
        {
            question: 'What was the U-2 incident of 1960?',
            options: ['A failed US-backed invasion of Cuba', 'The shooting down of a US spy plane over the Soviet Union', 'A nuclear submarine collision', 'A secret meeting between Kennedy and Khrushchev'],
            correctAnswer: 'The shooting down of a US spy plane over the Soviet Union',
            explanation: 'The incident derailed a major summit between the two superpowers and heightened tensions.'
        },
        {
            question: 'Which of these countries was NOT a permanent member of the UN Security Council during the Cold War?',
            options: ['USA', 'USSR', 'France', 'Germany'],
            correctAnswer: 'Germany',
            explanation: 'Germany was divided for most of the Cold War. The five permanent members are the US, USSR (now Russia), UK, France, and China.'
        },
        {
            question: 'The Solidarity movement was a trade union and political movement in which Eastern Bloc country?',
            options: ['Hungary', 'Czechoslovakia', 'Poland', 'Romania'],
            correctAnswer: 'Poland',
            explanation: 'The Solidarity movement, led by Lech Wałęsa, played a central role in challenging communist rule in Poland and ultimately prevailing.'
        },
        {
            question: 'What was the main purpose of the Berlin Wall?',
            options: ['To protect West Berlin from a Soviet invasion', 'To prevent East Germans from fleeing to the West', 'To serve as a defensive fortification', 'To mark the city limits'],
            correctAnswer: 'To prevent East Germans from fleeing to the West',
            explanation: 'The wall was built by the East German government in 1961 to stop the massive "brain drain" of its citizens escaping to democratic West Berlin.'
        },
        {
            question: 'SEATO (Southeast Asia Treaty Organization) was an alliance created by which bloc?',
            options: ['The Western Bloc', 'The Eastern Bloc', 'The Non-Aligned Movement', 'The Arab League'],
            correctAnswer: 'The Western Bloc',
            explanation: 'SEATO was a US-led anti-communist alliance for Southeast Asia, though it was generally considered a failure.'
        },
        {
            question: 'The Hungarian Uprising of 1956 was:',
            options: ['A successful revolution that overthrew communist rule', 'A nationwide revolt against the communist government that was brutally crushed by the Soviet army', 'A peaceful transition to democracy', 'A pro-Soviet coup'],
            correctAnswer: 'A nationwide revolt against the communist government that was brutally crushed by the Soviet army',
            explanation: 'The Soviet invasion of Hungary showed that the USSR would not tolerate any attempt by its satellite states to leave the Warsaw Pact.'
        },
        {
            question: 'The term "bipolar world" refers to an international system dominated by:',
            options: ['One superpower', 'Two superpowers', 'Multiple superpowers', 'No superpowers'],
            correctAnswer: 'Two superpowers',
            explanation: 'The Cold War is the primary example of a bipolar international system, dominated by the US and the USSR.'
        },
        {
            question: 'Which US President famously called the Soviet Union an "evil empire"?',
            options: ['John F. Kennedy', 'Richard Nixon', 'Jimmy Carter', 'Ronald Reagan'],
            correctAnswer: 'Ronald Reagan',
            explanation: 'Reagan took a hard-line, confrontational stance against the Soviet Union in the early 1980s, departing from the policy of détente.'
        },
        {
            question: 'The Velvet Revolution refers to the non-violent overthrow of communism in which country?',
            options: ['Poland', 'Hungary', 'East Germany', 'Czechoslovakia'],
            correctAnswer: 'Czechoslovakia',
            explanation: 'The Velvet Revolution was a smooth, peaceful transition of power in Czechoslovakia in 1989.'
        },
        {
            question: 'What was the purpose of the SALT (Strategic Arms Limitation Talks) treaties?',
            options: ['To increase the number of nuclear weapons', 'To limit the number of nuclear weapons held by the US and USSR', 'To ban conventional weapons', 'To share nuclear technology'],
            correctAnswer: 'To limit the number of nuclear weapons held by the US and USSR',
            explanation: 'The SALT treaties were a key part of the détente era, aimed at controlling the nuclear arms race.'
        },
        {
            question: 'The "Red Scare" in the United States was a period of intense fear of:',
            options: ['British influence', 'Economic depression', 'Communism', 'Nuclear war'],
            correctAnswer: 'Communism',
            explanation: 'Particularly in the late 1940s and 1950s, the Red Scare led to McCarthyism and the persecution of suspected communists in the US.'
        },
        {
            question: 'Which of the following countries is NOT a member of the Commonwealth of Nations?',
            options: ['India', 'Australia', 'Canada', 'United States'],
            correctAnswer: 'United States',
            explanation: 'Although a former British colony, the United States is not a member of the Commonwealth.'
        },
        {
            question: 'The first successful artificial satellite, Sputnik 1, was launched by:',
            options: ['The United States', 'The Soviet Union', 'Great Britain', 'China'],
            correctAnswer: 'The Soviet Union',
            explanation: 'The 1957 launch of Sputnik 1 was a major technological triumph for the USSR and a shock to the US.'
        },
        {
            question: 'What was the Brezhnev Doctrine?',
            options: ['A policy of peaceful coexistence', 'A Soviet foreign policy that justified invading socialist countries that were trying to liberalize', 'A plan for economic reform', 'A treaty to ban nuclear tests'],
            correctAnswer: 'A Soviet foreign policy that justified invading socialist countries that were trying to liberalize',
            explanation: 'The Brezhnev Doctrine was used to justify the Soviet invasion of Czechoslovakia in 1968 to crush the "Prague Spring."'
        },
        {
            question: 'The Prague Spring was a period of political liberalization in 1968 in which country?',
            options: ['Poland', 'Hungary', 'East Germany', 'Czechoslovakia'],
            correctAnswer: 'Czechoslovakia',
            explanation: 'The reforms of the Prague Spring were seen as a threat by Moscow, leading to an invasion by Warsaw Pact forces.'
        },
        {
            question: 'The US policy of "containment" during the Cold War was intended to:',
            options: ['Destroy the Soviet Union militarily', 'Prevent the spread of communism beyond its existing borders', 'Convert the Soviet Union to capitalism', 'Ignore the Soviet Union completely'],
            correctAnswer: 'Prevent the spread of communism beyond its existing borders',
            explanation: 'Formulated by diplomat George F. Kennan, containment was the cornerstone of US foreign policy for much of the Cold War.'
        },
        {
            question: 'Who was the leader of the communist revolution in Cuba?',
            options: ['Che Guevara', 'Fidel Castro', 'Fulgencio Batista', 'Augusto Pinochet'],
            correctAnswer: 'Fidel Castro',
            explanation: 'Fidel Castro overthrew the US-backed dictator Batista in 1959 and established a communist state in Cuba, just off the coast of the United States.'
        },
        {
            question: 'The "Bay of Pigs" invasion was a failed attempt by:',
            options: ['The USSR to invade the US', 'Cuban exiles, backed by the CIA, to overthrow Fidel Castro', 'North Vietnam to invade South Vietnam', 'East Germany to take over West Berlin'],
            correctAnswer: 'Cuban exiles, backed by the CIA, to overthrow Fidel Castro',
            explanation: 'The failed invasion in 1961 was a major embarrassment for the Kennedy administration and pushed Cuba closer to the Soviet Union.'
        },
        {
            question: 'The first man to orbit the Earth was:',
            options: ['Neil Armstrong (USA)', 'John Glenn (USA)', 'Yuri Gagarin (USSR)', 'Alexei Leonov (USSR)'],
            correctAnswer: 'Yuri Gagarin (USSR)',
            explanation: 'Soviet cosmonaut Yuri Gagarin became the first human in space and the first to orbit the Earth in 1961, a major victory for the USSR in the Space Race.'
        },
        {
            question: 'The "revolutions of 1989" refer to the series of events that:',
            options: ['Brought communist parties to power in Western Europe', 'Led to the overthrow of communist regimes in Eastern Europe', 'Started the Cold War', 'Led to the formation of the Non-Aligned Movement'],
            correctAnswer: 'Led to the overthrow of communist regimes in Eastern Europe',
            explanation: 'In a stunningly rapid sequence, popular movements toppled communist governments in Poland, Hungary, East Germany, Bulgaria, Czechoslovakia, and Romania.'
        },
        {
            question: 'The concept of a "bipolar" international system was replaced after the Cold War by a system that is often described as:',
            options: ['Multipolar (multiple powers)', 'Unipolar (one dominant power)', 'Nonpolar (no major powers)', 'Bilateral (two allied powers)'],
            correctAnswer: 'Unipolar (one dominant power)',
            explanation: 'With the collapse of the USSR, the United States was left as the world\'s only superpower, creating a unipolar moment in international relations.'
        }
    ],
    flashcards: [
      { term: 'Cold War', definition: 'A state of geopolitical tension (c. 1947-1991) between the US-led Western Bloc and the USSR-led Eastern Bloc, without large-scale direct fighting.' },
      { term: 'Superpower', definition: 'A state with a dominant position characterized by its extensive ability to exert influence or project power on a global scale. (e.g., USA, USSR).' },
      { term: 'Capitalism', definition: 'An economic system in which trade and industry are controlled by private owners for profit, rather than by the state. Championed by the US.' },
      { term: 'Communism', definition: 'A political and economic ideology that positions itself in opposition to liberal democracy and capitalism, advocating for a classless system. Championed by the USSR.' },
      { term: 'Western Bloc', definition: 'The countries allied with the United States and NATO against the Soviet Union and the Warsaw Pact during the Cold War.' },
      { term: 'Eastern Bloc', definition: 'The group of communist states of Central and Eastern Europe, East Asia, and Southeast Asia under the hegemony of the Soviet Union.' },
      { term: 'Iron Curtain', definition: 'A term symbolizing the ideological conflict and physical boundary dividing Europe into two separate areas from the end of WWII until the end of the Cold War.' },
      { term: 'NATO', definition: 'North Atlantic Treaty Organization; a military alliance formed in 1949 by Western countries to provide collective security against the Soviet Union.' },
      { term: 'Warsaw Pact', definition: 'A collective defense treaty signed in Warsaw, Poland among the Soviet Union and seven Soviet satellite states of Central and Eastern Europe in May 1955.' },
      { term: 'Arms Race', definition: 'A competition between two or more states to have the best armed forces, particularly seen in the nuclear weapon buildup between the US and USSR.' },
      { term: 'Mutually Assured Destruction (MAD)', definition: 'A doctrine of military strategy in which a full-scale use of nuclear weapons by two or more opposing sides would cause the complete annihilation of both.' },
      { term: 'Proxy War', definition: 'A war instigated by a major power that does not itself become involved. (e.g., Korean War, Vietnam War).' },
      { term: 'Cuban Missile Crisis (1962)', definition: 'A 13-day confrontation between the US and the USSR concerning Soviet ballistic missile deployment in Cuba, the closest the Cold War came to a full-scale nuclear war.' },
      { term: 'Non-Aligned Movement (NAM)', definition: 'A forum of 120 developing world states that are not formally aligned with or against any major power bloc.' },
      { term: 'Jawaharlal Nehru', definition: 'The first Prime Minister of India and a co-founder of the Non-Aligned Movement.' },
      { term: 'SAARC', definition: 'South Asian Association for Regional Cooperation; a regional intergovernmental organization of states in South Asia, founded in 1985.' },
      { term: 'Commonwealth of Nations', definition: 'A political association of 54 member states, nearly all former territories of the British Empire, which fosters cooperation.' },
      { term: 'Mikhail Gorbachev', definition: 'The last leader of the Soviet Union, whose reforms of glasnost and perestroika led to the end of the Cold War.' },
      { term: 'Glasnost', definition: 'A Soviet policy of more open consultative government and wider dissemination of information, initiated by Gorbachev.' },
      { term: 'Perestroika', definition: 'A political movement for reformation within the Communist Party of the Soviet Union during the 1980s, associated with Gorbachev.' },
      { term: 'Fall of the Berlin Wall', definition: 'The pivotal event in 1989 that marked the symbolic end of the Iron Curtain and the Cold War.' },
      { term: 'Dissolution of the Soviet Union', definition: 'The formal breakup of the Union of Soviet Socialist Republics in 1991, officially ending the Cold War.' },
      { term: 'Containment', definition: 'The cornerstone of US foreign policy during the Cold War, which aimed to prevent the spread of communism.' },
      { 'term': 'Truman Doctrine', 'definition': 'A principle of US foreign policy to support countries threatened by Soviet communism, first expressed in 1947.' },
      { 'term': 'Marshall Plan', 'definition': 'A US initiative that provided over $13 billion in economic aid to help rebuild Western European economies after WWII, partly to counter communism.' },
      { 'term': 'Space Race', 'definition': 'The 20th-century competition between the US and USSR for supremacy in spaceflight capability.' },
      { 'term': 'Sputnik 1', 'definition': 'The first artificial Earth satellite, launched by the Soviet Union in 1957, which kickstarted the Space Race.' },
      { 'term': 'Korean War (1950-1953)', 'definition': 'A proxy war where the US-backed South Korea fought against the Soviet/Chinese-backed North Korea, ending in a stalemate.' },
      { 'term': 'Vietnam War (1955-1975)', 'definition': 'A long, costly proxy war where the US and its allies supported South Vietnam against the communist North Vietnam.' },
      { 'term': 'Domino Theory', 'definition': 'The US belief that a communist victory in one nation would quickly lead to a chain reaction of communist takeovers in neighboring states.' },
      { 'term': 'Détente', 'definition': 'A period of eased tensions between the US and the USSR in the 1970s, characterized by arms control treaties like SALT.' },
      { 'term': 'Soviet-Afghan War (1979-1989)', 'definition': 'A nine-year proxy war where the USSR invaded Afghanistan to support a communist government, fighting against insurgents (the Mujahideen) backed by the US.' },
      { 'term': 'Josip Broz Tito', 'definition': 'The communist leader of Yugoslavia who successfully broke from Soviet control and became a co-founder of the Non-Aligned Movement.' },
      { 'term': 'Gamal Abdel Nasser', 'definition': 'The president of Egypt and a key leader of the Non-Aligned Movement and Pan-Arabism.' },
      { 'term': 'Berlin Airlift', 'definition': 'A massive operation by Western powers to supply West Berlin by air after the Soviet Union blockaded land access in 1948.' },
      { 'term': 'CIA (Central Intelligence Agency)', 'definition': 'The primary foreign intelligence service of the United States federal government.' },
      { 'term': 'KGB (Committee for State Security)', 'definition': 'The main intelligence and state security agency of the Soviet Union.' },
      { 'term': 'Satellite State', 'definition': 'A country that is formally independent but under heavy political, economic, and military influence or control from another country.' },
      { 'term': 'Bipolar World', 'definition': 'An international system where power is concentrated around two major poles or superpowers.' },
      { 'term': 'Unipolar World', 'definition': 'An international system dominated by a single superpower, as was the case with the US after the Cold War.' },
      { 'term': 'Revolutions of 1989', 'definition': 'A series of revolutions that resulted in the end of communist rule in Central and Eastern European countries.' },
      { 'term': 'Solidarity Movement', 'definition': 'A Polish trade union and social movement, led by Lech Wałęsa, that was instrumental in ending communist rule in Poland.' },
      { 'term': 'Prague Spring', 'definition': 'A period of political liberalization in Czechoslovakia in 1968 that was brutally crushed by a Soviet-led Warsaw Pact invasion.' },
      { 'term': 'Brezhnev Doctrine', 'definition': 'A Soviet foreign policy that asserted the right to intervene in any socialist country where a communist government was under threat.' },
      { 'term': 'Ronald Reagan', 'definition': 'A US President who took a hard-line stance against the USSR in the 1980s, famously calling it an "evil empire."' },
      { 'term': 'SALT (Strategic Arms Limitation Talks)', 'definition': 'A series of negotiations between the U.S. and the U.S.S.R. on the issue of nuclear arms reduction.' },
      { 'term': 'Fidel Castro', 'definition': 'The revolutionary leader who established a communist state in Cuba, a key Cold War flashpoint.' },
      { 'term': 'Bay of Pigs Invasion', 'definition': 'A failed 1961 landing operation on the southwestern coast of Cuba by CIA-sponsored Cuban exiles who opposed Fidel Castro\'s Cuban Revolution.' },
      { 'term': 'Yuri Gagarin', 'definition': 'A Soviet cosmonaut who became the first human to journey into outer space in 1961.' },
      { 'term': 'Neil Armstrong', 'definition': 'An American astronaut and the first person to walk on the Moon, a major victory for the US in the Space Race in 1969.' }
    ]
  },
  {
    id: '11',
    title: 'India Transformed – Part 1',
    description: 'Transformation of India—economic reforms, technology, policies, state reorganisation',
    content: `### The 1991 Economic Reforms: A New Trajectory ###

Since its independence in 1947, India has undergone a dramatic transformation, but a pivotal turning point was the economic liberalization of 1991. Faced with a severe balance of payments crisis—where India was on the verge of defaulting on its foreign loans—the government under Prime Minister P.V. Narasimha Rao, with Dr. Manmohan Singh as Finance Minister, initiated a series of radical economic reforms. These reforms systematically dismantled the "License Raj," an elaborate and stifling system of licenses, permits, and regulations that had controlled the economy for decades. The reforms opened up the Indian economy to international trade and investment, reduced tariffs, devalued the currency to boost exports, and encouraged the private sector. This marked a fundamental shift from a largely closed, socialist-inspired economy to a more open, market-based economy, which unleashed India's immense economic potential.

### The IT and Telecom Revolution ###

One of the most visible and spectacular outcomes of liberalization was the boom in the Information Technology (IT) and software services industry. Taking advantage of a large, educated, English-speaking workforce and lower costs, Indian companies began providing software services to global corporations. Cities like Bangalore (now Bengaluru), Hyderabad, and Pune became global hubs for software development, IT-enabled services (ITES), and business process outsourcing (BPO). This created millions of well-paying jobs and fueled the growth of a new, aspirational, and consumerist middle class. This technological revolution was accompanied by a telecommunications revolution. The opening up of the telecom sector led to a massive drop in prices and an explosion in connectivity, with mobile phones and later the internet reaching even the most remote parts of the country, transforming communication and access to information.

### India's Evolving Foreign Policy ###

India's foreign policy has also transformed significantly. During the Cold War, India was a leader of the Non-Aligned Movement (NAM), maintaining a policy of strategic autonomy from both the US and Soviet blocs. In the post-Cold War era, India has moved towards a more pragmatic approach of building strategic partnerships with multiple major powers, including the United States, Russia, Japan, and countries in Europe. India has maintained its commitment to principles of peaceful coexistence, non-interference in the internal affairs of other countries, and the resolution of disputes through dialogue and negotiation. India has played an important role in regional cooperation through organizations like SAARC (South Asian Association for Regional Cooperation).

### Reorganising States: The Changing Political Map ###

Domestically, the political map of India has been redrawn multiple times to reflect regional and linguistic aspirations. The first major effort was the States Reorganisation Act of 1956, which reorganized state boundaries primarily along linguistic lines. This process of creating new states has continued over the years. In 2000, three new states were created: Jharkhand (carved out of Bihar), Chhattisgarh (from Madhya Pradesh), and Uttarakhand (from Uttar Pradesh), to give a voice to the distinct tribal and hill populations of these regions. The most recent new state was Telangana, formed in 2014 by splitting from Andhra Pradesh after a long-standing popular movement. In 2019, the state of Jammu and Kashmir was reorganized into two Union Territories.

### Achievements in Science and Technology ###

Beyond IT, India has made significant strides in other areas of science and technology. Its space program, led by the Indian Space Research Organisation (ISRO), has achieved remarkable success on a relatively modest budget. From launching its first satellite, Aryabhata, in 1975, ISRO has successfully executed complex missions to the Moon (Chandrayaan) and Mars (Mangalyaan - the Mars Orbiter Mission), showcasing India's prowess in high-end technology. India also has a well-developed nuclear program, having conducted its first nuclear test in 1974. These transformations in its economy, foreign policy, internal political structure, and technological capabilities have profoundly changed the nation and elevated its position on the global stage.`,
    quiz: [
        {
          question: 'The economic liberalization in India, which dismantled the "License Raj," was initiated in which year?',
          options: ['1947', '1984', '1991', '2001'],
          correctAnswer: '1991',
          explanation: 'In 1991, India faced a severe economic crisis, which prompted the government to launch a comprehensive program of economic reforms.'
        },
        {
          question: 'When was the Bandung Conference held?',
          options: ['1947', '1950', '1955', '1961'],
          correctAnswer: '1955',
          explanation: 'The first conference of Asian and African countries was held in 1955 at Bandung in Indonesia, known as the Bandung Conference.'
        },
        {
          question: 'The States Reorganisation Act of 1956 primarily redrew India\'s state boundaries based on what principle?',
          options: ['Religion', 'Geography', 'Economic viability', 'Language'],
          correctAnswer: 'Language',
          explanation: 'The Act reorganized states based on linguistic lines to better represent the diverse linguistic groups within India.'
        },
        {
          question: 'Which organization leads India\'s space program and launched the Mars Orbiter Mission (Mangalyaan)?',
          options: ['NASA', 'DRDO', 'ISRO', 'BARC'],
          correctAnswer: 'ISRO',
          explanation: 'The Indian Space Research Organisation (ISRO) is the national space agency of India, responsible for its successful space missions.'
        },
        {
            question: 'What major economic problem triggered the 1991 reforms in India?',
            options: ['High unemployment', 'A stock market crash', 'A balance of payments crisis', 'A severe drought'],
            correctAnswer: 'A balance of payments crisis',
            explanation: 'India was critically low on foreign exchange reserves and was on the verge of defaulting on its international loans.'
        },
        {
            question: 'Who was the Finance Minister of India who is credited with implementing the 1991 reforms?',
            options: ['P.V. Narasimha Rao', 'Atal Bihari Vajpayee', 'Dr. Manmohan Singh', 'P. Chidambaram'],
            correctAnswer: 'Dr. Manmohan Singh',
            explanation: 'As Finance Minister in the P.V. Narasimha Rao government, Dr. Manmohan Singh was the key architect of the economic liberalization policy.'
        },
        {
            question: 'The term "License Raj" refers to:',
            options: ['The rule of a king named Raj', 'A system of extensive government licenses and regulations needed to run a business', 'A computer operating system', 'A period of British rule'],
            correctAnswer: 'A system of extensive government licenses and regulations needed to run a business',
            explanation: 'This system was known for stifling entrepreneurship and causing inefficiency, and it was largely dismantled by the 1991 reforms.'
        },
        {
            question: 'Which regions were under French domination that became independent?',
            options: ['Indo-China, Morocco, Tunisia, Algeria', 'Vietnam, Cambodia, Thailand', 'Egypt, Sudan, Kenya', 'Nigeria, Ghana, Zimbabwe'],
            correctAnswer: 'Indo-China, Morocco, Tunisia, Algeria',
            explanation: 'Indo-China, Morocco, Tunisia and Algeria were under French domination and these countries became independent.'
        },
        {
            question: 'What is BPO?',
            options: ['Bharat Petroleum Organization', 'Business Process Outsourcing', 'Bangalore Programming Office', 'British Post Office'],
            correctAnswer: 'Business Process Outsourcing',
            explanation: 'BPO is a major sector of the Indian IT-enabled services industry, where companies handle business operations (like customer support) for foreign clients.'
        },
        {
            question: 'During the Cold War, India was a leader of which international movement?',
            options: ['NATO', 'The Warsaw Pact', 'The Non-Aligned Movement (NAM)', 'The European Union'],
            correctAnswer: 'The Non-Aligned Movement (NAM)',
            explanation: 'Under Prime Minister Jawaharlal Nehru, India was a key founder and leader of NAM, advocating for a path of strategic autonomy from the two superpower blocs.'
        },
        {
            question: 'The policy of "multi-alignment" means that India:',
            options: ['Has no allies', 'Is allied only with the United States', 'Builds strategic partnerships with multiple, sometimes rival, major powers', 'Is a member of every international organization'],
            correctAnswer: 'Builds strategic partnerships with multiple, sometimes rival, major powers',
            explanation: 'This pragmatic foreign policy allows India to engage with different countries on different issues based on its own national interest.'
        },
        {
            question: 'When was Myanmar separated from India?',
            options: ['1935', '1937', '1947', '1948'],
            correctAnswer: '1935',
            explanation: 'In 1935 an act was passed to separate Myanmar from Indian territory.'
        },
        {
            question: 'The state of Telangana was created in 2014 from which existing state?',
            options: ['Karnataka', 'Maharashtra', 'Andhra Pradesh', 'Tamil Nadu'],
            correctAnswer: 'Andhra Pradesh',
            explanation: 'The creation of Telangana was the culmination of a decades-long movement for a separate state for the Telugu-speaking people of the region.'
        },
        {
            question: 'What was the name of India\'s first satellite, launched in 1975?',
            options: ['Bhaskara', 'Rohini', 'Aryabhata', 'INSAT'],
            correctAnswer: 'Aryabhata',
            explanation: 'Aryabhata, named after the classical Indian astronomer, was India\'s first satellite, though it was launched by a Soviet rocket.'
        },
        {
            question: 'Chandrayaan is the name of India\'s series of missions to:',
            options: ['Mars', 'The Moon', 'Venus', 'Jupiter'],
            correctAnswer: 'The Moon',
            explanation: 'The Chandrayaan program includes orbiters, landers, and rovers for lunar exploration.'
        },
        {
            question: 'In 2019, the state of Jammu and Kashmir was reorganized into:',
            options: ['Two new states', 'A single, larger state', 'Two Union Territories', 'Part of the state of Punjab'],
            correctAnswer: 'Two Union Territories',
            explanation: 'The state was reorganized into the Union Territory of Jammu and Kashmir and the Union Territory of Ladakh.'
        },
        {
            question: 'The "Look East" policy (and later "Act East" policy) is an Indian foreign policy initiative to strengthen ties with:',
            options: ['Countries in the Middle East', 'Countries in Africa', 'Countries in Southeast and East Asia', 'Countries in Europe'],
            correctAnswer: 'Countries in Southeast and East Asia',
            explanation: 'This policy aims to bolster India\'s strategic and economic relationships with the ASEAN nations and other East Asian powers like Japan and South Korea.'
        },
        {
            question: 'The Green Revolution in India in the 1960s was a program to:',
            options: ['Increase forest cover', 'Promote clean energy', 'Increase agricultural production', 'Develop new cities'],
            correctAnswer: 'Increase agricultural production',
            explanation: 'The Green Revolution used high-yield variety seeds, irrigation, and fertilizers to dramatically increase food grain production and make India self-sufficient.'
        },
        {
            question: 'Operation Flood is a movement associated with a massive increase in the production of what?',
            options: ['Milk', 'Water', 'Crude Oil', 'Electricity'],
            correctAnswer: 'Milk',
            explanation: 'Also known as the White Revolution, Operation Flood was a dairy development program that made India the world\'s largest milk producer.'
        },
        {
            question: 'India conducted its first peaceful nuclear explosion, codenamed "Smiling Buddha," in which year?',
            options: ['1965', '1971', '1974', '1998'],
            correctAnswer: '1974',
            explanation: 'India conducted its first nuclear test in Pokhran, Rajasthan, in 1974, becoming the first nation outside the five permanent UN Security Council members to do so.'
        },
        {
            question: 'Which of the following is a key feature of India\'s economic transformation?',
            options: ['A decline in the service sector', 'A rapid growth in the service sector', 'A complete shift away from agriculture', 'The nationalization of all industries'],
            correctAnswer: 'A rapid growth in the service sector',
            explanation: 'The service sector, including IT, finance, and telecommunications, has been the primary driver of India\'s economic growth.'
        },
        {
            question: 'The Quad is a strategic dialogue between the United States, Japan, Australia, and which other country?',
            options: ['South Korea', 'United Kingdom', 'India', 'France'],
            correctAnswer: 'India',
            explanation: 'The Quadrilateral Security Dialogue, or Quad, is a strategic forum of four democracies in the Indo-Pacific region.'
        },
        {
            question: 'The creation of the states of Jharkhand, Chhattisgarh, and Uttarakhand in 2000 was done to:',
            options: ['Satisfy linguistic demands', 'Recognize the distinct cultural and developmental needs of tribal and hill regions', 'Create smaller, more manageable states', 'Weaken the larger states'],
            correctAnswer: 'Recognize the distinct cultural and developmental needs of tribal and hill regions',
            explanation: 'These states were carved out of larger states to give more autonomy and focus to their unique regional identities and needs.'
        },
        {
            question: 'The "demographic dividend" refers to the economic growth potential from:',
            options: ['A large population of senior citizens', 'A high birth rate', 'A large young and working-age population', 'A decrease in population'],
            correctAnswer: 'A large young and working-age population',
            explanation: 'India has one of the world\'s youngest populations, which provides a "demographic dividend" if the workforce is educated and employed effectively.'
        },
        {
            question: 'What does "FDI" stand for in the context of economic policy?',
            options: ['Federal Department of Investigation', 'Foreign Direct Investment', 'Fiscal Deficit Index', 'Future Development Initiative'],
            correctAnswer: 'Foreign Direct Investment',
            explanation: 'Attracting FDI by opening up various sectors of the economy has been a key component of India\'s economic reforms.'
        },
        {
            question: 'Which state in India became the first to achieve 100% literacy in 1990?',
            options: ['Kerala', 'Tamil Nadu', 'Maharashtra', 'Gujarat'],
            correctAnswer: 'Kerala',
            explanation: '1990 was declared as the "International Year of Literacy". The state Government resolved to make Kerala a state with 100% literacy. Kerala became the first state in India to become a state with 100% literacy. The first district to become completely literate was Ernakulum, announced on 4th February 1990.'
        },
        {
            question: 'Which of these organizations is India a member of?',
            options: ['NATO', 'European Union', 'G7', 'Shanghai Cooperation Organisation (SCO)'],
            correctAnswer: 'Shanghai Cooperation Organisation (SCO)',
            explanation: 'India became a full member of the SCO, a Eurasian political, economic, and security alliance, in 2017.'
        },
        {
            question: 'The formation of linguistic states in 1956 was based on the recommendations of the:',
            options: ['Simon Commission', 'States Reorganisation Commission', 'Cabinet Mission', 'Sarkaria Commission'],
            correctAnswer: 'States Reorganisation Commission',
            explanation: 'The commission, headed by Fazal Ali, was set up to examine the issue, and its recommendations led to the States Reorganisation Act.'
        },
        {
            question: 'India\'s Mars Orbiter Mission (Mangalyaan) was notable because:',
            options: ['It was the first mission to Mars', 'It landed a rover on Mars', 'It was the first Asian nation to reach Mars orbit and was accomplished on its first attempt at a very low cost', 'It discovered life on Mars'],
            correctAnswer: 'It was the first Asian nation to reach Mars orbit and was accomplished on its first attempt at a very low cost',
            explanation: 'The mission was globally acclaimed for its success and remarkable cost-effectiveness.'
        },
        {
            question: 'The shift from a socialist-leaning economy to a market-based one is often called:',
            options: ['Nationalization', 'Liberalization', 'Colonization', 'Democratization'],
            correctAnswer: 'Liberalization',
            explanation: 'Economic liberalization refers to the process of reducing government controls and opening up the economy to private and foreign players.'
        },
        {
            question: 'Which Prime Minister is credited with initiating India\'s nuclear tests in 1998, making India an overt nuclear power?',
            options: ['Indira Gandhi', 'Rajiv Gandhi', 'P.V. Narasimha Rao', 'Atal Bihari Vajpayee'],
            correctAnswer: 'Atal Bihari Vajpayee',
            explanation: 'While the first test was in 1974, the series of tests in 1998 under Prime Minister Vajpayee led to India formally declaring itself a nuclear weapons state.'
        },
        {
            question: 'The Aadhaar system in India is a:',
            options: ['New tax system', 'Biometric identification system', 'Political party', 'Social media platform'],
            correctAnswer: 'Biometric identification system',
            explanation: 'Aadhaar is the world\'s largest biometric ID system, providing a unique 12-digit identity number to residents of India.'
        },
        {
            question: 'The term "Hindu rate of growth" was used to describe what aspect of the pre-1991 Indian economy?',
            options: ['Its high growth rate', 'Its focus on religious industries', 'Its slow and modest growth rate', 'Its dependence on agriculture'],
            correctAnswer: 'Its slow and modest growth rate',
            explanation: 'This was a somewhat controversial term used by economists to refer to the low average growth rate of the Indian economy before the 1991 reforms.'
        },
        {
            question: 'India\'s first Prime Minister, Jawaharlal Nehru, championed which economic model?',
            options: ['A pure capitalist economy', 'A pure communist economy', 'A mixed economy with a large public sector', 'A laissez-faire economy'],
            correctAnswer: 'A mixed economy with a large public sector',
            explanation: 'Nehru favored a mixed economy model, where the government-owned public sector would control the "commanding heights" of the economy, alongside a private sector.'
        },
        {
            question: 'The telecom revolution in India led to:',
            options: ['Very high call rates', 'A massive increase in the number of mobile phone users', 'A decline in internet usage', 'Government monopoly over communication'],
            correctAnswer: 'A massive increase in the number of mobile phone users',
            explanation: 'Competition between private companies led to some of the lowest call and data rates in the world, leading to an explosion in mobile connectivity.'
        },
        {
            question: 'The division of which state led to the creation of Haryana in 1966?',
            options: ['Uttar Pradesh', 'Rajasthan', 'Punjab', 'Himachal Pradesh'],
            correctAnswer: 'Punjab',
            explanation: 'The state of Punjab was trifurcated in 1966 to create the Punjabi-speaking state of Punjab, the Hindi-speaking state of Haryana, and the Union Territory of Chandigarh.'
        },
        {
            question: 'What is a major challenge for the Indian IT industry?',
            options: ['Lack of English speakers', 'Moving up the value chain from services to products and innovation', 'Lack of government support', 'Slow internet speeds'],
            correctAnswer: 'Moving up the value chain from services to products and innovation',
            explanation: 'While strong in services, a major future challenge for the Indian IT sector is to create more original software products and intellectual property.'
        },
        {
            question: 'The term "brain drain" refers to:',
            options: ['A type of headache', 'The emigration of highly trained or intelligent people from a particular country', 'A decline in a country\'s literacy rate', 'A government policy to reduce education'],
            correctAnswer: 'The emigration of highly trained or intelligent people from a particular country',
            explanation: 'For many years, India faced a "brain drain" of its top engineers and doctors to countries like the US and UK, though this has been mitigated by the growth of opportunities within India.'
        },
        {
            question: 'ISRO is known for its ability to:',
            options: ['Launch the world\'s heaviest rockets', 'Conduct space missions at a very low cost', 'Send manned missions to other planets', 'Build military satellites exclusively'],
            correctAnswer: 'Conduct space missions at a very low cost',
            explanation: 'ISRO has earned a global reputation for "frugal engineering," successfully carrying out complex missions like Mangalyaan at a fraction of the cost of similar missions by other space agencies.'
        },
        {
            question: 'The first state to be created on a linguistic basis in independent India was:',
            options: ['Kerala', 'Andhra State', 'Karnataka', 'Tamil Nadu'],
            correctAnswer: 'Andhra State',
            explanation: 'Following a major agitation and the death of a protestor, Potti Sreeramulu, the Telugu-speaking Andhra State was carved out of Madras State in 1953, paving the way for the States Reorganisation Act.'
        },
        {
            question: 'The National Highways Development Project (NHDP) in India is a major initiative to improve:',
            options: ['Airports', 'Railways', 'Road connectivity', 'Ports'],
            correctAnswer: 'Road connectivity',
            explanation: 'Projects like the Golden Quadrilateral, which connects the major metropolitan cities, are part of the NHDP to upgrade India\'s highway network.'
        },
        {
            question: 'The rise of a large Indian middle class has led to:',
            options: ['A decline in consumer spending', 'An increase in demand for consumer goods and services', 'A decrease in urbanization', 'The end of poverty'],
            correctAnswer: 'An increase in demand for consumer goods and services',
            explanation: 'The growing purchasing power of the middle class has fueled demand for everything from cars and electronics to travel and entertainment.'
        },
        {
            question: 'The Shanghai Cooperation Organisation (SCO) is a regional bloc dominated by which two powers?',
            options: ['India and Japan', 'USA and India', 'Russia and China', 'India and Pakistan'],
            correctAnswer: 'Russia and China',
            explanation: 'The SCO is a Eurasian political, economic, and security alliance led by Russia and China.'
        },
        {
            question: 'Which of these was NOT part of the 1991 economic reforms?',
            options: ['Devaluation of the rupee', 'Reduction of import tariffs', 'Abolition of the private sector', 'Encouragement of foreign investment'],
            correctAnswer: 'Abolition of the private sector',
            explanation: 'The reforms did the opposite: they significantly reduced the role of the public sector and greatly encouraged the private sector.'
        },
        {
            question: 'The term "Indo-Pacific" in foreign policy refers to:',
            options: ['The region covering India and Pakistan', 'The maritime space combining the Indian Ocean and the Pacific Ocean', 'A cultural festival', 'An economic free trade area'],
            correctAnswer: 'The maritime space combining the Indian Ocean and the Pacific Ocean',
            explanation: 'The Indo-Pacific has become a major focus of international geopolitics, and India is seen as a key player in this strategic region.'
        },
        {
            question: 'The creation of new states in India has generally been in response to:',
            options: ['British demands', 'United Nations resolutions', 'Regional movements demanding recognition of their distinct identity', 'Military needs'],
            correctAnswer: 'Regional movements demanding recognition of their distinct identity',
            explanation: 'Whether based on language or culture, the creation of new states has been a way to accommodate India\'s vast diversity within a federal structure.'
        },
        {
            question: 'Which of the following best describes India\'s position in the global economy today?',
            options: ['A small, closed economy', 'One of the fastest-growing major economies', 'An economy based solely on agriculture', 'A developed, high-income economy'],
            correctAnswer: 'One of the fastest-growing major economies',
            explanation: 'Since the 1991 reforms, India has consistently been one of the world\'s best-performing large economies.'
        },
        {
            question: 'The "Golden Quadrilateral" is a highway network connecting which four cities?',
            options: ['Jaipur, Lucknow, Patna, Bhopal', 'Srinagar, Kanyakumari, Porbandar, Silchar', 'Delhi, Mumbai, Chennai, Kolkata', 'Bangalore, Hyderabad, Pune, Ahmedabad'],
            correctAnswer: 'Delhi, Mumbai, Chennai, Kolkata',
            explanation: 'The Golden Quadrilateral is a massive highway project that connects the four major metropolitan and economic centers of India.'
        },
        {
            question: 'India\'s transition from "Look East" to "Act East" signifies:',
            options: ['A decrease in engagement with the region', 'A more proactive and action-oriented foreign policy towards Southeast and East Asia', 'A shift in focus from East Asia to West Asia', 'A new military alliance with China'],
            correctAnswer: 'A more proactive and action-oriented foreign policy towards Southeast and East Asia',
            explanation: 'The change in name reflects a move from simply observing the region to becoming a more engaged and integrated strategic partner.'
        }
    ],
    flashcards: [
      { term: 'Economic Liberalization (1991)', definition: 'A series of economic reforms in India that opened the economy to foreign trade and investment and reduced government regulation.' },
      { term: 'Manmohan Singh', definition: 'The Finance Minister in 1991 who is credited with implementing India\'s economic reforms. He later became Prime Minister.' },
      { term: 'License Raj', definition: 'The elaborate system of licenses, regulations, and red tape that was required to set up and run businesses in India before 1991.' },
      { term: 'Information Technology (IT)', definition: 'An industry that saw explosive growth in India after the 1991 reforms, particularly in software services and business process outsourcing.' },
      { term: 'Bandung Conference', definition: 'The first conference of Asian and African countries held in 1955 at Bandung in Indonesia to discuss common problems and mutual cooperation.' },
      { term: 'Pan-African Unity', definition: 'The concept of African unity promoted by leaders and thinkers through Pan-African congresses to unite African nations.' },
      { term: 'Foreign Policy', definition: 'A government\'s strategy in dealing with other nations. India\'s has shifted from non-alignment to multi-alignment.' },
      { term: 'Multi-alignment', definition: 'A foreign policy approach where a country maintains good relationships with multiple major powers simultaneously, rather than aligning with one bloc.' },
      { term: 'States Reorganisation Act, 1956', definition: 'A major reform of the boundaries of India\'s states and territories, organizing them along linguistic lines.' },
      { term: 'Linguistic States', definition: 'States that are demarcated on the basis of the predominant language spoken by the population.' },
      { term: 'Telangana', definition: 'The newest state in India, formed in 2014 by splitting from Andhra Pradesh.' },
      { term: 'ISRO', definition: 'Indian Space Research Organisation; the national space agency of India.' },
      { term: 'Aryabhata', definition: 'India\'s first satellite, named after the ancient Indian astronomer, launched in 1975.' },
      { term: 'Chandrayaan', definition: 'A series of Indian lunar space probes by ISRO. Chandrayaan-1 was the first mission to the Moon.' },
      { term: 'Mangalyaan (Mars Orbiter Mission)', definition: 'India\'s first interplanetary mission, which made ISRO the fourth space agency to reach Mars orbit.' },
      { term: 'Foreign Direct Investment (FDI)', definition: 'An investment made by a firm or individual from one country into business interests located in another country.' },
      { term: 'Balance of Payments Crisis', definition: 'A situation where a nation is unable to pay for its essential imports or service its external debt payments. This triggered India\'s 1991 reforms.' },
      { term: 'Green Revolution', definition: 'A period in the 1960s when India increased its agricultural production drastically, leading to self-sufficiency in food grains.' },
      { term: 'White Revolution (Operation Flood)', definition: 'A project that made India the world\'s largest milk producer, transforming the dairy industry.' },
      { term: 'Right to Information Act (2005)', definition: 'A landmark piece of legislation that empowers Indian citizens to request information from any public authority, promoting transparency.' },
      { 'term': 'P.V. Narasimha Rao', 'definition': 'The Prime Minister of India who initiated the landmark economic reforms of 1991.' },
      { 'term': 'Devaluation', 'definition': 'The official lowering of the value of a country\'s currency within a fixed exchange rate system. A key step in the 1991 reforms.' },
      { 'term': 'Business Process Outsourcing (BPO)', 'definition': 'The contracting of non-primary business activities and functions to a third-party provider. A major industry in India.' },
      { 'term': 'Telecom Revolution', 'definition': 'The rapid expansion of telecommunication services, especially mobile phones, in India since the 1990s.' },
      { 'term': 'Non-Aligned Movement (NAM)', 'definition': 'A group of states that are not formally aligned with or against any major power bloc, which India co-founded.' },
      { 'term': 'Look East Policy', 'definition': 'An Indian foreign policy initiative started in the 1990s to develop stronger ties with Southeast Asian nations.' },
      { 'term': 'Act East Policy', 'definition': 'An evolution of the Look East Policy, representing a more proactive and strategic engagement with the Asia-Pacific region.' },
      { 'term': 'Quad (Quadrilateral Security Dialogue)', 'definition': 'A strategic dialogue between the United States, Japan, Australia, and India.' },
      { 'term': 'Shanghai Cooperation Organisation (SCO)', 'definition': 'A Eurasian political, economic, and security alliance, of which India is a full member.' },
      { 'term': 'Jharkhand', 'definition': 'A state in eastern India carved out of the southern part of Bihar in 2000.' },
      { 'term': 'Chhattisgarh', 'definition': 'A state in central India, formed in 2000 by partitioning sixteen southeastern districts of Madhya Pradesh.' },
      { 'term': 'Uttarakhand', 'definition': 'A state in northern India, carved out of the hill districts of Uttar Pradesh in 2000.' },
      { 'term': 'Jammu and Kashmir Reorganisation Act, 2019', 'definition': 'An act of the Indian Parliament that reorganized the state into two union territories: Jammu and Kashmir, and Ladakh.' },
      { 'term': 'Pokhran-II', 'definition': 'The series of five nuclear bomb test explosions conducted by India at the Pokhran Test Range in 1998.' },
      { 'term': 'Smiling Buddha', 'definition': 'The codename for India\'s first successful nuclear bomb test, which took place in 1974.' },
      { 'term': 'Mixed Economy', 'definition': 'An economic system blending elements of market economies with elements of planned economies. India\'s model post-independence.' },
      { 'term': 'Public Sector Undertaking (PSU)', 'definition': 'A state-owned enterprise or government-owned company in India.' },
      { 'term': 'Service Sector', 'definition': 'The part of the economy that provides services rather than physical products. It has been the main driver of India\'s growth.' },
      { 'term': 'Demographic Dividend', 'definition': 'The economic growth potential that can result from shifts in a population’s age structure, particularly when the share of the working-age population is large.' },
      { 'term': 'Kerala Literacy Campaign', 'definition': '1990 was declared as the "International Year of Literacy". Kerala became the first state in India to achieve 100% literacy. The campaign included training of reading, writing, mathematical skills, hygiene, vaccination awareness, and co-operative agriculture.' },
      { 'term': 'Golden Quadrilateral', 'definition': 'A national highway network connecting most of the major industrial, agricultural and cultural centres of India. It connects Delhi, Mumbai, Chennai, and Kolkata.' },
      { 'term': 'Aadhaar', 'definition': 'The world\'s largest biometric ID system, where a 12-digit unique identity number is issued to all residents of India.' },
      { 'term': 'States Reorganisation Commission', 'definition': 'A body constituted by the Government of India in 1953 to recommend the reorganisation of state boundaries.' },
      { 'term': 'Potti Sreeramulu', 'definition': 'An Indian revolutionary whose death after a hunger strike for a separate Telugu-speaking state led to the formation of Andhra State.' },
      { 'term': 'Andhra State', 'definition': 'The first state in India to be formed on a linguistic basis, created in 1953.' },
      { 'term': 'Brain Drain', 'definition': 'The emigration of highly skilled or intelligent people from a particular country, a phenomenon India faced for many years.' },
      { 'term': 'Frugal Engineering', 'definition': 'The process of reducing the complexity and cost of a good and its production. ISRO is famous for this approach.' },
      { 'term': 'Sarva Shiksha Abhiyan', 'definition': 'A programme launched in 2001 with the motto "Let\'s all learn, Let\'s all progress". It aimed to enroll every child in school, eliminate gender discrimination in education, and achieve 100% attendance by 2010. The right of free education was granted to children aged 6-14 through the 86th Amendment to the Constitution.' },
      { 'term': 'Goods and Services Tax (GST)', 'definition': 'A major indirect tax reform introduced in 2017 to unify the Indian market by creating a single tax on the supply of goods and services.' },
      { 'term': 'National Highways Development Project (NHDP)', 'definition': 'A large-scale project to upgrade and widen major highways in India.' }
    ]
  },
  {
    id: '12',
    title: 'India Transformed – Part 2',
    description: 'Society, health, education, culture, environment, sports, tourism in a transformed India',
    content: `### Social and Cultural Transformations ###

The transformation of India since the economic reforms of 1991 extends beyond economics and politics into the very fabric of its society and culture. Rapid urbanization and the growth of the service-sector economy have led to significant social changes. In many urban areas, the traditional joint family system has increasingly given way to nuclear families. A large, new middle class has emerged, with greater disposable income, changing consumption patterns, and global aspirations. This has fueled the growth of shopping malls, multiplex cinemas, and a vibrant consumer culture.

Indian culture, while rooted in ancient traditions, is dynamic and has been profoundly influenced by globalization. Bollywood, the Hindi film industry based in Mumbai, is a global cultural phenomenon, with its films, music, and stars enjoying popularity worldwide. The digital age has also transformed cultural consumption. The proliferation of satellite television, and more recently, OTT (Over-the-Top) streaming services like Netflix and Amazon Prime, has exposed Indians to a vast array of global content and provided a new platform for Indian storytellers. Social media has become a dominant force in communication, public discourse, and cultural trends.

### Education and Health ###

In the realm of **education**, there has been a massive expansion of access since independence. The Sarva Shiksha Abhiyan (Education for All Movement) and the landmark Right to Education Act (2009), which made education a fundamental right for children aged 6-14, have significantly improved literacy rates and school enrollment. However, major challenges in the quality of education, teacher training, and infrastructure remain. Higher education has also grown exponentially, with numerous public and private universities and institutes, including the world-renowned Indian Institutes of Technology (IITs) and Indian Institutes of Management (IIMs).

The **health** sector has also seen significant progress. Life expectancy has more than doubled since independence, and infant mortality rates have fallen dramatically, thanks to improved sanitation, vaccination programs, and initiatives like the National Health Mission. Despite this, disparities in healthcare access between urban and rural areas, and between the rich and poor, persist. India faces a "dual burden" of disease: it continues to battle communicable diseases like tuberculosis and malaria, while also facing a growing epidemic of non-communicable or "lifestyle" diseases like diabetes, hypertension, and heart disease.

### Environment and Sustainability ###

Rapid industrialization and urbanization have come at a significant environmental cost. India faces severe challenges of air and water pollution, deforestation, waste management, and pressure on its natural resources. Public awareness and government action on these issues have been growing. The 'Centre for Science and Environment' studied the problem of pollution in Delhi and made the public aware of its severity. The Supreme Court issued an order in 1998 to use CNG (Compressed Natural Gas) for public transport vehicles to overcome the pollution problem. A policy of 'Pollution Under Control (PUC)' certificates was adopted. Efforts of environment activists like Sundarlal Bahuguna (Chipko Movement), Medha Patkar (Narmada Bachao Movement), and Dr. Rajendra Singh (Water Conservation) have contributed significantly to environment conservation.

### Sports and Tourism ###

The sporting landscape in India has also diversified. While cricket remains a national passion, almost a religion, athletes in other disciplines are increasingly achieving international success. Sports like badminton, wrestling, shooting, boxing, and athletics have seen a surge in popularity and success. The rise of professional franchise-based leagues in sports other than cricket, like the Indian Super League (football) and the Pro Kabaddi League, has helped to popularize these sports and create new career opportunities for athletes.

Tourism is a major and growing service industry in India. The country's incredible diversity offers a vast range of attractions, from historical and cultural tourism (visiting monuments like the Taj Mahal, forts in Rajasthan, and ancient temples), to adventure tourism in the Himalayas, eco-tourism in its national parks, and beach tourism in places like Goa and Kerala. Medical and wellness tourism (including yoga and Ayurveda) are also significant and growing sectors, attracting visitors from all over the world.`,
    quiz: [
        {
          question: 'The Right to Education Act in India makes education a fundamental right for which age group?',
          options: ['3-10 years', '6-14 years', '5-18 years', '10-16 years'],
          correctAnswer: '6-14 years',
          explanation: 'The Right of Children to Free and Compulsory Education Act, 2009, made education a fundamental right for every child between the ages of 6 and 14.'
        },
        {
          question: 'What is "Bollywood"?',
          options: ['A city in India', 'A style of Indian dance', 'The Hindi-language film industry', 'A famous Indian dish'],
          correctAnswer: 'The Hindi-language film industry',
          explanation: 'Bollywood is the informal name for the Hindi-language film industry based in Mumbai (formerly Bombay).'
        },
        {
          question: 'Which gas was recommended by the Supreme Court in 1998 for use in public transport vehicles to reduce pollution in Delhi?',
          options: ['Diesel', 'Petrol', 'CNG (Compressed Natural Gas)', 'LPG'],
          correctAnswer: 'CNG (Compressed Natural Gas)',
          explanation: 'Based on recommendations from the Centre for Science and Environment, the Supreme Court issued an order in 1998 to use CNG for public transport vehicles to overcome the pollution problem in Delhi.'
        },
        {
          question: 'Which sport is overwhelmingly the most popular and passionately followed in India?',
          options: ['Football', 'Kabaddi', 'Field Hockey', 'Cricket'],
          correctAnswer: 'Cricket',
          explanation: 'Cricket is by far the most popular sport in India, often considered a religion in the country, with a massive following and cultural impact.'
        },
        {
            question: 'The shift from a joint family system to a nuclear family system is most prominent in which parts of India?',
            options: ['Rural areas', 'Urban areas', 'Tribal areas', 'Coastal areas'],
            correctAnswer: 'Urban areas',
            explanation: 'Urbanization and modern lifestyles have led to a decline in the traditional joint family structure in favor of smaller, nuclear families.'
        },
        {
            question: 'The Indian Institutes of Technology (IITs) are best known for their programs in:',
            options: ['Arts and Humanities', 'Medicine', 'Law', 'Engineering and Technology'],
            correctAnswer: 'Engineering and Technology',
            explanation: 'The IITs are globally recognized as premier institutions for engineering and technology education and research.'
        },
        {
            question: 'What does the "dual burden" of disease faced by India refer to?',
            options: ['The challenge of dealing with both physical and mental health', 'The prevalence of both communicable and non-communicable diseases', 'The high cost of both public and private healthcare', 'The presence of both Indian and foreign diseases'],
            correctAnswer: 'The prevalence of both communicable and non-communicable diseases',
            explanation: 'India has to fight older, infectious diseases (like TB) while also tackling the rapid rise of modern "lifestyle" diseases (like diabetes).'
        },
        {
            question: 'The "Khelo India" scheme was launched with which main objectives?',
            options: ['To build sports stadiums only', 'To create interest in sports among students and increase girls\' participation', 'To organize only cricket tournaments', 'To provide foreign training to athletes'],
            correctAnswer: 'To create interest in sports among students and increase girls\' participation',
            explanation: 'The Khelo India scheme was launched by combining old schemes with new objectives. The scheme has 12 basic aspects, with two major ones being to create interest about sports among students from early days in school and to increase girls\' participation in sports.'
        },
        {
            question: 'The Pro Kabaddi League has helped to professionalize and popularize which traditional Indian sport?',
            options: ['Kho-Kho', 'Gilli Danda', 'Kabaddi', 'Mallakhamb'],
            correctAnswer: 'Kabaddi',
            explanation: 'The Pro Kabaddi League, with its franchise-based model and television coverage, has transformed Kabaddi into a major spectator sport.'
        },
        {
            question: 'The Taj Mahal, a major tourist attraction, is located in which city?',
            options: ['Delhi', 'Jaipur', 'Agra', 'Mumbai'],
            correctAnswer: 'Agra',
            explanation: 'The Taj Mahal, a UNESCO World Heritage site, is located in the city of Agra on the banks of the Yamuna river.'
        },
        {
            question: 'What does "OTT" stand for in the context of media and entertainment?',
            options: ['On The Television', 'Official Television Transmission', 'Over-the-Top', 'Out of the Theater'],
            correctAnswer: 'Over-the-Top',
            explanation: 'OTT refers to streaming services like Netflix, Amazon Prime Video, and Hotstar that deliver content directly to viewers over the internet, bypassing traditional cable or broadcast television.'
        },
        {
            question: 'Sarva Shiksha Abhiyan is a government program aimed at:',
            options: ['Improving higher education', 'The universalization of elementary education', 'Promoting adult literacy', 'Funding private schools'],
            correctAnswer: 'The universalization of elementary education',
            explanation: 'SSA is a flagship program to ensure that all children have access to free and compulsory elementary education.'
        },
        {
            question: 'Which of the following is considered a major "lifestyle" or non-communicable disease in India?',
            options: ['Malaria', 'Tuberculosis', 'Diabetes', 'Cholera'],
            correctAnswer: 'Diabetes',
            explanation: 'India has one of the largest populations of people with diabetes in the world, a non-communicable disease linked to lifestyle, diet, and genetics.'
        },
        {
            question: 'What is a major source of air pollution in many North Indian cities?',
            options: ['Volcanic eruptions', 'Industrial pollution and vehicular emissions', 'Dust from deserts', 'Sea spray'],
            correctAnswer: 'Industrial pollution and vehicular emissions',
            explanation: 'Factors like vehicular exhaust, industrial emissions, construction dust, and crop burning contribute to the severe air pollution in cities like Delhi.'
        },
        {
            question: 'The Indian Super League (ISL) is associated with which sport?',
            options: ['Cricket', 'Hockey', 'Football (Soccer)', 'Badminton'],
            correctAnswer: 'Football (Soccer)',
            explanation: 'The ISL was launched to increase the popularity and standard of football in India.'
        },
        {
            question: 'Medical tourism in India is popular due to:',
            options: ['The lack of hospitals', 'High-quality healthcare at a lower cost compared to developed nations', 'The tropical climate', 'Free treatment for all foreigners'],
            correctAnswer: 'High-quality healthcare at a lower cost compared to developed nations',
            explanation: 'India attracts patients from around the world for complex medical procedures due to its skilled doctors and competitive costs.'
        },
        {
            question: 'The rise of a large consumerist middle class in India is primarily a result of:',
            options: ['Government welfare schemes', 'A decline in population', 'Economic growth and the expansion of the service sector', 'An increase in agricultural production'],
            correctAnswer: 'Economic growth and the expansion of the service sector',
            explanation: 'The high-paying jobs created in sectors like IT since the 1991 reforms have significantly increased the disposable income and purchasing power of millions.'
        },
        {
            question: 'Which of the following is a key challenge for the Indian education system?',
            options: ['Lack of students', 'Ensuring the quality of education and learning outcomes', 'Too many schools', 'Absence of a national curriculum'],
            correctAnswer: 'Ensuring the quality of education and learning outcomes',
            explanation: 'While enrollment has increased, ensuring that children are actually learning effectively and that the quality of teaching is high remains a major challenge.'
        },
        {
            question: 'The National Health Mission aims to improve healthcare primarily in which areas?',
            options: ['Only major metropolitan cities', 'Urban and rural areas, with a special focus on rural areas', 'Only private hospitals', 'Only for government employees'],
            correctAnswer: 'Urban and rural areas, with a special focus on rural areas',
            explanation: 'A key goal of the NHM is to reduce the gap in healthcare access between urban and underserved rural populations.'
        },
        {
            question: 'When did the Government of India announce its National Sports Policy?',
            options: ['1995', '2001', '2010', '2014'],
            correctAnswer: '2001',
            explanation: 'The Government of India announced its sports policy in 2001. The main objectives include taking sports to all parts of India, helping players develop special skills, building supportive sports facilities, and initiating cooperation from industries and private institutions for the cause of sports.'
        },
        {
            question: 'Saina Nehwal and P.V. Sindhu are famous Indian athletes in which sport?',
            options: ['Tennis', 'Wrestling', 'Shooting', 'Badminton'],
            correctAnswer: 'Badminton',
            explanation: 'Saina Nehwal and P.V. Sindhu are Olympic medalists and have been instrumental in popularizing badminton in India.'
        },
        {
            question: 'What is a significant trend in the Indian film industry beyond Bollywood?',
            options: ['A decline in the number of films produced', 'The growing prominence and success of regional cinema', 'The complete disappearance of film music', 'A shift to making only English-language films'],
            correctAnswer: 'The growing prominence and success of regional cinema',
            explanation: 'Film industries in languages like Tamil (Kollywood), Telugu (Tollywood), Malayalam, and Kannada are producing critically acclaimed and commercially successful films that often rival Bollywood.'
        },
        {
            question: 'A "nuclear family" consists of:',
            options: ['Only one person', 'Parents and their children', 'Parents, children, grandparents, and uncles/aunts living together', 'A family that owns a nuclear power plant'],
            correctAnswer: 'Parents and their children',
            explanation: 'This contrasts with a "joint family," where multiple generations and extended family members live together.'
        },
        {
            question: 'The Indian Institutes of Management (IIMs) are premier institutions for studies in:',
            options: ['Medicine', 'Law', 'Management and Business Administration', 'Fine Arts'],
            correctAnswer: 'Management and Business Administration',
            explanation: 'The IIMs are the top business schools in India, and their graduates are highly sought after in the corporate world.'
        },
        {
            question: 'What is a major consequence of globalization on Indian culture?',
            options: ['The complete disappearance of Indian traditions', 'A blend of global and local cultural elements', 'The rejection of all foreign influences', 'A decline in the popularity of Indian food'],
            correctAnswer: 'A blend of global and local cultural elements',
            explanation: 'Globalization has led to a dynamic cultural landscape where global trends (like fast food, fashion) are often adapted with a unique Indian twist.'
        },
        {
            question: 'The "Golden Triangle" is a popular tourist circuit that connects Delhi, Agra, and which other city?',
            options: ['Mumbai', 'Jaipur', 'Varanasi', 'Goa'],
            correctAnswer: 'Jaipur',
            explanation: 'The Delhi-Agra-Jaipur circuit is called the Golden Triangle and is one of the most popular and well-trodden tourist routes in India.'
        },
        {
            question: 'The success of which cricketer in the 1983 World Cup is often seen as a turning point for the sport\'s popularity in India?',
            options: ['Sunil Gavaskar', 'Sachin Tendulkar', 'Kapil Dev', 'Virat Kohli'],
            correctAnswer: 'Kapil Dev',
            explanation: 'As captain, Kapil Dev led an underdog Indian team to a stunning victory in the 1983 Cricket World Cup, which transformed cricket into a national obsession.'
        },
        {
            question: 'Ayurveda, a popular form of wellness tourism in India, is:',
            options: ['A type of modern surgery', 'A traditional system of medicine', 'A form of martial art', 'A style of cooking'],
            correctAnswer: 'A traditional system of medicine',
            explanation: 'Ayurveda is an ancient system of holistic medicine native to India, which is popular among tourists seeking alternative and wellness treatments.'
        },
        {
            question: 'The issue of "jobless growth" in India refers to a situation where:',
            options: ['The economy grows, but not enough new jobs are created', 'There are too many jobs and not enough workers', 'People refuse to work', 'The economy is shrinking'],
            correctAnswer: 'The economy grows, but not enough new jobs are created',
            explanation: 'This is a major economic challenge where GDP growth does not translate into sufficient employment opportunities for the large young workforce.'
        },
        {
            question: 'What was the main objective of the Sarva Shiksha Abhiyan launched in 2001?',
            options: ['To enroll every child in school and achieve 100% attendance by 2010', 'To build more universities', 'To promote English education only', 'To reduce school fees'],
            correctAnswer: 'To enroll every child in school and achieve 100% attendance by 2010',
            explanation: 'The Sarva Shiksha Abhiyan was launched in 2001 with the motto "Let\'s all learn, Let\'s all progress". Its main objectives were to enroll every child in school, raise the standard of education, eliminate gender discrimination in education, and achieve 100% attendance in schools by 2010. The right of free education was granted to children aged 6-14 through the 86th Amendment to the Constitution.'
        },
        {
            question: 'Which of these is a major environmental movement in India?',
            options: ['The Chipko Movement (to protect trees)', 'The Swadeshi Movement', 'The Khilafat Movement', 'The Non-Cooperation Movement'],
            correctAnswer: 'The Chipko Movement (to protect trees)',
            explanation: 'The Chipko movement, which started in the 1970s in the Himalayas, was a famous non-violent protest where villagers, mostly women, hugged trees to prevent them from being cut down.'
        },
        {
            question: 'The Indian Premier League (IPL) is a professional league for which format of cricket?',
            options: ['Test Cricket (5 days)', 'One Day International (50 overs)', 'Twenty20 (20 overs)', 'Indoor Cricket'],
            correctAnswer: 'Twenty20 (20 overs)',
            explanation: 'The IPL is a fast-paced, franchise-based Twenty20 cricket league that has become one of the most valuable and popular sports leagues in the world.'
        },
        {
            question: 'What is a significant challenge for India\'s healthcare system?',
            options: ['A lack of trained doctors', 'A low doctor-to-patient ratio and urban-rural disparity', 'Hospitals being too expensive for everyone', 'A refusal of people to use modern medicine'],
            correctAnswer: 'A low doctor-to-patient ratio and urban-rural disparity',
            explanation: 'India struggles with a shortage of healthcare professionals, and most of them are concentrated in cities, leaving rural areas underserved.'
        },
        {
            question: 'The term "demographic dividend" for India can become a "demographic disaster" if:',
            options: ['The population grows too old', 'The young population is not properly educated and employed', 'The birth rate falls too quickly', 'Too many people move to cities'],
            correctAnswer: 'The young population is not properly educated and employed',
            explanation: 'If the large youth population is not equipped with skills and jobs, it can lead to social unrest and economic stagnation instead of growth.'
        },
        {
            question: 'Ecotourism in India is focused on:',
            options: ['Visiting cities', 'Shopping in malls', 'Responsible travel to natural areas like national parks and wildlife sanctuaries', 'Religious pilgrimages'],
            correctAnswer: 'Responsible travel to natural areas like national parks and wildlife sanctuaries',
            explanation: 'Ecotourism aims to conserve the environment and improve the well-being of local people, focusing on India\'s rich biodiversity.'
        },
        {
            question: 'Which award was given to Virat Kohli and Saikhom Mirabai Chanu in 2018 for their excellent sports performance?',
            options: ['Arjun Award', 'Rajiv Gandhi Khel Ratna', 'Dronacharya Award', 'Padma Shri'],
            correctAnswer: 'Rajiv Gandhi Khel Ratna',
            explanation: 'The Rajiv Gandhi Khel Ratna award was announced with an intention of encouraging players. This award consists of Rs.7,50,000 for excellent performance in the previous year. It was given to Virat Kohli (cricket captain) and Saikhom Mirabai Chanu (weightlifting) in 2018.'
        },
        {
            question: 'Mary Kom is a celebrated Indian athlete who has won multiple world championships in which sport?',
            options: ['Archery', 'Boxing', 'Weightlifting', 'Fencing'],
            correctAnswer: 'Boxing',
            explanation: 'Mary Kom is a six-time world champion boxer and an Olympic medalist, making her one of India\'s most decorated athletes.'
        },
        {
            question: 'The concept of "glocalization" in culture refers to:',
            options: ['The replacement of local culture with global culture', 'The rejection of global culture', 'The adaptation of global products and ideas to suit local tastes', 'A government policy to promote local culture'],
            correctAnswer: 'The adaptation of global products and ideas to suit local tastes',
            explanation: 'An example is how multinational food chains in India offer specific menu items, like the "McAloo Tikki" burger, to appeal to local palates.'
        },
        {
            question: 'The National Food Security Act (2013) in India aims to:',
            options: ['Promote the export of food grains', 'Provide subsidized food grains to a majority of the population', 'Encourage people to eat less', 'Ban the sale of junk food'],
            correctAnswer: 'Provide subsidized food grains to a majority of the population',
            explanation: 'It is a landmark law that aims to provide food and nutritional security by ensuring access to an adequate quantity of quality food at affordable prices.'
        },
        {
            question: 'The growth of social media in India has led to:',
            options: ['A decline in political awareness', 'Increased citizen journalism and faster information spread', 'The end of traditional media like newspapers', 'A decrease in communication'],
            correctAnswer: 'Increased citizen journalism and faster information spread',
            explanation: 'Social media platforms have become powerful tools for communication, activism, and the rapid dissemination of news (and misinformation).'
        },
        {
            question: 'The Namami Gange Programme is a major government initiative to:',
            options: ['Build a new river', 'Clean and rejuvenate the Ganga river', 'Interlink all Indian rivers', 'Promote river tourism'],
            correctAnswer: 'Clean and rejuvenate the Ganga river',
            explanation: 'It is an integrated conservation mission to abate pollution and rejuvenate the heavily polluted Ganga river.'
        },
        {
            question: 'In which city is the main hub of the Tamil film industry (Kollywood) located?',
            options: ['Hyderabad', 'Bangalore', 'Chennai', 'Kochi'],
            correctAnswer: 'Chennai',
            explanation: 'Chennai (formerly Madras) is the center for the Tamil-language film industry, one of the largest in India.'
        },
        {
            question: 'What does "life expectancy at birth" measure?',
            options: ['The average number of years a newborn infant is expected to live', 'The maximum age anyone has ever lived to', 'The retirement age in a country', 'The average age of a country\'s population'],
            correctAnswer: 'The average number of years a newborn infant is expected to live',
            explanation: 'This key health indicator has risen significantly in India since independence, reflecting better health and nutrition.'
        },
        {
            question: 'What is a major criticism of franchise-based sports leagues like the IPL?',
            options: ['They are not popular', 'They prioritize club commitments over playing for the country', 'They do not pay players well', 'They are too short'],
            correctAnswer: 'They prioritize club commitments over playing for the country',
            explanation: 'A common debate is whether the commercial success of club-based leagues dilutes the importance and primacy of representing the national team.'
        },
        {
            question: 'The "Digital Divide" in India refers to:',
            options: ['A software bug', 'A dispute between two tech companies', 'The gap between those who have access to digital technology and those who do not', 'A government plan to separate online and offline services'],
            correctAnswer: 'The gap between those who have access to digital technology and those who do not',
            explanation: 'This gap often exists between urban and rural areas, and between different economic and gender groups.'
        },
        {
            question: 'Which of these UNESCO World Heritage sites is a major tourist destination in Maharashtra?',
            options: ['The Taj Mahal', 'Hampi', 'The Sun Temple at Konark', 'The Ajanta and Ellora Caves'],
            correctAnswer: 'The Ajanta and Ellora Caves',
            explanation: 'The rock-cut caves at Ajanta and Ellora are renowned for their magnificent paintings and sculptures and are a major attraction in Maharashtra.'
        },
        {
            question: 'The "Midday Meal Scheme" in Indian schools is designed to:',
            options: ['Teach children how to cook', 'Improve the nutritional standing of school-age children and increase school enrollment', 'Sell food to students', 'Provide dinner to students'],
            correctAnswer: 'Improve the nutritional standing of school-age children and increase school enrollment',
            explanation: 'It is the world\'s largest school meal program, providing free lunches on working days for children in government schools, which acts as an incentive for attendance and helps combat malnutrition.'
        },
        {
            question: 'What is a significant challenge for tourism in India?',
            options: ['A lack of places to visit', 'Issues related to infrastructure, cleanliness, and safety', 'The country being too small', 'Food not being good'],
            correctAnswer: 'Issues related to infrastructure, cleanliness, and safety',
            explanation: 'While India has immense tourism potential, challenges in providing adequate infrastructure, maintaining cleanliness, and ensuring the safety of tourists are often cited as areas for improvement.'
        },
        {
            question: 'The success of Indian athletes in sports like shooting and wrestling at the Olympics can be attributed to:',
            options: ['Pure luck', 'A long tradition of these sports in India', 'Increased government support, private funding, and better training facilities', 'A lack of competition'],
            correctAnswer: 'Increased government support, private funding, and better training facilities',
            explanation: 'A more systematic approach to identifying and nurturing talent has led to improved performance in several Olympic disciplines.'
        }
    ],
    flashcards: [
      { term: 'Urbanization', definition: 'The process where an increasing percentage of a population lives in cities and suburbs, a major trend in modern India.' },
      { term: 'Nuclear Family', definition: 'A family group consisting of parents and their children, which is becoming more common in urban India than the traditional joint family.' },
      { term: 'Right to Education Act (2009)', definition: 'An act that made education a fundamental right for all children between the ages of 6 and 14 in India.' },
      { term: 'Literacy Rate', definition: 'The percentage of the population of a given age group that can read and write. This has steadily increased in India since independence.' },
      { term: 'Indian Institutes of Technology (IITs)', definition: 'A group of prestigious public technical and research universities located across India, known for their engineering and technology programs.' },
      { term: 'National Health Mission', definition: 'A government initiative to address the health needs of underserved rural areas and improve health indicators.' },
      { term: 'Life Expectancy', definition: 'The average period that a person may expect to live. This has significantly improved in India due to better healthcare.' },
      { term: 'Bollywood', definition: 'The informal term for the Hindi-language film industry based in Mumbai, one of the largest film producers in the world.' },
      { term: 'Globalization', definition: 'The process of interaction and integration among people, companies, and governments worldwide, which has had a major impact on Indian culture.' },
      { term: 'CNG (Compressed Natural Gas)', definition: 'A cleaner fuel recommended for public transport vehicles in Delhi. The Supreme Court issued an order in 1998 to use CNG to overcome the pollution problem, based on recommendations from the Centre for Science and Environment.' },
      { term: 'Chipko Movement', definition: 'An environmental conservation movement led by Sundarlal Bahuguna. It aimed at protecting trees and forests from deforestation. The movement contributed significantly to environment conservation and preservation in India.' },
      { term: 'Narmada Bachao Movement', definition: 'An environmental movement led by Medha Patkar for the conservation and preservation of the Narmada river. The movement worked to protect the rights of people affected by dam projects and preserve the environment.' },
      { term: 'Cricket', definition: 'The most popular sport in India, often described as a religion, with the Indian Premier League (IPL) being a major annual event.' },
      { term: 'Indian Premier League (IPL)', definition: 'A professional Twenty20 cricket league in India, one of the most-attended and richest sports leagues in the world.' },
      { term: 'Tourism', definition: 'A major service industry in India, known for its rich cultural heritage, diverse landscapes, and medical and wellness tourism.' },
      { term: 'Taj Mahal', definition: 'An ivory-white marble mausoleum on the south bank of the Yamuna river in Agra, and a universally admired masterpiece of world heritage.' },
      { term: 'Demographic Dividend', definition: 'The economic growth potential that can result from shifts in a population’s age structure, especially when the share of the working-age population is larger than the non-working-age share.' },
      { term: 'Pulse Polio Campaign', definition: 'A campaign launched in 1995 by WHO, UNICEF, Rotary International and Government of India for the eradication of polio. The campaign was run with a determination not to leave a single child under five years without polio vaccination. Various means like awareness camps, home visits and extensive advertising were used.' },
      { term: 'AYUSH', definition: 'The Department of Ayurveda, Yoga and Naturopathy, Unani Medicine, Siddha and Homeopathy established by Ministry of Health and Family Welfare in 2009. It works for the development of syllabi and education of these branches of medicine, advanced research, and standardisation of medicine.' },
      { term: 'Aadhaar', definition: 'A 12-digit unique identity number that can be obtained by residents of India, based on their biometric and demographic data. It is the world\'s largest biometric ID system.' },
      { term: 'Joint Family', definition: 'A family structure where multiple generations (grandparents, parents, children) and extended relatives (uncles, aunts, cousins) live together.' },
      { term: 'Middle Class', definition: 'A social group between the upper and working classes, whose growth and consumption has been a major driver of the Indian economy.' },
      { term: 'OTT (Over-the-Top) Services', definition: 'Media streaming services that are delivered directly to viewers via the Internet, such as Netflix, Hotstar, and Amazon Prime Video.' },
      { 'term': 'Sarva Shiksha Abhiyan (SSA)', 'definition': '"Education for All Movement," a flagship Indian government program for universalization of elementary education.' },
      { 'term': 'Indian Institutes of Management (IIMs)', 'definition': 'A group of elite public business schools for management education and research in India.' },
      { 'term': 'Dual Burden of Disease', 'definition': 'The situation where a country has to deal with both communicable (infectious) diseases and non-communicable (lifestyle) diseases simultaneously.' },
      { 'term': 'Non-communicable Diseases (NCDs)', 'definition': 'Medical conditions or diseases that are not infectious, such as heart disease, diabetes, and cancer. Also known as lifestyle diseases.' },
      { 'term': 'Khelo India', 'definition': 'A scheme launched by the Indian government by combining old schemes with new objectives. It has 12 basic aspects, with major ones being to create interest about sports among students from early days in school and to increase girls\' participation in sports.' },
      { 'term': 'Indian Super League (ISL)', 'definition': 'A professional franchise-based football (soccer) league in India.' },
      { 'term': 'Pro Kabaddi League (PKL)', 'definition': 'A professional franchise-based league for the sport of Kabaddi, which has greatly increased its popularity.' },
      { 'term': 'Medical Tourism', 'definition': 'The practice of traveling to another country to receive medical care, an industry where India is a major global player.' },
      { 'term': 'Wellness Tourism', 'definition': 'Travel for the purpose of promoting health and well-being through physical, psychological, or spiritual activities, such as yoga and Ayurveda retreats.' },
      { 'term': 'Golden Triangle', 'definition': 'A popular tourist circuit in northern India connecting the national capital Delhi, Agra, and Jaipur.' },
      { 'term': 'Kollywood', 'definition': 'The informal name for the Tamil-language film industry based in Chennai.' },
      { 'term': 'Tollywood', 'definition': 'The informal name for the Telugu-language film industry based in Hyderabad.' },
      { 'term': 'Glocalization', 'definition': 'The practice of conducting business according to both local and global considerations, often seen in the adaptation of global products for the Indian market.' },
      { 'term': 'Chipko Movement', 'definition': 'A non-violent social and ecological movement by rural villagers, particularly women, in India in the 1970s, aimed at protecting trees and forests.' },
      { 'term': 'Namami Gange Programme', 'definition': 'An Integrated Conservation Mission, approved as a \'Flagship Programme\' by the Union Government to accomplish the twin objectives of effective abatement of pollution and conservation and rejuvenation of the National River Ganga.' },
      { 'term': 'National Food Security Act, 2013', 'definition': 'An Indian law which aims to provide subsidized food grains to approximately two-thirds of India\'s population.' },
      { 'term': 'Digital Divide', 'definition': 'The gap between demographics and regions that have access to modern information and communications technology, and those that don\'t or have restricted access.' },
      { 'term': 'Ajanta and Ellora Caves', 'definition': 'UNESCO World Heritage sites in Maharashtra, famous for their monumental rock-cut caves with ancient religious art.' },
      { 'term': 'Midday Meal Scheme', 'definition': 'A school meal program of the Government of India designed to better the nutritional standing of school-age children nationwide.' },
      { 'term': 'Jobless Growth', 'definition': 'An economic phenomenon in which a macroeconomy experiences growth while maintaining or decreasing its level of employment.' },
      { 'term': 'Ayurveda', 'definition': 'A traditional system of medicine with historical roots in the Indian subcontinent.' },
      { 'term': 'Saina Nehwal', 'definition': 'An Indian badminton player who is a former world number 1 and an Olympic medalist, a pioneer of the sport in India.' },
      { 'term': 'P.V. Sindhu', 'definition': 'An Indian badminton player and one of the most successful athletes from the country, having won multiple Olympic medals.' },
      { 'term': 'Mary Kom', 'definition': 'An Indian boxer, a multiple-time World Amateur Boxing champion, and an Olympic medalist.' },
      { 'term': 'Sachin Tendulkar', 'definition': 'A former Indian cricketer widely regarded as one of the greatest batsmen of all time. He is a cultural icon in India.' },
      { 'term': 'Kapil Dev', 'definition': 'An Indian cricket legend who captained the team to its first-ever World Cup victory in 1983.' },
      { 'term': 'UNESCO World Heritage Site', 'definition': 'A landmark or area which is selected by the United Nations Educational, Scientific and Cultural Organization (UNESCO) as having cultural, historical, scientific or other form of significance, and is legally protected by international treaties. India has many such sites.' }
    ]
  },
];

export const papers: Paper[] = [
  {
    id: '1',
    year: 2023,
    board: 'Maharashtra Board HSC',
    url: '/papers/1',
    questions: [
      {
        question: 'Explain the impact of the printing press on the Renaissance.',
        solution: 'The invention of the printing press by Johannes Gutenberg around 1440 was a pivotal catalyst for the Renaissance. It enabled the mass production of books, drastically reducing their cost and making them accessible beyond the clergy and nobility. This democratization of knowledge allowed for the rapid dissemination of classical Greek and Roman texts, as well as new humanist ideas, across Europe. It fueled intellectual discourse, increased literacy rates, and challenged the traditional monopoly on information held by the Church, thereby accelerating the spread of Renaissance ideals and the Reformation.',
        explanation: 'This question connects to Chapter 1. The printing press is a key technological development of the Renaissance. Its impact was profound because it fundamentally changed how information was shared. Before Gutenberg, knowledge spread slowly through handwritten manuscripts. The press allowed ideas from figures like Martin Luther or Copernicus to spread like wildfire, challenging established authorities and empowering individuals with knowledge. This directly fueled the spirit of inquiry, critical thought, and revival of learning that defined the Renaissance.'
      },
      {
        question: 'What were the main motivations for European colonialism, often summarized as "Gold, God, and Glory"?',
        solution: 'The "Three Gs" represent the primary drivers of European colonialism. "Gold" refers to the economic motive: the desire for wealth through the acquisition of precious metals like gold and silver, and the control of trade in valuable resources like spices and silk. "God" signifies the religious motive: the zeal to spread Christianity and convert indigenous peoples. "Glory" represents the political motive: the competition between European nation-states to gain national prestige, power, and strategic advantages by building vast overseas empires.',
        explanation: 'This question relates to Chapter 2. Understanding these three interconnected motives is crucial to grasping the entire colonial enterprise. It was not just about money; it was also a project of cultural and religious expansion ("God") and a fierce competition for national power and prestige ("Glory"). These motives justified the colonial project in the eyes of the European powers and drove their expansion across the globe for centuries.'
      },
      {
        question: 'Describe the outcome and significance of the Third Battle of Panipat (1761).',
        solution: 'The Third Battle of Panipat was fought between the Maratha Empire and the invading Afghan army of Ahmad Shah Abdali. The battle resulted in a catastrophic defeat for the Marathas. The significance of this battle was immense: it led to the death of an entire generation of Maratha leaders, including the commander Sadashivrao Bhau. It shattered Maratha prestige and power, effectively halting their northward expansion. Most importantly, it created a major power vacuum in North India, which the British East India Company skillfully exploited in the subsequent decades to establish its own dominance.',
        explanation: 'This question is from Chapter 4. The Battle of Panipat is a major turning point in 18th-century Indian history. While a victory for Ahmad Shah Abdali, he did not stay to rule. The real winner in the long run was the British. The battle fatally weakened the Marathas, the only indigenous power that could have potentially challenged the rise of the EIC. Its outcome directly paved the way for the British to become the paramount power in India.'
      },
      {
        question: 'What was the "lapsing of paramountcy" and what challenge did it pose to the newly independent India?',
        solution: 'Paramountcy was the British Crown\'s authority and suzerainty over the 565 princely states in India. The Indian Independence Act of 1947 declared that this paramountcy would "lapse," meaning it would not be transferred to either India or Pakistan. This legally made the princely states sovereign entities. The challenge this posed was the potential "balkanization" of India, where the country could fragment into hundreds of independent, and possibly hostile, states. It created the urgent and monumental task of convincing these states to accede to the Indian Union to preserve the nation\'s unity.',
        explanation: 'This question connects to Chapter 7. The lapsing of paramountcy was a huge legal and political problem at the moment of independence. It meant that the map of India could have looked like a piece of Swiss cheese, full of holes. The successful integration of these states, largely by Sardar Patel, was a monumental achievement that created the unified political entity of India we know today. Understanding this concept is key to appreciating the challenges of nation-building post-1947.'
      },
      {
        question: 'Explain the role of the Non-Aligned Movement (NAM) during the Cold War.',
        solution: 'The Non-Aligned Movement (NAM) was formed during the Cold War as a "third path" for newly independent countries of Asia and Africa. Led by figures like India\'s Nehru, Egypt\'s Nasser, and Yugoslavia\'s Tito, its primary role was to allow member states to maintain their independence from the two superpower blocs led by the USA and the USSR. NAM provided a platform for these nations to pursue their own interests, promote peace and disarmament, and resist being drawn into the ideological and military conflicts of the Cold War. It was an assertion of strategic autonomy in a bipolar world.',
        explanation: 'This question relates to Chapter 10. The Cold War divided the world into two camps. For new nations emerging from colonialism, joining one bloc often meant sacrificing some of their newfound sovereignty. NAM was a crucial political innovation that allowed these countries to collectively amplify their voice on the world stage, advocate for their unique concerns (like development and anti-colonialism), and navigate the treacherous geopolitics of the era without becoming pawns in the superpower rivalry.'
      }
    ]
  },
  { id: '2', year: 2022, board: 'Maharashtra Board HSC', url: '#', questions: [] },
  { id: '3', year: 2021, board: 'Maharashtra Board HSC', url: '#', questions: [] },
  { id: '4', year: 2020, board: 'Maharashtra Board HSC', url: '#', questions: [] },
  { id: '5', year: 2019, board: 'Maharashtra Board HSC', url: '#', questions: [] },
];
