## mysql 설치 방법
1. homebrew 설치 
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2. MySQL 설치 
    ```bash
    $ brew install mysql 
    $ brew services start mysql
    $ mysql_secure_installation
    $ mysql -u root -p
    ```
3. workbench 설치 
    ```bash
    $ brew cask install mysqlworkbench
    ```

## MySQL 설치 - Linux(server)
    ```bash
    $ apt-get update
    $ sudo apt-get install mysql-server
    $ mysql -u root -p
    ```