<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="../../md/Images/JadeClient-Banner.png" alt="Jade Client" width="200" height="200"></a>
  <br>Yarn Installation Guide<br>
</h1>

<p align="center">This guide will walk you through the process of installing Yarn on your computer.</p>

<h3 align="center">Setup by OS:</h3>
<p align="center">
  <a href="#windows">Windows Setup</a> •
  <a href="#mac-homebrew">Mac (Homebrew) Setup</a> •
  <a href="#mac-macports">Mac (MacPorts) Setup</a> •
  <a href="#linux-debianubuntu">Linux (Debian/Ubuntu) Setup</a> •
  <a href="#linux-fedora">Linux (Fedora) Setup</a>
</p>

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

    ```ps
    brew install yarn
    ```

3. Press "Enter" to begin the installation.
4. Wait for the installation to complete.

### Mac (MacPorts)

1. Open a terminal window.
2. Enter the following command:

    ```ps
    sudo port install yarn
    ```

3. Press "Enter" to begin the installation.
4. Wait for the installation to complete.

### Linux (Debian/Ubuntu)

1. Open a terminal window.
2. Enter the following commands:

    ```ps
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update && sudo apt-get install yarn
    ```

3. Press "Enter" to begin the installation.
4. Wait for the installation to complete.

### Linux (Fedora)

1. Open a terminal window.
2. Enter the following commands:

    ```ps
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
