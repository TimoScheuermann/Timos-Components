export interface Person {
  id: string;
  name: string;
  age: string;
  location: string;
  avatar: string;
}

export const persons: Person[] = [
  {
    id: '1',
    name: 'Albert Einstein',
    age: '76',
    location: 'Germany',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/330px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg'
  },
  {
    id: '2',
    name: 'Chien-Shiung Wu',
    age: '84',
    location: 'China',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chien-Shiung_Wu_%281912-1997%29_in_1958.jpg/330px-Chien-Shiung_Wu_%281912-1997%29_in_1958.jpg'
  },
  {
    id: '3',
    name: 'Steve Jobs',
    age: '56',
    location: 'U.S.',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
  },
  {
    id: '4',
    name: 'Niels Bohr',
    age: '77',
    location: 'Denmark',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/639px-Niels_Bohr.jpg'
  },
  {
    id: '5',
    name: 'Lord Kelvin',
    age: '83',
    location: 'Ireleand',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lord_Kelvin_photograph.jpg/330px-Lord_Kelvin_photograph.jpg'
  },
  {
    id: '6',
    name: 'Polly Matzinger',
    age: '73',
    location: 'France',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Polly_%26_Annie.jpg/330px-Polly_%26_Annie.jpg'
  }
];
