const express = require("express");
const axios = require("axios");
const https = require("https");
const router = express.Router();
const cheerio = require('cheerio');

// HEROES LIST + ICON
router.get("/hero-list", async (req, res) => {
  const url = 'https://mobile-legends.fandom.com/wiki/List_of_heroes';
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const heroes = [];
    $('.wikitable tbody tr').each((i, element) => {
      const icon = $(element).find('td:nth-child(1) img').attr('data-src');
      const heroName = $(element).find('td:nth-child(2)').text().trim();
      const heroOrder = $(element).find('td:nth-child(3)').text().trim();
      const role = $(element).find('td:nth-child(4) a').map((i, el) => $(el).text()).get().join('/');
      const specialty = $(element).find('td:nth-child(5) a').map((i, el) => $(el).text()).get().join('/');
      const laneRecommendation = $(element).find('td:nth-child(6) a').text().trim();
      const region = $(element).find('td:nth-child(7) a').text().trim();
      const price = $(element).find('td:nth-child(8) li').map((i, el) => $(el).text().trim()).get().join(', ');
      const releaseDate = $(element).find('td:nth-child(9)').text().trim();
      // Push the data into the heroes array
      heroes.push({
        icon,
        heroName,
        heroOrder,
        role,
        specialty,
        laneRecommendation,
        region,
        price,
        releaseDate,
      });
    });
    heroes.pop();
    heroes.shift();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Hero-List" });
  }
});

// PATCH
router.get("/mlbb-patch", async (req, res) => {
  const url = 'https://liquipedia.net/mobilelegends/Portal:Patches';
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const patches = [];
    $('table.wikitable tbody tr').each((index, element) => {
    const version = $(element).find('td:nth-child(1) a').text().trim(); // Patch Version
    const releaseDate = $(element).find('td:nth-child(2)').text().trim(); // Release Date
    const changeLogs = $(element).find('td:nth-child(3)').text().trim(); // Changelogs
    if (version && releaseDate) {
      patches.push({ version, releaseDate, changeLogs });
    }
    });
    res.json(patches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch PATCHES" });
  }
});

// MLBB PROPLAYER
router.get("/mlbb-pro", async (req, res) => {
  const name = req.query.name || "Kairi";
  const url = 'https://liquipedia.net/mobilelegends/' + name;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const statisticsSection = $('#Statistics');
    const statisticsItems = [];
    statisticsSection.closest('h2').next('ul').find('li').each((index, element) => { statisticsItems.push($(element).text().trim().replace('[1]', '')); });
    
    const triviaSection = $('#Trivia');
    const triviaListItems = [];
    triviaSection.closest('h2').next('ul').find('li').each((index, element) => {
      // triviaListItems.push($(element).text().trim());
      triviaListItems.push($(element).text().trim().replace('[1]', ''));
    });
    
    const heroNames = [];
    $('div[style="width:50%"] a').each((index, element) => {
    const heroName = $(element).attr('title');
    if (heroName) {
      heroNames.push(heroName);
    }
    });
    
    const images = [];
    $('img[width="600"][height="600"]').each((index, element) => {
    const imgSrc = $(element).attr('src');
    images.push(imgSrc);
    });
    
    const currentPhoto = images.slice(1);
    const masterHero = heroNames.slice(4);
    const trophies = [];
    $('span.league-icon-small-image a').each((i, el) => {
      const trophyName = $(el).attr('title');
      if (trophyName) {
        trophies.push(trophyName);
      }
    });
    
    const socialLinks = {};
    $('a.external').each((i, el) => {
      const href = $(el).attr('href');
      if (href) {
        if (href.includes('instagram')) {
          socialLinks['Instagram'] = href;
        } else if (href.includes('tiktok')) {
          socialLinks['TikTok'] = href;
        } else if (href.includes('youtube')) {
          socialLinks['YouTube'] = href;
        }
      }
    });
    
    const name = $('div.infobox-cell-2.infobox-description')
      .filter((i, el) => $(el).text().trim() === 'Name:')
      .next()
      .text()
      .trim();

    const nationality = $('div.infobox-cell-2.infobox-description')
      .filter((i, el) => $(el).text().trim() === 'Nationality:')
      .next()
      .text()
      .trim()
      .split(' ')[0];

    const born = $('div.infobox-cell-2.infobox-description')
      .filter((i, el) => $(el).text().trim() === 'Born:')
      .next()
      .text()
      .trim();

    const status = $('div.infobox-cell-2.infobox-description')
      .filter((i, el) => $(el).text().trim() === 'Status:')
      .next()
      .text()
      .trim();

    const role = $('div.infobox-cell-2.infobox-description')
      .filter((i, el) => $(el).text().trim() === 'Role(s):')
      .next()
      .text()
      .trim();

    const team = $('div.infobox-cell-2.infobox-description')
      .filter((i, el) => $(el).text().trim() === 'Team:')
      .next()
      .text()
      .trim();

    const alternateIDs = $('div.infobox-cell-2.infobox-description')
      .filter((i, el) => $(el).text().trim() === 'Alternate IDs:')
      .next()
      .text()
      .trim();

    const totalWinnings = $('div.infobox-cell-2.infobox-description')
      .filter((i, el) => $(el).text().trim() === 'Approx. Total Winnings:')
      .next()
      .text()
      .trim();
      
    const playerData = {
      "Name": name || 'N/A',
      "Nationality": nationality || 'N/A',
      "Born": born || 'N/A',
      "Status": status || 'N/A',
      "Role": role || 'N/A',
      "Team": team || 'N/A',
      "Expert Hero": masterHero,
      "Social Media": socialLinks,
      "Trophies": trophies,
      "Trivia": triviaListItems,
      "Statistics": statisticsItems,
      "Pro Photo": "https://liquipedia.net" + currentPhoto,
      "Alternate IDs": alternateIDs || 'N/A',
      "Approx. Total Winnings": totalWinnings || 'N/A'
    };
       res.json(playerData);
    } catch (error) {
       res.status(500).json({ error: "Failed to fetch MLBB PRO, or PRO PLAYER not found for: " + name });
    }
});

