<h1 align="center">
  <br>
    <a href="https://github.com/justCallMejade/djs-jade2.0">
      <img src="../../md/Images/JadeClient Banner.png" alt="Jade Client" width="200" height="200">
    </a>
  <br>PostgreSQL Installation Guide<br>
</h1>

<p align="center">PostgreSQL is an open-source relational database management system that provides powerful and reliable database solutions. This guide will walk you through the process of installing and setting up PostgreSQL on your computer.</p>

<div align="center">
  <a href="https://www.postgresql.org/download/">
    <img src="../Images/PostgreSQL%20Download%20Page.jpg" alt="PostgreSQL Download Page" width="500">
  </a>
</div>

---

<h3 align="center">Setup by OS:</h3>
<p align="center">
  <a href="#windows">Windows Setup</a> •
  <a href="#mac">Mac Setup</a> •
  <a href="#linux-debianubuntu">Linux (Debian/Ubuntu) Setup</a> •
  <a href="#linux-fedora">Linux (Fedora) Setup</a>
</p>

---

## **Step 1: Download PostgreSQL**

Go to the **[PostgreSQL website](https://www.postgresql.org/download/windows/)** and download the appropriate version for your operating system.

## **Step 2: Install PostgreSQL**

### Windows

1. Double-click the downloaded file to open the PostgreSQL Setup Wizard.
2. Click "Next" to begin the installation process.
3. Read and accept the license agreement.
4. Choose the installation destination and data directory.
5. Choose the components you want to install.
6. Choose the port number for PostgreSQL to use.
7. Set the superuser password for the PostgreSQL server.
8. Click "Next" to begin the installation.
9. Wait for the installation to complete.
10. Click "Finish" to complete the installation.

### Mac

1. Double-click the downloaded file to open the PostgreSQL installer.
2. Follow the on-screen instructions to install PostgreSQL.
3. Wait for the installation to complete.

### Linux (Debian/Ubuntu)

1. Open a terminal window.
2. Enter the following command to add the PostgreSQL repository:

    ```bash
    sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
    ```

3. Enter the following commands to import the repository signing key and update the package list:

    ```bash
    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
    sudo apt update
    ```

4. Enter the following command to install PostgreSQL:

    ```bash
    sudo apt install postgresql postgresql-contrib
    ```

5. Wait for the installation to complete.

### Linux (Fedora)

1. Open a terminal window.
2. Enter the following command to install PostgreSQL:

    ```bash
    sudo dnf install postgresql-server
    ```

3. Enter the following command to initialize the database:

    ```bash
    sudo postgresql-setup --initdb
    ```

4. Enter the following command to start the PostgreSQL service:

    ```bash
    sudo systemctl start postgresql
    ```

5. Wait for the installation to complete.

**Congratulations, you have successfully installed PostgreSQL on your computer!**
