const isOk = 
[
    "Lauryl Methicone Copolyol",
    "Lauryl PEG/PPG-18/18 Methicone",
    "Cocamidopropyl Betaine",
    "Coco Betaine",
    "Cocamidopropyl Hydroxysultaine",
    "Lauryl Hydroxysultaine",
    "Sodium Cocoamphoacetate or Sodium Lauroamphoacetate",
    "Lauryl alcohol",
    "Cetyl alcohol",
    "Myristyl alcohol",
    "Stearyl alcohol",
    "Cetearyl alcohol",
    "Behenyl alcohol",
    "Behentrimonium Methosulfate",
    "Behentrimonium Chloride",
    "Dicetyldimonium Chloride",
    "Distearyldimonium Chloride",
    "Polyquaternium 55",
    "Cetrimonium Bromide",
    "ammonium cocoyl isethionate",
    "babassuamidopropyl betaine",
    "capryl glucoside",
    "caprylyl glucoside",
    "cocamidopropyl betaine",
    "cocamidopropyl hydroxysultaine",
    "coco betaine",
    "coco glucoside",
    "decyl glucoside",
    "decyl polyglucose",
    "disodium 2-sulfolaurate",
    "disodium cocoamphodiacetate",
    "disodium cocoamphodipropionate",
    "disodium laureth succinate",
    "disodium laureth sulfosuccinate",
    "disodium lauryl sulfosuccinate",
    "lauryl glucoside",
    "lauryl hydroxysultaine",
    "sodium cocoamphoacetate",
    "sodium cocoyl isethionate",
    "sodium lauroamphoacetate",
    "sodium lauroyl glutamate",
    "sodium lauroyl hydrolyzed silk",
    "sodium lauroyl lactylate",
    "sodium lauroyl oat amino acids",
    "sodium lauryl glucose carboxylate",
    "sodium laurylglucosides hydroxypropylsulfonate",
    "sodium methyl 2-sulfolaurate",
    "sodium methyl cocoyl taurate",
    "cocamidopropyl betaine",
    "coco betaine",
    "cocamidopropyl hydroxysultaine",
    "lauryl hydroxysultaine",
    "sodium cocoamphoacetate",
    "sodium lauroamphoacetate",
    "ammonium cocoyl isethionate",
    "babassuamidopropyl betaine",
    "capryl glucoside",
    "caprylyl glucoside",
    "coco glucoside",
    "decyl glucoside",
    "decyl polyglucose",
    "disodium 2-sulfolaurate",
    "disodium cocoamphodiacetate",
    "disodium cocoamphodipropionate",
    "disodium laureth succinate",
    "disodium laureth sulfosuccinate",
    "disodium lauryl sulfosuccinate",
    "lauryl glucoside",
    "lauryl alcohol",
    "cetyl alcohol",
    "myristyl alcohol",
    "stearyl alcohol",
    "cetearyl alcohol",
    "behenyl alcohol",
];

