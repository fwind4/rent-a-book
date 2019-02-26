# rent-a-book

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
    "username": [db felhasznalo],
    "password": [db pass],
    "database": [db amit létrehoztatok],
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```

**Kéne menjen**

```bash
$ npm run monstart 
```

[localhost:3000](http://localhost:3000/)