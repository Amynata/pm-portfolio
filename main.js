(function () {
  'use strict';

  const translations = {
    FR: {
      name: 'Aminata Lissa Dia',
      role: 'Product Manager/Builder',
      vision: 'Bâtir des solutions',
      drivenBy: 'intelligentes pour ',
      impact: 'simplifier le quotidien.',
      desc1: 'Ingénieure de formation',
      // Mention légère de l’ancienneté tech (8+ ans) dans la continuité du titre
      desc2:
        ", forte de plus de huit ans d'expérience dans la tech, j'ai réalisé une partie de mon rêve : transformer les technologies de pointe en outils du quotidien.",
      desc3: "Mon parcours a commencé dans la ",
      desc4: 'robotique et les systèmes complexes',
      desc5: ", mais c'est le besoin de rester ",
      desc6: 'connectée à l\'humain',
      desc7: " qui m'a menée vers le ",
      desc8: 'Product Management.',
      desc9: " Aujourd'hui, je résous des problèmes concrets en faisant le ",
      desc10: 'pont entre la puissance technique et l\'usage utilisateur.',
      desc11: "Ma particularité ? Une appétence tech naturelle qui me pousse à bâtir des solutions (",
      desc12: 'IA, automatisation, outils internes',
      desc13: ") pour simplifier la vie de ceux qui les construisent et de ceux qui les utilisent.",
      clickToDiscover:
        'Les pastilles du parcours en bas ouvrent chaque expérience.',
      heroCtaProjects: 'Mes projets',
      heroCtaCv: 'Mon CV',
      hubCertifsShort: 'Certifs',
      hubBackProfile: 'Retour au profil',
      hubBackShort: 'Retour',
      hubToolsHeading: 'Maîtrise technique',
      hubBtnToolsSub: 'Stack & méthodes',
      hubBtnCertsSub: 'Titres & labels',
      hubNotionShort: 'Notion',
      hubBtnNotionSub: 'Domaines & compétences',
      hubNotionHeading: 'Savoirs & notions',
      hubNotionItem1: 'Data Engineering',
      hubNotionItem2: 'MLOps/IA',
      hubNotionItem3: 'C / C++ / SQL / Markdown',
      hubViewToolsAnnounce: 'Vue outils',
      hubViewCertsAnnounce: 'Vue certifications',
      hubViewNotionAnnounce: 'Vue savoirs et notions',
      heroBadge: 'Builder produit',
      tools: 'Outils',
      certif: 'Certifications',
      tabMission: 'Mission',
      tabProject: 'Projets',
      labelProblem: 'Problèmes',
      labelSolution: 'Ma solution',
      labelImpact: 'Impact Mesuré',
      labelTech: 'Tech Stack',
      contactMe: 'Me contacter',
      directSend: 'Envoi direct à Aminata Lissa Dia',
      nameLabel: 'Nom',
      emailLabel: 'Email',
      subjectLabel: 'Objet',
      messageLabel: 'Message',
      send: 'Envoyer le message',
      cvDownload: 'Télécharger le CV',
      placeholderName: 'Votre nom',
      placeholderObj: 'Opportunité...',
      placeholderMsg: 'Votre message...',
      cvTitle: 'Curriculum Vitae',
      cvIntro: "Experte en stratégie produit avec une obsession pour l'impact mesurable, la robotique et l'IA.",
      linkedInLink: 'https://www.linkedin.com/in/aminata-lissa-dia',
      selectProject: 'Sélectionnez un projet pour afficher les détails.',
      projectsTitle: 'Projets & Expériences',
      about: 'Formation',
      projects: 'Projets persos',
      formationSubtitle: 'Parcours académique',
      personalProjectsHover: 'Clique pour ouvrir la page projet Portfolio',
      personalProjectsAria: 'Ouvrir la page projet AI-Powered Portfolio',
      contactPhoneLabel: 'Téléphone',
      contactCopyTitle: 'Copier',
      automationModalSub: 'Builder side projects',
      automationTabWorkflowDesc: 'Assistant de pilotage produit',
      automationTabPosDesc: 'Automation Discovery → Delivery',
      automationTabPortfolioDesc: 'Design & développement',
    },
    EN: {
      name: 'Aminata Lissa Dia',
      role: 'Product Manager/Builder',
      vision: 'Building smart',
      drivenBy: 'solutions to ',
      impact: 'simplify daily life.',
      desc1: 'Engineer by training',
      desc2:
        ', with over eight years of experience in tech, I have realized part of my dream: transforming cutting-edge technologies into everyday tools.',
      desc3: 'My journey started in ',
      desc4: 'robotics and complex systems',
      desc5: ', but the need to stay ',
      desc6: 'connected to humans',
      desc7: ' led me to ',
      desc8: 'Product Management.',
      desc9: ' Today, I solve concrete problems by bridging the ',
      desc10: 'gap between technical power and user utility.',
      desc11: 'My specialty? A natural tech appetite that drives me to build solutions (',
      desc12: 'AI, automation, internal tools',
      desc13: ') to simplify the lives of those who build and use them.',
      clickToDiscover: 'The dots on the path below open each experience.',
      heroCtaProjects: 'My projects',
      heroCtaCv: 'My resume',
      hubCertifsShort: 'Certs',
      hubBackProfile: 'Back to profile',
      hubBackShort: 'Back',
      hubToolsHeading: 'Technical mastery',
      hubBtnToolsSub: 'Stack & methods',
      hubBtnCertsSub: 'Credentials',
      hubNotionShort: 'Notion',
      hubBtnNotionSub: 'Skills & concepts',
      hubNotionHeading: 'Knowledge & skills',
      hubNotionItem1: 'Data Engineering',
      hubNotionItem2: 'MLOps / AI',
      hubNotionItem3: 'C / C++ / SQL / Markdown',
      hubViewToolsAnnounce: 'Tools view',
      hubViewCertsAnnounce: 'Certifications view',
      hubViewNotionAnnounce: 'Knowledge areas view',
      heroBadge: 'Product builder',
      tools: 'Tools',
      certif: 'Certifications',
      tabMission: 'Mission',
      tabProject: 'Projects',
      labelProblem: 'Problems',
      labelSolution: 'My Solution',
      labelImpact: 'Measured Impact',
      labelTech: 'Tech Stack',
      contactMe: 'Contact me',
      directSend: 'Direct message to Aminata Lissa Dia',
      nameLabel: 'Name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      send: 'Send message',
      cvDownload: 'Download resume',
      placeholderName: 'Your name',
      placeholderObj: 'Opportunity...',
      placeholderMsg: 'Your message...',
      cvTitle: 'Resume',
      cvIntro: 'Product Strategy Expert with an obsession for measurable impact, robotics, and AI.',
      linkedInLink: 'https://www.linkedin.com/in/aminata-lissa-dia',
      selectProject: 'Select a project to view details.',
      projectsTitle: 'Projects & Experience',
      about: 'Education',
      projects: 'Personal projects',
      formationSubtitle: 'Academic path',
      personalProjectsHover: 'Click to open the Portfolio project page',
      personalProjectsAria: 'Open the AI-Powered Portfolio project page',
      contactPhoneLabel: 'Phone',
      contactCopyTitle: 'Copy',
      automationModalSub: 'Builder side projects',
      automationTabWorkflowDesc: 'Product steering assistant',
      automationTabPosDesc: 'Automation Discovery → Delivery',
      automationTabPortfolioDesc: 'Design & development',
    },
  };

  const formationEntries = [
    {
      date: { FR: 'Novembre 2024', EN: 'November 2024' },
      title: 'Woman Leadership',
      school: { name: 'HEC Paris', href: 'https://www.hec.edu/fr' },
      desc: {
        FR: 'Grande école de commerce française, reconnue mondialement pour ses programmes en management, stratégie et leadership.',
        EN: 'Leading French business school, globally recognized for management, strategy, and leadership programs.',
      },
      logo: 'Images/HEC.png',
      logoAlt: 'HEC Paris',
      logoFallback: 'HEC',
    },
    {
      date: { FR: 'Octobre 2024', EN: 'October 2024' },
      title: 'Lead Product Manager – Certified',
      school: { name: 'Thiga Academy', href: 'https://www.thiga.academy/' },
      desc: {
        FR: 'École spécialisée dans les métiers du produit : formation de Product Managers, discovery, delivery et culture agile.',
        EN: 'School focused on product roles: Product Manager training, discovery, delivery, and agile culture.',
      },
      logo: 'Images/Thiga_Logo.png',
      logoAlt: 'Thiga Academy',
      logoFallback: 'THIGA',
    },
    {
      date: { FR: 'Novembre 2022 - Mars 2023', EN: 'November 2022 – March 2023' },
      title: 'Product Manager',
      school: {
        name: { FR: 'Maestro - Ecole du Product Management', EN: 'Maestro – Product Management School' },
        href: 'https://www.maestro.fr/',
      },
      desc: {
        FR: 'Organisme de formation centré sur le métier de Product Manager, la vision produit et les pratiques agiles en entreprise.',
        EN: 'Training organization focused on the Product Manager role, product vision, and agile practices in companies.',
      },
      logo: 'Images/maestro_logo.png',
      logoAlt: 'Maestro',
      logoFallback: 'MAESTRO',
    },
    {
      date: { FR: '2011 – 2016', EN: '2011 – 2016' },
      title: 'Master Degree in Computer Science',
      lines: [
        { FR: 'Spécialisation Systèmes Embarqués', EN: 'Specialization in Embedded Systems' },
        { FR: 'Graduated with Honors', EN: 'Graduated with Honors' },
      ],
      school: { name: 'ESIEE Paris – Engineering School', href: 'https://www.esiee.fr/' },
      desc: {
        FR: 'Grande école d’ingénieurs du numérique (CY Tech / UGE), forte en informatique, électronique et systèmes embarqués.',
        EN: 'Leading engineering school in digital technology (CY Tech / UGE), strong in computer science, electronics, and embedded systems.',
      },
      logo: 'Images/Logo-esiee-Paris-UGE.svg',
      logoAlt: 'ESIEE Paris',
      logoFallback: 'ESIEE',
      last: true,
    },
  ];

  const experiences = [
    {
      id: 0,
      title: { FR: 'Digital Product Manager', EN: 'Digital Product Manager' },
      company: 'Decathlon Digital',
      shortName: 'DD',
      companyType: 'Grand Groupe',
      period: { FR: '2024 - Présent', EN: '2024 - Present' },
      color: '#007ABD',
      logo: 'Images/Decathlon_-_logo_(France,_2024).svg',
      mission: {
        FR: "Simplifier l'accès et la fiabilité d'un patrimoine colossal de 1,35 PiB de données fragmentées. Orchestration de la stratégie d'accessibilité globale.",
        EN: 'Simplifying access and reliability of 1.35 PiB fragmented data assets. Orchestrating global accessibility strategy.',
      },
      missionHtml: {
        FR: '<p class="mb-4">Conception et déploiement de systèmes d\'observabilité des données permettant d\'améliorer la <strong>fiabilité</strong>, <strong>l\'accessibilité</strong> et l\'usage du patrimoine data au sein de Decathlon.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Responsable de</p>' +
          '<ul class="list-disc pl-5 space-y-2 mb-4">' +
          '<li>La vision produit et la stratégie des solutions d\'observabilité data</li>' +
          '<li>L\'identification des besoins utilisateurs via discovery et recherche utilisateur</li>' +
          '<li>La conception de solutions produits et systèmes pour améliorer la confiance et l\'usage des données</li>' +
          '<li>La coordination du cycle <strong>discovery → delivery → adoption</strong></li>' +
          '</ul>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Portfolio</p>' +
          '<div class="flex flex-wrap gap-2">' +
          '<span class="px-3 py-1 bg-[#007ABD]/10 border border-[#007ABD]/20 rounded-lg text-xs font-bold text-[#007ABD]">Data Cockpit</span>' +
          '<span class="px-3 py-1 bg-[#007ABD]/10 border border-[#007ABD]/20 rounded-lg text-xs font-bold text-[#007ABD]">Data Lineage</span>' +
          '<span class="px-3 py-1 bg-[#007ABD]/10 border border-[#007ABD]/20 rounded-lg text-xs font-bold text-[#007ABD]">Data Qualité</span>' +
          '</div>',
        EN: '<p class="mb-4">Design and deployment of data observability systems to improve <strong>reliability</strong>, <strong>accessibility</strong> and usage of data assets within Decathlon.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Responsible for</p>' +
          '<ul class="list-disc pl-5 space-y-2 mb-4">' +
          '<li>Product vision and strategy for data observability solutions</li>' +
          '<li>Identifying user needs through discovery and user research</li>' +
          '<li>Designing product solutions and systems to improve data trust and usage</li>' +
          '<li>Coordinating the <strong>discovery → delivery → adoption</strong> cycle</li>' +
          '</ul>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Portfolio</p>' +
          '<div class="flex flex-wrap gap-2">' +
          '<span class="px-3 py-1 bg-[#007ABD]/10 border border-[#007ABD]/20 rounded-lg text-xs font-bold text-[#007ABD]">Data Cockpit</span>' +
          '<span class="px-3 py-1 bg-[#007ABD]/10 border border-[#007ABD]/20 rounded-lg text-xs font-bold text-[#007ABD]">Data Lineage</span>' +
          '<span class="px-3 py-1 bg-[#007ABD]/10 border border-[#007ABD]/20 rounded-lg text-xs font-bold text-[#007ABD]">Data Quality</span>' +
          '</div>',
      },
      projectPages: [
        {
          FR: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Augmentation de l\'adoption du Quality Engine</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problématique</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">Le moteur de qualité était principalement utilisé par des profils techniques (<strong class="text-slate-900">Data Engineers</strong>, <strong class="text-slate-900">Data Analysts</strong>) et restait peu accessible aux utilisateurs métiers (<strong class="text-slate-900">Data Quality Managers</strong>, <strong class="text-slate-900">Product Managers</strong>).</p>' +
            '</div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solutions</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Conduite d\'interviews utilisateurs et analyse des usages</li>' +
            '<li>Identification des points de douleur et des freins à l\'adoption</li>' +
            '<li>Définition de solutions permettant de rendre l\'outil accessible à des profils non-tech</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🎯 Amélioration de l\'accessibilité du moteur de qualité</p>' +
            '<p>👥 Adoption élargie à de nouveaux profils utilisateurs</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Users Journey</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Users Interviews</span>' +
            '</div></div>',
          EN: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Increasing Quality Engine Adoption</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problem</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">The quality engine was primarily used by technical profiles (<strong class="text-slate-900">Data Engineers</strong>, <strong class="text-slate-900">Data Analysts</strong>) and remained inaccessible to business users (<strong class="text-slate-900">Data Quality Managers</strong>, <strong class="text-slate-900">Product Managers</strong>).</p>' +
            '</div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solutions</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>User interviews and usage analysis</li>' +
            '<li>Identification of pain points and adoption barriers</li>' +
            '<li>Defining solutions to make the tool accessible to non-tech profiles</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🎯 Improved quality engine accessibility</p>' +
            '<p>👥 Expanded adoption to new user profiles</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Users Journey</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Users Interviews</span>' +
            '</div></div>',
        },
        {
          FR: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Mise en place d\'un framework de fiabilité des données</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problématique</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-2">Les utilisateurs avaient des difficultés à :</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Savoir si une donnée est <strong class="text-slate-900">fiable</strong></li>' +
            '<li>Trouver facilement l\'<strong class="text-slate-900">information pertinente</strong></li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solutions</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Co-construction avec les utilisateurs d\'un <strong class="text-slate-900">framework de maturité</strong> de la fiabilité des données</li>' +
            '<li>Définition de critères permettant d\'évaluer et de visualiser la <strong class="text-slate-900">qualité</strong> et la <strong class="text-slate-900">confiance</strong> dans les données</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🔍 Meilleure compréhension de la fiabilité des datasets</p>' +
            '<p>📐 Cadre commun pour mesurer la maturité data</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Users Interviews</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Workshop</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Framework Design</span>' +
            '</div></div>',
          EN: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Building a Data Reliability Framework</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problem</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-2">Users struggled with:</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Knowing whether data is <strong class="text-slate-900">reliable</strong></li>' +
            '<li>Easily finding <strong class="text-slate-900">relevant information</strong></li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solutions</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Co-building a data reliability <strong class="text-slate-900">maturity framework</strong> with users</li>' +
            '<li>Defining criteria to assess and visualize data <strong class="text-slate-900">quality</strong> and <strong class="text-slate-900">trust</strong></li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🔍 Better understanding of dataset reliability</p>' +
            '<p>📐 Common framework for measuring data maturity</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Users Interviews</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Workshop</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Framework Design</span>' +
            '</div></div>',
        },
        {
          FR: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Réduire le Time to Data : l\'accessibilité à la donnée</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problème</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Les équipes data et métiers rencontraient des difficultés pour accéder rapidement à un patrimoine de données énormes de <strong class="text-slate-900">1,3 Petabytes</strong>.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-2">Les informations essentielles (qualité des datasets, métadonnées, documentation) étaient dispersées dans plusieurs outils, ce qui créait :</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Un <strong class="text-slate-900">Time to Data</strong> élevé</li>' +
            '<li>Une faible visibilité sur la <strong class="text-slate-900">fiabilité des données</strong></li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Solution construite</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Conception d\'un <strong class="text-slate-900">Data Cockpit</strong>, une plateforme centralisant les informations essentielles du patrimoine data afin de permettre aux utilisateurs de :</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium mb-3">' +
            '<li>Identifier rapidement des <strong class="text-slate-900">datasets fiables</strong></li>' +
            '<li>Comprendre le niveau de <strong class="text-slate-900">qualité des données</strong></li>' +
            '<li>Accéder aux <strong class="text-slate-900">métadonnées</strong> et indicateurs clés</li>' +
            '</ul>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Pour faciliter l\'exploration du patrimoine data, développement d\'un assistant basé sur <strong class="text-slate-900">LLM</strong> permettant d\'interroger les datasets et la documentation de manière conversationnelle.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">En parallèle, structuration du cycle <strong class="text-slate-900">discovery → delivery</strong> pour accélérer la mise en production de la solution.</p>' +
            '</div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>⚡ Réduction significative du Time to Data pour les équipes métiers et techniques</p>' +
            '<p>🔒 Amélioration de la transparence et de la confiance dans les données</p>' +
            '<p>🗂️ Simplification de l\'accès au patrimoine data de l\'entreprise</p>' +
            '<p>🚀 Livraison d\'un MVP en 6 mois, actuellement en phase de généralisation</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100 flex items-center justify-between">' +
            '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">GEN AI (LLM)</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Data Cockpit</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Discovery → Delivery</span>' +
            '</div></div>' +
            '<a href="Images/Data_Caockpit_Video.mp4" target="_blank" class="inline-flex items-center gap-2 bg-[#007ABD] text-white font-black uppercase tracking-widest text-[10px] px-4 py-2.5 rounded-xl shadow-lg hover:bg-[#005a8c] transition-all shrink-0 ml-4 mt-6">▶ Voir le MVP</a>' +
            '</div>',
          EN: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Reducing Time to Data: Data Accessibility</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problem</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Data and business teams struggled to quickly access a massive <strong class="text-slate-900">1.3 Petabyte</strong> data estate.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-2">Essential information (dataset quality, metadata, documentation) was scattered across multiple tools, causing:</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>High <strong class="text-slate-900">Time to Data</strong></li>' +
            '<li>Low visibility on <strong class="text-slate-900">data reliability</strong></li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Solution Built</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Designed a <strong class="text-slate-900">Data Cockpit</strong>, a platform centralizing key data estate information to enable users to:</p>' +
            '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium mb-3">' +
            '<li>Quickly identify <strong class="text-slate-900">reliable datasets</strong></li>' +
            '<li>Understand the <strong class="text-slate-900">data quality</strong> level</li>' +
            '<li>Access <strong class="text-slate-900">metadata</strong> and key indicators</li>' +
            '</ul>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">To facilitate data exploration, developed an <strong class="text-slate-900">LLM</strong>-based assistant allowing users to query datasets and documentation conversationally.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">In parallel, structured the <strong class="text-slate-900">discovery → delivery</strong> cycle to accelerate production deployment.</p>' +
            '</div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#007ABD]/10 text-[#007ABD] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>⚡ Significant reduction in Time to Data for business and technical teams</p>' +
            '<p>🔒 Improved transparency and trust in data</p>' +
            '<p>🗂️ Simplified access to the company\\\'s data estate</p>' +
            '<p>🚀 MVP delivered in 6 months, currently in rollout phase</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100 flex items-center justify-between">' +
            '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">GEN AI (LLM)</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Data Cockpit</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Discovery → Delivery</span>' +
            '</div></div>' +
            '<a href="Images/Data_Caockpit_Video.mp4" target="_blank" class="inline-flex items-center gap-2 bg-[#007ABD] text-white font-black uppercase tracking-widest text-[10px] px-4 py-2.5 rounded-xl shadow-lg hover:bg-[#005a8c] transition-all shrink-0 ml-4 mt-6">▶ Watch MVP</a>' +
            '</div>',
        },
      ],
      projects: [
        {
          problem: {
            FR: [
              'Data Discovery : Difficulté à naviguer dans un patrimoine de 1,35 PiB de données fragmentées.',
              'Data Trust : Manque de visibilité sur la fiabilité et la maturité des données exploitées.',
            ],
            EN: [
              'Data Discovery: Difficulty navigating 1.35 PiB of fragmented data assets.',
              'Data Trust: Lack of visibility into data reliability and maturity.',
            ],
          },
          solution: {
            FR: [
              "Déploiement d'un Data Cockpit centralisé.",
              'LLM Query : Recherche en langage naturel pour simplifier l\'accès à la donnée.',
              'Reliability Scoring : Monitoring en temps réel de la qualité et maturité.',
            ],
            EN: [
              'Centralized Data Cockpit deployment.',
              'LLM Query: Natural language search to simplify data access.',
              'Reliability Scoring: Real-time quality and maturity monitoring.',
            ],
          },
          impact: {
            FR: ['Accélération drastique du temps de recherche (Discovery) et sécurisation des prises de décision via une donnée certifiée.'],
            EN: ['Drastic acceleration of search time (Discovery) and securing decision-making through certified data.'],
          },
          techStack: ['GEN AI (LLM)', 'REPLIT', 'AIRTABLE', 'DATA OPS'],
        },
      ],
    },
    {
      id: 1,
      title: { FR: 'Product Manager – AI Factory', EN: 'Product Manager – AI Factory' },
      company: 'Safran.AI (ex-Preligens)',
      shortName: 'SAF',
      companyType: 'Scale-up',
      period: { FR: '2021 - 2024', EN: '2021 - 2024' },
      color: '#0B3B70',
      logo: 'Images/Preligens_logo.svg',
      missionHtml: {
        FR: '<p class="mb-4">Product Manager de l\'<strong>AI Factory</strong>, une plateforme interne visant à industrialiser le développement et le déploiement de modèles d\'IA utilisés pour la <strong>détection d\'objets</strong> à partir d\'images et de vidéos dans le secteur <strong>Défense & Aéronautique</strong>.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Responsable de</p>' +
          '<ul class="list-disc pl-5 space-y-2">' +
          '<li>La <strong>vision produit</strong> et de la <strong>roadmap</strong> de la plateforme</li>' +
          '<li>La collecte et priorisation des besoins utilisateurs (<strong>Data Scientists</strong> et <strong>ML Engineers</strong>)</li>' +
          '<li>La coordination de <strong>3 squads techniques</strong> travaillant sur différentes briques de la plateforme</li>' +
          '<li>La simplification et standardisation du <strong>cycle de vie des modèles ML</strong></li>' +
          '<li>L\'amélioration de la <strong>productivité des Data Scientists</strong> et de la vitesse de mise en production des modèles</li>' +
          '</ul>' +
          '<div class="mt-6 pt-4 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Articles publiés</p>' +
          '<div class="flex flex-col gap-2">' +
          '<a href="https://medium.com/earthcube-stories/how-we-built-an-ai-factory-part-1-2fb34c4cc648" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-xs font-bold text-[#0B3B70] hover:text-[#818CF8] transition-all">📝 How we built an AI Factory — Part 1</a>' +
          '<a href="https://medium.com/earthcube-stories/how-we-built-an-ai-factory-parts-2-3-161d5d2fa6cb" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-xs font-bold text-[#0B3B70] hover:text-[#818CF8] transition-all">📝 How we built an AI Factory — Parts 2 & 3</a>' +
          '</div></div>',
        EN: '<p class="mb-4">Product Manager of the <strong>AI Factory</strong>, an internal platform to industrialize the development and deployment of AI models used for <strong>object detection</strong> from images and videos in the <strong>Defense & Aerospace</strong> sector.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Responsible for</p>' +
          '<ul class="list-disc pl-5 space-y-2">' +
          '<li>The <strong>product vision</strong> and <strong>roadmap</strong> of the platform</li>' +
          '<li>Collecting and prioritizing user needs (<strong>Data Scientists</strong> and <strong>ML Engineers</strong>)</li>' +
          '<li>Coordinating <strong>3 technical squads</strong> working on different platform components</li>' +
          '<li>Simplifying and standardizing the <strong>ML model lifecycle</strong></li>' +
          '<li>Improving <strong>Data Scientist productivity</strong> and model deployment speed</li>' +
          '</ul>' +
          '<div class="mt-6 pt-4 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Published articles</p>' +
          '<div class="flex flex-col gap-2">' +
          '<a href="https://medium.com/earthcube-stories/how-we-built-an-ai-factory-part-1-2fb34c4cc648" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-xs font-bold text-[#0B3B70] hover:text-[#818CF8] transition-all">📝 How we built an AI Factory — Part 1</a>' +
          '<a href="https://medium.com/earthcube-stories/how-we-built-an-ai-factory-parts-2-3-161d5d2fa6cb" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-xs font-bold text-[#0B3B70] hover:text-[#818CF8] transition-all">📝 How we built an AI Factory — Parts 2 & 3</a>' +
          '</div></div>',
      },
      mission: {
        FR: 'Product Manager de l\'AI Factory, une plateforme interne visant à industrialiser le développement et le déploiement de modèles d\'IA pour la détection d\'objets dans le secteur Défense & Aéronautique.',
        EN: 'Product Manager of the AI Factory, an internal platform to industrialize AI model development and deployment for object detection in the Defense & Aerospace sector.',
      },
      projectPages: [
        {
          FR: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Industrialiser le développement des modèles d\'IA</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#0B3B70]/10 text-[#0B3B70] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problème</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Le développement des modèles d\'IA reposait sur des <strong class="text-slate-900">outils et workflows fragmentés</strong>.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Chaque étape du cycle de vie ML (exploration des données, création de datasets, entraînement, packaging et déploiement) nécessitait des outils différents, ce qui rendait difficile l\'<strong class="text-slate-900">industrialisation des modèles</strong> et ralentissait leur mise en production.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">Les Data Scientists passaient également beaucoup de temps sur des <strong class="text-slate-900">tâches répétitives</strong> et peu standardisées.</p>' +
            '</div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#0B3B70]/10 text-[#0B3B70] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solution</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Conception d\'une plateforme interne (<strong class="text-slate-900">AI Factory</strong>) permettant de standardiser et simplifier le cycle de vie des modèles ML.</p>' +
            '<p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">La plateforme couvrait</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium mb-4">' +
            '<li>Préparation et exploration des données</li>' +
            '<li>Création et gestion des datasets</li>' +
            '<li>Entraînement des modèles</li>' +
            '<li>Configuration et packaging pour le déploiement</li>' +
            '<li>Validation des performances</li>' +
            '</ul>' +
            '<p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">Dans ce cadre</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Conduite d\'<strong class="text-slate-900">interviews utilisateurs</strong> régulières avec les Data Scientists</li>' +
            '<li>Définition et priorisation de la <strong class="text-slate-900">roadmap produit</strong></li>' +
            '<li>Pilotage de <strong class="text-slate-900">3 squads techniques</strong> travaillant sur différentes briques de la plateforme</li>' +
            '<li>Collaboration étroite avec les <strong class="text-slate-900">Tech Leads</strong> pour simplifier et standardiser les workflows ML</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#0B3B70]/10 text-[#0B3B70] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🏭 Industrialisation du développement des modèles d\'IA</p>' +
            '<p>📈 Amélioration de la productivité des Data Scientists et ML Engineers</p>' +
            '<p>⚡ Réduction du temps nécessaire pour passer de l\'exploration au déploiement</p>' +
            '<p>🎯 Déploiement plus rapide des détecteurs d\'objets pour les cas d\'usage Défense et Aéronautique</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Python</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">ML Ops</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Users Interviews</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Roadmap</span>' +
            '</div></div>',
          EN: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Industrializing AI Model Development</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#0B3B70]/10 text-[#0B3B70] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problem</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">AI model development relied on <strong class="text-slate-900">fragmented tools and workflows</strong>.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Each step of the ML lifecycle (data exploration, dataset creation, training, packaging and deployment) required different tools, making <strong class="text-slate-900">model industrialization</strong> difficult and slowing down production deployment.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">Data Scientists also spent significant time on <strong class="text-slate-900">repetitive</strong> and poorly standardized tasks.</p>' +
            '</div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#0B3B70]/10 text-[#0B3B70] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solution</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Designed an internal platform (<strong class="text-slate-900">AI Factory</strong>) to standardize and simplify the ML model lifecycle.</p>' +
            '<p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">The platform covered</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium mb-4">' +
            '<li>Data preparation and exploration</li>' +
            '<li>Dataset creation and management</li>' +
            '<li>Model training</li>' +
            '<li>Configuration and packaging for deployment</li>' +
            '<li>Performance validation</li>' +
            '</ul>' +
            '<p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">In this context</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Regular <strong class="text-slate-900">user interviews</strong> with Data Scientists</li>' +
            '<li>Defining and prioritizing the <strong class="text-slate-900">product roadmap</strong></li>' +
            '<li>Leading <strong class="text-slate-900">3 technical squads</strong> working on different platform components</li>' +
            '<li>Close collaboration with <strong class="text-slate-900">Tech Leads</strong> to simplify and standardize ML workflows</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#0B3B70]/10 text-[#0B3B70] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🏭 Industrialized AI model development</p>' +
            '<p>📈 Improved Data Scientist and ML Engineer productivity</p>' +
            '<p>⚡ Reduced time from exploration to deployment</p>' +
            '<p>🎯 Faster deployment of object detectors for Defense and Aerospace use cases</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Python</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">ML Ops</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Users Interviews</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Roadmap</span>' +
            '</div></div>',
        },
      ],
      projects: [
        {
          problem: {
            FR: ["Taux d'abandon élevé lors de l'onboarding utilisateur."],
            EN: ['High drop-off rate during user onboarding.'],
          },
          solution: {
            FR: ['Refonte du tunnel utilisateur.', 'Moteur de prédiction IA pour les flux.'],
            EN: ['User journey redesign.', 'AI flow prediction engine.'],
          },
          impact: {
            FR: ['+45% de conversion sur l\'onboarding.'],
            EN: ['+45% conversion on onboarding.'],
          },
          techStack: ['React', 'IA Agents', 'Python', 'Datadog'],
        },
      ],
    },
    {
      id: 2,
      title: { FR: 'System Engineer / Product Architecture', EN: 'System Engineer / Product Architecture' },
      company: 'SoftBank Robotics Europe',
      shortName: 'SBR',
      companyType: 'PME',
      period: { FR: '2019 - 2021', EN: '2019 - 2021' },
      color: '#00A6D6',
      logo: 'Images/Softbank_mobile_logo.svg',
      missionHtml: {
        FR: '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-4">System Engineer au sein de l\'équipe <strong class="text-slate-900">Product Architecture</strong>, responsable de la structuration et de la cohérence des exigences système pour les produits robotiques.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Responsable de</p>' +
          '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium leading-relaxed">' +
          '<li>La collecte et l\'analyse des <strong class="text-slate-900">besoins utilisateurs</strong> et des exigences techniques</li>' +
          '<li>La définition de l\'<strong class="text-slate-900">architecture fonctionnelle et opérationnelle</strong> des systèmes</li>' +
          '<li>L\'assurance de la <strong class="text-slate-900">traçabilité</strong> entre besoins, conception et implémentation</li>' +
          '<li>La coordination entre équipes <strong class="text-slate-900">R&D, support, tests et projet</strong></li>' +
          '<li>La contribution à la stratégie de <strong class="text-slate-900">validation et qualification produit</strong></li>' +
          '</ul>',
        EN: '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-4">System Engineer within the <strong class="text-slate-900">Product Architecture</strong> team, responsible for structuring and ensuring consistency of system requirements for robotic products.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Responsible for</p>' +
          '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium leading-relaxed">' +
          '<li>Collecting and analyzing <strong class="text-slate-900">user needs</strong> and technical requirements</li>' +
          '<li>Defining <strong class="text-slate-900">functional and operational architecture</strong> of systems</li>' +
          '<li>Ensuring <strong class="text-slate-900">traceability</strong> between needs, design and implementation</li>' +
          '<li>Coordinating across <strong class="text-slate-900">R&D, support, testing and project</strong> teams</li>' +
          '<li>Contributing to the <strong class="text-slate-900">product validation and qualification</strong> strategy</li>' +
          '</ul>',
      },
      mission: {
        FR: 'System Engineer au sein de l\'équipe Product Architecture, responsable de la structuration et de la cohérence des exigences système pour les produits robotiques.',
        EN: 'System Engineer within the Product Architecture team, responsible for structuring and ensuring consistency of system requirements for robotic products.',
      },
      projectPages: [
        {
          FR: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Structurer l\'architecture produit et les exigences système des robots</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#00A6D6]/10 text-[#00A6D6] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problème</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Les produits robotiques impliquent de <strong class="text-slate-900">nombreux composants matériels et logiciels</strong>.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-2">Sans structuration claire des exigences et de l\'architecture système :</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium mb-3">' +
            '<li>La <strong class="text-slate-900">traçabilité</strong> entre besoins utilisateurs et implémentation peut se perdre</li>' +
            '<li>Les équipes techniques peuvent <strong class="text-slate-900">diverger</strong> dans leurs choix d\'architecture</li>' +
            '<li>Les <strong class="text-slate-900">validations</strong> deviennent plus complexes</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#00A6D6]/10 text-[#00A6D6] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solution</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Collecte et analyse des besoins des <strong class="text-slate-900">parties prenantes</strong></li>' +
            '<li>Allocation des exigences fonctionnelles et techniques aux différents <strong class="text-slate-900">composants du système</strong></li>' +
            '<li>Modélisation de l\'<strong class="text-slate-900">architecture produit</strong> selon différentes vues : fonctionnelle, opérationnelle, structurelle</li>' +
            '<li>Identification des <strong class="text-slate-900">paramètres critiques</strong> pour les performances des robots</li>' +
            '<li>Évaluation des <strong class="text-slate-900">choix d\'architecture</strong> avec les équipes techniques</li>' +
            '<li>Mise en place de documents de <strong class="text-slate-900">spécifications et de synthèse système</strong></li>' +
            '<li>Animation d\'<strong class="text-slate-900">ateliers</strong> entre équipes pour aligner les décisions d\'architecture</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#00A6D6]/10 text-[#00A6D6] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🔗 Amélioration de la cohérence entre besoins utilisateurs et conception produit</p>' +
            '<p>📋 Meilleure traçabilité des exigences tout au long du cycle de développement</p>' +
            '<p>🤝 Facilitation de la collaboration entre les équipes R&D et produit</p>' +
            '<p>✅ Contribution à la robustesse des processus de validation produit</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Systems Engineering</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">MBSE</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Requirements</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">V&V</span>' +
            '</div></div>',
          EN: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Structuring Product Architecture and Robot System Requirements</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#00A6D6]/10 text-[#00A6D6] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problem</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Robotic products involve <strong class="text-slate-900">numerous hardware and software components</strong>.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-2">Without clear structuring of requirements and system architecture:</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium mb-3">' +
            '<li><strong class="text-slate-900">Traceability</strong> between user needs and implementation can be lost</li>' +
            '<li>Technical teams may <strong class="text-slate-900">diverge</strong> in their architectural choices</li>' +
            '<li><strong class="text-slate-900">Validations</strong> become more complex</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#00A6D6]/10 text-[#00A6D6] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solution</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Collecting and analyzing <strong class="text-slate-900">stakeholder needs</strong></li>' +
            '<li>Allocating functional and technical requirements to different <strong class="text-slate-900">system components</strong></li>' +
            '<li>Modeling the <strong class="text-slate-900">product architecture</strong> across views: functional, operational, structural</li>' +
            '<li>Identifying <strong class="text-slate-900">critical parameters</strong> for robot performance</li>' +
            '<li>Evaluating <strong class="text-slate-900">architecture choices</strong> with technical teams</li>' +
            '<li>Setting up <strong class="text-slate-900">specification and system synthesis</strong> documents</li>' +
            '<li>Facilitating <strong class="text-slate-900">workshops</strong> across teams to align architecture decisions</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#00A6D6]/10 text-[#00A6D6] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🔗 Improved consistency between user needs and product design</p>' +
            '<p>📋 Better requirements traceability throughout the development cycle</p>' +
            '<p>🤝 Easier collaboration between R&D and product teams</p>' +
            '<p>✅ Contribution to more robust product validation processes</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Systems Engineering</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">MBSE</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Requirements</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">V&V</span>' +
            '</div></div>',
        },
      ],
      projects: [
        {
          problem: {
            FR: ['Friction élevée au paiement.', 'Mauvaise géolocalisation des véhicules.'],
            EN: ['High payment friction.', 'Poor vehicle geolocation.'],
          },
          solution: {
            FR: ['Intégration Apple/Google Pay.', 'Optimisation algorithmique via WebSockets.'],
            EN: ['Apple/Google Pay integration.', 'Algorithmic optimization via WebSockets.'],
          },
          impact: {
            FR: ['Fréquence d\'usage passée de 0.8 à 1.4 trajets/jour.'],
            EN: ['Usage frequency increased from 0.8 to 1.4 trips/day.'],
          },
          techStack: ['Swift', 'Node.js', 'Firebase', 'Maestro'],
        },
      ],
    },
    {
      id: 3,
      title: { FR: 'IT Engineer – Graduate Leadership Program', EN: 'IT Engineer – Graduate Leadership Program' },
      company: 'Fujitsu France',
      shortName: 'FUJ',
      companyType: 'PME',
      period: { FR: '2017 - 2019', EN: '2017 - 2019' },
      color: '#E60012',
      logo: 'Images/Fujitsu-Logo.wine.svg',
      missionHtml: {
        FR: '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-4">Programme de leadership technique au sein de l\'équipe <strong class="text-slate-900">Digital Technical Services</strong>, intervenant sur des projets d\'infrastructure et de solutions digitales pour des clients grands comptes.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Responsable de</p>' +
          '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium leading-relaxed">' +
          '<li>Support technique et diagnostic sur des <strong class="text-slate-900">environnements cloud</strong> et infrastructures</li>' +
          '<li>Développement d\'<strong class="text-slate-900">outils internes en C# et SQL</strong></li>' +
          '<li>Participation au pilotage de <strong class="text-slate-900">projets techniques</strong> et déploiements clients</li>' +
          '<li>Coordination et communication avec les <strong class="text-slate-900">parties prenantes</strong></li>' +
          '</ul>',
        EN: '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-4">Technical leadership program within the <strong class="text-slate-900">Digital Technical Services</strong> team, working on infrastructure and digital solutions projects for major enterprise clients.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Responsible for</p>' +
          '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium leading-relaxed">' +
          '<li>Technical support and diagnostics on <strong class="text-slate-900">cloud environments</strong> and infrastructure</li>' +
          '<li>Developing <strong class="text-slate-900">internal tools in C# and SQL</strong></li>' +
          '<li>Participating in <strong class="text-slate-900">technical project</strong> management and client deployments</li>' +
          '<li>Coordination and communication with <strong class="text-slate-900">stakeholders</strong></li>' +
          '</ul>',
      },
      mission: {
        FR: 'Programme de leadership technique au sein de l\'équipe Digital Technical Services, intervenant sur des projets d\'infrastructure et de solutions digitales pour des clients grands comptes.',
        EN: 'Technical leadership program within the Digital Technical Services team, working on infrastructure and digital solutions projects for major enterprise clients.',
      },
      projectPages: [
        {
          FR: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Déploiement et amélioration de solutions IT pour des clients grands comptes</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#E60012]/10 text-[#E60012] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problème</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">Les projets d\'infrastructure et d\'applications nécessitaient une <strong class="text-slate-900">coordination étroite</strong> entre les équipes techniques et les clients afin de garantir des <strong class="text-slate-900">déploiements fiables</strong> et adaptés aux besoins.</p>' +
            '</div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#E60012]/10 text-[#E60012] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solution</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Diagnostic et résolution de <strong class="text-slate-900">problèmes techniques</strong> sur les infrastructures</li>' +
            '<li>Développement d\'<strong class="text-slate-900">outils internes en C# et SQL</strong></li>' +
            '<li>Participation à la définition des <strong class="text-slate-900">solutions techniques</strong> adaptées aux clients</li>' +
            '<li>Suivi du <strong class="text-slate-900">déploiement des solutions</strong> sur les environnements clients</li>' +
            '<li>Communication et <strong class="text-slate-900">reporting</strong> auprès des parties prenantes</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#E60012]/10 text-[#E60012] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🛡️ Amélioration de la fiabilité des déploiements techniques</p>' +
            '<p>⚡ Résolution rapide des incidents techniques</p>' +
            '<p>🚀 Contribution à la réussite des projets d\'infrastructure et de transformation digitale</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">C#</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">SQL</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Cloud</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Infrastructure</span>' +
            '</div></div>',
          EN: '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Deploying and Improving IT Solutions for Enterprise Clients</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#E60012]/10 text-[#E60012] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problem</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">Infrastructure and application projects required <strong class="text-slate-900">close coordination</strong> between technical teams and clients to ensure <strong class="text-slate-900">reliable deployments</strong> tailored to their needs.</p>' +
            '</div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#E60012]/10 text-[#E60012] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solution</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Diagnosing and resolving <strong class="text-slate-900">technical issues</strong> on infrastructure</li>' +
            '<li>Developing <strong class="text-slate-900">internal tools in C# and SQL</strong></li>' +
            '<li>Contributing to defining <strong class="text-slate-900">technical solutions</strong> tailored to clients</li>' +
            '<li>Monitoring <strong class="text-slate-900">solution deployment</strong> on client environments</li>' +
            '<li><strong class="text-slate-900">Communication and reporting</strong> to stakeholders</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#E60012]/10 text-[#E60012] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>🛡️ Improved reliability of technical deployments</p>' +
            '<p>⚡ Faster resolution of technical incidents</p>' +
            '<p>🚀 Contribution to successful infrastructure and digital transformation projects</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">C#</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">SQL</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Cloud</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Infrastructure</span>' +
            '</div></div>',
        },
      ],
      projects: [
        {
          problem: {
            FR: ['Marketers peinant à manipuler la donnée complexe.'],
            EN: ['Marketers struggling with complex data manipulation.'],
          },
          solution: {
            FR: ["Conception d'un dashboard no-code intuitif."],
            EN: ['Design of an intuitive no-code dashboard.'],
          },
          impact: {
            FR: ['Lancement réussi avec 200 partenaires en Beta.'],
            EN: ['Successful launch with 200 partners in Beta.'],
          },
          techStack: ['Airtable', 'No-Code', 'Jira', 'SQL'],
        },
      ],
    },
    // Samsung MQA : contenu aligné sur la fiche mission / projet réseau (LTE, VoLTE, opérateurs)
    {
      id: 4,
      title: { FR: 'Mobile Quality Engineer – Mobile Quality Assurance', EN: 'Mobile Quality Engineer – Mobile Quality Assurance' },
      company: 'Samsung Electronics France',
      shortName: 'SAM',
      companyType: 'Grand Groupe',
      period: { FR: '2015 - 2017', EN: '2015 - 2017' },
      color: '#1428A0',
      logo: 'Images/Samsung_Orig_Wordmark_BLUE_RGB.png',
      missionHtml: {
        FR:
          '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-4">Ingénieure au sein de l\'équipe <strong class="text-slate-900">Mobile Quality Assurance (MQA)</strong>, en charge de la validation et de l\'intégration des nouvelles technologies réseau (LTE, VoLTE) sur les smartphones Samsung.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Responsable de</p>' +
          '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium leading-relaxed">' +
          '<li>Tester et valider l\'intégration des <strong class="text-slate-900">fonctionnalités réseau</strong> sur les appareils</li>' +
          '<li>Assurer la <strong class="text-slate-900">compatibilité avec les opérateurs télécom</strong></li>' +
          '<li>Analyser les anomalies et coordonner leur résolution avec les <strong class="text-slate-900">équipes techniques</strong></li>' +
          '<li>Contribuer aux processus de <strong class="text-slate-900">certification et de validation produit</strong></li>' +
          '</ul>',
        EN:
          '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-4">Engineer within the <strong class="text-slate-900">Mobile Quality Assurance (MQA)</strong> team, responsible for validating and integrating new network technologies (LTE, VoLTE) on Samsung smartphones.</p>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Responsible for</p>' +
          '<ul class="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-600 font-medium leading-relaxed">' +
          '<li>Testing and validating <strong class="text-slate-900">network feature</strong> integration on devices</li>' +
          '<li>Ensuring <strong class="text-slate-900">compatibility with telecom operators</strong></li>' +
          '<li>Analyzing issues and coordinating resolution with <strong class="text-slate-900">technical teams</strong></li>' +
          '<li>Contributing to <strong class="text-slate-900">product certification and validation</strong> processes</li>' +
          '</ul>',
      },
      mission: {
        FR: 'Ingénieure MQA : validation et intégration LTE/VoLTE sur smartphones Samsung, compatibilité opérateurs et certification.',
        EN: 'MQA engineer: LTE/VoLTE validation and integration on Samsung smartphones, operator compatibility and certification.',
      },
      projectPages: [
        {
          FR:
            '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Assurer la fiabilité des fonctionnalités réseau sur les smartphones</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#1428A0]/10 text-[#1428A0] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problème</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">L\'intégration de nouvelles technologies réseau (LTE, VoLTE) nécessite de garantir leur <strong class="text-slate-900">compatibilité avec les infrastructures des opérateurs</strong>.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-2">Sans validation rigoureuse :</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium mb-3">' +
            '<li>Les performances réseau peuvent être <strong class="text-slate-900">instables</strong></li>' +
            '<li>Certaines fonctionnalités peuvent ne pas fonctionner <strong class="text-slate-900">selon les opérateurs</strong></li>' +
            '<li>L\'<strong class="text-slate-900">expérience utilisateur</strong> peut être dégradée</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#1428A0]/10 text-[#1428A0] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solution</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium">' +
            '<li>Réalisation de tests <strong class="text-slate-900">end-to-end (E2E)</strong> sur les fonctionnalités réseau</li>' +
            '<li>Analyse des problèmes de <strong class="text-slate-900">performance et de compatibilité</strong></li>' +
            '<li>Collaboration avec les équipes techniques pour <strong class="text-slate-900">identifier et corriger les anomalies</strong></li>' +
            '<li>Contribution aux processus de <strong class="text-slate-900">certification des appareils</strong> auprès des opérateurs</li>' +
            '<li><strong class="text-slate-900">Documentation</strong> des résultats de tests et suivi des anomalies</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#1428A0]/10 text-[#1428A0] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>📶 Amélioration de la fiabilité des fonctionnalités réseau sur les smartphones</p>' +
            '<p>🤝 Validation de la compatibilité avec les opérateurs télécom</p>' +
            '<p>🚀 Contribution à des lancements produits conformes aux standards réseau</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">LTE / VoLTE</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">QA / E2E</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Télécom</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Certification</span>' +
            '</div></div>',
          EN:
            '<h4 class="text-base md:text-lg font-black text-slate-900 mb-4">Ensuring reliability of network features on smartphones</h4>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#1428A0]/10 text-[#1428A0] font-bold text-sm">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problem</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-3">Integrating new network technologies (LTE, VoLTE) requires ensuring <strong class="text-slate-900">compatibility with carrier infrastructures</strong>.</p>' +
            '<p class="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-2">Without rigorous validation:</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium mb-3">' +
            '<li>Network performance may be <strong class="text-slate-900">unstable</strong></li>' +
            '<li>Some features may not work <strong class="text-slate-900">depending on the operator</strong></li>' +
            '<li><strong class="text-slate-900">User experience</strong> can suffer</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#1428A0]/10 text-[#1428A0] font-bold text-sm">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Actions / Solution</p>' +
            '<ul class="list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-600 font-medium">' +
            '<li><strong class="text-slate-900">End-to-end (E2E)</strong> testing on network features</li>' +
            '<li>Analysis of <strong class="text-slate-900">performance and compatibility</strong> issues</li>' +
            '<li>Collaboration with technical teams to <strong class="text-slate-900">identify and fix defects</strong></li>' +
            '<li>Contribution to <strong class="text-slate-900">device certification</strong> processes with operators</li>' +
            '<li><strong class="text-slate-900">Documentation</strong> of test results and defect tracking</li>' +
            '</ul></div></div>' +
            '<div class="flex gap-4 mb-6"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-[#1428A0]/10 text-[#1428A0] font-bold text-sm">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impact</p>' +
            '<div class="space-y-2 text-sm md:text-base font-bold text-slate-900">' +
            '<p>📶 Improved reliability of network features on smartphones</p>' +
            '<p>🤝 Validated compatibility with telecom operators</p>' +
            '<p>🚀 Product launches aligned with network standards</p>' +
            '</div></div></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stack</p>' +
            '<div class="flex flex-wrap gap-2">' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">LTE / VoLTE</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">QA / E2E</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Telecom</span>' +
            '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">Certification</span>' +
            '</div></div>',
        },
      ],
      projects: [
        {
          problem: {
            FR: [
              'Compatibilité LTE/VoLTE avec les infrastructures opérateurs à garantir.',
              'Sans validation : performances instables, fonctionnalités variables selon l’opérateur, UX dégradée.',
            ],
            EN: [
              'LTE/VoLTE compatibility with carrier infrastructures must be ensured.',
              'Without validation: unstable performance, operator-dependent features, degraded UX.',
            ],
          },
          solution: {
            FR: [
              'Tests E2E sur les fonctionnalités réseau.',
              'Analyse performance / compatibilité, collaboration avec les équipes techniques.',
              'Certification opérateurs, documentation et suivi des anomalies.',
            ],
            EN: [
              'E2E testing on network features.',
              'Performance/compatibility analysis, collaboration with technical teams.',
              'Operator certification, documentation and defect tracking.',
            ],
          },
          impact: {
            FR: [
              'Fiabilité renforcée des fonctionnalités réseau et lancements conformes aux standards.',
            ],
            EN: ['Stronger network feature reliability and launches aligned with standards.'],
          },
          techStack: ['LTE / VoLTE', 'QA / E2E', 'Télécom', 'Certification'],
        },
      ],
    },
  ];

  // Icônes SVG des outils (reprennent la maquette React)
  const miroIcon = `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.462c-3.564 0-6.462-2.898-6.462-6.462S8.436 5.538 12 5.538s6.462 2.898 6.462 6.462-2.898 6.462-6.462 6.462zM9.231 9.231h5.538v5.538H9.231V9.231z" /></svg>`;
  const replitIcon = `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"><path d="M2 10h10v4H2v-4zm5-5h10v4H7V5zm5 10h10v4H12v-4z" /></svg>`;
  const tools = [
    { name: 'Miro', color: '#FFD02F', textColor: 'text-black', icon: miroIcon, level: 5,
      desc: { FR: 'Workshop & Discovery', EN: 'Workshop & Discovery' },
      detail: { FR: 'Animation de workshops produit, cadrage de problématiques, Design Sprints et sessions de co-construction avec les équipes métiers et techniques.', EN: 'Facilitating product workshops, problem framing, Design Sprints and co-creation sessions with business and technical teams.' }
    },
    { name: 'Replit', color: '#F26207', textColor: 'text-white', icon: replitIcon, level: 4,
      desc: { FR: 'Prototypage rapide', EN: 'Rapid prototyping' },
      detail: { FR: 'Prototypage rapide de MVPs et proof-of-concepts. Développement d\'outils internes et d\'assistants IA pour accélérer les cycles discovery.', EN: 'Rapid prototyping of MVPs and proof-of-concepts. Building internal tools and AI assistants to accelerate discovery cycles.' }
    },
    { name: 'Jira Software', color: '#0052CC', textColor: 'text-white', icon: '', iconSrc: 'Images/Jira_software.svg', level: 5, neutralLogoBtn: true,
      desc: { FR: 'Backlog & Agile Ops', EN: 'Backlog & Agile Ops' },
      detail: { FR: 'Gestion du backlog produit, pilotage des sprints et suivi delivery. Structuration des epics, stories et critères d\'acceptance.', EN: 'Product backlog management, sprint planning and delivery tracking. Structuring epics, stories and acceptance criteria.' }
    },
    { name: 'Jira Discovery', color: '#0747A6', textColor: 'text-white', icon: '', iconSrc: 'Images/Jira_discovery.svg', level: 4, neutralLogoBtn: true,
      desc: { FR: 'Discovery & Priorisation', EN: 'Discovery & Prioritisation' },
      detail: { FR: 'Collecte et priorisation des opportunités produit. Scoring d\'impact, gestion des insights utilisateurs et alignement stratégique.', EN: 'Collecting and prioritizing product opportunities. Impact scoring, user insights management and strategic alignment.' }
    },
    { name: 'Datadog', color: '#632CA6', textColor: 'text-white', icon: '', iconSrc: 'Images/datadog_logo.png', level: 4, neutralLogoBtn: true,
      desc: { FR: 'Observabilité', EN: 'Observability' },
      detail: { FR: 'Monitoring de la performance produit, suivi des métriques d\'usage en temps réel et mise en place de dashboards d\'observabilité data.', EN: 'Product performance monitoring, real-time usage metrics tracking and setting up data observability dashboards.' }
    },
    { name: 'Notion', color: '#F7F6F3', textColor: 'text-black', icon: '', iconSrc: 'Images/notion_logo.png', level: 5,
      desc: { FR: 'Docs & suivi produit', EN: 'Docs & product tracking' },
      detail: { FR: 'Documentation produit, roadmaps, specs et bases de connaissance partagées avec les équipes.', EN: 'Product documentation, roadmaps, specs and shared knowledge bases with teams.' }
    },
  ];

  const certEntries = [
    { FR: 'PSM (SCRUM MASTER)', EN: 'PSM (SCRUM MASTER)' },
    { FR: 'ISTQB FONDATION', EN: 'ISTQB FOUNDATION' },
    { FR: 'CESAM (ARCHITECTURE SYSTÈMES)', EN: 'CESAM (SYSTEMS ARCHITECTURE)' },
    { FR: 'MAESTRO (PRODUCT)', EN: 'MAESTRO (PRODUCT)' },
    { FR: 'THIGA ACADEMY', EN: 'THIGA ACADEMY' },
  ];

  function renderStars(level, maxStars) {
    maxStars = maxStars || 5;
    var html = '<div class="flex gap-0.5">';
    for (var i = 0; i < maxStars; i++) {
      html += '<svg viewBox="0 0 20 20" class="w-3 h-3" fill="' + (i < level ? '#818CF8' : '#E2E8F0') + '">' +
        '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>' +
        '</svg>';
    }
    html += '</div>';
    return html;
  }

  let lang = 'FR';
  let selectedExp = null;
  let activeTab = 'mission';
  let activeProjIdx = 0;
  let activeProjectPage = 0;
  let hasInteracted = false;
  let lastAutomationAgentId = 'pm-secretary';
  /** @type {'photo' | 'tools' | 'certs'} */
  let hubView = 'photo';

  function t(key) {
    return translations[lang][key] || key;
  }

  function getBadgeClass(companyType) {
    if (companyType === 'Grand Groupe') return 'bg-[#007ABD] text-white';
    if (companyType === 'Scale-up') return 'bg-violet-500 text-white';
    if (companyType === 'Startup') return 'bg-amber-500 text-white';
    return 'bg-emerald-500 text-white'; // PME
  }

  function companyTypeForLang(type) {
    var map = {
      'Grand Groupe': { FR: 'Grand Groupe', EN: 'Enterprise' },
      'Scale-up': { FR: 'Scale-up', EN: 'Scale-up' },
      PME: { FR: 'PME', EN: 'SME' },
      Startup: { FR: 'Startup', EN: 'Startup' },
    };
    var row = map[type];
    return row ? row[lang] : type;
  }

  function renderExperienceTimeline() {
    const container = document.getElementById('experience-timeline-nodes');
    if (!container) return;
    const total = experiences.length;
    const denom = Math.max(1, total - 1);
    container.innerHTML = '';

    experiences.forEach(function (exp, index) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.expIndex = String(index);
      btn.className =
        'exp-orbit-btn exp-timeline-node group relative flex min-w-0 max-w-[22%] flex-1 flex-col items-center text-slate-900 sm:max-w-none';
      btn.style.setProperty('--exp-index', String(index));
      btn.style.setProperty('--exp-denom', String(denom));

      // Pastilles légèrement plus grandes pour équilibrer la timeline avec la ligne
      btn.innerHTML =
        '<span class="exp-orbit-dot flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.4rem] border border-white bg-white/95 text-sm font-black uppercase tracking-tighter text-slate-400 shadow-xl backdrop-blur-md transition-all duration-300 sm:h-16 sm:w-16 sm:rounded-[1.75rem] sm:text-base">' +
        escapeHtml(exp.shortName) +
        '</span>' +
        '<span class="exp-timeline-caption mt-2 max-w-full px-0.5 text-center transition-colors duration-200">' +
        '<span class="block truncate text-[8px] font-black leading-tight tracking-tight text-slate-800 sm:text-[9px]">' +
        escapeHtml(exp.company) +
        '</span>' +
        '<span class="mt-0.5 block truncate text-[6px] font-bold uppercase tracking-widest text-[#818CF8] sm:text-[7px]">' +
        escapeHtml(exp.period[lang]) +
        '</span>' +
        '</span>';

      var dotEl = btn.querySelector('.exp-orbit-dot');
      if (dotEl && exp.logo) {
        dotEl.innerHTML =
          '<img src="' +
          escapeHtml(exp.logo) +
          '" alt="' +
          escapeHtml(exp.company) +
          ' logo" class="h-10 w-10 object-contain sm:h-12 sm:w-12" />';
      }

      container.appendChild(btn);

      btn.addEventListener('mouseenter', function () {
        var d = btn.querySelector('.exp-orbit-dot');
        if (d && selectedExp !== index) {
          d.classList.add('scale-105');
          d.style.boxShadow = '0 0 0 3px ' + exp.color + '33, 0 12px 24px rgba(15,23,42,0.22)';
        }
      });
      btn.addEventListener('mouseleave', function () {
        var d = btn.querySelector('.exp-orbit-dot');
        if (!d) return;
        d.classList.remove('scale-105');
        if (selectedExp !== index) {
          d.style.boxShadow = '';
        }
      });
      btn.addEventListener('click', function () {
        hasInteracted = true;
        var clickHintEl = document.getElementById('click-hint');
        if (clickHintEl) {
          clickHintEl.classList.add('opacity-0', 'pointer-events-none');
        }
        selectExp(index);
        openExpModal();
        updateOrbitActiveState();
      });
    });
    updateOrbitActiveState();
  }

  function updateOrbitActiveState() {
    document.querySelectorAll('.exp-orbit-btn').forEach(function (btn, index) {
      const exp = experiences[index];
      const dot = btn.querySelector('.exp-orbit-dot');
      if (!dot) return;
      var label = btn.querySelector('.exp-orbit-label');
      var isTimeline = btn.classList.contains('exp-timeline-node');
      if (selectedExp === index) {
        dot.classList.add('scale-110', 'text-white', 'ring-2', 'ring-[#6366F1]/45');
        dot.classList.remove('bg-white/95', 'text-slate-400');
        if (label && !isTimeline) {
          label.classList.remove('opacity-0', 'scale-90', 'translate-y-2');
          label.classList.add('opacity-100', 'scale-100');
        }
      } else {
        dot.style.backgroundColor = '';
        dot.classList.remove('scale-110', 'text-white', 'ring-2', 'ring-[#6366F1]/45');
        dot.classList.add('bg-white/95', 'text-slate-400');
        if (label && !isTimeline) {
          if (!btn.matches(':hover')) {
            label.classList.add('opacity-0', 'scale-90', 'translate-y-2');
            label.classList.remove('opacity-100', 'scale-100');
          }
        }
      }
    });
  }

  function getHubLiveRegion() {
    var row = document.getElementById('hero-hub-row');
    if (!row) return null;
    var el = document.getElementById('hub-live-region');
    if (el) return el;
    el = document.createElement('span');
    el.id = 'hub-live-region';
    el.className = 'sr-only';
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'true');
    row.appendChild(el);
    return el;
  }

  function announceHubView(view) {
    var lr = getHubLiveRegion();
    if (!lr) return;
    if (view === 'photo') lr.textContent = '';
    else if (view === 'tools') lr.textContent = t('hubViewToolsAnnounce');
    else if (view === 'certs') lr.textContent = t('hubViewCertsAnnounce');
    else if (view === 'notion') lr.textContent = t('hubViewNotionAnnounce');
  }

  /** Positionne le rail Outils / Certifs / Notion (translateY sur 3 panneaux). */
  function setHubTrackPosition(panel, animate) {
    var track = document.getElementById('hub-tools-certs-track');
    if (!track) return;
    var reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var instant = !animate || reduce;
    if (instant) {
      track.classList.add('hub-track-no-transition');
    }
    var y = 'translateY(0)';
    if (panel === 'certs') y = 'translateY(-33.333333%)';
    else if (panel === 'notion') y = 'translateY(-66.666666%)';
    track.style.transform = y;
    if (instant) {
      void track.offsetHeight;
      track.classList.remove('hub-track-no-transition');
    }
  }

  /** Panneau non visible : pas de clic ; aria pour lecteurs d’écran. */
  function updateHubSubviewPointerAndAria() {
    var tools = document.getElementById('hub-layer-tools');
    var certs = document.getElementById('hub-layer-certs');
    var notion = document.getElementById('hub-layer-notion');
    if (!tools || !certs || !notion) return;
    if (hubView === 'tools') {
      tools.style.pointerEvents = 'auto';
      certs.style.pointerEvents = 'none';
      notion.style.pointerEvents = 'none';
      tools.setAttribute('aria-hidden', 'false');
      certs.setAttribute('aria-hidden', 'true');
      notion.setAttribute('aria-hidden', 'true');
    } else if (hubView === 'certs') {
      tools.style.pointerEvents = 'none';
      certs.style.pointerEvents = 'auto';
      notion.style.pointerEvents = 'none';
      tools.setAttribute('aria-hidden', 'true');
      certs.setAttribute('aria-hidden', 'false');
      notion.setAttribute('aria-hidden', 'true');
    } else if (hubView === 'notion') {
      tools.style.pointerEvents = 'none';
      certs.style.pointerEvents = 'none';
      notion.style.pointerEvents = 'auto';
      tools.setAttribute('aria-hidden', 'true');
      certs.setAttribute('aria-hidden', 'true');
      notion.setAttribute('aria-hidden', 'false');
    } else {
      tools.style.pointerEvents = 'none';
      certs.style.pointerEvents = 'none';
      notion.style.pointerEvents = 'none';
      tools.setAttribute('aria-hidden', 'true');
      certs.setAttribute('aria-hidden', 'true');
      notion.setAttribute('aria-hidden', 'true');
    }
  }

  function setHubView(next) {
    if (next !== 'photo' && next !== 'tools' && next !== 'certs' && next !== 'notion') return;
    var photo = document.getElementById('hub-layer-photo');
    var tools = document.getElementById('hub-layer-tools');
    var certs = document.getElementById('hub-layer-certs');
    var portal = document.getElementById('hub-tools-certs-portal');
    var back = document.getElementById('hub-back-btn');
    var btnTools = document.getElementById('hub-btn-tools');
    var btnCerts = document.getElementById('hub-btn-certs');
    var btnNotion = document.getElementById('hub-btn-notion');
    var notionLayer = document.getElementById('hub-layer-notion');
    if (!photo || !tools || !certs || !notionLayer) return;

    var prev = hubView;
    hubView = next;
    var showPhoto = next === 'photo';
    var showTools = next === 'tools';
    var showCerts = next === 'certs';
    var showNotion = next === 'notion';

    if (btnTools) {
      btnTools.setAttribute('aria-pressed', showTools ? 'true' : 'false');
      btnTools.classList.toggle('hub-side-btn-active-tools', showTools);
    }
    if (btnCerts) {
      btnCerts.setAttribute('aria-pressed', showCerts ? 'true' : 'false');
      btnCerts.classList.toggle('hub-side-btn-active-certs', showCerts);
    }
    if (btnNotion) {
      btnNotion.setAttribute('aria-pressed', showNotion ? 'true' : 'false');
      btnNotion.classList.toggle('hub-side-btn-active-notion', showNotion);
    }
    if (back) {
      back.classList.toggle('hidden', showPhoto);
      back.setAttribute('aria-hidden', showPhoto ? 'true' : 'false');
    }
    if (!showTools) {
      clearHubToolsUI();
    }
    if (showTools) {
      clearHubToolsUI();
    }

    function hidePortalSoon() {
      if (!portal) return;
      portal.classList.remove('opacity-100', 'pointer-events-auto');
      portal.classList.add('opacity-0', 'pointer-events-none');
      window.setTimeout(function () {
        if (hubView === 'photo') {
          portal.hidden = true;
        }
      }, 320);
    }

    if (showPhoto) {
      hidePortalSoon();
      photo.classList.remove('opacity-0', 'scale-95', 'pointer-events-none', 'z-0');
      photo.classList.add('z-10', 'opacity-100', 'scale-100');
      updateHubSubviewPointerAndAria();
      announceHubView('photo');
      return;
    }

    photo.classList.remove('z-10', 'opacity-100', 'scale-100');
    photo.classList.add('opacity-0', 'scale-95', 'pointer-events-none', 'z-0');

    var animateTrack =
      prev !== 'photo' && next !== 'photo' && prev !== next;

    if (showTools || showCerts || showNotion) {
      if (portal) {
        var portalWasHidden = portal.hidden;
        portal.hidden = false;
        var trackPanel = showTools ? 'tools' : showCerts ? 'certs' : 'notion';
        setHubTrackPosition(trackPanel, animateTrack);
        if (portalWasHidden) {
          portal.classList.remove('opacity-100', 'pointer-events-auto');
          portal.classList.add('opacity-0', 'pointer-events-none');
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              portal.classList.remove('opacity-0', 'pointer-events-none');
              portal.classList.add('opacity-100', 'pointer-events-auto');
            });
          });
        } else {
          portal.classList.remove('opacity-0', 'pointer-events-none');
          portal.classList.add('opacity-100', 'pointer-events-auto');
        }
      }
      if (showTools) announceHubView('tools');
      else if (showCerts) announceHubView('certs');
      else announceHubView('notion');
    }

    updateHubSubviewPointerAndAria();
  }

  function renderHubCerts() {
    var ul = document.getElementById('hub-certs-list');
    if (!ul) return;
    // Format maquette : carte rectangulaire arrondie, libellé à gauche, picto médaille en contour à droite
    var medalSvg =
      '<svg class="hub-cert-badge-medal" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<circle cx="12" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5" fill="none" />' +
      '<polyline points="8 14 6.5 22 12 18.5 17.5 22 16 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />' +
      '</svg>';
    ul.innerHTML = certEntries
      .map(function (c) {
        return (
          '<li class="hub-cert-badge">' +
          '<span class="hub-cert-badge-label">' +
          escapeHtml(c[lang]) +
          '</span>' +
          '<span class="hub-cert-badge-icon" aria-hidden="true">' +
          medalSvg +
          '</span>' +
          '</li>'
        );
      })
      .join('');
  }

  function clearHubToolsUI() {
    var grid = document.getElementById('hub-tools-grid');
    var host = document.getElementById('hub-tool-hover');
    if (grid) {
      grid.querySelectorAll('.tool-hub-wrap').forEach(function (w) {
        w.classList.remove('is-selected');
      });
    }
    if (host) {
      host.innerHTML = '';
      host.classList.add('hidden');
    }
  }

  /** Clic sur une tuile (hub) : affiche la description sous la grille ; second clic sur la même tuile ferme */
  function wireHubToolClicks(gridContainer) {
    var host = document.getElementById('hub-tool-hover');
    if (!host || !gridContainer) return;
    function showDetail(idx) {
      var item = tools[idx];
      if (!item) return;
      host.classList.remove('hidden');
      host.innerHTML =
        '<span class="block text-[9px] font-black tracking-tight text-slate-900 sm:text-[10px]">' +
        escapeHtml(item.name) +
        '</span>' +
        '<span class="mt-0.5 flex justify-center">' +
        renderStars(item.level) +
        '</span>' +
        '<span class="mt-1 block text-[7px] font-medium leading-snug text-slate-600 sm:text-[8px]">' +
        escapeHtml(item.desc[lang]) +
        '</span>';
    }
    gridContainer.querySelectorAll('.tool-hub-wrap').forEach(function (wrap) {
      wrap.addEventListener('click', function (e) {
        e.stopPropagation();
        var idx = parseInt(wrap.getAttribute('data-tool-idx'), 10);
        var wasSelected = wrap.classList.contains('is-selected');
        gridContainer.querySelectorAll('.tool-hub-wrap').forEach(function (w) {
          w.classList.remove('is-selected');
        });
        if (wasSelected) {
          host.innerHTML = '';
          host.classList.add('hidden');
          return;
        }
        wrap.classList.add('is-selected');
        showDetail(idx);
      });
    });
  }

  function renderToolsInto(container, options) {
    options = options || {};
    var compact = !!options.compact;
    if (!container) return;

    if (compact) {
      container.innerHTML = tools
        .map(function (item, idx) {
          var imgSizeClass = item.neutralLogoBtn ? 'h-7 w-7 max-h-[1.75rem] max-w-[1.75rem]' : 'h-5 w-5 max-h-5 max-w-5';
          var imgWh = item.neutralLogoBtn ? '28' : '20';
          var iconMarkup = item.iconSrc
            ? '<img src="' +
              escapeHtml(item.iconSrc) +
              '" alt="" class="' +
              imgSizeClass +
              ' object-contain object-center pointer-events-none" width="' +
              imgWh +
              '" height="' +
              imgWh +
              '" decoding="async" />'
            : '<div class="' + item.textColor + ' flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5">' + item.icon + '</div>';
          var btnClass =
            'tool-hub-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/90 shadow-md transition-transform duration-200 sm:h-11 sm:w-11 ';
          var btnStyle = '';
          if (item.neutralLogoBtn) {
            btnClass += 'bg-white ring-1 ring-slate-100';
          } else {
            btnClass += 'border-2';
            btnStyle = 'background-color:' + item.color;
          }
          var styleAttr = btnStyle ? ' style="' + btnStyle + '"' : '';
          // Hub cercle : espacement vertical réduit entre icône et libellé (grille resserrée dans le HTML)
          return (
            '<div class="tool-hub-wrap flex min-w-0 flex-col items-center gap-0.5 text-center" data-tool-idx="' +
            idx +
            '">' +
            '<button type="button" class="' +
            btnClass +
            '"' +
            styleAttr +
            '>' +
            iconMarkup +
            '</button>' +
            '<span class="line-clamp-2 min-h-[1.35em] text-[7px] font-black uppercase leading-tight tracking-tight text-slate-700 sm:text-[8px]">' +
            escapeHtml(item.name) +
            '</span>' +
            '</div>'
          );
        })
        .join('');
      wireHubToolClicks(container);
      return;
    }

    container.innerHTML =
      '<div class="grid w-full grid-cols-3 gap-x-2 gap-y-8 sm:gap-x-4 justify-items-center">' +
      tools
        .map(function (item, idx) {
          var tooltipUp = idx < 3;
          var labelClasses =
            'tool-hover-label absolute left-1/2 z-30 w-[min(240px,calc(100vw-3rem))] -translate-x-1/2 px-3 py-2.5 rounded-2xl text-center ' +
            'bg-white/85 backdrop-blur-md border border-white/70 shadow-xl ' +
            'transition-all duration-300 ease-out opacity-0 scale-90 translate-y-4 flex flex-col items-center gap-1 ' +
            (tooltipUp ? 'bottom-full mb-2' : 'top-full mt-2');
          var labelHtml =
            '<span class="' +
            labelClasses +
            '">' +
            '<span class="text-[10px] font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap">' +
            escapeHtml(item.name) +
            '</span>' +
            '<span class="flex justify-center">' +
            renderStars(item.level) +
            '</span>' +
            '<span class="text-[8px] font-semibold text-slate-600 leading-snug max-w-[220px]">' +
            escapeHtml(item.desc[lang]) +
            '</span>' +
            '</span>';
          var imgSizeClass = item.neutralLogoBtn ? 'w-8 h-8 max-w-[2rem] max-h-[2rem]' : 'w-5 h-5';
          var imgWh = item.neutralLogoBtn ? '32' : '20';
          var iconMarkup = item.iconSrc
            ? '<img src="' +
              escapeHtml(item.iconSrc) +
              '" alt="" class="' +
              imgSizeClass +
              ' object-contain object-center pointer-events-none" width="' +
              imgWh +
              '" height="' +
              imgWh +
              '" decoding="async" />'
            : '<div class="' + item.textColor + '">' + item.icon + '</div>';
          var btnClass =
            'tool-btn relative rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ';
          var btnStyle = '';
          if (item.neutralLogoBtn) {
            btnClass +=
              'w-12 h-12 bg-white border border-slate-200 shadow-md ring-1 ring-slate-100';
          } else {
            btnClass += 'w-11 h-11 shadow-lg border-2 border-white';
            btnStyle = 'background-color:' + item.color;
          }
          var styleAttr = btnStyle ? ' style="' + btnStyle + '"' : '';
          var btnHtml =
            '<button type="button" class="' + btnClass + '"' + styleAttr + '>' + iconMarkup + '</button>';
          var inner =
            '<div class="relative inline-flex flex-col items-center">' +
            (tooltipUp ? labelHtml + btnHtml : btnHtml + labelHtml) +
            '</div>';
          return (
            '<div class="tool-wrap group relative flex flex-col items-center" data-tool-idx="' +
            idx +
            '">' +
            inner +
            '</div>'
          );
        })
        .join('') +
      '</div>';

    container.querySelectorAll('.tool-wrap').forEach(function (wrap) {
      var idx = parseInt(wrap.dataset.toolIdx, 10);
      var toolItem = tools[idx];
      var labelEl = wrap.querySelector('.tool-hover-label');
      var btnEl = wrap.querySelector('.tool-btn');

      wrap.addEventListener('mouseenter', function () {
        labelEl.classList.remove('opacity-0', 'scale-90', 'translate-y-4');
        labelEl.classList.add('opacity-100', 'scale-100');
        btnEl.classList.add('scale-110');
        btnEl.style.boxShadow = '0 0 0 3px ' + toolItem.color + '44, 0 14px 28px rgba(15,23,42,0.25)';
      });
      wrap.addEventListener('mouseleave', function () {
        labelEl.classList.add('opacity-0', 'scale-90', 'translate-y-4');
        labelEl.classList.remove('opacity-100', 'scale-100');
        btnEl.classList.remove('scale-110');
        btnEl.style.boxShadow = '';
      });
    });
  }

  function renderTools() {
    var hub = document.getElementById('hub-tools-grid');
    if (hub) {
      renderToolsInto(hub, { compact: true });
    }
    var list = document.getElementById('tools-list');
    if (list) {
      renderToolsInto(list, { compact: false });
    }
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function schoolLinkName(school) {
    if (!school) return '';
    return typeof school.name === 'string' ? school.name : school.name[lang];
  }

  function renderFormationModal() {
    var wrap = document.getElementById('formation-modal-body');
    if (!wrap) return;
    wrap.innerHTML = formationEntries
      .map(function (e) {
        var timeline =
          '<div class="flex flex-col items-center">' +
          '<div class="w-3 h-3 rounded-full bg-[#818CF8] shadow-md"></div>' +
          (e.last ? '' : '<div class="w-0.5 flex-1 bg-slate-200 mt-1"></div>') +
          '</div>';
        var mainClass = e.last ? 'flex-1 flex items-start justify-between gap-4' : 'flex-1 pb-2 flex items-start justify-between gap-4';
        var innerTitle =
          '<p class="text-base font-black text-slate-900 leading-tight">' + escapeHtml(e.title) + '</p>';
        if (e.lines) {
          innerTitle +=
            '<p class="text-sm text-slate-600 font-medium">' + escapeHtml(e.lines[0][lang]) + '</p>' +
            '<p class="text-sm font-bold text-slate-900 mt-1">' + escapeHtml(e.lines[1][lang]) + '</p>';
        }
        var sdName = schoolLinkName(e.school);
        return (
          '<div class="flex gap-4">' +
          timeline +
          '<div class="' +
          mainClass +
          '">' +
          '<div>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-[#818CF8] mb-1">' +
          escapeHtml(e.date[lang]) +
          '</p>' +
          innerTitle +
          '<a href="' +
          escapeHtml(e.school.href) +
          '" target="_blank" rel="noopener noreferrer" class="mt-1 inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-[#818CF8]">' +
          escapeHtml(sdName) +
          '<span aria-hidden="true" class="text-slate-300">•</span>' +
          '</a>' +
          '<p class="mt-2 max-w-prose text-xs leading-relaxed text-slate-500">' +
          escapeHtml(e.desc[lang]) +
          '</p>' +
          '</div>' +
          '<div class="flex h-10 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-2 shadow-sm">' +
          '<img src="' +
          escapeHtml(e.logo) +
          '" alt="' +
          escapeHtml(e.logoAlt) +
          '" class="max-w-full max-h-full object-contain" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';" />' +
          '<span class="text-[8px] font-black text-slate-400 hidden">' +
          escapeHtml(e.logoFallback) +
          '</span>' +
          '</div>' +
          '</div>' +
          '</div>'
        );
      })
      .join('');
  }

  function getAutomationModal() {
    return document.getElementById('automation-card-modal');
  }

  function getVisibleAutomationRoot() {
    var modal = getAutomationModal();
    if (!modal) return null;
    var roots = modal.querySelectorAll('.automation-modal-lang-root');
    for (var i = 0; i < roots.length; i++) {
      if (!roots[i].classList.contains('hidden')) return roots[i];
    }
    return roots.length ? roots[0] : null;
  }

  function syncPortfolioLangBlocks() {
    document.querySelectorAll('[data-portfolio-lang]').forEach(function (el) {
      el.classList.toggle('hidden', el.getAttribute('data-portfolio-lang') !== lang);
    });
  }

  function syncAutomationModalLang() {
    var modal = getAutomationModal();
    if (!modal) return;
    modal.querySelectorAll('.automation-modal-lang-root').forEach(function (el) {
      var L = el.getAttribute('data-automation-lang');
      el.classList.toggle('hidden', L !== lang);
    });
  }

  function setActiveAutomationProject(projectId) {
    var modal = getAutomationModal();
    if (!modal) return;
    modal.querySelectorAll('[data-automation-project-tab]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-automation-project-tab') === projectId;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    modal.querySelectorAll('.automation-modal-lang-root').forEach(function (root) {
      root.querySelectorAll('[data-automation-project-section]').forEach(function (section) {
        if (section.getAttribute('data-automation-project-section') === projectId) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  }

  function setActiveAutomationAgent(agentId, root) {
    lastAutomationAgentId = agentId;
    if (!root) root = getVisibleAutomationRoot();
    if (!root) return;
    root.querySelectorAll('[data-agent-tab]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-agent-tab') === agentId;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      if (isActive) {
        btn.classList.add('bg-[#EEF2FF]', 'text-[#6366F1]', 'border', 'border-[#6366F1]/25', 'shadow-sm');
        btn.classList.remove('text-slate-500', 'hover:text-slate-900', 'hover:bg-white', 'bg-slate-900', 'text-white');
      } else {
        btn.classList.remove('bg-[#EEF2FF]', 'text-[#6366F1]', 'border', 'border-[#6366F1]/25', 'bg-slate-900', 'text-white');
        btn.classList.add('text-slate-500', 'hover:text-slate-900', 'hover:bg-white');
      }
    });
    root.querySelectorAll('[data-agent-section]').forEach(function (section) {
      if (section.getAttribute('data-agent-section') === agentId) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  }

  function selectExp(index) {
    selectedExp = index;
    activeProjIdx = 0;
    activeProjectPage = 0;
    activeTab = 'mission';
    renderProjectDetailPanel();
    renderProjectsList();
  }

  function renderProjectsList() {
    const list = document.getElementById('projects-list');
    if (!list) return;
    list.innerHTML = '';
    experiences.forEach(function (exp, index) {
      const card = document.createElement('button');
      card.type = 'button';
      card.dataset.expIndex = index;
      card.className =
        'project-card w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ' +
        (selectedExp === index
          ? 'border-[#818CF8] bg-white shadow-lg'
          : 'border-slate-100 bg-white/60 hover:border-slate-200 hover:bg-white/80');
      card.innerHTML =
        '<span class="text-[9px] font-black uppercase tracking-widest text-slate-400">' +
        escapeHtml(exp.period[lang]) +
        '</span>' +
        '<h3 class="text-base font-bold text-slate-900 mt-1">' +
        escapeHtml(exp.title[lang]) +
        '</h3>' +
        '<p class="text-sm font-semibold mt-1" style="color:' +
        exp.color +
        '">@' +
        escapeHtml(exp.company) +
        '</p>' +
        '<span class="inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase ' +
        getBadgeClass(exp.companyType) +
        '">' +
        escapeHtml(companyTypeForLang(exp.companyType)) +
        '</span>';
      card.addEventListener('click', function () {
        selectExp(index);
      });
      list.appendChild(card);
    });
  }

  function renderProjectDetailPanel() {
    const panel = document.getElementById('project-detail');
    if (!panel) return;
    if (selectedExp == null) {
      panel.innerHTML = '<p class="text-slate-400 font-medium">' + escapeHtml(t('selectProject')) + '</p>';
      return;
    }
    const exp = experiences[selectedExp];
    const proj = exp.projects[activeProjIdx];
    panel.innerHTML =
      '<div class="flex flex-col mb-6">' +
      '<span class="text-[9px] font-black bg-slate-100 text-slate-500 w-fit px-3 py-1 rounded-full uppercase tracking-widest mb-4">' +
      escapeHtml(exp.period[lang]) +
      '</span>' +
      '<h3 class="text-2xl font-black tracking-tighter leading-tight mb-2">' +
      escapeHtml(exp.title[lang]) +
      '</h3>' +
      '<p class="text-base font-bold mb-2" style="color:' +
      exp.color +
      '">@' +
      escapeHtml(exp.company) +
      '</p>' +
      '<span class="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase ' +
      getBadgeClass(exp.companyType) +
      '">' +
      escapeHtml(companyTypeForLang(exp.companyType)) +
      '</span>' +
      '</div>' +
      '<div class="flex items-center justify-between mb-6">' +
      '<div class="flex gap-1 p-1 bg-slate-100 rounded-2xl w-fit">' +
      '<button type="button" class="exp-tab-mission px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (activeTab === 'mission' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') +
      '">' +
      escapeHtml(t('tabMission')) +
      '</button>' +
      '<button type="button" class="exp-tab-project px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (activeTab === 'project' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') +
      '">' +
      escapeHtml(t('tabProject')) +
      '</button>' +
      '</div>' +
      (activeTab === 'project' && exp.projectPages && exp.projectPages.length > 1
        ? '<div class="flex gap-1.5">' +
          exp.projectPages.map(function (_, pi) {
            return '<button type="button" class="exp-page-dot w-7 h-7 rounded-lg text-[10px] font-black transition-all ' +
              (pi === activeProjectPage ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-400 hover:bg-slate-200') +
              '" data-page="' + pi + '">' + (pi + 1) + '</button>';
          }).join('') +
          '</div>'
        : '') +
      '</div>' +
      (activeTab === 'mission'
        ? '<div class="text-slate-600"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' +
          escapeHtml(t('tabMission')) +
          '</p>' +
          (exp.missionHtml
            ? '<div class="text-sm md:text-base font-medium leading-relaxed">' + exp.missionHtml[lang] + '</div>'
            : '<p class="text-sm md:text-base font-medium leading-relaxed italic">"' + escapeHtml(exp.mission[lang]) + '"</p>') +
          '</div>'
        : (exp.projectPages
          ? // Conteneur .exp-project-content : styles cartes dans styles.css
          '<div class="exp-project-content w-full min-w-0">' + exp.projectPages[activeProjectPage][lang] + '</div>'
          : '<div class="space-y-6">' +
          '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelProblem')) +
          '</p><ul class="list-disc pl-5 space-y-1 text-sm text-slate-600">' +
          proj.problem[lang].map(function (p) { return '<li>' + escapeHtml(p) + '</li>'; }).join('') +
          '</ul></div>' +
          '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelSolution')) +
          '</p><ul class="list-disc pl-5 space-y-1 text-sm text-slate-600">' +
          proj.solution[lang].map(function (s) { return '<li>' + escapeHtml(s) + '</li>'; }).join('') +
          '</ul></div>' +
          '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelImpact')) +
          '</p><ul class="list-disc pl-5 space-y-1 text-sm font-bold text-slate-900">' +
          proj.impact[lang].map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join('') +
          '</ul></div>' +
          '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' +
          escapeHtml(t('labelTech')) +
          '</p><div class="flex flex-wrap gap-2">' +
          proj.techStack.map(function (tech) {
            return '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">' + escapeHtml(tech) + '</span>';
          }).join('') +
          '</div></div>' +
          '</div>'));

    panel.querySelectorAll('.exp-tab-mission').forEach(function (el) {
      el.addEventListener('click', function () {
        activeTab = 'mission';
        renderProjectDetailPanel();
        renderExpModalBody();
      });
    });
    panel.querySelectorAll('.exp-tab-project').forEach(function (el) {
      el.addEventListener('click', function () {
        activeTab = 'project';
        activeProjectPage = 0;
        renderProjectDetailPanel();
        renderExpModalBody();
      });
    });
    panel.querySelectorAll('.exp-page-dot').forEach(function (el) {
      el.addEventListener('click', function () {
        activeProjectPage = parseInt(el.dataset.page, 10);
        renderProjectDetailPanel();
        renderExpModalBody();
      });
    });
  }

  function openExpModal() {
    renderExpModalBody();
    const modal = document.getElementById('exp-modal');
    modal.classList.remove('invisible');
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeExpModal() {
    const modal = document.getElementById('exp-modal');
    // modal.classList.add('closing');
    setTimeout(function () {
      modal.classList.remove('visible');
      modal.classList.add('invisible');
      modal.setAttribute('aria-hidden', 'true');
    }, 0);
  }

  function renderExpModalBody() {
    const body = document.getElementById('exp-modal-body');
    if (!body || selectedExp == null) return;
    const exp = experiences[selectedExp];
    const proj = exp.projects[activeProjIdx];
    body.innerHTML =
      '<div class="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 opacity-[0.03] rounded-bl-full" style="background-color:' +
      exp.color +
      '"></div>' +
      '<div class="flex flex-col mb-6 text-slate-900">' +
      '<div class="flex items-center justify-between mb-4">' +
      '<span class="text-[9px] md:text-[10px] font-black bg-slate-100 text-slate-500 w-fit px-3 py-1 rounded-full uppercase tracking-widest">' +
      escapeHtml(exp.period[lang]) +
      '</span>' +
      '<span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase ' +
      getBadgeClass(exp.companyType) +
      '">' +
      escapeHtml(companyTypeForLang(exp.companyType)) +
      '</span>' +
      '</div>' +
      '<h3 class="text-2xl md:text-3xl font-black tracking-tighter leading-tight mb-2 pr-8">' +
      escapeHtml(exp.title[lang]) +
      '</h3>' +
      '<p class="text-base md:text-xl font-bold mb-2" style="color:' +
      exp.color +
      '">@' +
      escapeHtml(exp.company) +
      '</p>' +
      '</div>' +
      '<div class="flex items-center justify-between mb-8">' +
      '<div role="tablist" class="flex gap-1 p-1 bg-slate-100 rounded-2xl w-fit">' +
      '<button type="button" role="tab" class="exp-modal-tab-mission px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (activeTab === 'mission' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') +
      '">' +
      escapeHtml(t('tabMission')) +
      '</button>' +
      '<button type="button" role="tab" class="exp-modal-tab-project px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (activeTab === 'project' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') +
      '">' +
      escapeHtml(t('tabProject')) +
      '</button>' +
      '</div>' +
      (activeTab === 'project' && exp.projectPages && exp.projectPages.length > 1
        ? '<div class="flex gap-1.5">' +
          exp.projectPages.map(function (_, pi) {
            return '<button type="button" class="exp-page-dot w-7 h-7 rounded-lg text-[10px] font-black transition-all ' +
              (pi === activeProjectPage ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-400 hover:bg-slate-200') +
              '" data-page="' + pi + '">' + (pi + 1) + '</button>';
          }).join('') +
          '</div>'
        : '') +
      '</div>' +
      (activeTab === 'mission'
        ? '<div class="flex gap-4"><div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 opacity-10" style="background-color:' +
          exp.color +
          '">ℹ</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' +
          escapeHtml(t('tabMission')) +
          '</p>' +
          (exp.missionHtml
            ? '<div class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">' + exp.missionHtml[lang] + '</div>'
            : '<p class="text-sm md:text-lg text-slate-600 font-medium leading-relaxed italic">"' + escapeHtml(exp.mission[lang]) + '"</p>') +
          '</div></div>'
        : (exp.projectPages
          ? '<div class="exp-project-content w-full min-w-0">' + exp.projectPages[activeProjectPage][lang] + '</div>'
          : // fallback sans projectPages
          '<div class="space-y-8">' +
          '<div class="flex gap-4"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 opacity-10" style="background-color:' +
          exp.color +
          '">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelProblem')) +
          '</p><ul class="space-y-3 text-sm md:text-base text-slate-600 font-medium">' +
          proj.problem[lang].map(function (p) { return '<li>' + escapeHtml(p) + '</li>'; }).join('') +
          '</ul></div></div>' +
          '<div class="flex gap-4"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 opacity-10" style="background-color:' +
          exp.color +
          '">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelSolution')) +
          '</p><ul class="space-y-3 text-sm md:text-base text-slate-600 font-medium">' +
          proj.solution[lang].map(function (s) { return '<li>' + escapeHtml(s) + '</li>'; }).join('') +
          '</ul></div></div>' +
          '<div class="flex gap-4"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 opacity-10" style="background-color:' +
          exp.color +
          '">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelImpact')) +
          '</p><div class="text-base md:text-lg font-black text-slate-900">' +
          proj.impact[lang].map(function (i) { return '<p class="leading-tight">' + escapeHtml(i) + '</p>'; }).join('') +
          '</div></div></div>' +
          '<div class="flex gap-4 pt-6 border-t border-slate-100"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-slate-100">◫</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' +
          escapeHtml(t('labelTech')) +
          '</p><div class="flex flex-wrap gap-2">' +
          proj.techStack.map(function (tech) {
            return '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">' + escapeHtml(tech) + '</span>';
          }).join('') +
          '</div></div></div>' +
          '</div>'));

    body.querySelectorAll('.exp-modal-tab-mission').forEach(function (el) {
      el.addEventListener('click', function () {
        activeTab = 'mission';
        renderExpModalBody();
        renderProjectDetailPanel();
      });
    });
    body.querySelectorAll('.exp-modal-tab-project').forEach(function (el) {
      el.addEventListener('click', function () {
        activeTab = 'project';
        activeProjectPage = 0;
        renderExpModalBody();
        renderProjectDetailPanel();
      });
    });
    body.querySelectorAll('.exp-page-dot').forEach(function (el) {
      el.addEventListener('click', function () {
        activeProjectPage = parseInt(el.dataset.page, 10);
        renderExpModalBody();
        renderProjectDetailPanel();
      });
    });
  }

  function applyTranslations() {
    document.getElementById('header-name').textContent = t('name');
    document.getElementById('lang-label').textContent = lang;
    var mobileLangEl = document.getElementById('mobile-lang-label');
    if (mobileLangEl) mobileLangEl.textContent = lang;
    document.getElementById('hero-vision').textContent = t('vision');
    document.getElementById('hero-driven').textContent = t('drivenBy');
    document.getElementById('hero-impact').textContent = t('impact');
    var descIds = ['desc1','desc2','desc3','desc4','desc5','desc6','desc7','desc8','desc9','desc10','desc11','desc12','desc13'];
    descIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = t(id);
    });
    var clickHintEl = document.getElementById('click-hint');
    if (clickHintEl) {
      clickHintEl.textContent = t('clickToDiscover');
    }
    var heroBadgeEl = document.getElementById('hero-badge');
    if (heroBadgeEl) heroBadgeEl.textContent = t('heroBadge');
    var hubToolsLbl = document.getElementById('hub-btn-tools-label');
    if (hubToolsLbl) hubToolsLbl.textContent = t('tools');
    var hubToolsSub = document.getElementById('hub-btn-tools-sub');
    if (hubToolsSub) hubToolsSub.textContent = t('hubBtnToolsSub');
    var hubCertsLbl = document.getElementById('hub-btn-certs-label');
    if (hubCertsLbl) hubCertsLbl.textContent = t('hubCertifsShort');
    var hubCertsSub = document.getElementById('hub-btn-certs-sub');
    if (hubCertsSub) hubCertsSub.textContent = t('hubBtnCertsSub');
    var hubNotionLbl = document.getElementById('hub-btn-notion-label');
    if (hubNotionLbl) hubNotionLbl.textContent = t('hubNotionShort');
    var hubNotionSub = document.getElementById('hub-btn-notion-sub');
    if (hubNotionSub) hubNotionSub.textContent = t('hubBtnNotionSub');
    var hubNotionHeadingEl = document.getElementById('hub-notion-heading');
    if (hubNotionHeadingEl) hubNotionHeadingEl.textContent = t('hubNotionHeading');
    var hubNi1 = document.getElementById('hub-notion-item-1');
    if (hubNi1) hubNi1.textContent = t('hubNotionItem1');
    var hubNi2 = document.getElementById('hub-notion-item-2');
    if (hubNi2) hubNi2.textContent = t('hubNotionItem2');
    var hubNi3 = document.getElementById('hub-notion-item-3');
    if (hubNi3) hubNi3.textContent = t('hubNotionItem3');
    var heroProjBtn = document.getElementById('btn-hero-projects');
    if (heroProjBtn) heroProjBtn.textContent = t('heroCtaProjects');
    var heroCvBtn = document.getElementById('btn-hero-cv');
    if (heroCvBtn) heroCvBtn.textContent = t('heroCtaCv');
    var hubBack = document.getElementById('hub-back-btn');
    if (hubBack) {
      hubBack.setAttribute('aria-label', t('hubBackProfile'));
      var hubBackLbl = document.getElementById('hub-back-btn-label');
      if (hubBackLbl) hubBackLbl.textContent = t('hubBackShort');
    }
    var photoProjBtn = document.getElementById('btn-hub-photo-projects');
    if (photoProjBtn) {
      photoProjBtn.setAttribute('aria-label', t('personalProjectsAria'));
      photoProjBtn.setAttribute('title', t('personalProjectsHover'));
    }
    var hubToolsH = document.getElementById('hub-tools-heading');
    if (hubToolsH) hubToolsH.textContent = t('hubToolsHeading');
    var navFormation = document.getElementById('btn-formation');
    if (navFormation) navFormation.textContent = t('about');
    var mobileFormation = document.getElementById('mobile-nav-formation');
    if (mobileFormation) mobileFormation.textContent = t('about');
    var navProjects = document.getElementById('btn-projects');
    if (navProjects) navProjects.textContent = t('projects');
    var mobileProjects = document.getElementById('mobile-nav-projects');
    if (mobileProjects) mobileProjects.textContent = t('projects');
    var mobileCv = document.getElementById('mobile-nav-cv');
    if (mobileCv) mobileCv.textContent = 'CV';
    var mobileContact = document.getElementById('mobile-nav-contact');
    if (mobileContact) mobileContact.textContent = t('contactMe');
    document.getElementById('cv-modal-title').textContent = t('cvTitle');
    document.getElementById('contact-modal-title').textContent = t('contactMe');
    var sub = document.getElementById('contact-modal-subtitle');
    if (sub) sub.textContent = t('directSend');
    var contactPhoneLbl = document.getElementById('contact-label-phone');
    if (contactPhoneLbl) contactPhoneLbl.textContent = t('contactPhoneLabel');
    document.querySelectorAll('.contact-copy-btn').forEach(function (btn) {
      btn.setAttribute('title', t('contactCopyTitle'));
    });
    syncPortfolioLangBlocks();
    syncAutomationModalLang();
    var formationTitleEl = document.getElementById('formation-modal-title');
    if (formationTitleEl) formationTitleEl.textContent = t('about');
    var formationSubEl = document.getElementById('formation-modal-subtitle');
    if (formationSubEl) formationSubEl.textContent = t('formationSubtitle');
    renderFormationModal();
    var autoHeading = document.getElementById('automation-modal-heading');
    if (autoHeading) autoHeading.textContent = t('projects');
    var autoTag = document.getElementById('automation-modal-tagline');
    if (autoTag) autoTag.textContent = t('automationModalSub');
    var wfH3 = document.getElementById('automation-tab-workflow-h3');
    if (wfH3) {
      if (lang === 'FR') {
        wfH3.innerHTML =
          'Workflow <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-emerald-500">Automatisé</span>';
      } else {
        wfH3.innerHTML =
          '<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-emerald-500">Automated</span> Workflow';
      }
    }
    var wfTabDesc = document.getElementById('automation-tab-workflow-desc');
    if (wfTabDesc) wfTabDesc.textContent = t('automationTabWorkflowDesc');
    var posTabDesc = document.getElementById('automation-tab-pos-desc');
    if (posTabDesc) posTabDesc.textContent = t('automationTabPosDesc');
    var portfolioTabDesc = document.getElementById('automation-tab-portfolio-desc');
    if (portfolioTabDesc) portfolioTabDesc.textContent = t('automationTabPortfolioDesc');
    var visAutoRoot = getVisibleAutomationRoot();
    if (visAutoRoot) setActiveAutomationAgent(lastAutomationAgentId, visAutoRoot);
    renderCVModalBody();
  }

  function renderCVModalBody() {
    const body = document.getElementById('cv-modal-body');
    if (!body) return;
    var pdfPath = 'Images/_Aminata_Dia_Product_Manager_Resume_2025 (2).pdf';
    body.innerHTML =
      '<div class="w-full" style="min-height:70vh">' +
      '<iframe src="' + pdfPath + '" class="w-full rounded-2xl border border-slate-100" style="height:70vh" frameborder="0"></iframe>' +
      '</div>' +
      '<div class="flex justify-center mt-6">' +
      '<a href="' + pdfPath + '" download class="inline-flex items-center gap-2 bg-slate-900 text-white font-black uppercase tracking-widest text-xs px-6 py-3 rounded-2xl shadow-xl hover:bg-[#818CF8] transition-all">' +
      escapeHtml(t('cvDownload')) +
      '</a>' +
      '</div>';
  }

  function init() {
    applyTranslations();
    renderExperienceTimeline();
    renderTools();
    renderHubCerts();

    document.getElementById('btn-lang').addEventListener('click', function () {
      lang = lang === 'FR' ? 'EN' : 'FR';
      applyTranslations();
      renderExperienceTimeline();
      renderProjectsList();
      renderProjectDetailPanel();
      clearHubToolsUI();
      renderTools();
      renderHubCerts();
      if (selectedExp != null) renderExpModalBody();
    });

    document.getElementById('exp-modal-close').addEventListener('click', closeExpModal);
    document.getElementById('exp-modal-backdrop').addEventListener('click', closeExpModal);

    document.getElementById('btn-cv').addEventListener('click', function () {
      document.getElementById('cv-modal').classList.remove('invisible');
      document.getElementById('cv-modal').setAttribute('aria-hidden', 'false');
    });
    document.getElementById('cv-modal-close').addEventListener('click', function () {
      document.getElementById('cv-modal').classList.add('invisible');
      document.getElementById('cv-modal').setAttribute('aria-hidden', 'true');
    });
    document.getElementById('cv-modal-backdrop').addEventListener('click', function () {
      document.getElementById('cv-modal').classList.add('invisible');
      document.getElementById('cv-modal').setAttribute('aria-hidden', 'true');
    });

    document.getElementById('btn-formation').addEventListener('click', function () {
      document.getElementById('formation-modal').classList.remove('invisible');
      document.getElementById('formation-modal').setAttribute('aria-hidden', 'false');
    });
    document.getElementById('formation-modal-close').addEventListener('click', function () {
      document.getElementById('formation-modal').classList.add('invisible');
      document.getElementById('formation-modal').setAttribute('aria-hidden', 'true');
    });
    document.getElementById('formation-modal-backdrop').addEventListener('click', function () {
      document.getElementById('formation-modal').classList.add('invisible');
      document.getElementById('formation-modal').setAttribute('aria-hidden', 'true');
    });

    document.getElementById('btn-contact').addEventListener('click', function () {
      document.getElementById('contact-modal').classList.remove('invisible');
      document.getElementById('contact-modal').setAttribute('aria-hidden', 'false');
    });
    document.getElementById('contact-modal-close').addEventListener('click', function () {
      document.getElementById('contact-modal').classList.add('invisible');
      document.getElementById('contact-modal').setAttribute('aria-hidden', 'true');
    });
    document.getElementById('contact-modal-backdrop').addEventListener('click', function () {
      document.getElementById('contact-modal').classList.add('invisible');
      document.getElementById('contact-modal').setAttribute('aria-hidden', 'true');
    });

    var headerProjectsBtn = document.getElementById('btn-projects');
    var heroProjectsBtn = document.getElementById('btn-hero-projects');
    function openMesProjetsModal(projectId) {
      var modal = document.getElementById('automation-card-modal');
      if (!modal) return;
      modal.classList.remove('invisible');
      modal.setAttribute('aria-hidden', 'false');
      setActiveAutomationProject(projectId || 'workflow');
    }
    function wireProjectsOpener(btn) {
      if (!btn) return;
      btn.addEventListener('click', function () {
        openMesProjetsModal('workflow');
      });
    }
    wireProjectsOpener(headerProjectsBtn);
    wireProjectsOpener(heroProjectsBtn);

    var hubPhotoLayer = document.getElementById('hub-layer-photo');
    var hubBrainBtn = document.getElementById('btn-hub-photo-projects');
    var hubCircle = document.getElementById('hub-circle');

    if (!hubCircle) return;
    hubCircle.addEventListener('click', function () {
      if (hubView !== 'photo') return;
      openMesProjetsModal('workflow');
    });

    var heroCvOpen = document.getElementById('btn-hero-cv');
    if (heroCvOpen) {
      heroCvOpen.addEventListener('click', function () {
        var cv = document.getElementById('cv-modal');
        if (!cv) return;
        cv.classList.remove('invisible');
        cv.setAttribute('aria-hidden', 'false');
      });
    }

    var hubBtnTools = document.getElementById('hub-btn-tools');
    if (hubBtnTools) {
      hubBtnTools.addEventListener('click', function () {
        setHubView(hubView === 'tools' ? 'photo' : 'tools');
      });
    }
    var hubBtnCerts = document.getElementById('hub-btn-certs');
    if (hubBtnCerts) {
      hubBtnCerts.addEventListener('click', function () {
        setHubView(hubView === 'certs' ? 'photo' : 'certs');
      });
    }
    var hubBtnNotion = document.getElementById('hub-btn-notion');
    if (hubBtnNotion) {
      hubBtnNotion.addEventListener('click', function () {
        setHubView(hubView === 'notion' ? 'photo' : 'notion');
      });
    }
    var hubBackBtn = document.getElementById('hub-back-btn');
    if (hubBackBtn) {
      // Empêche le clic sur le bouton retour de remonter jusqu'au hubCircle (qui ouvre la modale "projets")
      hubBackBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        setHubView('photo');
      });
    }
    var autoClose = document.getElementById('automation-card-close');
    var autoBackdrop = document.getElementById('automation-card-backdrop');
    function closeAutomationCard() {
      var modal = document.getElementById('automation-card-modal');
      if (!modal) return;
      modal.classList.add('invisible');
      modal.setAttribute('aria-hidden', 'true');
    }
    if (autoClose) autoClose.addEventListener('click', closeAutomationCard);
    if (autoBackdrop) autoBackdrop.addEventListener('click', closeAutomationCard);

    var autoModalNode = getAutomationModal();
    if (autoModalNode) {
      autoModalNode.addEventListener('click', function (e) {
        var agentBtn = e.target.closest('[data-agent-tab]');
        if (!agentBtn || !autoModalNode.contains(agentBtn)) return;
        var root = agentBtn.closest('.automation-modal-lang-root');
        if (!root || root.classList.contains('hidden')) return;
        var agentId = agentBtn.getAttribute('data-agent-tab');
        if (agentId) setActiveAutomationAgent(agentId, root);
      });
    }

    var automationProjectTabs = document.querySelectorAll('[data-automation-project-tab]');
    if (automationProjectTabs.length) {
      automationProjectTabs.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var projectId = btn.getAttribute('data-automation-project-tab');
          if (projectId) setActiveAutomationProject(projectId);
        });
      });
      setActiveAutomationProject('workflow');
      var r0 = getVisibleAutomationRoot();
      if (r0) setActiveAutomationAgent(lastAutomationAgentId, r0);
    }
    // Navigation mobile : drawer + délégation vers les boutons desktop (réutilise modales / langue)
    function closeMobileNav() {
      var overlay = document.getElementById('mobile-nav');
      var drawer = document.getElementById('mobile-nav-drawer');
      var openBtn = document.getElementById('btn-nav-open');
      if (!overlay || !drawer) return;
      overlay.classList.add('invisible', 'opacity-0', 'pointer-events-none');
      overlay.classList.remove('opacity-100');
      overlay.setAttribute('aria-hidden', 'true');
      drawer.classList.add('translate-x-full');
      drawer.classList.remove('translate-x-0');
      document.body.classList.remove('overflow-hidden');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
    }
    function openMobileNav() {
      var overlay = document.getElementById('mobile-nav');
      var drawer = document.getElementById('mobile-nav-drawer');
      var openBtn = document.getElementById('btn-nav-open');
      if (!overlay || !drawer) return;
      overlay.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
      overlay.classList.add('opacity-100');
      overlay.setAttribute('aria-hidden', 'false');
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0');
      document.body.classList.add('overflow-hidden');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
    }
    (function wireMobileNav() {
      var openBtn = document.getElementById('btn-nav-open');
      var closeBtn = document.getElementById('btn-nav-close');
      var backdrop = document.getElementById('mobile-nav-backdrop');
      if (openBtn) openBtn.addEventListener('click', openMobileNav);
      if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
      if (backdrop) backdrop.addEventListener('click', closeMobileNav);
      // Réutilise les boutons desktop (même logique modales / langue)
      [
        ['mobile-nav-lang', 'btn-lang'],
        ['mobile-nav-formation', 'btn-formation'],
        ['mobile-nav-projects', 'btn-projects'],
        ['mobile-nav-cv', 'btn-cv'],
        ['mobile-nav-contact', 'btn-contact'],
      ].forEach(function (pair) {
        var m = document.getElementById(pair[0]);
        if (!m) return;
        m.addEventListener('click', function () {
          var t = document.getElementById(pair[1]);
          if (t) t.click();
          closeMobileNav();
        });
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMobileNav();
      });
    })();

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) closeMobileNav();
      renderExperienceTimeline();
      updateOrbitActiveState();
    });

    // Centres d’intérêt : clic = sélection exclusive (teinte fixe sans survol)
    (function wireHubPillarCards() {
      var cards = document.querySelectorAll('.hub-pillar-card');
      if (!cards.length) return;
      cards.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var wasPressed = btn.getAttribute('aria-pressed') === 'true';
          cards.forEach(function (b) {
            b.setAttribute('aria-pressed', 'false');
          });
          if (!wasPressed) {
            btn.setAttribute('aria-pressed', 'true');
          }
        });
      });
    })();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
