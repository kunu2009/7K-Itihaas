import type { Chapter, Paper } from '@/lib/types';

export const chapters: Chapter[] = [
  {
    id: '1',
    title: 'Renaissance in Europe and Development of Science',
    description: 'Renaissance, Crusades, Scientific inventions, Industrial Revolution & Economic Nationalism',
    content: `The period from the 14th to the 17th century in Europe is known as the Renaissance, which means 'rebirth'. It was a time of renewed interest in the art, literature, and philosophy of ancient Greece and Rome. This revival of classical learning sparked a wave of creativity and intellectual curiosity that transformed European society.
    
Key factors contributing to the Renaissance include the fall of Constantinople in 1453, which led to an influx of Greek scholars and texts into Italy. The invention of the printing press by Johannes Gutenberg around 1440 allowed for the mass production of books, making knowledge more accessible than ever before. Wealthy merchant families, like the Medici in Florence, became patrons of the arts, commissioning masterpieces from artists like Leonardo da Vinci, Michelangelo, and Raphael.

The Renaissance was not just an artistic movement; it also laid the groundwork for the Scientific Revolution. Thinkers like Nicolaus Copernicus challenged the long-held geocentric model of the universe, proposing a heliocentric system with the Sun at the center. Galileo Galilei's observations with the newly invented telescope provided evidence to support Copernicus's theory, though he faced persecution from the Church for his views. These developments emphasized observation, experimentation, and reason, which became the cornerstones of modern science.

The spirit of inquiry extended to political thought as well. Niccolò Machiavelli's "The Prince" offered a pragmatic and secular analysis of power, a departure from the religious and moral frameworks that had previously dominated political philosophy.

Simultaneously, events like the Crusades, a series of religious wars between Christians and Muslims, had profound long-term effects. While their military objectives were mixed, they facilitated cultural exchange between Europe and the Middle East, introducing new goods, ideas, and technologies to the West.

This era of change culminated in the Industrial Revolution, beginning in Great Britain in the late 18th century. Inventions like the steam engine, the spinning jenny, and the power loom mechanized production, particularly in the textile industry. This led to the factory system, urbanization, and the rise of a new industrial working class. The economic landscape of Europe was reshaped, giving rise to economic nationalism, where nations sought to protect their own industries and markets through policies like tariffs and colonization. The Renaissance, therefore, was not merely a cultural flowering but the starting point of a long chain of events that created the modern world.`,
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
      }
    ],
    flashcards: [
      { term: 'Renaissance', definition: "A period in European history, from the 14th to the 17th century, regarded as the cultural bridge between the Middle Ages and modern history. It means 'rebirth'." },
      { term: 'Heliocentrism', definition: 'The astronomical model in which the Earth and planets revolve around the Sun at the center of the Solar System.' },
      { term: 'Patronage', definition: 'The support, encouragement, privilege, or financial aid that an organization or individual bestows on another, especially in the arts.' },
      { term: 'Industrial Revolution', definition: 'The transition to new manufacturing processes in Europe and the United States, in the period from about 1760 to sometime between 1820 and 1840.' },
      { term: 'Economic Nationalism', definition: 'An ideology that favors state interventionism over other market mechanisms, with policies such as domestic control of the economy, labor, and capital formation.' },
    ],
  },
  {
    id: '2',
    title: 'European Colonialism',
    description: 'Causes and global impact of European Colonialism',
    content: 'This chapter will discuss the causes, nature, and consequences of European colonialism across the world. Placeholder content.',
    quiz: [],
    flashcards: [],
  },
  {
    id: '3',
    title: 'India and European Colonialism',
    description: 'Colonial powers in India — Portuguese, British, Dutch, French',
    content: 'This chapter explores the arrival and impact of various European powers in India. Placeholder content.',
    quiz: [],
    flashcards: [],
  },
  {
    id: '4',
    title: 'Colonialism and the Marathas',
    description: 'Interactions between European powers, Afghans, Siddis, and the Maratha Empire',
    content: 'This chapter details the complex relationship between the Maratha Empire and colonial forces. Placeholder content.',
    quiz: [],
    flashcards: [],
  },
  {
    id: '5',
    title: 'India: Social and Religious Reforms',
    description: 'Social & religious reform movements in India, including princely states',
    content: 'This chapter focuses on the various reform movements that shaped modern India. Placeholder content.',
    quiz: [],
    flashcards: [],
  },
  {
    id: '6',
    title: 'Indian Struggle against Colonialism',
    description: 'From 1857 Revolt to Gandhi’s Non-cooperation, INA, Quit India',
    content: "This chapter covers India's freedom struggle from the 19th century to independence. Placeholder content.",
    quiz: [],
    flashcards: [],
  },
  {
    id: '7',
    title: 'Decolonisation to Political Integration of India',
    description: 'India’s political integration post-independence—Goa, Dadra & Nagar Haveli, Puducherry',
    content: "This chapter examines the process of integrating various territories into the Indian union after 1947. Placeholder content.",
    quiz: [],
    flashcards: [],
  },
  {
    id: '8',
    title: 'World Wars and India',
    description: "India's role in WWI & WWII, and their effects on the country",
    content: 'This chapter analyzes the impact of the two World Wars on India. Placeholder content.',
    quiz: [],
    flashcards: [],
  },
  {
    id: '9',
    title: 'World: Decolonisation',
    description: 'Decolonisation in Asia & Africa',
    content: 'This chapter looks at the global process of decolonisation in Asia and Africa. Placeholder content.',
    quiz: [],
    flashcards: [],
  },
  {
    id: '10',
    title: 'Cold War',
    description: 'Cold War politics, non‑alignment, SAARC, Commonwealth, NATO etc.',
    content: 'This chapter explains the dynamics of the Cold War and its impact on global politics. Placeholder content.',
    quiz: [],
    flashcards: [],
  },
  {
    id: '11',
    title: 'India Transformed – Part 1',
    description: 'Transformation of India—BRICS, technology, communication, policies, state reorganisation',
    content: "This chapter covers the significant transformations in India's economy, technology, and administration. Placeholder content.",
    quiz: [],
    flashcards: [],
  },
  {
    id: '12',
    title: 'India Transformed – Part 2',
    description: 'Society, health, education, culture, environment, sports, tourism in a transformed India',
    content: 'This chapter continues to explore modern India, focusing on social and cultural aspects. Placeholder content.',
    quiz: [],
    flashcards: [],
  },
];

export const papers: Paper[] = [
  { id: '1', year: 2023, board: 'Maharashtra Board HSC', url: '#' },
  { id: '2', year: 2022, board: 'Maharashtra Board HSC', url: '#' },
  { id: '3', year: 2021, board: 'Maharashtra Board HSC', url: '#' },
  { id: '4', year: 2020, board: 'Maharashtra Board HSC', url: '#' },
  { id: '5', year: 2019, board: 'Maharashtra Board HSC', url: '#' },
];
