const projects = [
  {
    id: 1,
    title: 'Enhanced CNN Image Classification',
    description:
      'Implemented and extended the "Enhanced Convolutional Neural Networks for Image Classification" research paper to support higher-resolution images. Adapted the architecture to handle larger input sizes, achieving improved classification accuracy beyond the original paper\'s scope.',
    tags: ['Python', 'PyTorch', 'CNNs', 'Computer Vision', 'Research'],
    status: 'complete',
    links: {
      github: 'https://github.com/NoahPetillo/cats-vs-dogs-classifier',
      demo: 'https://noahpetillo-cats-vs-dogs-classifier-app-enhanced-smbph7.streamlit.app/',
    },
  },
  {
    id: 2,
    title: 'Pluribus Poker Bot',
    description:
      'Team research project extending Pluribus from heads-up to multi-player poker. My role covers researching Libratus\'s safe subgame search algorithm, implementing CFR, DCFR, and MCFR variants, and building data visualizations to compare model convergence behavior across algorithms.',
    tags: ['Python', 'Game Theory', 'CFR', 'Multi-agent', 'Data Visualization'],
    status: 'in-progress',
    links: {
      github: 'https://github.com/NoahPetillo',
    },
  },
  {
    id: 3,
    title: 'Restaurant Tip Calculator',
    description:
      'Production tool built for a real restaurant to automate nightly tip calculations. Generates visualizations of money flow across sections, surfaces top-earning servers, and saves the manager significant manual work each close.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data Visualization', 'Streamlit'],
    status: 'complete',
    links: {
      github: 'https://github.com/NoahPetillo/square-money-appV2',
      demo: 'https://square-money-appv2-gs9xgeadcdqwvrcjxzujwb.streamlit.app/',
    },
  },
]

export default projects
