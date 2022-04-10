const {Questions} = require('../models/index');

const questionSeeds = () => Questions.bulkCreate ([
  {
    category: 'Science',
    question: 'What is the name for the wire inside of a lightbulb',
    answer: 'Filament',
    type: 'Regular',
    difficulty: 'medium',
  },
  {
    category: 'Box Office',
    question: 'Whithin 5 years either way, in what year did a film gross over $100M in its opening weekend for the first time',
    answer: '2002',
    type: 'Range',
    difficulty: 'medium',
  },
  {
    category: 'Anagram',
    question: 'What actors first and last name can be found in the phrase MIMIC HALLWAY',
    answer: 'William H Macy',
    type: 'Regular',
    difficulty: 'easy',
  },
  {
    category: 'College Football',
    question: 'What were the last four D1 schools to have an undefeated season',
    answer: 'Alabama, LSU, Clemson, UCF',
    type: 'Halftime',
    difficulty: 'medium',
  },
  {
    category: 'Weather',
    question: 'Within 5 degrees either way, what is columbus record high for today (jan 5)',
    answer: '65',
    type: 'Final',
    difficulty: 'medium',
  },
])

module.exports = questionSeeds;