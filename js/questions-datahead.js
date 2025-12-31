const dataHeadQuestions = {
  1: {
    type: "mc",
    title: "Einfache Frage",
    text: "Warum wird die Basilisken-Eidechse Südamerikas auch Jesus-Christus-Eidechse genannt?",
    options: [
      "Das Männchen hat ein Kreuz auf dem Rücken", 
      "Es kann auf Wasser laufen", 
      "Sie hat einen bartartigen Kragen",
      "Ihre Eier schlüpfen um Weihnachten herum"
    ],
    answer: "Es kann auf Wasser laufen",
    explanation: "Die Basilisken-Eidechse kann über Wasser laufen, indem sie sich sehr schnell bewegt und dabei Luft- und Wasserwirbel erzeugt, die sie kurzzeitig über der Wasseroberfläche tragen."
  },

  2: {
    type: "simple",
    title: "Offene Frage",
    text: "Alfred Nobel verdiente ein Vermögen mit einer Erfindung, die ihn später dazu brachte, den Nobelpreis zu stiften. Um welche Erfindung handelte es sich?",
    answer: "Dynamit",
    explanation: "Alfred Nobel erfand Dynamit, womit er reich wurde und was ihn später dazu inspirierte, die Nobelpreise zu stiften."
  },

  3: {
    type: "mc",
    title: "multiple choice",
    text: "Von allen Tieren, mit denen Menschen Wettkämpfe veranstalten, welches ist das schnellste?",
    options: [
      "Greyhound",
      "Pferd",
      "Brieftaube",
      "Kamel"
    ],
    answer: "Brieftaube",
    explanation: "Brieftauben wurden mit Geschwindigkeiten von über 100 km/h gemessen. Pferde erreichen etwa 69 km/h, Greyhounds etwa 60 km/h und Kamele rund 20 km/h."
  },

  4: {
    type: "simple",
    title: "Offene Frage",
    text: "Wofür steht das „E“ in Einsteins berühmter Formel E = mc²?",
    answer: "Energie",
    explanation: "Energie ist gleich Masse mal der Lichtgeschwindigkeit zum Quadrat."
  },

  5: {
    type: "simple",
    title: "Offene Frage",
    text: "Welches Gesichtsmerkmal fehlt Leonardo da Vincis „Mona Lisa“?",
    answer: "Augenbrauen",
    explanation: "Zur Zeit der Renaissance in Florenz war es Mode, sich die Augenbrauen zu rasieren."
  },

  6: {
    type: "simple",
    title: "Offene Frage",
    text: "Welche Farbe hat der obere Rand eines Regenbogens?",
    answer: "Rot",
    explanation: "Violett ist die unterste Farbe des Regenbogens."
  },

  7: {
    type: "simple",
    title: "Offene Frage",
    text: "In welchem Jahr änderte die britische Königsfamilie ihren Namen von „Saxe-Coburg-Gotha“ zu welchem neuen Namen?",
    answer: "Windsor",
    explanation: "Während des Ersten Weltkriegs legte die Königsfamilie ihren deutschen Namen ab und wählte einen englischen."
  },

  8: {
    type: "simple",
    title: "Offene Frage",
    text: "Wie lautet in Shakespeares „Romeo und Julia“ der Nachname von Romeo?",
    answer: "Montague",
    explanation: "Julia gehörte zur Familie Capulet."
  },

  9: {
    type: "simple",
    title: "Offene Frage",
    text: "Das folgende Rätsel stammt aus „Der Hobbit“: „Eine Schachtel ohne Scharnier, ohne Schloss, ohne Deckel – doch goldenes Gut ist darin enthalten.“ Welches natürliche Lebensmittel ist die Lösung?",
    answer: "Ein Ei",
    explanation: "Bilbo stellt dieses Rätsel Gollum, der es korrekt mit „Eier“ beantwortet."
  },

  10: {
    type: "truefalse",
    title: "True or False",
    text: "In Neuseeland gibt es fünfmal so viele Schafe wie Menschen. WAHR oder FALSCH?",
    answer: "Falsch",
    explanation: "In Neuseeland gibt es etwa zehnmal so viele Schafe wie Menschen. Im Jahr 2002 lebten dort rund 40 Millionen Schafe und nur vier Millionen Menschen."
  },

  11: {
    type: "truefalse",
    title: "True or False",
    text: "Braune Eier sind nachweislich nährstoffreicher als weiße Eier. WAHR oder FALSCH?",
    answer: "Falsch",
    explanation: "Die Farbe der Eierschale hängt von der Hühnerrasse ab. Nährstoffmäßig gibt es keinen Unterschied."
  },

  12: {
    type: "truefalse",
    title: "True or False",
    text: "In Australien darf ein Mann die Schwester seiner Witwe heiraten. WAHR oder FALSCH?",
    answer: "Falsch",
    explanation: "Wenn ein Mann eine Witwe hat, ist er bereits tot und kann niemanden heiraten."
  },

  13: {
    type: "truefalse",
    title: "True or False",
    text: "Du stehst am Heck eines Segelschiffs und blickst auf die Heckwelle. Backbord ist auf deiner rechten Seite. WAHR oder FALSCH?",
    answer: "Wahr",
    explanation: "Backbord ist normalerweise die linke Seite des Schiffs. Da du jedoch am Heck stehst und nach hinten blickst, befindet sich Backbord auf deiner rechten Seite."
  },

  14: {
    type: "mc",
    title: "",
    text: "Wer war in der römischen Mythologie der Gott des Weines?",
    options: [
      "Apollo",
      "Herakles",
      "Bacchus",
      "Coolabris"
    ],
    answer: "Bacchus",
    explanation: "Bacchus war in der griechisch-römischen Mythologie auch als Dionysos bekannt."
  },

  15: {
    type: "mc",
    title: "Multiple Choice",
    text: "Welcher Prophet des Alten Testaments forderte die Propheten Baals auf dem Berg Karmel heraus?",
    options: [
      "Elisa",
      "Elija",
      "Jesaja",
      "Jeremia"
    ],
    answer: "Elija",
    explanation: "Er ließ Feuer vom Himmel herabkommen, um zu beweisen, dass der Herr Gott ist (1. Könige 18)."
  },

  16: {
    type: "truefalse",
    title: "True or False",
    text: "Rettungskräfte geben dehydrierten Buschwanderern eine Rehydrierungslösung mit einem pH-Wert von 1 oder weniger. WAHR oder FALSCH?",
    answer: "Falsch",
    explanation: "Eine Flüssigkeit mit einem pH-Wert von 1 oder weniger wäre extrem sauer und tödlich. Reines Wasser hat einen pH-Wert von 7."
  },

  17: {
    type: "simple",
    title: "Offene Frage",
    text: "Auf welchen zwei Insekten basiert das berühmte Motto welcher amerikanischen Sportlegende? 🐝🦋",
    answer: "Muhammad Ali",
    explanation: "Alis berühmtes Motto lautete: „Schwebe wie ein Schmetterling, stich wie eine Biene.“"
  },

  18: {
    type: "mc",
    title: "Multiple Choice",
    text: "Wem wird die Erfindung des ersten gefrorenen Desserts zugeschrieben?",
    options: [
      "Kaiser Nero",
      "Arthur Sorbet",
      "Napoleon",
      "Eskimos/Inuit"
    ],
    answer: "Kaiser Nero",
    explanation: "Neros Dessert bestand aus Fruchtmark, Honig und Schnee, der von Sklaven aus den Bergen geholt wurde. Nero war römischer Kaiser von 54 bis 68 n. Chr."
  },

  19: {
    type: "mc",
    title: "Multiple Choice",
    text: "Obwohl schwere Unterkühlung einen Krankenhausaufenthalt erfordert, kann leichte Unterkühlung mit allem außer einer der folgenden Maßnahmen behandelt werden:",
    options: [
      "Bereitstellung eines warmen, trockenen Unterschlupfs",
      "Erwärmen von Fingern und Zehen am Feuer",
      "Ein süßes, lauwarmes Getränk",
      "Trockene Kleidung anziehen"
    ],
    answer: "Erwärmen von Fingern und Zehen am Feuer",
    explanation: "Ein zu schnelles Erwärmen der Extremitäten kann einen sogenannten „Afterdrop“ verursachen, bei dem die Körperkerntemperatur weiter absinkt."
  },

  20: {
    type: "truefalse",
    title: "True or False",
    text: "Marie Curie starb ironischerweise an einem Virus, den sie während ihrer Arbeit an der Pasteurisierung zu bekämpfen versuchte. WAHR oder FALSCH?",
    answer: "Falsch",
    explanation: "Marie Curie, die 1898 Radium entdeckte, starb 1934 an Leukämie infolge jahrelanger Strahlenbelastung."
  }
};
