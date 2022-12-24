# Izieval (FR)
Project Izieval

## Tables des matières

1. Introduction au projet
2. Les élements
3. Fonctionnement
4. HTML
5. CSS
6. JS

---
## 1. Introduction au projet
Le projet est une application web qui a pour but de produire facilement des documents imprimable.

La demande est les professeurs en titularisation ou récement titularisés.

---
## 2. Les élements
Le projet fonctionne avec des blocs (div) : 

> ***Main*** = Le bloc regroupe tous les élements, il est celui qui servira de réfèrence à la préparation d'impression.

> ***TablesContainer*** = Le bloc contient les containerItems, celui ci est ajustable en hauteur et en largeur et positionnable à gauche, droite et au centre. Les TablesContainers ont pour but de positionner les élements sur la page. Ils possèdent deux boutons pour ajuster la valeur **col**, une liste déroulante pour changer la valeur **align-items** et une seconde liste déroulante pour changer la valeur **justify-content**


```html
Exemple :

<div id="tableContainer-P" class="tableContainer row col-K align-items-start justify-content-around">

</div>
```
**M** peut dont varier de 1 à 12

**align-items** peut prendre : ***start / end / center / baseline / stretch***

**justify-content** peut prendre : ***start / end / center / between / around***

Il est aussi possible d'ajouter une variation automatique de l'affichage selon l'échelle de l'écran tel que :
***sm / md / lg / xl***

[Documentation officiel de bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

> ***ContainerItems*** = Le bloc contient les items, celui ci est ajustable en largeur et positionnable à gauche, droite et au centre. Ils possèdent deux boutons pour ajuster la valeur **col** comme le bloc **TablesContainer**.

```html
<div id="containerItem-N" class="col-M containerItems" ondrop="drop(event)">

</div>
```
La fonction **drop(event)** permet de gérer le drag and click du container. Un *item* peut y être drop.


> ***Items*** = Le bloc contient les différents composants d'un item.
```html
Exemple : 

<div id="card1" class="item-container card text-center">
    <div class="card-header">
        header
    </div>
    <div id="itemEmpty1" class="card-body droptarget" ondrop="drop(event)">
        <h5 class="card-title">carte vide</h5>
        <p class="card-text">Ajouter un composant</p>
        <button type="button" class="btn btn-primary" onclick="createTextCard(even)"></button>
    </div>
    <div class="card-footer text-muted">
        footer
    </div>
</div>
```
Dans cet exemple l'***item*** est une ***card*** du framework bootstrap.