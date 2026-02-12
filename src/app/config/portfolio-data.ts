export const portfolioData = {
  // Informations personnelles
  name: "Mattéo CHADUC",
  title: "Étudiant BTS SIO",
  tagline: "spécialité Solutions d’Infrastructure, Systèmes et Réseaux (SISR)",
  
  // Section Hero
  hero: {
    greeting: "Bienvenue sur mon portfolio",
    description: "Étudiant en BTS SIO, passionné par le réseau, la cybersécurité et les nouvelles technologies. Découvrez mon parcours, mes compétences et mes réalisations.",
    ctaText: "Découvrir mon travail",
    ctaLink: "#veille",
    cvLink: "/assets/cv.pdf",
    cvText: "Télécharger mon CV"
  },

  // Section À propos (devient BTS SIO)
  btsSio: {
    title: "BTS SIO",
    subtitle: "Services Informatiques aux Organisations",
    description: `Le BTS SIO (Services Informatiques aux Organisations) est un diplôme de niveau Bac+2 qui forme des techniciens capables de gérer et d'administrer le réseau d'une organisation et d'assurer la sécurité des données.
    
    Le BTS SIO propose deux spécialités distinctes :`,
    
    options: [
      {
        name: "SISR",
        fullName: "Solutions d'Infrastructure, Systèmes et Réseaux",
        description: "Administration des systèmes et des réseaux, gestion de parc informatique, support et mise en production de services.",
        skills: ["Administration système", "Réseaux", "Cybersécurité", "Virtualisation"]
      },
      {
        name: "SLAM",
        fullName: "Solutions Logicielles et Applications Métier",
        description: "Développement d'applications, conception et maintenance de programmes, solutions logicielles pour répondre aux besoins des utilisateurs.",
        skills: ["Développement web", "Bases de données", "Programmation orientée objet", "Gestion de projet"]
      }
    ],
    
    myOption: "SISR", // Votre option choisie
    
    competences: [
      "Gérer le patrimoine informatique",
      "Répondre aux incidents et aux demandes d'assistance",
      "Développer la présence en ligne de l'organisation",
      "Travailler en mode projet",
      "Mettre à disposition des utilisateurs un service informatique",
      "Organiser son développement professionnel"
    ]
  },

  // Section Veille Technologique
  veilleTechnologique: {
    title: "Veille Technologique",
    description: "La veille technologique consiste à s'informer de façon systématique sur les techniques les plus récentes et surtout sur leur mise à disposition commerciale.",
    
    sujet: {
      titre: "Les incidents de cybersécurité et les nouvelles failles",
      description: "Dans le cadre de ma veille technologique, je m’intéresse particulièrement à la cybersécurité et à l’intelligence artificielle. J’analyse l’évolution des menaces, l’utilisation de l’IA pour la détection d’intrusions, ainsi que les nouvelles techniques d’attaques automatisées. Cette veille me permet de rester informé des innovations et des enjeux liés à la protection des systèmes et des données.",
      pourquoi: "J’ai choisi ce sujet de veille car la cybersécurité et l’intelligence artificielle sont au cœur des enjeux numériques actuels et jouent un rôle essentiel dans la protection des données et des systèmes face à des menaces de plus en plus sophistiquées."
    },
    
    sources: [
      {
        nom: "TechCrunch",
        type: "Site web",
        url: "https://techcrunch.com",
        description: "Actualités technologiques et startups"
      },
      {
        nom: "Dev.to",
        type: "Communauté",
        url: "https://dev.to",
        description: "Articles de développeurs pour développeurs"
      },
      {
        nom: "GitHub Trending",
        type: "Plateforme",
        url: "https://github.com/trending",
        description: "Projets open-source populaires"
      },
      {
        nom: "Hacker News",
        type: "Forum",
        url: "https://news.ycombinator.com",
        description: "Actualités tech et discussions"
      }
    ],
    
    outils: ["Feedly", "Google Alerts", "Twitter/X", "LinkedIn", "Reddit", "YouTube"],
    
    articles: [
      {
        titre: "GPT-4 et l'avenir du développement",
        date: "2024-01-15",
        source: "OpenAI Blog",
        resume: "Analyse des capacités de GPT-4 dans l'assistance au code et la génération d'applications.",
        lien: "#"
      },
      {
        titre: "TensorFlow 3.0 : Nouvelles fonctionnalités",
        date: "2024-02-01",
        source: "Google Developers",
        resume: "Présentation des améliorations majeures de TensorFlow pour le machine learning.",
        lien: "#"
      },
      {
        titre: "L'éthique dans l'IA",
        date: "2024-02-10",
        source: "MIT Technology Review",
        resume: "Réflexion sur les enjeux éthiques liés au déploiement de l'IA.",
        lien: "#"
      }
    ]
  },

  // Section Alternance
  alternance: {
    title: "Mon Alternance",
    entreprise: {
      nom: "Ecole Jeannine Manuel",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHj8RUZLhyizPRKkKDlBv6fpZazvanm7zgg&s",
      secteur: "Services numériques / Gestion réseau",
      site: "https://ecolejeanninemanuel.org",
      localisation: "Paris, France"
    },
    
    periode: {
      debut: "Janvier 2026",
      fin: "Aout 2027",
      rythme: "2 jours en formation/ 3 jours en entreprise"
    },
    
    poste: "Technicien informatique en alternance",
    
    missions: [
      {
        titre: "Gestion du réseau",
        description: "Assurer le bon fonctionnement, la sécurité et l’accès aux ressources informatiques pour les élèves et le personnel, à travers la configuration des équipements, la gestion des comptes et la protection des données.",
        technologies: ["Cisco", "Brassage", "Ticketing", "Jamf"]
      },
      {
        titre: "Maintenance et évolution",
        description: "Correction de bugs, optimisation des performances et ajout de nouvelles fonctionnalités",
        technologies: ["Git", "Freshdesk", "Docker"]
      },
      {
        titre: "Documentation technique",
        description: "Rédaction de documentations techniques et guides utilisateurs",
        technologies: ["Google Docs", "Canva", "Figma"]
      },
      {
        titre: "Travail en équipe",
        description: "Collaborer avec les professionnels de l’entreprise sur des projets informatiques concrets, en participant aux tâches techniques",
        technologies: ["Zoom Workplace", "Google drive", "Github"]
      }
    ],
    
    competencesAcquises: [
      "Déploiement d'un réseau",
      "Gestion d'incident",
      "Travail en équipe",
      "Gestion de versions (Git)",
      "Tests et intégration",
      "Déploiement continu (CI/CD)"
    ],
    
    projetsRealises: [
      {
        nom: "Configuration et administration d'un serveur DHCP",
        description: "Mise en place et configuration d'un serveur DHCP pour l'attribution automatique d'adresses IP dans un réseau local.",
        role: "",
        duree: "1 mois"
      },
      {
        nom: "Containers et virtualisation",
        description: "Mise en place d'environnements virtualisés et conteneurisés pour le déploiement d'applications.",
        role: "",
        duree: "1 mois"
      }
    ]
  },

  // Section Certifications
  certifications: {
    title: "Certifications",
    description: "Mes certifications et formations complémentaires",
    
    liste: [
      {
        nom: "Certification Opquast",
        organisme: "Opquast",
        niveau: "Expert - 875/1000",
        date: "Juin 2024",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
        description: "Maîtrise de la qualité web : accessibilité, SEO, performance, sécurité",
        competences: ["Qualité web", "Accessibilité", "SEO", "UX"]
      },
      {
        nom: "JavaScript Algorithms and Data Structures",
        organisme: "freeCodeCamp",
        niveau: "Certifié",
        date: "Mars 2024",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
        description: "Algorithmes, structures de données, programmation fonctionnelle en JavaScript",
        competences: ["JavaScript", "Algorithmes", "ES6+"]
      },
      {
        nom: "Responsive Web Design",
        organisme: "freeCodeCamp",
        niveau: "Certifié",
        date: "Janvier 2024",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop",
        description: "HTML5, CSS3, Flexbox, Grid, design responsive et accessible",
        competences: ["HTML5", "CSS3", "Responsive Design"]
      },
      {
        nom: "Git et GitHub",
        organisme: "OpenClassrooms",
        niveau: "Certifié",
        date: "Décembre 2023",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
        description: "Gestion de versions, collaboration, workflows Git avancés",
        competences: ["Git", "GitHub", "Collaboration"]
      },
      {
        nom: "TOEIC Anglais",
        organisme: "ETS Global",
        niveau: "Score: 850/990",
        date: "Octobre 2023",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop",
        description: "Test d'anglais professionnel",
        competences: ["Anglais professionnel", "Communication"]
      }
    ]
  },

  // Section Épreuves
  epreuves: {
    title: "Épreuves du BTS SIO",
    description: "Présentation des différentes épreuves et de mes réalisations",
    
    epreuvesProfessionnelles: [
      {
        code: "E4",
        nom: "Support et mise à disposition de services informatiques",
        coef: 4,
        description: "Cette épreuve évalue la capacité à gérer le patrimoine informatique, à répondre aux demandes d'assistance et à développer la présence en ligne.",
        modalites: "Pratique en CCF (Contrôle en Cours de Formation)",
        competences: [
          "Gérer le patrimoine informatique",
          "Répondre aux incidents et demandes d'assistance",
          "Développer la présence en ligne"
        ],
        situations: [
          {
            titre: "Gestion du parc informatique",
            description: "Mise en place d'une solution de gestion d'inventaire avec GLPI",
            contexte: "Entreprise de plus de 50 personnes nécessitant un suivi précis du matériel"
          },
          {
            titre: "Support utilisateur",
            description: "Création d'une base de connaissance et système de ticketing",
            contexte: "Amélioration de la qualité du support technique"
          }
        ]
      },
      {
        code: "E5",
        nom: "Conception et développement d'applications",
        coef: 4,
        description: "Épreuve centrée sur la conception, le développement, la maintenance et l'évolution d'applications.",
        modalites: "Oral de 40 minutes avec présentation de portfolio de compétences",
        competences: [
          "Concevoir et développer une solution applicative",
          "Assurer la maintenance corrective et évolutive",
          "Gérer les données"
        ],
        projets: [
          {
            nom: "Application de gestion de stock",
            description: "Développement d'une application web pour gérer les stocks d'un magasin",
            technologies: ["React", "Node.js", "PostgreSQL", "Express"],
            duree: "6 semaines",
            contexte: "Projet réalisé en alternance"
          },
          {
            nom: "API REST pour mobile",
            description: "Création d'une API pour une application mobile de réservation",
            technologies: ["Node.js", "MongoDB", "JWT", "Swagger"],
            duree: "4 semaines",
            contexte: "Projet personnel"
          }
        ]
      }
    ],
    
    epreuvesGenerales: [
      {
        code: "E1",
        nom: "Culture générale et expression",
        coef: 2,
        description: "Synthèse de documents et écriture personnelle"
      },
      {
        code: "E2",
        nom: "Expression et communication en langue anglaise",
        coef: 2,
        description: "Compréhension et expression écrite et orale en anglais professionnel"
      },
      {
        code: "E3",
        nom: "Mathématiques pour l'informatique",
        coef: 3,
        description: "Algorithmique appliquée, calculs et statistiques"
      }
    ],
    
    tableauSyntheseCompetences: [
      { competence: "Support des services informatiques", niveau: "Maîtrisé" },
      { competence: "Développement d'applications", niveau: "Maîtrisé" },
      { competence: "Cybersécurité", niveau: "Intermédiaire" },
      { competence: "Gestion de projet", niveau: "Maîtrisé" },
      { competence: "Bases de données", niveau: "Avancé" }
    ]
  },

  // Projets (ancienne section)
  projects: [
    {
      title: "Portfolio BTS SIO",
      description: "Mon portfolio personnel développé avec React et Tailwind CSS, style rétro néon années 80.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/",
      demo: "#"
    },
    {
      title: "Application de gestion RH",
      description: "Système de gestion des ressources humaines avec suivi des congés et absences.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Node.js", "MySQL"],
      link: "https://github.com/",
      demo: "#"
    },
    {
      title: "Bot Discord",
      description: "Bot de modération et animations pour serveur Discord avec commandes personnalisées.",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&h=600&fit=crop",
      tags: ["Python", "Discord.py", "SQLite"],
      link: "https://github.com/",
      demo: "#"
    },
    {
      title: "Site e-commerce",
      description: "Boutique en ligne responsive avec panier, paiement et gestion des commandes.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Stripe", "Firebase"],
      link: "https://github.com/",
      demo: "#"
    }
  ],

  // Contact et réseaux sociaux
  contact: {
    title: "Contact",
    description: "N'hésitez pas à me contacter pour toute question ou opportunité professionnelle.",
    email: "votre.email@exemple.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
    
    social: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/"
    }
  },

  // Footer
  footer: {
    text: "Développé avec",
    year: new Date().getFullYear()
  }
};
