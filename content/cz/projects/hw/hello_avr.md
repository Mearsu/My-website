---
title: Můj první AVR projekt
description: Rozhodl jsem se zkusit si něco s mikropočítačem AVR, a tak jsem pomocí něj vypsal zprávu na LCD displej.
img: /hw/p1/avr_hello_world.jpg
btn1: "Schéma"
btn1_href: "/"
btn1_nuxtlink: ""
btn2: false
---
# Můj první AVR projekt 

Nápad koupit si AVR čip a něco s ním zkusit jsem dostal, když jsem si kupoval věci na jinej projekt a uviděl jsem programátor na AVR čipy. Přidal jsem ho společně se třemi ATmega8L do košíku a za pár dní jsem je měl v ruce.
Proč ATmega8? protože to byl první levný AVR čip, co jsem uviděl.
Momentálně je chcu použít na jiný projekt, ale ten bude složitější, tak jsem se rozhodl zkusit vypsat text na LCD, protože to se také bude hodit.
Zapojil jsem napájení a na I/O pin PD0 LED diodu a napsal jednoduchý program, který s ní bude blikat, jen, aby jsem si ověřil, že vše funguje jak má, než se budu vrhat do něčeho složitějšího.

Zapojil jsem ho podle tohohle schéma:
:toggle_embed{src="/hw/p1/avr.pdf"}
