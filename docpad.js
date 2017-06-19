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
    //    text: "Zarejestruj się!",
    //    link: "https://officeserverssummit2017.evenea.pl/"
    //},

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://officeserverssummit2017.pepug.org"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      //'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Ogólnie",
      location: "Lokalizacja",
      speakers: "Prelegenci",
      schedule: "Agenda",
      sponsors: "Sponsorzy",
      partners: "Partnerzy",
      contact: "Kontakt"
    },

    // The entire schedule
    schedule: [
      {
        name: "Rejestracja",
        time: "8:30-9:15"
      },
      {
        name: "Rozpoczęcie Konferencji",
        time: "9:15-9:25"
      },
      {
        name: "Ścieżka Communications",
        time: "9:25-9:30"
      },
      {
        name: "Konrad Sagała",
        photo: "themes/yellow-swan/img/konsag.jpg",
        bio: "Konrad od 1993 zajmuje się projektowaniem i wdrażaniem systemów informatycznych opartych o różne platformy sieciowe, od 1996 związany z platformą Microsoft Windows Server. Do jego specjalności należą: projektowanie i zarządzanie systemami usług pocztowych MS Exchange i pracy grupowej Skype for Business, projektowanie i zarządzanie systemami usług katalogowych MS Active Directory, projektowanie i zarządzanie infrastrukturą sieciową, usługami bezpieczeństwa i zarządzania tożsamością. Twórca Polskiej Grupy Profesjonalistów i Użytkowników Exchange PEPUG. Od 10 lat otrzymuje tytuł MVP, przez 9 lat w kategorii Exchange Server, ostatnio w kategorii Office Servers & Services.",
        company: "APN Promise S.A.",
        link: {
          href: "http://twitter.com/sagus",
          text: "@sagus"
        },
        presentation: {
          title: "CloudPBX - telefonia w chmurze",
          description: "Jak wdrażać usługi głosowe w polączeniu z telefonią Skype for Business Online",
          time: "9:30-10:45"
        }
      },
      {
        name: "Jacek Światowiak",
        photo: "themes/yellow-swan/img/jacek.jpg",
        bio: "Jacek jest absolwentem Politechniki Gdańskiej, gdzie od 2002 jest wykładowcą na Podyplomowym Studium. Autor szeregu publikacji, prelegent, trener i architekt rozwiązań serwerowych Microsoft, w szczególności z zakresu bezpieczeństwa, usług katologowych i usług komunikacyjnych. Od kilku lat wyróżnianiany przez Microsoft nagrodą MVP, ostatnio w kategorii Office Servers & Services.​",
        company: "APN Promise S.A.",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Sposoby uwierzytelnienia w Office 365",
          description: "Coraz więcej firm używa Office365 i zapewnienie odpowiedniego poziomu zabezpieczeń jest bardzo istotne. Sesja przedstawi nowe i nieco starsze metody uwierzytelnienia i weryfikacji wużytkowników usługi Office 365",
          time: "11:00-12:15"
        }
      },
      {
        name: "Lunch",
        time: "12:15-13:00"
      },
      {
        name: "Rafał Langowski",
        photo: "themes/yellow-swan/img/Rafal.jpg",
        bio: "",
        company: "Microsoft",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Session and Media Establishment in Skype for Business",
          description: "Celem sesji jest omówienie metod i protokołów używanych podczas komunikacji klientów Skype for Business. Poruszona zostanie zarówno komunikacja klient-klient jak również klient-serwer, omówione zostaną protokoły SIP, SDP i sRTP oraz najlepsze praktyki dla zapewnienie optymalnej jakości połączeń.",
          time: "13:00-14:15"
        }
      },
      {
        name: "Przerwa",
        time: "14:15-14:30"
      },
      {
        name: "Marcin Iwanowski",
        photo: "themes/yellow-swan/img/MarcinIwanowski.png",
        bio: "Scrum Master / Starszy Programista SharePoint w F. Hoffmann-La Roche (poprzez 7N). Aktywny trener współpracujący z największymi ośrodkami edukacyjnymi w Polsce. Wykładowca Warszawskiej Wyższej Szkoły Informatyki. Od 2011 roku Microsoft Most Valuable Professional w kategorii Windows Platform Development. Prelegent wielu wydarzeń ogólnopolskich oraz spotkań społeczności .NET. Były lider 'Białostockiej Grupy .NET' a wcześniej największej w Polsce akademickiej grupy 'Grupa .NET Politechniki Białostockiej'. Od 2010 roku magister inżynier Informatyki, absolwent Politechniki Białostockiej.",
        company: "Hoffmann-La Roche",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "'Dziwne, u mnie działa'. SharePoint debugging z użyciem WinDbg",
          description: "W codziennej pracy programisty spotykamy się często z typowym stwierdzeniem 'Dziwne, u mnie działa'. Zazwyczaj w takim momencie jesteśmy świadkami niebanalnego problemu, nienadającego się do diagnozy z użyciem Visual Studio, a im bliżej środowiska produkcyjnego dany problem wystąpił tym sytuacja jest bardziej dramatyczna. Celem sesji jest wyposażenie słuchaczy, programistów .NET / SharePoint, w nową (starą) broń do walki z tego typu zdarzeniami.",
          time: "14:30-15:45"
        }
      },
      {
        name: "Ścieżka Productivity",
        time: "9:25-9:30"
      },
      {
        name: "Kamil Bączyk",
        photo: "themes/yellow-swan/img/baczyk.jpg",
        bio: "Certyfikowany specjalista i pasjonat technologii, na co dzień konsultant i trener. Regularny uczestnik wielu projektów i wdrożeń związanych z technologiami serwerowymi Microsoft, chmurą prywatną i grupą BPOS - głównie środowisk opartych o Microsoft SharePoint, stanowiących biznesową podstawę przedsiębiorstw. Aktywnie dzieli się swoją wiedzą i promuje nowe rozwiązania wspierając społeczności offline i online WGUiSW, dodatkowo jeden z liderów PInG, laureat konkursu Speaker Idol 2009 i specjalista w 'Ask The Expert' na Microsoft Technology Summit. Microsoft MVP w kategorii Office Servers & Services.​",
        company: "APN Promise S.A.",
        link: {
          href: "https://twitter.com/KamilBaczyk",
          text: "@KamilBaczyk"
        },
        presentation: {
          title: "(Nie)Bezpieczeństwo danych w Office 365 - fakty i mity",
          description: "Myślisz sobie 'co złego może mi się stać' albo 'mnie ten temat nie dotyczy'. Zatem zdecydowanie jest to sesja dla Ciebie. Poruszone zostaną między innymi takie aspekty jak: kto, kiedy i czy ma dostęp do danych? Jak podnieść poziom bezpieczeństwa organizacji i jak sprawdzać co się dzieje z chmurą. Zgłębimy takie zagadnienia jak ATP, LockBox, szyfrowanie i kontrola danych, ASM i wykrywanie ataków w/z organizacji.  Mówią 'data is the new oil' stąd cyberbezpieczeństwo stało się codziennością, zatem ta sesja pozwoli odpowiedzieć na pytanie 'Czy jeśli zostanę zaatakowany, to będę w stanie odpowiednio zareagować ?'",
          time: "9:30-10:45"
        }
      },
      {
        name: "Przerwa",
        time: "10:45-11:00"
      },
      {
        name: "Emil Wasilewski",
        photo: "themes/yellow-swan/img/emil.jpg",
        bio: "Cloud Solution Architect, trener, konsultant. Microsoft Most Valuable Professional w kategorii Microsoft Azure",
        company: "Cloudeon A/S",
        link: {
          href: "https://twitter.com/WasilewskiEmil",
          text: "@WasilewskiEmil"
      },
        presentation: {
          title: "Microsoft PowerApps, Flow i Azure AD – mieszanka wybuchowa",
          description: "Podczas sesji zbudujemy prostą aplikację w PowerApps, która wykorzystując dane z SharePoint List pozwoli użytkownikowi uzyskać dostęp do grupy zabezpieczeń w Active Directory. Brzmi skomplikowanie? To tylko pozory, przyjdź i sprawdź jakie to proste!",
          time: "11:00-12:15"
        }
      },
      {
        name: "Lunch",
        time: "12:15-13:00"
      },
      {
        name: "Łukasz Kałużny",
        photo: "themes/yellow-swan/img/lukaszkaluzny.jpg",
        bio: "Cloud Architect, trener, konsultant. Microsoft Most Valuable Professional w kategorii Microsoft Azure",
        company: "Lingaro",
        link: {
          href: "https://twitter.com/kaluzaaa",
          text: "@kaluzaaa"
        },
        presentation: {
          title: "Office Add-Ins",
          description: "",
          time: "13:00-14:15"
        }
      },
      {
        name: "Przerwa",
        time: "14:15-14:30"
      },
      {
        name: "Adam Marczak",
        photo: "themes/yellow-swan/img/AdamMarczak.jpg",
        bio: "",
        company: "Lingaro",
        link: {
          href: "https://www.linkedin.com/in/adam-marczak-96088929/",
          text: "Adam Marczak@LinkedIn"
        },
        presentation: {
          title: "Azure bot z użyciem connectorow dla Skype for Business i MS Teams",
          description: "",
          time: "14:30-15:45"
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
        logo: "themes/yellow-swan/img/logoPromise.png",
        url: "http://www.promise.pl"
      },
      {
        name: "Audiocodes",
        logo: "themes/yellow-swan/img/audiocodes.png",
        url: "http://www.audiocodes.com"
      },
      {
        name: "Microsoft",
        logo: "themes/yellow-swan/img/ms.png",
        url: "http://www.microsoft.com"
      },
      {
        name: "Polycom",
        logo: "themes/yellow-swan/img/polycom.png",
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