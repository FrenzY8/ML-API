# Simple MLBB APi
APi simple untuk informasi Mobile Legends, di ambil dari Liquipedia 😃.

# Information Collected
- Hero ⚔️
  - Stats
  - Price
  - Winrate in Proscene
  - Lore
  - etc.
- Items 🧑‍🔧
  - Price
  - Passive
  - Tips
  - etc.
- Pro Player 👨‍🏫
  - Name
  - Real Name
  - Team
  - Sallary
  - Expert Hero
  - etc.

# Route
> **Main Route**:
- **Landing**
- https://ml-api-en.vercel.app/api/
- **Hero**
- https://ml-api-en.vercel.app/api/mlbb?hero=
- **Items**
- https://ml-api-en.vercel.app/api/mlbb-items?name=

# Setup Your APi
- **Install**
- ```npm install```
- **Run it with:**
  - ```npm start```
  - ```node src/index.js```
- **Or deploy it on Vercel!**
> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/FrenzY8/ML-API)

# **Pro Player**
- ```/api/mlbb-pro?name=PRO_NAME```
- Query: ```name```
- **Test it now**: [Here](https://ml-api-en.vercel.app/api/mlbb-pro?name=Kairi)
```json
{
  "Name": "Gilang",
  "Nationality": "Indonesia",
  "Born": "July 22, 2002 (age 22)",
  "Status": "Active",
  "Role": "Mid Laner",
  "Team": "Fnatic ONIC",
  "Expert Hero": [
    "Pharsa",
    "Valentina",
    "Lylia",
    "Kadita",
    "Novaria"
  ],
  "Social Media": {
    "Instagram": "https://www.instagram.com/p/DClEXinzGGQ/?img_index=4&igsh=MTNsa3F2M3hrZW9paw==",
    "TikTok": "https://tiktok.com/@gilang_sanz",
    "YouTube": "https://www.youtube.com/channel/UCVHRjymdEIozj5LwncO2sSw"
  },
  "Trophies": [
    "MPL ID S8 Champion",
    "MPL ID S8 Champion",
    "MPL ID S10 Champion",
    "MPL ID S10 Champion",
    "MPL ID S11 Champion",
    "MPL ID S11 Champion",
    "MSC 2023",
    "MSC 2023",
    "MPL ID S12 Champion",
    "MPL ID S12 Champion",
    "MPL ID S13 Champion",
    "MPL ID S13 Champion",
    "MPL Indonesia Season 13",
    "Games of the Future 2024",
    "M5 World Championship",
    "MPL Indonesia Season 12",
    "Snapdragon Pro Series Season 3 SEA - Challenge Finals",
    "MLBB Southeast Asia Cup 2023",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 10",
    "ONE Esports MPL Invitational 2021",
    "MPL Indonesia Season 8",
    "MPL Indonesia Season 14",
    "MPL Indonesia Season 14",
    "MPL Indonesia Season 14",
    "MPL Indonesia Season 13",
    "MPL Indonesia Season 13",
    "H3RO Esports 5.0",
    "MPL Indonesia Season 13",
    "MPL Indonesia Season 13",
    "MPL Indonesia Season 13",
    "MPL Indonesia Season 13",
    "M5 World Championship",
    "MPL Indonesia Season 12",
    "MPL Indonesia Season 12",
    "MPL Indonesia Season 12",
    "MPL Indonesia Season 12",
    "MLBB Southeast Asia Cup 2023",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "ONE Esports MPL Invitational 2021",
    "MPL Indonesia Season 8",
    "MPL Indonesia Season 7",
    "MPL Indonesia Season 7",
    "MPL Indonesia Season 6",
    "MPL Indonesia Season 6",
    "MPL Indonesia Season 6",
    "MDL Indonesia Season 1"
  ],
  "Trivia": [
    "The only player to win both MPL Indonesia and MDL Indonesia as the main roster.",
    "Became the first player to have won MPL Indonesia four-peat (S10-S13). He achieved this together with his teammates Kairi, CW, and Kiboy on ONIC."
  ],
  "Statistics": [
    "Has 100% win rate with Fanny at MPL Indonesia Season 9. ( 6 win, 0 loss )",
    "Had the most appearance on Team of the week in MPL Indonesia Season 11 (4)",
    "Had the highest average damage per minute in M5 World Championship (3972) "
  ],
  "Pro Photo": "https://liquipedia.net/commons/images/d/d3/FNOC_Sanz_S14.png",
  "Alternate IDs": "SanzJago, Sanztuy, Sanz",
  "Approx. Total Winnings": "$221,615"
}
```
- **Name**: The player's full name, in this case, "Gilang."
- **Nationality**: The country the player is from, Indonesia.
- **Born**: The player's birthdate, July 22, 2002, and their current age (22 years old).
- **Status**: The player's current activity status in esports, which is "Active."
- **Role**: The player's main in-game role, here it is "Mid Laner."
- **Team**: The player's current esports team, "Fnatic ONIC."
- **Expert Hero**: The heroes that the player is known to excel with, including:
  - Pharsa
  - Valentina
  - Lylia
  - Kadita
  - Novaria
- **Social Media**: Links to the player's social media accounts:
  - Instagram: [Link](https://www.instagram.com/p/DClEXinzGGQ/?img_index=4&igsh=MTNsa3F2M3hrZW9paw==)
  - TikTok: [Link](https://tiktok.com/@gilang_sanz)
  - YouTube: [Link](https://www.youtube.com/channel/UCVHRjymdEIozj5LwncO2sSw)
  
- **Trophies**: A list of major tournaments and achievements the player has won, including:
  - MPL Indonesia Champion (multiple seasons)
  - MSC (Mobile Legends Southeast Asia Cup) Champion (2023)
  - M5 World Championship
  - Snapdragon Pro Series (SEA - Challenge Finals)
  - MLBB Southeast Asia Cup 2023
  - And many more MPL Indonesia and MDL Indonesia titles.

- **Trivia**:
  - "The only player to win both MPL Indonesia and MDL Indonesia as the main roster."
  - "Became the first player to have won MPL Indonesia four-peat (Seasons 10 to 13), together with teammates Kairi, CW, and Kiboy on ONIC."

- **Statistics**:
  - "Has a 100% win rate with Fanny at MPL Indonesia Season 9 (6 wins, 0 losses)."
  - "Had the most appearances on Team of the Week in MPL Indonesia Season 11 (4 times)."
  - "Had the highest average damage per minute in M5 World Championship (3972)."

- **Pro Photo**: A link to the player's professional photo: [Link](https://liquipedia.net/commons/images/d/d3/FNOC_Sanz_S14.png)
- **Alternate IDs**: Other names or gamer tags the player is known by: SanzJago, Sanztuy, Sanz.
- **Approx. Total Winnings**: The player's total estimated earnings from esports tournaments, which is approximately $221,615.

# **Hero Information**
- ```/api/mlbb?hero=HERO_NAME```
- Query: ```hero```
- **Test it now**: [Here](https://ml-api-en.vercel.app/api/mlbb?hero=Hanzo)

# Response:
```json
{
  "heroInfo": {
    "price": "32000   599",
    "lane": "Jungler",
    "heroType": "Assassin",
    "specialty": "Poke/Burst",
    "region": "Cadia Riverlands",
    "city": "Scalet Shadow",
    "quote": "\"Out of my way or get torn to pieces!\"",
    "resourceBar": "",
    "releaseDate": "2018-12-04",
    "voiceActor": "Kimura Ryohei",
    "winRate": "114W : 148L (43.51%)",
    "baseStats": {
      "health": "25947",
      "healthRegen": "7",
      "mana": "00",
      "manaRegen": "0",
      "physicalAttack": "108",
      "physicalDefense": "17",
      "magicPower": "0",
      "magicDefense": "15",
      "attackSpeed": "1.08100%",
      "attackSpeedRatio": "100%",
      "movementSpeed": "260"
    }
  },
  "relationships": [],
  "skillInfo": {
    "passive": "Hanzo When units are eliminated nearby, the Blood Demon absorbs their souls into its body into Demon Blood.\n\nHanzo gains 2 Demon Blood for each non-hero on death and 20 Demon Blood if it's a hero.",
    "skill_1_description": "Every 5 basic attacks by Hanzo (temporarily unlocks) this ability for 6.5s.\n\nHanzo uses Ame no Habakiri to devour a target and digest them over a period of time. By doing so Hanzo gets 10 Demon Blood. (Can only be used against Minions and Creeps. Targeting Lord or Turtle deals 500 True Damage).",
    "skill_2_description": "Every 5 basic attacks by Hanzo temporarily unlocks this skill for 6.5s.\n\nHanzo burrows underground and lunges forward to attack enemies in a line, dealing 300(+60%Total, Physical Attack) and 15% of the target's max HP as Physical Damage, knocking them airborne and gaining 10 Demon Blood. (Damage reduced against non-hero units)",
    "skill_3_description": "Hanzo summons demonic spikes at the target location, dealing 160(+60%Total Physical Attack) immediate Physical Damage. \nIf an enemy is hit, the skill will strike again after 0.5 s, dealing 40(+15%Total Physical Attack) Physical Damage to targets in the area and slowing them by 40% until no target is hit or dealing additional damage for 8 times. Every unit hit grants him 1 Demon Blood."
  },
  "lores": {
    "title": "Lore of Hanzo, Akuma Ninja",
    "lore": "Long ago, the House of Akakage was hailed as the Gods of Ninja Arts. For generations, the Akakages researched and taught advanced ninjutsu. In order to achieve the pinnacle of ninja arts, the Akakages used forbidden ninjutsu to rid their hearts of evil, anger, and greed by condensing them into a demon called, Hanekage. No one expected that Hanekage would have consciousness despite lurking within their bodies."
  },
  "proPlayers": [
    "Xev"
  ]
}
```
- **Price**: Indicates the hero's in-game price, either 32000 in-game currency or 599 premium currency.
- **Lane**: The hero's primary lane or role, which is Jungler in this case.
- **Hero Type**: The category or class of the hero, here it's an Assassin.
- **Specialty**: Describes the hero's key strengths, which in this case are Poke (long-range harassment) and Burst (high-damage quick attacks).
- **Region**: The lore region where the hero originates from, Cadia Riverlands.
- **City**: The hero's home city in the lore, Scarlet Shadow.
- **Quote**: The hero’s signature quote: "Out of my way or get torn to pieces!"
- **Resource Bar**: The resource the hero uses (mana, energy, etc.), which is empty in this case.
- **Release Date**: The date the hero was released, December 4, 2018.
- **Voice Actor**: The voice actor for the hero, Kimura Ryohei.
- **Win Rate (Pro Scene)**: The hero’s win-loss ratio, showing 114 wins, 148 losses, and a 43.51% win rate.
- **Base Stats**:
  - **Health**: The hero’s base health points.
  - **Health Regen**: The rate at which the hero regenerates health.
  - **Mana**: Indicates the hero’s mana (0 here, meaning the hero doesn't use mana).
  - **Mana Regen**: The rate of mana regeneration (0 here).
  - **Physical Attack**: The hero’s base physical damage.
  - **Physical Defense**: The hero’s resistance to physical attacks.
  - **Magic Defense**: The hero’s resistance to magic attacks.
  - **Attack Speed**: The base speed at which the hero performs basic attacks.
  - **Attack Speed Ratio**: The percentage of attack speed compared to its base value.
  - **Movement Speed**: How fast the hero moves around the battlefield.

- **Relationships**: Lists other characters related to the hero (none provided here).
  
- **Skill Information**:
  - **Passive**: Hanzo's passive skill allows him to absorb Demon Blood from nearby enemies when they are eliminated. He gains 2 Demon Blood from non-hero units and 20 from hero kills.
  - **Skill 1 Description**: Every 5 basic attacks temporarily unlock this ability for 6.5 seconds. Hanzo devours a target, gaining 10 Demon Blood (can only target minions and creeps, but deals 500 True Damage to Lords or Turtles).
  - **Skill 2 Description**: Every 5 basic attacks temporarily unlock this skill for 6.5 seconds. Hanzo lunges forward in a line, dealing physical damage and knocking enemies airborne while gaining 10 Demon Blood.
  - **Skill 3 Description**: Hanzo summons spikes at a target location, dealing physical damage. If an enemy is hit, the spikes will strike again, and the attack repeats up to 8 times, slowing targets and gaining Demon Blood.

- **Lore**: The backstory of Hanzo, which explains how the Akakage clan created a demon named Hanekage by condensing their negative emotions. This demon, Hanekage, later gained consciousness.
  
- **Pro Players**: Lists professional players who are known to use this hero in **Pro Scene**, such as Xev.

# IN-Game Items
- ```/api/mlbb-items?name=Malefic Gun```
- Query: ```name```
- **Test it now**: [Here](https://ml-api-en.vercel.app/api/mlbb-items?name=Malefic_Gun)
# Response:
```json
{

  "price": "2050",
  "recipe": [
    "Regular Spear",
    "Legion Sword"
  ],
  "tips": "\"Best equipped by Physical heroes to reduce enemies' Regen effects (Heal, Shields or Lifesteal).\"",
  "applications": "Lifebane can be applied to targets through Basic Attacks, damaging Talent Effects, damaging Skills (except for  Minsitthar's  King's Calling Royal Guard Attacks) and from damaging Item effects.",
  "description": "Sea Halberd is a Tier 3 Attack equipment",
  "Attack Speed": "+ 20%",
  "Physical Attack": "+ 80",
  "Passive": "Lifebane\nPunish"
}
```

- **Price**: The cost of the item in the game currency, showing how much it costs to purchase.
- **Recipe**: Lists the items required to build or craft this item. It shows the components needed to combine into the final item.
- **Tips**: Provides guidance on how the item should be used, including which types of heroes benefit most from it and the item’s effects in battle.
- **Applications**: Explains how the item’s passive effect (Lifebane) is applied, including through basic attacks, damaging skills, or item effects.
- **Description**: A short description of the item, indicating its tier and classification (e.g., Tier 3 Attack item).
- **Attack Speed**: Shows the percentage increase in attack speed the item provides to the hero.
- **Physical Attack**: Indicates the amount of physical attack power the item grants to the hero.
- **Passive**: Describes the passive ability of the item (Lifebane/Punish), which activates automatically when certain conditions are met.

# Collected from [Liquipedia](https://liquipedia.net/mobilelegends/Main_Page)
