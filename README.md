# Matematikai igazságtábla készítő

## Bemenet

A `main.js` bemenete az 1. sorban lévő `input` változó. Itt a nagybetűk a változók (`A`, `B`...) és a kisbetűk a műveleti jelek.

Elérhető műveleti jelek:
* `n` - negáció
* `o` - megengedő vagy
* `x` - kizáró vagy
* `a` - és
* `i` - implikáció
* `e` - ekvivalencia
* `(` és `)` - a zárójelek a megszokott módon működnek, minden `(`-hez kell egy `)` is

Helyes bemenetek: `AonBxC`, `XaYo(nZiX)`...

Helytelen bemenetek: `oAaB` (a `vagy` nem értelmezhető), `AnBoC` (a negáláshoz csak egy változó kell)

## Web

A program megtalálható [ezen](https://igazsagtabla.buildupvr.com) a weboldalon. Ez hasonlóan működik az előző programhoz, csak a műveletek jelei változtak meg a matematikában elfogadott jelölésekre (az előző jelölések is működnek még).