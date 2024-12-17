const express = require("express");
const axios = require("axios");
const https = require("https");
// const fetch = require('node-fetch');
const router = express.Router();
const cheerio = require('cheerio');

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

// MLBB HERO
router.get("/mlbb", async (req, res) => {
  const hero = req.query.hero || "Miya";
  const url = 'https://liquipedia.net/mobilelegends/' + hero;
  const urlLore = 'https://liquipedia.net/mobilelegends/' + hero + '/Lore';

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const responseLore = await axios.get(urlLore);
    const lore = cheerio.load(responseLore.data);
    
    // START FETCHING LIQUIP
    const judul = lore('h1.firstHeading').text().trim();
    const cerita = lore('div.mw-parser-output p').first().text().trim();
    const lores = {
      title: judul,
      lore: cerita
    };
    
    const relationships = [];
    $('span#Relationships').parent().next('ul').find('li').each((index, element) => {
      const name = $(element).find('a').attr('title');
      const relation = $(element).text().split('—')[1]?.trim(); // Ambil bagian setelah "—"
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
    
    const heroInfo = {
      price: $('div.infobox-cell-2:contains("Price")').next().text().trim(),
      lane: Role,
      heroType: Lane,
      specialty: $('div.infobox-cell-2:contains("Specialty")').next().text().trim(),
      region: $('div.infobox-cell-2:contains("Region")').next().text().trim(),
      city: $('div.infobox-cell-2:contains("City")').next().text().trim(),
      quote: quote,
      resourceBar: $('div.infobox-cell-2:contains("Resource Bar")').next().text().trim(),
      releaseDate: $('div.infobox-cell-2:contains("Release Date")').next().text().trim(),
      voiceActor: $('div.infobox-cell-2:contains("Voice Actor(s)")').next().text().trim(),
      winRate: $('div.infobox-cell-2:contains("Win Rate")').next().text().trim(),
      baseStats: {
        health: $('div.infobox-cell-2:contains("Health")').next().text().trim(),
        healthRegen: $('div.infobox-cell-2:contains("Health Regen")').next().text().trim(),
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
    $('tr td div.wiki-backgroundcolor-light a').each((index, element) => {
      const playerName = $(element).attr('title');
      if (playerName) {
        proPlayers.push(playerName);
      }
    });

    const result = {
      heroInfo,
      relationships,
      skillInfo,
      lores,
      proPlayers
    };

    // Send
    res.json(result);
  } catch (error) {
    console.error('Failed to fetch hero, or hero not found for ' + hero, error);
    res.status(500).json({ error: 'Failed to fetch hero, or hero not found for ' + hero });
  }
});

module.exports = router;
