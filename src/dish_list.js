// const HtmlTableToJson = require('html-table-to-json');


// const jsonTables = HtmlTableToJson.parse(`<table class="article-table sortable alternating-colors-table jquery-tablesorter">
// <thead><tr>
// <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Icon
// </th>
// <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Name
// </th>
// <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Quality
// </th>
// <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Type
// </th>
// <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Effect
// </th>
// <th class="headerSort headerSortDown" tabindex="0" role="columnheader button" title="Sort initial">Has Recipe
// </th></tr></thead><tbody>











































































































































































// <tr>
// <td align="center"><a href="/wiki/%22Pile_%27Em_Up%22" title="&quot;Pile 'Em Up&quot;"><img alt="Item &quot;Pile 'Em Up&quot;.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Item_%22Pile_%27Em_Up%22.png/revision/latest/scale-to-width-down/45?cb=20210415145821" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item &quot;Pile 'Em Up&quot;.png" data-image-key="Item_%26quot%3BPile_%27Em_Up%26quot%3B.png"></a>
// </td>
// <td><a href="/wiki/%22Pile_%27Em_Up%22" title="&quot;Pile 'Em Up&quot;">"Pile 'Em Up"</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>10</b>~<b>20</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Aaru_Mixed_Rice" title="Aaru Mixed Rice"><img alt="Item Aaru Mixed Rice.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Aaru_Mixed_Rice.png/revision/latest/scale-to-width-down/45?cb=20220928041844" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Aaru Mixed Rice.png" data-image-key="Item_Aaru_Mixed_Rice.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Aaru_Mixed_Rice.png/revision/latest/scale-to-width-down/45?cb=20220928041844" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Aaru_Mixed_Rice" title="Aaru Mixed Rice">Aaru Mixed Rice</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Increase" title="Stamina Increase"><img alt="Icon Stamina Increase.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" decoding="async" loading="lazy" width="30" height="29" data-image-name="Icon Stamina Increase.png" data-image-key="Icon_Stamina_Increase.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" class=" lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Restores <b>40</b>~<b>60</b> Stamina.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Adeptus%27_Temptation" title="Adeptus' Temptation"><img alt="Item Adeptus' Temptation.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Adeptus%27_Temptation.png/revision/latest/scale-to-width-down/45?cb=20210415133724" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Adeptus' Temptation.png" data-image-key="Item_Adeptus%27_Temptation.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Adeptus%27_Temptation.png/revision/latest/scale-to-width-down/45?cb=20210415133724" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Adeptus%27_Temptation" title="Adeptus' Temptation">Adeptus' Temptation</a>
// </td>
// <td><img alt="5 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/revision/latest/scale-to-width-down/63?cb=20201226100736" decoding="async" loading="lazy" title="5 Stars" width="63" height="16" data-image-name="Icon 5 Stars.png" data-image-key="Icon_5_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/revision/latest/scale-to-width-down/63?cb=20201226100736" class=" lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>260</b>~<b>372</b> and CRIT Rate by <b>8</b>~<b>12</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Adventurer%27s_Breakfast_Sandwich" title="Adventurer's Breakfast Sandwich"><img alt="Item Adventurer's Breakfast Sandwich.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Item_Adventurer%27s_Breakfast_Sandwich.png/revision/latest/scale-to-width-down/45?cb=20210416224615" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Adventurer's Breakfast Sandwich.png" data-image-key="Item_Adventurer%27s_Breakfast_Sandwich.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Item_Adventurer%27s_Breakfast_Sandwich.png/revision/latest/scale-to-width-down/45?cb=20210416224615" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Adventurer%27s_Breakfast_Sandwich" title="Adventurer's Breakfast Sandwich">Adventurer's Breakfast Sandwich</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>160</b>~<b>228</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Almond_Tofu" title="Almond Tofu"><img alt="Item Almond Tofu.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Almond_Tofu.png/revision/latest/scale-to-width-down/45?cb=20210216225709" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Almond Tofu.png" data-image-key="Item_Almond_Tofu.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Almond_Tofu.png/revision/latest/scale-to-width-down/45?cb=20210216225709" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Almond_Tofu" title="Almond Tofu">Almond Tofu</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>66</b>~<b>95</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Baklava" title="Baklava"><img alt="Item Baklava.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Item_Baklava.png/revision/latest/scale-to-width-down/45?cb=20220929125056" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Baklava.png" data-image-key="Item_Baklava.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Item_Baklava.png/revision/latest/scale-to-width-down/45?cb=20220929125056" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Baklava" title="Baklava">Baklava</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>10</b>~<b>20</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Bamboo_Shoot_Soup" title="Bamboo Shoot Soup"><img alt="Item Bamboo Shoot Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Item_Bamboo_Shoot_Soup.png/revision/latest/scale-to-width-down/45?cb=20210417152640" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Bamboo Shoot Soup.png" data-image-key="Item_Bamboo_Shoot_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Item_Bamboo_Shoot_Soup.png/revision/latest/scale-to-width-down/45?cb=20210417152640" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Bamboo_Shoot_Soup" title="Bamboo Shoot Soup">Bamboo Shoot Soup</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>26</b>~<b>30</b>% of Max HP to the selected character. Regenerates <b>450</b>~<b>790</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Barbatos_Ratatouille" title="Barbatos Ratatouille"><img alt="Item Barbatos Ratatouille.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Barbatos_Ratatouille.png/revision/latest/scale-to-width-down/45?cb=20210415134134" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Barbatos Ratatouille.png" data-image-key="Item_Barbatos_Ratatouille.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Barbatos_Ratatouille.png/revision/latest/scale-to-width-down/45?cb=20210415134134" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Barbatos_Ratatouille" title="Barbatos Ratatouille">Barbatos Ratatouille</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' gliding and sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Berry_Mizu_Manjuu" title="Berry Mizu Manjuu"><img alt="Item Berry Mizu Manjuu.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/90/Item_Berry_Mizu_Manjuu.png/revision/latest/scale-to-width-down/45?cb=20211014000649" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Berry Mizu Manjuu.png" data-image-key="Item_Berry_Mizu_Manjuu.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/90/Item_Berry_Mizu_Manjuu.png/revision/latest/scale-to-width-down/45?cb=20211014000649" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Berry_Mizu_Manjuu" title="Berry Mizu Manjuu">Berry Mizu Manjuu</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>18</b>~<b>22</b>% of Max HP and regenerates <b>300</b>~<b>470</b> HP every 5 seconds for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Bird_Egg_Sushi" title="Bird Egg Sushi"><img alt="Item Bird Egg Sushi.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/1d/Item_Bird_Egg_Sushi.png/revision/latest/scale-to-width-down/45?cb=20210901042636" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Bird Egg Sushi.png" data-image-key="Item_Bird_Egg_Sushi.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/1d/Item_Bird_Egg_Sushi.png/revision/latest/scale-to-width-down/45?cb=20210901042636" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Bird_Egg_Sushi" title="Bird Egg Sushi">Bird Egg Sushi</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP and an additional <b>800</b>~<b>1,200</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Biryani" title="Biryani"><img alt="Item Biryani.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/81/Item_Biryani.png/revision/latest/scale-to-width-down/45?cb=20220825090905" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Biryani.png" data-image-key="Item_Biryani.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/81/Item_Biryani.png/revision/latest/scale-to-width-down/45?cb=20220825090905" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Biryani" title="Biryani">Biryani</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" lazyloaded"></a> DEF-Boosting Dish
// </td>
// <td>Increases all party members' DEF by <b>215</b>~<b>308</b> and healing effects by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Black-Back_Perch_Stew" title="Black-Back Perch Stew"><img alt="Item Black-Back Perch Stew.png" src="https://static.wikia.nocookie.net/gensin-impact/images/3/31/Item_Black-Back_Perch_Stew.png/revision/latest/scale-to-width-down/45?cb=20210416221152" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Black-Back Perch Stew.png" data-image-key="Item_Black-Back_Perch_Stew.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/3/31/Item_Black-Back_Perch_Stew.png/revision/latest/scale-to-width-down/45?cb=20210416221152" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Black-Back_Perch_Stew" title="Black-Back Perch Stew">Black-Back Perch Stew</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>26</b>~<b>30</b>% of Max HP to the selected character and regenerates <b>450</b>~<b>790</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Bountiful_Year" title="Bountiful Year"><img alt="Item Bountiful Year.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/95/Item_Bountiful_Year.png/revision/latest/scale-to-width-down/45?cb=20220107162532" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Bountiful Year.png" data-image-key="Item_Bountiful_Year.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/95/Item_Bountiful_Year.png/revision/latest/scale-to-width-down/45?cb=20220107162532" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Bountiful_Year" title="Bountiful Year">Bountiful Year</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>224</b>~<b>320</b> and CRIT Rate by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Braised_Meat" title="Braised Meat"><img alt="Item Braised Meat.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Braised_Meat.png/revision/latest/scale-to-width-down/45?cb=20211004223751" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Braised Meat.png" data-image-key="Item_Braised_Meat.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Braised_Meat.png/revision/latest/scale-to-width-down/45?cb=20211004223751" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Braised_Meat" title="Braised Meat">Braised Meat</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' <span class="text-physical"><b>Physical DMG</b></span> by <b>20</b>~<b>40</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Butter_Chicken" title="Butter Chicken"><img alt="Item Butter Chicken.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Butter_Chicken.png/revision/latest/scale-to-width-down/45?cb=20220825090911" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Butter Chicken.png" data-image-key="Item_Butter_Chicken.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Butter_Chicken.png/revision/latest/scale-to-width-down/45?cb=20220825090911" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Butter_Chicken" title="Butter Chicken">Butter Chicken</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dish
// </td>
// <td>Increases all party members' ATK by <b>160</b>~<b>228</b> for 300s. In Co-Op Mode, this effect only applies to your own character(s).
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Butter_Crab" title="Butter Crab"><img alt="Item Butter Crab.png" src="https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Butter_Crab.png/revision/latest/scale-to-width-down/45?cb=20210723024717" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Butter Crab.png" data-image-key="Item_Butter_Crab.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Butter_Crab.png/revision/latest/scale-to-width-down/45?cb=20210723024717" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Butter_Crab" title="Butter Crab">Butter Crab</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>215</b>~<b>308</b> and healing effects by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Calla_Lily_Seafood_Soup" title="Calla Lily Seafood Soup"><img alt="Item Calla Lily Seafood Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Calla_Lily_Seafood_Soup.png/revision/latest/scale-to-width-down/45?cb=20210416221719" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Calla Lily Seafood Soup.png" data-image-key="Item_Calla_Lily_Seafood_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Calla_Lily_Seafood_Soup.png/revision/latest/scale-to-width-down/45?cb=20210416221719" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Calla_Lily_Seafood_Soup" title="Calla Lily Seafood Soup">Calla Lily Seafood Soup</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>165</b>~<b>235</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Candied_Ajilenakh_Nut" title="Candied Ajilenakh Nut"><img alt="Item Candied Ajilenakh Nut.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Candied_Ajilenakh_Nut.png/revision/latest/scale-to-width-down/45?cb=20220928041846" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Candied Ajilenakh Nut.png" data-image-key="Item_Candied_Ajilenakh_Nut.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Candied_Ajilenakh_Nut.png/revision/latest/scale-to-width-down/45?cb=20220928041846" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Candied_Ajilenakh_Nut" title="Candied Ajilenakh Nut">Candied Ajilenakh Nut</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>165</b>~<b>235</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Charcoal-Baked_Ajilenakh_Cake" title="Charcoal-Baked Ajilenakh Cake"><img alt="Item Charcoal-Baked Ajilenakh Cake.png" src="https://static.wikia.nocookie.net/gensin-impact/images/d/d1/Item_Charcoal-Baked_Ajilenakh_Cake.png/revision/latest/scale-to-width-down/45?cb=20220928041848" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Charcoal-Baked Ajilenakh Cake.png" data-image-key="Item_Charcoal-Baked_Ajilenakh_Cake.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/d/d1/Item_Charcoal-Baked_Ajilenakh_Cake.png/revision/latest/scale-to-width-down/45?cb=20220928041848" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Charcoal-Baked_Ajilenakh_Cake" title="Charcoal-Baked Ajilenakh Cake">Charcoal-Baked Ajilenakh Cake</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>900</b>~<b>1,500</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Chicken_Tofu_Pudding" title="Chicken Tofu Pudding"><img alt="Item Chicken Tofu Pudding.png" src="https://static.wikia.nocookie.net/gensin-impact/images/d/db/Item_Chicken_Tofu_Pudding.png/revision/latest/scale-to-width-down/45?cb=20210609043702" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Chicken Tofu Pudding.png" data-image-key="Item_Chicken_Tofu_Pudding.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/d/db/Item_Chicken_Tofu_Pudding.png/revision/latest/scale-to-width-down/45?cb=20210609043702" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Chicken_Tofu_Pudding" title="Chicken Tofu Pudding">Chicken Tofu Pudding</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>224</b>~<b>320</b> and CRIT Rate by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Chicken-Mushroom_Skewer" title="Chicken-Mushroom Skewer"><img alt="Item Chicken-Mushroom Skewer.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Item_Chicken-Mushroom_Skewer.png/revision/latest/scale-to-width-down/45?cb=20210109214805" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Chicken-Mushroom Skewer.png" data-image-key="Item_Chicken-Mushroom_Skewer.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Item_Chicken-Mushroom_Skewer.png/revision/latest/scale-to-width-down/45?cb=20210109214805" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Chicken-Mushroom_Skewer" title="Chicken-Mushroom Skewer">Chicken-Mushroom Skewer</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP and an additional <b>800</b>~<b>1,200</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Chili-Mince_Cornbread_Buns" title="Chili-Mince Cornbread Buns"><img alt="Item Chili-Mince Cornbread Buns.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b0/Item_Chili-Mince_Cornbread_Buns.png/revision/latest/scale-to-width-down/45?cb=20211001012931" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Chili-Mince Cornbread Buns.png" data-image-key="Item_Chili-Mince_Cornbread_Buns.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b0/Item_Chili-Mince_Cornbread_Buns.png/revision/latest/scale-to-width-down/45?cb=20211001012931" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Chili-Mince_Cornbread_Buns" title="Chili-Mince Cornbread Buns">Chili-Mince Cornbread Buns</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' Shield strength by <b>25</b>~<b>35</b>% and DEF by <b>165</b>~<b>235</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Cold_Cut_Platter" title="Cold Cut Platter"><img alt="Item Cold Cut Platter.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Cold_Cut_Platter.png/revision/latest/scale-to-width-down/45?cb=20210416221537" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Cold Cut Platter.png" data-image-key="Item_Cold_Cut_Platter.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Cold_Cut_Platter.png/revision/latest/scale-to-width-down/45?cb=20210416221537" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Cold_Cut_Platter" title="Cold Cut Platter">Cold Cut Platter</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' <span class="text-physical"><b>Physical DMG</b></span> by <b>20</b>~<b>40</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Come_and_Get_It" title="Come and Get It"><img alt="Item Come and Get It.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Come_and_Get_It.png/revision/latest/scale-to-width-down/45?cb=20210416223708" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Come and Get It.png" data-image-key="Item_Come_and_Get_It.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Come_and_Get_It.png/revision/latest/scale-to-width-down/45?cb=20210416223708" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Come_and_Get_It" title="Come and Get It">Come and Get It</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>10</b>~<b>20</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Crab_Roe_Kourayaki" title="Crab Roe Kourayaki"><img alt="Item Crab Roe Kourayaki.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Crab_Roe_Kourayaki.png/revision/latest/scale-to-width-down/45?cb=20210723044428" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Crab Roe Kourayaki.png" data-image-key="Item_Crab_Roe_Kourayaki.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Crab_Roe_Kourayaki.png/revision/latest/scale-to-width-down/45?cb=20210723044428" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Crab_Roe_Kourayaki" title="Crab Roe Kourayaki">Crab Roe Kourayaki</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>66</b>~<b>95</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Crab_Roe_Tofu" title="Crab Roe Tofu"><img alt="Item Crab Roe Tofu.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Item_Crab_Roe_Tofu.png/revision/latest/scale-to-width-down/45?cb=20210428163019" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Crab Roe Tofu.png" data-image-key="Item_Crab_Roe_Tofu.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Item_Crab_Roe_Tofu.png/revision/latest/scale-to-width-down/45?cb=20210428163019" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Crab_Roe_Tofu" title="Crab Roe Tofu">Crab Roe Tofu</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>250</b>~<b>550</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Crab,_Ham_%26_Veggie_Bake" title="Crab, Ham &amp; Veggie Bake"><img alt="Item Crab, Ham &amp; Veggie Bake.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/af/Item_Crab%2C_Ham_%26_Veggie_Bake.png/revision/latest/scale-to-width-down/45?cb=20210415150007" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Crab, Ham &amp; Veggie Bake.png" data-image-key="Item_Crab%2C_Ham_%26amp%3B_Veggie_Bake.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/af/Item_Crab%2C_Ham_%26_Veggie_Bake.png/revision/latest/scale-to-width-down/45?cb=20210415150007" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Crab,_Ham_%26_Veggie_Bake" title="Crab, Ham &amp; Veggie Bake">Crab, Ham &amp; Veggie Bake</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>900</b>~<b>1,500</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Cream_Stew" title="Cream Stew"><img alt="Item Cream Stew.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Item_Cream_Stew.png/revision/latest/scale-to-width-down/45?cb=20210417153442" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Cream Stew.png" data-image-key="Item_Cream_Stew.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Item_Cream_Stew.png/revision/latest/scale-to-width-down/45?cb=20210417153442" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Cream_Stew" title="Cream Stew">Cream Stew</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Crispy_Potato_Shrimp_Platter" title="Crispy Potato Shrimp Platter"><img alt="Item Crispy Potato Shrimp Platter.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Item_Crispy_Potato_Shrimp_Platter.png/revision/latest/scale-to-width-down/45?cb=20210317031656" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Crispy Potato Shrimp Platter.png" data-image-key="Item_Crispy_Potato_Shrimp_Platter.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Item_Crispy_Potato_Shrimp_Platter.png/revision/latest/scale-to-width-down/45?cb=20210317031656" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Crispy_Potato_Shrimp_Platter" title="Crispy Potato Shrimp Platter">Crispy Potato Shrimp Platter</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>26</b>~<b>30</b>% of Max HP to the selected character and regenerates <b>450</b>~<b>790</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Crystal_Shrimp" title="Crystal Shrimp"><img alt="Item Crystal Shrimp.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Item_Crystal_Shrimp.png/revision/latest/scale-to-width-down/45?cb=20210417155020" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Crystal Shrimp.png" data-image-key="Item_Crystal_Shrimp.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Item_Crystal_Shrimp.png/revision/latest/scale-to-width-down/45?cb=20210417155020" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Crystal_Shrimp" title="Crystal Shrimp">Crystal Shrimp</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>18</b>~<b>22</b>% of Max HP to the selected character and regenerates <b>300</b>~<b>470</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Cured_Pork_Dry_Hotpot" title="Cured Pork Dry Hotpot"><img alt="Item Cured Pork Dry Hotpot.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Item_Cured_Pork_Dry_Hotpot.png/revision/latest/scale-to-width-down/45?cb=20210428163022" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Cured Pork Dry Hotpot.png" data-image-key="Item_Cured_Pork_Dry_Hotpot.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Item_Cured_Pork_Dry_Hotpot.png/revision/latest/scale-to-width-down/45?cb=20210428163022" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Cured_Pork_Dry_Hotpot" title="Cured Pork Dry Hotpot">Cured Pork Dry Hotpot</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>10</b>~<b>20</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Curry_Shrimp" title="Curry Shrimp"><img alt="Item Curry Shrimp.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Item_Curry_Shrimp.png/revision/latest/scale-to-width-down/45?cb=20220825090913" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Curry Shrimp.png" data-image-key="Item_Curry_Shrimp.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Item_Curry_Shrimp.png/revision/latest/scale-to-width-down/45?cb=20220825090913" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Curry_Shrimp" title="Curry Shrimp">Curry Shrimp</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>20</b>~<b>24</b>% of Max HP and an additional <b>900</b>~<b>1,500</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Dendrocide_Potion" title="Dendrocide Potion"><img alt="Item Dendrocide Potion.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/06/Item_Dendrocide_Potion.png/revision/latest/scale-to-width-down/45?cb=20220825142035" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Dendrocide Potion.png" data-image-key="Item_Dendrocide_Potion.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/06/Item_Dendrocide_Potion.png/revision/latest/scale-to-width-down/45?cb=20220825142035" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Dendrocide_Potion" title="Dendrocide Potion">Dendrocide Potion</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Dendro_RES_Up" title="Dendro RES Up"><img alt="Icon Dendro RES Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/56/Icon_Dendro_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20220826011306" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Dendro RES Up.png" data-image-key="Icon_Dendro_RES_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/56/Icon_Dendro_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20220826011306" class=" lazyloaded"></a> Potions
// </td>
// <td>Increases all party members' <span class="text-dendro"><b>Dendro RES</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Desiccant_Potion" title="Desiccant Potion"><img alt="Item Desiccant Potion.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Desiccant_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109221148" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Desiccant Potion.png" data-image-key="Item_Desiccant_Potion.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Desiccant_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109221148" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Desiccant_Potion" title="Desiccant Potion">Desiccant Potion</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Hydro_RES_Up" title="Hydro RES Up"><img alt="Icon Hydro RES Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Icon_Hydro_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171051" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Hydro RES Up.png" data-image-key="Icon_Hydro_RES_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Icon_Hydro_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171051" class=" lazyloaded"></a> Potions
// </td>
// <td>Increases all party members' <span class="text-hydro"><b>Hydro RES</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Dragon_Beard_Noodles" title="Dragon Beard Noodles"><img alt="Item Dragon Beard Noodles.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dragon_Beard_Noodles.png/revision/latest/scale-to-width-down/45?cb=20220107005745" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Dragon Beard Noodles.png" data-image-key="Item_Dragon_Beard_Noodles.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dragon_Beard_Noodles.png/revision/latest/scale-to-width-down/45?cb=20220107005745" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Dragon_Beard_Noodles" title="Dragon Beard Noodles">Dragon Beard Noodles</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>160</b>~<b>228</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Dry-Braised_Salted_Fish" title="Dry-Braised Salted Fish"><img alt="Item Dry-Braised Salted Fish.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Dry-Braised_Salted_Fish.png/revision/latest/scale-to-width-down/45?cb=20210723020230" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Dry-Braised Salted Fish.png" data-image-key="Item_Dry-Braised_Salted_Fish.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Dry-Braised_Salted_Fish.png/revision/latest/scale-to-width-down/45?cb=20210723020230" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Dry-Braised_Salted_Fish" title="Dry-Braised Salted Fish">Dry-Braised Salted Fish</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP and an additional <b>800</b>~<b>1,200</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Dustproof_Potion" title="Dustproof Potion"><img alt="Item Dustproof Potion.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Item_Dustproof_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109221151" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Dustproof Potion.png" data-image-key="Item_Dustproof_Potion.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Item_Dustproof_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109221151" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Dustproof_Potion" title="Dustproof Potion">Dustproof Potion</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Geo_RES_Up" title="Geo RES Up"><img alt="Icon Geo RES Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_Geo_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171049" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Geo RES Up.png" data-image-key="Icon_Geo_RES_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_Geo_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171049" class=" lazyloaded"></a> Potions
// </td>
// <td>Increases all party members' <span class="text-geo"><b>Geo RES</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Egg_Roll" title="Egg Roll"><img alt="Item Egg Roll.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Item_Egg_Roll.png/revision/latest/scale-to-width-down/45?cb=20210723020323" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Egg Roll.png" data-image-key="Item_Egg_Roll.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Item_Egg_Roll.png/revision/latest/scale-to-width-down/45?cb=20210723020323" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Egg_Roll" title="Egg Roll">Egg Roll</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>50</b>~<b>150</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Fish_With_Cream_Sauce" title="Fish With Cream Sauce"><img alt="Item Fish With Cream Sauce.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Fish_With_Cream_Sauce.png/revision/latest/scale-to-width-down/45?cb=20220827083309" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Fish With Cream Sauce.png" data-image-key="Item_Fish_With_Cream_Sauce.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Fish_With_Cream_Sauce.png/revision/latest/scale-to-width-down/45?cb=20220827083309" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Fish_With_Cream_Sauce" title="Fish With Cream Sauce">Fish With Cream Sauce</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>18</b>~<b>22</b>% of Max HP to the selected character and regenerates <b>300</b>~<b>470</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Fisherman%27s_Toast" title="Fisherman's Toast"><img alt="Item Fisherman's Toast.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Fisherman%27s_Toast.png/revision/latest/scale-to-width-down/45?cb=20210417153848" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Fisherman's Toast.png" data-image-key="Item_Fisherman%27s_Toast.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Fisherman%27s_Toast.png/revision/latest/scale-to-width-down/45?cb=20210417153848" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Fisherman%27s_Toast" title="Fisherman's Toast">Fisherman's Toast</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>88</b>~<b>126</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Five_Pickled_Treasures" title="Five Pickled Treasures"><img alt="Item Five Pickled Treasures.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/57/Item_Five_Pickled_Treasures.png/revision/latest/scale-to-width-down/45?cb=20211124040507" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Five Pickled Treasures.png" data-image-key="Item_Five_Pickled_Treasures.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/57/Item_Five_Pickled_Treasures.png/revision/latest/scale-to-width-down/45?cb=20211124040507" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Five_Pickled_Treasures" title="Five Pickled Treasures">Five Pickled Treasures</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Increase" title="Stamina Increase"><img alt="Icon Stamina Increase.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" decoding="async" loading="lazy" width="30" height="29" data-image-name="Icon Stamina Increase.png" data-image-key="Icon_Stamina_Increase.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Restores <b>70</b>~<b>100</b> Stamina.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Flaming_Essential_Oil" title="Flaming Essential Oil"><img alt="Item Flaming Essential Oil.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Item_Flaming_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20201202043258" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Flaming Essential Oil.png" data-image-key="Item_Flaming_Essential_Oil.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Item_Flaming_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20201202043258" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Flaming_Essential_Oil" title="Flaming Essential Oil">Flaming Essential Oil</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Pyro_DMG_Up" title="Pyro DMG Up"><img alt="Icon Pyro DMG Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Icon_Pyro_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171055" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Pyro DMG Up.png" data-image-key="Icon_Pyro_DMG_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Icon_Pyro_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171055" class=" lazyloaded"></a> Essential Oils
// </td>
// <td>Increases all party members' <span class="text-pyro"><b>Pyro DMG</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Flaming_Red_Bolognese" title="Flaming Red Bolognese"><img alt="Item Flaming Red Bolognese.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/73/Item_Flaming_Red_Bolognese.png/revision/latest/scale-to-width-down/45?cb=20210417154111" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Flaming Red Bolognese.png" data-image-key="Item_Flaming_Red_Bolognese.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/73/Item_Flaming_Red_Bolognese.png/revision/latest/scale-to-width-down/45?cb=20210417154111" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Flaming_Red_Bolognese" title="Flaming Red Bolognese">Flaming Red Bolognese</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>18</b>~<b>22</b>% of Max HP to the selected character and regenerates <b>300</b>~<b>470</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Forest_Essential_Oil" title="Forest Essential Oil"><img alt="Item Forest Essential Oil.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Item_Forest_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20220825142037" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Forest Essential Oil.png" data-image-key="Item_Forest_Essential_Oil.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Item_Forest_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20220825142037" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Forest_Essential_Oil" title="Forest Essential Oil">Forest Essential Oil</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Dendro_DMG_Up" title="Dendro DMG Up"><img alt="Icon Dendro DMG Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Icon_Dendro_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20220826011235" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Dendro DMG Up.png" data-image-key="Icon_Dendro_DMG_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Icon_Dendro_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20220826011235" class=" lazyloaded"></a> Essential Oils
// </td>
// <td>Increases all party members' <span class="text-dendro"><b>Dendro DMG</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Fragrant_Mashed_Potatoes" title="Fragrant Mashed Potatoes"><img alt="Item Fragrant Mashed Potatoes.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Item_Fragrant_Mashed_Potatoes.png/revision/latest/scale-to-width-down/45?cb=20210317174119" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Fragrant Mashed Potatoes.png" data-image-key="Item_Fragrant_Mashed_Potatoes.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Item_Fragrant_Mashed_Potatoes.png/revision/latest/scale-to-width-down/45?cb=20210317174119" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Fragrant_Mashed_Potatoes" title="Fragrant Mashed Potatoes">Fragrant Mashed Potatoes</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>160</b>~<b>228</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Fried_Radish_Balls" title="Fried Radish Balls"><img alt="Item Fried Radish Balls.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Fried_Radish_Balls.png/revision/latest/scale-to-width-down/45?cb=20210417154256" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Fried Radish Balls.png" data-image-key="Item_Fried_Radish_Balls.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Fried_Radish_Balls.png/revision/latest/scale-to-width-down/45?cb=20210417154256" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Fried_Radish_Balls" title="Fried Radish Balls">Fried Radish Balls</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>66</b>~<b>95</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Frosting_Essential_Oil" title="Frosting Essential Oil"><img alt="Item Frosting Essential Oil.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Frosting_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221111" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Frosting Essential Oil.png" data-image-key="Item_Frosting_Essential_Oil.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Frosting_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221111" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Frosting_Essential_Oil" title="Frosting Essential Oil">Frosting Essential Oil</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Cryo_DMG_Up" title="Cryo DMG Up"><img alt="Icon Cryo DMG Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Icon_Cryo_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171043" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Cryo DMG Up.png" data-image-key="Icon_Cryo_DMG_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Icon_Cryo_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171043" class=" lazyloaded"></a> Essential Oils
// </td>
// <td>Increases all party members' <span class="text-cryo"><b>Cryo DMG</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Frostshield_Potion" title="Frostshield Potion"><img alt="Item Frostshield Potion.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Item_Frostshield_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109221144" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Frostshield Potion.png" data-image-key="Item_Frostshield_Potion.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Item_Frostshield_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109221144" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Frostshield_Potion" title="Frostshield Potion">Frostshield Potion</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Cryo_RES_Up" title="Cryo RES Up"><img alt="Icon Cryo RES Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Icon_Cryo_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171043" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Cryo RES Up.png" data-image-key="Icon_Cryo_RES_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Icon_Cryo_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171043" class=" lazyloaded"></a> Potions
// </td>
// <td>Increases all party members' <span class="text-cryo"><b>Cryo RES</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Fruits_of_the_Festival" title="Fruits of the Festival"><img alt="Item Fruits of the Festival.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Item_Fruits_of_the_Festival.png/revision/latest/scale-to-width-down/45?cb=20220928041838" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Fruits of the Festival.png" data-image-key="Item_Fruits_of_the_Festival.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Item_Fruits_of_the_Festival.png/revision/latest/scale-to-width-down/45?cb=20220928041838" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Fruits_of_the_Festival" title="Fruits of the Festival">Fruits of the Festival</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' Healing Bonus by <b>15</b>~<b>20</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Fullmoon_Egg" title="Fullmoon Egg"><img alt="Item Fullmoon Egg.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Fullmoon_Egg.png/revision/latest/scale-to-width-down/45?cb=20210216221738" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Fullmoon Egg.png" data-image-key="Item_Fullmoon_Egg.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Fullmoon_Egg.png/revision/latest/scale-to-width-down/45?cb=20210216221738" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Fullmoon_Egg" title="Fullmoon Egg">Fullmoon Egg</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>900</b>~<b>1,500</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Golden_Chicken_Burger" title="Golden Chicken Burger"><img alt="Item Golden Chicken Burger.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Item_Golden_Chicken_Burger.png/revision/latest/scale-to-width-down/45?cb=20210317173935" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Golden Chicken Burger.png" data-image-key="Item_Golden_Chicken_Burger.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Item_Golden_Chicken_Burger.png/revision/latest/scale-to-width-down/45?cb=20210317173935" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Golden_Chicken_Burger" title="Golden Chicken Burger">Golden Chicken Burger</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Golden_Crab" title="Golden Crab"><img alt="Item Golden Crab.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Golden_Crab.png/revision/latest/scale-to-width-down/45?cb=20210415145849" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Golden Crab.png" data-image-key="Item_Golden_Crab.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Golden_Crab.png/revision/latest/scale-to-width-down/45?cb=20210415145849" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Golden_Crab" title="Golden Crab">Golden Crab</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>215</b>~<b>308</b> and healing effects by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Golden_Fried_Chicken" title="Golden Fried Chicken"><img alt="Item Golden Fried Chicken.png" src="https://static.wikia.nocookie.net/gensin-impact/images/3/37/Item_Golden_Fried_Chicken.png/revision/latest/scale-to-width-down/45?cb=20210317174040" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Golden Fried Chicken.png" data-image-key="Item_Golden_Fried_Chicken.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/3/37/Item_Golden_Fried_Chicken.png/revision/latest/scale-to-width-down/45?cb=20210317174040" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Golden_Fried_Chicken" title="Golden Fried Chicken">Golden Fried Chicken</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>224</b>~<b>320</b> and CRIT Rate by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Golden_Shrimp_Balls" title="Golden Shrimp Balls"><img alt="Item Golden Shrimp Balls.png" src="https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Item_Golden_Shrimp_Balls.png/revision/latest/scale-to-width-down/45?cb=20210415144229" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Golden Shrimp Balls.png" data-image-key="Item_Golden_Shrimp_Balls.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Item_Golden_Shrimp_Balls.png/revision/latest/scale-to-width-down/45?cb=20210415144229" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Golden_Shrimp_Balls" title="Golden Shrimp Balls">Golden Shrimp Balls</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>900</b>~<b>1,500</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Goulash" title="Goulash"><img alt="Item Goulash.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Goulash.png/revision/latest/scale-to-width-down/45?cb=20210416223513" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Goulash.png" data-image-key="Item_Goulash.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Goulash.png/revision/latest/scale-to-width-down/45?cb=20210416223513" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Goulash" title="Goulash">Goulash</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Sheer_Cold_Resistance" title="Sheer Cold Resistance"><img alt="Icon Sheer Cold Resistance.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/8c/Icon_Sheer_Cold_Resistance.png/revision/latest?cb=20210525171059" decoding="async" loading="lazy" width="30" height="33" data-image-name="Icon Sheer Cold Resistance.png" data-image-key="Icon_Sheer_Cold_Resistance.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/8c/Icon_Sheer_Cold_Resistance.png/revision/latest?cb=20210525171059" class=" lazyloaded"></a> Adventurer's Dishes
// </td>
// <td><b>Slightly decreases</b>~<b>Decreases</b> the rate of <a href="/wiki/Sheer_Cold" title="Sheer Cold">Sheer Cold</a> accumulation for all party members for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Grilled_Tiger_Fish" title="Grilled Tiger Fish"><img alt="Item Grilled Tiger Fish.png" src="https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Grilled_Tiger_Fish.png/revision/latest/scale-to-width-down/45?cb=20210109215631" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Grilled Tiger Fish.png" data-image-key="Item_Grilled_Tiger_Fish.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Grilled_Tiger_Fish.png/revision/latest/scale-to-width-down/45?cb=20210109215631" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Grilled_Tiger_Fish" title="Grilled Tiger Fish">Grilled Tiger Fish</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP and an additional <b>800</b>~<b>1,200</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Grilled_Unagi_Fillet" title="Grilled Unagi Fillet"><img alt="Item Grilled Unagi Fillet.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Item_Grilled_Unagi_Fillet.png/revision/latest/scale-to-width-down/45?cb=20210901042622" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Grilled Unagi Fillet.png" data-image-key="Item_Grilled_Unagi_Fillet.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Item_Grilled_Unagi_Fillet.png/revision/latest/scale-to-width-down/45?cb=20210901042622" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Grilled_Unagi_Fillet" title="Grilled Unagi Fillet">Grilled Unagi Fillet</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>20</b>~<b>24</b>% of Max HP and an additional <b>900</b>~<b>1,500</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Gushing_Essential_Oil" title="Gushing Essential Oil"><img alt="Item Gushing Essential Oil.png" src="https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Item_Gushing_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221048" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Gushing Essential Oil.png" data-image-key="Item_Gushing_Essential_Oil.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Item_Gushing_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221048" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Gushing_Essential_Oil" title="Gushing Essential Oil">Gushing Essential Oil</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Anemo_DMG_Up" title="Anemo DMG Up"><img alt="Icon Anemo DMG Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Icon_Anemo_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171103" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Anemo DMG Up.png" data-image-key="Icon_Anemo_DMG_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Icon_Anemo_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171103" class=" lazyloaded"></a> Essential Oils
// </td>
// <td>Increases all party members' <span class="text-anemo"><b>Anemo DMG</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Heatshield_Potion" title="Heatshield Potion"><img alt="Item Heatshield Potion.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Item_Heatshield_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109223447" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Heatshield Potion.png" data-image-key="Item_Heatshield_Potion.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Item_Heatshield_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109223447" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Heatshield_Potion" title="Heatshield Potion">Heatshield Potion</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Pyro_RES_Up" title="Pyro RES Up"><img alt="Icon Pyro RES Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Icon_Pyro_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Pyro RES Up.png" data-image-key="Icon_Pyro_RES_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Icon_Pyro_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" lazyloaded"></a> Potions
// </td>
// <td>Increases all party members' <span class="text-pyro"><b>Pyro RES</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Imported_Poultry" title="Imported Poultry"><img alt="Item Imported Poultry.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Item_Imported_Poultry.png/revision/latest/scale-to-width-down/45?cb=20210723065349" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Imported Poultry.png" data-image-key="Item_Imported_Poultry.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Item_Imported_Poultry.png/revision/latest/scale-to-width-down/45?cb=20210723065349" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Imported_Poultry" title="Imported Poultry">Imported Poultry</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>10</b>~<b>20</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Insulation_Potion" title="Insulation Potion"><img alt="Item Insulation Potion.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/ba/Item_Insulation_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109223433" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Insulation Potion.png" data-image-key="Item_Insulation_Potion.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/ba/Item_Insulation_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109223433" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Insulation_Potion" title="Insulation Potion">Insulation Potion</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Electro_RES_Up" title="Electro RES Up"><img alt="Icon Electro RES Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Icon_Electro_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171047" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Electro RES Up.png" data-image-key="Icon_Electro_RES_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Icon_Electro_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171047" class=" lazyloaded"></a> Potions
// </td>
// <td>Increases all party members' <span class="text-electro"><b>Electro RES</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Invigorating_Kitty_Meal" title="Invigorating Kitty Meal"><img alt="Item Invigorating Kitty Meal.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Invigorating_Kitty_Meal.png/revision/latest/scale-to-width-down/45?cb=20210901042522" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Invigorating Kitty Meal.png" data-image-key="Item_Invigorating_Kitty_Meal.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Invigorating_Kitty_Meal.png/revision/latest/scale-to-width-down/45?cb=20210901042522" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Invigorating_Kitty_Meal" title="Invigorating Kitty Meal">Invigorating Kitty Meal</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>26</b>~<b>30</b>% of Max HP to the selected character. Regenerates <b>450</b>~<b>790</b> HP every 5s for the next 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Jade_Parcels" title="Jade Parcels"><img alt="Item Jade Parcels.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Item_Jade_Parcels.png/revision/latest/scale-to-width-down/45?cb=20210415153732" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Jade Parcels.png" data-image-key="Item_Jade_Parcels.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Item_Jade_Parcels.png/revision/latest/scale-to-width-down/45?cb=20210415153732" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Jade_Parcels" title="Jade Parcels">Jade Parcels</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>224</b>~<b>320</b> and CRIT Rate by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Jewelry_Soup" title="Jewelry Soup"><img alt="Item Jewelry Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Item_Jewelry_Soup.png/revision/latest/scale-to-width-down/45?cb=20210415134551" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Jewelry Soup.png" data-image-key="Item_Jewelry_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Item_Jewelry_Soup.png/revision/latest/scale-to-width-down/45?cb=20210415134551" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Jewelry_Soup" title="Jewelry Soup">Jewelry Soup</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>88</b>~<b>126</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Jueyun_Chili_Chicken" title="Jueyun Chili Chicken"><img alt="Item Jueyun Chili Chicken.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Jueyun_Chili_Chicken.png/revision/latest/scale-to-width-down/45?cb=20210415134823" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Jueyun Chili Chicken.png" data-image-key="Item_Jueyun_Chili_Chicken.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Jueyun_Chili_Chicken.png/revision/latest/scale-to-width-down/45?cb=20210415134823" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Jueyun_Chili_Chicken" title="Jueyun Chili Chicken">Jueyun Chili Chicken</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>6</b>~<b>12</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Jueyun_Guoba" title="Jueyun Guoba"><img alt="Item Jueyun Guoba.png" src="https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Jueyun_Guoba.png/revision/latest/scale-to-width-down/45?cb=20210417152459" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Jueyun Guoba.png" data-image-key="Item_Jueyun_Guoba.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Jueyun_Guoba.png/revision/latest/scale-to-width-down/45?cb=20210417152459" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Jueyun_Guoba" title="Jueyun Guoba">Jueyun Guoba</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' <span class="text-physical"><b>Physical DMG</b></span> by <b>20</b>~<b>40</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Katsu_Sandwich" title="Katsu Sandwich"><img alt="Item Katsu Sandwich.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Katsu_Sandwich.png/revision/latest/scale-to-width-down/45?cb=20220330022422" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Katsu Sandwich.png" data-image-key="Item_Katsu_Sandwich.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Katsu_Sandwich.png/revision/latest/scale-to-width-down/45?cb=20220330022422" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Katsu_Sandwich" title="Katsu Sandwich">Katsu Sandwich</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>66</b>~<b>95</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Konda_Cuisine" title="Konda Cuisine"><img alt="Item Konda Cuisine.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Konda_Cuisine.png/revision/latest/scale-to-width-down/45?cb=20210723021501" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Konda Cuisine.png" data-image-key="Item_Konda_Cuisine.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Konda_Cuisine.png/revision/latest/scale-to-width-down/45?cb=20210723021501" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Konda_Cuisine" title="Konda Cuisine">Konda Cuisine</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>900</b>~<b>1500</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lambad_Fish_Roll" title="Lambad Fish Roll"><img alt="Item Lambad Fish Roll.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Item_Lambad_Fish_Roll.png/revision/latest/scale-to-width-down/45?cb=20220825111652" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Lambad Fish Roll.png" data-image-key="Item_Lambad_Fish_Roll.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Item_Lambad_Fish_Roll.png/revision/latest/scale-to-width-down/45?cb=20220825111652" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lambad_Fish_Roll" title="Lambad Fish Roll">Lambad Fish Roll</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP and an additional <b>800</b>~<b>1,200</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lotus_Flower_Crisp" title="Lotus Flower Crisp"><img alt="Item Lotus Flower Crisp.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Item_Lotus_Flower_Crisp.png/revision/latest/scale-to-width-down/45?cb=20210416223628" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Lotus Flower Crisp.png" data-image-key="Item_Lotus_Flower_Crisp.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Item_Lotus_Flower_Crisp.png/revision/latest/scale-to-width-down/45?cb=20210416223628" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lotus_Flower_Crisp" title="Lotus Flower Crisp">Lotus Flower Crisp</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>165</b>~<b>235</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lotus_Seed_and_Bird_Egg_Soup" title="Lotus Seed and Bird Egg Soup"><img alt="Item Lotus Seed and Bird Egg Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/53/Item_Lotus_Seed_and_Bird_Egg_Soup.png/revision/latest/scale-to-width-down/45?cb=20210416223545" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Lotus Seed and Bird Egg Soup.png" data-image-key="Item_Lotus_Seed_and_Bird_Egg_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/53/Item_Lotus_Seed_and_Bird_Egg_Soup.png/revision/latest/scale-to-width-down/45?cb=20210416223545" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lotus_Seed_and_Bird_Egg_Soup" title="Lotus Seed and Bird Egg Soup">Lotus Seed and Bird Egg Soup</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Masala_Cheese_Balls" title="Masala Cheese Balls"><img alt="Item Masala Cheese Balls.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Masala_Cheese_Balls.png/revision/latest/scale-to-width-down/45?cb=20220826003217" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Masala Cheese Balls.png" data-image-key="Item_Masala_Cheese_Balls.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Masala_Cheese_Balls.png/revision/latest/scale-to-width-down/45?cb=20220826003217" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Masala_Cheese_Balls" title="Masala Cheese Balls">Masala Cheese Balls</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dish
// </td>
// <td>Increases all party members' CRIT Rate by <b>6</b>~<b>12</b>% for 300s. In Co-Op Mode, this effect only applies to your own character(s).
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Matsutake_Meat_Rolls" title="Matsutake Meat Rolls"><img alt="Item Matsutake Meat Rolls.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/15/Item_Matsutake_Meat_Rolls.png/revision/latest/scale-to-width-down/45?cb=20210415135143" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Matsutake Meat Rolls.png" data-image-key="Item_Matsutake_Meat_Rolls.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/15/Item_Matsutake_Meat_Rolls.png/revision/latest/scale-to-width-down/45?cb=20210415135143" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Matsutake_Meat_Rolls" title="Matsutake Meat Rolls">Matsutake Meat Rolls</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>20</b>~<b>24</b>% of Max HP and an additional <b>900</b>~<b>1,500</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Meat_Lovers%27_Mushroom_Pizza" title="Meat Lovers' Mushroom Pizza"><img alt="Item Meat Lovers' Mushroom Pizza.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Meat_Lovers%27_Mushroom_Pizza.png/revision/latest/scale-to-width-down/45?cb=20220826002637" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Meat Lovers' Mushroom Pizza.png" data-image-key="Item_Meat_Lovers%27_Mushroom_Pizza.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Meat_Lovers%27_Mushroom_Pizza.png/revision/latest/scale-to-width-down/45?cb=20220826002637" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Meat_Lovers%27_Mushroom_Pizza" title="Meat Lovers' Mushroom Pizza">Meat Lovers' Mushroom Pizza</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dish
// </td>
// <td>Increases all party members' ATK by <b>224</b>~<b>320</b> and CRIT Rate by <b>6</b>~<b>10</b>% for 300s. In Co-Op Mode, this effect only applies to your own character(s).
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Milky_Mushroom_Crisp_Tower" title="Milky Mushroom Crisp Tower"><img alt="Item Milky Mushroom Crisp Tower.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Milky_Mushroom_Crisp_Tower.png/revision/latest/scale-to-width-down/45?cb=20220826002135" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Milky Mushroom Crisp Tower.png" data-image-key="Item_Milky_Mushroom_Crisp_Tower.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Milky_Mushroom_Crisp_Tower.png/revision/latest/scale-to-width-down/45?cb=20220826002135" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Milky_Mushroom_Crisp_Tower" title="Milky Mushroom Crisp Tower">Milky Mushroom Crisp Tower</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td>Recovery Dish
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Mint_Jelly" title="Mint Jelly"><img alt="Item Mint Jelly.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/79/Item_Mint_Jelly.png/revision/latest/scale-to-width-down/45?cb=20210317031658" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Mint Jelly.png" data-image-key="Item_Mint_Jelly.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/79/Item_Mint_Jelly.png/revision/latest/scale-to-width-down/45?cb=20210317031658" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Mint_Jelly" title="Mint Jelly">Mint Jelly</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP and an additional <b>800</b>~<b>1,200</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Mint_Salad" title="Mint Salad"><img alt="Item Mint Salad.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Mint_Salad.png/revision/latest/scale-to-width-down/45?cb=20210317031657" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Mint Salad.png" data-image-key="Item_Mint_Salad.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Mint_Salad.png/revision/latest/scale-to-width-down/45?cb=20210317031657" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Mint_Salad" title="Mint Salad">Mint Salad</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>66</b>~<b>95</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Minty_Bean_Soup" title="Minty Bean Soup"><img alt="Item Minty Bean Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Minty_Bean_Soup.png/revision/latest/scale-to-width-down/45?cb=20220824135810" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Minty Bean Soup.png" data-image-key="Item_Minty_Bean_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Minty_Bean_Soup.png/revision/latest/scale-to-width-down/45?cb=20220824135810" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Minty_Bean_Soup" title="Minty Bean Soup">Minty Bean Soup</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>50</b>~<b>150</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Minty_Meat_Rolls" title="Minty Meat Rolls"><img alt="Item Minty Meat Rolls.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Minty_Meat_Rolls.png/revision/latest/scale-to-width-down/45?cb=20210317031656" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Minty Meat Rolls.png" data-image-key="Item_Minty_Meat_Rolls.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Minty_Meat_Rolls.png/revision/latest/scale-to-width-down/45?cb=20210317031656" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Minty_Meat_Rolls" title="Minty Meat Rolls">Minty Meat Rolls</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' gliding and sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Miso_Soup" title="Miso Soup"><img alt="Item Miso Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Item_Miso_Soup.png/revision/latest/scale-to-width-down/45?cb=20210723020354" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Miso Soup.png" data-image-key="Item_Miso_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Item_Miso_Soup.png/revision/latest/scale-to-width-down/45?cb=20210723020354" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Miso_Soup" title="Miso Soup">Miso Soup</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP to the selected character and regenerates <b>210</b>~<b>300</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Mixed_Yakisoba" title="Mixed Yakisoba"><img alt="Item Mixed Yakisoba.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Mixed_Yakisoba.png/revision/latest/scale-to-width-down/45?cb=20210723022920" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Mixed Yakisoba.png" data-image-key="Item_Mixed_Yakisoba.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Mixed_Yakisoba.png/revision/latest/scale-to-width-down/45?cb=20210723022920" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Mixed_Yakisoba" title="Mixed Yakisoba">Mixed Yakisoba</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>250</b>~<b>550</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Mondstadt_Grilled_Fish" title="Mondstadt Grilled Fish"><img alt="Item Mondstadt Grilled Fish.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Item_Mondstadt_Grilled_Fish.png/revision/latest/scale-to-width-down/45?cb=20210416223406" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Mondstadt Grilled Fish.png" data-image-key="Item_Mondstadt_Grilled_Fish.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Item_Mondstadt_Grilled_Fish.png/revision/latest/scale-to-width-down/45?cb=20210416223406" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Mondstadt_Grilled_Fish" title="Mondstadt Grilled Fish">Mondstadt Grilled Fish</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>50</b>~<b>150</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Mondstadt_Hash_Brown" title="Mondstadt Hash Brown"><img alt="Item Mondstadt Hash Brown.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Item_Mondstadt_Hash_Brown.png/revision/latest/scale-to-width-down/45?cb=20210416221824" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Mondstadt Hash Brown.png" data-image-key="Item_Mondstadt_Hash_Brown.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Item_Mondstadt_Hash_Brown.png/revision/latest/scale-to-width-down/45?cb=20210416221824" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Mondstadt_Hash_Brown" title="Mondstadt Hash Brown">Mondstadt Hash Brown</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Moon_Pie" title="Moon Pie"><img alt="Item Moon Pie.png" src="https://static.wikia.nocookie.net/gensin-impact/images/3/38/Item_Moon_Pie.png/revision/latest/scale-to-width-down/45?cb=20210415150115" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Moon Pie.png" data-image-key="Item_Moon_Pie.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/3/38/Item_Moon_Pie.png/revision/latest/scale-to-width-down/45?cb=20210415150115" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Moon_Pie" title="Moon Pie">Moon Pie</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' Shield Strength by <b>25</b>~<b>35</b>% and DEF by <b>165</b>~<b>235</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Mora_Meat" title="Mora Meat"><img alt="Item Mora Meat.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Mora_Meat.png/revision/latest/scale-to-width-down/45?cb=20210416223339" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Mora Meat.png" data-image-key="Item_Mora_Meat.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Mora_Meat.png/revision/latest/scale-to-width-down/45?cb=20210416223339" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Mora_Meat" title="Mora Meat">Mora Meat</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>50</b>~<b>150</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/More-and-More" title="More-and-More"><img alt="Item More-and-More.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_More-and-More.png/revision/latest/scale-to-width-down/45?cb=20210901042547" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item More-and-More.png" data-image-key="Item_More-and-More.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_More-and-More.png/revision/latest/scale-to-width-down/45?cb=20210901042547" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/More-and-More" title="More-and-More">More-and-More</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' <span class="text-physical"><b>Physical DMG</b></span> by <b>20</b>~<b>40</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Mushroom_Hodgepodge" title="Mushroom Hodgepodge"><img alt="Item Mushroom Hodgepodge.png" src="https://static.wikia.nocookie.net/gensin-impact/images/3/3c/Item_Mushroom_Hodgepodge.png/revision/latest/scale-to-width-down/45?cb=20220825073930" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Mushroom Hodgepodge.png" data-image-key="Item_Mushroom_Hodgepodge.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/3/3c/Item_Mushroom_Hodgepodge.png/revision/latest/scale-to-width-down/45?cb=20220825073930" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Mushroom_Hodgepodge" title="Mushroom Hodgepodge">Mushroom Hodgepodge</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members’ DEF by <b>88</b>~<b>126</b> for 300s. In Co-Op Mode, this effect only applies to your own character(s).
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Mushroom_Pizza" title="Mushroom Pizza"><img alt="Item Mushroom Pizza.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Mushroom_Pizza.png/revision/latest/scale-to-width-down/45?cb=20210415133922" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Mushroom Pizza.png" data-image-key="Item_Mushroom_Pizza.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Mushroom_Pizza.png/revision/latest/scale-to-width-down/45?cb=20210415133922" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Mushroom_Pizza" title="Mushroom Pizza">Mushroom Pizza</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>26</b>~<b>30</b>% of Max HP to the selected character. Regenerates <b>450</b>~<b>790</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Noodles_with_Mountain_Delicacies" title="Noodles with Mountain Delicacies"><img alt="Item Noodles with Mountain Delicacies.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Noodles_with_Mountain_Delicacies.png/revision/latest/scale-to-width-down/45?cb=20210415131216" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Noodles with Mountain Delicacies.png" data-image-key="Item_Noodles_with_Mountain_Delicacies.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Noodles_with_Mountain_Delicacies.png/revision/latest/scale-to-width-down/45?cb=20210415131216" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Noodles_with_Mountain_Delicacies" title="Noodles with Mountain Delicacies">Noodles with Mountain Delicacies</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Increase" title="Stamina Increase"><img alt="Icon Stamina Increase.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" decoding="async" loading="lazy" width="30" height="29" data-image-name="Icon Stamina Increase.png" data-image-key="Icon_Stamina_Increase.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Restores <b>40</b>~<b>60</b> Stamina.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Northern_Apple_Stew" title="Northern Apple Stew"><img alt="Item Northern Apple Stew.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/80/Item_Northern_Apple_Stew.png/revision/latest/scale-to-width-down/45?cb=20210416224228" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Northern Apple Stew.png" data-image-key="Item_Northern_Apple_Stew.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/80/Item_Northern_Apple_Stew.png/revision/latest/scale-to-width-down/45?cb=20210416224228" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Northern_Apple_Stew" title="Northern Apple Stew">Northern Apple Stew</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Northern_Smoked_Chicken" title="Northern Smoked Chicken"><img alt="Item Northern Smoked Chicken.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/03/Item_Northern_Smoked_Chicken.png/revision/latest/scale-to-width-down/45?cb=20210415135238" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Northern Smoked Chicken.png" data-image-key="Item_Northern_Smoked_Chicken.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/03/Item_Northern_Smoked_Chicken.png/revision/latest/scale-to-width-down/45?cb=20210415135238" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Northern_Smoked_Chicken" title="Northern Smoked Chicken">Northern Smoked Chicken</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Increase" title="Stamina Increase"><img alt="Icon Stamina Increase.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" decoding="async" loading="lazy" width="30" height="29" data-image-name="Icon Stamina Increase.png" data-image-key="Icon_Stamina_Increase.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Restores <b>40</b>~<b>60</b> Stamina.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Omelette_Rice" title="Omelette Rice"><img alt="Item Omelette Rice.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e7/Item_Omelette_Rice.png/revision/latest/scale-to-width-down/45?cb=20210901042546" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Omelette Rice.png" data-image-key="Item_Omelette_Rice.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e7/Item_Omelette_Rice.png/revision/latest/scale-to-width-down/45?cb=20210901042546" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Omelette_Rice" title="Omelette Rice">Omelette Rice</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases Stamina depleted by climbing and sprinting for all party members by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Oncidium_Tofu" title="Oncidium Tofu"><img alt="Item Oncidium Tofu.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/af/Item_Oncidium_Tofu.png/revision/latest/scale-to-width-down/45?cb=20210927052314" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Oncidium Tofu.png" data-image-key="Item_Oncidium_Tofu.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/af/Item_Oncidium_Tofu.png/revision/latest/scale-to-width-down/45?cb=20210927052314" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Oncidium_Tofu" title="Oncidium Tofu">Oncidium Tofu</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Increase" title="Stamina Increase"><img alt="Icon Stamina Increase.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" decoding="async" loading="lazy" width="30" height="29" data-image-name="Icon Stamina Increase.png" data-image-key="Icon_Stamina_Increase.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Restores <b>70</b>~<b>100</b> Stamina.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Onigiri" title="Onigiri"><img alt="Item Onigiri.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Onigiri.png/revision/latest/scale-to-width-down/45?cb=20210723020415" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Onigiri.png" data-image-key="Item_Onigiri.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Onigiri.png/revision/latest/scale-to-width-down/45?cb=20210723020415" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Onigiri" title="Onigiri">Onigiri</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>18</b>~<b>22</b>% of Max HP to the selected character and regenerates <b>300</b>~<b>470</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Padisarah_Pudding" title="Padisarah Pudding"><img alt="Item Padisarah Pudding.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Item_Padisarah_Pudding.png/revision/latest/scale-to-width-down/45?cb=20220928041842" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Padisarah Pudding.png" data-image-key="Item_Padisarah_Pudding.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Item_Padisarah_Pudding.png/revision/latest/scale-to-width-down/45?cb=20220928041842" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Padisarah_Pudding" title="Padisarah Pudding">Padisarah Pudding</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' climbing and sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Panipuri" title="Panipuri"><img alt="Item Panipuri.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/49/Item_Panipuri.png/revision/latest/scale-to-width-down/45?cb=20220825231705" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Panipuri.png" data-image-key="Item_Panipuri.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/49/Item_Panipuri.png/revision/latest/scale-to-width-down/45?cb=20220825231705" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Panipuri" title="Panipuri">Panipuri</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>250</b>~<b>550</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Pita_Pocket" title="Pita Pocket"><img alt="Item Pita Pocket.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Pita_Pocket.png/revision/latest/scale-to-width-down/45?cb=20220824131338" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Pita Pocket.png" data-image-key="Item_Pita_Pocket.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Pita_Pocket.png/revision/latest/scale-to-width-down/45?cb=20220824131338" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Pita_Pocket" title="Pita Pocket">Pita Pocket</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Potato_Boat" title="Potato Boat"><img alt="Item Potato Boat.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Potato_Boat.png/revision/latest/scale-to-width-down/45?cb=20220826001510" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Potato Boat.png" data-image-key="Item_Potato_Boat.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Potato_Boat.png/revision/latest/scale-to-width-down/45?cb=20220826001510" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Potato_Boat" title="Potato Boat">Potato Boat</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>900</b>~<b>1,500</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Qingce_Stir_Fry" title="Qingce Stir Fry"><img alt="Item Qingce Stir Fry.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Qingce_Stir_Fry.png/revision/latest/scale-to-width-down/45?cb=20210415142401" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Qingce Stir Fry.png" data-image-key="Item_Qingce_Stir_Fry.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Qingce_Stir_Fry.png/revision/latest/scale-to-width-down/45?cb=20210415142401" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Qingce_Stir_Fry" title="Qingce Stir Fry">Qingce Stir Fry</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>160</b>~<b>228</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Radish_Veggie_Soup" title="Radish Veggie Soup"><img alt="Item Radish Veggie Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Radish_Veggie_Soup.png/revision/latest/scale-to-width-down/45?cb=20210415140822" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Radish Veggie Soup.png" data-image-key="Item_Radish_Veggie_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Radish_Veggie_Soup.png/revision/latest/scale-to-width-down/45?cb=20210415140822" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Radish_Veggie_Soup" title="Radish Veggie Soup">Radish Veggie Soup</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP to the selected character and regenerates <b>210</b>~<b>300</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Radish_and_Fish_Stew" title="Radish and Fish Stew"><img alt="Item Radish and Fish Stew.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/41/Item_Radish_and_Fish_Stew.png/revision/latest/scale-to-width-down/45?cb=20211014000639" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Radish and Fish Stew.png" data-image-key="Item_Radish_and_Fish_Stew.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/41/Item_Radish_and_Fish_Stew.png/revision/latest/scale-to-width-down/45?cb=20211014000639" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Radish_and_Fish_Stew" title="Radish and Fish Stew">Radish and Fish Stew</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>6</b>~<b>12</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Rainbow_Aster" title="Rainbow Aster"><img alt="Item Rainbow Aster.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Item_Rainbow_Aster.png/revision/latest/scale-to-width-down/45?cb=20220330022419" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Rainbow Aster.png" data-image-key="Item_Rainbow_Aster.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Item_Rainbow_Aster.png/revision/latest/scale-to-width-down/45?cb=20220330022419" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Rainbow_Aster" title="Rainbow Aster">Rainbow Aster</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' gliding and sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Rice_Buns" title="Rice Buns"><img alt="Item Rice Buns.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Item_Rice_Buns.png/revision/latest/scale-to-width-down/45?cb=20210609051846" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Rice Buns.png" data-image-key="Item_Rice_Buns.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Item_Rice_Buns.png/revision/latest/scale-to-width-down/45?cb=20210609051846" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Rice_Buns" title="Rice Buns">Rice Buns</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP and an additional <b>800</b>~<b>1,200</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Rice_Cake_Soup" title="Rice Cake Soup"><img alt="Item Rice Cake Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/21/Item_Rice_Cake_Soup.png/revision/latest/scale-to-width-down/45?cb=20210723024719" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Rice Cake Soup.png" data-image-key="Item_Rice_Cake_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/21/Item_Rice_Cake_Soup.png/revision/latest/scale-to-width-down/45?cb=20210723024719" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Rice_Cake_Soup" title="Rice Cake Soup">Rice Cake Soup</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>165</b>~<b>235</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Rice_Pudding" title="Rice Pudding"><img alt="Item Rice Pudding.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Rice_Pudding.png/revision/latest/scale-to-width-down/45?cb=20210930214439" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Rice Pudding.png" data-image-key="Item_Rice_Pudding.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Rice_Pudding.png/revision/latest/scale-to-width-down/45?cb=20210930214439" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Rice_Pudding" title="Rice Pudding">Rice Pudding</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Increase" title="Stamina Increase"><img alt="Icon Stamina Increase.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" decoding="async" loading="lazy" width="30" height="29" data-image-name="Icon Stamina Increase.png" data-image-key="Icon_Stamina_Increase.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Restores <b>70</b>~<b>100</b> Stamina.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Rose_Custard" title="Rose Custard"><img alt="Item Rose Custard.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/cc/Item_Rose_Custard.png/revision/latest/scale-to-width-down/45?cb=20221102161834" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Rose Custard.png" data-image-key="Item_Rose_Custard.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/cc/Item_Rose_Custard.png/revision/latest/scale-to-width-down/45?cb=20221102161834" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Rose_Custard" title="Rose Custard">Rose Custard</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>18</b>~<b>22</b>% of Max HP and regenerates <b>300</b>~<b>470</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sabz_Meat_Stew" title="Sabz Meat Stew"><img alt="Item Sabz Meat Stew.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/55/Item_Sabz_Meat_Stew.png/revision/latest/scale-to-width-down/45?cb=20230118045933" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sabz Meat Stew.png" data-image-key="Item_Sabz_Meat_Stew.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/55/Item_Sabz_Meat_Stew.png/revision/latest/scale-to-width-down/45?cb=20230118045933" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sabz_Meat_Stew" title="Sabz Meat Stew">Sabz Meat Stew</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sakura_Mochi" title="Sakura Mochi"><img alt="Item Sakura Mochi.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/05/Item_Sakura_Mochi.png/revision/latest/scale-to-width-down/45?cb=20210723020811" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sakura Mochi.png" data-image-key="Item_Sakura_Mochi.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/05/Item_Sakura_Mochi.png/revision/latest/scale-to-width-down/45?cb=20210723020811" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sakura_Mochi" title="Sakura Mochi">Sakura Mochi</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>900</b>~<b>1,500</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sakura_Shrimp_Crackers" title="Sakura Shrimp Crackers"><img alt="Item Sakura Shrimp Crackers.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/56/Item_Sakura_Shrimp_Crackers.png/revision/latest/scale-to-width-down/45?cb=20211124035943" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sakura Shrimp Crackers.png" data-image-key="Item_Sakura_Shrimp_Crackers.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/56/Item_Sakura_Shrimp_Crackers.png/revision/latest/scale-to-width-down/45?cb=20211124035943" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sakura_Shrimp_Crackers" title="Sakura Shrimp Crackers">Sakura Shrimp Crackers</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' HP by <b>20%</b>~<b>25%</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sakura_Tempura" title="Sakura Tempura"><img alt="Item Sakura Tempura.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Sakura_Tempura.png/revision/latest/scale-to-width-down/45?cb=20210723021302" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sakura Tempura.png" data-image-key="Item_Sakura_Tempura.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Sakura_Tempura.png/revision/latest/scale-to-width-down/45?cb=20210723021302" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sakura_Tempura" title="Sakura Tempura">Sakura Tempura</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' Shield strength by <b>20</b>~<b>30</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Samosa" title="Samosa"><img alt="Item Samosa.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Item_Samosa.png/revision/latest/scale-to-width-down/45?cb=20221208010516" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Samosa.png" data-image-key="Item_Samosa.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Item_Samosa.png/revision/latest/scale-to-width-down/45?cb=20221208010516" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Samosa" title="Samosa">Samosa</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>20</b>~<b>24</b>% of Max HP to the selected character and an additional <b>900</b>~<b>1,500</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sangayaki" title="Sangayaki"><img alt="Item Sangayaki.png" src="https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Item_Sangayaki.png/revision/latest/scale-to-width-down/45?cb=20220219034936" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sangayaki.png" data-image-key="Item_Sangayaki.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Item_Sangayaki.png/revision/latest/scale-to-width-down/45?cb=20220219034936" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sangayaki" title="Sangayaki">Sangayaki</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sashimi_Platter" title="Sashimi Platter"><img alt="Item Sashimi Platter.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Item_Sashimi_Platter.png/revision/latest/scale-to-width-down/45?cb=20210723061557" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sashimi Platter.png" data-image-key="Item_Sashimi_Platter.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Item_Sashimi_Platter.png/revision/latest/scale-to-width-down/45?cb=20210723061557" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sashimi_Platter" title="Sashimi Platter">Sashimi Platter</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>224</b>~<b>320</b> and CRIT Rate by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Satisfying_Salad" title="Satisfying Salad"><img alt="Item Satisfying Salad.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Satisfying_Salad.png/revision/latest/scale-to-width-down/45?cb=20210417153219" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Satisfying Salad.png" data-image-key="Item_Satisfying_Salad.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Satisfying_Salad.png/revision/latest/scale-to-width-down/45?cb=20210417153219" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Satisfying_Salad" title="Satisfying Salad">Satisfying Salad</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT rate by <b>6</b>~<b>12</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Saut%C3%A9ed_Matsutake" title="Sautéed Matsutake"><img alt="Item Sautéed Matsutake.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Saut%C3%A9ed_Matsutake.png/revision/latest/scale-to-width-down/45?cb=20201113104232" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sautéed Matsutake.png" data-image-key="Item_Saut%C3%A9ed_Matsutake.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Saut%C3%A9ed_Matsutake.png/revision/latest/scale-to-width-down/45?cb=20201113104232" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Saut%C3%A9ed_Matsutake" title="Sautéed Matsutake">Sautéed Matsutake</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>160</b>~<b>228</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Scented_Meat_Balls" title="Scented Meat Balls"><img alt="Item Scented Meat Balls.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Scented_Meat_Balls.png/revision/latest/scale-to-width-down/45?cb=20230118045935" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Scented Meat Balls.png" data-image-key="Item_Scented_Meat_Balls.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Scented_Meat_Balls.png/revision/latest/scale-to-width-down/45?cb=20230118045935" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Scented_Meat_Balls" title="Scented Meat Balls">Scented Meat Balls</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Has a chance to restore <b>24%/30%/36%</b>~<b>28%/34%/40%</b> of Max HP and an additional <b>450/600/700</b>~<b>1,400/1,900/2,350</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Selva_Salad" title="Selva Salad"><img alt="Item Selva Salad.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/75/Item_Selva_Salad.png/revision/latest/scale-to-width-down/45?cb=20220825090918" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Selva Salad.png" data-image-key="Item_Selva_Salad.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/75/Item_Selva_Salad.png/revision/latest/scale-to-width-down/45?cb=20220825090918" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Selva_Salad" title="Selva Salad">Selva Salad</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Shawarma_Wrap" title="Shawarma Wrap"><img alt="Item Shawarma Wrap.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/96/Item_Shawarma_Wrap.png/revision/latest/scale-to-width-down/45?cb=20220825090916" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Shawarma Wrap.png" data-image-key="Item_Shawarma_Wrap.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/96/Item_Shawarma_Wrap.png/revision/latest/scale-to-width-down/45?cb=20220825090916" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Shawarma_Wrap" title="Shawarma Wrap">Shawarma Wrap</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dish
// </td>
// <td>Increases all party members' ATK by <b>66</b>~<b>95</b> for 300s. In Co-Op Mode, this effect only applies to your own character(s).
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Shocking_Essential_Oil" title="Shocking Essential Oil"><img alt="Item Shocking Essential Oil.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/00/Item_Shocking_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109223428" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Shocking Essential Oil.png" data-image-key="Item_Shocking_Essential_Oil.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/00/Item_Shocking_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109223428" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Shocking_Essential_Oil" title="Shocking Essential Oil">Shocking Essential Oil</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Electro_DMG_Up" title="Electro DMG Up"><img alt="Icon Electro DMG Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Icon_Electro_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171046" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Electro DMG Up.png" data-image-key="Icon_Electro_DMG_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Icon_Electro_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171046" class=" lazyloaded"></a> Essential Oils
// </td>
// <td>Increases all party members' <span class="text-electro"><b>Electro DMG</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Soba_Noodles" title="Soba Noodles"><img alt="Item Soba Noodles.png" src="https://static.wikia.nocookie.net/gensin-impact/images/d/d8/Item_Soba_Noodles.png/revision/latest/scale-to-width-down/45?cb=20211014000641" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Soba Noodles.png" data-image-key="Item_Soba_Noodles.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/d/d8/Item_Soba_Noodles.png/revision/latest/scale-to-width-down/45?cb=20211014000641" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Soba_Noodles" title="Soba Noodles">Soba Noodles</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>8</b>~<b>10</b>% of Max HP to the selected character and regenerates <b>210</b>~<b>300</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Squirrel_Fish" title="Squirrel Fish"><img alt="Item Squirrel Fish.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/ce/Item_Squirrel_Fish.png/revision/latest/scale-to-width-down/45?cb=20210416224105" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Squirrel Fish.png" data-image-key="Item_Squirrel_Fish.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/ce/Item_Squirrel_Fish.png/revision/latest/scale-to-width-down/45?cb=20210416224105" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Squirrel_Fish" title="Squirrel Fish">Squirrel Fish</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Steak" title="Steak"><img alt="Item Steak.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Item_Steak.png/revision/latest/scale-to-width-down/45?cb=20210416223306" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Steak.png" data-image-key="Item_Steak.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Item_Steak.png/revision/latest/scale-to-width-down/45?cb=20210416223306" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Steak" title="Steak">Steak</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>50</b>~<b>150</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sticky_Honey_Roast" title="Sticky Honey Roast"><img alt="Item Sticky Honey Roast.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Sticky_Honey_Roast.png/revision/latest/scale-to-width-down/45?cb=20210416222832" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sticky Honey Roast.png" data-image-key="Item_Sticky_Honey_Roast.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Sticky_Honey_Roast.png/revision/latest/scale-to-width-down/45?cb=20210416222832" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sticky_Honey_Roast" title="Sticky Honey Roast">Sticky Honey Roast</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party member's climbing and sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Stir-Fried_Filet" title="Stir-Fried Filet"><img alt="Item Stir-Fried Filet.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Stir-Fried_Filet.png/revision/latest/scale-to-width-down/45?cb=20210415140909" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Stir-Fried Filet.png" data-image-key="Item_Stir-Fried_Filet.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Stir-Fried_Filet.png/revision/latest/scale-to-width-down/45?cb=20210415140909" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Stir-Fried_Filet" title="Stir-Fried Filet">Stir-Fried Filet</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>50</b>~<b>150</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Stir-Fried_Fish_Noodles" title="Stir-Fried Fish Noodles"><img alt="Item Stir-Fried Fish Noodles.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Stir-Fried_Fish_Noodles.png/revision/latest/scale-to-width-down/45?cb=20210428163030" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Stir-Fried Fish Noodles.png" data-image-key="Item_Stir-Fried_Fish_Noodles.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Stir-Fried_Fish_Noodles.png/revision/latest/scale-to-width-down/45?cb=20210428163030" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Stir-Fried_Fish_Noodles" title="Stir-Fried Fish Noodles">Stir-Fried Fish Noodles</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>18</b>~<b>22</b>% of Max HP and regenerates <b>300</b>~<b>470</b> HP every 5 seconds for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Stir-Fried_Shrimp" title="Stir-Fried Shrimp"><img alt="Item Stir-Fried Shrimp.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/62/Item_Stir-Fried_Shrimp.png/revision/latest/scale-to-width-down/45?cb=20210609050922" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Stir-Fried Shrimp.png" data-image-key="Item_Stir-Fried_Shrimp.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/62/Item_Stir-Fried_Shrimp.png/revision/latest/scale-to-width-down/45?cb=20210609050922" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Stir-Fried_Shrimp" title="Stir-Fried Shrimp">Stir-Fried Shrimp</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' Shield strength by <b>20</b>~<b>30</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Stone_Harbor_Delicacies" title="Stone Harbor Delicacies"><img alt="Item Stone Harbor Delicacies.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/70/Item_Stone_Harbor_Delicacies.png/revision/latest/scale-to-width-down/45?cb=20210216221804" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Stone Harbor Delicacies.png" data-image-key="Item_Stone_Harbor_Delicacies.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/70/Item_Stone_Harbor_Delicacies.png/revision/latest/scale-to-width-down/45?cb=20210216221804" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Stone_Harbor_Delicacies" title="Stone Harbor Delicacies">Stone Harbor Delicacies</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>6</b>~<b>12</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Streaming_Essential_Oil" title="Streaming Essential Oil"><img alt="Item Streaming Essential Oil.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/08/Item_Streaming_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221058" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Streaming Essential Oil.png" data-image-key="Item_Streaming_Essential_Oil.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/08/Item_Streaming_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221058" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Streaming_Essential_Oil" title="Streaming Essential Oil">Streaming Essential Oil</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Hydro_DMG_Up" title="Hydro DMG Up"><img alt="Icon Hydro DMG Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Icon_Hydro_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171051" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Hydro DMG Up.png" data-image-key="Icon_Hydro_DMG_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Icon_Hydro_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171051" class=" lazyloaded"></a> Essential Oils
// </td>
// <td>Increases all party members' <span class="text-hydro"><b>Hydro DMG</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sunset_Berry_Tea" title="Sunset Berry Tea"><img alt="Item Sunset Berry Tea.png" src="https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Item_Sunset_Berry_Tea.png/revision/latest/scale-to-width-down/45?cb=20220825235427" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sunset Berry Tea.png" data-image-key="Item_Sunset_Berry_Tea.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Item_Sunset_Berry_Tea.png/revision/latest/scale-to-width-down/45?cb=20220825235427" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sunset_Berry_Tea" title="Sunset Berry Tea">Sunset Berry Tea</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dish
// </td>
// <td>Increases all party members' ATK by <b>160</b>~<b>228</b> for 300s. In Co-Op Mode, this effect only applies to your own character(s).
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sunshine_Sprat" title="Sunshine Sprat"><img alt="Item Sunshine Sprat.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/5a/Item_Sunshine_Sprat.png/revision/latest/scale-to-width-down/45?cb=20210417152138" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sunshine Sprat.png" data-image-key="Item_Sunshine_Sprat.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/5a/Item_Sunshine_Sprat.png/revision/latest/scale-to-width-down/45?cb=20210417152138" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sunshine_Sprat" title="Sunshine Sprat">Sunshine Sprat</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' Shield strength by <b>20</b>~<b>30</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sweet_Madame" title="Sweet Madame"><img alt="Item Sweet Madame.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/12/Item_Sweet_Madame.png/revision/latest/scale-to-width-down/45?cb=20210415134415" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sweet Madame.png" data-image-key="Item_Sweet_Madame.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/12/Item_Sweet_Madame.png/revision/latest/scale-to-width-down/45?cb=20210415134415" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sweet_Madame" title="Sweet Madame">Sweet Madame</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>20</b>~<b>24</b>% of Max HP and an additional <b>900</b>~<b>1,500</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sweet_Shrimp_Sushi" title="Sweet Shrimp Sushi"><img alt="Item Sweet Shrimp Sushi.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Sweet_Shrimp_Sushi.png/revision/latest/scale-to-width-down/45?cb=20210901042559" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sweet Shrimp Sushi.png" data-image-key="Item_Sweet_Shrimp_Sushi.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Sweet_Shrimp_Sushi.png/revision/latest/scale-to-width-down/45?cb=20210901042559" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sweet_Shrimp_Sushi" title="Sweet Shrimp Sushi">Sweet Shrimp Sushi</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>50</b>~<b>150</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Tahchin" title="Tahchin"><img alt="Item Tahchin.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/49/Item_Tahchin.png/revision/latest/scale-to-width-down/45?cb=20220825090812" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Tahchin.png" data-image-key="Item_Tahchin.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/49/Item_Tahchin.png/revision/latest/scale-to-width-down/45?cb=20220825090812" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Tahchin" title="Tahchin">Tahchin</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td>Recovery Dishes
// </td>
// <td>Restores <b>26</b>~<b>30</b>% of Max HP to the selected character and regenerates <b>450</b>~<b>790</b> HP every 5s for 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Taiyaki" title="Taiyaki"><img alt="Item Taiyaki.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Item_Taiyaki.png/revision/latest/scale-to-width-down/45?cb=20210901042544" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Taiyaki.png" data-image-key="Item_Taiyaki.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Item_Taiyaki.png/revision/latest/scale-to-width-down/45?cb=20210901042544" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Taiyaki" title="Taiyaki">Taiyaki</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>26</b>~<b>30</b>% of Max HP to the selected character. Regenerates <b>450</b>~<b>790</b> HP every 5s for the next 30s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Tandoori_Roast_Chicken" title="Tandoori Roast Chicken"><img alt="Item Tandoori Roast Chicken.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Tandoori_Roast_Chicken.png/revision/latest/scale-to-width-down/45?cb=20220825090922" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Tandoori Roast Chicken.png" data-image-key="Item_Tandoori_Roast_Chicken.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Tandoori_Roast_Chicken.png/revision/latest/scale-to-width-down/45?cb=20220825090922" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Tandoori_Roast_Chicken" title="Tandoori Roast Chicken">Tandoori Roast Chicken</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>224</b>~<b>320</b> and CRIT Rate by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Tea_Break_Pancake" title="Tea Break Pancake"><img alt="Item Tea Break Pancake.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/25/Item_Tea_Break_Pancake.png/revision/latest/scale-to-width-down/45?cb=20210417154511" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Tea Break Pancake.png" data-image-key="Item_Tea_Break_Pancake.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/25/Item_Tea_Break_Pancake.png/revision/latest/scale-to-width-down/45?cb=20210417154511" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Tea_Break_Pancake" title="Tea Break Pancake">Tea Break Pancake</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>250</b>~<b>550</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Teyvat_Fried_Egg" title="Teyvat Fried Egg"><img alt="Item Teyvat Fried Egg.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Teyvat_Fried_Egg.png/revision/latest/scale-to-width-down/45?cb=20210416223215" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Teyvat Fried Egg.png" data-image-key="Item_Teyvat_Fried_Egg.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Teyvat_Fried_Egg.png/revision/latest/scale-to-width-down/45?cb=20210416223215" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Teyvat_Fried_Egg" title="Teyvat Fried Egg">Teyvat Fried Egg</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>50</b>~<b>150</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Tianshu_Meat" title="Tianshu Meat"><img alt="Item Tianshu Meat.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Item_Tianshu_Meat.png/revision/latest/scale-to-width-down/45?cb=20210415145930" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Tianshu Meat.png" data-image-key="Item_Tianshu_Meat.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Item_Tianshu_Meat.png/revision/latest/scale-to-width-down/45?cb=20210415145930" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Tianshu_Meat" title="Tianshu Meat">Tianshu Meat</a>
// </td>
// <td><img alt="4 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" decoding="async" loading="lazy" title="4 Stars" width="51" height="16" data-image-name="Icon 4 Stars.png" data-image-key="Icon_4_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' <span class="text-physical"><b>Physical DMG</b></span> by <b>25</b>~<b>45</b>% and CRIT Rate by <b>6</b>~<b>10</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Tonkotsu_Ramen" title="Tonkotsu Ramen"><img alt="Item Tonkotsu Ramen.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Item_Tonkotsu_Ramen.png/revision/latest/scale-to-width-down/45?cb=20210723021836" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Tonkotsu Ramen.png" data-image-key="Item_Tonkotsu_Ramen.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Item_Tonkotsu_Ramen.png/revision/latest/scale-to-width-down/45?cb=20210723021836" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Tonkotsu_Ramen" title="Tonkotsu Ramen">Tonkotsu Ramen</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Tri-Flavored_Skewer" title="Tri-Flavored Skewer"><img alt="Item Tri-Flavored Skewer.png" src="https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Item_Tri-Flavored_Skewer.png/revision/latest/scale-to-width-down/45?cb=20210723021644" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Tri-Flavored Skewer.png" data-image-key="Item_Tri-Flavored_Skewer.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Item_Tri-Flavored_Skewer.png/revision/latest/scale-to-width-down/45?cb=20210723021644" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Tri-Flavored_Skewer" title="Tri-Flavored Skewer">Tri-Flavored Skewer</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>160</b>~<b>228</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Tricolor_Dango" title="Tricolor Dango"><img alt="Item Tricolor Dango.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/52/Item_Tricolor_Dango.png/revision/latest/scale-to-width-down/45?cb=20210723020841" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Tricolor Dango.png" data-image-key="Item_Tricolor_Dango.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/52/Item_Tricolor_Dango.png/revision/latest/scale-to-width-down/45?cb=20210723020841" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Tricolor_Dango" title="Tricolor Dango">Tricolor Dango</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Triple-Layered_Consomm%C3%A9" title="Triple-Layered Consommé"><img alt="Item Triple-Layered Consommé.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Triple-Layered_Consomm%C3%A9.png/revision/latest/scale-to-width-down/45?cb=20210415145658" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Triple-Layered Consommé.png" data-image-key="Item_Triple-Layered_Consomm%C3%A9.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Triple-Layered_Consomm%C3%A9.png/revision/latest/scale-to-width-down/45?cb=20210415145658" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Triple-Layered_Consomm%C3%A9" title="Triple-Layered Consommé">Triple-Layered Consommé</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' Shield strength by <b>20</b>~<b>30</b>% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Tuna_Sushi" title="Tuna Sushi"><img alt="Item Tuna Sushi.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/68/Item_Tuna_Sushi.png/revision/latest/scale-to-width-down/45?cb=20210723023501" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Tuna Sushi.png" data-image-key="Item_Tuna_Sushi.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/68/Item_Tuna_Sushi.png/revision/latest/scale-to-width-down/45?cb=20210723023501" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Tuna_Sushi" title="Tuna Sushi">Tuna Sushi</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>20</b>~<b>24</b>% of Max HP and an additional <b>900</b>~<b>1,500</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Udon_Noodles" title="Udon Noodles"><img alt="Item Udon Noodles.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Udon_Noodles.png/revision/latest/scale-to-width-down/45?cb=20220222033815" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Udon Noodles.png" data-image-key="Item_Udon_Noodles.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Udon_Noodles.png/revision/latest/scale-to-width-down/45?cb=20220222033815" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Udon_Noodles" title="Udon Noodles">Udon Noodles</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>250</b>~<b>550</b> HP.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Unagi_Chazuke" title="Unagi Chazuke"><img alt="Item Unagi Chazuke.png" src="https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Item_Unagi_Chazuke.png/revision/latest/scale-to-width-down/45?cb=20211124035945" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Unagi Chazuke.png" data-image-key="Item_Unagi_Chazuke.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Item_Unagi_Chazuke.png/revision/latest/scale-to-width-down/45?cb=20211124035945" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Unagi_Chazuke" title="Unagi Chazuke">Unagi Chazuke</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' <a href="/wiki/Healing_Bonus" class="mw-redirect" title="Healing Bonus">Healing Bonus</a> by <b>15%</b>~<b>20%</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Universal_Peace" title="Universal Peace"><img alt="Item Universal Peace.png" src="https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Item_Universal_Peace.png/revision/latest/scale-to-width-down/45?cb=20210417152316" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Universal Peace.png" data-image-key="Item_Universal_Peace.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Item_Universal_Peace.png/revision/latest/scale-to-width-down/45?cb=20210417152316" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Universal_Peace" title="Universal Peace">Universal Peace</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>30</b>~<b>34</b>% of Max HP and an additional <b>600</b>~<b>1,900</b> HP to the selected character.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Unmoving_Essential_Oil" title="Unmoving Essential Oil"><img alt="Item Unmoving Essential Oil.png" src="https://static.wikia.nocookie.net/gensin-impact/images/3/36/Item_Unmoving_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221053" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Unmoving Essential Oil.png" data-image-key="Item_Unmoving_Essential_Oil.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/3/36/Item_Unmoving_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221053" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Unmoving_Essential_Oil" title="Unmoving Essential Oil">Unmoving Essential Oil</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Geo_DMG_Up" title="Geo DMG Up"><img alt="Icon Geo DMG Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/0/01/Icon_Geo_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171048" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Geo DMG Up.png" data-image-key="Icon_Geo_DMG_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/0/01/Icon_Geo_DMG_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171048" class=" lazyloaded"></a> Essential Oils
// </td>
// <td>Increases all party members' <span class="text-geo"><b>Geo DMG</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Vegetarian_Abalone" title="Vegetarian Abalone"><img alt="Item Vegetarian Abalone.png" src="https://static.wikia.nocookie.net/gensin-impact/images/3/37/Item_Vegetarian_Abalone.png/revision/latest/scale-to-width-down/45?cb=20210216221639" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Vegetarian Abalone.png" data-image-key="Item_Vegetarian_Abalone.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/3/37/Item_Vegetarian_Abalone.png/revision/latest/scale-to-width-down/45?cb=20210216221639" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Vegetarian_Abalone" title="Vegetarian Abalone">Vegetarian Abalone</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>250</b>~<b>550</b> HP
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Wakatakeni" title="Wakatakeni"><img alt="Item Wakatakeni.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Wakatakeni.png/revision/latest/scale-to-width-down/45?cb=20211014000644" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Wakatakeni.png" data-image-key="Item_Wakatakeni.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Wakatakeni.png/revision/latest/scale-to-width-down/45?cb=20211014000644" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Wakatakeni" title="Wakatakeni">Wakatakeni</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>88</b>~<b>126</b> for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Windbarrier_Potion" title="Windbarrier Potion"><img alt="Item Windbarrier Potion.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Windbarrier_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109223450" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Windbarrier Potion.png" data-image-key="Item_Windbarrier_Potion.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Windbarrier_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109223450" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Windbarrier_Potion" title="Windbarrier Potion">Windbarrier Potion</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Anemo_RES_Up" title="Anemo RES Up"><img alt="Icon Anemo RES Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/71/Icon_Anemo_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171104" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Anemo RES Up.png" data-image-key="Icon_Anemo_RES_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/71/Icon_Anemo_RES_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171104" class=" lazyloaded"></a> Potions
// </td>
// <td>Increases all party members' <span class="text-anemo"><b>Anemo RES</b></span> by 25% for 300s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Zhongyuan_Chop_Suey" title="Zhongyuan Chop Suey"><img alt="Item Zhongyuan Chop Suey.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/8c/Item_Zhongyuan_Chop_Suey.png/revision/latest/scale-to-width-down/45?cb=20210416223953" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Zhongyuan Chop Suey.png" data-image-key="Item_Zhongyuan_Chop_Suey.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/8c/Item_Zhongyuan_Chop_Suey.png/revision/latest/scale-to-width-down/45?cb=20210416223953" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Zhongyuan_Chop_Suey" title="Zhongyuan Chop Suey">Zhongyuan Chop Suey</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' climbing and sprinting Stamina consumption by <b>15</b>~<b>25</b>% for 900s.
// </td>
// <td>Yes
// </td></tr><tr>
// <td align="center"><a href="/wiki/Activated_Starshroom" title="Activated Starshroom"><img alt="Item Activated Starshroom.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/27/Item_Activated_Starshroom.png/revision/latest/scale-to-width-down/45?cb=20220827114923" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Activated Starshroom.png" data-image-key="Item_Activated_Starshroom.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/27/Item_Activated_Starshroom.png/revision/latest/scale-to-width-down/45?cb=20220827114923" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Activated_Starshroom" title="Activated Starshroom">Activated Starshroom</a>
// </td>
// <td>
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>800</b> HP.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Apple_Cider" title="Apple Cider"><img alt="Item Apple Cider.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Apple_Cider.png/revision/latest/scale-to-width-down/45?cb=20201126235210" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Apple Cider.png" data-image-key="Item_Apple_Cider.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Apple_Cider.png/revision/latest/scale-to-width-down/45?cb=20201126235210" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Apple_Cider" title="Apple Cider">Apple Cider</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>26</b>% of Max HP to the selected character and regenerates <b>570</b> HP every 5s for 30s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Apple" title="Apple"><img alt="Item Apple.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Apple.png/revision/latest/scale-to-width-down/45?cb=20210113032853" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Apple.png" data-image-key="Item_Apple.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Apple.png/revision/latest/scale-to-width-down/45?cb=20210113032853" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Apple" title="Apple">Apple</a>
// </td>
// <td>
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>300</b> HP.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Berry_%26_Mint_Burst" title="Berry &amp; Mint Burst"><img alt="Item Berry &amp; Mint Burst.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Item_Berry_%26_Mint_Burst.png/revision/latest/scale-to-width-down/45?cb=20201126235056" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Berry &amp; Mint Burst.png" data-image-key="Item_Berry_%26amp%3B_Mint_Burst.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Item_Berry_%26_Mint_Burst.png/revision/latest/scale-to-width-down/45?cb=20201126235056" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Berry_%26_Mint_Burst" title="Berry &amp; Mint Burst">Berry &amp; Mint Burst</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>16</b>% for 300s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Crocodile_Jerky" title="Crocodile Jerky"><img alt="Item Crocodile Jerky.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Item_Crocodile_Jerky.png/revision/latest/scale-to-width-down/45?cb=20230118045942" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Crocodile Jerky.png" data-image-key="Item_Crocodile_Jerky.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Item_Crocodile_Jerky.png/revision/latest/scale-to-width-down/45?cb=20230118045942" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Crocodile_Jerky" title="Crocodile Jerky">Crocodile Jerky</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' <a href="/wiki/ATK" title="ATK">ATK</a> by 114 for 300s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Dango_Milk" title="Dango Milk"><img alt="Item Dango Milk.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/83/Item_Dango_Milk.png/revision/latest/scale-to-width-down/45?cb=20210904020630" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Dango Milk.png" data-image-key="Item_Dango_Milk.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/83/Item_Dango_Milk.png/revision/latest/scale-to-width-down/45?cb=20210904020630" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Dango_Milk" title="Dango Milk">Dango Milk</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>26</b>% of Max HP to the selected character and regenerates <b>570</b> HP every 5s for 30s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Holy_Water" title="Holy Water"><img alt="Item Holy Water.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Item_Holy_Water.png/revision/latest/scale-to-width-down/45?cb=20201126234926" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Holy Water.png" data-image-key="Item_Holy_Water.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Item_Holy_Water.png/revision/latest/scale-to-width-down/45?cb=20201126234926" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Holy_Water" title="Holy Water">Holy Water</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td>Recovery Dishes
// </td>
// <td>​
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lantern_Rite_Special_Come_and_Get_It" title="Lantern Rite Special Come and Get It"><img alt="Item Lantern Rite Special Come and Get It.png" src="https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Item_Delicious_Come_and_Get_It.png/revision/latest/scale-to-width-down/45?cb=20210417151300" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Delicious Come and Get It.png" data-image-key="Item_Delicious_Come_and_Get_It.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Item_Delicious_Come_and_Get_It.png/revision/latest/scale-to-width-down/45?cb=20210417151300" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lantern_Rite_Special_Come_and_Get_It" title="Lantern Rite Special Come and Get It">Lantern Rite Special Come and Get It</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/CRIT_Rate_Up" title="CRIT Rate Up"><img alt="Icon CRIT Rate Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon CRIT Rate Up.png" data-image-key="Icon_CRIT_Rate_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/58/Icon_CRIT_Rate_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171042" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' CRIT Rate by <b>20</b>% for 300s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lantern_Rite_Special_Fried_Radish_Balls" title="Lantern Rite Special Fried Radish Balls"><img alt="Item Lantern Rite Special Fried Radish Balls.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Item_Delicious_Fried_Radish_Balls.png/revision/latest/scale-to-width-down/45?cb=20210417154310" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Delicious Fried Radish Balls.png" data-image-key="Item_Delicious_Fried_Radish_Balls.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Item_Delicious_Fried_Radish_Balls.png/revision/latest/scale-to-width-down/45?cb=20210417154310" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lantern_Rite_Special_Fried_Radish_Balls" title="Lantern Rite Special Fried Radish Balls">Lantern Rite Special Fried Radish Balls</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>95</b> for 300s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lantern_Rite_Special_Grilled_Tiger_Fish" title="Lantern Rite Special Grilled Tiger Fish"><img alt="Item Lantern Rite Special Grilled Tiger Fish.png" src="https://static.wikia.nocookie.net/gensin-impact/images/3/3b/Item_Delicious_Grilled_Tiger_Fish.png/revision/latest/scale-to-width-down/45?cb=20210415132140" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Delicious Grilled Tiger Fish.png" data-image-key="Item_Delicious_Grilled_Tiger_Fish.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/3/3b/Item_Delicious_Grilled_Tiger_Fish.png/revision/latest/scale-to-width-down/45?cb=20210415132140" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lantern_Rite_Special_Grilled_Tiger_Fish" title="Lantern Rite Special Grilled Tiger Fish">Lantern Rite Special Grilled Tiger Fish</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>10</b>% of Max HP and an additional <b>1,200</b> HP to the selected character.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lantern_Rite_Special_Jewelry_Soup" title="Lantern Rite Special Jewelry Soup"><img alt="Item Lantern Rite Special Jewelry Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Delicious_Jewelry_Soup.png/revision/latest/scale-to-width-down/45?cb=20210415141521" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Delicious Jewelry Soup.png" data-image-key="Item_Delicious_Jewelry_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Delicious_Jewelry_Soup.png/revision/latest/scale-to-width-down/45?cb=20210415141521" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lantern_Rite_Special_Jewelry_Soup" title="Lantern Rite Special Jewelry Soup">Lantern Rite Special Jewelry Soup</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' DEF by <b>126</b> for 300s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lantern_Rite_Special_Lotus_Seed_and_Bird_Egg_Soup" title="Lantern Rite Special Lotus Seed and Bird Egg Soup"><img alt="Item Lantern Rite Special Lotus Seed and Bird Egg Soup.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Delicious_Lotus_Seed_and_Bird_Egg_Soup.png/revision/latest/scale-to-width-down/45?cb=20210417155207" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Delicious Lotus Seed and Bird Egg Soup.png" data-image-key="Item_Delicious_Lotus_Seed_and_Bird_Egg_Soup.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Delicious_Lotus_Seed_and_Bird_Egg_Soup.png/revision/latest/scale-to-width-down/45?cb=20210417155207" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lantern_Rite_Special_Lotus_Seed_and_Bird_Egg_Soup" title="Lantern Rite Special Lotus Seed and Bird Egg Soup">Lantern Rite Special Lotus Seed and Bird Egg Soup</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Reduction" title="Stamina Reduction"><img alt="Icon Stamina Reduction.png" src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" decoding="async" loading="lazy" width="30" height="28" data-image-name="Icon Stamina Reduction.png" data-image-key="Icon_Stamina_Reduction.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Icon_Stamina_Reduction.png/revision/latest/scale-to-width-down/30?cb=20210525171102" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Decreases all party members' sprinting <a href="/wiki/Stamina" title="Stamina">Stamina</a> consumption by <b>25</b>% for 900s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lantern_Rite_Special_Noodles_with_Mountain_Delicacies" title="Lantern Rite Special Noodles with Mountain Delicacies"><img alt="Item Lantern Rite Special Noodles with Mountain Delicacies.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Delicious_Noodles_with_Mountain_Delicacies.png/revision/latest/scale-to-width-down/45?cb=20210415132153" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Delicious Noodles with Mountain Delicacies.png" data-image-key="Item_Delicious_Noodles_with_Mountain_Delicacies.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Delicious_Noodles_with_Mountain_Delicacies.png/revision/latest/scale-to-width-down/45?cb=20210415132153" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lantern_Rite_Special_Noodles_with_Mountain_Delicacies" title="Lantern Rite Special Noodles with Mountain Delicacies">Lantern Rite Special Noodles with Mountain Delicacies</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Stamina_Increase" title="Stamina Increase"><img alt="Icon Stamina Increase.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" decoding="async" loading="lazy" width="30" height="29" data-image-name="Icon Stamina Increase.png" data-image-key="Icon_Stamina_Increase.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/7a/Icon_Stamina_Increase.png/revision/latest/scale-to-width-down/30?cb=20210525171101" class=" ls-is-cached lazyloaded"></a> Adventurer's Dishes
// </td>
// <td>Restores <b>60</b> Stamina.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Lantern_Rite_Special_Triple-Layered_Consomm%C3%A9" title="Lantern Rite Special Triple-Layered Consommé"><img alt="Item Lantern Rite Special Triple-Layered Consommé.png" src="https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Delicious_Triple-Layered_Consomm%C3%A9.png/revision/latest/scale-to-width-down/45?cb=20210415183048" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Delicious Triple-Layered Consommé.png" data-image-key="Item_Delicious_Triple-Layered_Consomm%C3%A9.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Delicious_Triple-Layered_Consomm%C3%A9.png/revision/latest/scale-to-width-down/45?cb=20210415183048" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Lantern_Rite_Special_Triple-Layered_Consomm%C3%A9" title="Lantern Rite Special Triple-Layered Consommé">Lantern Rite Special Triple-Layered Consommé</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/DEF_Up" title="DEF Up"><img alt="Icon DEF Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon DEF Up.png" data-image-key="Icon_DEF_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/14/Icon_DEF_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171045" class=" ls-is-cached lazyloaded"></a> DEF-Boosting Dishes
// </td>
// <td>Increases all party members' Shield strength by <b>30</b>%.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Pop%27s_Teas" title="Pop's Teas"><img alt="Item Pop's Teas.png" src="https://static.wikia.nocookie.net/gensin-impact/images/5/52/Item_Pop%27s_Teas.png/revision/latest/scale-to-width-down/45?cb=20201210063332" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Pop's Teas.png" data-image-key="Item_Pop%27s_Teas.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/5/52/Item_Pop%27s_Teas.png/revision/latest/scale-to-width-down/45?cb=20201210063332" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Pop%27s_Teas" title="Pop's Teas">Pop's Teas</a>
// </td>
// <td><img alt="1 Star" src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" decoding="async" loading="lazy" title="1 Star" width="16" height="16" data-image-name="Icon 1 Star.png" data-image-key="Icon_1_Star.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Icon_1_Star.png/revision/latest/scale-to-width-down/16?cb=20201226100531" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>14</b>% of Max HP to the selected character and regenerates <b>350</b> HP every 5s for 30s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Scorched_Starshroom" title="Scorched Starshroom"><img alt="Item Scorched Starshroom.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/8b/Item_Scorched_Starshroom.png/revision/latest/scale-to-width-down/45?cb=20220827114922" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Scorched Starshroom.png" data-image-key="Item_Scorched_Starshroom.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/8b/Item_Scorched_Starshroom.png/revision/latest/scale-to-width-down/45?cb=20220827114922" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Scorched_Starshroom" title="Scorched Starshroom">Scorched Starshroom</a>
// </td>
// <td>
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>1</b> HP.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sparkling_Berry_Juice" title="Sparkling Berry Juice"><img alt="Item Sparkling Berry Juice.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Sparkling_Berry_Juice.png/revision/latest/scale-to-width-down/45?cb=20220929193634" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sparkling Berry Juice.png" data-image-key="Item_Sparkling_Berry_Juice.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Sparkling_Berry_Juice.png/revision/latest/scale-to-width-down/45?cb=20220929193634" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sparkling_Berry_Juice" title="Sparkling Berry Juice">Sparkling Berry Juice</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Revive" title="Revive"><img alt="Icon Revive.png" src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Revive.png" data-image-key="Icon_Revive.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/2/20/Icon_Revive.png/revision/latest/scale-to-width-down/30?cb=20210525171058" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Revives a character and restores <b>15</b>% of Max HP, then restores an additional <b>550</b> HP.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Special_Mushroom_Pizza" title="Special Mushroom Pizza"><img alt="Item Special Mushroom Pizza.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e4/Item_Special_Mushroom_Pizza.png/revision/latest/scale-to-width-down/45?cb=20210918205436" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Special Mushroom Pizza.png" data-image-key="Item_Special_Mushroom_Pizza.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e4/Item_Special_Mushroom_Pizza.png/revision/latest/scale-to-width-down/45?cb=20210918205436" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Special_Mushroom_Pizza" title="Special Mushroom Pizza">Special Mushroom Pizza</a>
// </td>
// <td><img alt="3 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" decoding="async" loading="lazy" title="3 Stars" width="40" height="16" data-image-name="Icon 3 Stars.png" data-image-key="Icon_3_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_3_Stars.png/revision/latest/scale-to-width-down/40?cb=20201226100630" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/Regeneration" title="Regeneration"><img alt="Icon Regeneration.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Regeneration.png" data-image-key="Icon_Regeneration.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Icon_Regeneration.png/revision/latest/scale-to-width-down/30?cb=20210525171056" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores 28% of Max HP to the selected character. Regenerates 620 HP every 5s for 30s.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Starshroom" title="Starshroom"><img alt="Item Starshroom.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Item_Starshroom.png/revision/latest/scale-to-width-down/45?cb=20220330031844" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Starshroom.png" data-image-key="Item_Starshroom.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Item_Starshroom.png/revision/latest/scale-to-width-down/45?cb=20220330031844" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Starshroom" title="Starshroom">Starshroom</a>
// </td>
// <td>
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>300</b> HP.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Sunsettia" title="Sunsettia"><img alt="Item Sunsettia.png" src="https://static.wikia.nocookie.net/gensin-impact/images/4/45/Item_Sunsettia.png/revision/latest/scale-to-width-down/45?cb=20210109214706" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Sunsettia.png" data-image-key="Item_Sunsettia.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/4/45/Item_Sunsettia.png/revision/latest/scale-to-width-down/45?cb=20210109214706" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Sunsettia" title="Sunsettia">Sunsettia</a>
// </td>
// <td>
// </td>
// <td><a href="/wiki/Healing" title="Healing"><img alt="Icon Healing.png" src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon Healing.png" data-image-key="Icon_Healing.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Healing.png/revision/latest/scale-to-width-down/30?cb=20210525171050" class=" ls-is-cached lazyloaded"></a> Recovery Dishes
// </td>
// <td>Restores <b>300</b> HP.
// </td>
// <td>No
// </td></tr><tr>
// <td align="center"><a href="/wiki/Wolfhook_Juice" title="Wolfhook Juice"><img alt="Item Wolfhook Juice.png" src="https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Item_Wolfhook_Juice.png/revision/latest/scale-to-width-down/45?cb=20201126235131" decoding="async" loading="lazy" width="45" height="45" data-image-name="Item Wolfhook Juice.png" data-image-key="Item_Wolfhook_Juice.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Item_Wolfhook_Juice.png/revision/latest/scale-to-width-down/45?cb=20201126235131" class=" lazyloaded"></a>
// </td>
// <td><a href="/wiki/Wolfhook_Juice" title="Wolfhook Juice">Wolfhook Juice</a>
// </td>
// <td><img alt="2 Stars" src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" decoding="async" loading="lazy" title="2 Stars" width="28" height="16" data-image-name="Icon 2 Stars.png" data-image-key="Icon_2_Stars.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/6/64/Icon_2_Stars.png/revision/latest/scale-to-width-down/28?cb=20201226100559" class=" ls-is-cached lazyloaded">
// </td>
// <td><a href="/wiki/ATK_Up" title="ATK Up"><img alt="Icon ATK Up.png" src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" decoding="async" loading="lazy" width="30" height="30" data-image-name="Icon ATK Up.png" data-image-key="Icon_ATK_Up.png" data-src="https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Icon_ATK_Up.png/revision/latest/scale-to-width-down/30?cb=20210525171039" class=" ls-is-cached lazyloaded"></a> ATK-Boosting Dishes
// </td>
// <td>Increases all party members' ATK by <b>114</b> for 300s.
// </td>
// <td>No
// </td></tr></tbody><tfoot></tfoot></table>`);

// [results] = jsonTables.results;
// final_str = '';
// for(i in results)
// {
//   final_str += JSON.stringify(results[i]);
//   fs.appendFile('DishList.json', final_str, (err) => {console.log(err)});
// }

// import data from './DishList.json' assert { type: 'JSON' };
// console.log(data);

// fetch('./DishList.json')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const fs = require('fs');
const json_data = require('./DishList.json');

fs.readFile(json_data, 'utf8', function (err, data) {
  try {
    console.log(data);
    data = JSON.parse(data)
    for (let i in data){
    console.log('Name:',data[i].name)
    }
  } catch (e) {
    // Catch error in case file doesn't exist or isn't valid JSON
  }
});