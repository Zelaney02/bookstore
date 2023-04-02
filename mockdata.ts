import Product from './interfaces/product.interface';
import UserProfile from './interfaces/userprofile.interface';

export const MockUserProfiles: UserProfile[] = [
  {
    id: 0,
    firstName: 'Jane',
    lastName: 'He',
    email: 'jane@joytaba.com',
    billingStatus: true,
    profileImage: '/janehe.jpg',
  },
];

export const MockProducts: Product[] = [
  {
    id: 0,
    title: 'Empire of Storms',
    author: 'Sarah J. Maas',
    price: 1200,
    imagePath: '/author1.jpg',
    quantity: 100,
    description:
      'Sarah J. Maas is the #1 New York Times and internationally bestselling author of the Crescent City, A Court of Thorns and Roses, and the Throne of Glass series. Her books have sold more than twelve million copies and are published in thirty-seven languages. A New York native, Sarah lives in Philadelphia with her husband, son, and dog. To find out more, visit sarahjmaas.com or follow @therealsjmaas on Instagram.',
  },
  {
    id: 1,
    title: 'Bad Mormon: A Memoir',
    author: 'Heather Gay',
    price: 999,
    imagePath: '/author2.jpg',
    quantity: 100,
    description:
      'Drinking and Tweeting meets Unorthodox in this vulnerable memoir about The Real Housewives of Salt Lake City stars departure from the Mormon Church, and her unforeseen success in business, television, and single motherhood.',
  },
  {
    id: 2,
    title: 'Love, Pamela',
    author: 'Pamela Anderson',
    price: 800,
    imagePath: '/author3.jpg',
    quantity: 100,
    description:
      'Pamela Anderson’s blond bombshell image was ubiquitous in the 1990s. Discovered in the stands during a Canadian football game, she was quickly launched into superstardom, becoming Playboy’s favorite cover girl and an emblem of Hollywood glamour and sex appeal. Yet the Pamela Anderson we think we know was created through happenstance rather than careful cultivation. Love, Pamela brings forth her true story: that of a small-town girl getting tangled up in her own dream.',
  },
  {
    id: 3,
    title: 'Prince Harry',
    author: 'Spare',
    price: 50,
    imagePath: '/author4.jpg',
    quantity: 100,
    description:
      'It was one of the most searing images of the twentieth century: two young boys, two princes, walking behind their mother’s coffin as the world watched in sorrow—and horror. As Princess Diana was laid to rest, billions wondered what Prince William and Prince Harry must be thinking and feeling—and how their lives would play out from that point on.',
  },
  {
    id: 4,
    title: 'Paris: The Memoir',
    author: 'Paris Hilton',
    price: 10,
    imagePath: '/author5.jpg',
    quantity: 100,
    description:
      'Paris rose to prominence as an heiress to the Hilton Hotels empire, but cultivated her fame and fortune as the It Girl of the aughts, a time marked by the burgeoning twenty-four-hour entertainment news cycle and the advent of the celebrity blog. Using her celebrity brand, Paris set in motion her innovative business ventures, while being the constant target of tabloid culture that dismissively wrote her off as "famous for being famous." With tenacity, sharp business acumen, and grit, she built a global empire and, in the process, became a truly modern icon beloved around the world.',
  },
  {
    id: 5,
    title: "Movie Star: They Always Say They're Single",
    price: 300,
    author: 'Jessica Simpson',
    imagePath: '/author6.jpg',
    quantity: 100,
    description:
      'After the end of her marriage to the first man she ever loved, Jessica Simpson wonders who she really is. Exploring what she truly wants in a relationship, Jessica begins dating again. This time her only vow is not to leap for the fairy tale. Don’t overthink. Just enjoy the moment. But when an A-list childhood crush invites her on a romantic getaway, it’s impossible for Jessica not to swoon.',
  },
];
