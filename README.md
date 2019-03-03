# rent-a-book

###    **FONTOS!** 
###    **Ne felejtsétek lehuzni a változésokat a *development* branchről mielött neki álltok csinálni dolgokat.**

```bash
$ git pull origin development
```

----------

<details><summary><b>Install Tutorial<b></summary>

**Itt egy összegzés, hogy mit kéne csináljatok, hogy menjen.**

**1. Install**

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)
- [XAMPP](https://www.apachefriends.org/index.html)
    
    *Optional*
- [VS Code](https://code.visualstudio.com/)

**2. Github Account**
    
Registráljatok a github-ra, és küldjétek el nekem a github felhasználó nevet.

**3. Git SSH**

- Csináljatok egy projekt foldert valahova
- Jobb click a folderben, és nyissatok egy *Git Bash*t és írjátok be ezt:

    `ssh-keygen`

- Nyomjatok mindenre entert, és jegyezzétek meg a .ssh path-jét
- Nyissátok meg a `.ssh/id_rsa.pub`-t notepad-el, vagy 

    `cat [path ide]/.ssh/id_rsa.pub`

- A github profil settings-nél adjatok hozza egy új SSH kulcsot,
és másoljátok bele a `id_rsa.pub` tartalmát

**4. Git Clone**

Vissza téve a *Git Bash*ben:

```bash
$ git config --global user.name [egy név, nem számít]
$ git config --global user.email [egy email, nem számít]
$ git clone git@github.com:fwind4/rent-a-book.git
```

**5. Node Init**

```bash
$ cd rent-a-book
$ npm i -g nodemon
$ npm install
```

**6. Db Setup**

- Inditsátok el az XAMPP-ban az adatbázist
- Egy browserbe irjátok be, hogy [localhost/phpmyadmin](http://localhost/phpmyadmin)
- Jelenkezzetek be (alapértelmezetten a felhasználó: `root`, jelszó üres) 
    és csináljatok egy új adatbázist, jegyezzétek meg a nevét
- A projekt folderbe nyissatok megint *Git Bash*t, és:
```bash
$ cp config/config.demo.json config/config.json 
```
- A létrejott `config.json`-ben írjátok át ezt a részt (használjatok idézőjeleket):
```json
"development": {
    "username": "[db felhasznalo]",
    "password": "[db pass]",
    "database": "[db amit létrehoztatok]",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```

**Kéne menjen**

```bash
$ npm run monstart 
```

[localhost:3000](http://localhost:3000/)

**7. Általános Git**

```bash
$ git checkout -b [branch nev] # új branch létrehozás
$ git checkout [branch nev] #letező branch kiválasztás
$ git add .
$ git commit -m [egy leirár amit csináltatok]
$ git push origin [branch nev]
$ git pull origin [branch nev]
```

</details>

----------

<details><summary>Terv</summary>

1. Táblak/Modellek

- User: 
    - firstName
    - lastName
    - email
    - passwordHash
- Library:
    - userId
    - bookId
- Book:
    - title
    - author
    - description
    - path

2. Feluletek/Views

- Navbar : *Barni*
- Login, Signup : passport - *Csabi*
    - login.ejs - *Alpár*
    - signup.ejs - *Alpár*
- Fő oldal *Barni*
- Dashboard : 
    - Active user list *Csabi*
    - Selected user book list *Csabi*
- Search : search.ejs *Barni*
- Profile
    - profile.ejs *Alpár*

3. Socket IO/WebSocket
    - userek közötti könyv megosztás

4. Tanulás, Dokumentálodás

- jQuery.ajax
- Node js
- Express js
- Sequelize js

</details>
