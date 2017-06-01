module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Office Servers Summit 2017",
      description: "Konferencja społecznościowa, poświęcona technologiom związanym z Office 365, Exchange 2016, Skype for Business 2015 i Sharepoint 2016",
      date: "19 czerwca 2017",
      // If your event is free, just comment this line
      // price: "$100",
      venue: "Biuro Microsoft Polska",
      address: "Al. Jerozolimskie 195A",
      city: "Warszawa",
      state: "mazowieckie"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    //callToAction: {
    //    text: "Register now!",
    //    link: "http://eventick.com.br"
    //},

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Rejestracja",
        time: "9h00"
      },
      {
        name: "Konrad Sagała",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Konrad od 1993 zajmuje się projektowaniem i wdrażaniem systemów informatycznych opartych o różne platformy sieciowe, od 1996 związany z platformą Microsoft Windows Server. Do jego specjalności należą: projektowanie i zarządzanie systemami usług pocztowych MS Exchange i pracy grupowej Skype for Business, projektowanie i zarządzanie systemami usług katalogowych MS Active Directory, projektowanie i zarządzanie infrastrukturą sieciową, usługami bezpieczeństwa i zarządzania tożsamością. Twórca Polskiej Grupy Profesjonalistów i Użytkowników Exchange PEPUG. Od 10 lat otrzymuje tytuł MVP, przez 9 lat w kategorii Exchange Server, ostatnio w kategorii Office Servers & Services.",
        company: "APN Promise S.A.",
        link: {
          href: "http://twitter.com/sagus",
          text: "@sagus"
        },
        presentation: {
          title: "Nowości w Exchange 2016",
          description: "Dlaczego warto wdrażać Exchange 2016",
          time: "10h00"
        }
      },
      {
        name: "Jacek Światowiak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Jacek jest absolwentem Politechniki Gdańskiej, gdzie od 2002 jest wykładowcą na Podyplomowym Studium. Autor szeregu publikacji, prelegent, trener i architekt rozwiązań serwerowych Microsoft, w szczególności z zakresu bezpieczeństwa, usług katologowych i usług komunikacyjnych. Od kilku lat wyróżnianiany przez Microsoft nagrodą MVP, ostatnio w kategorii Office Servers & Services.​",
        company: "APN Promise S.A.",
        link: {
          href: "http://github.com/billy95",
          text: "@billy95"
        },
        presentation: {
          title: "Nowe funkcjonalności w Skype for Business 2015",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Marcin Iwanowski",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "'Dziwne, u mnie działa'. SharePoint debugging z użyciem WinDbg",
          description: "W codziennej pracy programisty spotykamy się często z typowym stwierdzeniem 'Dziwne, u mnie działa'. Zazwyczaj w takim momencie jesteśmy świadkami niebanalnego problemu, nienadającego się do diagnozy z użyciem Visual Studio, a im bliżej środowiska produkcyjnego dany problem wystąpił tym sytuacja jest bardziej dramatyczna. Celem sesji jest wyposażenie słuchaczy, programistów .NET / SharePoint, w nową (starą) broń do walki z tego typu zdarzeniami.",
          time: "13h00"
        }
      },
      {
        name: "Kamil Bączyk",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Certyfikowany specjalista i pasjonat technologii, na co dzień konsultant i trener. Regularny uczestnik wielu projektów i wdrożeń związanych z technologiami serwerowymi Microsoft, chmurą prywatną i grupą BPOS - głównie środowisk opartych o Microsoft SharePoint, stanowiących biznesową podstawę przedsiębiorstw. Aktywnie dzieli się swoją wiedzą i promuje nowe rozwiązania wspierając społeczności offline i online WGUiSW, dodatkowo jeden z liderów PInG, laureat konkursu Speaker Idol 2009 i specjalista w 'Ask The Expert' na Microsoft Technology Summit. Microsoft MVP w kategorii Office Servers & Services.​",
        company: "APN Promise S.A.",
        link: {
          href: "https://twitter.com/KamilBaczyk",
          text: "@KamilBaczyk"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Emil Wasilewski",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Cloud Solution Architect, trener, konsultant. Microsoft Most Valuable Professional w kategorii Microsoft Azure",
        company: "Cloudeon A/S",
        link: {
          href: "https://twitter.com/WasilewskiEmil",
          text: "@WasilewskiEmil"
        },
        presentation: {
          title: "Microsoft PowerApps, Flow i Azure AD – mieszanka wybuchowa",
          description: "Podczas sesji zbudujemy prostą aplikację w PowerApps, która wykorzystując dane z SharePoint List pozwoli użytkownikowi uzyskać dostęp do grupy zabezpieczeń w Active Directory. Brzmi skomplikowanie? To tylko pozory, przyjdź i sprawdź jakie to proste!",
          time: "16h00"
        }
      },
      {
        name: "Rafał Langowski",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Cloud Solution Architect, trener, konsultant. Microsoft Most Valuable Professional w kategorii Microsoft Azure",
        company: "Microsoft",
        link: {
          href: "https://twitter.com/WasilewskiEmil",
          text: "@WasilewskiEmil"
        },
        presentation: {
          title: "Microsoft PowerApps, Flow i Azure AD – mieszanka wybuchowa",
          description: "Podczas sesji zbudujemy prostą aplikację w PowerApps, która wykorzystując dane z SharePoint List pozwoli użytkownikowi uzyskać dostęp do grupy zabezpieczeń w Active Directory. Brzmi skomplikowanie? To tylko pozory, przyjdź i sprawdź jakie to proste!",
          time: "16h00"
        }
      },
      {
        name: "Adam Marczak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Lingaro",
        link: {
          href: "https://www.linkedin.com/in/adam-marczak-96088929/",
          text: "Adam Marczak@LinkedIn"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "APN Promise S.A.",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://www.promise.pl"
      },
      {
        name: "Audiocodes",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://www.audiocodes.com"
      },
      {
        name: "Microsoft",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://www.microsoft.com"
      },
      {
        name: "Polycom",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://www.polycom.com"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};