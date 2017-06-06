module.exports = {
   
  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Office Server Summit 2017",
      description: "Konferencja społecznościowa, poświęcona technologiom związanym z Office 365, Exchange 2016, Skype for Business 2015 i Sharepoint 2016",
      date: "19 czerwca 2017",
      venue: "Biuro Microsoft Polska",
      address: "Al. Jerozolimskie 195A",
      city: "Warszawa",
      state: "mazowieckie"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    /*callToAction: {
        text: "Register now!",
        link: "http://eventick.com.br"
    },*/

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    /*forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },*/

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
      //'location',
      'speakers',
      'schedule',
      //'sponsors',
      //'partners'
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
            name: "Check-in / Breakfast",
            time: "9h00"
        },
        {
            name: "Konrad Sagała",
            photo: "themes/yellow-swan/img/konsag.jpg",
            bio: "",
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
            photo: "themes/yellow-swan/img/jacek.jpg",
            bio: "",
            company: "APN Promise S.A.",
            link: {
                href: "http://github.com/billy95",
                text: "@billy95"
            },
            presentation: {
                title: "Nowe funkcjonalności w Skype for Business 2015",
                description: "Dlaczego warto wdrażać Skype for Business 2015",
                time: "11h00"
            }
        },
        {
            name: "Lunch",
            time: "12h00"
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
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
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