<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="../../md/Images/JadeClient-Banner.png" alt="Jade Client" width="200" height="200"></a>
  <br>Node.js Installation Guide<br>
</h1>

<p align="center">This guide will walk you through the process of installing Node.js on your computer.</p>

<h3 align="center">Setup by OS:</h3>
<p align="center">
  <a href="#windows">Windows Setup</a> •
  <a href="#mac">Mac Setup</a> •
  <a href="#linux-debianubuntu">Linux (Debian/Ubuntu) Setup</a> •
  <a href="#linux-fedora">Linux (Fedora) Setup</a>
</p>

## Step 1: Download Node.js

Go to the Node.js website and download the appropriate version for your operating system.

## Step 2: Install Node.js

### Windows

1. Double-click the downloaded file to open the Node.js Setup Wizard.
2. Click "Next" to begin the installation process.
3. Read and accept the license agreement.
4. Choose the installation destination.
5. Select the components to install.
6. Choose the start menu folder for the Node.js shortcuts.
7. Choose the additional tasks you want to perform.
8. Click "Install" to begin the installation.
9. Wait for the installation to complete.
10. Click "Finish" to complete the installation.

### Mac

1. Double-click the downloaded file to open the Node.js installer package.
2. Click "Continue" to begin the installation process.
3. Read and accept the license agreement.
4. Choose the installation destination.
5. Click "Install" to begin the installation.
6. Enter your computer's administrator password when prompted.
7. Wait for the installation to complete.
Click "Close" to complete the installation.

### Linux (Debian/Ubuntu)

1. Open a terminal window.
Enter the following commands:

    ```console
    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

2. Press "Enter" to begin the installation.
3. Wait for the installation to complete.

### Linux (Fedora)

1. Open a terminal window.
2. Enter the following commands:

    ```console
    sudo dnf install -y gcc-c++ make
    curl -sL <https://rpm.nodesource.com/setup_16.x> | sudo bash -
    sudo dnf install -y nodejs
    ```

3. Press "Enter" to begin the installation.
4. Wait for the installation to complete.

## Step 3: Verify Installation

To verify that Node.js has been installed correctly, open a terminal window and enter the following command:

```powershell
node -v
```

If Node.js has been installed correctly, the version number should be displayed.

**Congratulations, you have successfully installed Node.js on your computer!**