// MLBB ITEMS
router.get("/mlbb-items", async (req, res) => {
  const name = req.query.name || "Malefic Gun";
  const url = 'https://liquipedia.net/mobilelegends/' + name;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const itemData = {};
    let description = $("dl > dd").text().trim();
    const price = $(".placement-darkgrey").text().trim();
    itemData["price"] = price;

    const recipe = $(".infobox-center a img").map((i, el) => $(el).attr("alt")).get();
    recipe.splice(0, 2);
    itemData["recipe"] = recipe;        

    const pText = $("p").eq(1).text().trim();
    const liTexts = $("p").first().nextAll("li").map((i, el) => $(el).text().trim()).get();
    const tipsText = [pText, ...liTexts].join(" ");
    itemData["tips"] = tipsText;

    const appText = $("p").eq(2).text().trim();
    const liApp = $("p").eq(2).nextAll("li").map((i, el) => $(el).text().trim()).get();
    const textApp = [appText, ...liApp].join(" ");
    itemData["applications"] = textApp;

    if (description) {
      description = description.split(".")[0].trim(); // Avoid unwanted TEXT
      itemData["description"] = description;
    }
    
    $('div.infobox-cell-2.infobox-description').each((index, element) => {
      const descriptionKey = $(element).text().trim();
      const value = $(element).next('div').text().trim();
      const key = descriptionKey.replace(":", "").trim();
      if (key && value) {
        itemData[key] = value;
      }
    });

    res.json(itemData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch MLBB ITEMS, or items not found for: " + name });
  }
});

