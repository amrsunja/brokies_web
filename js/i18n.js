(function () {
  "use strict";

  var STORAGE_KEY = "brokies-lang";
  var STR = {
    en: {
      "nav.features": "Features",
      "nav.app": "App",
      "nav.contact": "Contact",
      "nav.download": "Download",
      "a11y.openMenu": "Open menu",
      "a11y.lang": "Language",
      "index.metaTitle": "Brokies — Your edge in the market",
      "index.metaDesc":
        "Brokies — trade, rank, and grow with a community built for serious players.",
      "hero.eyebrow": "Wealth · Community · Markets",
      "hero.h1": "Trade with clarity. Rise with Brokies.",
      "hero.lead":
        "A premium space to share ideas, track your rank, and connect with traders who play at your level — wrapped in a dark, gold-accented experience you already love in the app.",
      "store.appSmall": "Download on the",
      "store.googleSmall": "Get it on",
      "hero.imgAlt": "Brokies app screenshot",
      "showcase.cardAlt":
        "Brokies feed card with balance, WHALE badge, and post content",
      "carousel.prev": "Previous screenshot",
      "carousel.next": "Next screenshot",
      "carousel.dot": "Screenshot {{n}} of {{total}}",
      "hero.badge": "Whale",
      "features.h2": "Built for the scoreboard",
      "features.lead":
        "Everything you need to show up, stand out, and stay in the conversation — without losing the premium feel.",
      "feat1.h": "Rank & reputation",
      "feat1.p":
        "Climb tiers and badges that reflect how you move in the market — visible at a glance on your profile.",
      "feat2.h": "Feed that hits",
      "feat2.p":
        "Share takes, tag themes, and engage with a community that speaks the same language as your charts.",
      "feat3.h": "Premium dark UI",
      "feat3.p":
        "Deep ink backgrounds, gold accents, and serif headlines — the same visual DNA as the mobile app.",
      "showcase.h2": "Your profile, your statement",
      "showcase.p1":
        "Balance, followers, and posts live in one refined layout — tuned for readability in low light and impact in the feed.",
      "showcase.p2":
        "Hashtags and badges pick up brand gold so the important signals never get lost in the noise.",
      "showcase.stat1": "Example balance",
      "showcase.stat2": "Status tier",
      "showcase.stat3": "Markets never sleep",
      "cta.h2": "Ready to join Brokies?",
      "cta.p": "Download the app and bring your A-game to the feed.",
      "footer.tagline":
        "The social layer for traders who care about rank, reputation, and real-time energy — in a dark, gold-trimmed experience.",
      "footer.taglineShort":
        "The social layer for traders who care about rank, reputation, and real-time energy.",
      "footer.colProduct": "Product",
      "footer.colLegal": "Legal",
      "footer.colConnect": "Connect",
      "footer.contactForm": "Contact form",
      "footer.rights": "All rights reserved.",
      "footer.disclaimer":
        "Markets involve risk. Brokies does not provide financial advice.",
      "footer.home": "Home",
      "contact.metaTitle": "Contact — Brokies",
      "contact.metaDesc": "Contact Brokies",
      "contact.h1": "Contact",
      "contact.sub":
        "Partnerships, press, or support — we read every message.",
      "contact.h2direct": "Direct lines",
      "contact.p1":
        'Prefer email? Reach the team at <a href="mailto:hello@brokies.app">hello@brokies.app</a>.',
      "contact.p2":
        'Legal: <a href="mailto:legal@brokies.app">legal@brokies.app</a><br />Privacy: <a href="mailto:privacy@brokies.app">privacy@brokies.app</a>',
      "contact.storeSmall": "Get the app",
      "form.labelName": "Name",
      "form.labelEmail": "Email",
      "form.labelMessage": "Message",
      "form.submit": "Send message",
      "form.fillAll": "Please fill in all fields.",
      "form.invalidEmail": "Please enter a valid email address.",
      "form.success":
        "Thank you — your message has been recorded. We will get back to you soon.",
      "terms.metaTitle": "Terms of Use — Brokies",
      "terms.metaDesc": "Brokies Terms of Use",
      "terms.h1": "Terms of Use",
      "terms.updated": "Last updated: April 17, 2026",
      "terms.intro":
        'Welcome to Brokies. By accessing or using our website, mobile application, and related services (collectively, the "Services"), you agree to these Terms of Use. If you do not agree, please do not use the Services.',
      "terms.s1h": "1. Eligibility",
      "terms.s1p":
        "You must be at least the age of majority in your jurisdiction to use the Services. By using Brokies, you represent that you meet this requirement and that your registration information is accurate.",
      "terms.s2h": "2. Not financial advice",
      "terms.s2p":
        "Brokies is a social and informational platform. Nothing on the Services constitutes financial, investment, legal, or tax advice. You are solely responsible for your trading and investment decisions. Past performance does not guarantee future results.",
      "terms.s3h": "3. User content",
      "terms.s3p":
        "You retain ownership of content you post. By posting, you grant Brokies a worldwide, non-exclusive license to host, display, and distribute your content in connection with operating the Services. You agree not to post unlawful, misleading, harassing, or infringing content.",
      "terms.s4h": "4. Prohibited conduct",
      "terms.s4p":
        "You may not interfere with the Services, attempt unauthorized access, scrape data in violation of our rules, manipulate rankings, or use the Services for fraud or market manipulation. We may suspend or terminate accounts that violate these Terms.",
      "terms.s5h": "5. Disclaimers",
      "terms.s5p":
        'The Services are provided "as is" without warranties of any kind, express or implied. We do not guarantee uninterrupted or error-free operation.',
      "terms.s6h": "6. Limitation of liability",
      "terms.s6p":
        "To the fullest extent permitted by law, Brokies and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.",
      "terms.s7h": "7. Changes",
      "terms.s7p":
        'We may update these Terms from time to time. We will post the revised Terms on this page and update the "Last updated" date. Continued use of the Services after changes constitutes acceptance of the revised Terms.',
      "terms.s8h": "8. Contact",
      "terms.s8p":
        'Questions about these Terms? Reach us via the <a href="contact.html">contact form</a> or at <a href="mailto:legal@brokies.app">legal@brokies.app</a>.',
      "privacy.metaTitle": "Privacy Policy — Brokies",
      "privacy.metaDesc": "Brokies Privacy Policy",
      "privacy.h1": "Privacy Policy",
      "privacy.updated": "Last updated: April 17, 2026",
      "privacy.intro":
        'Brokies ("we", "us") respects your privacy. This Policy describes how we collect, use, and share information when you use our website, mobile app, and related services (the "Services").',
      "privacy.s1h": "1. Information we collect",
      "privacy.s1lead": "We may collect:",
      "privacy.s1li1":
        "<strong>Account data:</strong> such as username, email, and profile details you choose to provide.",
      "privacy.s1li2":
        "<strong>Content:</strong> posts, comments, media, and interactions you submit through the Services.",
      "privacy.s1li3":
        "<strong>Device &amp; log data:</strong> such as device type, OS, approximate location derived from IP, and diagnostic logs to keep the app stable and secure.",
      "privacy.s2h": "2. How we use information",
      "privacy.s2lead": "We use information to:",
      "privacy.s2li1": "Provide, personalize, and improve the Services;",
      "privacy.s2li2": "Maintain safety, integrity, and fraud prevention;",
      "privacy.s2li3": "Communicate with you about updates, support, and policies;",
      "privacy.s2li4": "Comply with legal obligations.",
      "privacy.s3h": "3. Sharing",
      "privacy.s3p":
        "We do not sell your personal information. We may share information with service providers who assist us (hosting, analytics, email delivery) subject to confidentiality obligations, or when required by law, or to protect rights and safety.",
      "privacy.s4h": "4. Cookies & similar technologies",
      "privacy.s4p":
        "Our website may use cookies and similar technologies to remember preferences and measure traffic. You can control cookies through your browser settings.",
      "privacy.s5h": "5. Retention",
      "privacy.s5p":
        "We retain information for as long as needed to provide the Services and for legitimate business purposes, unless a longer period is required by law.",
      "privacy.s6h": "6. Security",
      "privacy.s6p":
        "We implement technical and organizational measures designed to protect information. No method of transmission over the Internet is 100% secure.",
      "privacy.s7h": "7. Your choices",
      "privacy.s7p":
        "Depending on your region, you may have rights to access, correct, delete, or export your personal data, or object to certain processing. Contact us to make a request.",
      "privacy.s8h": "8. Children",
      "privacy.s8p":
        "The Services are not directed to children under 13 (or the applicable age in your jurisdiction). We do not knowingly collect personal information from children.",
      "privacy.s9h": "9. International transfers",
      "privacy.s9p":
        "If you use the Services from outside the country where we operate, your information may be transferred and processed in other countries with different data protection laws.",
      "privacy.s10h": "10. Changes to this Policy",
      "privacy.s10p":
        'We may update this Policy from time to time. We will post the new version on this page and revise the "Last updated" date.',
      "privacy.s11h": "11. Contact",
      "privacy.s11p":
        'For privacy-related questions, contact us at <a href="mailto:privacy@brokies.app">privacy@brokies.app</a> or via the <a href="contact.html">contact form</a>.',
    },
    fr: {
      "nav.features": "Fonctionnalités",
      "nav.app": "Application",
      "nav.contact": "Contact",
      "nav.download": "Télécharger",
      "a11y.openMenu": "Ouvrir le menu",
      "a11y.lang": "Langue",
      "index.metaTitle": "Brokies — Votre avantage sur les marchés",
      "index.metaDesc":
        "Brokies — tradez, grimpez au classement et progressez avec une communauté faite pour les joueurs sérieux.",
      "hero.eyebrow": "Patrimoine · Communauté · Marchés",
      "hero.h1": "Tradez avec clarté. Élevez-vous avec Brokies.",
      "hero.lead":
        "Un espace premium pour partager des idées, suivre votre rang et connecter avec des traders de votre niveau — dans une expérience sombre et dorée comme dans l’application.",
      "store.appSmall": "Télécharger sur",
      "store.googleSmall": "Disponible sur",
      "hero.imgAlt": "Capture d’écran de l’app Brokies",
      "showcase.cardAlt":
        "Carte de fil Brokies avec solde, badge Baleine et publication",
      "carousel.prev": "Capture d’écran précédente",
      "carousel.next": "Capture d’écran suivante",
      "carousel.dot": "Capture {{n}} sur {{total}}",
      "hero.badge": "Baleine",
      "features.h2": "Pensé pour le classement",
      "features.lead":
        "Tout ce qu’il faut pour être visible, marquer des points et rester dans la conversation — sans perdre le côté premium.",
      "feat1.h": "Rang & réputation",
      "feat1.p":
        "Gravissez les paliers et badges qui reflètent votre façon d’agir sur les marchés — visibles d’un coup d’œil sur votre profil.",
      "feat2.h": "Un fil qui frappe",
      "feat2.p":
        "Partagez vos idées, taguez les thèmes et échangez avec une communauté qui parle le même langage que vos graphiques.",
      "feat3.h": "Interface sombre premium",
      "feat3.p":
        "Fonds encre profonde, accents dorés et titres en serif — le même ADN visuel que l’app mobile.",
      "showcase.h2": "Votre profil, votre déclaration",
      "showcase.p1":
        "Solde, abonnés et publications réunis dans une mise en page soignée — lisible en faible lumière et percutante dans le fil.",
      "showcase.p2":
        "Hashtags et badges reprennent l’or de la marque pour que les signaux importants ne se perdent pas dans le bruit.",
      "showcase.stat1": "Exemple de solde",
      "showcase.stat2": "Palier de statut",
      "showcase.stat3": "Les marchés ne dorment jamais",
      "cta.h2": "Prêt à rejoindre Brokies ?",
      "cta.p":
        "Téléchargez l’application et donnez le meilleur de vous-même dans le fil.",
      "footer.tagline":
        "La couche sociale pour les traders qui valorisent le rang, la réputation et l’énergie du moment — dans une expérience sombre aux accents dorés.",
      "footer.taglineShort":
        "La couche sociale pour les traders qui valorisent le rang, la réputation et l’énergie du moment.",
      "footer.colProduct": "Produit",
      "footer.colLegal": "Légal",
      "footer.colConnect": "Liens",
      "footer.contactForm": "Formulaire de contact",
      "footer.rights": "Tous droits réservés.",
      "footer.disclaimer":
        "Les marchés comportent des risques. Brokies ne fournit pas de conseil financier.",
      "footer.home": "Accueil",
      "contact.metaTitle": "Contact — Brokies",
      "contact.metaDesc": "Contacter Brokies",
      "contact.h1": "Contact",
      "contact.sub":
        "Partenariats, presse ou support — nous lisons chaque message.",
      "contact.h2direct": "Contacts directs",
      "contact.p1":
        'Vous préférez l’e-mail ? Écrivez à l’équipe : <a href="mailto:hello@brokies.app">hello@brokies.app</a>.',
      "contact.p2":
        'Juridique : <a href="mailto:legal@brokies.app">legal@brokies.app</a><br />Confidentialité : <a href="mailto:privacy@brokies.app">privacy@brokies.app</a>',
      "contact.storeSmall": "Télécharger l’app",
      "form.labelName": "Nom",
      "form.labelEmail": "E-mail",
      "form.labelMessage": "Message",
      "form.submit": "Envoyer",
      "form.fillAll": "Veuillez remplir tous les champs.",
      "form.invalidEmail": "Veuillez saisir une adresse e-mail valide.",
      "form.success":
        "Merci — votre message a bien été enregistré. Nous vous répondrons bientôt.",
      "terms.metaTitle": "Conditions d’utilisation — Brokies",
      "terms.metaDesc": "Conditions d’utilisation de Brokies",
      "terms.h1": "Conditions d’utilisation",
      "terms.updated": "Dernière mise à jour : 17 avril 2026",
      "terms.intro":
        'Bienvenue sur Brokies. En accédant ou en utilisant notre site web, notre application mobile et les services associés (collectivement les « Services »), vous acceptez les présentes conditions d’utilisation. Si vous n’acceptez pas, veuillez ne pas utiliser les Services.',
      "terms.s1h": "1. Éligibilité",
      "terms.s1p":
        "Vous devez avoir atteint l’âge de la majorité dans votre juridiction pour utiliser les Services. En utilisant Brokies, vous déclarez remplir cette exigence et que les informations d’inscription sont exactes.",
      "terms.s2h": "2. Pas de conseil financier",
      "terms.s2p":
        "Brokies est une plateforme sociale et d’information. Rien sur les Services ne constitue un conseil financier, d’investissement, juridique ou fiscal. Vous êtes seul responsable de vos décisions de trading et d’investissement. Les performances passées ne préjugent pas des performances futures.",
      "terms.s3h": "3. Contenu utilisateur",
      "terms.s3p":
        "Vous conservez la propriété du contenu que vous publiez. En publiant, vous accordez à Brokies une licence mondiale non exclusive d’héberger, d’afficher et de distribuer votre contenu dans le cadre de l’exploitation des Services. Vous acceptez de ne pas publier de contenu illégal, trompeur, harcelant ou portant atteinte aux droits de tiers.",
      "terms.s4h": "4. Comportements interdits",
      "terms.s4p":
        "Vous ne devez pas perturber les Services, tenter d’y accéder sans autorisation, extraire des données en violation de nos règles, manipuler les classements ou utiliser les Services pour la fraude ou la manipulation de marché. Nous pouvons suspendre ou supprimer les comptes qui enfreignent ces conditions.",
      "terms.s5h": "5. Avertissements",
      "terms.s5p":
        'Les Services sont fournis « en l’état », sans garantie d’aucune sorte, expresse ou implicite. Nous ne garantissons pas un fonctionnement ininterrompu ou exempt d’erreurs.',
      "terms.s6h": "6. Limitation de responsabilité",
      "terms.s6p":
        "Dans la mesure maximale permise par la loi, Brokies et ses affiliés ne sauraient être tenus responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif résultant de votre utilisation des Services.",
      "terms.s7h": "7. Modifications",
      "terms.s7p":
        "Nous pouvons mettre à jour ces conditions. La version révisée sera publiée sur cette page avec une date de « Dernière mise à jour ». L’utilisation continue des Services après modification vaut acceptation des conditions révisées.",
      "terms.s8h": "8. Contact",
      "terms.s8p":
        'Des questions sur ces conditions ? Écrivez-nous via le <a href="contact.html">formulaire de contact</a> ou à <a href="mailto:legal@brokies.app">legal@brokies.app</a>.',
      "privacy.metaTitle": "Politique de confidentialité — Brokies",
      "privacy.metaDesc": "Politique de confidentialité de Brokies",
      "privacy.h1": "Politique de confidentialité",
      "privacy.updated": "Dernière mise à jour : 17 avril 2026",
      "privacy.intro":
        'Brokies (« nous ») respecte votre vie privée. La présente politique décrit comment nous collectons, utilisons et partageons les informations lorsque vous utilisez notre site, notre application mobile et les services associés (les « Services »).',
      "privacy.s1h": "1. Informations collectées",
      "privacy.s1lead": "Nous pouvons collecter :",
      "privacy.s1li1":
        "<strong>Données de compte :</strong> par exemple nom d’utilisateur, e-mail et éléments de profil que vous choisissez de fournir.",
      "privacy.s1li2":
        "<strong>Contenu :</strong> publications, commentaires, médias et interactions transmis via les Services.",
      "privacy.s1li3":
        "<strong>Données d’appareil et journaux :</strong> type d’appareil, système, localisation approximative dérivée de l’IP, journaux de diagnostic pour la stabilité et la sécurité.",
      "privacy.s2h": "2. Utilisation des informations",
      "privacy.s2lead": "Nous utilisons ces informations pour :",
      "privacy.s2li1": "Fournir, personnaliser et améliorer les Services ;",
      "privacy.s2li2": "Préserver la sécurité, l’intégrité et lutter contre la fraude ;",
      "privacy.s2li3": "Communiquer avec vous (mises à jour, support, politiques) ;",
      "privacy.s2li4": "Respecter nos obligations légales.",
      "privacy.s3h": "3. Partage",
      "privacy.s3p":
        "Nous ne vendons pas vos données personnelles. Nous pouvons les partager avec des prestataires (hébergement, analyses, envoi d’e-mails) sous obligation de confidentialité, ou lorsque la loi l’exige, ou pour protéger droits et sécurité.",
      "privacy.s4h": "4. Cookies et technologies similaires",
      "privacy.s4p":
        "Le site peut utiliser des cookies et technologies similaires pour mémoriser des préférences et mesurer l’audience. Vous pouvez gérer les cookies dans les paramètres du navigateur.",
      "privacy.s5h": "5. Conservation",
      "privacy.s5p":
        "Nous conservons les informations le temps nécessaire aux Services et à des finalités légitimes, sauf obligation légale de conservation plus longue.",
      "privacy.s6h": "6. Sécurité",
      "privacy.s6p":
        "Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger les informations. Aucune transmission sur Internet n’est totalement sécurisée.",
      "privacy.s7h": "7. Vos choix",
      "privacy.s7p":
        "Selon votre région, vous pouvez disposer de droits d’accès, de rectification, de suppression ou d’export de vos données, ou d’opposition à certains traitements. Contactez-nous pour exercer ces droits.",
      "privacy.s8h": "8. Enfants",
      "privacy.s8p":
        "Les Services ne s’adressent pas aux enfants de moins de 13 ans (ou l’âge applicable dans votre pays). Nous ne collectons pas sciemment de données personnelles auprès d’enfants.",
      "privacy.s9h": "9. Transferts internationaux",
      "privacy.s9p":
        "Si vous utilisez les Services depuis un autre pays que celui où nous opérons, vos données peuvent être transférées et traitées dans des pays aux lois différentes sur la protection des données.",
      "privacy.s10h": "10. Modifications de cette politique",
      "privacy.s10p":
        "Nous pouvons mettre à jour cette politique. La nouvelle version sera publiée sur cette page avec la date de « Dernière mise à jour ».",
      "privacy.s11h": "11. Contact",
      "privacy.s11p":
        'Pour toute question relative à la confidentialité : <a href="mailto:privacy@brokies.app">privacy@brokies.app</a> ou via le <a href="contact.html">formulaire de contact</a>.',
    },
  };

  var currentLang = "en";

  function getStoredLang() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === "en" || s === "fr") return s;
    } catch (e) {}
    return null;
  }

  function detectInitialLang() {
    var stored = getStoredLang();
    if (stored) return stored;
    if (
      typeof navigator !== "undefined" &&
      navigator.language &&
      navigator.language.toLowerCase().indexOf("fr") === 0
    ) {
      return "fr";
    }
    return "en";
  }

  function t(key) {
    var table = STR[currentLang] || STR.en;
    var v = table[key];
    if (v !== undefined && v !== "") return v;
    v = STR.en[key];
    return v !== undefined ? v : key;
  }

  function setLangButtons(lang) {
    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function apply() {
    document.documentElement.setAttribute("lang", currentLang === "fr" ? "fr" : "en");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var value = t(key);
      var tag = el.tagName;
      if (tag === "TITLE") {
        el.textContent = value;
        return;
      }
      if (tag === "META") {
        if (el.getAttribute("name") === "description") {
          el.setAttribute("content", value);
        }
        return;
      }
      if (tag === "IMG") {
        el.setAttribute("alt", value);
        return;
      }
      if (el.getAttribute("data-i18n-html") === "true") {
        el.innerHTML = value;
        return;
      }
      el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });

    var langGroup = document.getElementById("brokies-lang-group");
    if (langGroup) langGroup.setAttribute("aria-label", t("a11y.lang"));
    var navToggle = document.querySelector(".nav-toggle");
    if (navToggle) navToggle.setAttribute("aria-label", t("a11y.openMenu"));

    setLangButtons(currentLang);

    try {
      localStorage.setItem(STORAGE_KEY, currentLang);
    } catch (e) {}

    document.dispatchEvent(
      new CustomEvent("brokies:langchange", { detail: { lang: currentLang } })
    );
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "fr") return;
    currentLang = lang;
    apply();
  }

  function init() {
    currentLang = detectInitialLang();
    apply();

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang) setLang(lang);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.BrokiesI18n = {
    t: t,
    setLang: setLang,
    getLang: function () {
      return currentLang;
    },
  };
})();
