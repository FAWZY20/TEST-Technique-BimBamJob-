La société BimBamJob développe une tondeuse à gazon automatique capable de tondre des
surfaces rectangulaires
(La tondeuse peut être programmée pour parcourir l'intégralité de la surface.)


DESCRIPTION :

La pelouse est divisée en grilles pour simplifier la navigation.
La position de la tondeuse est représentée par :
## une combinaison de coordonnées (x,y)
## d'une lettre indiquant l'orientation selon la notation cardinale anglaise (N,E,W,S).
## Par exemple, la position de la tondeuse peut être « 0, 0, N », ce qui signifie qu'elle se
situe dans le coin inférieur gauche de la pelouse, et orientée vers le Nord.
Pour contrôler la tondeuse, on lui envoie une simple séquence de lettres. Les lettres possibles
sont « R », « L » et « F ».
● « R » et « L » font pivoter la tondeuse de 90° à droite ou à gauche respectivement, sans
la déplacer.
● « F » signifie que l'on avance la tondeuse d'une case dans la direction à laquelle elle fait
face, et sans modifier son orientation.
● Si la position après mouvement est en dehors de la pelouse, la tondeuse ne bouge pas,
conserve son orientation et traite la commande suivante.
● On assume que la case directement au Nord de la position (x, y) a pour coordonnées (x,
y+1).
Pour programmer la tondeuse, elle doit lire un fichier au format .txt construit comme suit :
● La première ligne correspond aux coordonnées du coin supérieur droit de la pelouse,
celles du coin inférieur gauche sont supposées être (0,0)
● La suite du fichier permet de piloter toutes les tondeuses qui ont été déployées. Chaque
tondeuse a deux lignes la concernant :
○ La première ligne donne la position initiale de la tondeuse, ainsi que son
orientation. La position et l'orientation sont fournies sous la forme de 2 chiffres et
une lettre, séparés par un espace
○ La seconde ligne est une série d'instructions ordonnant à la tondeuse d'explorer
la pelouse. Les instructions sont une suite de caractères sans espaces.
Chaque tondeuse se déplace de façon séquentielle, ce qui signifie que la seconde tondeuse ne
bouge que lorsque la première a exécuté intégralement sa série d'instructions.
Lorsqu'une tondeuse achève une série d'instructions, elle affiche sa position et son orientation.
OBJECTIF :
Concevoir et écrire un programme utilisant ReactJs, implémentant la spécification ci-dessus et
passant le test ci-après.
TEST :
Le fichier .txt suivant à lire :
55
44 S
LFRRFFLFRFF
22 N
FFRLLRFRLF
On attend les positions finales suivantes :
Pour la tondeuse 1 [1, 3] et orientation W
Pour la tondeuse 2 [2, 5] et orientation N
