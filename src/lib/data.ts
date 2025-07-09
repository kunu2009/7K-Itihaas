import type { Chapter, Paper } from '@/lib/types';

export const chapters: Chapter[] = [
  {
    id: '1',
    title: 'Renaissance in Europe and Development of Science',
    description: 'Renaissance, Crusades, Scientific inventions, Industrial Revolution & Economic Nationalism',
    content: `The period from the 14th to the 17th century in Europe is known as the Renaissance, which means 'rebirth'. It was a time of renewed interest in the art, literature, and philosophy of ancient Greece and Rome. This revival of classical learning sparked a wave of creativity and intellectual curiosity that transformed European society. The movement started in Italy, a region with a unique concentration of ancient Roman ruins and a wealthy class of merchants and bankers willing to sponsor arts and scholarship.

Key factors contributing to the Renaissance include the fall of Constantinople in 1453, which led to an influx of Greek scholars and texts into Italy. The invention of the printing press by Johannes Gutenberg around 1440 allowed for the mass production of books, making knowledge more accessible than ever before. Wealthy merchant families, like the Medici in Florence, became patrons of the arts, commissioning masterpieces from artists like Leonardo da Vinci, Michelangelo, and Raphael.

The Renaissance was not just an artistic movement; it also laid the groundwork for the Scientific Revolution. Thinkers like Nicolaus Copernicus challenged the long-held geocentric model of the universe, proposing a heliocentric system with the Sun at the center. Galileo Galilei's observations with the newly invented telescope provided evidence to support Copernicus's theory, though he faced persecution from the Church for his views. These developments emphasized observation, experimentation, and reason, which became the cornerstones of modern science. Francis Bacon championed the empirical method, and Isaac Newton's laws of motion and universal gravitation were monumental achievements.

The spirit of inquiry extended to political thought as well. Niccolò Machiavelli's "The Prince" offered a pragmatic and secular analysis of power, a departure from the religious and moral frameworks that had previously dominated political philosophy.

Simultaneously, events like the Crusades, a series of religious wars between Christians and Muslims from the 11th to 13th centuries, had profound long-term effects. While their military objectives were mixed, they facilitated cultural exchange between Europe and the Middle East, introducing new goods (like spices and silk), ideas (like Arabic numerals and medical knowledge), and technologies to the West.

This era of change culminated in the Industrial Revolution, beginning in Great Britain in the late 18th century. Inventions like the steam engine, the spinning jenny, and the power loom mechanized production, particularly in the textile industry. This led to the factory system, urbanization as people moved to cities for work, and the rise of a new industrial working class. The economic landscape of Europe was reshaped, giving rise to economic nationalism, where nations sought to protect their own industries and markets through policies like tariffs and colonization. The Renaissance, therefore, was not merely a cultural flowering but the starting point of a long chain of events that created the modern world.`,
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
      { term: 'Fall of Constantinople', definition: 'The capture of the capital of the Byzantine Empire by the Ottoman Empire in 1453, a key event that spurred the Renaissance in Italy.' }
    ],
  },
  {
    id: '2',
    title: 'European Colonialism',
    description: 'Causes and global impact of European Colonialism',
    content: `European colonialism, a dominant force from the 15th to the 20th century, was driven by a complex set of motivations often summarized as "Gold, God, and Glory." "Gold" refers to the desire for wealth, including precious metals, raw materials like cotton and rubber, and new markets for manufactured goods. "God" represents the religious impulse to spread Christianity. "Glory" signifies the competition between European nations to build vast empires, enhance national prestige, and gain strategic advantages.

The Age of Discovery, beginning in the 15th century, was the first phase. Portugal and Spain led the way. Portuguese explorers like Vasco da Gama established sea routes to India, creating a lucrative spice trade. Spain, after Columbus's voyage in 1492, focused on the Americas, conquering the Aztec and Inca empires and extracting immense quantities of gold and silver. The Treaty of Tordesillas (1494) divided the newly discovered lands outside Europe between Portugal and Spain.

In the 17th century, other powers like Great Britain, France, and the Netherlands joined the colonial race. They established trading posts and colonies in North America, the Caribbean, and Asia. A key economic theory underpinning this era was mercantilism, which held that a nation's wealth and power were best served by increasing exports and collecting precious metals, often at the expense of rival nations and colonies. Colonies were seen as sources of raw materials and captive markets for the mother country's goods.

The 19th century saw a new wave of imperialism, particularly the "Scramble for Africa." The Berlin Conference of 1884-85 formalized the partition of Africa among European powers, who drew arbitrary boundaries without regard for existing ethnic or linguistic groups. The consequences were profound and long-lasting, leading to political instability and conflict that persists to this day. In Asia, Britain solidified its control over India, France colonized Indochina (modern-day Vietnam, Laos, and Cambodia), and the Netherlands controlled the East Indies (Indonesia).

The impact of colonialism was devastating for indigenous populations. In the Americas, disease and violence led to a demographic catastrophe. The transatlantic slave trade forcibly transported millions of Africans to the Americas to work on plantations. In colonized lands, traditional economies were disrupted, local industries were destroyed to eliminate competition, and societies were restructured to serve the interests of the colonizers. While colonizers often introduced new infrastructure like railways and schools, these were primarily built to facilitate resource extraction and administration, not for the benefit of the local population. The legacy of colonialism includes redrawn global maps, economic disparities, and complex cultural and political identities.`,
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
    ],
  },
  {
    id: '3',
    title: 'India and European Colonialism',
    description: 'Colonial powers in India — Portuguese, British, Dutch, French',
    content: `The quest for a direct sea route to India, driven by the highly profitable spice trade, led Europeans to its shores. The Portuguese were the first to arrive, with Vasco da Gama landing in Calicut in 1498. They established a number of coastal forts and trading posts, with Goa becoming their main base. Their primary goal was to control the Indian Ocean spice trade, a goal they pursued aggressively by using their naval superiority to dominate sea lanes. They established the "Cartaz" system, a naval trade license enforced by the Portuguese in the Indian ocean.

Following the Portuguese, the Dutch arrived in the early 17th century. The Dutch East India Company (VOC) focused more on the spice-rich islands of Indonesia but also established trading posts in India, in places like Surat, Cochin, and Nagapattinam. They were major commercial rivals to the Portuguese and, later, the British.

The English, through the British East India Company (EIC), chartered in 1600, gradually became the dominant European power. They initially focused on trade, establishing "factories" (trading posts) in Surat, Madras (Chennai), Bombay (Mumbai), and Calcutta (Kolkata). The EIC's fortunes changed dramatically in the mid-18th century. The decline of the Mughal Empire created a power vacuum, which the EIC exploited.

The French also established their own French East India Company and became the primary rivals to the British in the mid-18th century. The Anglo-French rivalry in India was an extension of their conflicts in Europe and North America. The Carnatic Wars (1746-1763) were a series of military conflicts between the British and French for control over Southern India. The British victory, under the leadership of figures like Robert Clive, effectively ended French ambitions in India.

The Battle of Plassey (1757), where Robert Clive's EIC forces defeated the Nawab of Bengal, Siraj-ud-Daulah, is a pivotal moment. Though it was a small battle, its political consequences were immense, marking the beginning of British political dominance in India. The subsequent Battle of Buxar (1764) confirmed British power, granting them the 'Diwani' (the right to collect revenue) of Bengal, Bihar, and Orissa. This gave the EIC vast financial resources, which they used to expand their military and administrative control over the subcontinent, transitioning from a trading company to a ruling power.`,
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
    ],
  },
  {
    id: '4',
    title: 'Colonialism and the Marathas',
    description: 'Interactions between European powers, Afghans, Siddis, and the Maratha Empire',
    content: `The Maratha Empire, which rose to prominence in the 17th century under Chhatrapati Shivaji Maharaj, was a formidable indigenous power that challenged both the declining Mughal Empire and the encroaching European powers. The Marathas controlled a vast territory in western and central India and were a major obstacle to British expansion.

The relationship between the Marathas and the Portuguese was one of early and consistent conflict. The Marathas, under Shivaji and later Sambhaji, fought the Portuguese to check their influence along the Konkan coast. The Siddis of Janjira, naval mercenaries of African origin, were another coastal power and were often allied with the Mughals and later the Portuguese against the Marathas, leading to numerous naval and land-based conflicts.

The Marathas also faced threats from the north-west. The invasion of the Afghan ruler Ahmad Shah Abdali culminated in the Third Battle of Panipat in 1761. The Marathas suffered a catastrophic defeat in this battle, which was a major blow to their prestige and power. It checked their northward expansion and created a power vacuum in north India that the British would eventually fill.

The most significant interaction was with the British, leading to the three Anglo-Maratha Wars. The First Anglo-Maratha War (1775-1782) began with the British interfering in the Peshwa succession politics in Pune. The war was largely a stalemate, concluding with the Treaty of Salbai, which restored the pre-war status quo but gave the British the island of Salsette.

The Second Anglo-Maratha War (1803-1805) was a result of internal divisions within the Maratha Confederacy. The Peshwa, Baji Rao II, signed the Treaty of Bassein, a subsidiary alliance with the British, which was unacceptable to other powerful Maratha chiefs like the Scindias and Holkars. The British, under Arthur Wellesley (later the Duke of Wellington), decisively defeated the Maratha forces, leading to significant territorial losses for the Marathas.

The Third Anglo-Maratha War (1817-1818) was the final and decisive conflict. The Peshwa attempted to throw off British control, but was defeated. The Peshwaship was abolished, and Baji Rao II was pensioned off. The Maratha Empire was effectively extinguished, and its territories were annexed by the British, cementing their status as the paramount power in India.`,
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
    ],
  },
  {
    id: '5',
    title: 'India: Social and Religious Reforms',
    description: 'Social & religious reform movements in India, including princely states',
    content: `The 19th century in India was a period of profound intellectual and social ferment, partly as a response to the challenges posed by colonial rule and the introduction of Western education and ideas. This led to a number of social and religious reform movements aimed at modernizing Indian society and religion.

One of the earliest and most influential reformers was Raja Ram Mohan Roy, often called the "Father of Modern India." He founded the Brahmo Sabha in 1828 (later Brahmo Samaj), which advocated for monotheism, condemned idol worship, and sought to reform Hindu practices. He is most famous for his campaign against Sati, the practice of a widow immolating herself on her husband's funeral pyre. His efforts led to the Bengal Sati Regulation, 1829, which banned the practice.

Swami Dayananda Saraswati founded the Arya Samaj in 1875. His motto was "Go back to the Vedas," as he believed the Vedas were the infallible source of all true knowledge. The Arya Samaj worked against idol worship, caste system, and child marriage, and promoted female education and widow remarriage. They also started the Shuddhi movement to reconvert Hindus who had converted to other religions.

In Western India, Jyotiba Phule and his wife Savitribai Phule championed the cause of caste and gender equality. Jyotiba Phule founded the Satyashodhak Samaj (Society of Truth Seekers) in 1873 to fight for the rights of lower-caste people (whom he termed Bahujans). Savitribai Phule was a pioneer of women's education in India, opening the first school for girls in Pune in 1848.

The Ramakrishna Mission, founded by Swami Vivekananda in 1897, was inspired by his guru Sri Ramakrishna Paramahamsa. Vivekananda's message was one of spiritual revival and practical service. The mission focused on Vedanta philosophy and social service, such as running hospitals, schools, and disaster relief operations, embodying the principle of "service to man is service to God."

In the Muslim community, Sir Syed Ahmed Khan led the Aligarh Movement. He promoted modern, scientific education among Muslims and founded the Muhammadan Anglo-Oriental College, which later became Aligarh Muslim University. He sought to reconcile Western knowledge with Islamic beliefs and improve the social and economic condition of Muslims in India. These reform movements, though diverse in their approaches, played a crucial role in shaping modern Indian identity and laying the intellectual foundations for the nationalist movement.`,
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
    ],
  },
  {
    id: '6',
    title: 'Indian Struggle against Colonialism',
    description: 'From 1857 Revolt to Gandhi’s Non-cooperation, INA, Quit India',
    content: `The struggle against British colonialism in India was a long and multifaceted process, evolving from sporadic uprisings to an organized mass movement.

A major turning point was the Indian Revolt of 1857, also known as the Sepoy Mutiny. It began as a mutiny of sepoys of the East India Company's army and spread into a widespread rebellion across northern and central India. While the revolt was ultimately crushed, it had significant consequences. It led to the end of the East India Company's rule and the beginning of direct rule by the British Crown (the British Raj). It also left a legacy of bitter racial antagonism.

The latter half of the 19th century saw the rise of organized nationalism. The Indian National Congress (INC) was founded in 1885, initially as a platform for educated Indians to voice their grievances and seek more participation in governance. Early nationalists, known as Moderates, believed in constitutional methods of protest.

The early 20th century saw the rise of a more assertive faction within the Congress, the Extremists, led by figures like Bal Gangadhar Tilak, who famously declared, "Swaraj is my birthright, and I shall have it!" The Partition of Bengal in 1905 fueled the Swadeshi movement, which promoted the use of Indian goods and the boycott of British products.

The arrival of Mohandas Karamchand Gandhi on the Indian political scene in 1915 marked a new phase. He introduced the techniques of Satyagraha (non-violent resistance). His first major nationwide movement was the Non-Cooperation Movement (1920-22), followed by the Civil Disobedience Movement, which was famously launched with the Dandi Salt March in 1930. These movements transformed the INC from an elite organization into a mass movement involving peasants, workers, and women.

Alongside the non-violent struggle, revolutionary activities also continued. Figures like Bhagat Singh and Chandrashekhar Azad believed in armed struggle to overthrow the British. During World War II, Subhas Chandra Bose formed the Indian National Army (INA) with the help of the Axis powers to fight the British.

The final phase of the struggle was the Quit India Movement, launched by Gandhi in 1942 with the call to "Do or Die." It was a mass uprising that, despite being suppressed, demonstrated the determination of the Indian people to achieve independence. The end of World War II left Britain economically drained and politically weakened, making Indian independence inevitable. In 1947, British India was partitioned into the independent nations of India and Pakistan.`,
    quiz: [
        {
          question: 'The Indian Revolt of 1857 led to which major political change?',
          options: ['The formation of the Indian National Congress', 'The end of British rule', 'The start of direct rule by the British Crown', 'The partition of Bengal'],
          correctAnswer: 'The start of direct rule by the British Crown',
          explanation: 'After the 1857 Revolt, the rule of the East India Company was abolished, and India came under the direct control of the British government and Queen Victoria.'
        },
        {
          question: 'Who founded the Indian National Congress in 1885?',
          options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'A.O. Hume', 'Bal Gangadhar Tilak'],
          correctAnswer: 'A.O. Hume',
          explanation: 'Allan Octavian Hume, a retired British civil servant, played a key role in the formation of the Indian National Congress.'
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
    ],
  },
  {
    id: '7',
    title: 'Decolonisation to Political Integration of India',
    description: 'India’s political integration post-independence—Goa, Dadra & Nagar Haveli, Puducherry',
    content: `The end of British rule in 1947 was just the beginning of a new set of challenges for India. The first and most daunting task was the political integration of a fragmented subcontinent. British India had been divided into two types of territories: British India provinces, which were under direct British control, and the Princely States, which were ruled by Indian princes under British suzerainty.

At the time of independence, there were over 560 princely states, which were given the choice to join either India or Pakistan, or to remain independent. The task of persuading these states to join the Indian Union fell to Sardar Vallabhbhai Patel, India's first Deputy Prime Minister and Home Minister. Through skillful diplomacy, negotiation, and at times, the threat of force, Patel and his secretary V. P. Menon successfully integrated almost all the states into India.

However, a few states proved difficult. The ruler of Junagadh, a state with a Hindu majority population but a Muslim ruler, decided to accede to Pakistan. This led to a revolt, and a plebiscite was held which resulted in Junagadh joining India. The Nizam of Hyderabad, a large and prosperous state in the heart of India, wanted to remain independent. After negotiations failed, the Indian government launched a police action known as "Operation Polo" in 1948, and Hyderabad was integrated into India.

The case of Jammu and Kashmir was the most complex. The Hindu ruler, Maharaja Hari Singh, initially wanted to remain independent. However, following an invasion by Pashtun tribesmen from Pakistan in October 1947, he signed the Instrument of Accession to India in exchange for military assistance. This led to the first Indo-Pakistani War and a dispute over Kashmir that continues to this day.

The process of decolonisation was not complete with the departure of the British. The French and Portuguese still held small territories in India. After long negotiations and popular movements, the French peacefully transferred their territories, including Puducherry (Pondicherry), Karaikal, Yanam, and Mahe, in 1954.

The Portuguese, however, refused to relinquish their control over Goa, Daman, and Diu. After years of diplomatic failure and growing popular unrest, the Indian government launched a military operation called "Operation Vijay" in December 1961. After a brief conflict, the Portuguese forces surrendered, and their territories were formally incorporated into India, completing the political integration of the subcontinent.`,
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
    ],
  },
  {
    id: '8',
    title: 'World Wars and India',
    description: "India's role in WWI & WWII, and their effects on the country",
    content: `India, as part of the British Empire, was automatically drawn into both World War I (1914-1918) and World War II (1939-1945). These global conflicts had a profound and transformative impact on India's economy, society, and its struggle for independence.

During World War I, India made a significant contribution to the British war effort. Over 1.3 million Indian soldiers served overseas, fighting in theaters from the Western Front in France to Mesopotamia (modern Iraq) and East Africa. The Indian economy was also harnessed for the war, supplying food, raw materials, and money. Mainstream nationalist leaders, including Mahatma Gandhi, initially supported the war, hoping that India's loyalty would be rewarded with a move towards self-government, or dominion status. However, the end of the war did not bring the expected reforms. Instead, Britain imposed repressive measures like the Rowlatt Act, leading to widespread disillusionment and fueling the Non-Cooperation Movement.

The economic impact of WWI was severe. Heavy taxation, inflation, and the disruption of trade led to widespread economic distress. However, the war also stimulated the growth of some Indian industries, such as steel and textiles, as they had to meet wartime demands.

In World War II, India's involvement was even more extensive. About 2.5 million Indian soldiers fought for the Allies across the globe. The Indian National Congress opposed the unilateral decision by the Viceroy to declare war on Germany on India's behalf without consulting Indian leaders. The Congress ministries in the provinces resigned in protest.

The war created a complex political situation. The British government, needing India's cooperation, made promises of post-war independence, such as in the Cripps Mission of 1942, but these were seen as inadequate. This led Gandhi to launch the Quit India Movement in 1942, the most serious challenge to British rule since 1857. In contrast, the Muslim League, led by Muhammad Ali Jinnah, cooperated with the British, which strengthened its political position and its demand for a separate state of Pakistan.

Subhas Chandra Bose sought help from the Axis powers, forming the Indian National Army (INA) to fight the British. While the INA's military campaign was unsuccessful, the trials of its soldiers after the war created a wave of nationalist sentiment across India.

WWII left Britain exhausted, both economically and militarily. The war shattered the myth of British invincibility and made it clear that they could no longer afford to hold on to their vast empire. The pressure from the Indian independence movement, combined with Britain's weakened global position, made Indian independence in 1947 a certainty.`,
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
    ],
  },
  {
    id: '9',
    title: 'World: Decolonisation',
    description: 'Decolonisation in Asia & Africa',
    content: `Decolonisation is the process by which colonies become independent of the colonizing country. The period after World War II saw a massive wave of decolonisation, leading to the emergence of dozens of new nations in Asia and Africa and fundamentally reshaping the world map.

Several factors fueled this global movement. The war severely weakened the main colonial powers, Britain and France, both economically and militarily. It also shattered the myth of European invincibility, especially after Japan's early victories in Southeast Asia. The ideals of freedom and self-determination, championed by the Allies (particularly the United States and the Soviet Union), were hard to deny to the colonies that had helped them win the war. Both the US and the USSR, for their own strategic reasons during the Cold War, supported the end of European colonial empires. Finally, and most importantly, strong nationalist movements had grown within the colonies, demanding independence.

In Asia, the process was swift but often violent. India's independence in 1947 was followed by independence for Burma (Myanmar) and Ceylon (Sri Lanka) in 1948. In Indonesia, nationalists led by Sukarno declared independence in 1945 after the Japanese surrender, leading to a four-year war of independence against the Dutch. The French fought a long and brutal war in Indochina (1946-1954) to retain their colony, but were ultimately defeated by the Viet Minh forces led by Ho Chi Minh.

In Africa, the path to independence varied. The process began in North Africa with Libya's independence in 1951, followed by Tunisia and Morocco gaining independence from France in 1956. The Algerian War (1954-1962) was another bloody conflict for independence from France. In sub-Saharan Africa, Ghana became the first country to gain independence in 1957, under the leadership of Kwame Nkrumah, sparking a wave of independence movements across the continent. 1960 is known as the "Year of Africa," as 17 African nations gained independence.

However, independence did not always lead to stability or prosperity. The arbitrary borders drawn by colonizers often grouped rival ethnic groups together, leading to civil wars and political instability. Many newly independent nations remained economically dependent on their former colonizers, a situation sometimes referred to as "neocolonialism." The legacy of colonialism continues to shape the political and economic realities of many countries in the post-colonial world.`,
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
    ],
  },
  {
    id: '10',
    title: 'Cold War',
    description: 'Cold War politics, non‑alignment, SAARC, Commonwealth, NATO etc.',
    content: `The Cold War (approx. 1947-1991) was a period of intense geopolitical tension and ideological rivalry between the United States and its Western allies, and the Soviet Union and its satellite states. It was a "cold" war because there was no large-scale direct fighting between the two superpowers, but they fought numerous proxy wars in other parts of the world.

The world was broadly divided into two blocs. The Western Bloc, led by the U.S., championed capitalism and liberal democracy. It formed the North Atlantic Treaty Organization (NATO) in 1949, a collective security alliance. The Eastern Bloc, led by the USSR, promoted communism and a command economy. It responded with its own military alliance, the Warsaw Pact, in 1955. The "Iron Curtain," a term coined by Winston Churchill, symbolized the ideological and physical boundary dividing Europe into these two separate areas.

Key features of the Cold War included a massive arms race, particularly in nuclear weapons, which created a state of "Mutually Assured Destruction" (MAD). There was also a space race, intense espionage, and propaganda campaigns. Major crises that brought the world to the brink of nuclear war included the Berlin Blockade (1948-49), the Korean War (1950-53), the Cuban Missile Crisis (1962), and the Vietnam War (1955-1975).

In the midst of this bipolar world, a third path emerged: the Non-Aligned Movement (NAM). Founded in 1961, with leaders like India's Jawaharlal Nehru, Egypt's Gamal Abdel Nasser, and Yugoslavia's Josip Broz Tito, NAM provided a platform for newly independent nations to avoid aligning with either of the two superpower blocs. They sought to maintain their independence and promote peace and cooperation.

Regional organizations also formed during this period. The Commonwealth of Nations, a voluntary association of former British colonies, continued to foster cooperation. In South Asia, the South Asian Association for Regional Cooperation (SAARC) was established in 1985 to promote economic and social development among its member states.

The Cold War began to thaw in the late 1980s under the leadership of Soviet Premier Mikhail Gorbachev, whose policies of "glasnost" (openness) and "perestroika" (restructuring) led to a series of revolutions in Eastern Europe. The fall of the Berlin Wall in 1989 symbolized the end of the Cold War, which formally concluded with the dissolution of the Soviet Union in 1991.`,
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
    ],
  },
  {
    id: '11',
    title: 'India Transformed – Part 1',
    description: 'Transformation of India—BRICS, technology, communication, policies, state reorganisation',
    content: `Since its independence, and particularly in the last few decades, India has undergone a dramatic transformation. A key turning point was the economic liberalization of 1991. Faced with a severe balance of payments crisis, the government under Prime Minister P.V. Narasimha Rao and Finance Minister Manmohan Singh initiated a series of reforms. These reforms dismantled the "License Raj" (an elaborate system of licenses and regulations), encouraged foreign investment, and opened up the Indian economy to international trade. This shift from a socialist-inspired economy to a market-based economy unleashed India's economic potential.

One of the most significant outcomes of liberalization was the boom in the Information Technology (IT) and software services industry. Cities like Bangalore, Hyderabad, and Pune became global hubs for software development and IT-enabled services (ITES), creating millions of jobs and a new, aspirational middle class. This technological revolution was accompanied by a telecommunications revolution, with the proliferation of mobile phones and the internet connecting even the most remote parts of the country.

India's foreign policy also transformed. From being a leader of the Non-Aligned Movement, India has moved towards a more pragmatic approach, building strategic partnerships with multiple major powers, including the United States, Russia, and Japan. India has also become a key player in several international groupings. It is a member of the BRICS, an association of five major emerging national economies: Brazil, Russia, India, China, and South Africa.

Domestically, the political map of India has also been redrawn multiple times. The States Reorganisation Act of 1956 was the first major effort to reorganize state boundaries along linguistic lines. This process has continued over the years, with the creation of new states like Jharkhand, Chhattisgarh, and Uttarakhand in 2000, and most recently, Telangana in 2014, to meet regional aspirations.

India's space program, led by the Indian Space Research Organisation (ISRO), has achieved remarkable success on a shoestring budget. From launching its first satellite, Aryabhata, in 1975, ISRO has successfully launched missions to the Moon (Chandrayaan) and Mars (Mangalyaan), showcasing India's prowess in high-end technology. These transformations in economy, technology, and governance have profoundly changed the nation and its place in the world.`,
    quiz: [
        {
          question: 'The economic liberalization in India, which dismantled the "License Raj," was initiated in which year?',
          options: ['1947', '1984', '1991', '2001'],
          correctAnswer: '1991',
          explanation: 'In 1991, India faced a severe economic crisis, which prompted the government to launch a comprehensive program of economic reforms.'
        },
        {
          question: 'What does the acronym BRICS stand for?',
          options: ['Britain, Russia, India, China, Spain', 'Brazil, Russia, India, China, South Africa', 'Belgium, Romania, Italy, Croatia, Sweden', 'Bolivia, Rwanda, Indonesia, Chile, Somalia'],
          correctAnswer: 'Brazil, Russia, India, China, South Africa',
          explanation: 'BRICS is the acronym for an association of five major emerging national economies.'
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
        }
    ],
    flashcards: [
      { term: 'Economic Liberalization (1991)', definition: 'A series of economic reforms in India that opened the economy to foreign trade and investment and reduced government regulation.' },
      { term: 'Manmohan Singh', definition: 'The Finance Minister in 1991 who is credited with implementing India\'s economic reforms. He later became Prime Minister.' },
      { term: 'License Raj', definition: 'The elaborate system of licenses, regulations, and red tape that was required to set up and run businesses in India before 1991.' },
      { term: 'Information Technology (IT)', definition: 'An industry that saw explosive growth in India after the 1991 reforms, particularly in software services and business process outsourcing.' },
      { term: 'Bangalore (Bengaluru)', definition: 'Known as the "Silicon Valley of India," it is a major hub for the country\'s IT industry.' },
      { term: 'BRICS', definition: 'An acronym for the powerful grouping of the world\'s leading emerging market economies, namely Brazil, Russia, India, China, and South Africa.' },
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
    ],
  },
  {
    id: '12',
    title: 'India Transformed – Part 2',
    description: 'Society, health, education, culture, environment, sports, tourism in a transformed India',
    content: `The transformation of India extends beyond economics and politics into the very fabric of its society and culture. Urbanization and the growth of the middle class have led to changing family structures, lifestyles, and consumer habits. The traditional joint family system has, in many urban areas, given way to nuclear families.

In education, there has been a massive expansion of access. The Sarva Shiksha Abhiyan (Education for All Movement) and the Right to Education Act (2009), which made education a fundamental right for children aged 6-14, have significantly improved literacy rates. However, challenges in quality and infrastructure remain. Higher education has also grown, with numerous public and private universities and institutes, including the world-renowned Indian Institutes of Technology (IITs).

The health sector has seen improvements in life expectancy and reductions in infant mortality, thanks to programs like the National Health Mission. However, disparities in healthcare access between urban and rural areas, and between the rich and poor, persist. India faces a dual burden of communicable diseases like tuberculosis and non-communicable or "lifestyle" diseases like diabetes and heart disease.

Indian culture, while rooted in ancient traditions, is dynamic and has been influenced by globalization. Bollywood, the Hindi film industry based in Mumbai, is a global cultural phenomenon. The diversity of Indian cuisine, music, and dance is celebrated worldwide. The digital age has also transformed cultural consumption, with streaming services and social media becoming dominant platforms.

Environmental protection has become a major concern. Rapid industrialization and urbanization have led to severe air and water pollution, deforestation, and pressure on natural resources. The government has launched initiatives like the Swachh Bharat Abhiyan (Clean India Mission) and is a key player in global climate change negotiations, promoting renewable energy sources like solar power through the International Solar Alliance.

In sports, while cricket remains a national passion, India has started to achieve success in a wider range of disciplines like badminton, wrestling, and shooting. The rise of professional leagues in sports other than cricket, like the Indian Super League (football) and Pro Kabaddi League, indicates a diversification of sporting culture.

Tourism is a major service industry in India, which offers a diverse range of attractions, from historical monuments like the Taj Mahal and ancient temples, to natural landscapes like the Himalayas and the beaches of Goa. Both domestic and international tourism have been growing steadily, contributing to the economy and fostering cultural exchange.`,
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
          question: 'Swachh Bharat Abhiyan is a national campaign focused on what?',
          options: ['Digital literacy', 'Financial inclusion', 'Cleanliness and sanitation', 'Renewable energy'],
          correctAnswer: 'Cleanliness and sanitation',
          explanation: 'Launched in 2014, the Swachh Bharat Abhiyan (Clean India Mission) is a massive campaign to clean up the streets, roads, and infrastructure of India\'s cities, towns, and rural areas.'
        },
        {
          question: 'Which sport is overwhelmingly the most popular and passionately followed in India?',
          options: ['Football', 'Kabaddi', 'Field Hockey', 'Cricket'],
          correctAnswer: 'Cricket',
          explanation: 'Cricket is by far the most popular sport in India, often considered a religion in the country, with a massive following and cultural impact.'
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
      { term: 'Swachh Bharat Abhiyan', definition: '"Clean India Mission," a country-wide campaign initiated by the Government of India in 2014 to eliminate open defecation and improve solid waste management.' },
      { term: 'Renewable Energy', definition: 'Energy from a source that is not depleted when used, such as wind or solar power. India is heavily investing in this sector.' },
      { term: 'International Solar Alliance', definition: 'An alliance of over 120 countries initiated by India to promote solar energy and reduce dependence on fossil fuels.' },
      { term: 'Cricket', definition: 'The most popular sport in India, often described as a religion, with the Indian Premier League (IPL) being a major annual event.' },
      { term: 'Indian Premier League (IPL)', definition: 'A professional Twenty20 cricket league in India, one of the most-attended and richest sports leagues in the world.' },
      { term: 'Tourism', definition: 'A major service industry in India, known for its rich cultural heritage, diverse landscapes, and medical and wellness tourism.' },
      { term: 'Taj Mahal', definition: 'An ivory-white marble mausoleum on the south bank of the Yamuna river in Agra, and a universally admired masterpiece of world heritage.' },
      { term: 'Demographic Dividend', definition: 'The economic growth potential that can result from shifts in a population’s age structure, especially when the share of the working-age population is larger than the non-working-age share.' },
      { term: 'Digital India', definition: 'A campaign launched by the Government of India to ensure that government services are made available to citizens electronically.' },
      { term: 'Make in India', definition: 'An initiative launched by the government to encourage companies to manufacture their products in India and increase investment.' },
      { term: 'Aadhaar', definition: 'A 12-digit unique identity number that can be obtained by residents of India, based on their biometric and demographic data. It is the world\'s largest biometric ID system.' },
    ],
  },
];

export const papers: Paper[] = [
  { id: '1', year: 2023, board: 'Maharashtra Board HSC', url: '#' },
  { id: '2', year: 2022, board: 'Maharashtra Board HSC', url: '#' },
  { id: '3', year: 2021, board: 'Maharashtra Board HSC', url: '#' },
  { id: '4', year: 2020, board: 'Maharashtra Board HSC', url: '#' },
  { id: '5', year: 2019, board: 'Maharashtra Board HSC', url: '#' },
];
