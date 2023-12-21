export interface File {
  fileId: number;
  name: string;
  lender: string;
  fileOwner: string;
  loanAmount: number;
  phase: string;
  probabilityToFund: number;
  date: string;
  progress: number;
  durationOfProcess?: string;
  people?: People[];
  businesses?: Business[];
  lenders?: Lender[];
  tags?: string[];
};

export interface People {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
}

export interface Business {
  name: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
}

export interface Lender {
  name: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
}

const tableDataComplex: File[] = [
  {
    fileId: 3344565,
    name: 'Acme Brewing',
    lender: 'US Community Bank',
    progress: 75.5,
    date: '12 Jan 2021',
    fileOwner: 'Eric',
    loanAmount: 150000,
    phase: 'Lending Summary',
    probabilityToFund: 95,
    durationOfProcess: "4hrs",
    tags: ["SBA", "Grand Rapids"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ],
    businesses: [ {
      name: "Acme Brewing",
    },{
      name: "Acme Holdings",
    }],
    lenders: [{
      name: "Sample Lender"
    }]
  },
  {
    fileId: 3344566,
    name: 'John\'s Deere',
    lender: 'Credit Union Group',
    progress: 25.5,
    date: '21 Feb 2021',
    fileOwner: 'Maisie',
    loanAmount: 500000,
    phase: 'Package Complete',
    probabilityToFund: 90,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ],
    lenders: [{
      name: "Sample Lender"
    }]
  },
  {
    fileId: 3344567,
    name: 'Steve Smith',
    lender: 'US Community Bank',
    progress: 90,
    date: '13 Mar 2021',
    fileOwner: 'Lauren',
    loanAmount: 250000,
    phase: 'Lending Prep',
    probabilityToFund: 5,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344568,
    name: 'Edna\'s Eats',
    lender: 'Credit Union Group',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Eric',
    loanAmount: 750000,
    phase: 'Ready for Closure',
    probabilityToFund: 100,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ],
    businesses: [ {
      name: "Acme Brewing",
    },{
      name: "Acme Holdings",
    }]
  },
  {
    fileId: 3344569,
    name: 'Edna\'s Eats',
    lender: 'US Community Bank',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Eric McGill',
    loanAmount: 230000,
    phase: 'Lending prep',
    probabilityToFund: 30,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344570,
    name: 'Edna\'s Eats',
    lender: 'Credit Union Group',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Sam',
    loanAmount: 50000,
    phase: 'Lending prep',
    probabilityToFund: 10,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344571,
    name: 'Edna\'s Eats',
    lender: 'Credit Union Group',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Sam',
    loanAmount: 50000,
    phase: 'Lending prep',
    probabilityToFund: 10,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ],
    businesses: [ {
      name: "Acme Brewing",
    },{
      name: "Acme Holdings",
    }]
  }, {
    fileId: 3344572,
    name: 'Acme Brewing',
    lender: 'US Community Bank',
    progress: 75.5,
    date: '12 Jan 2021',
    fileOwner: 'Eric',
    loanAmount: 150000,
    phase: 'Lending Summary',
    probabilityToFund: 95,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344573,
    name: 'John\'s Deere',
    lender: 'Credit Union Group',
    progress: 25.5,
    date: '21 Feb 2021',
    fileOwner: 'Maisie',
    loanAmount: 500000,
    phase: 'Package Complete',
    probabilityToFund: 90,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ],
    businesses: [ {
      name: "Acme Brewing",
    },{
      name: "Acme Holdings",
    }]
  },
  {
    fileId: 3344574,
    name: 'Steve Smith',
    lender: 'US Community Bank',
    progress: 90,
    date: '13 Mar 2021',
    fileOwner: 'Lauren',
    loanAmount: 250000,
    phase: 'Lending Prep',
    probabilityToFund: 5,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344575,
    name: 'Edna\'s Eats',
    lender: 'Credit Union Group',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Eric',
    loanAmount: 750000,
    phase: 'Ready for Closure',
    probabilityToFund: 100,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344576,
    name: 'Edna\'s Eats',
    lender: 'US Community Bank',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Eric McGill',
    loanAmount: 230000,
    phase: 'Lending prep',
    probabilityToFund: 30,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ],
    businesses: [ {
      name: "Acme Brewing",
    },{
      name: "Acme Holdings",
    }]
  },
  {
    fileId: 3344577,
    name: 'Edna\'s Eats',
    lender: 'Credit Union Group',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Sam',
    loanAmount: 50000,
    phase: 'Lending prep',
    probabilityToFund: 10,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344578,
    name: 'Edna\'s Eats',
    lender: 'Credit Union Group',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Sam',
    loanAmount: 50000,
    phase: 'Lending prep',
    probabilityToFund: 10,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  }, {
    fileId: 3344579,
    name: 'Acme Brewing',
    lender: 'US Community Bank',
    progress: 75.5,
    date: '12 Jan 2021',
    fileOwner: 'Eric',
    loanAmount: 150000,
    phase: 'Lending Summary',
    probabilityToFund: 95,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344580,
    name: 'John\'s Deere',
    lender: 'Credit Union Group',
    progress: 25.5,
    date: '21 Feb 2021',
    fileOwner: 'Maisie',
    loanAmount: 500000,
    phase: 'Package Complete',
    probabilityToFund: 90,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344581,
    name: 'Steve Smith',
    lender: 'US Community Bank',
    progress: 90,
    date: '13 Mar 2021',
    fileOwner: 'Lauren',
    loanAmount: 250000,
    phase: 'Lending Prep',
    probabilityToFund: 5,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344582,
    name: 'Edna\'s Eats',
    lender: 'Credit Union Group',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Eric',
    loanAmount: 750000,
    phase: 'Ready for Closure',
    probabilityToFund: 100,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344583,
    name: 'Edna\'s Eats',
    lender: 'US Community Bank',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Eric McGill',
    loanAmount: 230000,
    phase: 'Lending prep',
    probabilityToFund: 30,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344584,
    name: 'Edna\'s Eats',
    lender: 'Credit Union Group',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Sam',
    loanAmount: 50000,
    phase: 'Lending prep',
    probabilityToFund: 10,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },
  {
    fileId: 3344585,
    name: 'Edna\'s Eats',
    lender: 'Credit Union Group',
    progress: 50.5,
    date: '24 Oct 2022',
    fileOwner: 'Sam',
    loanAmount: 50000,
    phase: 'Lending prep',
    probabilityToFund: 10,
    durationOfProcess: "4hrs",
    tags: ["CCC", "Raleigh"],
    people: [{
      firstName: "Nichole",
      lastName: "Rich",
    },
    {
      firstName: "Angie",
      lastName: "Rich",
    },
    {
      firstName: "Bob",
      lastName: "Rich",
    },
    {
      firstName: "Sam",
      lastName: "Rich",
    },
    ]
  },

];
export default tableDataComplex;
