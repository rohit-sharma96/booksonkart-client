const SHOP_DATA = [
    {
        id: 1,
        title: 'History',
        routeName: 'history',
        items: [
            {
                id: 1,
                name: 'Grant',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/08f3d78/2147483647/strip/true/crop/195x300+0+0/resize/390x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F9a%2Fef%2Fd4bf8b1a40d180e2e93fddc869bb%2Fbest-history01.jpg',
                price: 25
            },
            {
                id: 2,
                name: 'Encounters at the Heart of the World: A History of the Mandan People',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/83e13d3/2147483647/strip/true/crop/200x300+0+0/resize/400x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F9c%2Ff6%2Fb4599e574125af0733e3fab79a05%2Fbest-history30.jpg',
                price: 18
            },
            {
                id: 3,
                name: 'Guns, Germs, and Steel: The Fate of Human Societies',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/240ff2f/2147483647/strip/true/crop/199x300+0+0/resize/398x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F13%2F7e%2F50694eaa4f2dbb874d77972ff2bf%2Fbest-history02.jpg',
                price: 35
            },
            {
                id: 4,
                name: 'Genghis Khan and the Making of the Modern World',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/2b5e950/2147483647/strip/true/crop/195x300+0+0/resize/390x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fe7%2F65%2F2bec539348d1bcf41e73bbcb7c5b%2Fbest-history03.jpg',
                price: 25
            },
            {
                id: 5,
                name: 'Leningrad: The Epic Siege of World War II, 1941-1944',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/541faf0/2147483647/strip/true/crop/196x300+0+0/resize/392x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fc1%2F3a%2Fe4bfffe049dab685bf278de29786%2Fbest-history04.jpg',
                price: 18
            },
            {
                id: 6,
                name: 'Embers of War',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/763f213/2147483647/strip/true/crop/198x300+0+0/resize/396x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F2a%2F22%2F7da4174348f99b0e77c7b3755f89%2Fbest-history05.jpg',
                price: 14
            },
            {
                id: 7,
                name: 'Rites of Spring',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/53a5121/2147483647/strip/true/crop/197x300+0+0/resize/394x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fd8%2F6c%2Fb9daa5f4444ea7313f541777db2d%2Fbest-history06.jpg',
                price: 18
            },
            {
                id: 8,
                name: 'The History of the Ancient World',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/a97bc9b/2147483647/strip/true/crop/198x300+0+0/resize/396x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F52%2F35%2Fe55c9a4a40319171e006198da2cf%2Fbest-history07.jpg',
                price: 14
            },
            {
                id: 9,
                name: 'Broken Lives',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/499f14a/2147483647/strip/true/crop/199x300+0+0/resize/398x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Ff6%2Fa5%2F6b8ceaa740b992b23a571ae3290d%2Fbest-history08.jpg',
                price: 16
            }
        ]
    },
    {
        id: 2,
        title: 'Romance',
        routeName: 'romance',
        items: [
            {
                id: 1,
                name: 'It Ends With Us',
                imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549386174-514wNQ0vMgL.jpg?crop=1.00xw:0.944xh;0,0&resize=768:*',
                price: 220
            },
            {
                id: 2,
                name: 'The Proposal',
                imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581097994-41FddZoWzL.jpg?crop=1xw:0.999xh;center,top&resize=768:*',
                price: 280
            },
            {
                id: 3,
                name: 'The Hating Game',
                imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549388634-5177RJNUAgL.jpg?crop=1xw:0.996xh;center,top&resize=768:*',
                price: 110
            },
            {
                id: 4,
                name: 'Vision In White ',
                imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549389901-512Dk0Md54L.jpg?crop=1.00xw:0.932xh;0,0.00200xh&resize=768:*',
                price: 160
            },
            {
                id: 5,
                name: 'Beautiful Disaster',
                imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549389792-51K1EGCliqL.jpg?crop=0.969xw:0.936xh;0.0155xw,0.0340xh&resize=768:*',
                price: 160
            },
            {
                id: 6,
                name: 'Gone With the Wind',
                imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549386187-51y1omNT91L.jpg?crop=1.00xw:0.972xh;0,0.0100xh&resize=768:*',
                price: 160
            },
            {
                id: 7,
                name: 'A Long Petal of the Sea',
                imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581098256-51Tx-1bcaHL.jpg?crop=1xw:0.987xh;center,top&resize=768:*',
                price: 190
            },
            {
                id: 8,
                name: 'Pride and Prejudice',
                imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549387436-51J1iMDw4lL.jpg?crop=1xw:0.999xh;center,top&resize=768:*',
                price: 200
            }
        ]
    },
    {
        id: 3,
        title: 'Fiction',
        routeName: 'fiction',
        items: [
            {
                id: 1,
                name: 'Fahrenheit 451',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/7911099/2147483647/strip/true/crop/220x330+0+15/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fe2%2F37%2Ffe1d2a109e46319be92e5c92d376%2Ffahrenheit-451.jpg',
                price: 125
            },
            {
                id: 2,
                name: 'The Paying Guests',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/1eea01e/2147483647/strip/true/crop/225x338+0+7/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F02%2F70%2Fe06a1ef3c8ffebfe61e5f4bebcd0%2Fpaying-guests.jpg',
                price: 90
            },
            {
                id: 3,
                name: 'Jane Eyre',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/c606be6/2147483647/strip/true/crop/225x338+0+0/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F46%2F64%2F5ee644d561216f0d58677eeafd81%2Fjane-eyre.jpg',
                price: 90
            },
            {
                id: 4,
                name: 'Watership Down',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/143537e/2147483647/strip/true/crop/220x330+0+15/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F96%2Fba%2F52dcf1193285838f6f13966173e1%2Fwatership-down.jpg',
                price: 165
            },
            {
                id: 5,
                name: 'Lord of the Flies',
                imageUrl: 'https://assets.brightspot.abebooks.a2z.com/dims4/default/b94ffa2/2147483647/strip/true/crop/225x338+0+5/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F74%2Fb2%2F0320768e06159036296714289bdc%2Flord-flies.jpg',
                price: 185
            }
        ]
    },
    {
        id: 4,
        title: 'Biography',
        routeName: 'biography',
        items: [
            {
                id: 1,
                name: 'A Beautiful Mind by Sylvia Nasar',
                imageUrl: 'https://m.media-amazon.com/images/I/511wQDs0J7L.jpg',
                price: 25
            },
            {
                id: 2,
                name: 'Alan Turing',
                imageUrl: 'https://m.media-amazon.com/images/I/51mmO8tlp9L.jpg',
                price: 20
            },
            {
                id: 3,
                name: 'Alexander Hamilton by Ron Chernow',
                imageUrl: 'https://m.media-amazon.com/images/I/514BVljl9wL.jpg',
                price: 80
            },
            {
                id: 4,
                name: 'Barracoon',
                imageUrl: 'https://m.media-amazon.com/images/I/51RD7cKm8pL.jpg',
                price: 80
            },
            {
                id: 5,
                name: 'Churchill',
                imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1312034744l/824938.jpg',
                price: 45
            },
            {
                id: 6,
                name: 'Frida',
                imageUrl: 'https://m.media-amazon.com/images/I/41H1hCKKhvL.jpg',
                price: 135
            },
            {
                id: 7,
                name: 'Into the Wild by Jon Krakauer',
                imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403173986l/1845.jpg',
                price: 20
            }
        ]
    },
    {
        id: 5,
        title: 'Drama',
        routeName: 'drama',
        items: [
            {
                id: 1,
                name: 'Anna Karenina by Leo Tolstoy',
                imageUrl: 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,q_auto,w_720/5e773695ddce58001c54375d.jpg',
                price: 325
            },
            {
                id: 2,
                name: 'Absalom, Absalom! by William Faulkner',
                imageUrl: 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,q_auto,w_720/5e7735e9ddce58001c54375c.jpg',
                price: 20
            },
            {
                id: 3,
                name: 'The Vampire Lestat by Anne Rice',
                imageUrl: 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,q_auto,w_720/5e77352b799114001dfe5919.jpg',
                price: 25
            },
            {
                id: 4,
                name: 'The Story of a Shipwrecked Sailor by Gabriel Garcia Marquez',
                imageUrl: 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,q_auto,w_720/5e7734930a7126001d92d630.jpg',
                price: 25
            },
            {
                id: 5,
                name: 'The Red and the Black by Stendhal',
                imageUrl: 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,q_auto,w_720/5e7733cb799114001dfe5917.jpg',
                price: 40
            },
            {
                id: 6,
                name: 'The Sailor Who Fell From Grace With the Sea by Yukio Mishima',
                imageUrl: 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,q_auto,w_720/5e7732d7f80cb9001e4f18c0.jpg',
                price: 25
            }
        ]
    }
]

export default SHOP_DATA;