// ML HERO
router.get("/mlbb", async (req, res) => {
  const hero = req.query.hero || "Miya";
  const url = 'https://liquipedia.net/mobilelegends/' + hero;
  const urlLore = 'https://liquipedia.net/mobilelegends/' + hero + '/Lore';

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    let lores = { title: '', lore: '' };
    try {
      const responseLore = await axios.get(urlLore);
      const lore = cheerio.load(responseLore.data);
      const judul = lore('h1.firstHeading').text().trim();
      const cerita = lore('div.mw-parser-output p').first().text().trim();
      lores = {
        title: judul,
        lore: cerita || ''
      };
    } catch (loreError) {
      console.error('Failed to fetch lore for hero ' + hero, loreError);
    }

    const relationships = [];
    $('span#Relationships').parent().next('ul').find('li').each((index, element) => {
      const name = $(element).find('a').attr('title');
      const relation = $(element).text().split('—')[1]?.trim();
      const imgAlt = $(element).find('img').attr('alt');
      if (name && relation && imgAlt) {
        relationships.push({
          name: name,
          relation: relation,
        });
      }
    });

    const quote = $('div.infobox-center i').text().trim();
    const passiveDescription = $('div.spellcard-wrapper').first().find('.spellcard-description').first().text().trim();
    const skill1Description = $('div.spellcard-wrapper').eq(1).find('.spellcard-description').first().text().trim();
    const skill1Cooldown = $('div.spellcard-wrapper').eq(1).find('.spellcard-description').last().text().trim();
    const skill2Description = $('div.spellcard-wrapper').eq(2).find('.spellcard-description').first().text().trim();
    const skill2Cooldown = $('div.spellcard-wrapper').eq(2).find('.spellcard-description').last().text().trim();
    const ultimateDescription = $('div.spellcard-wrapper').eq(3).find('.spellcard-description').first().text().trim();
    const ultimateCooldown = $('div.spellcard-wrapper').eq(3).find('.spellcard-description').last().text().trim();

    const Role = $('div.infobox-cell-2.infobox-center img[alt]').first().attr('alt');
    const Lane = $('div.infobox-cell-2.infobox-center img[alt]').last().attr('alt');

    const skillInfo = {
      passive: passiveDescription,
      skill_1_description: skill1Cooldown,
      skill_2_description: skill2Cooldown,
      skill_3_description: ultimateCooldown
    };

    const specialties = [];
    $('div.infobox-cell-2:contains("Specialty")').nextAll().each((i, el) => {
      const text = $(el).text().trim();
      if (text) specialties.push(text);
    });
    const specialty = specialties.join(', ');

    const heroInfo = {
      name: hero,
      price: $('div.infobox-cell-2:contains("Price")').next().text().trim(),
      lane: $('div.infobox-cell-2:contains("Lane")').next().text().trim(),
      role: $('div.infobox-cell-2:contains("Role")').next().text().trim(),
      specialty: specialty,
      region: $('div.infobox-cell-2:contains("Region")').next().text().trim(),
      city: $('div.infobox-cell-2:contains("City")').next().text().trim(),
      quote: quote || "No quote.",
      resourceBar: $('div.infobox-cell-2:contains("Resource Bar")').next().text().trim(),
      releaseDate: $('div.infobox-cell-2:contains("Release Date")').next().text().trim(),
      voiceActor: $('div.infobox-cell-2:contains("Voice Actor(s)")').next().text().trim(),
      winRate: $('div.infobox-cell-2:contains("Win Rate")').next().text().trim(),
      baseStats: {
        health: $('div.infobox-cell-2:contains("Health")').next().text().trim() || $('div.infobox-cell-2:contains("HP")').next().text().trim(),
        healthRegen: $('div.infobox-cell-2:contains("Health Regen")').next().text().trim() || $('div.infobox-cell-2:contains("HP Regen")').next().text().trim(),
        mana: $('div.infobox-cell-2:contains("Mana")').next().text().trim(),
        manaRegen: $('div.infobox-cell-2:contains("Mana Regen")').next().text().trim(),
        physicalAttack: $('div.infobox-cell-2:contains("Physical Attack")').next().text().trim(),
        physicalDefense: $('div.infobox-cell-2:contains("Physical Defense")').next().text().trim(),
        magicPower: $('div.infobox-cell-2:contains("Magic Power")').next().text().trim(),
        magicDefense: $('div.infobox-cell-2:contains("Magic Defense")').next().text().trim(),
        attackSpeed: $('div.infobox-cell-2:contains("Attack Speed")').next().text().trim(),
        attackSpeedRatio: $('div.infobox-cell-2:contains("Attack Speed Ratio")').next().text().trim(),
        movementSpeed: $('div.infobox-cell-2:contains("Movement Speed")').next().text().trim(),
      }
    };

    const proPlayers = [];
    $('tr td').each((index, element) => {
      const nameEl = $(element).find('div.wiki-backgroundcolor-light a');
      const imgEl = $(element).find('img');
      const playerName = nameEl.attr('title');
      const imageUrl = imgEl.attr('src');
      if (playerName && imageUrl) {
        proPlayers.push({
          name: playerName,
          image: 'https://liquipedia.net' + imageUrl
        });
      }
    });

    let skins = [];
    try {
      const galleryUrl = `https://liquipedia.net/mobilelegends/${hero}/Gallery`;
      const responseGallery = await axios.get(galleryUrl);
      const $gallery = cheerio.load(responseGallery.data);

      $gallery('div.template-box').each((i, el) => {
        const skinName = $gallery(el).find('th').first().text().trim();
        const imgSrc = $gallery(el).find('img').first().attr('src');
        const imageUrl = imgSrc ? 'https://liquipedia.net' + imgSrc : null;

        let diamond = 0;
        let battlepoint = 0;

        const priceText = $gallery(el).find('tr:contains("Price")').next('tr').text().trim();

        const diamondMatch = priceText.match(/(\d[\d,]*)\s*(Diamond|Diamonds)/i);
        const bpMatch = priceText.match(/(\d[\d,]*)\s*(Battle|Point|BP)/i);

        if (diamondMatch) {
          diamond = parseInt(diamondMatch[1].replace(/,/g, ''), 10);
        }
        if (bpMatch) {
          battlepoint = parseInt(bpMatch[1].replace(/,/g, ''), 10);
        }

        if (skinName && imageUrl) {
          skins.push({
            name: skinName,
            image: imageUrl
          });
        }
      });
    } catch (galleryError) {
      console.error('Failed to fetch skins for hero ' + hero, galleryError);
      skins = [];
    }

    const result = {
      heroInfo,
      proPlayers,
      relationships,
      skillInfo,
      lores,
      skins
    };

    res.json(result);
  } catch (error) {
    console.error('Failed to fetch hero, or hero not found for ' + hero, error);
    res.status(500).json({ error: 'Failed to fetch hero, or hero not found for ' + hero + ", " + error });
  }
});

module.exports = router;
