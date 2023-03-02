<h1 align="center">
  <br>
    <a href="https://github.com/justCallMejade/djs-jade2.0">
      <img src="../../md/Images/JadeClient Banner.png" alt="Jade Client" width="200" height="200">
    </a>
  <br>Yarn Installation Guide<br>
</h1>

<p align="center">Yarn is a package manager for JavaScript programming language that provides an alternative to npm, the default package manager for Node.js. It was developed by Facebook to address some of the limitations and performance issues in npm. Yarn allows for faster, more secure and reliable installation of packages by utilizing a caching mechanism and parallel execution. This guide will walk you through the process of installing Yarn on your computer.</p>

<div align="center">
  <a href="https://yarnpkg.com/en/docs/install">
    <img src="../Images/Yarn%20Download%20Page.jpg" alt="Yarn Download Page" width="500">
  </a>
</div>

---

<h3 align="center">Setup by OS:</h3>
<p align="center">
  <a href="#windows">Windows Setup</a> •
  <a href="#mac-homebrew">Mac (Homebrew) Setup</a> •
  <a href="#mac-macports">Mac (MacPorts) Setup</a> •
  <a href="#linux-debianubuntu">Linux (Debian/Ubuntu) Setup</a> •
  <a href="#linux-fedora">Linux (Fedora) Setup</a>
</p>

---

## Step 1: Download Yarn

Go to the **[Yarn website](https://yarnpkg.com/en/docs/install)** and download the appropriate version for your operating system.

## Step 2: Install Yarn

### Windows

1. Double-click the downloaded file to open the Yarn Setup Wizard.
2. Click "Next" to begin the installation process.
3. Read and accept the license agreement.
4. Choose the installation destination.
5. Choose the start menu folder for the Yarn shortcuts.
6. Choose the additional tasks you want to perform.
7. Click "Install" to begin the installation.
8. Wait for the installation to complete.
9. Click "Finish" to complete the installation.

### Mac (Homebrew)

1. Open a terminal window.
2. Enter the following command:

    ```bash
    brew install yarn
    ```

3. Press "Enter" to begin the installation.
4. Wait for the installation to complete.

### Mac (MacPorts)

1. Open a terminal window.
2. Enter the following command:

    ```bash
    sudo port install yarn
    ```

3. Press "Enter" to begin the installation.
4. Wait for the installation to complete.

### Linux (Debian/Ubuntu)

1. Open a terminal window.
2. Enter the following commands:

    ```bash
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update && sudo apt-get install yarn
    ```

3. Press "Enter" to begin the installation.
4. Wait for the installation to complete.

### Linux (Fedora)

1. Open a terminal window.
2. Enter the following commands:

    ```bash
    sudo dnf install curl
    curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
    sudo dnf install yarn
    ```

3. Press "Enter" to begin the installation.
Wait for the installation to complete.

## Step 3: Verify Installation

To verify that Yarn has been installed correctly, open a terminal window and enter the following command:

```ps
yarn --version
```

If Yarn has been installed correctly, the version number should be displayed.

**Congratulations, you have successfully installed Yarn on your computer!**