const isNotOk =
[
    "alkyl benzene sulfonate",
    "alkylbenzene sulfonate",
    "ammonium cocoyl sulfate",
    "ammonium cocoyl sulphate",
    "ammonium laureth sulfate",
    "ammonium laureth sulphate",
    "ammonium lauryl sulfate",
    "ammonium lauryl sulphate",
    "ammonium xylene-sulfonate",
    "ammonium xylenesulfonate",
    "ethyl peg-15 cocamine sulfate",
    "sodium alkyl sulfate",
    "sodium alkyl sulphate",
    "sodium c12-18 alkyl sulfate",
    "sodium c12-18 alkyl sulphate",
    "sodium cetearyl sulfate",
    "sodium cetearyl sulphate",
    "sodium coceth sulfate",
    "sodium coceth sulphate",
    "sodium coco sulfate",
    "sodium coco sulphate",
    "sodium coco-sulfate",
    "sodium coco-sulphate",
    "sodium cocosulfate",
    "sodium cocosulphate",
    "sodium laureth sulfate",
    "sodium laureth sulphate",
    "sodium laureth-40 sulfate",
    "sodium laureth-40 sulphate",
    "sodium lauryl sulfate",
    "sodium lauryl sulphate",
    "sodium myreth sulfate",
    "sodium myreth sulphate",
    "sodium polystyrene sulfate",
    "sodium polystyrene sulphate",
    "sodium xylene-sulfonate",
    "sodium xylenesulfonate",
    "tea dodecylbenzenesulfonate",
    "tea lauryl sulfate",
    "tea lauryl sulphate",
    "tea-dodecylbenzenesulfonate",
    "triethanolamine lauryl sulfate",
    "triethanolamine lauryl sulphate",
    "Amodimethicone",
    "Aminopropyl triethoxysilane",
    "Behenoxy Dimethicone Cetearyl methicone",
    "Bis-Amino PEG/PPG-41/3 Aminoethyl PG-Propyl Dimethicone",
    "Bis-Aminopropyl Dimethicone",
    "Bis-Cetearyl Amodimethicone",
    "Bis-isobutyl Peg/Ppg-20/35/Amodimethicone Copolymer",
    "Bis-Phenylpropyl Dimethicone",
    "Bis-Hydroxy/Methoxy Amodimethicone",
    "Cetyl Dimethicone",
    "Cetyl PEG/PPG-15/15 Butyl Ether Dimethicone",
    "Cyclomethicone",
    "Cyclopentasiloxane",
    "Cyclopentasiloxane", 
    "C30-45 Alkyl Cetearyl Dimethicone Crosspolymer Cyclohexasiloxane",
    "Dimethicone/Vinyldimethicone Crosspolymer",
    "Dimethicone",
    "Divynildimethicone/Dimethicone Copolymer",
    "Dimethicone Propyl PG-Betaine",
    "Dimethiconol",
    "Dimethiconol meadowfoamate",
    "Di-Isostearoyl Trimethylolpropane Siloxy Silicate",
    "Dimethicone",
    "Diphenyl Dimethicone",
    "Disiloxane",
    "Trimethylsiloxysilicate",
    "PCA Dimethicone",
    "Phenyl Trimethicone",
    "Phenylpropyldimethylsiloxysilicate",
    "Polysilicone-18 Cetyl Phosphate",
    "Silicone Quaternium-16",
    "Silicone Quaternium-18",
    "Silicone Quaternium-22",
    "Silicone Resin Spheres",
    "Simethicone",
    "Simethicone Stearoxy (or Stearyl) Dimethicone",
    "Trimethyl Silylamodimethicone",
    "Trimethylsiloxyamodimethicone",
    "Trimethylsiloxysilicate",
    "Trisiloxane",
    "Hexamethyldisiloxane",
    "Alkyl Benzene Sulfonate",
    "Ammonium or Sodium Xylenesulfonate",
    "Ethyl PEG-15 Cocamine Sulfate",
    "Sodium C14-16 Olefin Sulfonate",
    "TEA-Dodecylbenzenesulfonate",
    "Sodium Cocoyl Sarcosinate",
    "Sodium Laureth", 
    "Sodium Myreth", 
    "Lauryl Sulfate",
    "Ammonium Laureth or Lauryl Sulfate",
    "Sodium Lauryl Sulfoacetate",
    "Dioctyl Sodium Sulfosuccinate",
    "Sodium Xylenesulfonate",
    "Denatured alcohol",
    "Ethanol",
    "Isopropanol",
    "Isopropyl alcohol (also called IPA)",
    "Propanol",
    "Propyl alcohol",
    "SD alcohol 40",
    "Petroleum",
    "Mineral Oil (paraffinum liquidum)",
    "Sodium C14-16 Olefin Sulfonate",
    "Ammonium Laureth or Lauryl Sulfate",
    "Alkyl Benzene Sulfonate",
    "Ammonium or Sodium Xylenesulfonate",
    "Ethyl PEG-15 Cocamine Sulfate",
    "TEA-Dodecylbenzenesulfonate",
    "Sodium Cocoyl Sarcosinate",
    "Sodium Lauryl Sulfoacetate",
    "Dioctyl Sodium Sulfosuccinate",
    "Sodium Xylenesulfonate",
    "Amodimethicone",
    "Dimethicone",
    "Dimethiconol",
    "Cyclomethicone",
    "Cyclopentasiloxane",
    "Behenoxy Dimethicone",
    "Bis-aminopropyl dimethicone",
    "Cetearyl Methicone",
    "Cetyl Dimethicone",
    "Phenyl trimethicone",
    "Stearyl Dimethicone",
    "Trimethylsilylamodimethicone",
    "Denatured alcohol",
    "Ethanol",
    "Isopropanol",
    "Propanol",
    "Propyl alcohol",
    "SD alcohol 40",
    "Bees wax",
    "Candelilla wax",
    "paraffinum liquidum",
];