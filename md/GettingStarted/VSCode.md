<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="../../md/Images/JadeClient-Banner.png" alt="Jade Client" width="200" height="200"></a>
  <br> VSCode Installation Guide <br>
</h1>

<p align="center"> This guide will walk you through the process of installing Visual Studio Code (VSCode) on your computer.</p>

<h3 align="center">Setup by OS:</h3>
<p align="center">
  <a href="#windows">Windows Setup</a> •
  <a href="#mac">Mac Setup</a> •
  <a href="#linux-debianubuntu">Linux (Debian/Ubuntu) Setup</a> •
  <a href="#linux-fedora">Linux (Fedora) Setup</a>
</p>

## Step 1: Download VSCode

Go to the **[VSCode website](https://code.visualstudio.com/download)** and download the appropriate version for your operating system.

## Step 2: Install VSCode

### Windows

1. Double-click the downloaded file to open the VSCode Setup Wizard.
2. Click "Next" to begin the installation process.
3. Read and accept the license agreement.
4. Choose the installation destination.
5. Choose the additional tasks you want to perform.
6. Choose the start menu folder for the VSCode shortcuts.
7. Choose the additional tasks you want to perform.
8. Click "Next" to begin the installation.
9. Wait for the installation to complete.
10. Click "Finish" to complete the installation.

### Mac

1. Double-click the downloaded file to open the VSCode installer package.
2. Drag and drop the VSCode icon to the Applications folder.
3. Wait for the installation to complete.

### Linux (Debian/Ubuntu)

1. Open a terminal window.
2. Enter the following commands:

    ```console
    sudo apt-get update
    sudo apt-get install -y software-properties-common apt-transport-https wget
    wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
    sudo apt-get update
    sudo apt-get install -y code
    ```

3. Press "Enter" to begin the installation.
4. Wait for the installation to complete.

### Linux (Fedora)

1. Open a terminal window.
2. Enter the following commands:

    ```console
    sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
    sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
    sudo dnf install -y code
    ```

3. Press "Enter" to begin the installation.
4. Wait for the installation to complete.

## Step 3: Open VSCode

To open VSCode, find the VSCode icon in your applications or search for "Visual Studio Code" in your Start menu. Double-click the icon to launch VSCode.

**Congratulations, you have successfully installed VSCode on your computer!**
