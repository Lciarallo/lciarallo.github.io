const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Linxer',
      key: '*',
      url: 'https://linxer.org/',
      search: '/search.php?q={}'
    },


    {
      category: 'General',
      name: 'WhatsApp',
      key: 'w',
      url: 'https://web.whatsapp.com',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'whatsapp',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Proton Mail',
      key: 'p',
      url: 'https://mail.proton.me/u/0/inbox',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #6D4AFF, #9779FF)',
      icon: 'proton',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Drive',
      key: 'dr',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Translate',
      key: 'tr',
      url: 'https://translate.google.com/',
      search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
      color: '#1a73e8',
      icon: 'translate',
      quickLaunch: false,
    },


    {
      category: 'Programming',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Diolinux Plus',
      key: 'dp',
      url: 'https://plus.diolinux.com.br/',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #0F65AC, #BD0AA1)',
      icon: 'dplus',
      quickLaunch: false,
    },
    {
      category: 'Programming',
      name: 'MDN',
      key: 'md',
      url: 'https://developer.mozilla.org/en-US',
      search: '/search?q={}',
      color: '#212121',
      icon: 'mdn',
      quickLaunch: false,
    },
    {
      category: 'Programming',
      name: 'DevDocs',
      key: 'dd',
      url: 'https://devdocs.io',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'devdocs',
      quickLaunch: false,
    },


    {
      category: 'Streaming',
      name: 'YouTube',
      key: 'y',
      url: 'https://redirect.invidious.io/',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Streaming',
      name: 'Deezer',
      key: 'd',
      url: 'https://www.deezer.com/us/',
      search: '/search/{}',
      color: 'linear-gradient(135deg, #74498E, #CA2E61)',
      icon: 'deezer',
      quickLaunch: false,
    },
    {
      category: 'Streaming',
      name: 'Lastfm',
      key: 'l',
      url: 'https://www.last.fm/',
      search: '/directory/game/{}',
      color: '#BA0000',
      icon: 'lastfm',
      quickLaunch: false,
    },
    {
      category: 'Streaming',
      name: 'DirectvGo',
      key: 'dg',
      url: 'https://www.directvgo.com/home/main',
      color: 'linear-gradient(135deg, #00ABF3, #F5821F)',
      icon: 'directv',
      quickLaunch: false,
    },

    {
      category: 'Social',
      name: 'Twitter',
      key: 't',
      url: 'https://www.twitter.com',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'twitter',
      quickLaunch: true,
    },
    {
      category: 'Social',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Social',
      name: 'Pinterest',
      key: 'pt',
      url: 'https://www.pinterest.com/',
      color: '#E60023',
      icon: 'pinterest',
      quickLaunch: false,
    },
    {
      category: 'Social',
      name: '1500chan',
      key: '15',
      url: 'https://1500chan.org/',
      color: '#69823A',
      icon: '1500chan',
      quickLaunch: false,
    },
    {
      category: 'College',
      name: 'SIGAA',
      key: 's',
      url: 'https://sig.ifsc.edu.br/sigaa/verTelaLogin.do',
      color: 'linear-gradient(135deg, #008000, #ff0000)',
      icon: 'IF',
      quickLaunch: false,
    },
    {
      category: 'College',
      name: 'Moodle',
      key: 'm',
      url: 'https://moodle.ifsc.edu.br/',
      color: 'linear-gradient(135deg, #008000, #ff0000)',
      icon: 'moodle',
      quickLaunch: false,
    },

    



  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/voidlinux'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
