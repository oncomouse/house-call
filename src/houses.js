const houses = [
  {
    house: '2708 Camelot',
    clue: 'Our House',
  },
  {
    house: '2809 Rustling Oaks',
    clue: 'Turkey House',
  },
  {
    house: '2806 Briar Creek Court',
    clue: 'New Mailbox, New Baby',
  },
  {
    house: '1916 Debbie',
    clue: 'Bluebird on Mailbox',
  },
  {
    house: '1918 Debbie',
    clue: 'Redbird on Mailbox',
  },
  {
    house: '2704 Camelot',
    clue: 'Butterfly Mailbox',
  },
  {
    house: '2807 Camelot',
    clue: 'Toyota',
  },
  {
    house: '2726 Camelot',
    clue: 'Chandelier',
  },
  {
    house: '2720 Camelot',
    clue: 'Traffic Cones',
  },
  {
    house: '2801 Camelot',
    clue: 'No Numbers',
  },
  {
    house: '2812 Camelot',
    clue: 'Secure Drop',
  },
  {
    house: '2918 Camelot',
    clue: 'Sunflower House',
  },
  {
    house: '2910 Camelot',
    clue: 'Christmas Goat',
  },
  {
    house: '2910 Camelot',
    clue: 'Poor Kerning',
  },
  {
    house: '2913 Camelot',
    clue: 'Reveille',
  },
  {
    house: '2609 Rustling Oaks',
    clue: 'Dragon',
  },
  {
    house: '2613 Rustling Oaks',
    clue: 'Yellow Bird',
  },
  {
    house: '2703 Rustling Oaks',
    clue: 'Roosters',
  },
  {
    house: '2711 Rustling Oaks',
    clue: 'Sewing Machine',
  },
  {
    house: '2803 Rustling Oaks',
    clue: "Laura Mandel's House",
  },
  {
    house: '2901 Rustling Oaks',
    clue: "Ginger's House",
  },
  {
    house: '2914 Burning Tree',
    clue: 'Only 4 on the Mailbox',
  },
  {
    house: '2910 Burning Tree',
    clue: 'Texas Flag',
  },
  {
    house: '2902 Burning Tree',
    clue: 'Pretty Mailbox',
  },
  {
    house: '2901 Burning Tree',
    clue: 'Owl on Mailbox',
  },
  {
    house: '2913 Burning Tree',
    clue: 'Green Carpet',
  },
  {
    house: '2904 Burning Tree',
    clue: 'Star Wars House',
  },
  {
    house: '2923 Braeburn',
    clue: 'Crazy Corner House',
  },
  {
    house: '1918 Debbie',
    clue: 'Red Bird',
  },
  {
    house: '1916 Debbie',
    clue: 'Blue Bird',
  },
  {
    house: '1903 Debbie',
    clue: 'Deer Mailbox',
  },
  {
    house: '2100 Ella',
    clue: 'Green Bird',
  },
  {
    house: '2909 Broadmoor',
    clue: 'Good Kerning',
  },
  {
    house: '2915 Broadmoor',
    clue: 'Bald Eagle Mailbox',
  },
  {
    house: '3103 Broadmoor',
    clue: 'Cat Apartment',
  },
  {
    house: '3206 Peterson',
    clue: 'House House Number House',
  },
  {
    house: '2915 Braeburn',
    clue: 'Red Rock Yard',
  },
  {
    house: '2913 Broadmoor',
    clue: 'Star Student of Character',
  },
  {
    house: '3010 Broadmoor',
    clue: 'Big Numbers',
  },
  {
    house: '2808 Camelot',
    clue: 'Big Numbers',
  },
  {
    house: '2821 Cherry Creek',
    clue: 'House Mailbox House',
  },
  {
    house: '2907 Chaparral',
    clue: 'Zig-zag House',
  },
  {
    house: '3403 Broadmoor',
    clue: 'Last House on Broadmoor',
  },
  {
    house: '702 Broadmoor',
    clue: 'First House on Broadmoor',
  },
  {
    house: '2506 Rustling Oaks',
    clue: 'Big Mailbox',
  },
  {
    house: '2603 Hollow Oaks',
    clue: 'Texas Mailbox',
  },
  {
    house: '3105 Evan',
    clue: 'Turtle Mailbox',
  },
  {
    house: '2525 Villa Maria',
    clue: 'Bright Beginning',
  },
  {
    house: '2108 Red River',
    clue: 'Crescent Moon',
  },
  {
    house: '1101 Braeswood',
    clue: 'Jimmy',
  },
  {
    house: '2702 Villa Maria',
    clue: "Holman's Quality Plumbing",
  },
  {
    house: '2501 Whispering Oaks',
    clue: 'Horseshoe',
  },
  {
    house: '2807 Rustling Oaks',
    clue: 'Indoor Pool',
  },
  {
    house: '2903 Rustling Oaks',
    clue: 'Pretty Blue Door',
  },
  {
    house: '2903 Camelot',
    clue: 'Palmtree',
  },
  {
    house: '2508 Rustling Oaks',
    clue: 'Green Background Numbers',
  },
  {
    house: '6029 N. 16th Pl',
    clue: 'Phoenix',
  },
  {
    house: '1343 Harris St.',
    clue: 'Penn State',
  },
  {
    house: '1611 Doncaster',
    clue: 'Grandma',
  },
  {
    house: '2100 Nicole',
    clue: 'Chimes',
  },
  {
    house: '2718 Camelot',
    clue: 'Mrs. Lewis',
  },
  {
    house: '2705 Rustling Oaks',
    clue: 'Red Shutters',
  },
  {
    house: '1922 Debbie',
    clue: 'Last House on Debbie',
  },
  {
    house: 'Three Birds',
    clue: '2626 Lochnivar',
  },
  {
    house: 'Orange Turtle Mailbox',
    clue: '3107 Evan',
  },
  {
    house: 'Cut Off Number Mailbox',
    clue: '2509 Broadmoor',
  },
  {
    house: 'Cut Off Zero',
    clue: '2502 River Forest',
  },
  {
    house: 'Pineapple',
    clue: '2907 Rustling Oaks',
  },
  {
    house: 'White Bird',
    clue: '3218 Peterson',
  },
  {
    house: 'Upside "8"',
    clue: '2908 Briar Creek Court',
  },
];

global.houses = houses;

export default houses;
