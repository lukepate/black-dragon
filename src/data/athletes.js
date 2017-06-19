const athletes = [
  {
    'id': 'count-dante',
    'name': 'Count Dante',
    'birth': '1939',
    'image': 'dante.jpg',
    'bio': "Inspired by the fact Samurai warriors in order to attain a sense of balance between hard and soft lifestyles often practiced flower arranging or calligraphy, John Keehan did likewise. He artistically expressed himself as a hair stylist. He worked on some of the hair designs for Playboy models of the time that gave rise to his flamboyant personification and helped launch him to the forefront of martial art history.",
    'section': "John Keehan AKA Count Dante was born in Beverly, Illinois, on February 2, 1939, and died May 25th, 1975. His unexpected death at age 34 is the cause of much deliberation. It is attributed to a perforated stomach allegedly caused by either a bleeding ulcer, toxic poisoning or 'Dim Mak' poison hand technique that resulted in his untimely death. A strong indicator foul play may be the case is the fact his body is allegedly exhumed and autopsied numerous times and he is buried in an unmarked grave.",
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'tdiype': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
    'cover': 'blackdragon.jpg',
    'link': 'http://officialblackdragonfightingsociety.com/Bio/Counte%20Dante%20Bio.html',
  },
  {
    'id': 'lawrence-day',
    'name': 'Grandmaster Lawrence Day, Dr.',
    'country': 'cu',
    'birth': '1973',
    'image': 'day.jpg',
    'bio': "Inspired by the fact Samurai warriors in order to attain a sense of balance between hard and soft lifestyles often practiced flower arranging or calligraphy, John Keehan did likewise. He artistically expressed himself as a hair stylist. He worked on some of the hair designs for Playboy models of the time that gave rise to his flamboyant personification and helped launch him to the forefront of martial art history.",
    'cover': 'blackdragon.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
  },
  {
    'id': 'michael-felkoff',
    'name': 'Grandmaster Michael Felkoff',
    'country': 'cu',
    'birth': '1973',
    'image': 'michael.jpg',
    'bio': "Inspired by the fact Samurai warriors in order to attain a sense of balance between hard and soft lifestyles often practiced flower arranging or calligraphy, John Keehan did likewise. He artistically expressed himself as a hair stylist. He worked on some of the hair designs for Playboy models of the time that gave rise to his flamboyant personification and helped launch him to the forefront of martial art history.",
    'cover': 'blackdragon.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
  },
  {
    'id': 'donald-miskel',
    'name': 'Grandmaster Donald Miskel',
    'country': 'cu',
    'birth': '1973',
    'image': 'donald.jpg',
    'bio': "Inspired by the fact Samurai warriors in order to attain a sense of balance between hard and soft lifestyles often practiced flower arranging or calligraphy, John Keehan did likewise. He artistically expressed himself as a hair stylist. He worked on some of the hair designs for Playboy models of the time that gave rise to his flamboyant personification and helped launch him to the forefront of martial art history.",
    'cover': 'blackdragon.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
  },
  {
    'id': 'hanshi-frank-dux',
    'name': 'Hanshi Frank Dux',
    'country': 'cu',
    'birth': '1973',
    'image': 'frank.jpg',
    'bio': "Inspired by the fact Samurai warriors in order to attain a sense of balance between hard and soft lifestyles often practiced flower arranging or calligraphy, John Keehan did likewise. He artistically expressed himself as a hair stylist. He worked on some of the hair designs for Playboy models of the time that gave rise to his flamboyant personification and helped launch him to the forefront of martial art history.",
    'cover': 'blackdragon.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
  },
  {
    'id': 'ashida-kim',
    'name': 'Grandmaster Ashida Kim',
    'country': 'cu',
    'birth': '1973',
    'image': 'kim.jpg',
    'bio': "Inspired by the fact Samurai warriors in order to attain a sense of balance between hard and soft lifestyles often practiced flower arranging or calligraphy, John Keehan did likewise. He artistically expressed himself as a hair stylist. He worked on some of the hair designs for Playboy models of the time that gave rise to his flamboyant personification and helped launch him to the forefront of martial art history.",
    'cover': 'blackdragon.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
  },
  {
    'id': 'ronald-pierce',
    'name': 'Grandmaster Ronald Pierce',
    'country': 'cu',
    'birth': '1973',
    'image': 'ron.jpg',
    'bio': "Inspired by the fact Samurai warriors in order to attain a sense of balance between hard and soft lifestyles often practiced flower arranging or calligraphy, John Keehan did likewise. He artistically expressed himself as a hair stylist. He worked on some of the hair designs for Playboy models of the time that gave rise to his flamboyant personification and helped launch him to the forefront of martial art history.",
    'cover': 'blackdragon.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
  },
  {
    'id': 'ernie-rynonlds',
    'name': 'Grandmaster Ernie Reyonlds',
    'country': 'cu',
    'birth': '1973',
    'image': 'ernie.jpg',
    'bio': "Inspired by the fact Samurai warriors in order to attain a sense of balance between hard and soft lifestyles often practiced flower arranging or calligraphy, John Keehan did likewise. He artistically expressed himself as a hair stylist. He worked on some of the hair designs for Playboy models of the time that gave rise to his flamboyant personification and helped launch him to the forefront of martial art history.",
    'cover': 'blackdragon.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
  },
  {
    'id': 'vic-moore',
    'name': 'Grandmaster Vic Moore',
    'country': 'cu',
    'birth': '1973',
    'image': 'vic.jpg',
    'bio': "Inspired by the fact Samurai warriors in order to attain a sense of balance between hard and soft lifestyles often practiced flower arranging or calligraphy, John Keehan did likewise. He artistically expressed himself as a hair stylist. He worked on some of the hair designs for Playboy models of the time that gave rise to his flamboyant personification and helped launch him to the forefront of martial art history.",
    'cover': 'blackdragon.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
  }
];
export default athletes;
