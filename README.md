<h1 align="center", style="color:blue;">Необходимая документация для создание игры</h1>

<p align="center">
  <img src="https://github.com/TNFindi/testindi/images/photo_2024-10-15_15-31-14.jpg"/>
</p>

**Графика на UNITY -** [Unity-графика](https://docs.unity3d.com/Manual/Quickstart2DCreate.html)

**Настройка интерфейса. Туториал в UNITY -**  [Unity-настройка интерфейса](https://learn.unity.com/tutorial/2d-game-kit-walkthrough)

**Создание карты. Генерация. Туториал в UNITY -**  [Unity-создание карты](https://github.com/ammarsufyan/Procedural-2D-Dungeon-Unity)

# СОХРАНЕНИЕ РЕПОЗИТОРИЯ НА ПК

> [!TIP]
> ## При помощи cd опускаемся до нужно вам директории (C:\Users\YourName\...)

##В cmd клонируем репу: 
```shell 
git clone https://github.com/MarkVRKS/TNFindi.git`
```
##Запускаем наш проект:
```shell
git add .
```
*Соединяемся с VScode при помощи Git BUSH!!!*

## Ищем клонируемый репозиторий у нас в файлах в компьютере, проверям, всё ли сохранили (нажмите ещё раз Ctrl + S)
Затем нажимаем пк по нашей папке (TNFindi) и выбираем ***Open Git Bash here***!!!
Либо же просто в Git Bash вводим путь до файла: 
```shell
cd C:\Users\...\TNFindi
```
## Проверяем статус нашей директории:
```shell
git status
```
## Если у вас есть несохраненные изменения, Git Bash покажет список файлов, которые были изменены.
Добавляем изменения (если они необходимы) через ввод в консоль 
```shell 
git add .
```
```shell 
git add filename1 filename2
```

## И коммитим все наши изменения! ОБЯЗАТЕЛЬНО!!!
```shell
git commit -m "Описываем, что конкретно вы сохраняете"
```

## При необходимости добавляем удалённый репозиторий
```shell
git remote add origin https://github.com/MarkVRKS/TNFindi.git    
```

## И пушим всё на гитхаб:
```shell
git push origin main
```
     

     



## 1.СОДЕРЖАНИЕ :shipit:
- [КОНЦЕПЦИЯ](##КОНЦЕПЦИЯ)
- [РАБОЧИЙ СТЕК](#рабочий-стек-на-выбор)
- [ГРАФИКА](#графика)
- [ЗВУК](#звук-ресурсы-звука)
- [ФУНКЦИОНАЛ ИГРЫ](#функционал-игры)
- [ПОЛЕЗНЫЕ ССЫЛКИ](#полезные-ссылки)
	

## 2.РАБОЧИЙ СТЕК
- **``JavaScript`` + ``TypeScript``**: - 
    -  https://habr.com/ru/articles/741086/ ← удобные фреймворки для создания игр на js/ts
    > `MarkVRKS`: Мы уже решили, что работаем на JS + TS.	
- **``C++``   +    ``C#``**: 
    -  Удобные языки для создания игр. Есть удобные редакторы под них (Unity, Unreal Engine, Godot)

## 3.ГРАФИКА:
- **Adobe**: 2d графика
- **Aseprite**: популярная программа для аннимаций 2д объектов
- **Pixel Studio**: популярная программа на телофон для аннимаций 2д объектов
	> `MarkVRKS`: Я бы предпочёл выбрать что-нибудь готовое, только лишь исправить текстуру. Изменить цвета, блики, оттенки и т.п.

## 4.ЗВУК (РЕСУРСЫ ЗВУКА)
- **Audacity**: 
	- редактор звука [AUDACITY](https://www.audacityteam.org/download/)

- **Free sound resourse**: 
	- бесплатные звуковые ресурсы[FREESOUND](https://freesound.org/)

## 5.ФУНКЦИОНАЛ ИГРЫ
- **Игровой процесс**: 
     -  Возможность перемещения
     -  Взаимодействие с объектами (NPC, лут)
     -  Решение разнообразных задач и головоломок
     -  Возможность к файтингу (против NPC)
     -  Возможность к сохранению, загрузок новых локаций
- **Пользовательский интерфейс**: 
     -  Меню (Главное меню, возможность пересмотреть сюжетные диалоги, настройки управления)
     -  Инвентарь (Возможность складывать/доставать и использовать вещи в инвентаре)
     -  Картография (Доступ главного героя посмотреть карту, узнать его местоположения, проложить путь и т.д.)
- **ПОЛЕЗНЫЕ ССЫЛКИ**: 
    - C++: https://habr.com/ru/articles/708486/
    -JavaScript: https://habr.com/ru/articles/762132/


# Задачи на предстоящий период :clock10:
- [X] Распределились по ролям
- [X] Определились, на чём мы будем программировать
- [x] Определились с сутью нашей игры
- [ ] Придумали сюжет
- [ ] Создали ассеты персонажей
- [ ] Проработали герерацию ландшафта
- [ ] Осуществили возможность пользователя к передвижению своего персонажа
- [ ] Депнули по 150

## КОНЦЕПЦИЯ
- **Жанр**: Приключенческая игра с элементами головоломки, открытым миром (условно открытым) и RPG.
> [!IMPORTANT]
> Игра должна быть интересной, интригующей и заставлять игрока задаваться вопросами. Подумай о главном персонаже, мотивах, конфликте, поворотных моментах, финале..
- **Сюжет**: 
    - Главные герои: 
    - 1. Элиас
    - 2. Гризельда
    - История Героя: 1.  Элиас -  таинственный воин, который когда-то был частью великого ордена защитников, но после трагедии утратил голос. Его мечи и боевые навыки делают его страшным противником в бою, но его истинная цель — найти способ преодолеть своё горе и вернуть мир в свою душу. Для этого он спускается в подземелья, полные опасностей и секретов.
                        2.  Гризельда -  молодая колдунья с выдающимися способностями к некромантии. У неё есть таинственное прошлое, полное утрат и предательств. Подземелья, которые она исследует, полны тёмной магии, и она ищет способ освободить душ своих предков, попавших в плен. Её личность скромна, но при этом в ней горит огонь решимости.
> [!TIP]
> Более подробный лор персонажей мы выкатим чуть-чуть попозже
- **Персонажи**:
    - Главные герои: 
        -  Элиас
        -  Гризельда
    - История Героя: 
    >  `Элиас`:   таинственный воин, который когда-то был частью великого ордена защитников, но после трагедии утратил голос. Его мечи и боевые навыки делают его страшным противником в бою, но его истинная цель — найти способ преодолеть своё горе и вернуть мир в свою душу. Для этого он спускается в подземелья, полные опасностей и секретов.

    > `Гризельда`:   молодая колдунья с выдающимися способностями к некромантии. У неё есть таинственное прошлое, полное утрат и предательств. Подземелья, которые она исследует, полны тёмной магии, и она ищет способ освободить душ своих предков, попавших в плен. Её личность скромна, но при этом в ней горит огонь решимости.
    
- **Локации**: Основными локациями игры являются подземелья.
    - Дунье
        > Подземелье Дунье – это древнее и таинственное место, которое уже много лет пустует. Оно находится глубоко под землей и окутано мраком и тишиной. Никто точно не знает, кто или что обитало здесь изначально, но многие легенды рассказывают о древних существах, которые могли жить в этих темных пещерах. Сейчас же Дунье стало местом для исследований и приключений, где искатели сокровищ и авантюристы могут найти скрытые богатства и опасности.

    - Левербентум
        > Подземелье Левербентум – это древний подземный комплекс, который когда-то был домом для могущественных дворфов-алхимиков. Они славились своими экспериментами и созданием сложных механических устройств. Эти механизмы служили как для защиты подземелья, так и для проведения алхимических опытов. Подземные ходы и комнаты украшены разнообразными механизмами, некоторые из которых все еще работают, издавая причудливые звуки и создавая удивительные световые эффекты. Здесь можно найти остатки старых лабораторий, загадочные артефакты и, возможно, даже следы великих открытий, сделанных этими легендарными мастерами. Однако, с течением времени, подземелье начало привлекать внимание различных монстров и существ, которые нашли убежище в его глубинах.
        
    - Квайстоун
        > Подземелье Квайстоун – это великолепная сеть пещер, населенная необычными существами, обладающими чувствительным слухом. Они очень восприимчивы к громким звукам, так как опасаются обвалов, которые могут разрушить их хрупкий дом. Все вокруг здесь выглядит сверкающим и ярким благодаря природным кристаллам, которые освещают пещеры, придавая им волшебную атмосферу. Свет отражается от стен, создавая иллюзию движения и жизни в каждом уголке этого подземелья. Монстры, обитающие в Нойзстоуне, также обладают сверхчувствительным слухом и предпочитают вести тихую жизнь. Некоторые из них имеют уникальные способности, такие как управление светом или создание иллюзий.
        
    - Дипбейн
        > Подземелье Дипбейн – это мрачное и опасное место, населенное самыми ужасными существами, от одного вида которых у вас пробегают мурашки по коже. Здесь царит вечная тьма, разбавленная лишь слабым мерцанием редких кристаллов, дающих тусклый свет. Единственная видимая тропа ведет через узкую шахту, которая кишит различными монстрами, жаждущими крови. Несмотря на всю опасность, в Дипбейне могут скрываться несметные сокровища, которые оставили после себя древние цивилизации. Однако, чтобы добраться до них, необходимо преодолеть множество испытаний и справиться с бесконечным страхом, витающим в воздухе этого жуткого места.
        
    - Нойзшафт
        > Подземелье Нойзшафт – это обширная система туннелей и пещер, наполненная гулким эхом от звуков движущихся вагонеток. Здесь обитает некоторая разумная раса, чья культура и образ жизни связаны с добычей руды и управлением сложной системой железнодорожного транспорта. Однако, несмотря на технологическое развитие, эта раса находится в состоянии постоянной тревоги и недоверия к чужакам. Туннели Нойзшафта заполнены звуками скрипучих колес, сигналов и грохота камней, что создает атмосферу напряжения и угрозы. Видно, что эта раса приложила немало усилий для создания сложной системы коммуникаций и обороны, но их подозрительность делает взаимодействие с ними крайне затруднительным. На протяжении всего подземелья можно заметить укрепления, ловушки и сторожевые башни, которые служат напоминанием о необходимости быть начеку. Хотя эта раса может показаться недружелюбной, ее изобретательность и мастерство в управлении техникой делают Нойзшафт захватывающим и опасным местом для исследователей и авантюристов.
> [!WARNING]
> Нойзшафт - самый трудный уровень подземелий, пройти его смогут единицы. Сложность начинается от генерации подземельями и заканчивается монстрами на них

- **Монстры**: 

    - Урхан
        > Древние существо, похожее на больших паука, но с рогами и шипами по всему телу. Он обладает невероятной силой и выносливостью, может плести крепкие сети и использовать их как оружие. Урханы живут в глубочайших пещерах Дунье, где они охотятся на заблудших путников и защищают свои гнезда.

    - Думгаарды
        > Темный дух, заключенный в каменные оболочки. Они обитают в самых мрачных и труднодоступных частях подземелья. Думгаарды питаются энергией страха и отчаяния, поэтому они часто провоцируют чувство ужаса у тех, кто осмелился проникнуть в их владения. Эти духи могут принимать различные формы, чтобы запутать своих противников и увеличить страх перед собой.

    - Заражённый дворф
        > Подопытный дворфов-учёных. Настоящий мученник: он покрыт шрамами и ожогами, его тело нудит и куски плоти отходят от костей.

    - Дворф химик
        > Сумасшедший учёный. Лучше держаться от него подальше, ведь чёрт знает, что у него в голове...

    - Голем
        > Окаменелая статуя, достаточно крепкая. Вся обросла мхом и от нее почему-то странное пахнет серой...
    
    - Грудд
        > Эмбрион, небольшого роста. Очень шустрый, но очень слабый.
    
    - Квайн
        > Существо, не выделяющееся высоким ростом. Длинные руки и длинные ноги. Хиленькие, но сильные.
    
    - Летучая мышь
        > Обычная летучая мышь. Или необычная?..
    
    - Гримстроук
        > Существо, обладающее навыками гравитации. Способно нанести большой урон по вам, если вы потеряете много брони.
   
    - Бэйн
        - Уродливое и непонятное создание. Никто не знает, как и при каких обстоятельствах оно появилось. 
    
    - Шифтер
        > Шифтер может появится из неоткуда. Ведь его попросту не видно. Если вас кто-то внезапно начнет атаковать, то знайте - это шифтер.
    
    - `Чант`
        > Существо, атакующее вас своими звуками и порой, эти звуки действуют на нервы. Возможно его мозгодробительный голос является причиной того, что он засел так глубоко в шахтах.
> [!CAUTION]
> Очень сильный моб, попадается исключительно на пятом уровне подземелий
    
    - `Сквик`
        > Шахтёр. Который очень не любит когда его работе мешают долгорослики, такие как вы. Пока он вас не убьёт - можете не ожидать спокойствия\
        
> [!CAUTION]
> Очень сильный моб, попадается исключительно на пятом уровне подземелий
 
    - `Кристен`
        > Ходят легенды, что Кристен погиб сотни лет назад, под завалами пещер Нойзшафт. Видимо, вы наткнулись на его духа. Слабых мест - не изучено, их наверное и нету.
        
> [!CAUTION]
> Очень сильный моб, попадается исключительно на пятом уровне подземелий




