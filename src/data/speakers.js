const speakers = [
  {
    "name": "Paul Hudson",
    "company": "Hacking with Swift",
    "imageUrl": "../speakers/paul.jpg",
    "companyUrl": "https://www.hackingwithswift.com/",
    "twitter": "twostraws",
    "linkedin": "",
    "shortBio": "Paul is the author of Hacking with Swift. He quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)",
    "bio": "Paul is the author of Hacking with Swift, Pro Swift, Swift Design Patterns, Server-Side Swift, Hacking with macOS, Hacking with watchOS, Hacking with tvOS, Swift Coding Challenges, and more. Suffice it to say, he quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)",
    "talkTitle": "Global Variable Oriented Programming"
  },
  {
    "name": "Vivian Phung",
    "company": "Instagram",
    "imageUrl": "../speakers/vivian.jpg",
    "companyUrl": "https://www.instagram.com",
    "twitter": "vivianphung",
    "linkedin": "",
    "shortBio": "Vivian is an ios engineer at instagram. In her free time, she likes baking desserts, trying new foods, and organizing events!",
    "bio": "Vivian is an ios engineer at instagram working on feed, interactions, and creation. in her free time, she likes baking desserts, trying new foods, and organizing events!"
  },
  {
    "name": "Marin Todorov",
    "company": "Indie iOS Dev",
    "imageUrl": "../speakers/marin.jpg",
    "companyUrl": "https://underplot.com/",
    "twitter": "icanzilb",
    "linkedin": "",
    "shortBio": "Marin Todorov is a developer, speaker. Besides crafting code, he enjoys blogging, writing books, teaching.",
    "bio": "Marin Todorov is a developer, speaker, and author. He works for high-profile clients most often doing Swift development. Besides crafting code, he enjoys blogging, writing books, teaching, and speaking. He sometimes open sources his code."
  },
  {
    "name": "Tunde Adegoroye",
    "company": "iOS Educator",
    "imageUrl": "../speakers/tunde.jpg",
    "companyUrl": "https://youtube.com/c/tundsdev",
    "twitter": "tundsdev",
    "linkedin": "",
    "shortBio": "Tunde is an iOS content creator on YouTube, he loves to explore and discuss solutions to complex problems.",
    "bio": "Tunde is an iOS content creator on YouTube, he loves to explore and discuss solutions to complex problems, writing scalable code & discussing his thought process to certain design decisions."
  },
  {
    "name": "Federico Zanetello",
    "company": "Five Stars",
    "imageUrl": "../speakers/federico.jpg",
    "companyUrl": "https://www.fivestars.blog/",
    "twitter": "zntfdr",
    "linkedin": "",
    "shortBio": "Federico Zanetello has strong passion for Swift, minimalism, and design. He can be often found writing at fivestars.blog",
    "bio": "Federico Zanetello is an iOS Engineer with strong passion for Swift, minimalism, and design. When he’s not busy automating things, he can be found writing at fivestars.blog and/or playing with the latest shiny toys."
  },
  {
    "name": "Daniel H Steinberg",
    "company": "Dim Sum Thinking",
    "imageUrl": "../speakers/daniel.jpg",
    "companyUrl": "https://dimsumthinking.com",
    "twitter": "dimsumthinking",
    "linkedin": "",
    "shortBio": "Daniel is the author of more than a dozen books, including the best selling books A Functional Programming Kickstart, A SwiftUI Kickstart, A Swift Kickstart and Dear Elena.",
    "bio": "Daniel is the author of more than a dozen books including the best selling books A Functional Programming Kickstart, A SwiftUI Kickstart, A Swift Kickstart and Dear Elena. He presents iOS, Functional Programming, SwiftUI, and Swift training and consults through his company Dim Sum Thinking. He has written apps for the iPhone and the iPad since the SDKs first appeared and has written programs for the Mac all the way back to System 7. When he's not coding or talking about coding for the Mac, the iPhone, and the iPad he's probably cooking, baking bread, or hanging out with friends."
  },
  {
    "name": "Frank Courville",
    "company": "School of Swift",
    "imageUrl": "../speakers/frank.jpeg",
    "companyUrl": "https://www.schoolofswift.club",
    "twitter": "Frankacy",
    "linkedin": "",
    "shortBio": "Frank is the chief instructor and content creator at School of Swift, helping teams skill up their iOS development.",
    "bio": "Frank is the chief instructor and content creator at School of Swift, helping teams skill up their iOS development."
  },
  {
    "name": "Bas Broek",
    "company": "Swift Weekly Brief",
    "imageUrl": "../speakers/bas.jpeg",
    "companyUrl": "https://swiftweeklybrief.com",
    "twitter": "basthomas",
    "linkedin": "",
    "shortBio": "Bas is an iOS and macOS developer with a passion for testability, accessibility and user-centric apps. He cares about communication and collaboration. He likes coffee and watches (a lot).",
    "bio": "Bas is an iOS and macOS developer with a passion for testability, accessibility and user-centric apps. He cares about communication and collaboration. He likes coffee and watches (a lot)."
  }, 
  {
    "name": "Ting Becker",
    "company": "Rocket Mortgage",
    "imageUrl": "../speakers/ting.jpg",
    "companyUrl": "https://www.rocketmortgage.com",
    "twitter": "Teekachu1",
    "linkedin": "",
    "shortBio": "Tee is a self taught iOS developer who started in accounting but landed in tech. In her freetime, you can find her boxing, practicing muay thai, working on new jumprope tricks or just working out.",
    "bio": "Tee is a self taught iOS developer who started in accounting but landed in tech. In her freetime, you can find her boxing, practicing muay thai, working on new jumprope tricks or just working out."
  }, 
  {
    "name": "Vincent Pradeilles",
    "company": "Worldline",
    "imageUrl": "../speakers/vincent.jpg",
    "companyUrl": "https://worldline.com/",
    "twitter": "v_pradeilles",
    "linkedin": "",
    "shortBio": "Vincent works at Worldline and contributes to building great apps for major French banks. He also enjoys sharing about Swift and iOS on his YouTube channel.",
    "bio": "Vincent started working on iOS apps back in 2011. For the last years, he's been working at Worldline, where he contributes to building great apps for major French banks. He loves Swift and enjoys sharing about it on the Internet. Most recently, he started a YouTube channel to share his knowledge of Swift and iOS. He's also the one behind the Twitter account @ios_memes."
  },   
  {
    "name": "Maciej Piotrowski",
    "company": "Allegro",
    "imageUrl": "../speakers/maciej.jpg",
    "companyUrl": "https://allegro.tech",
    "twitter": "macpiotrowski89",
    "linkedin": "",
    "shortBio": "Maciej is a passionate iOS developer who pays much attention to details and code quality. He likes improving things, always looking for better solutions because he's amazed that in the programming world.",
    "bio": "Maciej is a passionate iOS developer who pays much attention to details and code quality. He likes improving things, always looking for better solutions because he's amazed that in the programming world, issues can be solved in 100s of ways. In 2016 he kicked off with his friends the swifting.io blog, where he has been posting his thoughts about various topics."
  },
  {
    "name": "Moataz Nabil",
    "company": "Bitrise",
    "imageUrl": "../speakers/moataz.jpeg",
    "companyUrl": "https://www.bitrise.io",
    "twitter": "Moatazeldebsy",
    "linkedin": "",
    "shortBio": "Moataz is a developer advocate at Bitrise and has more than 12 years of experience across development and testing roles across industries including agriculture, telecom, healthcare, fashion, and more.",
    "bio": "Moataz is a developer advocate at Bitrise and has more than 12 years of experience across development and testing roles across industries including agriculture, telecom, healthcare, fashion, and more."
  },     
]

export default speakers
