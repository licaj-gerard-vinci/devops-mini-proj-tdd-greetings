# devops-mini-proj-tdd-greetings
# Group : Ahdid Nadir,Licaj Gerard

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
Le workflow est automatiquement déclenché à chaque pull request sur la branche principale (main).

Le fichier YAML inspecte le code Node.js à partir du dépôt, puis configure l'environnement Node.js. Les dépendances Node.js sont installées, et l'heure de démarrage de la pipeline est enregistrée.

Par la suite, les tests de couverture (Coverage tests) sont exécutés. L'application est construite, et l'heure de la fin de la pipeline est affichée. Un message de confirmation atteste que la pipeline s'est déroulée sans rencontrer d'erreurs.Le workflow est automatiquement déclenché à chaque pull request sur la branche principale (main).

Le fichier YAML inspecte le code Node.js à partir du dépôt, puis configure l'environnement Node.js. Les dépendances Node.js sont installées, et l'heure de démarrage de la pipeline est enregistrée.

Par la suite, les tests de couverture (Coverage tests) sont exécutés. L'application est construite, et l'heure de la fin de la pipeline est affichée. Un message de confirmation atteste que la pipeline s'est déroulée sans rencontrer d'erreurs.
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Le paramètre "on" dans le fichier YAML définit le déclenchement du flux de travail. Dans notre configuration, le flux de travail est activé lorsqu'une pull request est ouverte.

Si nous utilisons "on push", le flux de travail sera déclenché à chaque nouveau commit poussé vers la branche spécifiée. En revanche, avec "on pull request", le flux de travail s'active lorsqu'une pull request est ouverte ou mise à jour.

Nous recommandons l'utilisation de "on pull request" car cela permet de tester les modifications avant leur fusion. En adoptant cette approche, on évite l'intégration de code incorrect ou non testé dans la branche principale, ce qui contribue à maintenir la stabilité du projet.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
Le paramètre "run" dans notre configuration permet de définir les commandes spécifiques à exécuter lors de l'étape du workflow. Ces commandes déterminent les actions ou les tâches à accomplir à ce stade.

D'autre part, le paramètre "runs-on" est utilisé pour spécifier l'environnement d'exécution dans lequel ces commandes seront exécutées. Dans notre cas, "runs-on: ubuntu-latest" indique que les commandes définies dans la section "run" seront exécutées dans un environnement basé sur la dernière version d'Ubuntu.

Ainsi, cette combinaison permet de définir à la fois les actions à entreprendre et l'environnement spécifique dans lequel ces actions seront réalisées au sein de notre pipeline.
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
Le paramètre "use" dans notre configuration de pipeline permet d'incorporer une action préexistante dans le flux de travail. Cette action, définie par "uses: actions/checkout@v2", est réutilisable et provient du référentiel d'actions GitHub. En l'occurrence, il s'agit de l'action "checkout" de la version "v2".

D'autre part, le paramètre "run" est utilisé pour spécifier les commandes spécifiques à exécuter au sein d'une étape du workflow. Ces commandes définissent les actions ou les tâches à accomplir à ce stade particulier du flux de travail.

Ainsi, la combinaison de "use" et "run" nous permet d'intégrer des actions prédéfinies pour certaines tâches (comme le checkout du code source) tout en ayant la flexibilité d'inclure des commandes personnalisées pour d'autres aspects du processus.
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Certaines étapes de notre processus peuvent être échangées ou interverties sans affecter le résultat final, car elles sont indépendantes les unes des autres. Cependant, toutes les étapes ne sont pas flexibles à cet égard. Par exemple, il n'est pas possible d'intervertir l'heure de début et de fin, car cela fausserait les résultats temporels. De même, le processus de construction (build) ne peut pas être interverti, car il dépend du succès des étapes préalables telles que la correction de format et les tests. En respectant cette séquence, nous nous assurons que chaque étape contribue de manière cruciale à la progression et à la réussite du processus global.
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
L'intégration de secure_app nécessite quelques étapes simples. Tout d'abord, assurez-vous d'installer le programme sur votre système. Ensuite, ajoutez l'information appropriée dans le fichier package.json de votre projet. Enfin, complétez le processus en ajoutant une étape dédiée dans votre pipeline, de manière similaire à ce que vous avez déjà fait tout au long de ce deuxième projet. Consultez la documentation pour des instructions détaillées, car toutes les informations nécessaires sont déjà fournies.
```
